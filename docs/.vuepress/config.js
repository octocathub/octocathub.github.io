module.exports = {
  title: 'OctocatPress',
  description: '开源聚合平台',
  base: '/',
  head: [
    ['link', {
      rel: 'icon',
      href: '/favicon.png'
    }],
    ['meta', {
      name: 'theme-color',
      content: '#00ABE9'
    }],
    ['meta', {
      name: 'apple-mobile-web-app-capable',
      content: 'yes'
    }],
    ['meta', {
      name: 'apple-mobile-web-app-status-bar-style',
      content: 'black'
    }],
    ['link', {
      rel: 'apple-touch-icon',
      href: '/favicon.png'
    }],
    ['meta', {
      name: 'msapplication-TileImage',
      content: '/favicon.png'
    }],
    ['meta', {
      name: 'msapplication-TileColor',
      content: '#06BDFF'
    }]
  ],
  themeConfig: {
    nav: [{
      text: '准备工作',
      link: '/1-Preparations/'
    },
    {
      text: 'C-Program',
      items: [{
        text: '概要',
        link: '/2-Cpp/'
      },
      {
        text: 'C语言',
        link: '/2-Cpp/2-1-C'
      },
      {
        text: 'C++',
        link: '/2-Cpp/2-2-Cpp'
      },
      {
        text: '帮助完善',
        link: '/2-Cpp/HelpNeeded'
      }
      ]
    },
    {
      text: 'Linux',
      items: [{
        text: '概要',
        link: '/3-Linux/'
      },
      {
        text: '基础命令',
        link: '/3-Linux/3-1-Command'
      },
      {
        text: 'Shell编程',
        link: '/3-Linux/3-2-Shell'
      },
      {
        text: 'Vim操作指南',
        link: '/3-Linux/3-3-Vim'
      },
     {
        text: '帮助完善',
        link: '/3-Linux/HelpNeeded'
      }
      ]
    },
    {
      text: 'Github',
      items: [{
        text: '概要',
        link: '/4-Github/'
      },
      {
        text: 'GitHub操作指南',
        link: '/4-Github/4-1-Github'
      },
      {
        text: 'Git操作指南',
        link: '/4-Github/4-2-Git'
      },
      {
        text: 'Mardown语法指南',
        link: '/4-Github/4-3-Mardown'
      },
      {
        text: 'README文件书写',
        link: '/4-Github/4-4-README'
      },
      {
        text: '帮助完善',
        link: '/4-Github/HelpNeeded'
      }
      ]
    },
    {
      text: 'Web',
      items: [{
        text: '概要',
        link: '/5-Web/'
      },
      {
        text: 'HTML编程',
        link: '/5-Web/5-1-HTML'
      },
      {
        text: 'CSS编程',
        link: '/5-Web/5-2-CSS'
      },
      {
        text: 'JS编程',
        link: '/5-Web/5-3-JS'
      },
      {
        text: 'Electron编程',
        link: '/5-Web/5-4-Electron'
      },
      {
        text: '帮助完善',
        link: '/5-Web/HelpNeeded'
      }
      ]
    },
    {
      text: 'Mcu',
      items: [{
        text: '概要',
        link: '/6-Mcu/'
      },
      {
        text: '51单片机',
        link: '/6-Mcu/6-1-51'
      },
      {
        text: 'STM32单片机',
        link: '/6-Mcu/6-2-STM32'
      },
      {
        text: '嵌入式开发',
        link: '/6-Mcu/6-3-EmbeddedSystem'
      },
      {
        text: '帮助完善',
        link: '/6-Mcu/HelpNeeded'
      }
      ]
    },
    {
      text: '体验与参考',
      link: '/5-Experience/'
    },
    {
      text: '反馈',
      link: 'https://github.com/octocatpress/octocatpress.github.io/issues/new/choose'
    },
    {
      text: 'GitHub',
      link: 'https://github.com/octocatpress/octocatpress.github.io'
    },
    ],
    sidebar: {
      '/1-Preparations/': [''],
      '/2-Cpp/': [
        '',
        '2-1-C',
        '2-2-Cpp',
        'HelpNeeded'
      ],
      '/3-Linux/': [
        '',
        '3-1-Command',
        '3-2-Shell',
        '3-3-Vim',
        'HelpNeeded'
      ],
      '/4-Github/': [
        '',
        '4-1-Github',
        '4-2-Git',
        '4-3-Markdown',
        '4-4-README',
        'HelpNeeded'
      ],
      '/5-Web/': [
        '',
        '5-1-HTML',
        '5-2-CSS',
	      '5-3-JS',
	      '5-4-Electron',
        'HelpNeeded'
      ],
      '/6-Mcu/': [
      '',
      '6-1-51',
      '6-2-STM32',
      '6-3-EmbeddedSystem',
      'HelpNeeded'
      ],
      '/7-Experience/': [''],
      '/': ['']
    },
    lastUpdated: 'Last Updated'
  }
}

