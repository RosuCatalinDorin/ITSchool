var setAjaxCall = (function() {
  "use strict";
  var BASE_URL = "https://speakprogramming.ro/template/php/view/";
  var links = {
    getCourses: BASE_URL + "getCursuri.php",
    getCourse: BASE_URL + "getCours.php?CURS_ID="
  };

  return {
    getCoursesDAL: () => {
      params.method = "GET";
      params.url += links.getCourses;
      return makeAjaxRequest.makeRequest(params).then(function(response) {
        return response;
      });
    },

    getCourseByIdDAL: (id) => {
      params.method = "GET";
      params.url += links.getCourses + id;
      return makeAjaxRequest.makeRequest(params).then(function(response) {
        return response;
      });
    }
  };
})();
