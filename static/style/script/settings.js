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

function validationDate(value) {
    var valueRegex = /^(19|20)\d\d[- /.](0[1-9]|1[012])[- /.](0[1-9]|[12][0-9]|3[01])$/
    return valueRegex.test(value);
}

function validationPhone(value) {
    var valueRegex = /^([0-9]{10})$/;
    return valueRegex.test(value)
}

function saveSettings() {

    fname = document.getElementById('fname').value;
    minit = document.getElementById('minit').value;
    lname = document.getElementById('lname').value;
    birthdate = document.getElementById('birthdate').value;
    address = document.getElementById('address').value;
    phonenumber = document.getElementById('phonenumber').value;

    if (!validationName(fname) || !validationName(lname)) {
        alert("Lütfen adı ve soyadı minimum 2 harften oluşacak şekilde ve yalnızca harflerden oluşacak şekilde veriniz!");
    } else if (!validationDate(birthdate)) {
        alert("Lütfen YYYY-AA-GG formatında geçerli bir tarih giriniz!");
    } else if (!validationPhone(phonenumber)) {
        alert("Lütfen 1234567890 formatında geçerli bir telefon numarası giriniz!");
    } else {
        document.getElementById("settings-form").submit();
    }

}