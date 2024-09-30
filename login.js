document.getElementById("login-button").addEventListener("click", function(e) {
    e.preventDefault();
    let password = document.getElementById("pass_entry").value;
    const specialCharRegex = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
    if (!specialCharRegex.test(password) || password.length < 8 || password.length > 10) {
        if (!specialCharRegex.test(password)) {
            alert("Password must have a special character");
        }else {
            alert("Password must be between 8 and 10");
        }
        
    }else {
        alert("Password pass");
        window.location.href("./index.html");
    }
});
