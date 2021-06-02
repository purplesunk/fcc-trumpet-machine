// Variables

const volume = document.querySelector(".volume")
const display = document.getElementById("display")
const keypad = document.querySelector(".keypad")

const audioClips = [...keypad.querySelectorAll(".clip")]

let sound = ""


// Volumen changing

function changeVolume(number) {
    audioClips.forEach(element => {
        element.volume = number / 100
    });
}

// Listening to clicks and keypresses

const playAudio = (audio) => {
    if (sound) {
    sound.pause()
    sound.currentTime = 0
    }

    sound = audio

    audio.play()
    display.textContent = audio.textContent
}

document.addEventListener('keypress', event => {
    let key = event.keyCode
    let char = String.fromCharCode(key).toUpperCase()
    
    let button = document.getElementById(char).parentElement
    button.click()
})

