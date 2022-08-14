document.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        document.getElementById("login-button").click();
    }
});

window.onload = function() {
    const msg = document.getElementById("message").innerHTML;
    alert(msg);
};

function validation(value) {
    var valueRegex = /^[a-zA-Z0-9]{4,}$/;
    return valueRegex.test(value);
}

function inputCheck() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    if (validation(username) && validation(password)) {
        document.getElementById("login-form").submit();
    } else {
        alert("Lütfen kullanıcı adınızı ve parolanızı gerekli şekilde doldurunuz!");
    }
}