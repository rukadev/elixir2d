"use strict";(self.webpackChunkpixelone=self.webpackChunkpixelone||[]).push([[485],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,f=d["".concat(c,".").concat(m)]||d[m]||u[m]||i;return n?r.createElement(f,l(l({ref:t},s),{},{components:n})):r.createElement(f,l({ref:t},s))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[d]="string"==typeof e?e:a,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},420:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const i={sidebar_position:2},l=void 0,o={unversionedId:"Utility/math",id:"Utility/math",title:"math",description:"Methods",source:"@site/docs-api/Utility/math.md",sourceDirName:"Utility",slug:"/Utility/math",permalink:"/Pixel-game-maker/docs-api/Utility/math",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"image",permalink:"/Pixel-game-maker/docs-api/Modules/image"},next:{title:"table",permalink:"/Pixel-game-maker/docs-api/Utility/table"}},c={},p=[{value:"<code>Methods</code>",id:"methods",level:2},{value:"distance()",id:"distance",level:3},{value:"bounded()",id:"bounded",level:3},{value:"collision()",id:"collision",level:3},{value:"inside()",id:"inside",level:3},{value:"<code>Properties</code>",id:"properties",level:2},{value:"callback",id:"callback",level:3},{value:"image",id:"image",level:3},{value:"position",id:"position",level:3}],s={toc:p};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"methods"},(0,a.kt)("inlineCode",{parentName:"h2"},"Methods")),(0,a.kt)("h3",{id:"distance"},"distance()"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"Math:distance(p1: table, p2: table) -> int\n")),(0,a.kt)("p",null,"Returns the distance between two positions."),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"bounded"},"bounded()"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"Math.bounded(position: table) -> boolean\n")),(0,a.kt)("p",null,"Returns true if the instance can be activated."),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"collision"},"collision()"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"Math.collision() -> null\n")),(0,a.kt)("p",null,"Plays an animation and calls the callback property if given."),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"inside"},"inside()"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"Math.inside()\n")),(0,a.kt)("h2",{id:"properties"},(0,a.kt)("inlineCode",{parentName:"h2"},"Properties")),(0,a.kt)("h3",{id:"callback"},"callback"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Type: Function\nDef:  Callback called on activation\n")),(0,a.kt)("h3",{id:"image"},"image"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Type: Image()\nDef:  Sprite to represent the lever\n")),(0,a.kt)("h3",{id:"position"},"position"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Type: table\nDef:  Position of the sprite on the canvas\n")))}d.isMDXComponent=!0}}]);