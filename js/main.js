
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


// html formating meibi?

const colors = ["80ff72","e58c8a","7ee8fa","0a369d","7a5c58","007c77","89023e","1c77c3","b80c09","6184d8"];

function addAudioId() {

    const audioClips = [...document.getElementsByClassName("clip")];
    const buttons = [...document.getElementsByClassName("drum-pad")];

    for (let i = 0; i < audioClips.length; i++) {

        //set button colors
        buttons[i].style.backgroundColor = "#" + colors[i];

        // set the id
        audioClips[i].id = buttons[i].innerText;

        //add innet text to audioclips
        audioClips[i].innerText = buttons[i].id;
    }

    changeVolume(0.4);
}

// display the note you are playing

function displayNote(audio) {
    const display = document.getElementById("display");

    display.innerText = audio.innerText;
}


// play audio 

let pauseThis = "";
function playAudio(id) {
    const button = document.getElementById(id).innerText;
    
    let audio = document.getElementById(button);

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

    let char = String.fromCharCode(key).toUpperCase();

    let audio = document.getElementById(char);

    if (pauseThis) {
        pauseThis.pause();
        pauseThis.currentTime = 0;
    }

    pauseThis = audio;

    audio.play();
    displayNote(audio);
}