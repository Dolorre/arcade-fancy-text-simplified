namespace fancyText {
    export enum Tag {
        Color01 = 1 << 0,
        Font8 = 1 << 1,
        VerySlow = 1 << 2,
        Slow = 1 << 3,
        Fast = 1 << 4,
        VeryFast = 1 << 5
    }

    export class Span {
        constructor(public offset: number, public length: number, public flags: number) {}
    }

    export class Line {
        spans: Span[];
        height: number;
        width: number;

        constructor() {
            this.spans = [];
            this.height = 0;
            this.width = 0;
        }

        updateDimensions(defaultFont: fancyText.BaseFont, text: string) {
            this.width = 0;
            this.height = 0;

            for (const span of this.spans) {
                const font = getFontForSpan(span.flags) || defaultFont;
                this.width += getTextWidth(font, text, span.offset, span.offset + span.length);
                this.height = Math.max(this.height, font.lineHeight)
            }
        }
    }

    class ParseState {
        offset: number;
        flags: number;
        spanStart: number;

        constructor() {
            this.offset = 0;
            this.flags = 0;
            this.spanStart = 0;
        }
    }

    export function getSpans(text: string) {
        let state = new ParseState();
        const spans: Span[] = [];

        while (state.offset < text.length) {
            if (text.charAt(state.offset) === "<") {
                const newState = eatTag(text, state);

                if (newState !== state) {
                    const length = state.offset - state.spanStart;
                    if (length) {
                        spans.push(new Span(state.spanStart, length, state.flags));
                    }
                    state = newState;
                }
                else {
                    state.offset++;
                }
            }
            else {
                state.offset++;
            }
        }

        const lastSpan = spans[spans.length - 1];

        if (!lastSpan || state.spanStart !== lastSpan.offset) {
            spans.push(new Span(state.spanStart, state.offset - state.spanStart, state.flags));
        }

        return spans;
    }

    function isWhitespace(charCode: number) {
        return charCode <= 32;
    }
    function isLowerCaseLetter(charCode: number) {
        return charCode >= 97 && charCode <= 122;
    }
    function isUpperCaseLetter(charCode: number) {
        return charCode >= 65 && charCode <= 90;
    }
    function isNumber(charCode: number) {
        return charCode >= 48 && charCode <= 57;
    }

    function eatTag(text: string, state: ParseState) {
        const isCloseTag = text.charAt(state.offset + 1) === "/";
        let start = state.offset + 1;

        if (isCloseTag) start++;

        while (isWhitespace(text.charCodeAt(start)) && start < text.length) {
            start++;
        }

        let current = start;
        let tagName = "";

        while (current < text.length) {
            const charCode = text.charCodeAt(current);

            if (isLowerCaseLetter(charCode) || isUpperCaseLetter(charCode) || isNumber(charCode)) {
                tagName += String.fromCharCode(isUpperCaseLetter(charCode) ? charCode + 32 : charCode);
                current++;
            }
            else if (charCode === /* > */ 62) {
                current++;
                break;
            }
            else if (isWhitespace(charCode)) {
                current++;
            }
            else {
                // Invalid tag
                return state;
            }
        }

        const flag = getTagFlag(tagName);

        if (!flag || (isCloseTag && !(state.flags & flag))) return state;

        const newState = new ParseState();
        newState.offset = current;
        newState.spanStart = current;
        newState.flags = state.flags;

        if (isCloseTag) {
            newState.flags &= ~flag
        }
        else {
            newState.flags |= flag;
        }

        return newState;
    }

    function getTagFlag(name: string) {
        switch (name) {
            case "white":
                return Tag.Color01;       
            case "medium":
            case "font8":
                return Tag.Font8;
            case "veryslow":
                return Tag.VerySlow;
            case "slow":
                return Tag.Slow;
            case "fast":
                return Tag.Fast;
            case "veryfast":
                return Tag.VeryFast;
        }

        return 0;
    }

    export function getFontForSpan(flags: number) {
            return new fancyText.LegacyFont(image.font8);
                    
        return undefined;
    }


    export function getLines(text: string, spans: Span[], maxWidth: number, defaultFont: BaseFont) {
        const lines: Line[] = [];
        let currentLine = new Line();

        for (let spanIndex = 0; spanIndex < spans.length; spanIndex++) {
            const currentSpan = spans[spanIndex]
            const font = getFontForSpan(currentSpan.flags) || defaultFont;
            maxWidth = Math.max(maxWidth, font.wordSpacing);

            let charIndex = 0;
            let lastBreakLocation = 0;
            let lastWhitespaceLocation = -1;

            function pushSpan(start: number, end: number, newLine: boolean, delta: number) {
                if (currentLine.spans.length === 0 && isWhitespace(text.charCodeAt(currentSpan.offset + start))) {
                    start++;
                }
                currentLine.spans.push(
                    new Span(
                        currentSpan.offset + start,
                        end - start,
                        currentSpan.flags
                    )
                );
                currentLine.updateDimensions(defaultFont, text)
                // printLine(currentLine);

                charIndex = end + delta
                if (newLine) {
                    lines.push(currentLine);
                    currentLine = new Line();
                    lastBreakLocation = end;
                    lastWhitespaceLocation = end;
                }
            }

            while (charIndex < currentSpan.length) {
                if (text.charAt(currentSpan.offset + charIndex) === "\n") {
                    pushSpan(lastBreakLocation, charIndex, true, 1);
                }
                // Handle \\n in addition to \n because that's how it gets converted from blocks
                else if (text.charAt(currentSpan.offset + charIndex) === "\\" && text.charAt(currentSpan.offset + charIndex + 1) === "n") {
                    pushSpan(lastBreakLocation, charIndex, true, 2);
                    lastBreakLocation += 2;
                }
                else if (currentLine.width + getTextWidth(font, text, lastBreakLocation, charIndex + 1) > maxWidth) {
                    if (lastWhitespaceLocation <= lastBreakLocation && currentLine.spans.length === 0) {
                        pushSpan(lastBreakLocation, charIndex, true, 1);
                    }
                    else {
                        pushSpan(lastBreakLocation, Math.max(lastWhitespaceLocation, 0), true, 1);
                    }
                }
                else if (isWhitespace(text.charCodeAt(currentSpan.offset + charIndex))) {
                    lastWhitespaceLocation = charIndex;
                    charIndex++;
                }
                else {
                    charIndex++;
                }
            }

            if (charIndex > lastBreakLocation) {
                pushSpan(lastBreakLocation, currentSpan.length, false, 1);
            }
        }
        lines.push(currentLine)

        return lines;
    }
}