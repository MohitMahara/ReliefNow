import redis from "redis";

export const client = redis.createClient({
    host : "http://localhost:6379",
    port : 6379
})

client.on("connect", () => console.log(" Connected to Redis"));
client.on("error", (err) => console.error(" Redis Error:", err));

// Connect to Redis

(async () => {
  await client.connect();
})();