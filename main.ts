let x = 0
input.onButtonPressed(Button.A, function on_button_pressed_a() {
    if (input.temperature() > 25) {
        basic.showNumber(input.temperature())
        basic.showIcon(IconNames.SmallDiamond)
        basic.pause(5000)
        basic.showString("HOT")
    } else {
        basic.showNumber(input.temperature())
        basic.showString("Very Cold")
    }
    
})
input.onButtonPressed(Button.AB, function on_button_pressed_ab() {
    
    x = 1
})
input.onButtonPressed(Button.B, function on_button_pressed_b() {
    basic.showString("Hello!")
})
