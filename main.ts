for (let index = 0; index < 4; index++) {
    maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 40)
    basic.pause(5000)
    maqueen.motorStop(maqueen.Motors.All)
    basic.pause(200)
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 90)
    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, 90)
    basic.pause(600)
    maqueen.motorStop(maqueen.Motors.All)
}
basic.forever(function () {
	
})
