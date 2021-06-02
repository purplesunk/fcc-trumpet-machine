
// Volumen changing

function changeVolume(number) {
const keypad = document.querySelector(".keypad")
const audioClips = [...keypad.querySelectorAll(".clip")]
    audioClips.forEach(element => {
        element.volume = number / 100
    });
}

// Listening to clicks and keypresses

let sound = ""
const playAudio = (audio) => {

const display = document.getElementById("display")

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

