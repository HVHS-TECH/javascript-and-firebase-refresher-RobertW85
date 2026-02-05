var messageSpace = document.getElementById("welcomeMessage");
messageSpace.innerHTML = "You've connected to the JavaScript!";

//import { ref, get}
//    from "https://www.gstatic.com/firebasejs/9.6.1/firebase-database.js";
import {fb_write}//fb_initialize, FB_DB, fb_readSorted, fb_read, fb_write, fb_onAuthStateChanged} 
    from "/fb_io.mjs";

function jsButtonFunc(num){
    if (num == 1){
        messageSpace.innerHTML = "You pressed the button!"
    }else{
        messageSpace.innerHTML = document.getElementById("input").value
    }
}

function firebaseWrite(){
    fb_write(document.getElementById("fbInput").value, "test");
}

function firebaseRead(){
    
}