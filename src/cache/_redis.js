/**
 * @description 连接 redis 的方法， get set
 * @author Uni
 */

 const redis = require('redis');
 const { REDIS_CONF } = require('../conf/db');

 // 创建客户端
 const redisClient = redis.createClient(REDIS_CONF.port, REDIS_CONF.host);
 redisClient.on('error', err => {
    console.log('redis error', err)
 })


/**
 * redis set
 * @param {string} key 键
 * @param {string} val 值
 * @param {number} timeout  设置过期时间
 */
function set(key, val, timeout = 60*60) {
    if (typeof val === 'object') {
        val = JSON.stringify(val)
    }
    redisClient.set(key, val)
    redisClient.expire(key, timeout)
}

/**
 * redis get
 * @param {string} key 键 
 */
function get(key) {

}

module.exports = {
    set
}