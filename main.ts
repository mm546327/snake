input.onGesture(Gesture.LogoUp, function () {
    蛇.change(LedSpriteProperty.Y, 1)
})
input.onGesture(Gesture.LogoDown, function () {
    蛇.change(LedSpriteProperty.Y, -1)
})
input.onGesture(Gesture.TiltLeft, function () {
    蛇.change(LedSpriteProperty.X, -1)
})
input.onGesture(Gesture.TiltRight, function () {
    蛇.change(LedSpriteProperty.X, 1)
})
let 蛇: game.LedSprite = null
蛇 = game.createSprite(2, 2)
let 點 = game.createSprite(randint(0, 4), randint(0, 4))
basic.forever(function () {
    if (蛇.isTouching(點)) {
        game.addScore(1)
        點.delete()
        basic.pause(100)
        點 = game.createSprite(randint(0, 4), randint(0, 4))
    }
    if (game.score() == 10) {
        basic.showIcon(IconNames.Happy)
        music.playMelody("D F A B C5 G E C ", 120)
        game.gameOver()
    }
})
