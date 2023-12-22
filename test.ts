
const lorem = "<wavy>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

let myTextSprite: fancyText.TextSprite = null
myTextSprite = fancyText.create(lorem)

myTextSprite.setMaxLines(3)

controller.moveSprite(myTextSprite)

fancyText.setMaxWidth(myTextSprite, 160)

myTextSprite.setFlag(SpriteFlag.Invisible, true);

myTextSprite.x = 80;
myTextSprite.y = 60;

game.onShade(() => {
    const left = 10, top = 10, width = 20, height = 40;

    screen.fillRect(myTextSprite.left, myTextSprite.top, myTextSprite.width, myTextSprite.height, 2);
    screen.fillRect(left, top, width, height, 3);

    screen.printCenter(`${Math.round(myTextSprite.left)} ${Math.round(myTextSprite.top)}`, 100, 1)

})

game.stats = true