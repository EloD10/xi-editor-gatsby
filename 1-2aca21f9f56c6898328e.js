(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{162:function(e,t,a){"use strict";a(174);var n=a(163),r=a(0),i=a.n(r),l=a(4),o=a.n(l),c=a(7),s=a.n(c),m=a(57),u=a.n(m),d=function(e){function t(){return e.apply(this,arguments)||this}return s()(t,e),t.prototype.render=function(){return i.a.createElement("form",{className:"flex",action:"https://www.google.com/search"},i.a.createElement("input",{id:"search",autoComplete:"off",className:"w-full py-2 text-grey-darkest pl-4 pr-10 rounded focus:border-grey-light",placeholder:"Search...",type:"text",name:"q"}),i.a.createElement("input",{type:"hidden",name:"sitesearch",value:"https://elod10.github.io/xi-editor-gatsby/"}),i.a.createElement("div",{className:"flex items-center"},i.a.createElement("svg",{className:"fill-current text-grey-dark inline-block h-4 w-4 -ml-8",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"},i.a.createElement("path",{d:"M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"}))))},t}(i.a.Component),p=function(e){return i.a.createElement(n.Link,{to:e.to,className:"inline-block no-underline text-base uppercase text-white font-semibold py-4 px-6 border-b-4 border-transparent hover:border-green",activeClassName:"border-green"},e.title)},f=a(169),g=a.n(f),x=function(e){function t(){var t;return(t=e.call(this)||this).state={navActivated:!1},t.toggleNav=t.toggleNav.bind(u()(u()(t))),t}s()(t,e);var a=t.prototype;return a.toggleNav=function(){this.setState(function(e){return{navActivated:!e.navActivated}})},a.render=function(){return i.a.createElement("header",{className:"flex flex-col flex-no-shrink"},i.a.createElement("div",{className:"bg-xi-blue-dark"},i.a.createElement("div",{className:"container mx-auto"},i.a.createElement("div",{className:"flex justify-between items-center py-4"},i.a.createElement("div",{className:"flex items-center"},i.a.createElement(n.Link,{to:"/",className:"text-white no-underline flex items-center"},i.a.createElement("img",{src:Object(n.withPrefix)("/img/logo.png"),alt:"logo",className:"w-8"}),i.a.createElement("p",{className:"ml-4 font-thin text-xl text-white"},g.a.siteTitle))),i.a.createElement("div",null,i.a.createElement("div",{className:"flex absolute pin-t pin-r mt-4 mr-4 md:mt-0 md:relative"},i.a.createElement(d,null)))))),i.a.createElement("div",{className:"bg-xi-blue"},i.a.createElement("div",{className:"container mx-auto"},i.a.createElement("div",{className:"flex justify-between items-center"},i.a.createElement("nav",{className:"-ml-2 pt-2"},i.a.createElement(p,{to:"/",title:"home"}),i.a.createElement(p,{to:"/documentation/frontend-notes/",title:"docs"}),i.a.createElement(p,{to:"/gsoc/gsoc/",title:"gsoc"}),i.a.createElement(p,{to:"/contribute/",title:"contribute"}),i.a.createElement(p,{to:"/building-docs/",title:"buildind docs"}),i.a.createElement(p,{to:"/blog",title:"blog"}))))))},t}(i.a.Component),h=function(){return i.a.createElement("footer",{className:"flex-no-shrink border-t pt-4 pb-10 w-full pt-8 px-8"},i.a.createElement("p",{className:"text-xs text-xi-blue-dark"},"See the"," ",i.a.createElement("a",{href:"https://github.com/xi-editor/xi-editor",className:"text-xi-blue-dark hover:text-xi-blue font-semibold"},"GitHub Project")))},E=a(165);a.d(t,"a",function(){return v});var b=function(e){var t=e.children;return i.a.createElement("div",{className:"h-full w-full flex flex-col items-stretch font-sans"},i.a.createElement(E.a,null),i.a.createElement(x,null),i.a.createElement("main",{role:"main",className:"flex-1 container mx-auto px-8 md:px-0"},t),i.a.createElement(h,null))};b.propTypes={children:o.a.node.isRequired};var v=function(e){var t=e.children,a=e.data,r=e.title,l=e.path;return i.a.createElement("div",{className:"h-full w-full flex flex-col items-stretch font-sans"},i.a.createElement(E.a,null),i.a.createElement(x,null),i.a.createElement("main",{role:"main",className:"flex-1"},i.a.createElement("div",{className:"flex"},i.a.createElement("nav",{className:"pt-6 border-r-2 border-blue-lightest max-w-sm w-64"},void 0===!r&&i.a.createElement("p",{className:"mb-3 uppercase tracking-wide font-bold leading-tight px-6 text-blue"},r),i.a.createElement("ul",{className:"list-reset flex flex-col flex-1"},a.map(function(e){var t=e.node;return i.a.createElement("li",{className:"leading-tight max-x-xs",key:t.id},i.a.createElement(n.Link,{to:"/"+l+t.fields.slug,className:"break-words block no-underline hover:underline text-xi-blue-dark px-2 px-6 py-4 hover:bg-blue-lightest text-sm",activeClassName:"bg-blue-lightest font-bold underline"},t.frontmatter.title))}))),i.a.createElement("div",{className:"max-w-lg px-2 md:px-10 py-8 mb-24 content mx-auto lg:ml-8 overflow-hidden"},t))),i.a.createElement(h,null))};v.propTypes={children:o.a.node.isRequired,title:o.a.string,data:o.a.array,path:o.a.string,documentationMode:o.a.bool};t.b=b},163:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return f}),a.d(t,"StaticQueryContext",function(){return d}),a.d(t,"StaticQuery",function(){return p});var n=a(0),r=a.n(n),i=a(4),l=a.n(i),o=a(164),c=a.n(o);a.d(t,"Link",function(){return c.a}),a.d(t,"withPrefix",function(){return o.withPrefix}),a.d(t,"navigate",function(){return o.navigate}),a.d(t,"push",function(){return o.push}),a.d(t,"replace",function(){return o.replace}),a.d(t,"navigateTo",function(){return o.navigateTo});var s=a(168),m=a.n(s);a.d(t,"PageRenderer",function(){return m.a});var u=a(50);a.d(t,"parsePath",function(){return u.a});var d=r.a.createContext({}),p=function(e){return r.a.createElement(d.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function f(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:l.a.object,query:l.a.string.isRequired,render:l.a.func,children:l.a.func}},165:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(175),l=a.n(i),o=a(169),c=a.n(o);t.a=function(e){var t=e.categorieTitle,a=e.description,n="/"===c.a.pathPrefix?"":c.a.pathPrefix,i=c.a.siteUrl+n+c.a.siteLogo,o=void 0===t?c.a.siteTitle:t+" "+c.a.sitetitleSeparator+" "+c.a.siteTitle,s=void 0===a?c.a.siteDescription:""+a;return r.a.createElement(l.a,null,r.a.createElement("html",{lang:c.a.siteLanguage}),r.a.createElement("title",null,o),r.a.createElement("link",{rel:"apple-touch-icon",href:"/favicons/apple-touch-icon.png"}),r.a.createElement("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"/favicons/favicon-32x32.png"}),r.a.createElement("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"/favicons/favicon-16x16.png"}),r.a.createElement("link",{rel:"shortcut icon",href:"favicon.ico"}),r.a.createElement("meta",{name:"msapplication-TileColor",content:c.a.backgroundColor}),r.a.createElement("meta",{name:"msapplication-config",content:"browserconfig.xml"}),r.a.createElement("meta",{name:"description",content:s}),r.a.createElement("meta",{name:"image",content:i}),""===!c.a.ogLanguage&&r.a.createElement("meta",{property:"og:locale",content:c.a.ogLanguage}),""===!c.a.ogSiteName&&r.a.createElement("meta",{property:"og:site_name",content:c.a.ogSiteName}),""===!c.a.siteFBAppID&&r.a.createElement("meta",{property:"fb:app_id",content:c.a.siteFBAppID}),""===!c.a.userTwitter&&r.a.createElement("meta",{name:"twitter:creator",content:c.a.userTwitter}),r.a.createElement("meta",{property:"og:title",content:c.a.siteTitle}),r.a.createElement("meta",{property:"og:description",content:c.a.siteDescription}),r.a.createElement("meta",{property:"og:image",content:i}),r.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),r.a.createElement("meta",{name:"twitter:title",content:c.a.siteTitle}),r.a.createElement("meta",{name:"twitter:description",content:c.a.siteDescription}),r.a.createElement("meta",{name:"twitter:image",content:i}))}},168:function(e,t,a){var n;e.exports=(n=a(173))&&n.default||n},169:function(e,t){e.exports={pathPrefix:"/xi-editor-gatsby",siteTitle:"Xi-Editor",sitetitleSeparator:"|",siteUrl:"",siteLanguage:"en",siteLogo:"/logos/logo.png",siteDescription:"Xi-Editor website",userTwitter:"",siteFBAppID:"",ogSiteName:"",ogLanguage:""}},173:function(e,t,a){"use strict";a.r(t);a(34);var n=a(0),r=a.n(n),i=a(4),l=a.n(i),o=a(73),c=a(2),s=function(e){var t=e.location,a=c.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(o.a,Object.assign({location:t,pageResources:a},a.json))};s.propTypes={location:l.a.shape({pathname:l.a.string.isRequired}).isRequired},t.default=s},174:function(e,t,a){}}]);
//# sourceMappingURL=1-2aca21f9f56c6898328e.js.map