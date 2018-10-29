'use strict';
// const R = require('ramda');
class User extends S {
  constructor(ctx) {
    super(ctx);
    this._User = this.ctx.model.User;
    this._Invitation = this.ctx.model.Invitation;
    this.where = this.ctx.helper.where;
  }
  /**
   * 校验邀请码有效性
   *  @param {string} code 邀请码
   * @return {boolean} 是否有效
   * @memberof User
   */
  async checkInvitation(code) {
    const invitation = await this._Invitation.find(this.where({ code }));
    if (!invitation || invitation.use_user_id) {
      return this.ctx.helper.throw(400, 'code', '无效的邀请码');
    }
    return invitation;
  }
  /**
   * * 生成邀请码
   * @param {number} user_id 用户 ID
   * @param {number} length 生成的个数
   * @return {Array<Invitation>} 所生成的邀请码数组
   * @memberof User
   */

  async generatorInvitation(user_id, length) {
    const PromiseInvitation = this.ctx.helper.range(length).map(() => {
      return this._Invitation.create({ user_id });
    });
    return Promise.all(PromiseInvitation);
  }
//   /**
//    * ? 待考虑
//    * *将 Code 邀请码给 user_id 使用，并为 user_id 生成邀请码
//    * @param {string} code 验证码
//    * @param {number} user_id 用户 ID
//    * @return {{user: User, invitations: Invitation[]}} 用户与生成的邀请码
//    * @memberof User
//    */
//   async invitationToUser(code, user_id) {
//     const invitation = await this.checkInvitation(code);
//     const user = await this._User.findById(user_id);
//     this.ctx.assert(user, 401, '没有找到该用户');
//   }
}

module.exports = User;
