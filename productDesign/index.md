* [分析页面元素](https://mp.weixin.qq.com/s/4Ys-d7TK-UGuEnGBp_tYjw)
* [设计公共区域](https://mp.weixin.qq.com/s/8MXIL4vHVfY5XUJept4lqQ)
* [设计首页](https://mp.weixin.qq.com/s/h0HGkRQGzgQlQji4Rzbr9Q)
* [设计登陆相关页](https://mp.weixin.qq.com/s/YGhr-BmDuhmI3jmapfIBBg)
* [设计个人中心相关页](https://mp.weixin.qq.com/s/FkjQXodOPJGUo83JAhvC4A)
* [顶部导航链接相关页](https://mp.weixin.qq.com/s/S981YsdcoxpFTbiK4PKPsg)
* [设计数据库与数据关系](https://mp.weixin.qq.com/s/a0w4WIsVj2Ilisg1CdA1ew)

# 登陆页
* 登陆按钮  电子邮箱输入框  密码输入框     忘记密码链接   社会化登陆链接  注册链接
# 注册页
* 填写表单<电子邮箱  用户名  确认密码  密码  邀请码>  注册按钮   链接<社会化登陆  忘记密码  登陆>
# 个人中心
# 我的邀请码
# 我的团队
# 博客列表页
# 博客详情

# 设计数据库与数据关系
1. User表 user_id
2. Invitation表   首先一个用户可以拥有五个邀请码,之后如何获得邀请码,我们暂不考虑,可以等后续上线其他活动再以邀请码为奖品。
3. Image表  user_id
4. ImageComment 表  user_id  
5. Post表  user_id  category_id
6. PostComment表  user_id
7. Category表  
8. Tag表
9. TagInfo 
10. FM表
11. Team表
12. TeamStatus表
13. Order表

# 网站的流程逻辑
1. 首先注册,获取 用户邮箱 用户名  密码 邀请码