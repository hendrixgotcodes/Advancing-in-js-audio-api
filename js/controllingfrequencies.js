const btnPlay = document.getElementById("play")
const status = document.getElementById("status")

const cntx = new AudioContext()

const gainNode = cntx.createGain()
gainNode.connect(cntx.destination)

const osci1 = cntx.createOscillator()
osci1.type = "triangle"
osci1.frequency.value = 100

const osci2 = cntx.createOscillator()
osci2.type = "square"
osci2.frequency.value = 100


const osci3 = cntx.createOscillator()
osci3.type = "square"
osci3.frequency.value = 100

osci1.connect(gainNode)
osci2.connect(gainNode)
osci3.connect(gainNode)

window.addEventListener("mousemove", (e)=>{

    osci1.frequency.value = e.offsetY
    osci2.frequency.value = e.offsetX
    osci3.frequency.value = e.offsetX + e.offsetY

})

window.addEventListener("keypress", ()=>{

    osci1.start()
    osci2.start()
    osci3.start()

    status.innerText = "Now move your cursor to hear magic!"

})