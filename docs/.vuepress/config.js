module.exports = {
  
  locales: {
    '/': {
      lang: 'en-US',
      title: 'MineLaup Project',
      description: 'A modpack manager for customs minecraft launchers.',
    },
    '/fr/': {
      lang: 'fr-FR',
      title: 'MineLaup Project',
      description: 'Un gestionnaire de packs de mods pour les launcher minecraft personnalisés.'
    }
  },
  head: [
    ['link', { rel: 'icon', href: '/logo.png' }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#48bb78' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'apple-touch-icon', href: `/icons/apple-touch-icon-152x152.png` }],
    ['link', { rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', color: '#48bb78' }],
    ['meta', { name: 'msapplication-TileImage', content: '/icons/msapplication-icon-144x144.png' }],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }]
  ],

  themeConfig: {
    logo: '/logo.png',
    '/': {
      sidebar: 'auto'
    },

    locales: {
      '/': {
        selectedText: 'Languages',
        label: 'English',
        sidebar: {
          '/development/': [
            '',
            'server',
            'client',
            'documentation'
          ]
        },
        nav: [
          { text: 'Home', link: '/' },
          { text: 'Guide', link: '/guide/' },
          { text: 'Development', link: '/development/' },
          { text: 'Github', link: 'https://github.com/MineLaup' }
        ],
      },
      '/fr/': {
        selectedText: 'Langues',
        label: 'Français',
        nav: [
          { text: 'Accueil', link: '/fr/' },
          { text: 'Guide', link: '/fr/guide/' },
          { text: 'Développement', link: '/fr/development/' },
          { text: 'Github', link: 'https://github.com/MineLaup' }
        ],
      }
    }
  },
  markdown: {
    extendMarkdown: md => {
      md.use(require('markdown-it-task-checkbox'))
    }
  }
}