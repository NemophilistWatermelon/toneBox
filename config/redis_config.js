const redis = require('redis')
const RedisPort = require('./Port').RedisPort
const REDIS_PORT = process.env.PORT || RedisPort
const client = redis.createClient(REDIS_PORT)


module.exports = client
