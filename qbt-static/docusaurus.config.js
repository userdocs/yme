// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

import { themes as prismThemes } from "prism-react-renderer";
import PrismDark from "./src/prism/themes/custom/aura-custom.ts";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "qbittorrent-nox-static.sh",
  tagline: "qBittorrent nox static binary builds using a bash script",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://userdocs.github.io",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/qbittorrent-nox-static",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "userdocs", // Usually your GitHub org/user name.
  projectName: "qbittorrent-nox-static", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
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
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/userdocs/qbittorrent-nox-static/tree/master",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  plugins: [
    [
      "docusaurus-plugin-remote-content",
      {
        // options here
        noRuntimeDownloads: true,
        name: "some-content", // used by CLI, must be path safe
        sourceBaseUrl:
          "https://raw.githubusercontent.com/userdocs/qbittorrent-nox-static/master/", // the base url for the markdown (gets prepended to all of the documents when fetching)
        outDir: "docs", // the base directory to output to.
        documents: [], // the file names to download
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      codeblock: {
        showGithubLink: true,
        githubLinkLabel: "View on GitHub",
        showRunmeLink: false,
        runmeLinkLabel: "Checkout via Runme",
      },
      // Replace with your project's social card
      navbar: {
        title: "Home",
        logo: {
          alt: "qbt-nox-static",
          src: "img/logo-qbittorrent.svg",
        },
        items: [
          {
            type: "docSidebar",
            sidebarId: "qtb_sidebar",
            position: "left",
            label: "Documentation",
          },
          {
            type: "custom-advanceNav",
            position: "right",
          },
          {
            href: "https://github.com/userdocs/qbittorrent-nox-static",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      prism: {
        additionalLanguages: ["bash", "yaml", "json", "nginx", "ini", "docker"],
        theme: prismThemes.github,
        darkTheme: PrismDark,
        magicComments: [
          // Remember to extend the default highlight class name as well!
          {
            className: "theme-code-block-highlighted-line",
            line: "highlight-next-line",
            block: { start: "highlight-start", end: "highlight-end" },
          },
          {
            className: "code-block-error-line",
            line: "This will error",
          },
        ],
      },
      colorMode: {
        defaultMode: "dark",
        disableSwitch: false,
        respectPrefersColorScheme: false,
      },
    }),
};

export default config;
