const ApiError = require('../error/ApiError');
const ApiErrorNames = require('../error/ApiErrorNames');
let Users = require('../model/users');

exports.getUser = async (ctx, next) => {
  // 测试： 如果id != 1 抛出api 异常
  // if(ctx.query.id != 1) {
  //   throw new ApiError(ApiErrorNames.USER_NOT_EXIST);
  // }

  // 查询数据库属于异步操作，一定要await.....
  await Users.findAll({
    where: {
      sample_keyword: {
        like: `${ctx.query.word}%`
      }
    }
  }).then(function(result) {
    ctx.body = result;
  }).catch(function(err) {
    console.log(err);
  })
}

exports.registerUser = async (ctx, next) => {
  //console.log('registerUser', ctx);
  // console.log(`${bodyparser(ctx)}`)
  ctx.body = `test111`;
}
