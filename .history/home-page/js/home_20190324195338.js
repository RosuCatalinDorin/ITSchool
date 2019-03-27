$( document ).ready(function() {
    homeService.getCourses().then(function(courses) {
        $('.course').html(courses);
        $('.courseDetails').on('click', function() {
            getCourseDetails($(".courseDetails").attr('data-id'));
        });
    })

    // function onClickCourse () {
       
    // }

    let getCourseDetails = function(id) {
        document.cookie = "curs_id="+id;
        window.localStorage.setItem("curs_id", id);
        window.location.href = "file:///C:/Users/pausan/Desktop/Documenting%20my%20progress/Teaching%20project/SPEAK%20PROGRAMMING/ITSchool/detaliiCurs/views/detalii-curs.html";
    }
});
