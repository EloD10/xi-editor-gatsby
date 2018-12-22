(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{155:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return f}),n.d(t,"StaticQueryContext",function(){return p}),n.d(t,"StaticQuery",function(){return d});var a=n(0),r=n.n(a),o=n(4),l=n.n(o),i=n(164),c=n.n(i);n.d(t,"Link",function(){return c.a}),n.d(t,"withPrefix",function(){return i.withPrefix}),n.d(t,"navigate",function(){return i.navigate}),n.d(t,"push",function(){return i.push}),n.d(t,"replace",function(){return i.replace}),n.d(t,"navigateTo",function(){return i.navigateTo});var m=n(170),s=n.n(m);n.d(t,"PageRenderer",function(){return s.a});var u=n(51);n.d(t,"parsePath",function(){return u.a});var p=r.a.createContext({}),d=function(e){return r.a.createElement(p.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function f(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}d.propTypes={data:l.a.object,query:l.a.string.isRequired,render:l.a.func,children:l.a.func}},163:function(e,t,n){"use strict";n(176);var a=n(155),r=n(0),o=n.n(r),l=n(4),i=n.n(l),c=n(161),m=n(168),s=n.n(m),u=n(153),p=n.n(u);function d(){var e=s()(["\r\n      color: #20303A\r\n      margin-top:  1.5rem\r\n      margin-bottom:  0.5rem\r\n    "]);return d=function(){return e},e}function f(){var e=s()(["\r\n        color: #20303A\r\n        margin-top:  1.5rem\r\n        margin-bottom:  0.5rem\r\n    "]);return f=function(){return e},e}function g(){var e=s()(["\r\n        color: #20303A\r\n        margin-top:  1rem\r\n        margin-bottom:  1rem\r\n    "]);return g=function(){return e},e}function h(){var e=s()(["\r\n      color: #24D06B\r\n    "]);return h=function(){return e},e}var E=function(e){return o.a.createElement(y,{className:e.className},e.children)},b=function(e){return o.a.createElement(k,{className:e.className},e.children)},x=function(e){return o.a.createElement(w,{className:e.className},e.children)},v=function(e){return o.a.createElement(N,{className:e.className},e.children)},y=p()("h1")(h()),k=p()("h2")(g()),w=p()("h3")(f()),N=p()("h4")(d());function T(){var e=s()(["\r\n        line-height: 1.7;\r\n        padding-left: 1.2em;\r\n        a {\r\n          color: #20303A;\r\n          text-decoration: none;\r\n        }\r\n        a:hover {\r\n          color: #24D06B;\r\n        }\r\n      "]);return T=function(){return e},e}var D=function(e){return o.a.createElement(C,{className:e.className},e.children)},C=p()("ul")(T());function L(){var e=s()(["\r\n    \r\n  "]);return L=function(){return e},e}var j=function(e){return o.a.createElement(q,{className:e.className},e.children)},q=p()("li")(L());function P(){var e=s()(["\r\n        display: block\r\n        text-align: center;\r\n        padding-top: 1rem;\r\n        padding-bottom: 2rem;\r\n      "]);return P=function(){return e},e}var S=function(e){return o.a.createElement(R,{className:e.className},e.children)},R=p()("em")(P());function A(){var e=s()(["",""]);return A=function(){return e},e}var F=function(e){return o.a.createElement(B,null,e.children)},B=p()("code")(A(),"\ncode,\ncode[class*='language-'],\npre[class*='language-'] {\n  color: #333;\n  text-align: left;\n  white-space: pre;\n  word-spacing: normal;\n  tab-size: 4;\n  hyphens: none;\n  font-family: Consolas, 'Liberation Mono', Menlo, Courier, monospace;\n  line-height: 1.4;\n  direction: ltr;\n  cursor: text;\n}\n\npre[class*='language-'] {\n  overflow: auto;\n  margin: 1em 0;\n  padding: 1.2em;\n  border-radius: 3px;\n  font-size: 85%;\n}\n\np code,\nli code,\ntable code {\n  margin: 0;\n  border-radius: 3px;\n  padding: 0.2em 0;\n  font-size: 85%;\n}\np code:before, p code:after,\nli code:before,\nli code:after,\ntable code:before,\ntable code:after {\n  letter-spacing: -0.2em;\n  content: '\0a0';\n}\n\ncode,\n:not(pre) > code[class*='language-'],\npre[class*='language-'] {\n  background: #f7f7f7;\n}\n\n:not(pre) > code[class*='language-'] {\n  padding: 0.1em;\n  border-radius: 0.3em;\n}\n\n.token.comment, .token.prolog, .token.doctype, .token.cdata {\n  color: #969896;\n}\n.token.punctuation, .token.string, .token.atrule, .token.attr-value {\n  color: #183691;\n}\n.token.property, .token.tag {\n  color: #63a35c;\n}\n.token.boolean, .token.number {\n  color: #0086b3;\n}\n.token.selector, .token.attr-name, .token.attr-value .punctuation:first-child, .token.keyword, .token.regex, .token.important {\n  color: #795da3;\n}\n.token.operator, .token.entity, .token.url, .language-css .token.string {\n  color: #a71d5d;\n}\n.token.entity {\n  cursor: help;\n}\n\n.namespace {\n  opacity: 0.7;\n}\n"),G={h1:function(e){return o.a.createElement(E,e)},h2:function(e){return o.a.createElement(b,e)},h3:function(e){return o.a.createElement(x,e)},h4:function(e){return o.a.createElement(v,e)},code:function(e){return o.a.createElement(F,e)},pre:function(e){return o.a.createElement(F,e)},em:function(e){return o.a.createElement(S,e)},ul:function(e){return o.a.createElement(D,e)},li:function(e){return o.a.createElement(j,e)}},U=n(167),X=n(53),_=(n(77),n(195)),I=n.n(_),z=function(e){var t=e.theme,n=e.toggleTheme;return o.a.createElement(I.a,null,function(e){var a=e.on,r=e.getTogglerProps;return o.a.createElement("div",{className:"flex items-center"},o.a.createElement("span",{className:"relative inline-block w-12 h-4"},o.a.createElement("input",Object.assign({type:"checkbox","aria-label":"toggle theme",name:"theme",className:"w-full h-full"},r(),{onChange:n})),o.a.createElement("span",{className:"absolute pin flex align-center h-full w-full pointer-events-none"},o.a.createElement("span",{className:"flex-1 rounded-lg "+(a?"bg-"+t.primary:"bg-"+t.secondaryDarker)}),o.a.createElement("span",{className:"absolute w-4 h-4 rounded-full bg-white",style:{transition:"transform 0.2s",transform:a?"translateX(2rem)":"translateX(0rem)"}}))),o.a.createElement("label",{htmlFor:"theme",className:"ml-2 font-bold text-"+t.secondaryDarker},a?"Theme Dark":"Theme Light"))})};z.propTypes={theme:i.a.object};var M=z,Q=function(){return o.a.createElement(X.a.Consumer,null,function(e){var t=e.theme,n=e.toggleTheme;return o.a.createElement(M,{theme:t,toggleTheme:n})})},J=function(e){var t=e.theme;return o.a.createElement("footer",{className:"flex-no-shrink h-32 w-full relative pt-16 px-4 bg-"+t.primaryLighter},o.a.createElement("div",{className:"text-xs pin flex justify-between items-center h-full container mx-auto text-"+t.secondaryDarker},o.a.createElement("p",null,"See the"," ",o.a.createElement("a",{href:"https://github.com/xi-editor/xi-editor",className:"font-semibold text-"+t.secondaryDarker+" hover:text-"+t.primary},"GitHub Project")),o.a.createElement("div",null,o.a.createElement(Q,null))))};J.propTypes={theme:i.a.object};var O=J,H=function(){return o.a.createElement(X.a.Consumer,null,function(e){var t=e.theme,n=e.toggleTheme;return o.a.createElement(O,{theme:t,toggleTheme:n})})},W=n(5),K=n.n(W),V=function(e){var t=e.to,n=e.title,r=e.theme;return o.a.createElement(a.Link,{to:t,className:"flex items-center no-underline text-base uppercase text-blue-darker mx-5 font-semibold witespace-no-wrap text-"+r.secondaryDarker,activeClassName:"border-green"},n)};V.propTypes={to:i.a.string,title:i.a.string,theme:i.a.object};var Y=V,Z=function(e){var t=e.to,n=e.title;return o.a.createElement(X.a.Consumer,null,function(e){var a=e.theme;return o.a.createElement(Y,{theme:a,to:t,title:n})})};Z.propTypes={to:i.a.string,title:i.a.string};var $=Z,ee=n(172),te=n.n(ee),ne=function(e){function t(){return e.apply(this,arguments)||this}return K()(t,e),t.prototype.render=function(){var e=this.props.theme;return o.a.createElement("header",{className:"flex flex-col flex-no-shrink border-t-2 border-green h-16 pb-32 bg-"+e.blackOrWhite},o.a.createElement("div",null,o.a.createElement("div",{className:"container mx-auto"},o.a.createElement("div",{className:"flex justify-between items-center py-4"},o.a.createElement("div",{className:"flex items-center"},o.a.createElement(a.Link,{to:"/",className:"text-white no-underline flex items-center ml-2 md:ml-0"},o.a.createElement("p",{className:"font-bold text-4xl text-"+e.secondaryDarker},te.a.siteTitle))),o.a.createElement("div",{className:"flex justify-between overflow-x-auto overflow-y-hidden mx-4 md:mx-0"},o.a.createElement($,{to:"/",title:"home"}),o.a.createElement($,{to:"/documentation/frontend-notes/",title:"docs"}),o.a.createElement($,{to:"/gsoc/gsoc/",title:"gsoc"}),o.a.createElement($,{to:"/contribute/",title:"contribute"}),o.a.createElement($,{to:"/building-docs/",title:"buildind docs"}),o.a.createElement($,{to:"/blog",title:"blog"}))))))},t}(o.a.Component);ne.propTypes={theme:i.a.object};var ae=ne,re=function(){return o.a.createElement(X.a.Consumer,null,function(e){var t=e.theme;return o.a.createElement(ae,{theme:t})})};n.d(t,"a",function(){return le});var oe=function(e){var t=e.children,n=e.theme;return o.a.createElement(c.MDXProvider,{components:G},o.a.createElement("div",{className:"h-full w-full flex flex-col items-stretch font-sans"},o.a.createElement(U.a,null),o.a.createElement(re,null),o.a.createElement("main",{role:"main",className:"flex-1 bg-"+n.primaryLighter},t),o.a.createElement(H,null)))};oe.propTypes={children:i.a.node.isRequired,theme:i.a.object},oe.defaultProps={theme:{primaryLighter:"green-lighter"}};var le=function(e){var t=e.children,n=e.data,r=e.title,l=e.path;return o.a.createElement("div",{className:"h-full w-full flex flex-col items-stretch font-sans"},o.a.createElement(U.a,null),o.a.createElement(re,null),o.a.createElement("main",{role:"main",className:"flex-1 -mt-32"},o.a.createElement("div",{className:"flex"},o.a.createElement("div",{className:"w-64"},o.a.createElement("nav",{className:"pt-6 max-w-xs w-auto pb-32"},void 0===!r&&o.a.createElement("p",{className:"mb-3 uppercase tracking-wide font-bold leading-tight px-6 text-blue-darker"},r),o.a.createElement("ul",{className:"list-reset flex flex-col flex-1"},n.map(function(e){var t=e.node;return o.a.createElement("li",{className:"leading-tight max-x-xs",key:t.id},o.a.createElement(a.Link,{to:"/"+l+t.fields.slug,className:"block text-md px-6 py-2 text-blue-darker no-underline hover:text-green rounded-md",activeClassName:"font-semibold border-l-8 border-green-lightest"},t.frontmatter.title))})))),o.a.createElement("div",{className:"max-w-lg px-2 md:px-10 py-8 mb-24 content mx-auto lg:ml-8 overflow-hidden"},t))))};le.propTypes={children:i.a.object.isRequired,title:i.a.string,data:i.a.array,path:i.a.string};t.b=oe},167:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(187),l=n.n(o),i=n(4),c=n.n(i),m=n(172),s=n.n(m),u=function(e){var t=e.categorieTitle,n=e.description,a="/"===s.a.pathPrefix?"":s.a.pathPrefix,o=s.a.siteUrl+a+s.a.siteLogo,i=void 0===t?s.a.siteTitle:t+" "+s.a.sitetitleSeparator+" "+s.a.siteTitle,c=void 0===n?s.a.siteDescription:""+n;return r.a.createElement(l.a,null,r.a.createElement("html",{lang:s.a.siteLanguage}),r.a.createElement("title",null,i),r.a.createElement("meta",{name:"msapplication-TileColor",content:s.a.backgroundColor}),r.a.createElement("meta",{name:"msapplication-config",content:"browserconfig.xml"}),r.a.createElement("meta",{name:"description",content:c}),r.a.createElement("meta",{name:"image",content:o}),r.a.createElement("meta",{property:"al:ios:url",content:"nflx://www.netflix.com/?locale=fr-FR"}),r.a.createElement("meta",{property:"al:android:app_name",content:s.a.siteTitle}),r.a.createElement("meta",{property:"al:android:url",content:s.a.siteUrl}),r.a.createElement("meta",{name:"apple-mobile-web-app-capable",content:"yes"}),""===!s.a.ogLanguage&&r.a.createElement("meta",{property:"og:locale",content:s.a.ogLanguage}),""===!s.a.ogSiteName&&r.a.createElement("meta",{property:"og:site_name",content:s.a.ogSiteName}),""===!s.a.siteFBAppID&&r.a.createElement("meta",{property:"fb:app_id",content:s.a.siteFBAppID}),""===!s.a.userTwitter&&r.a.createElement("meta",{name:"twitter:creator",content:s.a.userTwitter}),r.a.createElement("meta",{property:"og:title",content:s.a.siteTitle}),r.a.createElement("meta",{property:"og:description",content:s.a.siteDescription}),r.a.createElement("meta",{property:"og:image",content:o}),r.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),r.a.createElement("meta",{name:"twitter:title",content:s.a.siteTitle}),r.a.createElement("meta",{name:"twitter:description",content:s.a.siteDescription}),r.a.createElement("meta",{name:"twitter:image",content:o}))};u.propTypes={categorieTitle:c.a.string,description:c.a.string},t.a=u},170:function(e,t,n){var a;e.exports=(a=n(175))&&a.default||a},172:function(e,t){e.exports={pathPrefix:"/xi-editor-gatsby",siteTitle:"Xi",sitetitleSeparator:"|",themeColor:"#fff",backgroundColor:"#D9F1E3",siteUrl:"https://elod10.github.io",siteLanguage:"en",siteLogo:"/logos/logo.png",siteDescription:"Xi-Editor website",userTwitter:"",siteFBAppID:"",ogSiteName:"",ogLanguage:""}},175:function(e,t,n){"use strict";n.r(t);var a=n(13),r=n.n(a),o=n(0),l=n.n(o),i=n(4),c=n.n(i),m=n(70),s=n(2),u=function(e){var t=e.location,n=s.default.getResourcesForPathnameSync(t.pathname);return l.a.createElement(m.a,r()({location:t,pageResources:n},n.json))};u.propTypes={location:c.a.shape({pathname:c.a.string.isRequired}).isRequired},t.default=u},176:function(e,t,n){}}]);
//# sourceMappingURL=1-961e7e4a3351b39e5574.js.map