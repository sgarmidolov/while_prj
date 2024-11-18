let light2 = 0
while (true) {
    light2 = input.lightLevel()
    if (light2 < 5) {
        basic.showIcon(IconNames.Heart)
    } else {
        basic.showIcon(IconNames.No)
    }
}
basic.forever(function () {
	
})
