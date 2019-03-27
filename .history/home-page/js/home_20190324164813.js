$( document ).ready(function() {
    homeService.getCourses().then(function(courses) {
        $('.course').html(courses);

    })

    function seeCourseDetails () {
        $('.cardBody').on('click', function() {

        });
    }

    let getCourseDetails = function(id) {
        homeService.getCourseDetails().then(function(course) {
            $(".card-deck.).attr('data-id');
        });
    }

});
