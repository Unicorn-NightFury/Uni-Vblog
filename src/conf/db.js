/**
 * @description 存储配置
 * @author  Uni
 */

const  { isProd } = require('../utils/env');

let REDIS_CONF = {
port: 6379,
host:'127.0.0.1'
}

if (isProd) {
    REDIS_CONF = {
        port: 6379,
        host: '127.0.0.1'    // 先占位，后面再配置上线 ip
    }
}

module.exports = {
REDIS_CONF
}