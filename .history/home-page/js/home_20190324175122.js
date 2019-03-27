$( document ).ready(function() {
    homeService.getCourses().then(function(courses) {
        $('.course').html(courses);
        $('.courseDetails').on('click', function() {
            getCourseDetails(parseInt($(".courseDetails").attr('data-id'),10));
        });
    })

    // function onClickCourse () {
       
    // }

    let getCourseDetails = function(id) {
        DetaliiCursUi.getCourseDetails(id).then(function(course) {
            
        });
    }

});
