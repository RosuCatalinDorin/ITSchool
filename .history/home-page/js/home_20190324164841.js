$( document ).ready(function() {
    homeService.getCourses().then(function(courses) {
        $('.course').html(courses);

    })

    function seeCourseDetails () {
        $('.cardBody').on('click', function() {
            getCourseDetails($(".card-deck").attr('data-id'));
        });
    }

    let getCourseDetails = function(id) {
        homeService.getCourseDetails().then(function(course) {
            
        });
    }

});