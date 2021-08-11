const context = new AudioContext()

const gain = context.createGain()
gain.connect(context.destination)

const oscillator = context.createOscillator()
oscillator.type = "square"
oscillator.frequency.value = 100

oscillator.connect(gain)

let isPlaying  = false



window.addEventListener("keydown", ()=>{


    oscillator.start()


    setTimeout(()=>{

        oscillator.stop()

    }, 3000)



})