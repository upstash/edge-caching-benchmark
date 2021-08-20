'use strict';

const Redis = require("ioredis");
const fetch = require("node-fetch");
const { performance } = require("perf_hooks");
const https = require('https');

module.exports.run = async (event) => {
    const agent = new https.Agent({ keepAlive: true });

    const client = new Redis(process.env.LATENCY_REDIS_URL);

    // first pass to cache the response to the edge
    let edgeUrl = "https://usw1-famous-boar-31336.edge-c.upstash.io/get/test-key?_token\=" + process.env.REDIS_REST_TOKEN;
    await fetch(edgeUrl, {agent})
    let start = performance.now();
    await fetch(edgeUrl, {agent})
    let latencyEdgeEnabled = performance.now() - start;
    // pushing the latency to the histogram
    await client.lpush("histogram-edgeEnabled", latencyEdgeEnabled)

    // testing the url without edge caching
    let restUrl = "https://usw1-famous-boar-31336.upstash.io/get/test-key?_token\=" + process.env.REDIS_REST_TOKEN;
    // first pass to skip the connection/ssl overhead
    await fetch(restUrl, {agent})
    start = performance.now();
    let data = await fetch(restUrl, {agent})
    let latencyEdgeDisabled = performance.now() - start;
    await client.lpush("histogram-edgeDisabled", latencyEdgeDisabled)
    await client.quit();

    return {
        statusCode: 200,
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Credentials': true,
        },
        body: JSON.stringify( {
            latencyEdgeEnabled: latencyEdgeEnabled,
            latencyEdgeDisabled: latencyEdgeDisabled,
            data: (await data.json()).result,
        })
    };
};
