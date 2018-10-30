'use strict';
/**
 * 用户控制器
 * @class User
 * @extends {C} Egg.Controller
 */
class User extends C {
  async signIn() {
    this.ctx.verify('user.signin', 'body');
    this.ctx.body = '登陆';
  }
  async signUp() {
    await this.ctx.verify('user.signup', 'body');
    const json = await this.ctx.service.user.signUp();
    this.ctx.body = json;
    // this.ctx.body = '注册';
  }
}

module.exports = User;
