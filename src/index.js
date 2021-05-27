const synth = window.speechSynthesis;

//DOM elements
const textForm = document.querySelector('#form');
const textInput = document.querySelector('#text-input');
const voiceSelect = document.querySelector('#voice-select');
const rate = document.querySelector('#rate');
const pitch = document.querySelector('#pitch');
const rateValue = document.querySelector('#rate-value');
const pitchValue = document.querySelector('#pitch-value'); 

//init the voices array
let voices = [];
 
const getVoices = () => {
    voices = synth.getVoices();
    console.log(voices);

    //loop through voices and create an option for each one
    voices.forEach(voice => {
        //create option element
        const option = document.createElement('option');

        //fill the option with voice and language
        option.textContent = voice.name + '(' + voice.lang + ')';

        //set need option attributes
        option.setAttribute('data-lang', voice.lang);
        option.setAttribute('data-name', voice.name);
        voiceSelect.appendChild(option);
    })
}

getVoices();
if(synth.onvoiceschanged !== undefined){
    synth.onvoiceschanged = getVoices;
}


//speak
const speak = () => {
    //check if speaking
    if(synth.speaking){
        console.error('Already speaking');
        return;
    }

    if(textInput.value !== '' ){
        //get speak text
        const speakText = new SpeechSynthesisUtterance(textInput.value);

        //speak end
        speakText.onend = e => {
            console.log('done speaking...');
        }
        //speak error
        speakText.onerror = e =>{
            console.log('something went wrong');
        }

        //selected voice
        const selectedVoice = voiceSelect.selectedOptions[0].getAttribute('data-name');

        //loop through voices
        voices.forEach(voice => {
            if(voice.name === selectedVoice){
                speakText.voice = voice;
            }
        });

        //set pitch and rate
        speakText.rate = rate.value;
        speakText.pitch = pitch.value;

        //speak
        synth.speak(speakText);
        
    }
};

//Event Listeners

//Text form submit:
textForm.addEventListener('submit', e =>{
    e.preventDefault();
    speak();
    textInput.blur();
});

// Rate value change
rate.addEventListener('change', e => rateValue.textContent = rate.value);

// Pitch value change
pitch.addEventListener('change', e => pitchValue.textContent = pitch.value);

// Voice select change
voiceSelect.addEventListener('change', e => speak());