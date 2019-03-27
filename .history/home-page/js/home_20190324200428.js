$( document ).ready(function() {
    homeService.getCourses().then(function(courses) {
        $('.course').html(courses);
        $('.courseDetails').on('click', function() {
            getCourseDetails($(".courseDetails").attr('data-id'));
        });
    })

    // function onClickCourse () {
       
    // }
    function setcookie(name, value, days)
    {
      if (days)
      {
        var date = new Date();
        date.setTime(date.getTime()+days*24*60*60*1000); // ) removed
        var expires = "; expires=" + date.toGMTString(); // + added
      }
      else
        var expires = "";
      document.cookie = name+"=" + value+expires + ";path=/"; // + and " added
    }

    function getCookie(name) {
        return document.cookie;
    }

    let getCourseDetails = function(id) {
        setCookie("curs_id", id, 3);
        console.log(document.cookie);
        // window.location.href = "file:///C:/Users/pausan/Desktop/Documenting%20my%20progress/Teaching%20project/SPEAK%20PROGRAMMING/ITSchool/detaliiCurs/views/detalii-curs.html";
    }
});
