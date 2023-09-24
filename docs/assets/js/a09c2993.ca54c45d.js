"use strict";(self.webpackChunkqbt_static_docs=self.webpackChunkqbt_static_docs||[]).push([[128],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=i.createContext({}),p=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=p(e.components);return i.createElement(s.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=a,h=u["".concat(s,".").concat(m)]||u[m]||c[m]||o;return n?i.createElement(h,r(r({ref:t},d),{},{components:n})):i.createElement(h,r({ref:t},d))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:a,r[1]=l;for(var p=2;p<o;p++)r[p]=n[p];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8495:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>f,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var i=n(7462),a=(n(7294),n(3905));const o={title:"Introduction",hide_title:!0},r=void 0,l={unversionedId:"introduction",id:"introduction",title:"Introduction",description:"What is it?",source:"@site/docs/introduction.md",sourceDirName:".",slug:"/introduction",permalink:"/qbittorrent-nox-static/docs/introduction",draft:!1,editUrl:"https://github.com/userdocs/qbittorrent-nox-static/tree/master/docs/introduction.md",tags:[],version:"current",frontMatter:{title:"Introduction",hide_title:!0},sidebar:"qtb_sidebar",next:{title:"Prerequisite Check list",permalink:"/qbittorrent-nox-static/docs/Prerequisites"}},s={},p=[{value:"What is it?",id:"what-is-it",level:3},{value:"What does it do?",id:"what-does-it-do",level:3},{value:"What is the outcome",id:"what-is-the-outcome",level:3},{value:"How do I use it?",id:"how-do-i-use-it",level:3}],d=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",t)},u=d("Advanced"),c=d("Tips"),m=d("Tabs"),h=d("TabItem"),b={toc:p},k="wrapper";function f(e){let{components:t,...n}=e;return(0,a.kt)(k,(0,i.Z)({},b,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(u,{mdxType:"Advanced"}),(0,a.kt)("h3",{id:"what-is-it"},"What is it?"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"qbittorrent-nox-static.sh")," was originally a simple, amateurish bash script, to build a static ",(0,a.kt)("inlineCode",{parentName:"p"},"qbittorrent-nox")," binary for ",(0,a.kt)("inlineCode",{parentName:"p"},"x86_64"),". The script has grown and evolved since then and now it's a complicated bash script."),(0,a.kt)("p",null,"It handles a lot of the nuanced complexity around building various different dependencies on two different host platforms, towards the same outcome, whilst targeting these architectures:"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"armel")," - ",(0,a.kt)("inlineCode",{parentName:"p"},"armhf")," - ",(0,a.kt)("inlineCode",{parentName:"p"},"armv7")," - ",(0,a.kt)("inlineCode",{parentName:"p"},"aarch64")," - ",(0,a.kt)("inlineCode",{parentName:"p"},"x86_64")," - ",(0,a.kt)("inlineCode",{parentName:"p"},"x86")," - ",(0,a.kt)("inlineCode",{parentName:"p"},"s390x")," - ",(0,a.kt)("inlineCode",{parentName:"p"},"powerpc")," - ",(0,a.kt)("inlineCode",{parentName:"p"},"ppc64el")," - ",(0,a.kt)("inlineCode",{parentName:"p"},"mips")," - ",(0,a.kt)("inlineCode",{parentName:"p"},"mipsel")," - ",(0,a.kt)("inlineCode",{parentName:"p"},"mips64")," - ",(0,a.kt)("inlineCode",{parentName:"p"},"mips64el")," - ",(0,a.kt)("inlineCode",{parentName:"p"},"riscv64")),(0,a.kt)("p",null,"This is done using ",(0,a.kt)(c,{mdxType:"Tips"},"Debian crossbuild essentials:crossbuild-essentials")," or ",(0,a.kt)(c,{mdxType:"Tips"},"Musl Cross make toolchains:musl-cross-make"),", depending on the host build platform."),(0,a.kt)("p",null,"Taking advantage of ",(0,a.kt)(c,{mdxType:"Tips"},"Github Workflows:github-workflows")," it has been designed to easily forked and reused. Fork it, customise it and build and release your own binaries."),(0,a.kt)("admonition",{title:"The hard part is done.",type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"You always have a easy method available to you to build your own releases, simply by forking the repo and using the available workflows. How to do this will be shown in the ",(0,a.kt)(c,{mdxType:"Tips"},"Github Actions:github-actions")," sections later on. You can build locally or fork the repo and build and release using CI where the git repo acts as a local environment to the script.")),(0,a.kt)("h3",{id:"what-does-it-do"},"What does it do?"),(0,a.kt)("p",null,"Simply put, on supported host build platforms the ",(0,a.kt)("inlineCode",{parentName:"p"},"qbittorrent-nox-static.sh")," will perform these three main tasks:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Update the system and install the core build dependencies based on activated options - Requires root privileges if any dependencies are missing.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Download and build the ",(0,a.kt)("inlineCode",{parentName:"p"},"qbittorrent-nox")," dependencies locally with no special privileges required.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Build a fully static and portable ",(0,a.kt)("inlineCode",{parentName:"p"},"qbittorrent-nox")," binary which automatically uses the latest version of all supported dependencies."))),(0,a.kt)("p",null,"The more advanced features will be discussed in their relevant sections."),(0,a.kt)("h3",{id:"what-is-the-outcome"},"What is the outcome"),(0,a.kt)("p",null,"\ud83d\udd35 Here is an example successful default build profile:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-none"},"qBittorrent 4.5.1 was built with the following libraries:\n\nQt: 6.5.0\nLibtorrent: 2.0.8\nBoost: 1.81.0\nOpenSSL: 3.1.0\nzlib: 1.2.13.zlib-ng\n")),(0,a.kt)(m,{mdxType:"Tabs"},(0,a.kt)(h,{value:"Debian based Linux",label:"\ud83d\udd39 debian",default:!0,mdxType:"TabItem"},(0,a.kt)("p",null,"The script creates a fully static ",(0,a.kt)("inlineCode",{parentName:"p"},"qbittorrent-nox")," binary using ",(0,a.kt)("a",{parentName:"p",href:"https://www.gnu.org/software/libc/"},"libc")),(0,a.kt)("p",null,"The final result will show this when using ",(0,a.kt)("inlineCode",{parentName:"p"},"ldd")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"ldd ~/qbt-build/bin/qbittorrent-nox\n")),(0,a.kt)("p",null,"Gives this result:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"not a dynamic executable\n"))),(0,a.kt)(h,{value:"Alpine linux",label:"\ud83d\udd39 alpine",mdxType:"TabItem"},(0,a.kt)("p",null,"The script creates a fully static ",(0,a.kt)("inlineCode",{parentName:"p"},"qbittorrent-nox")," binary using ",(0,a.kt)("a",{parentName:"p",href:"https://wiki.musl-libc.org/"},"musl")),(0,a.kt)("p",null,"The final result will show this when using ",(0,a.kt)("inlineCode",{parentName:"p"},"ldd")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"ldd ~/qbt-build/bin/qbittorrent-nox\n")),(0,a.kt)("p",null,"Gives this result:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"statically linked\n")))),(0,a.kt)("p",null,"The script can do a lot of helpful things to make building and deploying a fully static qBittorrent binary about as easy as it's going to get."),(0,a.kt)("h3",{id:"how-do-i-use-it"},"How do I use it?"),(0,a.kt)("p",null,"The script can be downloaded locally and run on a supported host or via docker. It has a comprehensive help section built in, available via the ",(0,a.kt)("inlineCode",{parentName:"p"},"-h")," flag, that explains all options and demonstrates dynamic command choices."),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"The best thing to do is read the script installation and usage sections to understand the key features and how to user them.")),(0,a.kt)(u,{mdxType:"Advanced"},(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"Certain build combinations require ",(0,a.kt)("inlineCode",{parentName:"p"},"qemu")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"binfmts")," on the host to complete successfully."),(0,a.kt)("p",{parentName:"admonition"},"It's highly recommend that you use a ",(0,a.kt)("inlineCode",{parentName:"p"},"qemu")," + ",(0,a.kt)("inlineCode",{parentName:"p"},"binfmts")," + ",(0,a.kt)("inlineCode",{parentName:"p"},"Docker")," to build on a local host machine with no issues"))))}f.isMDXComponent=!0}}]);