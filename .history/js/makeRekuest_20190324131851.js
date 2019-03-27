var axiosRequest = (function(params) {
    "use strict";
        return axios({
            url: params.url,
            method: params.method,
            data: params.data,
            headers: params.headers, 
            files: params.files
        }).then(response => {
            return response.data;
        }).catch((error) => {
            console.log(error);
            return error.response.status;
        });
})(params);