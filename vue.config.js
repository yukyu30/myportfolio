module.exports = {
    publicPath: './',
    outputDir: 'dist',
    chainWebpack: config => {
      config.module
        .rule('md')
        .test(/\.md$/)
        .use('vue-loader')
          .loader('markdown-to-vue-loader')
          .options('')
          .end()
    },
    
  }