var DetaliiCursUi = (function() {
    "use strict";
    // GENERATE UI
  
    var getCourseDetails = function() {
      var html = "<div class='card-deck'>";
        html += "<div class='card pricing'>";
        html += "<div class='card-head'>";
        html += "<small class='curs-title'>" +"</small>"; 
        html += "<small class='price'>" +"315 EUR "+ "<sub>/"  + "</sub></small>";
        html += "</div>";
        html += "<div class='course-image-container'></div>"
        html += "<ul class='list-group list-group-flush'>";
        html += "<div class='list-group-item'>Foloseste Html5, Css3, Java-script, JQuery, GIT si invata cum sa construiesti un website de la zero." ;
        html += "</div>";
        html += "</ul>";
        html += "<div class='card-body'>";
        html += "<a class='btn btn-course btn-lg btn-block courseDetails' data-id='" + "'>Vezi detalii</a>";
        html += "</div>";
        html += "</div>";
      html += "</div>";
      return html;
    };
  
    return {
      getCourseDetails: (id) => {
        //   return setAjaxCall.getCourseDetailsDAL(id)
        //   .then(function(response) {
        //     return listCourseDetails(response);
        //   });
        return getCourseDetails()
      }
    };
  }($));