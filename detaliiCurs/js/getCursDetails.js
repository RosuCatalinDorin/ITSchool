$(document).ready(function () {
    let id = window.localStorage.getItem("curs_id");
    detaliiCursService.getCourse(id).then(function (courses) {
        $('.course').html(courses);
    })
});