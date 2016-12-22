/**
 * 开发环境的配置内容
 */

module.exports = {
    env: 'development', //环境名称
    port: 3001,         //服务端口号
    mysql: {
      table: 'accountDB',   //数据库表名
      user: 'root',         //数据库用户名
      pwd: 'root',          //数据库密码
      host: 'localhost',    //数据库地址
      dialect: 'mysql'   //数据库类型
    }
}
