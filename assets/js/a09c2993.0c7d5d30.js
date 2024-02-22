"use strict";(self.webpackChunkqbt_static_docs=self.webpackChunkqbt_static_docs||[]).push([[128],{2214:(e,s,i)=>{i.r(s),i.d(s,{assets:()=>o,contentTitle:()=>a,default:()=>h,frontMatter:()=>l,metadata:()=>r,toc:()=>d});var n=i(5893),t=i(1151);const l={title:"Introduction",hide_title:!0},a=void 0,r={id:"introduction",title:"Introduction",description:"What is it?",source:"@site/docs/introduction.md",sourceDirName:".",slug:"/introduction",permalink:"/yme/docs/introduction",draft:!1,unlisted:!1,editUrl:"https://github.com/userdocs/qbittorrent-nox-static/tree/master/docs/introduction.md",tags:[],version:"current",frontMatter:{title:"Introduction",hide_title:!0},sidebar:"qtb_sidebar",next:{title:"Prerequisite Check list",permalink:"/yme/docs/Prerequisites"}},o={},d=[{value:"What is it?",id:"what-is-it",level:3},{value:"What does it do?",id:"what-does-it-do",level:3},{value:"What is the outcome",id:"what-is-the-outcome",level:3},{value:"How do I use it?",id:"how-do-i-use-it",level:3}];function c(e){const s={a:"a",admonition:"admonition",code:"code",h3:"h3",li:"li",p:"p",pre:"pre",span:"span",ul:"ul",...(0,t.a)(),...e.components},{Advanced:i,TabItem:l,Tabs:a}=s;return i||u("Advanced",!0),l||u("TabItem",!0),a||u("Tabs",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.pre,{className:"shiki shiki-themes github-light Aura Soft Dark (Soft Text)",style:{backgroundColor:"#fff","--shiki-dark-bg":"#21202e",color:"#24292e","--shiki-dark":"#bdbdbd"},tabIndex:"0",children:(0,n.jsxs)(s.code,{className:"language-bash",children:[(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"#24292E","--shiki-dark":"#BDBDBD"},children:"BASHOPTS"}),(0,n.jsx)(s.span,{style:{color:"#D73A49","--shiki-dark":"#8464C6"},children:"="})]}),"\n",(0,n.jsx)(s.span,{className:"line"})]})}),"\n",(0,n.jsx)(s.h3,{id:"what-is-it",children:"What is it?"}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.code,{children:"qbittorrent-nox-static.sh"})," was originally a simple, amateurish bash script, to build a static ",(0,n.jsx)(s.code,{children:"qbittorrent-nox"})," binary for ",(0,n.jsx)(s.code,{children:"x86_64"}),". The script has grown and evolved since then and now it's a complicated bash script."]}),"\n",(0,n.jsx)(s.h3,{id:"what-does-it-do",children:"What does it do?"}),"\n",(0,n.jsx)(s.p,{children:"It handles a lot of the nuanced complexity around building various different dependencies on two different host platforms, towards the same outcome, whilst targeting these architectures:"}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.code,{children:"aarch64"})," - ",(0,n.jsx)(s.code,{children:"armel"})," - ",(0,n.jsx)(s.code,{children:"armhf"})," - ",(0,n.jsx)(s.code,{children:"armv7"})]}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.code,{children:"x86"})," - ",(0,n.jsx)(s.code,{children:"x86_64"})]}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.code,{children:"powerpc"})," - ",(0,n.jsx)(s.code,{children:"ppc64el"})]}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.code,{children:"mips"})," - ",(0,n.jsx)(s.code,{children:"mipsel"})," - ",(0,n.jsx)(s.code,{children:"mips64"})," - ",(0,n.jsx)(s.code,{children:"mips64el"})]}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.code,{children:"s390x"})," - ",(0,n.jsx)(s.code,{children:"riscv64"})]}),"\n",(0,n.jsxs)(i,{children:[(0,n.jsxs)(s.p,{children:["This is done using ",(0,n.jsx)(s.a,{href:"glossary/crossbuild-essentials",children:"Debian crossbuild essentials"})," or ",(0,n.jsx)(s.a,{href:"glossary/musl-cross-make",children:"Musl Cross make toolchains"}),", depending on the host build platform."]}),(0,n.jsxs)(s.p,{children:["Taking advantage of ",(0,n.jsx)(s.a,{href:"glossary/github-workflows",children:"Github Workflows"})," it has been designed to easily forked and reused. Fork it, customise it and build and release your own binaries."]})]}),"\n",(0,n.jsx)(s.admonition,{title:"The hard part is done.",type:"tip",children:(0,n.jsxs)(s.p,{children:["You always have a easy method available to you to build your own releases, simply by forking the repo and using the available workflows. How to do this will be shown in the ",(0,n.jsx)(s.a,{href:"github-actions",children:"Github Actions"})," sections later on. You can build locally or fork the repo and build and release using CI where the git repo acts as a local environment to the script."]})}),"\n",(0,n.jsxs)(s.p,{children:["Simply put, on supported host build platforms the ",(0,n.jsx)(s.code,{children:"qbittorrent-nox-static.sh"})," will perform these three main tasks:"]}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsx)(s.p,{children:"Update the system and install the core build dependencies based on activated options - Requires root privileges if any dependencies are missing."}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:["Download and build the ",(0,n.jsx)(s.code,{children:"qbittorrent-nox"})," and all dependencies locally with no special privileges required."]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:["Build a fully static and portable ",(0,n.jsx)(s.code,{children:"qbittorrent-nox"})," binary which automatically uses the latest version of all supported dependencies."]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(s.p,{children:"The script is highly configurable and is capable of native and cross building. These more advanced configurations will be discussed the next sections."}),"\n",(0,n.jsx)(s.h3,{id:"what-is-the-outcome",children:"What is the outcome"}),"\n",(0,n.jsx)(s.p,{children:"\ud83d\udd35 Here is an example successful default build profile:"}),"\n",(0,n.jsx)(s.pre,{className:"shiki shiki-themes github-light Aura Soft Dark (Soft Text)",style:{backgroundColor:"#fff","--shiki-dark-bg":"#21202e",color:"#24292e","--shiki-dark":"#bdbdbd"},tabIndex:"0",children:(0,n.jsxs)(s.code,{className:"language-plaintext",children:[(0,n.jsx)(s.span,{className:"line",children:(0,n.jsx)(s.span,{children:"qBittorrent 4.6.3 was built with the following libraries:"})}),"\n",(0,n.jsx)(s.span,{className:"line",children:(0,n.jsx)(s.span,{})}),"\n",(0,n.jsx)(s.span,{className:"line",children:(0,n.jsx)(s.span,{children:"Qt: 6.6.2"})}),"\n",(0,n.jsx)(s.span,{className:"line",children:(0,n.jsx)(s.span,{children:"Libtorrent: 2.0.9"})}),"\n",(0,n.jsx)(s.span,{className:"line",children:(0,n.jsx)(s.span,{children:"Boost: 1.84.0"})}),"\n",(0,n.jsx)(s.span,{className:"line",children:(0,n.jsx)(s.span,{children:"OpenSSL: 3.2.1"})}),"\n",(0,n.jsx)(s.span,{className:"line",children:(0,n.jsx)(s.span,{children:"zlib: 1.2.13.zlib-ng"})}),"\n",(0,n.jsx)(s.span,{className:"line",children:(0,n.jsx)(s.span,{})})]})}),"\n",(0,n.jsxs)(a,{children:[(0,n.jsxs)(l,{value:"Debian based Linux",label:"\ud83d\udd39 debian",default:!0,children:[(0,n.jsxs)(s.p,{children:["The script creates a fully static ",(0,n.jsx)(s.code,{children:"qbittorrent-nox"})," binary using ",(0,n.jsx)(s.a,{href:"https://www.gnu.org/software/libc/",children:"libc"})]}),(0,n.jsxs)(s.p,{children:["The final result will show this when using ",(0,n.jsx)(s.code,{children:"ldd"})]}),(0,n.jsx)(s.pre,{className:"shiki shiki-themes github-light Aura Soft Dark (Soft Text)",style:{backgroundColor:"#fff","--shiki-dark-bg":"#21202e",color:"#24292e","--shiki-dark":"#bdbdbd"},tabIndex:"0",children:(0,n.jsxs)(s.code,{className:"language-bash",children:[(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"#6F42C1","--shiki-dark":"#C7A06F"},children:"ldd"}),(0,n.jsx)(s.span,{style:{color:"#032F62","--shiki-dark":"#C17AC8"},children:" ~/qbt-build/bin/qbittorrent-nox"})]}),"\n",(0,n.jsx)(s.span,{className:"line"})]})}),(0,n.jsx)(s.p,{children:"Gives this result:"}),(0,n.jsx)(s.pre,{className:"shiki shiki-themes github-light Aura Soft Dark (Soft Text)",style:{backgroundColor:"#fff","--shiki-dark-bg":"#21202e",color:"#24292e","--shiki-dark":"#bdbdbd"},tabIndex:"0",children:(0,n.jsxs)(s.code,{className:"language-bash",children:[(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"#6F42C1","--shiki-dark":"#C7A06F"},children:"not"}),(0,n.jsx)(s.span,{style:{color:"#032F62","--shiki-dark":"#C17AC8"},children:" a dynamic executable"})]}),"\n",(0,n.jsx)(s.span,{className:"line"})]})})]}),(0,n.jsxs)(l,{value:"Alpine linux",label:"\ud83d\udd39 alpine",children:[(0,n.jsxs)(s.p,{children:["The script creates a fully static ",(0,n.jsx)(s.code,{children:"qbittorrent-nox"})," binary using ",(0,n.jsx)(s.a,{href:"https://wiki.musl-libc.org/",children:"musl"})]}),(0,n.jsxs)(s.p,{children:["The final result will show this when using ",(0,n.jsx)(s.code,{children:"ldd"})]}),(0,n.jsx)(s.pre,{className:"shiki shiki-themes github-light Aura Soft Dark (Soft Text)",style:{backgroundColor:"#fff","--shiki-dark-bg":"#21202e",color:"#24292e","--shiki-dark":"#bdbdbd"},tabIndex:"0",children:(0,n.jsxs)(s.code,{className:"language-bash",children:[(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"#6F42C1","--shiki-dark":"#C7A06F"},children:"ldd"}),(0,n.jsx)(s.span,{style:{color:"#032F62","--shiki-dark":"#C17AC8"},children:" ~/qbt-build/bin/qbittorrent-nox"})]}),"\n",(0,n.jsx)(s.span,{className:"line"})]})}),(0,n.jsx)(s.p,{children:"Gives this result:"}),(0,n.jsx)(s.pre,{className:"shiki shiki-themes github-light Aura Soft Dark (Soft Text)",style:{backgroundColor:"#fff","--shiki-dark-bg":"#21202e",color:"#24292e","--shiki-dark":"#bdbdbd"},tabIndex:"0",children:(0,n.jsxs)(s.code,{className:"language-bash",children:[(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"#6F42C1","--shiki-dark":"#C7A06F"},children:"statically"}),(0,n.jsx)(s.span,{style:{color:"#032F62","--shiki-dark":"#C17AC8"},children:" linked"})]}),"\n",(0,n.jsx)(s.span,{className:"line"})]})})]})]}),"\n",(0,n.jsx)(s.p,{children:"The script can do a lot of helpful things to make building and deploying a fully static qBittorrent binary about as easy as it's going to get."}),"\n",(0,n.jsx)(s.h3,{id:"how-do-i-use-it",children:"How do I use it?"}),"\n",(0,n.jsxs)(s.p,{children:["The script can be downloaded locally and run on a supported host or via docker. It has a comprehensive help section built in, available via the ",(0,n.jsx)(s.code,{children:"-h"})," flag, that explains all options and demonstrates dynamic command choices."]}),"\n",(0,n.jsx)(s.admonition,{type:"tip",children:(0,n.jsx)(s.p,{children:"The best thing to do is read the script installation and usage sections to understand the key features and how to user them."})}),"\n",(0,n.jsx)(i,{children:(0,n.jsxs)(s.admonition,{type:"caution",children:[(0,n.jsxs)(s.p,{children:["Certain build combinations require ",(0,n.jsx)(s.code,{children:"qemu"})," and ",(0,n.jsx)(s.code,{children:"binfmts"})," on the host to complete successfully."]}),(0,n.jsxs)(s.p,{children:["It's highly recommend that you use a ",(0,n.jsx)(s.code,{children:"qemu"})," + ",(0,n.jsx)(s.code,{children:"binfmts"})," + ",(0,n.jsx)(s.code,{children:"Docker"})," to build on a local host machine with no issues"]})]})})]})}function h(e={}){const{wrapper:s}={...(0,t.a)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}function u(e,s){throw new Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},1151:(e,s,i)=>{i.d(s,{Z:()=>r,a:()=>a});var n=i(7294);const t={},l=n.createContext(t);function a(e){const s=n.useContext(l);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function r(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),n.createElement(l.Provider,{value:s},e.children)}}}]);