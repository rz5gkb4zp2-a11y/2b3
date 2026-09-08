input.onButtonPressed(Button.A, function () {
    if (sprite.get(LedSpriteProperty.X) == 0) {
        game.addScore(1)
    } else if (sprite.get(LedSpriteProperty.X) == 4) {
        game.addScore(1)
    } else {
        game.gameOver()
    }
})
let sprite: game.LedSprite = null
sprite = game.createSprite(2, 2)
basic.forever(function () {
    sprite.move(1)
    basic.pause(200)
    sprite.ifOnEdgeBounce()
})
