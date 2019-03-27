$( document ).ready(function() {
    console.log();
    document.getElementsByClassName('courses').innerHtml("<div class='baubau' style='background:red; width: 50px; height: 50px;'></div>")
    homeService.getCourses().then(function(courses) {
    // $('.courses').html(courses);
        
        $('.courses').html("<div class='baubau' style='background:red; width: 50px; height: 50px;'></div>");
    })
});
