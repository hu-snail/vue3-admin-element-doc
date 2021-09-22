// @ts-check
/**
 * @type {import('vitepress').UserConfig}
 */
 module.exports = {
    base: '/',
    title: 'Vue3-admin-element',
    lang: 'zh-CN',
    description: '一个开箱即用的前端框架',
    head: createHead(),
    themeConfig: {
      algolia: {
        apiKey: 'c57105e511faa5558547599f120ceeba',
        indexName: 'vitepress'
      },
      repo: 'hu-snail/vue3-admin-element',
      docsRepo: 'hu-snail/vue3-admin-element-doc',
      docsBranch: 'main',
      editLinks: true,
      logo: '/public/logo.png',
      editLinkText: '为此页提供修改建议',
      nav: [
        { text: '指南', link: '/guide/introduction'},
        { text: '常用组件', link: '/compontents/introduction' },
    ],
    sidebar: {
      '/guide/': [
        {
          text: '指南',
          children: [
            {
              text: '介绍',
              link: '/guide/introduction',
            },
            {
              text: '开始',
              link: '/guide/start',
            },
          ],
        }
      ]
    }
    },
  };
  
  /**
   * @type {()=>import('vitepress').HeadConfig[]}
   */
  
  function createHead() {
    return [
      ['meta', { name: 'author', content: 'hu-snail' }],
      [
        'meta',
        {
          name: 'keywords',
          content: 'vue3-admin, vitejs, vite, element-plus, vue',
        },
      ],
      ['link', { rel: 'icon', type: 'image/svg+xml', href: '/logo.png' }],
      [
        'meta',
        {
          name: 'viewport',
          content:
            'width=device-width,initial-scale=1,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no',
        },
      ],
      ['meta', { name: 'keywords', content: 'vue vben admin docs' }],
      ['link', { rel: 'icon', href: '/favicon.ico' }],
    ];
  }
  
  