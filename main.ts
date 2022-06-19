let light__level = 0
let sleeptime = 150
basic.forever(function () {
    pins.analogWritePin(AnalogPin.P0, 1023)
    pins.analogWritePin(AnalogPin.P2, 0)
    light__level = 1
    for (let index = 0; index < 11; index++) {
        pins.analogWritePin(AnalogPin.P1, light__level - 1)
        basic.pause(sleeptime)
        light__level = light__level * 2
    }
    for (let index = 0; index < 11; index++) {
        pins.analogWritePin(AnalogPin.P0, light__level - 1)
        basic.pause(sleeptime)
        light__level = light__level / 2
    }
    for (let index = 0; index < 11; index++) {
        pins.analogWritePin(AnalogPin.P2, light__level - 1)
        basic.pause(sleeptime)
        light__level = light__level * 2
    }
    for (let index = 0; index < 11; index++) {
        pins.analogWritePin(AnalogPin.P1, light__level - 1)
        basic.pause(sleeptime)
        light__level = light__level / 2
    }
    for (let index = 0; index < 11; index++) {
        pins.analogWritePin(AnalogPin.P0, light__level - 1)
        basic.pause(sleeptime)
        light__level = light__level * 2
    }
    for (let index = 0; index < 11; index++) {
        pins.analogWritePin(AnalogPin.P2, light__level - 1)
        basic.pause(sleeptime)
        light__level = light__level / 2
    }
})
