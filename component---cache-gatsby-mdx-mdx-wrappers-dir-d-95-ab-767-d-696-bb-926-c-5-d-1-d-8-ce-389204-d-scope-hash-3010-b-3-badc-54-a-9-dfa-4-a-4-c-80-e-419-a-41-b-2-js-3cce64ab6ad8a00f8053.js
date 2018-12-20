(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{149:function(e,t,a){"use strict";a.r(t);var r=a(14),i=a.n(r),n=a(156),s=a.n(n),o=a(0),l=a.n(o),d=a(151),c=a(166),u=a(7),f=a.n(u),p=a(152),m=a(4),h=a.n(m),g=a(159),b=a(160),y=a(164),v=function(e){var t=e.content,a=e.description,r=e.title,i=e.helmet,n=e.previous,s=e.next;return l.a.createElement("div",{className:"bg-white h-full"},l.a.createElement("div",{className:"flex justify-center container mx-auto"},l.a.createElement("div",{className:"flex flex-col"},l.a.createElement("section",null,i||"",l.a.createElement("div",{className:"md:-ml-16 lg:-ml-32 px-4 md:px-0"},l.a.createElement("h1",{className:"text-blue-darker text-3xl md:text-5xl"},r),l.a.createElement("p",{className:"mt-4 text-blue-darker font-bold"},a),l.a.createElement("div",{className:"border-t-4 border-green-lighter w-24 mt-4 mb-8"})),l.a.createElement(g.a,{content:t,className:"max-w-md mt-4 md:mt-16 px-4 md:px-0"})),l.a.createElement("div",{className:"flex "+(null===n?"justify-end":"justify-between")},n&&l.a.createElement(p.Link,{to:"/blog/post"+n.fields.slug,rel:"prev",className:"no-underline text-sm text-blue-darker active:text-indigo-dark my-8 ml-4 ml-0"},"← ",n.frontmatter.title),s&&l.a.createElement(p.Link,{to:"/blog/post"+s.fields.slug,rel:"next",className:"no-underline text-sm text-blue-darker active:text-indigo-dark my-8 mr-4 md:mr-0"},s.frontmatter.title," →")))))};v.propTypes={content:h.a.node.isRequired,description:h.a.string,title:h.a.string,helmet:h.a.object,previous:h.a.object,next:h.a.object};var E=function(e){function t(){return e.apply(this,arguments)||this}return f()(t,e),t.prototype.render=function(){var e=this.props.data.mdx,t=this.props.pageContext.previous,a=this.props.pageContext.next;return l.a.createElement(b.b,null,l.a.createElement(v,{content:e.code.body,description:e.frontmatter.description,title:e.frontmatter.title,previous:t,next:a,helmet:l.a.createElement(y.a,{categorieTitle:e.frontmatter.title,description:""+e.excerpt})}))},t}(l.a.Component);E.propTypes={data:h.a.shape({mdx:h.a.object})};var S=E;a.d(t,"pageQuery",function(){return w});var w="1060559071";t.default=function(e){var t=e.children,a=s()(e,["children"]);return l.a.createElement(d.MDXScopeProvider,{__mdxScope:i()({},c.a)},l.a.createElement(S,a,t))}},151:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.MDXScopeProvider=t.withMDXScope=void 0;var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},i=n(a(0));function n(e){return e&&e.__esModule?e:{default:e}}var s=(0,n(a(53)).default)({}),o=s.Provider,l=s.Consumer;t.withMDXScope=function(e){return function(t){var a=t.scope,n=function(e,t){var a={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(a[r]=e[r]);return a}(t,["scope"]);return i.default.createElement(l,null,function(t){return i.default.createElement(e,r({scope:a||t},n))})}};t.MDXScopeProvider=function(e){var t=e.__mdxScope,a=e.children;return i.default.createElement(o,{value:t},a)}},153:function(e,t,a){"use strict";var r=a(154),i=a(0),n=a.n(i),s=a(152),o=a(155),l=a.n(o);t.a=function(e){var t=e.classNameImg,a=e.alt;return n.a.createElement(s.StaticQuery,{query:"3001254952",render:function(e){return n.a.createElement(l.a,{fluid:e.placeholderImage.childImageSharp.fluid,className:t,alt:a})},data:r})}},154:function(e){e.exports={data:{placeholderImage:{childImageSharp:{fluid:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAMCAYAAABiDJ37AAAACXBIWXMAAAsSAAALEgHS3X78AAABmElEQVQoz6VT207CQBBF0UR9Rj9Af9c345PfYnhAEEwUEIykF3qh3XItBVrawJRxZkFIJDEhTHIy29mds2dmtpkMmV2r3Cvae1U3zUJb14uu6xa73e4WlmUXNU0rOq4j9/6gIIT4MAzjkahOmO+sJ7wXXKRodzpotA2M4xhXqxUmSYLL5VL6+XyO/9l4PK4S1yUTntMNzxwMgmARRRFMp1OYBAH4vi/XYRjCZDKBKIyAiGE2mwGf4zX5BedSJa/EdSUJSXY+iRM0VR1sw0Jf9NEh3/xqojBtHI98pCqwrWioqCpqLQUHXg+F56Ft25CmKZKoypaw43Tyo9EIVUUBOoCmYSD1EnWCcF30hEDLtGTccRxsfbeYiFUhV8Dt8TxvRzgYDPIsG9Ym+wYpyD6ylzFYfzNYEcfYc9qmhzvC4XCY3/QW8ECjC2QO9XtfIW/+qjgA+4T9fl9OmUpYEOBAyCnTDHZTpudSwiONnlJ9S1gqlR4ajcZnrVYrE94ORIVy6+Vy+Ym4LjK5XI5/l2vC7RG4I9xks9nTHwBz6LmSUC+9AAAAAElFTkSuQmCC",aspectRatio:1.6706349206349207,src:"/xi-editor-gatsby/static/4015458216b1a95685e507661e5892b7/1e875/xi-mac.png",srcSet:"/xi-editor-gatsby/static/4015458216b1a95685e507661e5892b7/5f5eb/xi-mac.png 150w,\n/xi-editor-gatsby/static/4015458216b1a95685e507661e5892b7/07cb7/xi-mac.png 300w,\n/xi-editor-gatsby/static/4015458216b1a95685e507661e5892b7/1e875/xi-mac.png 600w,\n/xi-editor-gatsby/static/4015458216b1a95685e507661e5892b7/a4b24/xi-mac.png 842w",sizes:"(max-width: 600px) 100vw, 600px"}}}}}},155:function(e,t,a){"use strict";var r=a(8);t.__esModule=!0,t.default=void 0;var i,n=r(a(7)),s=r(a(52)),o=r(a(156)),l=r(a(162)),d=r(a(0)),c=r(a(4)),u=function(e){var t=(0,l.default)({},e);return t.resolutions&&(t.fixed=t.resolutions,delete t.resolutions),t.sizes&&(t.fluid=t.sizes,delete t.sizes),t},f={},p=function(e){var t=u(e),a=t.fluid?t.fluid.src:t.fixed.src;return f[a]||!1},m=[];var h=function(e,t){(void 0===i&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=new window.IntersectionObserver(function(e){e.forEach(function(e){m.forEach(function(t){t[0]===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(i.unobserve(t[0]),t[1]())})})},{rootMargin:"200px"})),i).observe(e),m.push([e,t])},g=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSetWebp?"<source type='image/webp' srcSet=\""+e.srcSetWebp+'" '+a+"/>":"",i=e.srcSet?'<source srcSet="'+e.srcSet+'" '+a+"/>":"",n=e.title?'title="'+e.title+'" ':"",s=e.alt?'alt="'+e.alt+'" ':'alt="" ',o=e.width?'width="'+e.width+'" ':"",l=e.height?'height="'+e.height+'" ':"",d=e.opacity?e.opacity:"1";return"<picture>"+r+i+"<img "+o+l+t+s+n+'style="position:absolute;top:0;left:0;transition:opacity 0.5s;transition-delay:'+(e.transitionDelay?e.transitionDelay:"0.5s")+";opacity:"+d+';width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},b=d.default.forwardRef(function(e,t){var a=e.style,r=e.onLoad,i=e.onError,n=(0,o.default)(e,["style","onLoad","onError"]);return d.default.createElement("img",(0,l.default)({},n,{onLoad:r,onError:i,ref:t,style:(0,l.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},a)}))});b.propTypes={style:c.default.object,onError:c.default.func,onLoad:c.default.func};var y=function(e){function t(t){var a;a=e.call(this,t)||this;var r=!0,i=!1,n=t.fadeIn,o=p(t);!o&&"undefined"!=typeof window&&window.IntersectionObserver&&(r=!1,i=!0),"undefined"==typeof window&&(r=!1),t.critical&&(r=!0,i=!1);var l=!(a.props.critical&&!a.props.fadeIn);return a.state={isVisible:r,imgLoaded:!1,IOSupported:i,fadeIn:n,hasNoScript:l,seenBefore:o},a.imageRef=d.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,s.default)((0,s.default)(a))),a.handleRef=a.handleRef.bind((0,s.default)((0,s.default)(a))),a}(0,n.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:p(this.props)}),this.props.critical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.handleRef=function(e){var t=this;this.state.IOSupported&&e&&h(e,function(){t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:p(t.props)}),t.setState({isVisible:!0,imgLoaded:!1})})},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),a=t.fluid?t.fluid.src:t.fixed.src,f[a]=!0,this.setState({imgLoaded:!0}),this.state.seenBefore&&this.setState({fadeIn:!1}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,r=e.className,i=e.style,n=void 0===i?{}:i,s=e.imgStyle,o=void 0===s?{}:s,c=e.placeholderStyle,f=void 0===c?{}:c,p=e.placeholderClassName,m=e.fluid,h=e.fixed,y=e.backgroundColor,v=e.Tag,E="boolean"==typeof y?"lightgray":y,S=(0,l.default)({opacity:this.state.imgLoaded?0:1,transition:"opacity 0.5s",transitionDelay:this.state.imgLoaded?"0.5s":"0.25s"},o,f),w=(0,l.default)({opacity:this.state.imgLoaded||!1===this.state.fadeIn?1:0,transition:!0===this.state.fadeIn?"opacity 0.5s":"none"},o),x={title:t,alt:this.state.isVisible?"":a,style:S,className:p};if(m){var I=m;return d.default.createElement(v,{className:(r||"")+" gatsby-image-wrapper",style:(0,l.default)({position:"relative",overflow:"hidden"},n),ref:this.handleRef,key:"fluid-"+JSON.stringify(I.srcSet)},d.default.createElement(v,{style:{width:"100%",paddingBottom:100/I.aspectRatio+"%"}}),I.base64&&d.default.createElement(b,(0,l.default)({src:I.base64},x)),I.tracedSVG&&d.default.createElement(b,(0,l.default)({src:I.tracedSVG},x)),E&&d.default.createElement(v,{title:t,style:{backgroundColor:E,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.35s",right:0,left:0}}),this.state.isVisible&&d.default.createElement("picture",null,I.srcSetWebp&&d.default.createElement("source",{type:"image/webp",srcSet:I.srcSetWebp,sizes:I.sizes}),d.default.createElement("source",{srcSet:I.srcSet,sizes:I.sizes}),d.default.createElement(b,{alt:a,title:t,src:I.src,style:w,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError})),this.state.hasNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:g((0,l.default)({alt:a,title:t},I))}}))}if(h){var A=h,R=(0,l.default)({position:"relative",overflow:"hidden",display:"inline-block",width:A.width,height:A.height},n);return"inherit"===n.display&&delete R.display,d.default.createElement(v,{className:(r||"")+" gatsby-image-wrapper",style:R,ref:this.handleRef,key:"fixed-"+JSON.stringify(A.srcSet)},A.base64&&d.default.createElement(b,(0,l.default)({src:A.base64},x)),A.tracedSVG&&d.default.createElement(b,(0,l.default)({src:A.tracedSVG},x)),E&&d.default.createElement(v,{title:t,style:{backgroundColor:E,width:A.width,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.25s",height:A.height}}),this.state.isVisible&&d.default.createElement("picture",null,A.srcSetWebp&&d.default.createElement("source",{type:"image/webp",srcSet:A.srcSetWebp,sizes:A.sizes}),d.default.createElement("source",{srcSet:A.srcSet,sizes:A.sizes}),d.default.createElement(b,{alt:a,title:t,width:A.width,height:A.height,src:A.src,style:w,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError})),this.state.hasNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:g((0,l.default)({alt:a,title:t,width:A.width,height:A.height},A))}}))}return null},t}(d.default.Component);y.defaultProps={critical:!1,fadeIn:!0,alt:"",Tag:"div"};var v=c.default.shape({width:c.default.number.isRequired,height:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string}),E=c.default.shape({aspectRatio:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,sizes:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string});y.propTypes={resolutions:v,sizes:E,fixed:v,fluid:E,fadeIn:c.default.bool,title:c.default.string,alt:c.default.string,className:c.default.oneOfType([c.default.string,c.default.object]),critical:c.default.bool,style:c.default.object,imgStyle:c.default.object,placeholderStyle:c.default.object,placeholderClassName:c.default.string,backgroundColor:c.default.oneOfType([c.default.string,c.default.bool]),onLoad:c.default.func,onError:c.default.func,onStartLoad:c.default.func,Tag:c.default.string};var S=y;t.default=S},157:function(e,t,a){const r=a(0),{MDXTag:i}=a(158),{withMDXComponents:n}=a(163),{withMDXScope:s}=a(151);e.exports=s(n(({scope:e={},components:t={},children:a,...n})=>{if(!a)return null;const s={React:r,MDXTag:i,...e},o=Object.keys(s),l=o.map(e=>s[e]),d=new Function("_fn",...o,`${a}`)({},...l);return r.createElement(d,{components:t,...n})}))},159:function(e,t,a){"use strict";var r=a(0),i=a.n(r),n=a(4),s=a.n(n),o=a(157),l=a.n(o),d=a(151),c=a(153),u=function(e){var t=e.content,a=e.className;return i.a.createElement("div",{className:a},i.a.createElement(l.a,{scope:{Image:c.a}},t))};u.propTypes={content:s.a.node,className:s.a.string,scope:s.a.object},t.a=Object(d.withMDXScope)(u)},166:function(e,t,a){"use strict";var r=a(0),i=a.n(r),n=a(158);t.a={React:i.a,MDXTag:n.MDXTag}}}]);
//# sourceMappingURL=component---cache-gatsby-mdx-mdx-wrappers-dir-d-95-ab-767-d-696-bb-926-c-5-d-1-d-8-ce-389204-d-scope-hash-3010-b-3-badc-54-a-9-dfa-4-a-4-c-80-e-419-a-41-b-2-js-3cce64ab6ad8a00f8053.js.map