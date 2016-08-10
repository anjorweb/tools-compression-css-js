#使用方法

###机器需安装Node 安装方法自行百度

###全局安装grunt
`npm install -g grunt-cli`

###具体使用步骤
1. 把`package.json` 和 `Gruntfile.js` 放到项目根目录 
2. 执行`npm install`，根据`package.json`下载相关文件，根目录会生成一个`node_modules`目录存放相关模块 
3. 修改`Gruntfile.js`，把里面路径改成自己的
4. 在根目录下执行`grunt`即可  

###说明
1. 开启了代码混淆，`mangle:false` 为关闭