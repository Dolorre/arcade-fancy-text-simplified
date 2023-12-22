# create text sprite

Creates a new TextSprite with the given text. TextSprites can be used with any of the blocks that you can use with a regular [Sprite](/types/sprite). TextSprites have the SpriteKind `FancyText` by default.

```sig
let myTextSprite = fancyText.create("Hello, World!", 100, fancyText.defaultArcade)
```

## Parameters

* **text**: the text for the TextSprite to display
* **maxWidth**: the maximum width the text can occupy. If the text is wider than this width, it will be broken up into multiple lines
* **font**: the font to use when drawing the text

### Line breaks

TextSprites are drawn in a single line unless they are given a maximum width. With a maximum width, the text will be broken up into multiple lines automatically based on where spaces occur in the text. You can also force a line break to happen by entering `\n` in the text.

If you need to figure out the actual width or height of the TextSprite after lines have been broken up, use the width/height properties from the Sprites category.

#### Color tag

| Tag                           | Effect 
| ----------------------------- | ---------------------------------------
| `white`/`color1`/`c1`         | Prints text in white (color index 1)


#### Animation speed modifiers

These tags can be used to control how quickly text is printed when animating. They only have an effect when characters are being printed using the [animate at speed](./animate-at-speed) or [animate for time](./animate-for time) blocks.

| Tag                           | Effect 
| ----------------------------- | ---------------------------------------
| `veryslow`                    | Slows the animation speed down to 1/12th
| `slow`                        | Slows the animation speed down to 1/4th
| `fast`                        | Ups the animation speed to 2x
| `veryfast`                    | Ups the animation speed to 4x

## Example #example

In this example we create a TextSprite using the "gothic large" font and make it bounce around the screen.


```blocks
let myTextSprite = fancyText.create("Hello World", 100)
myTextSprite.vx = 80;
myTextSprite.vy = 60;
```

```package
arcade-fancy-text=github:riknoll/arcade-fancy-text
```