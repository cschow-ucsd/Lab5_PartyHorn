// volume bar
const volumeNumber = document.getElementById("volume-number");
const volumeSlider = document.getElementById("volume-slider");
const volumeImage = document.getElementById("volume-image");
const audio = document.getElementById("horn-sound");
const honkButton = document.getElementById("honk-btn");

volumeNumber.addEventListener("change", function(e) {
    updateVolume(volumeNumber.value);
    e.preventDefault();
});
volumeSlider.addEventListener("change", function(e) {
    updateVolume(volumeSlider.value);
    e.preventDefault();
});

function updateVolume(volume) {
    volumeNumber.value = volume;
    volumeSlider.value = volume;
    audio.volume = volume / 100;
    let levelIcon;
    if (volume == 0) {
        levelIcon = "volume-level-0.svg";
        honkButton.disabled = true;
    } else {
        if (volume <= 33) {
            levelIcon = "volume-level-1.svg";
        } else if (volume <= 66) {
            levelIcon = "volume-level-2.svg";
        } else {
            levelIcon = "volume-level-3.svg";
        }
        honkButton.disabled = false;
    }
    volumeImage.src = `./assets/media/icons/${levelIcon}`;
}

// honk
const horns = document.querySelectorAll('input[type=radio][name="radio-sound"]');
const soundImg = document.getElementById("sound-image");

for (let i = 0; i < horns.length; i++) {
    const horn = horns[i];
    horn.addEventListener("change", function() {
        updateAudio(horn.id);
    });
}

function updateAudio(hornId) {
    let hornImg, hornAudio;
    switch (hornId) {
        case "radio-air-horn":
            hornImg = "air-horn.svg";
            hornAudio = "air-horn.mp3";
            break;
        case "radio-car-horn":
            hornImg = "car.svg";
            hornAudio = "car-horn.mp3";
            break;
        case "radio-party-horn":
            hornImg = "party-horn.svg";
            hornAudio = "party-horn.mp3";
            break;
        default:
            return;
    }
    soundImg.src = `./assets/media/images/${hornImg}`;
    audio.src = `./assets/media/audio/${hornAudio}`;
}

honkButton.addEventListener("click", function(e) {
    console.log("yeet");
    audio.play();
    e.preventDefault();
})