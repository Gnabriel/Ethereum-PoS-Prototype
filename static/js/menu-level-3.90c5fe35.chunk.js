(this["webpackJsonpgogo-react"]=this["webpackJsonpgogo-react"]||[]).push([[68],{1144:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return p}));var s=t(194),n=t(195),r=t(197),c=t(196),l=t(198),o=t(6),u=t.n(o),i=t(235),m=t(200),d=t(199),f=t(204),p=function(e){function a(){return Object(s.a)(this,a),Object(r.a)(this,Object(c.a)(a).apply(this,arguments))}return Object(l.a)(a,e),Object(n.a)(a,[{key:"render",value:function(){return u.a.createElement(o.Fragment,null,u.a.createElement(i.a,null,u.a.createElement(d.a,{xxs:"12"},u.a.createElement(f.a,{heading:"menu.third-level-3",match:this.props.match}),u.a.createElement(d.b,{className:"mb-5"}))),u.a.createElement(i.a,null,u.a.createElement(d.a,{xxs:"12",className:"mb-4"},u.a.createElement("p",null,u.a.createElement(m.a,{id:"menu.third-level-3"})))))}}]),a}(o.Component)},199:function(e,a,t){"use strict";t.d(a,"a",(function(){return c})),t.d(a,"b",(function(){return l}));var s=t(6),n=t.n(s),r=t(234),c=function(e){return n.a.createElement(r.a,Object.assign({},e,{widths:["xxs","xs","sm","md","lg","xl","xxl"]}))},l=function(e){return n.a.createElement("div",{className:"separator ".concat(e.className)})}},204:function(e,a,t){"use strict";var s=t(6),n=t.n(s),r=t(236),c=t(237),l=t(201),o=t(200),u=function(e){return n.a.createElement(o.a,{id:"menu.".concat(e)})},i=function(e,a,t){return 0===t?"":e.split(a)[0]+a},m=function(e){var a=e.match.path.substr(1),t=a.split("/");return t[t.length-1].indexOf(":")>-1&&(t=t.filter((function(e){return-1===e.indexOf(":")}))),n.a.createElement(s.Fragment,null,n.a.createElement(r.a,{className:"pt-0 breadcrumb-container d-none d-sm-block d-lg-inline-block"},t.map((function(e,s){return n.a.createElement(c.a,{key:s,active:t.length===s+1},t.length!==s+1?n.a.createElement(l.c,{to:"/"+i(a,e,s)},u(e)):u(e))}))))};a.a=function(e){var a=e.heading,t=e.match;return n.a.createElement(s.Fragment,null,a&&n.a.createElement("h1",null,n.a.createElement(o.a,{id:a})),n.a.createElement(m,{match:t}))}},234:function(e,a,t){"use strict";var s=t(20),n=t(24),r=t(6),c=t.n(r),l=t(92),o=t.n(l),u=t(190),i=t.n(u),m=t(191),d=o.a.oneOfType([o.a.number,o.a.string]),f=o.a.oneOfType([o.a.bool,o.a.number,o.a.string,o.a.shape({size:o.a.oneOfType([o.a.bool,o.a.number,o.a.string]),order:d,offset:d})]),p={tag:m.tagPropType,xs:f,sm:f,md:f,lg:f,xl:f,className:o.a.string,cssModule:o.a.object,widths:o.a.array},b={tag:"div",widths:["xs","sm","md","lg","xl"]},g=function(e,a,t){return!0===t||""===t?e?"col":"col-"+a:"auto"===t?e?"col-auto":"col-"+a+"-auto":e?"col-"+t:"col-"+a+"-"+t},h=function(e){var a=e.className,t=e.cssModule,r=e.widths,l=e.tag,o=Object(n.a)(e,["className","cssModule","widths","tag"]),u=[];r.forEach((function(a,s){var n=e[a];if(delete o[a],n||""===n){var r=!s;if(Object(m.isObject)(n)){var c,l=r?"-":"-"+a+"-",d=g(r,a,n.size);u.push(Object(m.mapToCssModules)(i()(((c={})[d]=n.size||""===n.size,c["order"+l+n.order]=n.order||0===n.order,c["offset"+l+n.offset]=n.offset||0===n.offset,c)),t))}else{var f=g(r,a,n);u.push(f)}}})),u.length||u.push("col");var d=Object(m.mapToCssModules)(i()(a,u),t);return c.a.createElement(l,Object(s.a)({},o,{className:d}))};h.propTypes=p,h.defaultProps=b,a.a=h},235:function(e,a,t){"use strict";var s=t(20),n=t(24),r=t(6),c=t.n(r),l=t(92),o=t.n(l),u=t(190),i=t.n(u),m=t(191),d=o.a.oneOfType([o.a.number,o.a.string]),f={tag:m.tagPropType,noGutters:o.a.bool,className:o.a.string,cssModule:o.a.object,form:o.a.bool,xs:d,sm:d,md:d,lg:d,xl:d},p={tag:"div",widths:["xs","sm","md","lg","xl"]},b=function(e){var a=e.className,t=e.cssModule,r=e.noGutters,l=e.tag,o=e.form,u=e.widths,d=Object(n.a)(e,["className","cssModule","noGutters","tag","form","widths"]),f=[];u.forEach((function(a,t){var s=e[a];if(delete d[a],s){var n=!t;f.push(n?"row-cols-"+s:"row-cols-"+a+"-"+s)}}));var p=Object(m.mapToCssModules)(i()(a,r?"no-gutters":null,o?"form-row":"row",f),t);return c.a.createElement(l,Object(s.a)({},d,{className:p}))};b.propTypes=f,b.defaultProps=p,a.a=b},236:function(e,a,t){"use strict";var s=t(20),n=t(24),r=t(6),c=t.n(r),l=t(92),o=t.n(l),u=t(190),i=t.n(u),m=t(191),d={tag:m.tagPropType,listTag:m.tagPropType,className:o.a.string,listClassName:o.a.string,cssModule:o.a.object,children:o.a.node,"aria-label":o.a.string},f=function(e){var a=e.className,t=e.listClassName,r=e.cssModule,l=e.children,o=e.tag,u=e.listTag,d=e["aria-label"],f=Object(n.a)(e,["className","listClassName","cssModule","children","tag","listTag","aria-label"]),p=Object(m.mapToCssModules)(i()(a),r),b=Object(m.mapToCssModules)(i()("breadcrumb",t),r);return c.a.createElement(o,Object(s.a)({},f,{className:p,"aria-label":d}),c.a.createElement(u,{className:b},l))};f.propTypes=d,f.defaultProps={tag:"nav",listTag:"ol","aria-label":"breadcrumb"},a.a=f},237:function(e,a,t){"use strict";var s=t(20),n=t(24),r=t(6),c=t.n(r),l=t(92),o=t.n(l),u=t(190),i=t.n(u),m=t(191),d={tag:m.tagPropType,active:o.a.bool,className:o.a.string,cssModule:o.a.object},f=function(e){var a=e.className,t=e.cssModule,r=e.active,l=e.tag,o=Object(n.a)(e,["className","cssModule","active","tag"]),u=Object(m.mapToCssModules)(i()(a,!!r&&"active","breadcrumb-item"),t);return c.a.createElement(l,Object(s.a)({},o,{className:u,"aria-current":r?"page":void 0}))};f.propTypes=d,f.defaultProps={tag:"li"},a.a=f}}]);
//# sourceMappingURL=menu-level-3.90c5fe35.chunk.js.map