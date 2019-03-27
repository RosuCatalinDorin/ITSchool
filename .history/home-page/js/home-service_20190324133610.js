var homeService = (function(params) {
    "use strict";
    return {
        getAllCourses: () => {
            return makeCall().getAnswersDAL().then(function (response) {
                return response;
            });
        },

        createNote: (data) => {
            return makeCall().createNoteDAL(data).then(function (response) {
                return response
            });
        },
    }
})(params);