
# Global Latency Benchmark for Serverless Redis with Edge Caching vs without Edge Caching

See the [live demo](https://edge-benchmark.vercel.app/) and [blog post](https://blog.upstash.com/edge-caching-benchmark).

This single page application shows the latency improvement when Edge Caching is enabled for an Upstash Redis database where the Redis clients are globally distributed.

We have implemented an AWS Lambda function which reads a value from an Upstash database using the REST API. We have deployed this function to 10 different regions all over the world. The database is at the US West (N. California) region.

This page calls the 10 Lambda functions and each function makes two REST requests to the database. First request has Edge Caching enabled, the second one is without Edge Caching. Each function records the latencies of both requests.
