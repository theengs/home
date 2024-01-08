const commonConfig = require('./public/commonConfig');

module.exports = {
  ...commonConfig,
  themeConfig: {
    repo: 'theengs/home',
    ...commonConfig.themeConfig,
  }
}
