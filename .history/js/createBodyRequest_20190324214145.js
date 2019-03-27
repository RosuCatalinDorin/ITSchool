var setAjaxCall = (function() {
  "use strict";
  var BASE_URL = "https://speakprogramming.ro/template/php/view/";
  var links = {
    getCourses: BASE_URL + "getCursuri.php",
    getCourseById: BASE_URL + "getCours.php?CURS_ID=",
    enrollCourse: BASE_URL + "addToCourse.php",
  };
  var params = {
    url: "",
    method: "",
    data: "",
    headers: "",
    files: ""
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
      params.url += links.getCourseById + id;
      return makeAjaxRequest.makeRequest(params).then(function(response) {
        return response;
      });
    },

    enrollCourseDAL: (data) => {
        params.method = "enrollCourse";
        params.url += links.getCourseById + id;
        return makeAjaxRequest.makeRequest(params).then(function(response) {
          return response;
        });
    }
  };
})();