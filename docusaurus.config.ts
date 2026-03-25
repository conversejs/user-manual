import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Converse.js User Manual',
  tagline: 'Secure, open-source chat for everyone',
  favicon: 'img/favicon.ico',

  url: 'https://conversejs.org',
  baseUrl: '/',

  organizationName: 'conversejs',
  projectName: 'converse.js',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'fr', 'es'],
    localeConfigs: {
      en: {
        label: 'English',
        direction: 'ltr',
      },
      fr: {
        label: 'Français',
        direction: 'ltr',
      },
      es: {
        label: 'Español',
        direction: 'ltr',
      },
    },
  },

  presets: [
    [
      'classic',
      {
        docs: {
          routeBasePath: '/',
          sidebarPath: './sidebars.ts',
        },
        blog: false,
        theme: {
          customCss: './css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'Converse',
      logo: {
        alt: 'Converse Logo',
        src: 'img/conversejs-filled-512.svg',
      },
      items: [
        {
          label: 'Homepage',
          position: 'left',
          href: 'https://conversejs.org',
        },
        {
          type: 'localeDropdown',
          position: 'right',
        },
        {
          href: 'https://github.com/conversejs/converse.js',
          label: 'GitHub',
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
              label: 'Getting Started',
              to: '/intro',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Homepage',
              href: 'https://conversejs.org',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/conversejs/converse.js',
            },
          ],
        },
      ],
      copyright: `
        <div>Copyright © ${new Date().getFullYear()} Converse.js. Built with Docusaurus.</div>
        <div style="margin-top: 20px;">
          <p>Supported by our Partners:</p>
          <div style="display: flex; justify-content: center; gap: 20px; align-items: center; flex-wrap: wrap; background-color: white; padding: 10px; border-radius: 8px;">
            <img src="/img/codefirst.png" alt="CodeFirst" style="height: 40px;" />
            <img src="/img/keycdn.png" alt="KeyCDN" style="height: 40px;" />
            <img src="/img/wikisuite.png" alt="WikiSuite" style="height: 40px;" />
          </div>
        </div>
      `,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
