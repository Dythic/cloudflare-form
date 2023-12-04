/**
 * POST /api/submit
 */

const axios = require('axios');

export async function onRequestPost(context) {

    try {
        let input = await context.request.formData();

        const res = await axios.get("https://swapi.dev/api/");

        console.log(res.data);

        // Convert FormData to JSON
        // NOTE: Allows multiple values per key
        let output = {};
        for (let [key, value] of input) {
            let tmp = output[key];
            if (tmp === undefined) {
                output[key] = value;
            } else {
                output[key] = [].concat(tmp, value);
            }
        }

        let pretty = JSON.stringify(output, null, 2);
        return new Response(pretty, {
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
            },
        });
    } catch (err) {
        return new Response('Error parsing JSON content', { status: 400 });
    }
}