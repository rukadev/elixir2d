"use strict";(self.webpackChunkpixelone=self.webpackChunkpixelone||[]).push([[4],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),c=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(o.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,o=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(n),m=a,f=p["".concat(o,".").concat(m)]||p[m]||d[m]||s;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,i=new Array(s);i[0]=m;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l[p]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<s;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9733:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>p,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const s={sidebar_position:3},i="Configuration",l={unversionedId:"configuration",id:"configuration",title:"Configuration",description:"All games made run within a single html file that contains configuration for each game, as well as the backbone files that run behind the scenes.",source:"@site/docs/configuration.md",sourceDirName:".",slug:"/configuration",permalink:"/Pixel-game-maker/docs/configuration",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/configuration.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Installation",permalink:"/Pixel-game-maker/docs/getting-started"},next:{title:"Game",permalink:"/Pixel-game-maker/docs/Overview"}},o={},c=[{value:"Global",id:"global",level:2},{value:"Classes",id:"classes",level:3},{value:"Utility",id:"utility",level:3},{value:"Modules",id:"modules",level:3},{value:"Game",id:"game",level:2},{value:"Title",id:"title",level:3},{value:"Description",id:"description",level:3},{value:"JS",id:"js",level:3},{value:"Keys",id:"keys",level:3},{value:"Images",id:"images",level:3}],u={toc:c};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"configuration"},"Configuration"),(0,a.kt)("p",null,"All games made run within a single html file that contains configuration for each game, as well as the backbone files that run behind the scenes."),(0,a.kt)("h2",{id:"global"},"Global"),(0,a.kt)("p",null,"The global section includes all classes, utils, and modules that are used within every game. They make up the core components of each game. "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"\x3c!-- Classes --\x3e\n<script src = '/js/modules/image.js'><\/script>\n<script src = '/js/classes/input.js'><\/script>\n<script src = '/js/classes/sprite.js'><\/script>\n\n\x3c!-- Utils --\x3e\n<script src = '/js/util/math.js'><\/script>\n<script src = '/js/util/table.js'><\/script>\n<script src = '/js/util/storage.js'><\/script>\n\n\x3c!-- Modules --\x3e\n<script src = '/js/modules/fade.js'><\/script>\n<script src = '/js/modules/image.js'><\/script>\n<script src = '/js/modules/canvas.js'><\/script>\n")),(0,a.kt)("h3",{id:"classes"},"Classes"),(0,a.kt)("p",null,"Classes are referenced by 'js/classes/', and comprise of gameplay-specific methods."),(0,a.kt)("h3",{id:"utility"},"Utility"),(0,a.kt)("p",null,"Utility files are referenced by 'js/utility/', and compose of independent, commonly used methods."),(0,a.kt)("h3",{id:"modules"},"Modules"),(0,a.kt)("p",null,"Module files are referenced by 'js/modules/', and consist of frequently used game-specific methods."),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"game"},"Game"),(0,a.kt)("p",null,"The game config contains different configuration types for each level. Below lists the different configuration categories and how they are created."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"home: {\n    js: [\n        '/js/data/zones/home/boundary.js',\n    ],\n\n    keys: {\n        w: 'up',\n        a: 'left',\n        s: 'down',\n        d: 'right'\n    }\n\n    images: {\n        background: '/media/images/maps/home/map.png',\n        player: '/media/images/sprites/characters/chara/png'\n    }\n\n    title: 'Green Village',\n    description: \"Use 'WASD' to traverse the map and collect crystals.\"\n}\n")),(0,a.kt)("h3",{id:"title"},"Title"),(0,a.kt)("p",null,"The title of the game that will be featured at the top of the level."),(0,a.kt)("h3",{id:"description"},"Description"),(0,a.kt)("p",null,"The description of the game that will be featured under the title header."),(0,a.kt)("h3",{id:"js"},"JS"),(0,a.kt)("p",null,"These are the javascript files specific to this game. They may be shared between other games, but aren't common enough to be global."),(0,a.kt)("h3",{id:"keys"},"Keys"),(0,a.kt)("p",null,"Key bindings used for this level as well as a description of what that key does. When compiled this will be featured on the screen."),(0,a.kt)("h3",{id:"images"},"Images"),(0,a.kt)("p",null,"Images are pre-loaded before a game starts running to ensure no errors may occur."))}p.isMDXComponent=!0}}]);