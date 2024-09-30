window.onload = function() {
    let headerPic = document.getElementById("main-body");
    let opacity = 0;
    let intervalID = setInterval(function() {
        if (opacity < 1) {
            opacity += 0.05;
            headerPic.style.opacity = opacity;
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