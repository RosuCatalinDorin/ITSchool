$( document ).ready(function() {
    console.log();
    homeService.getCourses().then(function(courses) {
        // document.getElementsByClassName('courses')[0].innerHtml(courses)
        // $('.courses')[0].html(courses);
    })
    
});
