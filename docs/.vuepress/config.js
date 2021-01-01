module.exports = {
  title: 'Featurepreneur Articles',
  base: '/featurepreneur-articles/',
  description: 'Featurepreneur Articles - Where ML Enthusiasts can share their knowledge',
  logo: './assets/img/logo.png',
  theme: require.resolve('../../'),
  themeConfig: {
  authors: [
      {
      name: 'Naveen',
      avatar: '/assets/img/sal.jpg',
      link: 'https://featurepreneur.com/donate',
      linktext: 'Follow',
      },
      {
        name: 'Raja CSP',
        avatar: '/assets/img/avatar.png',
        link: 'https://medium.com/@rajacsp',
        linktext: 'Follow',
      },
    ],
    footer: {
      contact: [
        {
          type: 'codepen',
          link: '#',
        },
        {
          type: 'facebook',
          link: '#',
        },
        {
          type: 'github',
          link: 'https://github.com/featurepreneur',
        },
        {
          type: 'gitlab',
          link: '#',
        },
        {
          type: 'instagram',
          link: '#',
        },
        {
          type: 'linkedin',
          link: '#',
        },
        {
          type: 'mail',
          link: '#',
        },
        {
          type: 'messenger',
          link: '#',
        },
        {
          type: 'phone',
          link: '#',
        },
        {
          type: 'twitter',
          link: '#',
        },
        {
          type: 'web',
          link: '#',
        }
      ],
      copyright: [
        {
          text: '2020 - 2021 @ Featureprenur',
          link: 'http://featurepreneur.com/',
        },
        {
          text: 'Micro appriciation platform for ML Enthusiasts',
          link: 'http://featurepreneur.com/',
        },
      ],
    },

    sitemap: {
      hostname: 'https://github.com/tactlabs/featurepreneur-articles/'
    },
    comment: {
      service: 'disqus',
      shortname: 'demowebsite',
    },
    newsletter: {
      endpoint: '#'
    },
    feed: {
      canonical_base: 'https://github.com/tactlabs/featurepreneur-articles/',
    },
    smoothScroll: true
  },
}
