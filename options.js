window.onload = function() {
    let mainBody = document.getElementById("car-option-section");
    let opacity = 0;
    let intervalID = setInterval(function() {
        if (opacity < 1) {
            opacity += 0.05;
            mainBody.style.opacity = opacity;
        }
        else {
            clearInterval(intervalID);
        }
    }, 50);
};

function toggleHome() {
    window.location.href="./index.html";
}

function toggleLogin() {
    window.location.href= "./login.html";
}

function checkMoreOptions() {
    window.location.href = "./options.html";
}