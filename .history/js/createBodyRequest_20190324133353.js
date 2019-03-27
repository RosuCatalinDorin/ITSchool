var setAxiosBody = (function(params) {
    "use strict";
    return {
        createQuestionDAL: (data) => {
            params.method = "POST";
            params.url += constant().createQuestion;
            params.data = data;
            return axiosRequest(params).then(function (response) {
                return response;
            });
        },

        createAnswerDAL: (data) => {
            params.method = "POST";
            params.url += constant().createAnswer;
            params.data = data;
            params.headers = constant().requestsHeaders;
            return axiosRequest(params).then(function (response) {
                return response;
            });
        },
    }
})(params);