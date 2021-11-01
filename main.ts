input.onButtonPressed(Button.A, function () {
    game.addScore(1)
    basic.pause(500)
    basic.showNumber(game.score())
})
input.onButtonPressed(Button.AB, function () {
    game.gameOver()
})
input.onButtonPressed(Button.B, function () {
    game.addScore(1)
    basic.pause(500)
    basic.showNumber(game.score())
})
