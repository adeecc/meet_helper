const axios = require("axios");

let axiosGET = (url, params) => {
    let options = {
        method: "GET",
        headers: {
            "x-access-token": sessionStorage.getItem("token") ? sessionStorage.getItem("token") : null
        },
        params: params,
        url: url
    };
    return axios(options);
};

let axiosPOST = (url, data) => {
    let options = {
        method: "POST",
        headers: {
            "x-access-token": sessionStorage.getItem("token") ?
                sessionStorage.getItem("token") :
                null
        },
        data: data,
        url: url
    };
    return axios(options);
};

module.exports = {
    axiosGET,
    axiosPOST,
};