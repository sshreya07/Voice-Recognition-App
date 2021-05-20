const synth = window.speechSynthesis;

//DOM elements
const textForm = document.querySelector('form');const textInput = document.querySelector('#text-input');
const voiceSelect = document.querySelector('#voice-select');
const rate = document.querySelector('#rate');
const pitch = document.querySelector('#pitch');
const rateValue = document.querySelector('#rate-value');
const pitchValue = document.querySelector('#pitch-value'); 

//init the voices array
let voices = [];
 
const getVoices = () => {
    voices = synth.getVoices();
    // console.log(voices);

    //loop through voices and create an option for each one
    voices.forEach(voice => {
        //create option element
        const option = document.createElement('option');

        //fill the option with voice and language
        option.textContent = voice.name + '(' + voice.lang + ')';

        //set neede option attributes
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
    
}