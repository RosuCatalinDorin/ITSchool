$( document ).ready(function() {
    // let id = window.localStorage.getItem("curs_id");
    let id = 4;
    detaliiCursService.getCourse(id).then(function(courses) {
        $('.course').html(courses);
        $('.courseDetails').on('click', function() {
            getCourseDetails($(".courseDetails").attr('data-id'));
        });
    })
});