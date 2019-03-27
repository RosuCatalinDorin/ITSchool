var detaliiCourseService = (function() {
  "use strict";
  return {
    getCourse: id => {
      return setAjaxCall.getCourseByIdDAL(id).then(function(response) {
        return response;
      });
    }
  };
})($);
