$( document ).ready(function() {
    console.log();
    
    homeService.getCourses().then(function(courses) {
        $('.course').html("<div class='baubau' style='background:red; width: 50px; height: 50px;'></div>");
    })
});
