$( document ).ready(function() {
    console.log();
    
    homeService.getCourses().then(function(courses) {
        $('.course').html(courses);
    })
});
