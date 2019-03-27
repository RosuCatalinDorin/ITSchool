$( document ).ready(function() {
    console.log(homeService.getCourses());
    $('.courses')[0].append(homeService.getCourses());
});
