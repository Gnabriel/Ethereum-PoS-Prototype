(this["webpackJsonpgogo-react"]=this["webpackJsonpgogo-react"]||[]).push([[70],{199:function(e,a,t){"use strict";t.d(a,"a",(function(){return c})),t.d(a,"b",(function(){return l}));var n=t(6),s=t.n(n),r=t(234),c=function(e){return s.a.createElement(r.a,Object.assign({},e,{widths:["xxs","xs","sm","md","lg","xl","xxl"]}))},l=function(e){return s.a.createElement("div",{className:"separator ".concat(e.className)})}},204:function(e,a,t){"use strict";var n=t(6),s=t.n(n),r=t(236),c=t(237),l=t(201),u=t(200),o=function(e){return s.a.createElement(u.a,{id:"menu.".concat(e)})},i=function(e,a,t){return 0===t?"":e.split(a)[0]+a},m=function(e){var a=e.match.path.substr(1),t=a.split("/");return t[t.length-1].indexOf(":")>-1&&(t=t.filter((function(e){return-1===e.indexOf(":")}))),s.a.createElement(n.Fragment,null,s.a.createElement(r.a,{className:"pt-0 breadcrumb-container d-none d-sm-block d-lg-inline-block"},t.map((function(e,n){return s.a.createElement(c.a,{key:n,active:t.length===n+1},t.length!==n+1?s.a.createElement(l.c,{to:"/"+i(a,e,n)},o(e)):o(e))}))))};a.a=function(e){var a=e.heading,t=e.match;return s.a.createElement(n.Fragment,null,a&&s.a.createElement("h1",null,s.a.createElement(u.a,{id:a})),s.a.createElement(m,{match:t}))}},234:function(e,a,t){"use strict";var n=t(20),s=t(24),r=t(6),c=t.n(r),l=t(92),u=t.n(l),o=t(190),i=t.n(o),m=t(191),d=u.a.oneOfType([u.a.number,u.a.string]),f=u.a.oneOfType([u.a.bool,u.a.number,u.a.string,u.a.shape({size:u.a.oneOfType([u.a.bool,u.a.number,u.a.string]),order:d,offset:d})]),p={tag:m.tagPropType,xs:f,sm:f,md:f,lg:f,xl:f,className:u.a.string,cssModule:u.a.object,widths:u.a.array},b={tag:"div",widths:["xs","sm","md","lg","xl"]},g=function(e,a,t){return!0===t||""===t?e?"col":"col-"+a:"auto"===t?e?"col-auto":"col-"+a+"-auto":e?"col-"+t:"col-"+a+"-"+t},h=function(e){var a=e.className,t=e.cssModule,r=e.widths,l=e.tag,u=Object(s.a)(e,["className","cssModule","widths","tag"]),o=[];r.forEach((function(a,n){var s=e[a];if(delete u[a],s||""===s){var r=!n;if(Object(m.isObject)(s)){var c,l=r?"-":"-"+a+"-",d=g(r,a,s.size);o.push(Object(m.mapToCssModules)(i()(((c={})[d]=s.size||""===s.size,c["order"+l+s.order]=s.order||0===s.order,c["offset"+l+s.offset]=s.offset||0===s.offset,c)),t))}else{var f=g(r,a,s);o.push(f)}}})),o.length||o.push("col");var d=Object(m.mapToCssModules)(i()(a,o),t);return c.a.createElement(l,Object(n.a)({},u,{className:d}))};h.propTypes=p,h.defaultProps=b,a.a=h},235:function(e,a,t){"use strict";var n=t(20),s=t(24),r=t(6),c=t.n(r),l=t(92),u=t.n(l),o=t(190),i=t.n(o),m=t(191),d=u.a.oneOfType([u.a.number,u.a.string]),f={tag:m.tagPropType,noGutters:u.a.bool,className:u.a.string,cssModule:u.a.object,form:u.a.bool,xs:d,sm:d,md:d,lg:d,xl:d},p={tag:"div",widths:["xs","sm","md","lg","xl"]},b=function(e){var a=e.className,t=e.cssModule,r=e.noGutters,l=e.tag,u=e.form,o=e.widths,d=Object(s.a)(e,["className","cssModule","noGutters","tag","form","widths"]),f=[];o.forEach((function(a,t){var n=e[a];if(delete d[a],n){var s=!t;f.push(s?"row-cols-"+n:"row-cols-"+a+"-"+n)}}));var p=Object(m.mapToCssModules)(i()(a,r?"no-gutters":null,u?"form-row":"row",f),t);return c.a.createElement(l,Object(n.a)({},d,{className:p}))};b.propTypes=f,b.defaultProps=p,a.a=b},236:function(e,a,t){"use strict";var n=t(20),s=t(24),r=t(6),c=t.n(r),l=t(92),u=t.n(l),o=t(190),i=t.n(o),m=t(191),d={tag:m.tagPropType,listTag:m.tagPropType,className:u.a.string,listClassName:u.a.string,cssModule:u.a.object,children:u.a.node,"aria-label":u.a.string},f=function(e){var a=e.className,t=e.listClassName,r=e.cssModule,l=e.children,u=e.tag,o=e.listTag,d=e["aria-label"],f=Object(s.a)(e,["className","listClassName","cssModule","children","tag","listTag","aria-label"]),p=Object(m.mapToCssModules)(i()(a),r),b=Object(m.mapToCssModules)(i()("breadcrumb",t),r);return c.a.createElement(u,Object(n.a)({},f,{className:p,"aria-label":d}),c.a.createElement(o,{className:b},l))};f.propTypes=d,f.defaultProps={tag:"nav",listTag:"ol","aria-label":"breadcrumb"},a.a=f},237:function(e,a,t){"use strict";var n=t(20),s=t(24),r=t(6),c=t.n(r),l=t(92),u=t.n(l),o=t(190),i=t.n(o),m=t(191),d={tag:m.tagPropType,active:u.a.bool,className:u.a.string,cssModule:u.a.object},f=function(e){var a=e.className,t=e.cssModule,r=e.active,l=e.tag,u=Object(s.a)(e,["className","cssModule","active","tag"]),o=Object(m.mapToCssModules)(i()(a,!!r&&"active","breadcrumb-item"),t);return c.a.createElement(l,Object(n.a)({},u,{className:o,"aria-current":r?"page":void 0}))};f.propTypes=d,f.defaultProps={tag:"li"},a.a=f},661:function(e,a,t){"use strict";t.r(a),t.d(a,"menuTypes",(function(){return v}));var n=t(194),s=t(195),r=t(197),c=t(196),l=t(198),u=t(6),o=t.n(u),i=t(71),m=t(235),d=t(407),f=t(199),p=t(204),b=t(0),g=t(200),h=function(e){function a(){var e,t;Object(n.a)(this,a);for(var s=arguments.length,l=new Array(s),u=0;u<s;u++)l[u]=arguments[u];return(t=Object(r.a)(this,(e=Object(c.a)(a)).call.apply(e,[this].concat(l)))).changeDefaultMenuType=function(e,a){e.preventDefault();var n=t.getMenuClassesForResize(a);t.props.setContainerClassnames(0,n.join(" "),t.props.selectedMenuHasSubItems)},t.getMenuClassesForResize=function(e){var a=t.props,n=a.menuHiddenBreakpoint,s=a.subHiddenBreakpoint,r=e.split(" ").filter((function(e){return""!==e})),c=window.innerWidth;return c<n?r.push("menu-mobile"):c<s?(r=r.filter((function(e){return"menu-mobile"!==e}))).includes("menu-default")&&!r.includes("menu-sub-hidden")&&r.push("menu-sub-hidden"):(r=r.filter((function(e){return"menu-mobile"!==e}))).includes("menu-default")&&r.includes("menu-sub-hidden")&&(r=r.filter((function(e){return"menu-sub-hidden"!==e}))),r},t}return Object(l.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this;return o.a.createElement(u.Fragment,null,o.a.createElement(m.a,null,o.a.createElement(f.a,{xxs:"12"},o.a.createElement(p.a,{heading:"menu.types",match:this.props.match}),o.a.createElement(f.b,{className:"mb-5"}))),o.a.createElement(m.a,null,o.a.createElement(f.a,{xxs:"12",className:"mb-4"},o.a.createElement(d.a,{outline:!0,color:"primary",className:"mb-2",onClick:function(a){return e.changeDefaultMenuType(a,"menu-default")}},o.a.createElement(g.a,{id:"menu.default"}))," ",o.a.createElement(d.a,{outline:!0,color:"primary",className:"mb-2",onClick:function(a){return e.changeDefaultMenuType(a,"menu-sub-hidden")}},o.a.createElement(g.a,{id:"menu.subhidden"}))," ",o.a.createElement(d.a,{outline:!0,color:"primary",className:"mb-2",onClick:function(a){return e.changeDefaultMenuType(a,"menu-hidden")}},o.a.createElement(g.a,{id:"menu.hidden"})))))}}]),a}(u.Component);a.default=Object(i.b)((function(e){var a=e.menu;return{containerClassnames:a.containerClassnames,subHiddenBreakpoint:a.subHiddenBreakpoint,menuHiddenBreakpoint:a.menuHiddenBreakpoint,menuClickCount:a.menuClickCount,selectedMenuHasSubItems:a.selectedMenuHasSubItems}}),{setContainerClassnames:b.Hb,changeDefaultClassnames:b.hb})(h);var v=new h}}]);
//# sourceMappingURL=menu-types.60696194.chunk.js.map