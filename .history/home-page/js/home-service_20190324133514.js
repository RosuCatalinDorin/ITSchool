var homeService = (function(params) {
    "use strict";
    return {
        getAnswers: (data) => {
            return makeCall().getAnswersDAL(data).then(function (response) {
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