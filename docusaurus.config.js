// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Fastify',
  tagline: 'Fast and low overhead web framework, for Node.js',
  url: 'https://fastify.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'fastify', // Usually your GitHub org/user name.
  projectName: 'website-next', // Usually your repo name.

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/fastify/website-next/edit/main/docs/',
          lastVersion: "current",
          versions: {
            current: {
              label: "v3.x (Current)",
              path: "v3",
            },
            "v2": {
              label: "v2.x",
              path: "v2",
            },
            "v1": {
              label: "v1.x",
              path: "v1",
            },
          },
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/fastify/website-next/edit/main/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Fastify',
        logo: {
          alt: 'Fastify Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: "docsVersionDropdown",
            position: "left"
          },
          {
            type: "doc",
            docId: "index",
            position: "left",
            label: "Docs",
          },
          {to: '/ecosystem', label: 'Ecosystem', position: 'left'},
          {to: '/benchmarks', label: 'Benchmarks', position: 'left'},
          {to: '/contribute', label: 'Contribute', position: 'left'},
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/fastify/help',
            label: 'Help',
            position: 'left',
          },
          {
            href: 'https://github.com/fastify/fastify',
            label: 'GitHub',
            position: 'right',
          },
          {
            href: 'https://twitter.com/fastifyjs',
            label: 'Twitter',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Docs',
                to: '/docs/v3/',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              },
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/docusaurus',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/docusaurus',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/facebook/docusaurus',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
