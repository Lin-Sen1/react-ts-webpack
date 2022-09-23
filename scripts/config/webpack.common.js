const { resolve } = require('path')
const { PROJECT_PATH, isDev} = require('../constant')


module.exports = {
  //定义了口文件路径，其属性名 app 表示引入文件的名字。
  entry: {
    app: resolve(PROJECT_PATH, './src/app.js'),
  },
  //定义编译打包之后的文件名以及所在路径。
  output: {
    filename: `js/[name]${isDev ? '' : '.[hash:8]'}.js`,
    path: resolve(PROJECT_PATH, './dist'),
  },
}
