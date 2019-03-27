$( document ).ready(function() {
    console.log();
    homeService.getCourses().then(function(courses) {
        $('.courses')[0].append(courses);
    })
    
});
