import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import type * as Blog from '@docusaurus/plugin-content-blog';

const config: Config = {
  title: 'Sven Konings',
  tagline: 'Projects and activities',
  url: 'https://svenkonings.nl',
  baseUrl: '/',
  i18n: {
    defaultLocale: 'en',
    locales: ['en']
  },
  presets: [
    [
      'classic',
      {
        docs: false,
        blog: {
          id: 'projects',
          routeBasePath: '/projects',
          path: './projects',
          blogTitle: 'Projects',
          blogDescription: 'Overview of my personal projects.',
          postsPerPage: 'ALL',
          blogSidebarTitle: 'Projects',
          blogSidebarCount: 'ALL',
        }
      } satisfies Preset.Options,
    ],
  ],
  plugins: [
    [
      '@docusaurus/plugin-content-blog',
      {
        id: 'activities',
        routeBasePath: '/activities',
        path: './activities',
        blogTitle: 'Activities',
        blogDescription: 'Overview of activities I helped organize.',
        postsPerPage: 'ALL',
        blogSidebarTitle: 'Activities',
        blogSidebarCount: 'ALL',
      } satisfies Blog.Options
    ]
  ],
  themeConfig: {
    navbar: {
      title: 'Sven Konings',
      items: [
        {to: '/projects', label: 'Projects'},
        {to: '/activities', label: 'Activities'}
      ]
    },
    footer: {
      links: [
        {
          label: 'Github',
          href: 'https://github.com/svenkonings'
        },
        {
          label: 'LinkedIn',
          href: 'https://linkedin.com/in/svenkonings/'
        }
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Sven Konings`
    }
  } satisfies Preset.ThemeConfig,
};

export default config;
