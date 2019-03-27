$( document ).ready(function() {
    console.log();
    
    homeService.getCourses().then(function(courses) {
        $('.courses').html("<div class='baubau' style='background:red; width: 50px; height: 50px;'></div>");
    })
});
