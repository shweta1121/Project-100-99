var SpeechRecongnition = window.webkitSpeechRecongnition;

var recongnition = new SpeechRecongnition();

function start()
{
    document.getElementById("textbox").innerHTML = "";
    recongnition.start();
}

recongnition.onresult =function (event) 
{
    console.log(event);

    var Content = event.results[0] [0].transcript;
    console.log(Content);

    document.getElementById("textbox").innerHTML = Content;
}

function speak () 
{
  var syth = window.speechSynthesis;

  speak_data = "Taking Your Selfie In 5 Seconds";

  var utterThis = new SpeechSynthesisUtterance(speak_data);

  synth.speak(utterThis);
  Webcam.attach(camera);

  setTimeout(function()
  {
    take_snapshot();
    save();
  },5000);
}

function save()
{
  link=document.getElementById("link");
  image =document.getElementById("selfie_image").src;
  link.href = image;
  link.click();
}


Webcam.set(
{
 width:360,
 height:250,
 image_format: 'png';
 png_quality:90
});
camera = document.getElementById("camera");

function take_snapshot ()
{
   webcam.snap(function(data_url) {
    document.getElementById("result").innerHTML = '<img id="selfie_image" src"'+data_url+'">';
   });
}

function setTimeOutButton() {
  
  setTimeout(function(){
  
    alert("set TimeOut Button");
  
  }, 3000);