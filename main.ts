let x = 0
function rollDice () {
    x = randint(1, 12)
}
input.onButtonPressed(Button.A, function () {
    rollDice()
    showOutcome()
})
function showOutcome () {
    if (x == 1) {
        basic.showNumber(x)
        basic.showString("Lose!")
    }
    if (x == 2) {
        basic.showNumber(x)
        basic.showString("Lose!")
    }
    if (x == 3) {
        basic.showNumber(x)
        basic.showString("Lose!")
    }
    if (x == 4) {
        basic.showNumber(x)
        basic.showString("Lose!")
    }
    if (x == 5) {
        basic.showNumber(x)
        basic.showString("Lose!")
    }
    if (x == 6) {
        basic.showNumber(x)
        basic.showString("Lose!")
    }
    if (x == 7) {
        basic.showNumber(x)
        basic.showString("Win!")
    }
    if (x == 8) {
        basic.showNumber(x)
        basic.showString("Lose!")
    }
    if (x == 9) {
        basic.showNumber(x)
        basic.showString("Lose!")
    }
    if (x == 10) {
        basic.showNumber(x)
        basic.showString("Lose!")
    }
    if (x == 11) {
        basic.showNumber(x)
        basic.showString("Win!")
    }
    if (x == 12) {
        basic.showNumber(x)
        basic.showString("Lose!")
    }
}
