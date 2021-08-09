module.exports = {
  title: 'OctocatHub',
  description: '开源聚合平台',
  base: '/',
  plugins: ['vuepress-plugin-code-copy'],
  head: [
    ['link', {
      rel: 'icon',
      href: '/favicon.png'
    }],

    ['link', {
      rel: 'stylesheet',
      href: 'https://cdn.jsdelivr.net/npm/octicons/build/font/octicons.css'
    }],

    ['link', {
      rel: 'stylesheet',
      href: 'https://cdn.jsdelivr.net/npm/octicons/build/build.css'
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
  theme: "../packages/vuepress-theme-macgs",
  themeConfig: {
    // 头部菜单栏
    nav: [{
      text: '准备工作',
      link: '/1-Preparations/'
    },
    {
      text: 'Java',
      items: [{
        text: '基础语法',
        link: '/2-Java/java/'
      },
      {
        text: 'SpringBoot',
        link: '/2-Java/springboot/'
      },
      {
        text: 'SpringCloud',
        link: '/2-Java/springcloud/'
      },
      {
        text: 'SpringSecurity',
        link: '/2-Java/springsecurity/'
      },
      {
        text: '帮助完善',
        link: '/2-Java/HelpNeeded'
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
        text: '命令使用',
        link: '/3-Linux/Command/'
      },
      {
        text: 'Shell编程',
        link: '/3-Linux/Shell/'
      },
      {
        text: '服务搭建配置',
        link: '/3-Linux/Server/'
      },
      {
        text: 'Docker',
        link: '/3-Linux/Docker/'
      },
      {
        text: '帮助完善',
        link: '/3-Linux/HelpNeeded'
      }
      ]
    },
    {
      text: 'SQL',
      items: [{
        text: '概要',
        link: '/4-SQL/'
      },
      {
        text: 'MySQL',
        link: '/4-SQL/MySQL/'
      },
      {
        text: 'Redis',
        link: '/4-SQL/Redis/'
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
        text: 'Vue',
        link: '/5-Web/Vue/'
      },
      {
        text: 'CSS',
        link: '/5-Web/CSS/'
      },
      {
        text: '帮助完善',
        link: '/5-Web/HelpNeeded'
      }
      ]
    },
    {
      text: '工具',
      items: [{
        text: '概要',
        link: '/6-Tool/'
      },
      {
        text: 'Git',
        link: '/6-Tool/Git/'
      },
      {
        text: 'SVN',
        link: '/6-Tool/SVN/'
      },
      {
        text: 'IDEA',
        link: '/6-Tool/IDEA/'
      },
      {
        text: '帮助完善',
        link: '/6-Tool/HelpNeeded'
      }
      ]
    },
    {
      text: '算法与数据结构',
      items: [{
        text: '概要',
        link: '/7-Algorithm/'
      },
      {
        text: '算法',
        link: '/7-Algorithm/Algorithm/'
      },
      {
        text: '数据结构',
        link: '/7-Algorithm/DataStructure/'
      },
      {
        text: '帮助完善',
        link: '/7-Algorithm/HelpNeeded'
      }
      ]
    },
    {
      text: '反馈',
      link: 'https://github.com/octocathub/octocathub.github.io/issues/new/choose'
    },
    {
      text: 'GitHub',
      link: 'https://github.com/octocathub/octocathub.github.io'
    },
    ],

    // 侧边菜单栏
    sidebar: {
      '/1-Preparations/': [''],

      '/2-Java/java/': [
        {
          title: '基础语法',
          // collapsable: false,
          children: [
            '',
            'singleton',
            'asynchronous',
            'assets',
            'basic-config'
          ]
        }
      ],

      '/2-Java/springboot/': [
        {
          title: 'springboot',
          collapsable: false,
          children: [
            '',

            'deploy',
            'package-deployment/',
            'directory-structure',
            'field-validate',
            'custom-annotation',
            'annotaion'
          ]
        },
        // 如果再次分组的话就加上
        // {
        //   title: 'springboot',
        //   collapsable: false,
        //   children: [
        //     '',
        //     'deploy',
        //     'directory-structure'
        //   ]
        // }
      ],

      '/2-Java/springcloud/': [
        {
          title: 'springcloud',
          collapsable: false,
          children: [
            '',
            'frontmatter',
            'getting-started',
            'global-computed'
          ]
        }
      ],

      '/2-Java/springsecurity/': [
        {
          title: 'springsecurity',
          collapsable: false,
          children: [
            '',
          ]
        }
      ],

      '/2-Java/HelpNeeded': [
        'HelpNeeded'
      ],

      '/3-Linux/Command/': [
        {
          title: '命令使用',
          collapsable: false,
          children: [
            '',
            'user-manage',
            'authority-manage',
            'static-ip'
          ]
        }
      ],

      '/3-Linux/Shell/': [
        {
          title: 'Schell编程',
          collapsable: false,
          children: [
            '',
          ]
        }
      ],

      '/3-Linux/Server/': [
        {
          title: '服务搭建',
          collapsable: false,
          children: [
            '',
            'install-mysql',
            'mysql-startup-self',
            'modify-mysql-password-policy',
            'mysql-create-grant',
            'mysql-remote-connection',
            'nginx-startup-auto',
            'nginx-config-list',
            'nginx-basic-operation',
            'ssh-force-cracking',
            'firewall',
            'change-timezone',
            'crontab',
            'ssh-force-cracking',
            'systemd-process-manage'
          ]
        }
      ],

      '/3-Linux/Docker/': [
        {
          title: 'Docker',
          collapsable: false,
          children: [
            '',
            'install-docker'
          ]
        }
      ],


      '/4-SQL/MySQL/': [
        {
          title: 'MySQL',
          collapsable: false,
          children: [
            '',
            'group',
            'foreign-key',
            'is-exists',
            'log',
            'primary-key',
            'service-failed-start',
            'sql-index',
            'sql-optimization',
            'tuning'
          ]
        }
      ],

      '/4-SQL/Redis/': [
        {
          title: 'Redis',
          collapsable: false,
          children: [
            '',
            'global-redis'
          ]
        }
      ],
      '/5-Web/CSS/': [
        '',
        'HelpNeeded'
      ],
      '/5-Web/Vue/': [
        '',
        'HelpNeeded'
      ],
      '/6-Tool/Git/': [
        '',
        'use-git',
        'HelpNeeded'
      ],
      '/6-Tool/IDEA/': [
        '',
        'HelpNeeded'
      ],
      '/6-Tool/Svn/': [
        '',
        'HelpNeeded'
      ],
      '/7-Algorithm/Algorithm/': [
        '',
        'HelpNeeded'
      ],
      '/7-Algorithm/DataStructure/': [
        '',
        'HelpNeeded'
      ],
      '/': [''],
    },
    lastUpdated: 'Last Updated'
  }
}

