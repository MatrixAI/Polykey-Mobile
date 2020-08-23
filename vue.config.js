module.exports = {
  transpileDependencies: ["vuetify"],
  configureWebpack: {
    resolve: {
      alias: {
        '@': __dirname + '/src/renderer'
      }
    },
    entry: {
      app: './src/renderer/index.ts'
    }
  }
};
