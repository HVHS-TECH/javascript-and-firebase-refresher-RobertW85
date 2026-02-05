var messageSpace = document.getElementById("welcomeMessage");
messageSpace.innerHTML = "You've connected to the JavaScript!";

//import { ref, get}
//    from "https://www.gstatic.com/firebasejs/9.6.1/firebase-database.js";
import {fb_write, fb_read}//fb_initialize, FB_DB, fb_readSorted, fb_read, fb_write, fb_onAuthStateChanged} 
    from "/fb_io.mjs";

window.pressButton = pressButton;
window.jsInputButton = jsInputButton;
window.fbWriteButton = fbWriteButton;
window.fbReadButton = fbReadButton;

function pressButton(){
    messageSpace.innerHTML = "You pressed the button!"
}


function jsInputButton(){
    messageSpace.innerHTML = document.getElementById("input").value
}

function fbWriteButton(){
    fb_write(document.getElementById("fbInput").value, "test");
}

function fbReadButton(){
    fb_read("test").then(data =>{
        messageSpace.innerHTML = data
    })
}