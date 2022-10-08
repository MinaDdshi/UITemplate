function resize() {
    document.getElementById("container").style.height = window.innerHeight;
}

function hideShowPassword() {
    let passwordType = document.getElementById("HSPassword");
    if (passwordType.getAttribute("type") == "password") {
        passwordType.setAttribute("type", "Text")
    } else {
        passwordType.setAttribute("type", "password");
    }
}










function hideShowPassword2() {
    let passwordType = document.getElementById("HSPasswordId");
    let passwordType2 = document.getElementById("confirmPasswordId");
    if (passwordType.getAttribute("type") == "password") {
        passwordType.setAttribute("type", "Text")
        passwordType2.setAttribute("type", "Text")
    } else {
        passwordType.setAttribute("type", "password");
        passwordType2.setAttribute("type", "password");
    }
}


function CWConfirmPassword() {
    let firstPassword = document.getElementById("HSPasswordId");
    let secondPassword = document.getElementById("confirmPasswordId");
    if (firstPassword.value != "" && secondPassword.value != "") {
        if (firstPassword.value == secondPassword.value) {
            secondPassword.classList.remove("inputConfirmPasswordStyle");
            secondPassword.classList.remove("inputConfirmPasswordStyleWrong");
            secondPassword.classList.add("inputConfirmPasswordStyleCorrect");
        } else {
            secondPassword.classList.remove("inputConfirmPasswordStyle");
            secondPassword.classList.remove("inputConfirmPasswordStyleCorrect");
            secondPassword.classList.add("inputConfirmPasswordStyleWrong");
        }
    } else if (firstPassword.value == "" && secondPassword.value != "") {
        secondPassword.classList.remove("inputConfirmPasswordStyleCorrect");
        secondPassword.classList.remove("inputConfirmPasswordStyle");
        secondPassword.classList.add("inputConfirmPasswordStyleWrong");
    } else {
        secondPassword.classList.remove("inputConfirmPasswordStyleCorrect");
        secondPassword.classList.remove("inputConfirmPasswordStyleWrong");
        secondPassword.classList.add("inputConfirmPasswordStyle");
    }
}
