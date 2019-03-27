var axiosRequest = (function(params) {
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

        getNotesDAL: () => {
            params.method = "GET";
            params.url += constant().getNotes;
            params.headers = constant().requestsHeaders;
            return axiosRequest(params).then(function (response) {
                return response;
            });
        },

        banUserDAL: (data) => {
            params.method = "POST";
            params.url += constant().banUser;
            params.headers = constant().requestsHeaders;
            params.data = data;
            return axiosRequest(params).then(function (response) {
                return response;
            });
        },

        getUnansweredQuestionDAL: () => {
            params.method = "GET";
            params.url += constant().getUnansweredQuestion;
            params.headers = constant().requestsHeaders;
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

        getAllUsersDAL: () => {
            params.method = "GET";
            params.url += constant().getAll;
            params.headers = constant().requestsHeaders;
            return axiosRequest(params).then(function (response) {
                return response;
            });
        },

        getAnswersDAL: (data) => {
            params.method = "GET";
            params.url += constant().getAnswers + "?question=" + data.question;
            params.headers = constant().requestsHeaders;
            return axiosRequest(params).then(function (response) {
                return response;
            });
        },
        getDefaultMessageDAL: ()=>{
            params.method = "GET";
            params.url += constant().getDefaultMessage;
            params.headers = constant().requestsHeaders;
            return axiosRequest(params).then(function (response) {
                return response;
            });
        },

        createNoteDAL: (data) => {
            params.method = "POST";
            params.url += constant().sendNote;
            params.data = data;
            params.headers = constant().requestsHeaders;
            return axiosRequest(params).then(function (response) {
                return response;
            });
        },

        sendRatingDAL: (data) => {
            params.method = "POST";
            params.url += constant().sendRating;
            params.data = data;
            params.headers = constant().requestsHeaders;
            return axiosRequest(params).then(function (response) {
                return response;
            });
        },

        registerDAL: (data) => {
            params.method = "POST";
            params.url += constant().register;
            params.data = data;
            params.headers = {};
            return axiosRequest(params).then(function (response) {
                return response;
            });
        },

        getUserDetailsDAL: (data) => {
            params.method = "GET";
            params.url += constant().getUserDetails + "?email=" + data.email;
            params.headers = constant().requestsHeaders;
            return axiosRequest(params).then(function (response) {
                return response;
            });
        },

        updateUserDetailsDAL: (data) => {
            params.method = "POST";
            params.url += constant().updateUser;
            params.data = data;
            params.headers = constant().requestsHeaders;
            return axiosRequest(params).then(function (response) {
                return response;
            });
        },

        changePasswordDAL: (data) => {
            params.method = "POST";
            params.url += constant().changePassword;
            params.data = data;
            params.headers = constant().requestsHeaders;
            return axiosRequest(params).then(function (response) {
                return response;
            });
        },
    }
})(params);