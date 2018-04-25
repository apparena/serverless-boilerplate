// @see https://stackoverflow.com/a/37096489/399431
module.exports = () =
>
{
  const redis = require('redis');
  const redisOptions = {
    host: process.env.REDIS_HOST,
    port: process.env.REDIS_PORT,
    prefix: process.env.REDIS_PREFIX
    // password: process.env.REDIS_PASS,
  };

  return redis.createClient(redisOptions);
}
;
