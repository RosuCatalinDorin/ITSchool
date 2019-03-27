var setAjaxCall = (function() {
    "use strict";
    var BASE_URL = 'https://speakprogramming.ro/template/php/view/';
    var links  = {
        getCourses: BASE_URL +'getCursuri.php',
    }
    var params = {
        url: '',
        method: '',
        data: '',
        headers: '', 
        files: ''
    };

    return {
        getCoursesDAL: () => {
            params.method = "GET";
            params.url += links.getCourses;
            return makeAjaxRequest.makeRequest(params).then(function (response) {
                return response;
            });
        },
    }
}());