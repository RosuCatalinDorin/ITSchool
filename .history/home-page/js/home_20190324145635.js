$( document ).ready(function() {
    console.log();
    $('.courses')[0].html("<div class='baubau' style='background:red; width: 50px; height: 50px;'></div>");
    homeService.getCourses().then(function(courses) {
        document.getElementsByClassName('courses')[0].html("<div class='baubau' style='background:red; width: 50px; height: 50px;'></div>")
        $('.courses')[0].html("<div class='baubau' style='background:red; width: 50px; height: 50px;'></div>");
    })
});
