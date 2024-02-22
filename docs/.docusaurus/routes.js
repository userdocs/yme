import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/qbittorrent-nox-static/markdown-page',
    component: ComponentCreator('/qbittorrent-nox-static/markdown-page', '5ba'),
    exact: true
  },
  {
    path: '/qbittorrent-nox-static/docs',
    component: ComponentCreator('/qbittorrent-nox-static/docs', 'a3f'),
    routes: [
      {
        path: '/qbittorrent-nox-static/docs',
        component: ComponentCreator('/qbittorrent-nox-static/docs', '449'),
        routes: [
          {
            path: '/qbittorrent-nox-static/docs',
            component: ComponentCreator('/qbittorrent-nox-static/docs', 'a41'),
            routes: [
              {
                path: '/qbittorrent-nox-static/docs/bash',
                component: ComponentCreator('/qbittorrent-nox-static/docs/bash', 'a4d'),
                exact: true
              },
              {
                path: '/qbittorrent-nox-static/docs/build-help',
                component: ComponentCreator('/qbittorrent-nox-static/docs/build-help', '905'),
                exact: true,
                sidebar: "qtb_sidebar"
              },
              {
                path: '/qbittorrent-nox-static/docs/changelog',
                component: ComponentCreator('/qbittorrent-nox-static/docs/changelog', '004'),
                exact: true,
                sidebar: "qtb_sidebar"
              },
              {
                path: '/qbittorrent-nox-static/docs/credits',
                component: ComponentCreator('/qbittorrent-nox-static/docs/credits', '3c6'),
                exact: true,
                sidebar: "qtb_sidebar"
              },
              {
                path: '/qbittorrent-nox-static/docs/debugging',
                component: ComponentCreator('/qbittorrent-nox-static/docs/debugging', 'e31'),
                exact: true,
                sidebar: "qtb_sidebar"
              },
              {
                path: '/qbittorrent-nox-static/docs/github-actions',
                component: ComponentCreator('/qbittorrent-nox-static/docs/github-actions', '111'),
                exact: true,
                sidebar: "qtb_sidebar"
              },
              {
                path: '/qbittorrent-nox-static/docs/glossary',
                component: ComponentCreator('/qbittorrent-nox-static/docs/glossary', '896'),
                exact: true
              },
              {
                path: '/qbittorrent-nox-static/docs/glossary/buildjet',
                component: ComponentCreator('/qbittorrent-nox-static/docs/glossary/buildjet', '7a4'),
                exact: true
              },
              {
                path: '/qbittorrent-nox-static/docs/glossary/crossbuild-essentials',
                component: ComponentCreator('/qbittorrent-nox-static/docs/glossary/crossbuild-essentials', '194'),
                exact: true
              },
              {
                path: '/qbittorrent-nox-static/docs/glossary/docker',
                component: ComponentCreator('/qbittorrent-nox-static/docs/glossary/docker', 'cbb'),
                exact: true
              },
              {
                path: '/qbittorrent-nox-static/docs/glossary/github',
                component: ComponentCreator('/qbittorrent-nox-static/docs/glossary/github', '096'),
                exact: true
              },
              {
                path: '/qbittorrent-nox-static/docs/glossary/github-actions',
                component: ComponentCreator('/qbittorrent-nox-static/docs/glossary/github-actions', 'c3a'),
                exact: true
              },
              {
                path: '/qbittorrent-nox-static/docs/glossary/github-releases',
                component: ComponentCreator('/qbittorrent-nox-static/docs/glossary/github-releases', '469'),
                exact: true
              },
              {
                path: '/qbittorrent-nox-static/docs/glossary/github-workflows',
                component: ComponentCreator('/qbittorrent-nox-static/docs/glossary/github-workflows', '856'),
                exact: true
              },
              {
                path: '/qbittorrent-nox-static/docs/glossary/musl-cross-make',
                component: ComponentCreator('/qbittorrent-nox-static/docs/glossary/musl-cross-make', 'a0a'),
                exact: true
              },
              {
                path: '/qbittorrent-nox-static/docs/glossary/qemu',
                component: ComponentCreator('/qbittorrent-nox-static/docs/glossary/qemu', '0eb'),
                exact: true
              },
              {
                path: '/qbittorrent-nox-static/docs/home',
                component: ComponentCreator('/qbittorrent-nox-static/docs/home', 'e63'),
                exact: true
              },
              {
                path: '/qbittorrent-nox-static/docs/install-qbittorrent',
                component: ComponentCreator('/qbittorrent-nox-static/docs/install-qbittorrent', '9d4'),
                exact: true,
                sidebar: "qtb_sidebar"
              },
              {
                path: '/qbittorrent-nox-static/docs/introduction',
                component: ComponentCreator('/qbittorrent-nox-static/docs/introduction', '53c'),
                exact: true,
                sidebar: "qtb_sidebar"
              },
              {
                path: '/qbittorrent-nox-static/docs/nginx-proxypass',
                component: ComponentCreator('/qbittorrent-nox-static/docs/nginx-proxypass', '20d'),
                exact: true,
                sidebar: "qtb_sidebar"
              },
              {
                path: '/qbittorrent-nox-static/docs/patching',
                component: ComponentCreator('/qbittorrent-nox-static/docs/patching', '014'),
                exact: true,
                sidebar: "qtb_sidebar"
              },
              {
                path: '/qbittorrent-nox-static/docs/Prerequisites',
                component: ComponentCreator('/qbittorrent-nox-static/docs/Prerequisites', '152'),
                exact: true,
                sidebar: "qtb_sidebar"
              },
              {
                path: '/qbittorrent-nox-static/docs/script-installation',
                component: ComponentCreator('/qbittorrent-nox-static/docs/script-installation', 'a08'),
                exact: true,
                sidebar: "qtb_sidebar"
              },
              {
                path: '/qbittorrent-nox-static/docs/script-usage',
                component: ComponentCreator('/qbittorrent-nox-static/docs/script-usage', '78c'),
                exact: true,
                sidebar: "qtb_sidebar"
              },
              {
                path: '/qbittorrent-nox-static/docs/systemd',
                component: ComponentCreator('/qbittorrent-nox-static/docs/systemd', 'eea'),
                exact: true,
                sidebar: "qtb_sidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/qbittorrent-nox-static/',
    component: ComponentCreator('/qbittorrent-nox-static/', '087'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
