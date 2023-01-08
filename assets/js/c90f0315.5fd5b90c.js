"use strict";(self.webpackChunkpixelone=self.webpackChunkpixelone||[]).push([[645],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},v=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(n),v=l,d=u["".concat(s,".").concat(v)]||u[v]||m[v]||o;return n?r.createElement(d,a(a({ref:t},c),{},{components:n})):r.createElement(d,a({ref:t},c))}));function d(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=n.length,a=new Array(o);a[0]=v;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:l,a[1]=i;for(var p=2;p<o;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}v.displayName="MDXCreateElement"},5917:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var r=n(7462),l=(n(7294),n(3905));const o={sidebar_position:2},a=void 0,i={unversionedId:"Classes/Enemy",id:"Classes/Enemy",title:"Enemy",description:"Static",source:"@site/docs-api/Classes/Enemy.md",sourceDirName:"Classes",slug:"/Classes/Enemy",permalink:"/pixelone/docs-api/Classes/Enemy",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Boundary",permalink:"/pixelone/docs-api/Classes/Boundary"},next:{title:"Lever",permalink:"/pixelone/docs-api/Classes/Lever"}},s={},p=[{value:"<code>Static</code>",id:"static",level:2},{value:"moveAll()",id:"moveall",level:3},{value:"removeAll()",id:"removeall",level:3},{value:"<code>Methods</code>",id:"methods",level:2},{value:"moveVertical()",id:"movevertical",level:3},{value:"moveHorizontal()",id:"movehorizontal",level:3},{value:"cleanup()",id:"cleanup",level:3},{value:"move()",id:"move",level:3},{value:"<code>Properties</code>",id:"properties",level:2},{value:"sprite",id:"sprite",level:3},{value:"zone",id:"zone",level:3},{value:"position",id:"position",level:3}],c={toc:p};function u(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"static"},(0,l.kt)("inlineCode",{parentName:"h2"},"Static")),(0,l.kt)("h3",{id:"moveall"},"moveAll()"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"Enemy.moveAll(enemies: array) -> none\n")),(0,l.kt)("p",null,"Move all the enemies if canMove() returns true"),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"removeall"},"removeAll()"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"Enemy.removeAll(enemies: array) -> none\n")),(0,l.kt)("p",null,"Removes all the enemies in the given array"),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"methods"},(0,l.kt)("inlineCode",{parentName:"h2"},"Methods")),(0,l.kt)("h3",{id:"movevertical"},"moveVertical()"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"enemy:moveVertical() -> none\n")),(0,l.kt)("p",null,"Moves the instance vertical"),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"movehorizontal"},"moveHorizontal()"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"enemy.moveHorizontal() -> none\n")),(0,l.kt)("p",null,"Moves the instance horizontally"),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"cleanup"},"cleanup()"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"enemy:cleanup() -> none\n")),(0,l.kt)("p",null,"Removes all references of the instance"),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"move"},"move()"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"enemy:move() -> none\n")),(0,l.kt)("p",null,"Moves the enemy according to movex and movey"),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"properties"},(0,l.kt)("inlineCode",{parentName:"h2"},"Properties")),(0,l.kt)("h3",{id:"sprite"},"sprite"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"Type: sprite instance\nDef:  Sprite to represent the enemy\n")),(0,l.kt)("h3",{id:"zone"},"zone"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"Type: zone\nDef:  A zone instance\n")),(0,l.kt)("h3",{id:"position"},"position"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"Type: table\nDef:  Position of the sprite on the canvas\n")))}u.isMDXComponent=!0}}]);