// html formating meibi?

function addAudioId() {

    const audioClips = [...document.getElementsByClassName("clip")];
    const buttons = [...document.getElementsByClassName("drum-pad")];

    for (let i = 0; i < audioClips.length; i++) {
        audioClips[i].id = buttons[i].innerText;

        //add innet text to audioclips
        audioClips[i].innerText = buttons[i].id;
    }

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