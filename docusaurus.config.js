// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'is-truly-a.pro Docs',
  tagline: 'docs of is-truly-a.pro',
  favicon: 'img/logo.png',
  url: 'https://docs.is-truly-a.pro',
  baseUrl: '/',
  organizationName: 'is-truly-a-pro',
  projectName: 'docs',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          editUrl:
            'https://github.com/is-truly-a-pro/docs/edit',
          routeBasePath: '/',
        },
        blog: false,
      }),
    ],
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/banner.png',
      navbar: {
        title: 'is-truly-a.pro',
        logo: {
          alt: 'is-truly-a.pro Logo',
          src: 'img/logo.png',
        },
        items: [
          {
            href: 'https://github.com/is-truly-a-pro/docs/',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.gg/MGSvZBdc4p',
              },
            ],
          },
        ],
        copyright: `Copyright © 2024-${new Date().getFullYear()} is-truly-a.pro. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};
export default config;