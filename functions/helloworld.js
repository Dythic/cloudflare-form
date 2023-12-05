import { buildClient } from '@datocms/cma-client-node';

export async function onRequest(context) {

    const client = buildClient({ apiToken: process.env.DATO_API_TOKEN });
    const site = await client.site.findFirst();

    console.log(site);

    return new Response("Hello, world!")
}