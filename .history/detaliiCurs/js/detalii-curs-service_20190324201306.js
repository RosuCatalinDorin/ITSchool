var homeService = (function() {
    "use strict";
    return {
      getCourses: () => {
        return setAjaxCall.getCoursesDAL()
          .then(function(response) {
            return listCourses(response);
          });
      },
  
    
    };
  }($));
  