// expose.js
window.addEventListener('DOMContentLoaded', init);

function init() {
    var hornSelector = document.getElementById('horn-select');
    var image = document.querySelector('img[alt="No image selected"]');
    var volumeImage = document.querySelector('img[alt="Volume level 2"');
    const playButton = document.getElementById('volume');
    const audio = document.querySelector('audio[class="hidden"]');
    const button = document.querySelector('button');
    hornSelector.addEventListener('change', (x) => {
        switch (x.target.value) {
            case 'air-horn':
                image.src = 'assets/images/air-horn.svg';
                audio.src = 'assets/audio/air-horn.mp3';
                break;
            case 'car-horn':
                image.src = 'assets/images/car-horn.svg';
                audio.src = 'assets/audio/car-horn.mp3';
                break;
            case 'party-horn':
                image.src = 'assets/images/party-horn.svg';
                audio.src = 'assets/audio/party-horn.mp3';
                break;
            default:
                return;
        }
    });
    playButton.addEventListener('change', (event) => {
        audio.volume = event.target.value / 100;
        if (event.target.value == 0) {
            volumeImage.src = 'assets/icons/volume-level-0.svg';
        } else if (event.target.value < 33) {
            volumeImage.src = 'assets/icons/volume-level-1.svg';
        } else if (event.target.value < 67) {
            volumeImage.src = 'assets/icons/volume-level-2.svg';
        } else {
            volumeImage.src = 'assets/icons/volume-level-3.svg';
        }
    });
    button.addEventListener('click', () => {
        audio.play();
        const event = hornSelector.value;
        if (event == 'party-horn') {
            const jsConfetti = new JSConfetti();
            jsConfetti.addConfetti();
        }
    });
}