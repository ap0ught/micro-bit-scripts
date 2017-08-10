let last = 0
let random = 0
input.onButtonPressed(Button.A, () => {
    images.createImage(`
        # . . . #
        . # # # .
        . . # . .
        . # # # .
        # . . . #
        `).showImage(0)
    basic.pause(1000)
    basic.showIcon(IconNames.Sad)
    basic.pause(1000)
    basic.clearScreen()
    basic.pause(1000)
    basic.showString("bye.")
    basic.pause(1000)
    basic.clearScreen()
})
input.onGesture(Gesture.Shake, () => {
    while (last == random) {
        random = Math.random(9)
    }
    last = random
    basic.showNumber(random)
})
input.onButtonPressed(Button.AB, () => {
    for (let i = 0; i < 2; i++) {
        basic.showString("Hello!")
    }
    basic.clearScreen()
})
input.onButtonPressed(Button.B, () => {
    basic.showLeds(`
        # . # . #
        . # . # .
        # . # . #
        . # . # .
        # . # . #
        `)
    basic.pause(1000)
    basic.showIcon(IconNames.Happy)
    basic.pause(1000)
    basic.showString("bye.")
    basic.clearScreen()
})
