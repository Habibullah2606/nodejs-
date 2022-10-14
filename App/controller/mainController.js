const root = require("app-root-path");
const axios = require("axios");
const qs = require('qs');
const credentials = require(`${root}/credentials.json`);

module.exports.storeMonthlyDirectoryUsage = async (req, res) => {
    let bearer_token = null;

    // Get the token to access directory API.
    // The authorization is of oAuth 2.0
    let data1 = { 'grant_type': 'client_credentials' };
    let options1 = {
        method: 'POST',
        headers: { 'content-type': 'application/x-www-form-urlencoded' },
        auth: {
            username: credentials.directoryTokenUrlClientId,
            password: credentials.directoryTokenUrlClientSecret,
        },
        data: qs.stringify(data1),
        url: credentials.directoryTokenUrl,
    }
    try {
        let response1 = await axios.request(options1);
        if (response1.status == 200 && response1.data && response1.data.access_token) {
            bearer_token = response1.data.access_token;
        } else {
            return res.status(401).json({
                status: "Failure",
                statusCode: 401,
                message: "Error while fetching the token",
                data: {},
            });
        }
    } catch (err) {
        console.log("error-----", err);
        return res.status(401).json({
            status: "Failure",
            statusCode: 401,
            message: "Error while fetching the token",
            data: {},
        });
    }

    // If successfully authorized, use the bearer token for the further API calls.
    let options2 = {
        method: 'get',
        url: credentials.monthlyDirectoryUsageUrl,
        headers: {
            'Authorization': `Bearer ${bearer_token}`
        }
    };
    try {
        let response2 = await axios.request(options2);
        if (response2.status == 200) {
            return res.status(200).json({
                status: "Success",
                statusCode: 200,
                message: "Success",
                data: response2.data.content,
            });
        } else {
            return res.status(500).json({
                status: "Failure",
                statusCode: 500,
                message: "Error while fetching monthly directory usage",
                data: {},
            });
        }
    } catch (err) {
        console.log("error-----", err);
        return res.status(500).json({
            status: "Failure",
            statusCode: 500,
            message: "Error while fetching monthly directory usage",
            data: {},
        });
    }

}

module.exports.storeMonthlySubaccountsCost = async (req, res) => {
    let bearer_token = null;

    // Get the token to access account API.
    // The authorization is of oAuth 2.0
    let data1 = { 'grant_type': 'client_credentials' };
    let options1 = {
        method: 'POST',
        headers: { 'content-type': 'application/x-www-form-urlencoded' },
        auth: {
            username: credentials.accountTokenUrlClientId,
            password: credentials.accountTokenUrlClientSecret,
        },
        data: qs.stringify(data1),
        url: credentials.accountTokenUrl,
    }
    try {
        let response1 = await axios.request(options1);
        if (response1.status == 200 && response1.data && response1.data.access_token) {
            bearer_token = response1.data.access_token;
        } else {
            return res.status(401).json({
                status: "Failure",
                statusCode: 401,
                message: "Error while fetching the token",
                data: {},
            });
        }
    } catch (err) {
        console.log("error in fetching the token-----", err);
        return res.status(401).json({
            status: "Failure",
            statusCode: 401,
            message: "Error while fetching the token",
            data: {},
        });
    }

    console.log("bearer_token---", bearer_token);
    // If successfully authorized, use the bearer token for the further API calls.
    let options2 = {
        method: 'get',
        url: credentials.monthlySubaccountsCost,
        headers: {
            'Authorization': `Bearer ${bearer_token}`
        }
    };
    try {
        let response2 = await axios.request(options2);
        if (response2.status == 200) {
            return res.status(200).json({
                status: "Success",
                statusCode: 200,
                message: "Success",
                data: response2.data.content,
            });
        } else {
            return res.status(500).json({
                status: "Failure",
                statusCode: 500,
                message: "Error while fetching monthly subaccount cost",
                data: {},
            });
        }
    } catch (err) {
        console.log("error in fetching monthly subaccount cost-----", err);
        return res.status(500).json({
            status: "Failure",
            statusCode: 500,
            message: "Error while fetching monthly subaccount cost",
            data: {},
        });
    }

}

module.exports.storeMonthlyUsage = async (req, res) => {
    let bearer_token = null;

    // Get the token to access account API.
    // The authorization is of oAuth 2.0
    let data1 = { 'grant_type': 'client_credentials' };
    let options1 = {
        method: 'POST',
        headers: { 'content-type': 'application/x-www-form-urlencoded' },
        auth: {
            username: credentials.accountTokenUrlClientId,
            password: credentials.accountTokenUrlClientSecret,
        },
        data: qs.stringify(data1),
        url: credentials.accountTokenUrl,
    }
    try {
        let response1 = await axios.request(options1);
        if (response1.status == 200 && response1.data && response1.data.access_token) {
            bearer_token = response1.data.access_token;
        } else {
            return res.status(401).json({
                status: "Failure",
                statusCode: 401,
                message: "Error while fetching the token",
                data: {},
            });
        }
    } catch (err) {
        console.log("error-----", err);
        return res.status(401).json({
            status: "Failure",
            statusCode: 401,
            message: "Error while fetching the token",
            data: {},
        });
    }

    // If successfully authorized, use the bearer token for the further API calls.
    let options2 = {
        method: 'get',
        url: credentials.monthlyUsage,
        headers: {
            'Authorization': `Bearer ${bearer_token}`
        }
    };
    try {
        let response2 = await axios.request(options2);
        if (response2.status == 200) {
            return res.status(200).json({
                status: "Success",
                statusCode: 200,
                message: "Success",
                data: response2.data.content,
            });
        } else {
            return res.status(500).json({
                status: "Failure",
                statusCode: 500,
                message: "Error while fetching monthly usage",
                data: {},
            });
        }
    } catch (err) {
        console.log("error-----", err);
        return res.status(500).json({
            status: "Failure",
            statusCode: 500,
            message: "Error while fetching monthly usage",
            data: {},
        });
    }

}

module.exports.storeSubaccountUsage = async (req, res) => {
    let bearer_token = null;

    // Get the token to access account API.
    // The authorization is of oAuth 2.0
    let data1 = { 'grant_type': 'client_credentials' };
    let options1 = {
        method: 'POST',
        headers: { 'content-type': 'application/x-www-form-urlencoded' },
        auth: {
            username: credentials.accountTokenUrlClientId,
            password: credentials.accountTokenUrlClientSecret,
        },
        data: qs.stringify(data1),
        url: credentials.accountTokenUrl,
    }
    try {
        let response1 = await axios.request(options1);
        if (response1.status == 200 && response1.data && response1.data.access_token) {
            bearer_token = response1.data.access_token;
        } else {
            return res.status(401).json({
                status: "Failure",
                statusCode: 401,
                message: "Error while fetching the token",
                data: {},
            });
        }
    } catch (err) {
        console.log("error-----", err);
        return res.status(401).json({
            status: "Failure",
            statusCode: 401,
            message: "Error while fetching the token",
            data: {},
        });
    }

    // If successfully authorized, use the bearer token for the further API calls.
    let options2 = {
        method: 'get',
        url: credentials.subaccountUsage,
        headers: {
            'Authorization': `Bearer ${bearer_token}`
        }
    };
    try {
        let response2 = await axios.request(options2);
        if (response2.status == 200) {
            return res.status(200).json({
                status: "Success",
                statusCode: 200,
                message: "Success",
                data: response2.data.content,
            });
        } else {
            return res.status(500).json({
                status: "Failure",
                statusCode: 500,
                message: "Error while fetching subaccount usage",
                data: {},
            });
        }
    } catch (err) {
        console.log("error-----", err);
        return res.status(500).json({
            status: "Failure",
            statusCode: 500,
            message: "Error while fetching subaccount usage",
            data: {},
        });
    }

}