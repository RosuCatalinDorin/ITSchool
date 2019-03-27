$( document ).ready(function() {
    homeService.getCourses().then(function(courses) {
        $('.course').html(courses);
        $('.courseDetails').on('click', function() {
            getCourseDetails(parseInt($(".courseDetails").attr('data-id'),10));
        });
    })

    // function onClickCourse () {
       
    // }

    let getCourseDetails = function(id) {
        console.log(typeof window.localStorage.setItem('curs_id', '++'));
        window.location.href = "C:\Users\pausan\Desktop\Documenting my progress\Teaching project\SPEAK PROGRAMMING\ITSchool\detaliiCurs\views\detalii-curs.html";
    }
});
