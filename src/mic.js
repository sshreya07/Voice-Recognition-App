// import analysing from '../images/2voice_recognition_process_by_gleb.gif';

// voice html page working

const btn = document.querySelector('.talkBtn');
const content = document.querySelector('.content');
const SpokenText = document.querySelector('.spokenText');

const hi =[
    'yes, how can i help you'
]

const greeting = [
    'I am good! how you doin',
    'I am great, what about you'
];

const weather = [
    'weather is awesome',
    'weather is quite boring today',
    'too sunny'
];

const Name = [
    'My name is Nora'
]

const age = [
    'You ask my boss',
    "it's a secert"
]

const boyfriend = [
    'Yes, my boyfriend name is Alex'
]

const exit = [
    'okay, be polite',
    'same to you',
    'hope to see you soon'
]

const love = [
    'i love you too',
    'aww you so sweet',
    'yaa! i kone i love myself too'
]

const alexa = [
    "yes, i hate her because she is alexs ex",
    'yes, she is a bimbo'
]

const bye =[
    'okay bye bye',
    'hope to see you soon',
    'we will mwwt later'
]

const song = [
    "Twinkle, twinkle, little star, How I wonder what you are, Up above the world so high, Like a diamond in the sky."
]




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
    }else if(message.includes('hi')){
        const reply = hi[Math.floor(Math.random() * hi.length)];

        speech.text = reply;
        content.text = reply;
    }else if(message.includes('hello')){
        const reply = hi[Math.floor(Math.random() * hi.length)];

        speech.text = reply;
        content.text = reply;
    }else if(message.includes('age')){
        const reply = age[Math.floor(Math.random() * age.length)];

        speech.text = reply;
        content.text = reply;
    }else if(message.includes('old are you')){
        const reply = age[Math.floor(Math.random() * age.length)];

        speech.text = reply;
        content.text = reply;
    }else if(message.includes('weather')){
        const reply = weather[Math.floor(Math.random() * weather.length)];

        speech.text = reply;
        content.text = reply;
    }else if(message.includes('what is your name')){
        const reply = Name[Math.floor(Math.random() * Name.length)];

        speech.text = reply;
        content.text = reply;
    }else if(message.includes('do you have a boyfriend')){
        const reply = boyfriend[Math.floor(Math.random() * boyfriend.length)];

        speech.text = reply;
        content.text = reply;
    }else if(message.includes('get lost')){
        const reply = exit[Math.floor(Math.random() * exit.length)];

        speech.text = reply;
        content.text = reply;
    }else if(message.includes('fuck off')){
        const reply = exit[Math.floor(Math.random() * exit.length)];

        speech.text = reply;
        content.text = reply;
    }else if(message.includes('shut up')){
        const reply = exit[Math.floor(Math.random() * exit.length)];

        speech.text = reply;
        content.text = reply;
    }else if(message.includes('love')){
        const reply = love[Math.floor(Math.random() * love.length)];

        speech.text = reply;
        content.text = reply;
    }else if(message.includes('Alexa')){
        const reply = alexa[Math.floor(Math.random() * alexa.length)];

        speech.text = reply;
        content.text = reply;
    }else if(message.includes('song')){
        const reply = song[Math.floor(Math.random() * song.length)];

        speech.text = reply;
        content.text = reply;
    }else if(message.includes('bye')){
        const reply = bye[Math.floor(Math.random() * bye.length)];

        speech.text = reply;
        content.text = reply;
    }else{
        speech.text = "I don't know what to say";
    }
    
    // speech.text = message;

    speech.volume = 1;
    speech.rate = 1;
    speech.pitch = 1;

    window.speechSynthesis.speak(speech);
}

try{

}catch(e){

}