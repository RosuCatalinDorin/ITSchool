var homeService = (function() {
  "use strict";
  // GENERATE UI

      <small class="curs-title">FRONTEND INITIERE</small>
      <span class="price">379 EUR<sub>/4 luni</sub></span>


  <div class="course-image-container">
  </div>
  <ul class="list-group list-group-flush">
      <div class="list-group-item">Foloseste Html5, Css3, Java-script, JQuery, GIT si invata cum sa construiesti un website de la zero.</div>
  </ul>
  <div class="card-body">
      <a href="screens/curs.html" class="btn btn-course btn-lg btn-block">Vezi detalii</a>
  </div>

  var listCourses = function(courses) {
    var html = "<div class='card pricing'>";
    $.each(courses, function(index, course) {
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
