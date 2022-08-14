window.onload = function() {
    const msg = document.getElementById("message").innerHTML;
    attributes = splitMessage(msg)

    fname = document.getElementById('fname');
    fname.value = attributes[0];

    minit = document.getElementById('minit');
    minit.value = attributes[1];

    lname = document.getElementById('lname');
    lname.value = attributes[2];

    birthdate = document.getElementById('birthdate');
    birthdate.value = attributes[3];

    address = document.getElementById('address');
    address.value = attributes[4];

    phonenumber = document.getElementById('phonenumber');
    phonenumber.value = attributes[5];
};


function validationName(value) {
    var valueRegex = /^[a-zA-Z]{2,}$/;
    return valueRegex.test(value);
}