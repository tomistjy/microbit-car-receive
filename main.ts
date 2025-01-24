radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        cbit_小车类.CarCtrlSpeed(cbit_小车类.CarState.Car_Run, 200)
        basic.showLeds(`
            . . # . .
            . # # # .
            # . # . #
            . . # . .
            . . # . .
            `)
    } else if (receivedNumber == 2) {
        cbit_小车类.CarCtrlSpeed(cbit_小车类.CarState.Car_Run, 200)
        basic.showLeds(`
            . . # . .
            . . # . .
            # . # . #
            . # # # .
            . . # . .
            `)
    } else if (receivedNumber == 3) {
        cbit_小车类.CarCtrlSpeed(cbit_小车类.CarState.Car_Run, 175)
        basic.showLeds(`
            . . # . .
            . # . . .
            # # # # #
            . # . . .
            . . # . .
            `)
    } else if (receivedNumber == 4) {
        cbit_小车类.CarCtrlSpeed(cbit_小车类.CarState.Car_Run, 175)
        basic.showLeds(`
            . . # . .
            . . . # .
            # # # # #
            . . . # .
            . . # . .
            `)
    } else if (receivedNumber == 0) {
        cbit_小车类.CarCtrl(cbit_小车类.CarState.Car_Run)
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
    } else {
        cbit_小车类.CarCtrl(cbit_小车类.CarState.Car_Run)
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
    }
})
radio.setGroup(1)
cbit_小车类.RGB_Car_Big(170, 170, 170)
cbit_小车类.RGB_Car_Program().show()
cbit_小车类.RGB_Car_Program().showColor(neopixel.colors(NeoPixelColors.White))
loops.everyInterval(500, function () {
    if (cbit_小车类.Ultrasonic_Car() < 5) {
        radio.sendNumber(100)
    }
})
