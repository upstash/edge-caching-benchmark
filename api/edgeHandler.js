'use strict';

const Redis = require("ioredis");
const fetch = require("node-fetch");
const { performance } = require("perf_hooks");
const https = require('https');
const Redis2 = require("@upstash/redis/with-fetch").Redis;


module.exports.run = async (event) => {
    const agent = new https.Agent({ keepAlive: true });

    const client = new Redis(process.env.LATENCY_REDIS_URL);
    let start = performance.now();

    // first pass to cache the response to the edge
    // let edgeUrl = "https://usw1-famous-boar-31336.edge-c.upstash.io/get/test-key?_token\=" + process.env.REDIS_REST_TOKEN;
    // await fetch(edgeUrl, {agent})
    // await fetch(edgeUrl, {agent})
    // let latencyEdgeEnabled = performance.now() - start;
    // pushing the latency to the histogram
    // await client.lpush("histogram-edgeEnabled", latencyEdgeEnabled)

    // testing the url regional db
    let restUrl = "https://usw1-famous-boar-31336.upstash.io/get/test-key?_token\=" + process.env.REDIS_REST_TOKEN;
    // first pass to skip the connection/ssl overhead
    await fetch(restUrl, {agent})
    start = performance.now();
    await fetch(restUrl, {agent})
    let latencyEdgeDisabled = performance.now() - start;
    await client.lpush("histogram-edgeDisabled", latencyEdgeDisabled)

    // testing the url global db
    let globalUrl = "https://global-glorious-alpaca-30017.upstash.io/get/test-key?_token\=AXVBASQgMmJmNzhkMjItY2QxZi00Y2UyLTllZmYtMzcwOGRlZjk5OGJkN2I1YTJlODc4OGUzNDdmMWI0MjAxOTBiNTExMzhiZDQ=";
    // first pass to skip the connection/ssl overhead
    await fetch(globalUrl, {agent})
    start = performance.now();
    let data = await fetch(globalUrl, {agent})
    let latencyGlobal = performance.now() - start;
    await client.lpush("histogram-global", latencyGlobal)



    const redis = new Redis2({
        url: 'https://global-glorious-alpaca-30017.upstash.io',
        token: 'AXVBASQgMmJmNzhkMjItY2QxZi00Y2UyLTllZmYtMzcwOGRlZjk5OGJkN2I1YTJlODc4OGUzNDdmMWI0MjAxOTBiNTExMzhiZDQ=',
    })
    data = await redis.get('test-key');
    start = performance.now();
    data = await redis.get('test-key');
    let latencySDK = performance.now() - start;


    await client.quit();

    return {
        statusCode: 200,
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Credentials': true,
        },
        body: JSON.stringify( {
            // latencyEdgeEnabled: latencyEdgeEnabled,
            latencyEdgeDisabled: latencyEdgeDisabled,
            latencyGlobal: latencyGlobal,
            latencySDK: latencySDK,
            data: data,
        })
    };
};
