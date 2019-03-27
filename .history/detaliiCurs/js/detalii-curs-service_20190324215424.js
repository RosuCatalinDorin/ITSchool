var detaliiCourseService = (function() {
  "use strict";
  return {
    getCourse: (id) => {
      return setAjaxCall.getCourseByIdDAL(id).then(function(response) {
        return response;
      });
    },

    enrollCourse: (data) => {
      return setAjaxCall.enrollCourseDAL(data).then(function(response) {
        return response;
      });
    },

    sendEmail: (data) => {
      return setAjaxCall.enrollCourseDAL(data).then(function(response) {
        return response;
      });
    },
  };
})($);
