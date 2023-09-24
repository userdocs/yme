"use strict";(self.webpackChunkqbt_static_docs=self.webpackChunkqbt_static_docs||[]).push([[80],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>g});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=c(n),h=o,g=u["".concat(l,".").concat(h)]||u[h]||p[h]||r;return n?a.createElement(g,i(i({ref:t},d),{},{components:n})):a.createElement(g,i({ref:t},d))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:o,i[1]=s;for(var c=2;c<r;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},1016:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>g,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var a=n(7462),o=(n(7294),n(3905));const r={title:"Changelog",hide_title:!0},i=void 0,s={unversionedId:"changelog",id:"changelog",title:"Changelog",description:"v2.0.0 - 03-04-2023",source:"@site/docs/changelog.md",sourceDirName:".",slug:"/changelog",permalink:"/qbittorrent-nox-static/docs/changelog",draft:!1,editUrl:"https://github.com/userdocs/qbittorrent-nox-static/tree/master/docs/changelog.md",tags:[],version:"current",frontMatter:{title:"Changelog",hide_title:!0},sidebar:"qtb_sidebar",previous:{title:"Credits",permalink:"/qbittorrent-nox-static/docs/credits"}},l={},c=[{value:"v2.0.0 - 03-04-2023",id:"v200---03-04-2023",level:3},{value:"v1.1.0 - 18-03-2023",id:"v110---18-03-2023",level:3},{value:"v1.0.6 - 07-03-2023",id:"v106---07-03-2023",level:3},{value:"v1.0.5 - 06-03-2023",id:"v105---06-03-2023",level:3},{value:"v1.0.4 - 19-01-2023",id:"v104---19-01-2023",level:3},{value:"v1.0.3 - 15-07-2022",id:"v103---15-07-2022",level:3}],d=(u="Advanced",function(e){return console.warn("Component "+u+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",e)});var u;const p={toc:c},h="wrapper";function g(e){let{components:t,...n}=e;return(0,o.kt)(h,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(d,{mdxType:"Advanced"}),(0,o.kt)("h3",{id:"v200---03-04-2023"},"v2.0.0 - 03-04-2023"),(0,o.kt)("p",null,"There have been various breaking changes in the supporting architecture that effect the script and require updating to v2.0.0 from v1.1.0 or earlier."),(0,o.kt)("p",null,"A lot of changes and tweaks to workflows and supporting repos to make sure things are as size efficient as they can be. For example, gz to xz where possible."),(0,o.kt)("p",null,"Alpine Crossbuild tools are 70% reduced in size."),(0,o.kt)("p",null,"The script can now build for these arches using musl or debian though workflows and releases may not target them all yet."),(0,o.kt)("p",null,"armel armhf armv7 aarch64 x86_64 x86 s390x powerpc ppc64el mips mispel mips64 mips64el riscv64"),(0,o.kt)("p",null,"v2 is is an overhaul that aims to be more sensibly coded and and use associative arrays to handle the URL data properly. Less obfuscated and consistent in how it uses this data."),(0,o.kt)("p",null,"docs to be updated soon."),(0,o.kt)("p",null,"A quick summary of main changes and features from v1.5.0 through vto 2.0.0"),(0,o.kt)("p",null,"No more bison or gawk building. They are OS dependencies now and need to be installed on the host.\nAlpine only - Increased multiarch target support, updated musl cross tools and optimised size.\nA caching mechanism for files to store and manage download dependencies to avoid re-downloading them across builds.\nAny valid boost tag can be provided including beta tags. It was not a tag based check before.\nAny valid qt tag can be provided including beta tags.\npatches system reworked to allow patching any module. Source code files can also be used from app_version/source\nImproved the way tags are checked and the changes applied to be more consistent throughout the script.\nRemoved any trace of gnu.org for being a really unreliable source location.\noptimised multiarch configurations and multiarch various bug fixes.\nAlpine only - Ninja is now prebuilt instead of locally built.\nAll url data can be viewed using the -sdu switch.\nLots of small tweaks, removing code and simplifying code and rebuilding functions."),(0,o.kt)("h3",{id:"v110---18-03-2023"},"v1.1.0 - 18-03-2023"),(0,o.kt)("p",null,"Breaking changes: -bv 1.81.0 have been replaced with -bt boost-1.81"),(0,o.kt)("p",null,"Reason: This check is now very similar to the -lt and -qt switches to it makes sense to bring it inline with how those are used."),(0,o.kt)("p",null,"Changes:"),(0,o.kt)("p",null,"The script has gone through a general refactoring with many code optimizations, simplifications and improvements starting from v1.0.6."),(0,o.kt)("p",null,"Features:"),(0,o.kt)("p",null,"Caching and cache management via -cd"),(0,o.kt)("p",null,"Tag switches are more versatile in how they select source files based on tag input. Trying to use archives first but automatically falling back to folders when required."),(0,o.kt)("p",null,"More env options introduced to make setting most dynamic features available via env settings."),(0,o.kt)("p",null,"New switch options added."),(0,o.kt)("h3",{id:"v106---07-03-2023"},"v1.0.6 - 07-03-2023"),(0,o.kt)("p",null,"Lot of tweaks and changes."),(0,o.kt)("p",null,"cache files method is now integrated into the script as a result of the URL function changes."),(0,o.kt)("p",null,"Refactored URL function. It now uses associative arrays to hold the data for URLs, tags and versions. This makes the data more structured and easier to use consistently throughout the script."),(0,o.kt)("p",null,"Changed all instances of echo -e to printf %b"),(0,o.kt)("p",null,"Added a method to using an existing local git repo as a cached source. It will clone a folder with the matching app name in the cache path provided and clone, if it exists."),(0,o.kt)("p",null,"It will respect manually specified tags and checkout those from the clone folders."),(0,o.kt)("p",null,"The lowercase naming convention of the applications must be used in the cache_path/folder_name like cache_path/qbittorrent"),(0,o.kt)("p",null,"It must be a git repo"),(0,o.kt)("h3",{id:"v105---06-03-2023"},"v1.0.5 - 06-03-2023"),(0,o.kt)("p",null,"Modified the default behaviour of the Debian installation to not build gawk and bison by default. It will now install them via apt-get."),(0,o.kt)("p",null,"There is a new switch -dma which will trigger the alternate mode and instead build gawk and bison from source."),(0,o.kt)("h3",{id:"v104---19-01-2023"},"v1.0.4 - 19-01-2023"),(0,o.kt)("p",null,"Changed: Dropped build support for older Buster-Bionic since they require a more modern gcc version to successfully build natively. Successful builds on a modern OS can be used there instead."),(0,o.kt)("h3",{id:"v103---15-07-2022"},"v1.0.3 - 15-07-2022"),(0,o.kt)("p",null,"Fixed: build - Libtorrent using b2 had checks against supplied tags to do version specific things that failed to match properly when using a pull request tag or non versioned branch. It now always check the version.hpp to determine the version in these build checks."))}g.isMDXComponent=!0}}]);