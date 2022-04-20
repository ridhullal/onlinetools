import axios from "axios";

// Tool1 api

export const paraPhrase = async(para, convertValue) => {
    const baseUrl = `https://lwiuccrp0d.execute-api.us-east-1.amazonaws.com/summarize`;
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