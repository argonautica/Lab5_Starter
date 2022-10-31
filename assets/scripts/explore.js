// explore.js
window.addEventListener('DOMContentLoaded', init);

function init() {
    const face = document.getElementsByTagName('img')[0];
    const voiceOptions = document.getElementsByTagName('select')[0];
    const button = document.getElementsByTagName('button')[0];
    const textInput = document.getElementById("text-to-speak");
    const synth = window.speechSynthesis;
    let voices = [];
    synth.addEventListener('voiceschanged', () => {
        voices = synth.getVoices();
        for (let i = 0; i < voices.length; i++) {
            const option = document.createElement('option');
            option.textContent = `${voices[i].name}`;
            option.setAttribute('data-name', voices[i].name);
            voiceOptions.appendChild(option);
        }
    });
    button.addEventListener('click', () => {
        face.src = "assets/images/smiling-open.png";
        let utterThis = new SpeechSynthesisUtterance(textInput.value);
        let selectedOption = voiceOptions.selectedOptions[0].getAttribute('data-name');
        for (let i = 0; i < voices.length; i++) {
            if (voices[i].name === selectedOption) {
                utterThis.voice = voices[i];
            }
        }
        synth.speak(utterThis);
        setInterval(function() {
            if (!synth.speaking) {
                face.src = "assets/images/smiling.png";
                clearInterval();
            }
        }, 100)
    });
}