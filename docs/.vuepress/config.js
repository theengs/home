const commonConfig = require('./public/commonConfig');

module.exports = {
  ...commonConfig,
  themeConfig: {
    repo: 'theengs',
    ...commonConfig.themeConfig,
  },
  plugins: {
    'sitemap': {
      hostname: 'https://www.theengs.io',
      urls: [
        'https://decoder.theengs.io/devices/devices.html',
        'https://community.openmqttgateway.com/',
        'https://shop.theengs.io/',
        'https://shop.theengs.io/products/theengs-plug-smart-plug-ble-gateway-and-energy-consumption',
        'https://shop.theengs.io/products/theengs-bridge-esp32-ble-mqtt-gateway-with-ethernet-and-external-antenna',
        'https://app.theengs.io/',
        'https://gateway.theengs.io/',
        'https://decoder.theengs.io/',
        'https://parser.theengs.io/',
        'https://docs.openmqttgateway.com/'
      ],
    },
  }
}
