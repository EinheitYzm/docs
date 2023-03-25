module.exports = {
    // plugins: [
    //     ["vuepress-plugin-auto-sidebar", {
    //       // options
    //     }]
    //   ],
    title: "凡事发生必有利于我",
    description: "凡事发生必有利于我的随记",
    head: [
        ['link', { rel: 'icon', href: '/favicon.ico' }],
        ['meta',{name: 'author', content: 'Salvatore'}],
        ['meta',{name: 'keywords', content: '算法刷题记录，编程语言技术文档，面试八股记录，凡事发生必有利于我'}],
    ],
    themeConfig: {
      lastUpdated: 'Last Updated',
      logo: '/assets/img/logo.png',
      nav: [
        { text: 'Home', link: '/' },
        { text: 'Guide', link: '/about' },
        {
            text: 'Languages',
            ariaLabel: 'Language Menu',
            items: [
              { text: 'Home', link: '/' },
              { text: 'Guide', link: '/about' }
            ]
        },
        {
            text: 'Languages2',
            items: [
              { text: 'Group1', items: [
                { text: 'Chinese', link: '/' },
                { text: 'Japanese', link: '/about' }
              ] },
              { text: 'Group2', items: [
                { text: 'Chinese', link: '/' },
                { text: 'Japanese', link: '/about' }
              ] }
            ]
        },
      ],
      sidebar: {
        '/Cpp/': [
            'Cpp-aaa',
            'Cpp-bbb',
            'Cpp-ccc',
        ],

        '/Go/': [
            'Go-aaa',      
            'Go-bbb', 
            'Go-ccc',
        ],

        '/': [
            '',
        ],
        
       }
    }
  }