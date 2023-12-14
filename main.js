//Esta es la web App que se utiliza para reconocer lo que decimos y convertirlo en texto
var SpeechRecognition = window.webkitSpeechRecognition;
//creamos un nuevo speech app para usarlo en nuestra APP
var recognition = new SpeechRecognition();
var Textbox = document.getElementById("textbox");
//Crear funcion start
function start(){
    Textbox.innerHTML = "";
    recognition.start();
}
//funcion para mostrar el resultado en la pagina HTML
recognition.onresult = function(event){
    console.log(event);
    var Content = event.results[0][0].transcript;
    Textbox.innerHTML = Content;
    console.log(Content);
    if(Content == "Toma mi selfie"){
        console.log("Tomando selfie...");
        speak();
    }
}

function speak(){
    var synth = window.speechSynthesis;
    speak_data = "Tomando tu selfie en 5 segundos";
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
    Webcam.attach(camera);
    setTimeout(function(){
        take_selfie();
        save();
    }, 5000);
}

camera = document.getElementById("camera");

Webcam.set({
    width: 360,
    height: 250,
    image_format : 'jpeg',
    jpeg_quality:90
})

function take_selfie(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id="selfie_image" src="'+data_uri+'"/>';
    })
}

function save(){
    link = document.getElementById("link");
    image = document.getElementById("selfie_image").src;
    link.href = image;
    link.click();
}
