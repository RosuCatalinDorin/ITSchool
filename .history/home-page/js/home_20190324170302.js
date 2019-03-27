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
        homeService.getCourseDetails().then(function(course) {
            
        });
    }

});
