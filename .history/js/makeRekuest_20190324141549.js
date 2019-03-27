var makeAjaxRequest = (function($, params) {
    "use strict";
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
}($, params));