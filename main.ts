input.onButtonPressed(Button.AB, function () {
    basic.showNumber(input.temperature() * 1.8 + 32)
    basic.showString("F")
})
basic.forever(function () {
	
})
