var setAjaxCall = (function() {
    "use strict";
    var BASE_URL = 'https://speakprogramming.ro/template/php/view/';
    var links  = {
        getCourses: BASE_URL +'getCursuri.php',
        getOne:     BASE_URL + 'articles/details',
        create:     BASE_URL + 'articles/add',
        deleteOne:  BASE_URL + 'articles/delete',
        update:     BASE_URL + 'articles/edit'
    }

    return {
        getCoursesDAL: (data) => {
            var params = {};
            params.method = "GET";
            params.url += links.getCourses;
            return makeAjaxRequest(params).then(function (response) {
                return response;
            });
        },

        createAnswerDAL: (data) => {
            params.method = "POST";
            params.url += r;
            params.data = data;
            params.headers = constant().requestsHeaders;
            return axiosRequest(params).then(function (response) {
                return response;
            });
        },
    }
}());