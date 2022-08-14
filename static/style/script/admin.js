function academicianTableActive() {
    document.getElementById('admin-lecture').style.display = 'none';
    document.getElementById('admin-student').style.display = 'none';
    document.getElementById('add-academician-form').style.display = 'none';
    document.getElementById('add-student-form').style.display = 'none';
    document.getElementById('add-lecture-form').style.display = 'none';
    document.getElementById('first-row').style.opacity = 1;
    document.getElementById('buttons').style.opacity = 1;
    document.getElementById('admin-academician').style.opacity = 1;
    document.getElementById('exit-row').style.opacity = 1;
    $('#admin-academician').slideDown('2000');
}

function studentTableActive() {
    document.getElementById('admin-academician').style.display = 'none';
    document.getElementById('admin-lecture').style.display = 'none';
    document.getElementById('add-academician-form').style.display = 'none';
    document.getElementById('add-student-form').style.display = 'none';
    document.getElementById('add-lecture-form').style.display = 'none';
    document.getElementById('first-row').style.opacity = 1;
    document.getElementById('buttons').style.opacity = 1;
    document.getElementById('admin-student').style.opacity = 1;
    document.getElementById('exit-row').style.opacity = 1;
    $('#admin-student').slideDown('2000');
}

function lectureTableActive() {
    document.getElementById('admin-academician').style.display = 'none';
    document.getElementById('admin-student').style.display = 'none';
    document.getElementById('add-academician-form').style.display = 'none';
    document.getElementById('add-student-form').style.display = 'none';
    document.getElementById('add-lecture-form').style.display = 'none';
    document.getElementById('first-row').style.opacity = 1;
    document.getElementById('buttons').style.opacity = 1;
    document.getElementById('admin-lecture').style.opacity = 1;
    document.getElementById('exit-row').style.opacity = 1;
    $('#admin-lecture').slideDown('2000');
}

function addAcademician() {
    document.getElementById('first-row').style.opacity = 0.3;
    document.getElementById('buttons').style.opacity = 0.3;
    document.getElementById('admin-academician').style.opacity = 0.3;
    document.getElementById('exit-row').style.opacity = 0.3;
    document.getElementById('add-academician-form').style.opacity = 1;
    document.getElementById('add-academician-form').style.display = 'block';
}

function addStudent() {
    document.getElementById('first-row').style.opacity = 0.3;
    document.getElementById('buttons').style.opacity = 0.3;
    document.getElementById('admin-student').style.opacity = 0.3;
    document.getElementById('exit-row').style.opacity = 0.3;
    document.getElementById('add-student-form').style.opacity = 1;
    document.getElementById('add-student-form').style.display = 'block';
}

function addLecture() {
    document.getElementById('first-row').style.opacity = 0.3;
    document.getElementById('buttons').style.opacity = 0.3;
    document.getElementById('admin-lecture').style.opacity = 0.3;
    document.getElementById('exit-row').style.opacity = 0.3;
    document.getElementById('add-lecture-form').style.opacity = 1;
    document.getElementById('add-lecture-form').style.display = 'block';

}

function closePopUp(choice) {
    if (choice == 0) {
        document.getElementById('add-academician-form').style.display = "none";
        document.getElementById('first-row').style.opacity = 1;
        document.getElementById('buttons').style.opacity = 1;
        document.getElementById('admin-academician').style.opacity = 1;
        document.getElementById('exit-row').style.opacity = 1;
    } else if (choice == 1) {
        document.getElementById('add-student-form').style.display = "none";
        document.getElementById('first-row').style.opacity = 1;
        document.getElementById('buttons').style.opacity = 1;
        document.getElementById('admin-student').style.opacity = 1;
        document.getElementById('exit-row').style.opacity = 1;
    } else {
        document.getElementById('add-lecture-form').style.display = "none";
        document.getElementById('first-row').style.opacity = 1;
        document.getElementById('buttons').style.opacity = 1;
        document.getElementById('admin-lecture').style.opacity = 1;
        document.getElementById('exit-row').style.opacity = 1;
    }
}

function validationUsername(value){
    var valueRegex = /^[a-zA-Z0-9]{4,}$/;
    return valueRegex.test(value);
}

function validationName(value){
    var valueRegex = /^[a-zA-Z]{2,}$/;
    return valueRegex.test(value);
}

function createAcademician(){

    const username = document.getElementById("a_username").value;
    const fname = document.getElementById("a_fname").value;
    const lname = document.getElementById("a_lname").value;
    const depcode = document.getElementById("dep-codes").value;

    if(!validationUsername(username)){
        alert("Lütfen kullanıcı adını minimum 4 karakter ve alfanümerik olarak veriniz!");
    }

    else if(!validationName(fname) || !validationName(lname)){
        alert("Lütfen adı ve soyadı minimum 2 harften oluşacak şekilde ve yalnızca harflerden oluşacak şekilde veriniz!");
    }

    else if(depcode == "Seçiniz"){
        alert("Lütfen bölüm seçiniz");
    }

    else{
        document.getElementById("academician-inputs").submit();
    }
}

function validationStudentNumber(value) {
    var valueRegex = /^[1-9][0-9]{8}$/;
    return valueRegex.test(value);
}

function createStudent(){

    const username = document.getElementById("s_username").value;
    const fname = document.getElementById("s_fname").value;
    const advicer = document.getElementById("academician-names").value;
    const lname = document.getElementById("s_lname").value;
    const studentnumber = document.getElementById("s_number").value
    const depcode = document.getElementById("dep-codes").value;
    
    if(!validationUsername(username)){
        alert("Lütfen kullanıcı adını minimum 4 karakter ve alfanümerik olarak veriniz!");
    }

    else if(!validationName(fname) || !validationName(lname)){
        alert("Lütfen adı ve soyadı minimum 2 harften oluşacak şekilde ve yalnızca harflerden oluşacak şekilde veriniz!");
    }

    else if(!validationStudentNumber(studentnumber)){
        alert("Lütfen öğrenci numarasını 0'la başlamayacak şekilde 9 haneli olarak veriniz!");
    }

    else if(depcode == "Seçiniz"){
        alert("Lütfen bölüm seçiniz");
    }

    else if(advicer == "Seçiniz" || advicer == "Önce Bölüm Seçiniz"){
        alert("Lütfen akademisyen seçiniz");
    }

    else{
        document.getElementById("student-inputs").submit();
    }
}

function validationCode(value) {
    var valueRegex = /^[1-4][0-9][0-9]$/;
    return valueRegex.test(value);
}

function validationCredit(value) {
    var valueRegex = /^[1-4]$/;
    return valueRegex.test(value);
}

function validationQuota(value) {
    var valueRegex = /^[1-9][0-9]$/;
    return valueRegex.test(value);
}

function createLecture() {

    const depcode = document.getElementById("dep-codes").value;
    const lecturecode = document.getElementById("l_lecturecode").value;
    const lecturer = document.getElementById("academician-names").value;
    const quota = document.getElementById("l_quota").value;
    const credit = document.getElementById("l_credit").value;

    if(!validationCode(lecturecode)){
        alert("Lütfen ders kodunu 100-499 arası sayılardan veriniz!");
    }

    else if(!validationCredit(credit)){
        alert("Lütfen ders kredisini 1-4 arası sayılardan veriniz!");
    }

    else if(!validationQuota(quota)){
        alert("Lütfen ders kontjanını 10-99 arası sayılardan veriniz!");
    }

    else if(depcode == "Seçiniz"){
        alert("Lütfen bölüm seçiniz");
    }

    else if(lecturer == "Seçiniz" || lecturer == "Önce Bölüm Seçiniz"){
        alert("Lütfen akademisyen seçiniz");
    }

    else{
        document.getElementById("lecture-inputs").submit();
    }
}