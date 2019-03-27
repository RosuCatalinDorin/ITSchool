$( document ).ready(function() {
    console.log();
    document.getElementsByClassName('courses').innerHtml("<div class='baubau' style='background:red; width: 50px; height: 50px;'></div>")
    homeService.getCourses().then(function(courses) {
    // $('.courses').html("<div class='baubau' style='background:red; width: 50px; height: 50px;'></div>");
    $('.courses').html();
        
    //     // $('.courses')[0].html("<div class='baubau' style='background:red; width: 50px; height: 50px;'></div>");
    })
});
