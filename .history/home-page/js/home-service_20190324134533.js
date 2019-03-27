var homeService = (function(params) {
    "use strict";
// GENERATE UI 


    return {
        getCourses: () => {
            return setAxiosCall().getCoursesDAL().then(function (response) {
                return response;
            });
        },

        createNote: (data) => {
            return setAxiosCall().createNoteDAL(data).then(function (response) {
                return response
            });
        },
    }
})(params);