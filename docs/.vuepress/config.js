const moment = require('moment');
moment.locale("zh-cn")

module.exports = {
    base: "/docs/",
    title: "凡事发生必有利于我",
    description: "凡事发生必有利于我的随记",
    head: [
        ['link', { rel: 'icon', href: '/favicon.ico' }],
        ['meta',{name: 'author', content: 'Salvatore'}],
        ['meta',{name: 'keywords', content: '算法刷题记录，编程语言技术文档，面试八股记录，凡事发生必有利于我'}],
    ],
    plugins: [
        [
          '@vuepress/last-updated',
          {
            transformer: (timestamp) => {
              // 不要忘了安装 moment
              const moment = require('moment')
              return moment(timestamp).format("LLLL")
            }
          }
        ]
        // ["vuepress-plugin-auto-sidebar", {
        //     // options
        // }]
      ],
    themeConfig: {
      lastUpdated: 'Last Updated',
      logo: '/assets/img/logo.png',
      nav: [
        { text: 'Home', link: '/' },
        { text: 'About', link: '/about' },
        {
            text: 'Languages',
            ariaLabel: 'Language Menu',
            items: [
              { text: 'C++', link: '/cpp' },
              { text: 'Go', link: '/go' },
              { text: 'Java', link: '/java' },
              { text: 'Python', link: '/python' },
            ]
        },
        {
          text: 'Tools',
          items: [
            { text: 'Tmux', link: '/Tools/tmux' },

          ]
      },
        // {
        //     text: 'Languages',
        //     ariaLabel: 'Language Menu',
        //     items: [
        //       { text: 'Group1', items: [
        //         { text: 'Chinese', link: '/' },
        //         { text: 'Japanese', link: '/about' }
        //       ] },
        //       { text: 'Group2', items: [
        //         { text: 'Chinese', link: '/' },
        //         { text: 'Japanese', link: '/about' }
        //       ] }
        //     ]
        // },
      ],
      sidebar: {
        '/Cpp/': [
            // 'Cpp-aaa',
            // 'Cpp-bbb',
            // 'Cpp-ccc',
        ],

        '/Go/': [
            // 'Go-aaa',      
            // 'Go-bbb', 
            // 'Go-ccc',
        ],
        
        '/': [
            '',
            // 'tmux',
            // 'java',
            // 'python',
            // 'go',
            // 'cpp',
        ],
        
       }
    }
  }