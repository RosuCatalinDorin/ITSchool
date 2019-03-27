var detaliiCourseService = (function() {
  "use strict";
  return {
    getCourse: id => {
      return setAjaxCall.getCourseByIdDA(id).then(function(response) {
        return response;
      });
    }
  };
})($);
