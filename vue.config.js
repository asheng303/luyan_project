module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        'common': '@/common',
        'assets': '@/assets',
        'components': '@/components',
        'network': '@/network',
        'views': '@/views'
      }
    }
  },
  //在根目录下创建vue.config.js,如下配置：
  devServer: {
    proxy: {  
      '/api': {
        target: 'http://localhost:8080', //路径指向本地主机地址及端口号
        ws: true, 
        changeOrigin: true,
        pathRewrite:{
            '^/api': '/data' //路径转发代理
        }
      }
    }
  },
   publicPath:'./',
   outputDir:"dist",
   assetsDir:"assets",
   lintOnSave:false,
   productionSourceMap: true, // 不需要生产环境的设置false可以减小dist文件大小，加速构建
}
