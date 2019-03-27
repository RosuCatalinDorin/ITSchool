$( document ).ready(function() {
    homeService.getCourses().then(function(courses) {
        $('.course').html(courses);
    })
});
