//var messageSpace = document.getElementById("welcomeMessage");
//messageSpace.innerHTML = "You've connected to the JavaScript!";
console.log("You've connected to the JavaScript!");


import {fb_write, fb_read, fb_initialize, fb_authenticate, userDetails}
    from "/fb_io.mjs";

window.pressButton = pressButton;
window.jsInputButton = jsInputButton;
window.fbWriteButton = fbWriteButton;
window.fbReadButton = fbReadButton;
window.fbAuthButton = fbAuthButton;
window.fbUserWriteButton = fbUserWriteButton;
window.fbReadAllButton = fbReadAllButton;


fb_initialize()

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

function fbAuthButton(){
    fb_authenticate()
}

function fbUserWriteButton(){
    fb_write(userDetails.uid, document.getElementById("fbUserInput").value);
}

function fbReadAllButton(){
    fb_read("/").then(messages =>{
        messages = Object.entries(messages)
        const table = document.createElement("table");
        for (let [key, value] of messages){
            const row = table.insertRow();
            const keyCell = row.insertCell();
            const valueCell = row.insertCell();
            keyCell.innerHTML = key;
            valueCell.innerHTML = value;
            keyCell.style.border = "1px solid black";
            valueCell.style.border = "1px solid black";
        }
        document.body.appendChild(table);
    })
}