module.exports = {
  // publicPath: process.env.NODE_ENV === 'production'
  //   ? '/yaredportfolio/'
  //   : '/',
  chainWebpack: config => {
    config.module
      .rule("pdf")
      .test(/\.pdf$/)
      .use("file-loader")
      .loader("file-loader");
    },
  "transpileDependencies": [
    "vuetify"
  ]
} 