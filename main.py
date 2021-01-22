light.set_brightness(300)

while True: 

    #if light level is equal to or greater than 6, then set neopixels pink
    print("light level: " + input.light_level())
    if input.light_level() >= 6 :
        light.set_all(color.rgb(255,56,152))
  

    #if light level is less than 6, then set neopixels off
    elif input.light_level() < 6:
         light.clear()
    else:
        light.set_all(color.rgb(255,56,152))

while True:
            
    if input.light_level() < 6:
            music.ba_ding.play_until_done()
        
if input.sound_level() > 540:
            #light.set_all(light.rgb(1, 1, 1))
        

#while True
   #print("sound level :" +input.sound_level())
   #if input.sound_level()>5
            #lights.set_all(lights.rgb(255, 0, 255))
   #else:
       #light.set_all(light.rgb(255, 0, 255))
    while True: 
        print("light level: " + str(input.light_level()))
    if input.light_level() >11:
        music.play_melody("G E G GE G GE AGG E G E G GE G GE AGG E", 60)
        music.set_volume(30)
    
    else :
        music.stop_all_sounds()