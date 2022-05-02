

function increaseFontSize(){
    
   console.log("increse font funct")
   let el = document.getElementById("textareacontent") ;
   let fontSize =  window.getComputedStyle(el).fontSize;
    fontSize= parseInt(fontSize);
    fontSize = fontSize + 2;
   
    el.style.fontSize = fontSize+'pt';
    
};

function startIntervalIncreaseFontEvery500ms(){
    //console.log("before set interval call");
    setInterval(increaseFontSize, 500);
}


function setFontBoldAndGreenUnderline(){
    let el = document.getElementById("textareacontent") ;
    let fontWeight =  window.getComputedStyle(el).fontWeight;
    let bodyElement = document.body;
    if(fontWeight == 400){
        el.style.fontWeight = 700;
        el.style.color = 'green';
        el.style.textDecoration = 'underline';
        bodyElement.style.backgroundImage = "url('hundredDollar.jpeg')";
    }else{
        el.style.fontWeight = 400;
        el.style.color = 'black';
        el.style.textDecoration = 'none';
        bodyElement.style.backgroundImage = "none";
    }

}


function convertToPigLatin(){
    var str = document.getElementById("textareacontent").value;
    if(str == ""){
        return;
    }
    var words = str.split(" ");
    for (var i = 0; i < words.length ; i++) {
        words[i] = translatePigLatin(words[i]);
    }
    var sentence = words.join(" ");
    document.getElementById("textareacontent").value = sentence;

    
}


function convertToMalkovitch(){
    var str = document.getElementById("textareacontent").value;
    if(str == ""){
        return;
    }
    var words = str.split(" ");
    for (var i = 0; i < words.length ; i++) {
        if(words[i].length >=5){
            words[i] = "Malkovitch";
        }
    }
    var sentence = words.join(" ");
    document.getElementById("textareacontent").value = sentence;
}
//reference from https://javascript.plainenglish.io/javascript-algorithm-pig-latin-82402739bc3f#:~:text=Pig%20Latin%20is%20an%20odd,%E2%80%9Cay%E2%80%9D%20at%20the%20end.

function translatePigLatin(str) {
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let newStr = "";

    if (vowels.indexOf(str[0]) > -1) {
        newStr = str + "ay";
        return newStr;
    } else {
        let firstMatch = str.match(/[aeiou]/g) || 0;
        let vowel = str.indexOf(firstMatch[0]);
        newStr = str.substring(vowel) + str.substring(0, vowel) + "ay";
        return newStr;
    }
}


window.onload = function(){
    
    document.getElementById("biggerDecoration").onclick = startIntervalIncreaseFontEvery500ms;

    document.getElementById("bling").onchange = setFontBoldAndGreenUnderline;

    document.getElementById("piglatin").onclick = convertToPigLatin;

    document.getElementById("malkovitch").onclick = convertToMalkovitch;
};


