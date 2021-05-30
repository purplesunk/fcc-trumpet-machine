// change volume

function changeVolume(number) {
    const audioClips = [...document.getElementsByClassName("clip")];

    audioClips.forEach(element => {
        element.volume = number;
    });
}

// the range input and the volume

function showVolValue(value) {
    let volume = document.getElementById("volume");

    volume.innerText = value;

    changeVolume(value / 100);
}

// display the note you are playing

function displayNote(audio) {
    const display = document.getElementById("display");

    display.innerText = audio.innerText;
}


// play audio 

let pauseThis = "";
function playAudio(innerText) {
    let audio = document.getElementById(innerText);

    if (pauseThis) {
        pauseThis.pause();
        pauseThis.currentTime = 0;
    }

    pauseThis = audio;

    audio.play();
    displayNote(audio);
}


// listen to keypresses

document.addEventListener('keypress', playOnKeypress);


function playOnKeypress(event) {
    let key = event.keyCode;
    event.preventDefault();

    let char = String.fromCharCode(key).toUpperCase();

    const audio = document.getElementById(char);
    const button = document.getElementById(audio.innerText);

    button.click();
}


// html formating meibi?

function addAudioId() {

    const audioClips = [...document.getElementsByClassName("clip")];
    const buttons = [...document.getElementsByClassName("drum-pad")];

    for (let i = 0; i < audioClips.length; i++) {

        // set the id
        audioClips[i].id = buttons[i].innerText;

        //add inner text to audioclips
        audioClips[i].innerText = buttons[i].id;

    }

    changeVolume(0.4);
}

