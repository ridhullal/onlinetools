import axios from "axios";

// Tool1 api

export const paraPhrase = async(para) => {
    const baseUrl = `https://lwiuccrp0d.execute-api.us-east-1.amazonaws.com/summarize`;
    const config = {
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        }
    }

    const body = JSON.stringify({text: para});

    try {
        const res = await axios.post(baseUrl,body, config);
        console.log(res);
    } catch (err) {
        console.log(err);
    }

} 