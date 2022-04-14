const { defineConfig } = require('@vue/cli-service');
module.exports = defineConfig({
  transpileDependencies: ['vuetify'],
  publicPath: '/birthday/',
  outputDir: './docs',
});
