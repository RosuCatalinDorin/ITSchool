var setAxiosCall = (function(params) {
    "use strict";
    return {
        getCoursesDAL: () => {
            var params = {};
            params.method = "GET";
            params.url += 'https://speakprogramming.ro/template/php/view/getCursuri.php';
            params.data = data;
            return makeAxiosRequest(params).then(function (response) {
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