var detaliiCourseService = (function() {
    "use strict";
    return {
        getCourse: (id) => {
        return setAjaxCall.getCourseDAL(id)
          .then(function(response) {
            return response;
          });
      },
  
    
    };
  }($));
  