/**
 * POST /api/submit
 */

const axios = require('axios');

export async function onRequestPost(context) {

    try {
        const res = await axios("https://swapi.dev/api/");

        return new Response(res.data, {
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
            },
        });
    } catch (err) {
        return new Response(err, { status: 400 });
    }
}