var homeService = (function(params) {
    "use strict";
    return {
        getCourses: () => {
            return setAxiosCall().getAnswersDAL().then(function (response) {
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