require('dotenv').config();
const axios = require('axios');

const shotstackUrl = 'https://api.shotstack.io/stage/';
const shotstackApiKey = "thz9HjcThnaF7PqEYZcWH2I7YPMZ5SiIL08XZWji"; // Either declare your API key in your .env file, or set this variable with your API key right here.

const json = require('./template.json');

/**
 * Post the JSON video edit to the Shotstack API
 * 
 * @param {String} json  The JSON edit read from template.json
 */
const renderVideo = async (json) => {
    const response = await axios({
        method: 'post',
        url: shotstackUrl + 'render',
        headers: {
            'x-api-key': shotstackApiKey,
            'content-type': 'application/json'
        },
        data: json
    });

    return response.data;
}

/**
 * Get the status of the render task from the Shotstack API
 * 
 * @param {String} uuid  The render id of the current video render task 
 */
const pollVideoStatus = async (uuid) => {
    const response = await axios({
        method: 'get',
        url: shotstackUrl + 'render/' + uuid,
        headers: {
            'x-api-key': shotstackApiKey,
            'content-type': 'application/json'
        },
    });

    if (!(response.data.response.status === 'done' || response.data.response.status === 'failed')) {
        setTimeout(() => {
            console.log(response.data.response.status + '...');
            pollVideoStatus(uuid);
        }, 3000);
    } else if (response.data.response.status === 'failed') {
        console.error('Failed with the following error: ' + response.data.response.error);
    } else {
        console.log('Succeeded: ' + response.data.response.url);
    }
}

// Run the script
(async () => {
    try {
        const render = await renderVideo(JSON.stringify(json));
        pollVideoStatus(render.response.id);
    } catch (err) {
        console.error(err);
    }
})();