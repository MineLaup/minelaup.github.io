module.exports = {
  locales: {
    '/': {
      lang: 'en-US',
      title: 'MineLaup Project',
      description: 'A modpack manager for customs minecraft launchers.',
    },
    '/fr/': {
      lang: 'fr-FR',
      title: 'MineLaup Projet',
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
  ]
}