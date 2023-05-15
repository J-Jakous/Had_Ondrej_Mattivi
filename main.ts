input.onButtonPressed(Button.A, function () {
    směr += -1
    if (směr < 0) {
        směr = 3
    }
    if (směr > 3) {
        směr = 0
    }
    posun = 1
})
input.onButtonPressed(Button.B, function () {
    směr += 1
    if (směr < 0) {
        směr = 3
    }
    if (směr > 3) {
        směr = 0
    }
    posun = 1
})
let směr = 0
let posun = 0
basic.pause(1000)
led.toggle(0, 2)
let konec_hry = 0
posun = 1
let jídlo_x = randint(0, 4)
let jídlo_y = randint(1, 4)
směr = 0
let x1 = 0
let y1 = 2
let x2 = 0
let x3 = 0
let x4 = 0
let x5 = 0
let y2 = 0
let y3 = 0
let y4 = 0
let y5 = 0
let čekání = 1000
let délka = 1
let smrt = 0
basic.pause(čekání)
basic.forever(function () {
    if (konec_hry == 0) {
        if (x1 == jídlo_x && y1 == jídlo_y) {
            délka += 1
            jídlo_x = randint(0, 4)
            jídlo_y = randint(1, 4)
        }
        basic.clearScreen()
        if (délka >= 1) {
            led.plot(0, 0)
        }
        if (délka >= 2) {
            led.plot(1, 0)
        }
        if (délka >= 3) {
            led.plot(2, 0)
        }
        if (délka >= 4) {
            led.plot(3, 0)
        }
        if (délka >= 5) {
            led.plot(4, 0)
        }
        if (posun == 1) {
            if (délka >= 2) {
                if (délka >= 3) {
                    if (délka >= 4) {
                        x5 = x4
                        y5 = y4
                    }
                    x4 = x3
                    y4 = y3
                }
                x3 = x2
                y3 = y2
                x2 = x1
                y2 = y1
            }
            if (směr == 0) {
                x1 += 1
            }
            if (směr == 1) {
                y1 += 1
            }
            if (směr == 2) {
                x1 += -1
            }
            if (směr == 3) {
                y1 += -1
            }
        }
        led.plot(x1, y1)
        if (délka >= 2) {
            led.plot(x2, y2)
        }
        if (délka >= 3) {
            led.plot(x3, y3)
        }
        if (délka >= 4) {
            led.plot(x4, y4)
        }
        if (délka >= 5) {
            led.plot(x5, y5)
        }
        led.plot(jídlo_x, jídlo_y)
        basic.pause(čekání)
    }
})
basic.forever(function () {
    if (délka >= 5) {
        smrt = -1
        basic.pause(1000)
        posun = 0
        konec_hry = 1
        basic.clearScreen()
        konec_hry = 2
        for (let index = 0; index < 6; index++) {
            led.toggle(0, 0)
            led.toggle(1, 0)
            led.toggle(2, 0)
            led.toggle(3, 0)
            led.toggle(4, 0)
            basic.pause(200)
        }
        basic.clearScreen()
        basic.showString("You won!")
        basic.pause(1000)
    }
    if (smrt >= 1) {
        posun = 0
        konec_hry = 1
        basic.clearScreen()
        konec_hry = 2
        basic.showString("You lost!")
        basic.pause(1000)
    }
})
basic.forever(function () {
    if (smrt == 0) {
        if (x1 > 4 && směr == 0) {
            x1 = 4
            posun = 0
            smrt += 1
        }
        if (x1 < 0 && směr == 2) {
            x1 = 0
            posun = 0
            smrt += 1
        }
        if (y1 < 1 && směr == 3) {
            y1 = 1
            posun = 0
            smrt += 1
        }
        if (y1 > 4 && směr == 1) {
            y1 = 4
            posun = 0
            smrt += 1
        }
        if (x1 == x2 && y1 == y2) {
            smrt += 1
        }
        if (x1 == x3 && y1 == y3) {
            smrt += 1
        }
        if (x1 == x4 && y1 == y4) {
            smrt += 1
        }
        if (x1 == x5 && y1 == y5) {
            smrt += 1
        }
    }
})
basic.forever(function () {
    if (konec_hry == 2) {
        if (input.buttonIsPressed(Button.A)) {
            basic.clearScreen()
            basic.pause(1000)
            control.reset()
        }
    }
})
