// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Security Architects",
  tagline: "DevSecOps",
  favicon: "img/SA.png",

  // Set the production url of your site here
  url: "https://sec-ops-docs.vercel.app/",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "BenjaminBurton", // Usually your GitHub org/user name.
  projectName: "SecOpsDocs", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: "./sidebars.js",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/BenjaminBurton/SecOpsDocs/blob/main/jsdocs/docs/intro.md",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "#",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "img/SecOps2",
      algolia: {
        apiKey: "b54598836e6f2b0308b9f9cde81a6870",
        indexName: "sec-ops-vercel",
        contextualSearch: true,
        externalUrlRegex: "external\\.com|domain\\.com",
        replaceSearchResultPathname: {
          from: "/docs/", // or as RegExp: /\/docs\//
          to: "/",
        },

        // Optional: Algolia search parameters
        searchParameters: {},

        // Optional: path for search page that enabled by default (`false` to disable it)
        searchPagePath: "search",
        palceholder: "Search Docs with us",
        appId: "DGS5YFBVUA",
      },
      navbar: {
        title: "",
        logo: {
          alt: "Security Architects",
          src: "img/SecOps2.png",
        },
        items: [
          {
            type: "docSidebar",
            sidebarId: "tutorialSidebar",
            position: "right",
            label: "SecOpsDocs",
          },
          // { to: "/blog", label: "Blog", position: "left" },
          {
            href: "https://github.com/BenjaminBurton",
            label: "GitHub",
            position: "right",
          },
          {
            href: "https://www.linkedin.com/in/benjaminlburton/",
            label: "LinkedIn",
            position: "right",
          },
        ],
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
