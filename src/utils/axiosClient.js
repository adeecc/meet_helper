const axios = require("axios");

let axiosDELETE = url => {
    let options = {
        method: "DELETE",
        headers: {
            "x-access-token": sessionStorage.getItem("token") ?
                sessionStorage.getItem("token") :
                null
        },
        url: url
    };
    return axios(options);
};

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

let axiosPUT = (url, data) => {
    let options = {
        method: "PUT",
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
    axiosDELETE,
    axiosGET,
    axiosPOST,
    axiosPUT
};