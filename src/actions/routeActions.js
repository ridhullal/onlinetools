import axios from "axios";

// Tool1 api

export const paraPhrase = async(para, convertValue) => {
    const baseUrl = ` https://v4l65fbklc.execute-api.us-east-1.amazonaws.com/summarize`;
    const config = {
        headers: {
            'Content-Type': 'application/json',
        }
    }

    const body = JSON.stringify({text: para, convertValue});

    try {
        const res = await axios.post(baseUrl,body, config);
        return res.data;
    } catch (err) {
        console.log(err);
    }
} 

export const paraUrl = async(para, convertValue) => {
    const baseUrl = ` https://n03o7a7fx3.execute-api.us-east-1.amazonaws.com/urlsummary`;
    const config = {
        headers: {
            'Content-Type': 'application/json',
        }
    }

    const body = JSON.stringify({url: para, convertValue});

    try {
        const res = await axios.post(baseUrl,body, config);
        return res.data;
    } catch (err) {
        console.log(err);
    }
} 