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
        cbit_小车类.CarCtrlSpeed(cbit_小车类.CarState.Car_Back, 200)
        basic.showLeds(`
            . . # . .
            . . # . .
            # . # . #
            . # # # .
            . . # . .
            `)
    } else if (receivedNumber == 3) {
        cbit_小车类.CarCtrlSpeed(cbit_小车类.CarState.Car_Left, 175)
        basic.showLeds(`
            . . # . .
            . # . . .
            # # # # #
            . # . . .
            . . # . .
            `)
    } else if (receivedNumber == 4) {
        cbit_小车类.CarCtrlSpeed(cbit_小车类.CarState.Car_Right, 175)
        basic.showLeds(`
            . . # . .
            . . . # .
            # # # # #
            . . . # .
            . . # . .
            `)
    } else if (receivedNumber == 0) {
        cbit_小车类.CarCtrl(cbit_小车类.CarState.Car_Stop)
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
    } else {
        cbit_小车类.CarCtrl(cbit_小车类.CarState.Car_Stop)
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
loops.everyInterval(50, function () {
    if (cbit_小车类.Ultrasonic_Car() < 10) {
        cbit_小车类.CarCtrl(cbit_小车类.CarState.Car_Stop)
    }
})
