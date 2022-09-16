var i=0,text;
text = "Hi,I'm Demmy I am a Frontend developer  create awesomeness"

function typing() {
  if(i<text.length){
    document.getElementById("text").innerHTML += text.charAt(i);
    i++;
    setTimeout(typing,80);
  }
}
typing();


function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
}