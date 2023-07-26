x = 0;
y = 0;
apple=""
draw_apple = "";
screen_width="0"
screen_height="0"
speak_data=""
to_number=""

var SpeechRecognition = window.webkitSpeechRecognition;
  
var recognition = new SpeechRecognition();

function start()
{
  document.getElementById("status").innerHTML = "System is listening please speak";  
  recognition.start();
} 
 
recognition.onresult = function(event) {

 console.log(event); 

 content = event.results[0][0].transcript;
  to_number=Number(content);
  if(Number.isInteger(to_number))
  {
    document.getElementById("status").innerHTML = "The speech has been recognized: " + content; 
    draw_apple="set"
  }
    else{
      document.getElementById("status").innerHTML="Number is not recognised"
    }

}

function setup() {
 screen_width=window.innerWidth
 screen_height=window.innerHeight
 canvas= createCanvas(screen_width,screen_height-150)
canvas.position(0,150)
}

function draw() {
  if(draw_apple == "set")
  {
    document.getElementById("status").innerHTML = to_number + " Apples drawn";
    draw_apple = "";
    for(i=1;i<=to_number;i++){
      x=Math.floor(Math.random()*700)
      y=Math.floor(Math.random()*400)
      image(apple,x,y)
    }
    speak()
 
  }


}



function speak(){
    var synth = window.speechSynthesis;
    speak_data = to_number+"Apples Drawn"
    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);
   
}
function preload(){
 apple=loadImage("apple.png")

}
