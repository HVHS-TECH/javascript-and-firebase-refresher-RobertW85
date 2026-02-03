var messageSpace = document.getElementById("welcomeMessage");
messageSpace.innerHTML = "You've connected to the JavaScript!";

function buttonFunc(num){
    if (num == 1){
        messageSpace.innerHTML = "You pressed the button!"
    }else{
        messageSpace.innerHTML = document.getElementById("input").value
    }
}