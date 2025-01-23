radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        basic.showNumber(1)
    } else if (receivedNumber == 2) {
        basic.showNumber(2)
    } else if (receivedNumber == 3) {
        basic.showNumber(3)
    } else if (receivedNumber == 4) {
        basic.showNumber(4)
    } else if (receivedNumber == 0) {
        basic.showNumber(0)
    } else {
        basic.showNumber(0)
    }
})
radio.setGroup(1)
cbit_小车类.RGB_Car_Big(170, 170, 170)
cbit_小车类.RGB_Car_Program().show()
cbit_小车类.RGB_Car_Program().showColor(neopixel.colors(NeoPixelColors.White))
