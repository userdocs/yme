/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  qtb_sidebar: [{ type: "autogenerated", dirName: "." }],

  // But you can create a sidebar manually

  qtb_sidebar: [
    "introduction",
    "Prerequisites",
    "script-installation",
    "script-usage",
    "build-help",
    "patching",
    "debugging",
    "install-qbittorrent",
    "nginx-proxypass",
    "systemd",
    "github-actions",
    "credits",
    "changelog",
    // "glossary",
  ],
};

module.exports = sidebars;