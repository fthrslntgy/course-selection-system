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