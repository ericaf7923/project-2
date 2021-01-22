light.setBrightness(300)
while (true) {
    // if light level is equal to or greater than 6, then set neopixels pink
    console.log("light level: " + input.lightLevel())
    if (input.lightLevel() >= 6) {
        light.setAll(color.rgb(255, 56, 152))
    } else if (input.lightLevel() < 6) {
        // if light level is less than 6, then set neopixels off
        light.clear()
    } else {
        light.setAll(color.rgb(255, 56, 152))
    }
    
}
while (true) {
    if (input.lightLevel() < 6) {
        music.baDing.playUntilDone()
    }
    
}
if (input.soundLevel() > 540) {
    // light.set_all(light.rgb(1, 1, 1))
    // while True
    // print("sound level :" +input.sound_level())
    // if input.sound_level()>5
    // lights.set_all(lights.rgb(255, 0, 255))
    // else:
    // light.set_all(light.rgb(255, 0, 255))
    while (true) {
        console.log("light level: " + ("" + input.lightLevel()))
    }
    if (input.lightLevel() > 11) {
        music.playMelody("G E G GE G GE AGG E G E G GE G GE AGG E", 60)
        music.setVolume(30)
    } else {
        music.stopAllSounds()
    }
    
}

