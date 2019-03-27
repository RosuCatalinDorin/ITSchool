$(document).ready(function() {
  // let id = window.localStorage.getItem("curs_id");
  let id = 4;
  detaliiCourseService.getCourse(id).then(function(course) {
    displayCourseDetailsInPage(course[0]);
  });

  displayCourseDetailsInPage = function(course) {
    $('.detalii-curs-titlu').html(course)
  }
});
