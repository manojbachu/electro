let loginForm;
let appContainer;
let home;
let cameraAccessories;
let cameras;
let cardLink1;
let cardLink2;
let cardLink3;
let cardLink4;
let cardLink5;
let cardLink6;
let cardLink7;
let cardLink8;
let cardLink9;
let games;
let harddrives;
let watches;
let smartphones;
let speakers;
let laptops;
let lens;
let pendrives;
let tablet;
let television;
let cartEl;
let aboutUs;

document.addEventListener('DOMContentLoaded', function() {
    aboutUs = document.getElementById("aboutUs");

    television = document.getElementById("television");

    tablet = document.getElementById("tablet");

    pendrives = document.getElementById("pendrives");

    lens = document.getElementById("lens");

    laptops = document.getElementById("laptops");

    speakers = document.getElementById("speakers");

    smartphones = document.getElementById("smartphones");

    watches = document.getElementById("watches");

    harddrives = document.getElementById("harddrives");

    games = document.getElementById("games");

    cardLink9 = document.getElementById("cardLink9");

    cardLink8 = document.getElementById("cardLink8");

    cardLink7 = document.getElementById("cardLink7");

    cardLink6 = document.getElementById("cardLink6");
    
    cardLink5 = document.getElementById("cardLink5");

    cardLink4 = document.getElementById("cardLink4");

    cardLink3 = document.getElementById("cardLink3");

    cardLink2 = document.getElementById("cardLink2");

    cardLink1 = document.getElementById("cardLink1");

    cameras = document.getElementById("cameras");

    cameraAccessories = document.getElementById("cameraAccessories");

    home = document.getElementById("home");

    appContainer = document.getElementById("appContainer");
    appContainer.style.display = "none"

    loginForm = document.getElementById("loginForm");

    cartEl = document.getElementById("cartContainer");
});

let user;
let password;
let formEl;
let userId;
  

document.addEventListener('DOMContentLoaded', function() {
    user = document.getElementById("email");
    password = document.getElementById("password");

    formEl = document.getElementById("formEl");

    userId = document.getElementById("userDetails");

    
});




function onsignIn() {
    
    let username = user.value;
    let passwordValue = password.value;

    if (username !=="" && passwordValue !== ""){
      appContainer.style.display = "block"
        loginForm.style.display="none"
        home.style.display = "block"
          cameraAccessories.style.display = "none"
        cameras.style.display = "none"
        cardLink1.style.display = "none"
        cardLink2.style.display = "none"
        cardLink3.style.display = "none"
        cardLink4.style.display = "none"
        cardLink5.style.display = "none"
        cardLink6.style.display = "none"
        cardLink7.style.display = "none"
        cardLink8.style.display = "none"
        cardLink9.style.display = "none"
        games.style.display = "none"
        harddrives.style.display = "none"
        watches.style.display = "none"
        smartphones.style.display = "none"
        speakers.style.display = "none"
        laptops.style.display = "none"
        lens.style.display = "none"
        pendrives.style.display = "none"
        tablet.style.display = "none"
        television.style.display = "none"
        cartEl.style.display = "none"
        aboutUs.style.display="none"
        addressContainer.style.display = "none"
    }
    userId.textContent = username
}

function onAboutUs(){
    appContainer.style.display = "block"
        loginForm.style.display="none"
        home.style.display = "none"
          cameraAccessories.style.display = "none"
        cameras.style.display = "none"
        cardLink1.style.display = "none"
        cardLink2.style.display = "none"
        cardLink3.style.display = "none"
        cardLink4.style.display = "none"
        cardLink5.style.display = "none"
        cardLink6.style.display = "none"
        cardLink7.style.display = "none"
        cardLink8.style.display = "none"
        cardLink9.style.display = "none"
        games.style.display = "none"
        harddrives.style.display = "none"
        watches.style.display = "none"
        smartphones.style.display = "none"
        speakers.style.display = "none"
        laptops.style.display = "none"
        lens.style.display = "none"
        pendrives.style.display = "none"
        tablet.style.display = "none"
        television.style.display = "none"
        cartEl.style.display = "none"
        aboutUs.style.display="block"
        addressContainer.style.display = "none"
}



function onLogout(){
    appContainer.style.display = "none"
        loginForm.style.display="flex"
        home.style.display = "none"
          cameraAccessories.style.display = "none"
        cameras.style.display = "none"
        cardLink1.style.display = "none"
        cardLink2.style.display = "none"
        cardLink3.style.display = "none"
        cardLink4.style.display = "none"
        cardLink5.style.display = "none"
        cardLink6.style.display = "none"
        cardLink7.style.display = "none"
        cardLink8.style.display = "none"
        cardLink9.style.display = "none"
        games.style.display = "none"
        harddrives.style.display = "none"
        watches.style.display = "none"
        smartphones.style.display = "none"
        speakers.style.display = "none"
        laptops.style.display = "none"
        lens.style.display = "none"
        pendrives.style.display = "none"
        tablet.style.display = "none"
        television.style.display = "none"
        cartEl.style.display = "none"
        aboutUs.style.display="none"
        addressContainer.style.display = "none"

        userId.value = ""
        password.value = ""
}

function onCart(){
    appContainer.style.display = "block"
    subContainer.style.display="block"
    
        loginForm.style.display="none"
        home.style.display = "none"
          cameraAccessories.style.display = "none"
        cameras.style.display = "none"
        cardLink1.style.display = "none"
        cardLink2.style.display = "none"
        cardLink3.style.display = "none"
        cardLink4.style.display = "none"
        cardLink5.style.display = "none"
        cardLink6.style.display = "none"
        cardLink7.style.display = "none"
        cardLink8.style.display = "none"
        cardLink9.style.display = "none"
        games.style.display = "none"
        harddrives.style.display = "none"
        watches.style.display = "none"
        smartphones.style.display = "none"
        speakers.style.display = "none"
        laptops.style.display = "none"
        lens.style.display = "none"
        pendrives.style.display = "none"
        tablet.style.display = "none"
        television.style.display = "none"
        cartEl.style.display = "block"
        aboutUs.style.display="none"
        addressContainer.style.display = "none"
        searchSubcontainer.classList.add("d-none")
}

function onCardLink1(){
    appContainer.style.display = "block"
        loginForm.style.display="none"
        home.style.display = "none"
          cameraAccessories.style.display = "none"
        cameras.style.display = "none"
        cardLink1.style.display = "block"
        cardLink2.style.display = "none"
        cardLink3.style.display = "none"
        cardLink4.style.display = "none"
        cardLink5.style.display = "none"
        cardLink6.style.display = "none"
        cardLink7.style.display = "none"
        cardLink8.style.display = "none"
        cardLink9.style.display = "none"
        games.style.display = "none"
        harddrives.style.display = "none"
        watches.style.display = "none"
        smartphones.style.display = "none"
        speakers.style.display = "none"
        laptops.style.display = "none"
        lens.style.display = "none"
        pendrives.style.display = "none"
        tablet.style.display = "none"
        television.style.display = "none"
        cartEl.style.display = "none"
        aboutUs.style.display="none"
        addressContainer.style.display = "none"
        subContainer.style.display="block"
        searchSubcontainer.classList.add("d-none")
}

function onCardLink2(){
    appContainer.style.display = "block"
        loginForm.style.display="none"
        home.style.display = "none"
          cameraAccessories.style.display = "none"
        cameras.style.display = "none"
        cardLink1.style.display = "none"
        cardLink2.style.display = "block"
        cardLink3.style.display = "none"
        cardLink4.style.display = "none"
        cardLink5.style.display = "none"
        cardLink6.style.display = "none"
        cardLink7.style.display = "none"
        cardLink8.style.display = "none"
        cardLink9.style.display = "none"
        games.style.display = "none"
        harddrives.style.display = "none"
        watches.style.display = "none"
        smartphones.style.display = "none"
        speakers.style.display = "none"
        laptops.style.display = "none"
        lens.style.display = "none"
        pendrives.style.display = "none"
        tablet.style.display = "none"
        television.style.display = "none"
        cartEl.style.display = "none"
        aboutUs.style.display="none"
        addressContainer.style.display = "none"
        subContainer.style.display="block"
        searchSubcontainer.classList.add("d-none")
}

function onCardLink3(){
    appContainer.style.display = "block"
        loginForm.style.display="none"
        home.style.display = "none"
          cameraAccessories.style.display = "none"
        cameras.style.display = "none"
        cardLink1.style.display = "none"
        cardLink2.style.display = "none"
        cardLink3.style.display = "block"
        cardLink4.style.display = "none"
        cardLink5.style.display = "none"
        cardLink6.style.display = "none"
        cardLink7.style.display = "none"
        cardLink8.style.display = "none"
        cardLink9.style.display = "none"
        games.style.display = "none"
        harddrives.style.display = "none"
        watches.style.display = "none"
        smartphones.style.display = "none"
        speakers.style.display = "none"
        laptops.style.display = "none"
        lens.style.display = "none"
        pendrives.style.display = "none"
        tablet.style.display = "none"
        television.style.display = "none"
        cartEl.style.display = "none"
        aboutUs.style.display="none"
        addressContainer.style.display = "none"
        subContainer.style.display="block"
        searchSubcontainer.classList.add("d-none")
}

function onCardLink4(){
    appContainer.style.display = "block"
        loginForm.style.display="none"
        home.style.display = "none"
          cameraAccessories.style.display = "none"
        cameras.style.display = "none"
        cardLink1.style.display = "none"
        cardLink2.style.display = "none"
        cardLink3.style.display = "none"
        cardLink4.style.display = "block"
        cardLink5.style.display = "none"
        cardLink6.style.display = "none"
        cardLink7.style.display = "none"
        cardLink8.style.display = "none"
        cardLink9.style.display = "none"
        games.style.display = "none"
        harddrives.style.display = "none"
        watches.style.display = "none"
        smartphones.style.display = "none"
        speakers.style.display = "none"
        laptops.style.display = "none"
        lens.style.display = "none"
        pendrives.style.display = "none"
        tablet.style.display = "none"
        television.style.display = "none"
        cartEl.style.display = "none"
        aboutUs.style.display="none"
        addressContainer.style.display = "none"
        subContainer.style.display="block"
        searchSubcontainer.classList.add("d-none")
}

function onCardLink5(){
    appContainer.style.display = "block"
        loginForm.style.display="none"
        home.style.display = "none"
          cameraAccessories.style.display = "none"
        cameras.style.display = "none"
        cardLink1.style.display = "none"
        cardLink2.style.display = "none"
        cardLink3.style.display = "none"
        cardLink4.style.display = "none"
        cardLink5.style.display = "block"
        cardLink6.style.display = "none"
        cardLink7.style.display = "none"
        cardLink8.style.display = "none"
        cardLink9.style.display = "none"
        games.style.display = "none"
        harddrives.style.display = "none"
        watches.style.display = "none"
        smartphones.style.display = "none"
        speakers.style.display = "none"
        laptops.style.display = "none"
        lens.style.display = "none"
        pendrives.style.display = "none"
        tablet.style.display = "none"
        television.style.display = "none"
        cartEl.style.display = "none"
        aboutUs.style.display="none"
        addressContainer.style.display = "none"
        subContainer.style.display="block"
        searchSubcontainer.classList.add("d-none")
}

function onCardLink6(){
    appContainer.style.display = "block"
        loginForm.style.display="none"
        home.style.display = "none"
          cameraAccessories.style.display = "none"
        cameras.style.display = "none"
        cardLink1.style.display = "none"
        cardLink2.style.display = "none"
        cardLink3.style.display = "none"
        cardLink4.style.display = "none"
        cardLink5.style.display = "none"
        cardLink6.style.display = "block"
        cardLink7.style.display = "none"
        cardLink8.style.display = "none"
        cardLink9.style.display = "none"
        games.style.display = "none"
        harddrives.style.display = "none"
        watches.style.display = "none"
        smartphones.style.display = "none"
        speakers.style.display = "none"
        laptops.style.display = "none"
        lens.style.display = "none"
        pendrives.style.display = "none"
        tablet.style.display = "none"
        television.style.display = "none"
        cartEl.style.display = "none"
        aboutUs.style.display="none"
        addressContainer.style.display = "none"
        subContainer.style.display="block"
        searchSubcontainer.classList.add("d-none")
}

function onCardLink7(){
    appContainer.style.display = "block"
        loginForm.style.display="none"
        home.style.display = "none"
          cameraAccessories.style.display = "none"
        cameras.style.display = "none"
        cardLink1.style.display = "none"
        cardLink2.style.display = "none"
        cardLink3.style.display = "none"
        cardLink4.style.display = "none"
        cardLink5.style.display = "none"
        cardLink6.style.display = "none"
        cardLink7.style.display = "block"
        cardLink8.style.display = "none"
        cardLink9.style.display = "none"
        games.style.display = "none"
        harddrives.style.display = "none"
        watches.style.display = "none"
        smartphones.style.display = "none"
        speakers.style.display = "none"
        laptops.style.display = "none"
        lens.style.display = "none"
        pendrives.style.display = "none"
        tablet.style.display = "none"
        television.style.display = "none"
        cartEl.style.display = "none"
        aboutUs.style.display="none"
        addressContainer.style.display = "none"
        subContainer.style.display="block"
        searchSubcontainer.classList.add("d-none")
}

function onCardLink8(){
    appContainer.style.display = "block"
        loginForm.style.display="none"
        home.style.display = "none"
          cameraAccessories.style.display = "none"
        cameras.style.display = "none"
        cardLink1.style.display = "none"
        cardLink2.style.display = "none"
        cardLink3.style.display = "none"
        cardLink4.style.display = "none"
        cardLink5.style.display = "none"
        cardLink6.style.display = "none"
        cardLink7.style.display = "none"
        cardLink8.style.display = "block"
        cardLink9.style.display = "none"
        games.style.display = "none"
        harddrives.style.display = "none"
        watches.style.display = "none"
        smartphones.style.display = "none"
        speakers.style.display = "none"
        laptops.style.display = "none"
        lens.style.display = "none"
        pendrives.style.display = "none"
        tablet.style.display = "none"
        television.style.display = "none"
        cartEl.style.display = "none"
        aboutUs.style.display="none"
        addressContainer.style.display = "none"
        subContainer.style.display="block"
        searchSubcontainer.classList.add("d-none")
}

function onCardLink9(){
    appContainer.style.display = "block"
        loginForm.style.display="none"
        home.style.display = "none"
          cameraAccessories.style.display = "none"
        cameras.style.display = "none"
        cardLink1.style.display = "none"
        cardLink2.style.display = "none"
        cardLink3.style.display = "none"
        cardLink4.style.display = "none"
        cardLink5.style.display = "none"
        cardLink6.style.display = "none"
        cardLink7.style.display = "none"
        cardLink8.style.display = "none"
        cardLink9.style.display = "block"
        games.style.display = "none"
        harddrives.style.display = "none"
        watches.style.display = "none"
        smartphones.style.display = "none"
        speakers.style.display = "none"
        laptops.style.display = "none"
        lens.style.display = "none"
        pendrives.style.display = "none"
        tablet.style.display = "none"
        television.style.display = "none"
        cartEl.style.display = "none"
        aboutUs.style.display="none"
        addressContainer.style.display = "none"
        subContainer.style.display="block"
        searchSubcontainer.classList.add("d-none")
}

function onSpeakers(){
    appContainer.style.display = "block"
        loginForm.style.display="none"
        home.style.display = "none"
          cameraAccessories.style.display = "none"
        cameras.style.display = "none"
        cardLink1.style.display = "none"
        cardLink2.style.display = "none"
        cardLink3.style.display = "none"
        cardLink4.style.display = "none"
        cardLink5.style.display = "none"
        cardLink6.style.display = "none"
        cardLink7.style.display = "none"
        cardLink8.style.display = "none"
        cardLink9.style.display = "none"
        games.style.display = "none"
        harddrives.style.display = "none"
        watches.style.display = "none"
        smartphones.style.display = "none"
        speakers.style.display = "block"
        laptops.style.display = "none"
        lens.style.display = "none"
        pendrives.style.display = "none"
        tablet.style.display = "none"
        television.style.display = "none"
        cartEl.style.display = "none"
        aboutUs.style.display="none"
        addressContainer.style.display = "none"
        subContainer.style.display="block"
        searchSubcontainer.classList.add("d-none")
}

function onWatches(){
    appContainer.style.display = "block"
        loginForm.style.display="none"
        home.style.display = "none"
          cameraAccessories.style.display = "none"
        cameras.style.display = "none"
        cardLink1.style.display = "none"
        cardLink2.style.display = "none"
        cardLink3.style.display = "none"
        cardLink4.style.display = "none"
        cardLink5.style.display = "none"
        cardLink6.style.display = "none"
        cardLink7.style.display = "none"
        cardLink8.style.display = "none"
        cardLink9.style.display = "none"
        games.style.display = "none"
        harddrives.style.display = "none"
        watches.style.display = "block"
        smartphones.style.display = "none"
        speakers.style.display = "none"
        laptops.style.display = "none"
        lens.style.display = "none"
        pendrives.style.display = "none"
        tablet.style.display = "none"
        television.style.display = "none"
        cartEl.style.display = "none"
        aboutUs.style.display="none"
        addressContainer.style.display = "none"
        subContainer.style.display="block"
        searchSubcontainer.classList.add("d-none")
}

function onHome(){
    appContainer.style.display = "block"
        loginForm.style.display="none"
        home.style.display = "block"
          cameraAccessories.style.display = "none"
        cameras.style.display = "none"
        cardLink1.style.display = "none"
        cardLink2.style.display = "none"
        cardLink3.style.display = "none"
        cardLink4.style.display = "none"
        cardLink5.style.display = "none"
        cardLink6.style.display = "none"
        cardLink7.style.display = "none"
        cardLink8.style.display = "none"
        cardLink9.style.display = "none"
        games.style.display = "none"
        harddrives.style.display = "none"
        watches.style.display = "none"
        smartphones.style.display = "none"
        speakers.style.display = "none"
        laptops.style.display = "none"
        lens.style.display = "none"
        pendrives.style.display = "none"
        tablet.style.display = "none"
        television.style.display = "none"
        cartEl.style.display = "none"
        aboutUs.style.display="none"
        addressContainer.style.display = "none"
        subContainer.style.display="block"
        searchSubcontainer.classList.add("d-none");
}

function onTablets(){
    appContainer.style.display = "block"
        loginForm.style.display="none"
        home.style.display = "none"
          cameraAccessories.style.display = "none"
        cameras.style.display = "none"
        cardLink1.style.display = "none"
        cardLink2.style.display = "none"
        cardLink3.style.display = "none"
        cardLink4.style.display = "none"
        cardLink5.style.display = "none"
        cardLink6.style.display = "none"
        cardLink7.style.display = "none"
        cardLink8.style.display = "none"
        cardLink9.style.display = "none"
        games.style.display = "none"
        harddrives.style.display = "none"
        watches.style.display = "none"
        smartphones.style.display = "none"
        speakers.style.display = "none"
        laptops.style.display = "none"
        lens.style.display = "none"
        pendrives.style.display = "none"
        tablet.style.display = "block"
        television.style.display = "none"
        cartEl.style.display = "none"
        aboutUs.style.display="none"
        addressContainer.style.display = "none"
        subContainer.style.display="block"
        searchSubcontainer.classList.add("d-none")
}

function onGames(){
    appContainer.style.display = "block"
        loginForm.style.display="none"
        home.style.display = "none"
          cameraAccessories.style.display = "none"
        cameras.style.display = "none"
        cardLink1.style.display = "none"
        cardLink2.style.display = "none"
        cardLink3.style.display = "none"
        cardLink4.style.display = "none"
        cardLink5.style.display = "none"
        cardLink6.style.display = "none"
        cardLink7.style.display = "none"
        cardLink8.style.display = "none"
        cardLink9.style.display = "none"
        games.style.display = "block"
        harddrives.style.display = "none"
        watches.style.display = "none"
        smartphones.style.display = "none"
        speakers.style.display = "none"
        laptops.style.display = "none"
        lens.style.display = "none"
        pendrives.style.display = "none"
        tablet.style.display = "none"
        television.style.display = "none"
        cartEl.style.display = "none"
        aboutUs.style.display="none"
        addressContainer.style.display = "none"
        subContainer.style.display="block"
        searchSubcontainer.classList.add("d-none")
}

function onSmartphones(){
    appContainer.style.display = "block"
        loginForm.style.display="none"
        home.style.display = "none"
          cameraAccessories.style.display = "none"
        cameras.style.display = "none"
        cardLink1.style.display = "none"
        cardLink2.style.display = "none"
        cardLink3.style.display = "none"
        cardLink4.style.display = "none"
        cardLink5.style.display = "none"
        cardLink6.style.display = "none"
        cardLink7.style.display = "none"
        cardLink8.style.display = "none"
        cardLink9.style.display = "none"
        games.style.display = "none"
        harddrives.style.display = "none"
        watches.style.display = "none"
        smartphones.style.display = "block"
        speakers.style.display = "none"
        laptops.style.display = "none"
        lens.style.display = "none"
        pendrives.style.display = "none"
        tablet.style.display = "none"
        television.style.display = "none"
        cartEl.style.display = "none"
        aboutUs.style.display="none"
        addressContainer.style.display = "none"
        subContainer.style.display="block"
        searchSubcontainer.classList.add("d-none")
}

function onCameraAccessries(){
    appContainer.style.display = "block"
        loginForm.style.display="none"
        home.style.display = "none"
        cameraAccessories.style.display = "block"
        cameras.style.display = "none"
        cardLink1.style.display = "none"
        cardLink2.style.display = "none"
        cardLink3.style.display = "none"
        cardLink4.style.display = "none"
        cardLink5.style.display = "none"
        cardLink6.style.display = "none"
        cardLink7.style.display = "none"
        cardLink8.style.display = "none"
        cardLink9.style.display = "none"
        games.style.display = "none"
        harddrives.style.display = "none"
        watches.style.display = "none"
        smartphones.style.display = "none"
        speakers.style.display = "none"
        laptops.style.display = "none"
        lens.style.display = "none"
        pendrives.style.display = "none"
        tablet.style.display = "none"
        television.style.display = "none"
        cartEl.style.display = "none"
        aboutUs.style.display="none"
        addressContainer.style.display = "none"
        subContainer.style.display="block"
        searchSubcontainer.classList.add("d-none")
}

function onlens(){
    appContainer.style.display = "block"
        loginForm.style.display="none"
        home.style.display = "none"
          cameraAccessories.style.display = "none"
        cameras.style.display = "none"
        cardLink1.style.display = "none"
        cardLink2.style.display = "none"
        cardLink3.style.display = "none"
        cardLink4.style.display = "none"
        cardLink5.style.display = "none"
        cardLink6.style.display = "none"
        cardLink7.style.display = "none"
        cardLink8.style.display = "none"
        cardLink9.style.display = "none"
        games.style.display = "none"
        harddrives.style.display = "none"
        watches.style.display = "none"
        smartphones.style.display = "none"
        speakers.style.display = "none"
        laptops.style.display = "none"
        lens.style.display = "block"
        pendrives.style.display = "none"
        tablet.style.display = "none"
        television.style.display = "none"
        cartEl.style.display = "none"
        aboutUs.style.display="none"
        addressContainer.style.display = "none"
        subContainer.style.display="block"
        searchSubcontainer.classList.add("d-none")
}

function onCameras(){
    appContainer.style.display = "block"
        loginForm.style.display="none"
        home.style.display = "none"
        cameraAccessories.style.display = "none"
        cameras.style.display = "block"
        cardLink1.style.display = "none"
        cardLink2.style.display = "none"
        cardLink3.style.display = "none"
        cardLink4.style.display = "none"
        cardLink5.style.display = "none"
        cardLink6.style.display = "none"
        cardLink7.style.display = "none"
        cardLink8.style.display = "none"
        cardLink9.style.display = "none"
        games.style.display = "none"
        harddrives.style.display = "none"
        watches.style.display = "none"
        smartphones.style.display = "none"
        speakers.style.display = "none"
        laptops.style.display = "none"
        lens.style.display = "none"
        pendrives.style.display = "none"
        tablet.style.display = "none"
        television.style.display = "none"
        cartEl.style.display = "none"
        aboutUs.style.display="none"
        addressContainer.style.display = "none"
        subContainer.style.display="block"
        searchSubcontainer.classList.add("d-none")
}

function onHardrives(){
    appContainer.style.display = "block"
        loginForm.style.display="none"
        home.style.display = "none"
          cameraAccessories.style.display = "none"
        cameras.style.display = "none"
        cardLink1.style.display = "none"
        cardLink2.style.display = "none"
        cardLink3.style.display = "none"
        cardLink4.style.display = "none"
        cardLink5.style.display = "none"
        cardLink6.style.display = "none"
        cardLink7.style.display = "none"
        cardLink8.style.display = "none"
        cardLink9.style.display = "none"
        games.style.display = "none"
        harddrives.style.display = "block"
        watches.style.display = "none"
        smartphones.style.display = "none"
        speakers.style.display = "none"
        laptops.style.display = "none"
        lens.style.display = "none"
        pendrives.style.display = "none"
        tablet.style.display = "none"
        television.style.display = "none"
        cartEl.style.display = "none"
        aboutUs.style.display="none"
        addressContainer.style.display = "none"
        subContainer.style.display="block"
        searchSubcontainer.classList.add("d-none")
}

function onPendrives(){
    appContainer.style.display = "block"
        loginForm.style.display="none"
        home.style.display = "none"
          cameraAccessories.style.display = "none"
        cameras.style.display = "none"
        cardLink1.style.display = "none"
        cardLink2.style.display = "none"
        cardLink3.style.display = "none"
        cardLink4.style.display = "none"
        cardLink5.style.display = "none"
        cardLink6.style.display = "none"
        cardLink7.style.display = "none"
        cardLink8.style.display = "none"
        cardLink9.style.display = "none"
        games.style.display = "none"
        harddrives.style.display = "none"
        watches.style.display = "none"
        smartphones.style.display = "none"
        speakers.style.display = "none"
        laptops.style.display = "none"
        lens.style.display = "none"
        pendrives.style.display = "block"
        tablet.style.display = "none"
        television.style.display = "none"
        cartEl.style.display = "none"
        aboutUs.style.display="none"
        addressContainer.style.display = "none"
        subContainer.style.display="block"
        searchSubcontainer.classList.add("d-none")
}

function onLaptop(){
    appContainer.style.display = "block"
        loginForm.style.display="none"
        home.style.display = "none"
          cameraAccessories.style.display = "none"
        cameras.style.display = "none"
        cardLink1.style.display = "none"
        cardLink2.style.display = "none"
        cardLink3.style.display = "none"
        cardLink4.style.display = "none"
        cardLink5.style.display = "none"
        cardLink6.style.display = "none"
        cardLink7.style.display = "none"
        cardLink8.style.display = "none"
        cardLink9.style.display = "none"
        games.style.display = "none"
        harddrives.style.display = "none"
        watches.style.display = "none"
        smartphones.style.display = "none"
        speakers.style.display = "none"
        laptops.style.display = "block"
        lens.style.display = "none"
        pendrives.style.display = "none"
        tablet.style.display = "none"
        television.style.display = "none"
        cartEl.style.display = "none"
        aboutUs.style.display="none"
        addressContainer.style.display = "none"
        subContainer.style.display="block"
        searchSubcontainer.classList.add("d-none")
        
}

  
function onTv(){
    appContainer.style.display = "block"
        loginForm.style.display="none"
        home.style.display = "none"
        cameraAccessories.style.display = "none"
        cameras.style.display = "none"
        cardLink1.style.display = "none"
        cardLink2.style.display = "none"
        cardLink3.style.display = "none"
        cardLink4.style.display = "none"
        cardLink5.style.display = "none"
        cardLink6.style.display = "none"
        cardLink7.style.display = "none"
        cardLink8.style.display = "none"
        cardLink9.style.display = "none"
        games.style.display = "none"
        harddrives.style.display = "none"
        watches.style.display = "none"
        smartphones.style.display = "none"
        speakers.style.display = "none"
        laptops.style.display = "none"
        lens.style.display = "none"
        pendrives.style.display = "none"
        tablet.style.display = "none"
        television.style.display = "block"
        cartEl.style.display = "none"
        aboutUs.style.display="none"
        addressContainer.style.display = "none"
        subContainer.style.display="block"
        searchSubcontainer.classList.add("d-none")
}

