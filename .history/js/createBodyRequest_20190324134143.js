var setAxiosCall = (function(params) {
    "use strict";
    var BASE_URL = 'https://speakprogramming.ro/template/php/view/';
    var links  = {
        getAll:     BASE_URL +'articles',
        getOne:     BASE_URL + 'articles/details',
        create:     BASE_URL + 'articles/add',
        deleteOne:  BASE_URL + 'articles/delete',
        update:     BASE_URL + 'articles/edit'
    }
    return {
        getCoursesDAL: () => {
            var params = {};
            params.method = "GET";
            params.url += 'https://speakprogramming.ro/template/php/view/getCursuri.php';
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