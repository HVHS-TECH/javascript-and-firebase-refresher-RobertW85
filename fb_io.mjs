let FB_DB;
let userDetails = {
    displayName:'n/a',
    email:'n/a',
    photoURL:'n/a',
    uid:'n/a'
}

import { initializeApp }
    from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getDatabase, ref, set, get, update, query, orderByChild, limitToFirst, limitToLast}
    from "https://www.gstatic.com/firebasejs/9.6.1/firebase-database.js";
import {  getAuth, GoogleAuthProvider, signInWithPopup, onAuthStateChanged, signOut}
    from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";

export { 
    fb_initialize,
    fb_write,
    fb_read,
    fb_authenticate,
    userDetails
    //fb_readSorted,
    //fb_onAuthStateChanged,
}

function fb_initialize() {
    console.log("fb_initialize");
    const FB_Cfg = {
        apiKey: "AIzaSyAKP94T39TebH5pQOpPriJdvu7zcRH2qLA",
        authDomain: "fir-refresher-f1f18.firebaseapp.com",
        databaseURL: "https://fir-refresher-f1f18-default-rtdb.asia-southeast1.firebasedatabase.app",
        projectId: "fir-refresher-f1f18",
        storageBucket: "fir-refresher-f1f18.firebasestorage.app",
        messagingSenderId: "365813686783",
        appId: "1:365813686783:web:e617f3828f908f63f787ca",
        measurementId: "G-WZ3K7LR355"
    };
    const FB_APP = initializeApp(FB_Cfg);
    FB_DB = getDatabase(FB_APP);
    console.info(FB_DB);       
}

async function fb_write(input,path){
    console.log('fb_write(',input, ':', path,')');
    const dbReference = ref(FB_DB,path);
    try{
        set(dbReference, input)
        console.log("✅ Successful write")
    }
    catch(error){
        console.log(error)
    };
}

async function fb_read(path){
    console.log('fb_read(' + path + ')');
    const dbReference= ref(FB_DB, path);
    try{
        const snapshot = await get(dbReference)
        var fb_data = snapshot.val();
        if (fb_data != null) {
            console.log("✅ Successful read")
            console.log(fb_data)
            return(fb_data)
            
        } else {
            console.log("✅ No record found")
        }
    }
    catch(error){
        console.log(error)
    };
}

function fb_authenticate(){
    const AUTH = getAuth();
    const PROVIDER = new GoogleAuthProvider();
    PROVIDER.setCustomParameters({
        prompt: 'select_account'
    });
    signInWithPopup(AUTH, PROVIDER).then((result) => {
        userDetails.displayName = result.user.displayName
        userDetails.email = result.user.email
        userDetails.photoURL = result.user.photoURL
        userDetails.uid = result.user.uid
        console.log("Authentication successful")
    })
    .catch((error) => {
        console.log(error)
    });
}
