/**
 * @description 环境变量配置  线上，线下
 * @author Uni
 */

 const ENV = process.env.NODE_ENV;

 module.exports = {
    isDev: ENV === 'dev',
    notDev: ENV !== 'dev',
    isProd: ENV === 'production',
    notProd: ENV !== 'production'
 }