var homeService = (function() {
  "use strict";
  // GENERATE UI

  var listCourses = function(courses) {

    var html = "<div class='card-deck'>";
    $.each(courses, function(index, course) {
      html += "<div class='card pricing curs '" + course.curs_id + ">";
      html += "<div class='card-head'>";
      html += "<small class='curs-title'>" + course.titlu_curs + "</small>"; 
      html += "<small class='price'>" +"349 EUR"+ "<sub>/" + course.durata_curs + "</sub></small>";
      html += "</div>";
      html += "<div class='course-image-container'></div>"
      html += "<ul class='list-group list-group-flush'>";
      html += "<div class='list-group-item'>Foloseste Html5, Css3, Java-script, JQuery, GIT si invata cum sa construiesti un website de la zero." ;
      html += "</div>";
      html += "</ul>";
      html += "<div class='card-body'>";
      html += "<a href='screens/curs.html' class='btn btn-course btn-lg btn-block'>Vezi detalii</a>";
      html += "</div>";
      html += "</div>";
    });
    html += "</div>";
    return html;
  };

  return {
    getCourses: () => {
      return setAjaxCall.getCoursesDAL()
        .then(function(response) {
          return listCourses(response);
        });
    },
  };
}($));
