// stop the alarm
input.onButtonPressed(Button.A, function () {
    alarmstatus = false
})
// enable the alarm and start reading the light level
input.onButtonPressed(Button.B, function () {
    alarmstatus = true
})
// functions plays the tone if alarm is enabled and stops if alarms is disabled
function Alarm () {
    if (alarmstatus) {
        // alarm enabled
        music.playTone(1500, music.beat(BeatFraction.Half))
        music.playTone(2000, music.beat(BeatFraction.Half))
    } else {
        // alarm disabled
        music.playTone(0, music.beat(BeatFraction.Breve))
    }
}
let lightlevel = 0
let alarmstatus = false
music.setVolume(75)
// boolean variable to check if alarm is enabled (true) or disabled (false)
alarmstatus = true
basic.forever(function () {
    // read the light  sensor
    // 
    lightlevel = input.lightLevel()
    if (lightlevel > 100) {
        // if the light level is higher than 100 call the function to enable the alarm
        // 
        Alarm()
    }
})
