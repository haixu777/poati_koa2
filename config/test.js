/**
 * 测试环境的配置内容
 */

module.exports = {
    env: 'test',        //环境名称
    port: 3002,         //服务端口号
    mysql: {
      table: '',   //数据库表名
      user: '',         //数据库用户名
      pwd: '',          //数据库密码
      host: '',    //数据库地址
      db_dialect: ''   //数据库类型
    }
}
