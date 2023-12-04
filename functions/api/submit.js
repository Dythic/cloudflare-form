/**
 * POST /api/submit
 */

import { buildClient } from '@datocms/cma-client-node';

export async function onRequestPost(context) {

    try {
        const client = buildClient({ apiToken: process.env.DATO_API_TOKEN });
        const modelIdOrApiKey = 'ssf_page_home';
        const fields = await client.fields.list(modelIdOrApiKey);

        fields.forEach((field) => {
            console.log(field);
        });

        return new Response(field, {
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
            },
        });
    } catch (err) {
        return new Response(err, { status: 400 });
    }
}