var setAxiosCall = (function(params) {
    "use strict";
    return {
        getCoursesDAL: () => {
            params.method = "GET";
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