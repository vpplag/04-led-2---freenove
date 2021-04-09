let state = 0
basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P0) == 0) {
        basic.pause(10)
        if (pins.digitalReadPin(DigitalPin.P0) == 0) {
            state = 0
        }
    }
    if (pins.digitalReadPin(DigitalPin.P0) == 1) {
        basic.pause(10)
        if (pins.digitalReadPin(DigitalPin.P0) == 1) {
            state = 1
        }
    }
})
basic.forever(function () {
    if (state) {
        pins.digitalWritePin(DigitalPin.P1, 1)
    } else {
        pins.digitalWritePin(DigitalPin.P1, 0)
    }
})
