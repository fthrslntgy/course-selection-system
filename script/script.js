//LOGIN

//Login ekrani, enter-giris trigger fonksiyonu
document.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        document.getElementById("login-button").click();
    }
});

//ADMIN

//Admin ekrani, tablolari goruntuleme fonksiyonu
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
//user'a gore formu gonder
function sendUserDatas(choice) {
    if (choice == 0) {

    } else if (choice == 1) {

    } else {

    }
}

//ACADEMICIAN
function lecturesActive() {
    document.getElementById('academician-students').style.display = 'none';
    document.getElementById('academician-lecture-approvement').style.display = 'none';
    document.getElementById('academician-assistants').style.display = 'none';
    $('#academician-lectures').slideDown('2000');
}

function studentsActive() {
    document.getElementById('academician-lectures').style.display = 'none';
    document.getElementById('academician-lecture-approvement').style.display = 'none';
    document.getElementById('academician-assistants').style.display = 'none';
    document.getElementById('academician-student-table').style.display = 'none';
    $('#academician-students').slideDown('2000');
}

function assistantApprovementActive() {
    document.getElementById('academician-lectures').style.display = 'none';
    document.getElementById('academician-students').style.display = 'none';
    document.getElementById('academician-lecture-approvement').style.display = 'none';
    $('#academician-assistants').slideDown('2000');
}

function approvementsActive() {
    document.getElementById('academician-lectures').style.display = 'none';
    document.getElementById('academician-students').style.display = 'none';
    document.getElementById('academician-assistants').style.display = 'none';
    document.getElementById('academician-lecture-approvement-table').style.display = 'none';
    $('#academician-lecture-approvement').slideDown('2000');
}

function studentsTableActive() {
    document.getElementById('academician-lectures').style.display = 'none';
    document.getElementById('academician-lecture-approvement').style.display = 'none';
    document.getElementById('academician-assistants').style.display = 'none';
    $('#academician-student-table').slideDown('2000');
}

function approvementFormActive() {
    document.getElementById('academician-lectures').style.display = 'none';
    document.getElementById('academician-students').style.display = 'none';
    document.getElementById('academician-assistants').style.display = 'none';
    $('#academician-lecture-approvement-table').slideDown('2000');
}

function saveAssistantApprovement() {
    //asistanı ata
    alert("Atadık baabbba");
}

//STUDENT

function lecturesOfStudentsActive() {
    document.getElementById('lecture-approvement-student').style.display = 'none';
    $('#lecture-of-student').slideDown('2000');
}

function lectureApprovementStudentActive() {
    document.getElementById('lecture-of-student').style.display = 'none';
    $('#lecture-approvement-student').slideDown('2000');
}

function sendStudentsChoseLectures() {

}