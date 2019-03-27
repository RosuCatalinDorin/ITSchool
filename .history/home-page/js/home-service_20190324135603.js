var homeService = (function(params) {
  "use strict";
  // GENERATE UI

                  
                    <div class="course-image-container">
                    </div>
                    <ul class="list-group list-group-flush">
                        <div class="list-group-item">Foloseste Html5, Css3, Java-script, JQuery, GIT si invata cum sa construiesti un website de la zero.</div>
                    </ul>
                    <div class="card-body">
                        <a href="screens/curs.html" class="btn btn-course btn-lg btn-block">Vezi detalii</a>
                    </div>

  var listCourses = function(courses) {
    var html = '<div class="card pricing">';
    $.each(courses, function(index, course) {
      html += '<div class="card-head">';
      html += '<small class="curs-title">' + course.titlu_curs + '</small>'; 
      html += '<small class="price">' +'349 EUR'+ '<sub>/' + course.durata_curs + '</sub></small>';
      html += '</div>';
      html += '<div class="course-image-container"></div>'
      html += '<ul>';
      html += '</ul>';

    });
    html += '</div>';
    return html;
  };

  return {
    getCourses: () => {
      return setAxiosCall()
        .getCoursesDAL()
        .then(function(response) {
          return response;
        });
    },

    createNote: data => {
      return setAxiosCall()
        .createNoteDAL(data)
        .then(function(response) {
          return response;
        });
    }
  };
})(params);
