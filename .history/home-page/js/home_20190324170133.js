$( document ).ready(function() {
    homeService.getCourses().then(function(courses) {
        $('.course').html(courses);
        $('.courseDetails').on('click', function() {
            getCourseDetails($(".card-deck").attr('data-id'));
        });
    })

    // function onClickCourse () {
       
    // }

    let getCourseDetails = function(id) {
        homeService.getCourseDetails().then(function(course) {
            
        });
    }

});
