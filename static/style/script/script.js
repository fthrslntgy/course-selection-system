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