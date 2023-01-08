"use strict";(self.webpackChunkpixelone=self.webpackChunkpixelone||[]).push([[11],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),p=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return a.createElement(c.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},v=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),s=p(r),v=n,m=s["".concat(c,".").concat(v)]||s[v]||d[v]||l;return r?a.createElement(m,i(i({ref:t},u),{},{components:r})):a.createElement(m,i({ref:t},u))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,i=new Array(l);i[0]=v;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[s]="string"==typeof e?e:n,i[1]=o;for(var p=2;p<l;p++)i[p]=r[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}v.displayName="MDXCreateElement"},3135:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>s,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var a=r(7462),n=(r(7294),r(3905));const l={sidebar_position:2},i=void 0,o={unversionedId:"Utility/table",id:"Utility/table",title:"table",description:"Methods",source:"@site/docs-api/Utility/table.md",sourceDirName:"Utility",slug:"/Utility/table",permalink:"/Pixel-game-maker/docs-api/Utility/table",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"math",permalink:"/Pixel-game-maker/docs-api/Utility/math"}},c={},p=[{value:"<code>Methods</code>",id:"methods",level:2},{value:"removeValue()",id:"removevalue",level:3},{value:"canActivate()",id:"canactivate",level:3},{value:"activate()",id:"activate",level:3},{value:"<code>Properties</code>",id:"properties",level:2},{value:"callback",id:"callback",level:3},{value:"image",id:"image",level:3},{value:"position",id:"position",level:3}],u={toc:p};function s(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"methods"},(0,n.kt)("inlineCode",{parentName:"h2"},"Methods")),(0,n.kt)("h3",{id:"removevalue"},"removeValue()"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"Table.removeValue(source: array, value: value) -> none\n")),(0,n.kt)("p",null,"Removes the value from the given array"),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"canactivate"},"canActivate()"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"lever:canActivate(position: table) -> boolean\n")),(0,n.kt)("p",null,"Returns true if the instance can be activated."),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"activate"},"activate()"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"lever:activate() -> null\n")),(0,n.kt)("p",null,"Plays an animation and calls the callback property if given."),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"properties"},(0,n.kt)("inlineCode",{parentName:"h2"},"Properties")),(0,n.kt)("h3",{id:"callback"},"callback"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"Type: Function\nDef:  Callback called on activation\n")),(0,n.kt)("h3",{id:"image"},"image"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"Type: Image()\nDef:  Sprite to represent the lever\n")),(0,n.kt)("h3",{id:"position"},"position"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"Type: table\nDef:  Position of the sprite on the canvas\n")))}s.isMDXComponent=!0}}]);