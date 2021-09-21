var txtinput = document.querySelector("#translate-input");
var btn = document.querySelector("#translate-button");
var txtoutput = document.querySelector("#output");


var ServerUrl = "https://api.funtranslations.com/translate/minion.json";

function getTranslationUrl(input){
    return ServerUrl + "?" + "text=" + input;
}

function clickHandler(){
    var inputTxt = txtinput.value; //taking input
   
    //calling server for processing

    fetch(getTranslationUrl(inputTxt))
      .then(response => response.json())
      .then(json => {
          var translatedtxt = json.contents.translated;
          txtoutput.innerText = translatedtxt;//output
      })
}

btn.addEventListener("click", clickHandler);