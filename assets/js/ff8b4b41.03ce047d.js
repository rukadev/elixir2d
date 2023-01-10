"use strict";(self.webpackChunkpixelone=self.webpackChunkpixelone||[]).push([[997],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>k});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var c=n.createContext({}),s=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},d=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},v=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,c=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),p=s(a),v=i,k=p["".concat(c,".").concat(v)]||p[v]||u[v]||r;return a?n.createElement(k,l(l({ref:t},d),{},{components:a})):n.createElement(k,l({ref:t},d))}));function k(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,l=new Array(r);l[0]=v;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[p]="string"==typeof e?e:i,l[1]=o;for(var s=2;s<r;s++)l[s]=a[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}v.displayName="MDXCreateElement"},9361:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>p,frontMatter:()=>r,metadata:()=>o,toc:()=>s});var n=a(7462),i=(a(7294),a(3905));const r={sidebar_position:3},l="Bridge",o={unversionedId:"Classes/bridge",id:"Classes/bridge",title:"Bridge",description:"Static",source:"@site/docs-api/Classes/bridge.md",sourceDirName:"Classes",slug:"/Classes/bridge",permalink:"/elixir2d/docs-api/Classes/bridge",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Zone",permalink:"/elixir2d/docs-api/Classes/zone"},next:{title:"Canvas",permalink:"/elixir2d/docs-api/Modules/canvas"}},c={},s=[{value:"Static",id:"static",level:2},{value:"<code>activateAll</code>",id:"activateall",level:3},{value:"<code>deactivateAll</code>",id:"deactivateall",level:3},{value:"Methods",id:"methods",level:2},{value:"<code>isActive</code>",id:"isactive",level:3},{value:"<code>activate</code>",id:"activate",level:3},{value:"<code>deactivate</code>",id:"deactivate",level:3},{value:"Properties",id:"properties",level:2},{value:"<code>sprite</code>",id:"sprite",level:3},{value:"<code>callback</code>",id:"callback",level:3},{value:"<code>position</code>",id:"position",level:3}],d={toc:s};function p(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"bridge"},"Bridge"),(0,i.kt)("h2",{id:"static"},"Static"),(0,i.kt)("h3",{id:"activateall"},(0,i.kt)("inlineCode",{parentName:"h3"},"activateAll")),(0,i.kt)("p",null,"Activates all bridges passed."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"Bridge.activateAll(bridges: array) -> none\n")),(0,i.kt)("h3",{id:"deactivateall"},(0,i.kt)("inlineCode",{parentName:"h3"},"deactivateAll")),(0,i.kt)("p",null,"Deactivates all bridges passed."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"Bridge.deactivateAll(bridges: array) -> none\n")),(0,i.kt)("h2",{id:"methods"},"Methods"),(0,i.kt)("h3",{id:"isactive"},(0,i.kt)("inlineCode",{parentName:"h3"},"isActive")),(0,i.kt)("p",null,"Returns true if the instance has been activated."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"bridge:isActive() -> boolean\n")),(0,i.kt)("h3",{id:"activate"},(0,i.kt)("inlineCode",{parentName:"h3"},"activate")),(0,i.kt)("p",null,"Activates the bridge instance."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"bridge:activate() -> none\n")),(0,i.kt)("h3",{id:"deactivate"},(0,i.kt)("inlineCode",{parentName:"h3"},"deactivate")),(0,i.kt)("p",null,"Deactivates the bridge instance."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"bridge:deactivate() -> none\n")),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("h3",{id:"sprite"},(0,i.kt)("inlineCode",{parentName:"h3"},"sprite")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Type: ",(0,i.kt)("inlineCode",{parentName:"li"},"sprite instance"))),(0,i.kt)("p",null,"Sprite to represent the bridge."),(0,i.kt)("h3",{id:"callback"},(0,i.kt)("inlineCode",{parentName:"h3"},"callback")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Type: ",(0,i.kt)("inlineCode",{parentName:"li"},"function"))),(0,i.kt)("p",null,"Function called on activation."),(0,i.kt)("h3",{id:"position"},(0,i.kt)("inlineCode",{parentName:"h3"},"position")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Type: ",(0,i.kt)("inlineCode",{parentName:"li"},"object"))),(0,i.kt)("p",null,"Position of the sprite on the canvas."))}p.isMDXComponent=!0}}]);