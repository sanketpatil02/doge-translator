var txtInput = document.querySelector("#text-input");
var btnTranslate = document.querySelector("#btn-translatebanana");
var showOutput = document.querySelector("#output");

btnTranslate.addEventListener("click", clickHandler);

var url = "https://api.funtranslations.com/translate/doge.json;

function getTranslationURL(text) {
    return url + "?text=" + text;
}

function clickHandler() {
    var textInput = txtInput.value;

    fetch(getTranslationURL(textInput))
        .then(response => response.json())
        .then(json => {
            var translatedOutput = json.contents.translated;
            showOutput.innerText = translatedOutput;
        })
}