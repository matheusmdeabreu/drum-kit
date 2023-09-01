// Seleciona todos os elementos com a classe "clickable-button"
var buttons = document.querySelectorAll(".drum");

// Itera sobre a coleção de botões e adiciona um ouvinte de evento a cada um
for (var i=0;i<buttons.length;i++){
    buttons[i].addEventListener("click", function(){
        var buttonLetter = this.innerHTML;
        makeSound(buttonLetter);   
    });
}

document.addEventListener("keydown", function(event){
    makeSound(event.key);
});

function makeSound(key){
    switch (key) {
        case "w":
            var audio = new Audio("./sounds/tom-1.mp3");
            break;
        case "a":
            var audio = new Audio("./sounds/tom-2.mp3");
            break;
        case "s":
            var audio = new Audio("./sounds/tom-3.mp3");
            break;
        case "d":
            var audio = new Audio("./sounds/tom-4.mp3");
            break;
        case "j":
            var audio = new Audio("./sounds/crash.mp3");
            break;
        case "k":
            var audio = new Audio("./sounds/kick-bass.mp3");
            break;
        case "l":
            var audio = new Audio("./sounds/snare.mp3");
            break;
    
        default: console.log(key);
            break;
    }
    audio.play();
}




