/**
 * @description 存储配置
 * @author  Uni
 */

const  { isProd } = require('../utils/env');
                                            
let REDIS_CONF = {
    port: 6379,
    host:'127.0.0.1'
}

let MYSQL_CONF = {
    host:'127.0.0.1',
    user: 'root',
    password: 'leo0824lch',
    port: '3306',
    database: 'vblog'
}

if (isProd) {
    REDIS_CONF = {
        port: 6379,
        host: '127.0.0.1'    // 先占位，后面再配置上线 ip
    }

    MYSQL_CONF = {
        host:'127.0.0.1',
        user: 'root',
        password: 'leo0824lch',
        port: '3306',
        database: 'vblog'
    }
}

module.exports = {
    REDIS_CONF,
    MYSQL_CONF
}