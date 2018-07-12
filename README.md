# webpack-demo
看完阮一峰老师的文章，自己敲一遍学习学习。[原文地址](https://github.com/ruanyf/webpack-demos)

#### 准备工作
- webpack是一个前端构建系统类似于Grunt and Gulp.
- 它的功能有点类似于Browserify的模块包，但是它可以做的更多。
- 安装：
```
npm i -g webpack webpack-dev-server
```

#### demo1
- 入口文件
- 导出文件名和导出路径

#### demo2
- 多个入口文件
- 导出多个文件
- 文件名可用入口文件键名

#### demo3
- 使用loader可以编译非js文件，如`.jsx .vue`等等

#### demo4
- 配置loader可以在js里面 require css文件
- `css-loader`读取css文件
- `style-loader`用来在HTML中插入`<style>`标签

#### demo5
- 配置`url-loader`可以像require js文件那样require 图片和svg等

#### demo6
- `css-loader`配置`modules: true`可以给css划分作用域，默认是局部，可以使用`:global(xx)`配置全局样式

#### demo7
- 插件可以在构建过程中做很多事。比如`uglifyjs-webpack-plugin`可以将webpack打包生成的代码进行压缩

#### demo8
- 可以使用多个插件，`html-webpack-plugin`用来创建html文件，`open-browser-webpack-plugin`用来打开一个浏览器tab

#### demo9
- 配置全局环境变量，判断变量执行代码

#### demo10
- 代码切片，`require.ensure`可实现切割代码

#### demo11
- 利用`bundle-loader`切割代码

#### demo12
- 可以将多个入口文件的共同部分打包成一个单独的文件`CommonsChunkPlugin`

#### demo13
- 将安装的第三方库打包`CommonsChunkPlugin`
- 可以设置成全局变量`ProvidePlugin`

#### demo14
- 将全局变量设置成可以require的参数`externals`

#### demo15
- 使用`vue-loader`解析`/\.vue$/`文件
- 注意给vue配置别名
```
resolve: {
    alias: {
        'vue$': 'vue/dist/vue.esm.js'
    }
}
```
- 不然在js里 import Vue的时候只能
```
import Vue from 'vue/dist/vue.js'
```
- 新版本的vue还需要VueLoaderPlugin（不知道从哪个版本开始需要的，反正`2.3.3`的时候不要）
```
const { VueLoaderPlugin } = require('vue-loader');
plugins: [
    new VueLoaderPlugin(),
]
```

#### demo16
- 因为webpack本身是支持Amd的，所以不需要修改各个js组件的语法。
- 在resolve里设置alias，相当于requirejs里的require.config。
- 这里的alias就是为了在import模块的时候指定具体的路径，与上面demo15的vue一样。




