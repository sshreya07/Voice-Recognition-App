// voice html page working

const btn = document.querySelector('#talk');
const content = document.querySelector('.content');

const greeting = [
    'I am good',
    'how you doin',
    'leave me alone'
];

const weather = [
    'weather is awesome',
    'weather is quite boring today',
    'too sunny'
];


const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();

recognition.onstart = function(){
    console.log('voice is activated, you can use microphone..');
};

recognition.onresult = (e) => {
    const currentText = e.resultIndex;

    const message = e.results[currentText][0].transcript;

    content.textContent = message;

    readOutLoad(message);
};


//add listener to the button
btn.addEventListener('click', e =>{
    recognition.start();
});

function readOutLoad(message){
    const speech = new SpeechSynthesisUtterance();

    if(message.includes('how are you')){
        const reply = greeting[Math.floor(Math.random() * greeting.length)];

        speech.text = reply;
        content.text = reply;
    }else{
        speech.text = "I don't know what to say";
    }
    
    speech.volume = 1;
    speech.rate = 1;
    speech.pitch = 1;

    window.speechSynthesis.speak(speech);
}

try{

}catch(e){

}