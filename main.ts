input.onButtonPressed(Button.A, function on_button_pressed_a() {
    if (input.temperature() > 20) {
        basic.showNumber(input.temperature())
        basic.showIcon(IconNames.SmallDiamond)
        basic.pause(5000)
        basic.showString("HOT")
    } else {
        basic.showNumber(input.temperature())
        basic.showString("Cold")
    }
    
})
input.onButtonPressed(Button.AB, function on_button_pressed_ab() {
    basic.showArrow(ArrowNames.South)
})
input.onButtonPressed(Button.B, function on_button_pressed_b() {
    basic.showString("Hello!")
})
