const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Climate Benefits Doc',
  tagline: 'Climate Benefits',
  url: 'https://climatebenefits.github.io/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'ClimateBenefits', // Usually your GitHub org/user name.
  projectName: 'docs', // Usually your repo name.
  themeConfig: {
    image: 'https://i.imgur.com/BAi0jo7.png',
    navbar: {
      title: 'Climate Benefits',
      logo: {
        alt: 'My Site Logo',
        src: 'img/CBLogo.png',
        href: '/'
      },
      items: [
       /* {
          type: 'doc',
          docId: 'intro',
          position: 'left',
          label: 'Climate Benefits',
        }, */
      ],
    },
    footer: {
      style: 'dark',
      copyright: `Copyright © ${new Date().getFullYear()} Climate Benefits, Inc.`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
        },
        
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
