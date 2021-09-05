实现组件库 基本

```
yarn add vue
yarn add @vue/compiler-sfc # vue官方处理单⽂件组件

yarn add @babel/core # babel核⼼

yarn add @rollup/plugin-babel
yarn add rollup-plugin-terser # 压缩代码
yarn add rollup-pluginutils
yarn add rollup-plugin-vue
```

集成 babel

```
yarn add babel
yarn add babel-plugin-syntax-dynamic-import
yarn add babel-plugin-syntax-jsx
yarn add babel-preset-env
yarn add @babel/plugin-proposal-optional-chaining
yarn add @babel/preset-env
yarn add @vue/babel-plugin-jsx
```

集成 VTU

```
yarn add jest
# 此版本这个⽀持Vue3.0
yarn add vue-jest@5.0.0-alpha.5
yarn add babel-jest

yarn add @vue/compiler-sfc@3.0.2
yarn add @vue/test-utils@next
yarn add typescript

# 串行执⾏（默认交叉执行，但是容易出现问题）
"test": "jest --runInBand"
```

样式打包

```
yarn config set registry https://registry.npm.taobao.org/
npm i gulp --sass_binary_site=https://npm.taobao.org/mirrors/node-sass/
// 制定镜像安装
npm i node-sass --sass_binary_site=https://npm.taobao.org/mirrors/node-sass/

yarn add gulp
yarn add gulp-autoprefixer --ignore-scripts
yarn add gulp-sass --ignore-scripts
yarn add gulp-cssmin --ignore-scripts
yarn add node-sass

# cp-cli
yarn add cp-cli
yarn add tslib
```

Eslint

```
yarn add eslint
yarn add eslint-formatter-pretty
yarn add eslint-plugin-json
yarn add eslint-plugin-prettier
yarn add eslint-plugin-vue
yarn add @vue/eslint-config-prettier
yarn add babel-eslint
yarn add prettier

#script脚本
"lint": "eslint --no-error-on-unmatched-pattern --ext .vue --ext .js --ext .jsx packages/**/ src/**/ --fix"
```

# 格式声明

https://juejin.im/post/6885542715782594568

## AMD CMD UMD 区别

amd – 异步模块定义，⽤于像 RequireJS 这样的模块加载器

cjs – CommonJS，适⽤于 Node 和 Browserify/Webpack

es – 将软件包保存为 ES 模块⽂件

iife – ⼀个⾃动执⾏的功能，适合作为 `<script>` 标签。（如果要为应⽤程序创建⼀个捆绑包，您可能想要使⽤它，因为它会使⽂件⼤⼩变⼩。）

umd – 通⽤模块定义，以 amd，cjs 和 iife 为⼀体
