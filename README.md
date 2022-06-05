# toneBox
🎁一个基于 node.js &amp; Express &amp; Mysql &amp; Redis 的个人服务端模板💪🏻

## 安装说明(使用自己装的命令安装即可)：

```shell
cd toneBox

yarn install 
// or 
npm install
```


## 数据库文件配置说明
config.js 
配置连接mysql的 账名及数据库密码信息。

## model文件夹
自己搭建对于数据库的添删改查信息， 已经内置了模板， 可以查看使用

## 路由注册
- controller 文件夹里面已经写好了模板， 只需要按需修改编写即可， 注意导出规范
```js
// exam:
  const module1_create_func = funciton(req, res) {}
  
  const module1 = {
    method: 'get',
    path: '/test/create',
    func: module1_create_func,
  }
  
  module.exports = [
    module1
  ]
```

- 有中间件的函数
```js
// exam:
  const module1_create_func = funciton(req, res) {}
  
  const module1 = {
    method: 'get',
    otherFunc: '编写你的中间件函数',
    path: '/test/create',
    func: module1_create_func
  }
  
  module.exports = [
    module1
  ]
```

## 关于路由
router.js 采用引用  controller 导出的模块引用注册