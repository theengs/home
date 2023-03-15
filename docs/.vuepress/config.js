module.exports = {
  markdown: {
    lineNumbers: true
  },
  title: 'Theengs',
  description: 'Manufacturer agnostic open source set of solutions to decode BLE sensors',
  head: [
    ['link', { rel: "apple-touch-icon", sizes: "180x180", href: ".apple-touch-icon.png"}],
    ['link', { rel: "icon", type: "image/png", sizes: "32x32", href: "/favicon-32x32.png"}],
    ['link', { rel: "icon", type: "image/png", sizes: "16x16", href: "/favicon-16x16.png"}],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', color: '#3eaf7c' }],
    ['meta', { name: 'msapplication-TileImage', content: '/favicon-144x144.png' }],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }]
  ],
  themeConfig: {
    smoothScroll: true,
    repo: 'theengs/home',
    docsDir: 'docs',
    docsBranch: 'development',
    lastUpdated: 'Last Updated',
    editLinks: true,
    nav: [
      { text: 'Shop🆕', link: 'https://shop.theengs.io/'},
      { text: 'Home', link: 'https://www.theengs.io', target:'_self', rel:''},
      {text: 'Use cases',
      items: [
        { text: 'Smart Home', link: '/usecases/smarthome.md' },
        { text: 'Research', link: '/usecases/research.md' }
      ]},
      { text: 'App', link: 'https://app.theengs.io', target:'_self', rel:''},
      { text: 'Gateway', link: 'https://gateway.theengs.io', target:'_self', rel:''},
      { text: 'Decoder', link: 'https://decoder.theengs.io', target:'_self', rel:''}
    ],
  },
  plugins: [
    ['@vuepress/pwa', {
      serviceWorker: true,
      updatePopup: true
    }],
    ['@vuepress/medium-zoom', true],
    ['@vuepress/nprogress']
  ]
}