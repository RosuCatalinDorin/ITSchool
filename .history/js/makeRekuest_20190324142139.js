var makeAjaxRequest = (function($, params) {
    "use strict";
    var params = {}; 
    return {
         makeRequest: function (params) {
            return $.ajax({
                url: params.url,
                method: params.method,
                data: params.data,
                headers: params.headers, 
                files: params.files
            }).then(response => {
                return response.data;
            }).catch((error) => {
                console.log("ERROR: ", error);
                return error.response.status;
            });
        }
    }
}($));