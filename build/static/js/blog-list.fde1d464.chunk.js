(this["webpackJsonpgogo-react"]=this["webpackJsonpgogo-react"]||[]).push([[25],{1029:function(e,a,t){"use strict";t.r(a);var s=t(194),n=t(195),l=t(197),r=t(196),i=t(198),c=t(6),o=t.n(c),m=t(235),u=t(244),d=t(382),p=t(260),g=t(315),b=t(316),f=t(317),h=t(204),y=t(199),v=t(741),N=t(217),j=t(820),E=t.n(j),O=t(821),T=t.n(O),M=t(201),x=T()()(E.a),w=function(e){function a(){return Object(s.a)(this,a),Object(l.a)(this,Object(r.a)(a).apply(this,arguments))}return Object(i.a)(a,e),Object(n.a)(a,[{key:"render",value:function(){return o.a.createElement(c.Fragment,null,o.a.createElement(m.a,null,o.a.createElement(y.a,{xxs:"12"},o.a.createElement(h.a,{heading:"menu.blog-list",match:this.props.match}),o.a.createElement(y.b,{className:"mb-5"})),v.b.map((function(e,a){return o.a.createElement(y.a,{xxs:"12",lg:"6",className:"mb-5",key:a},o.a.createElement(u.a,{className:"flex-row listing-card-container"},o.a.createElement("div",{className:"w-40 position-relative"},o.a.createElement(M.c,{to:"blog-detail"},o.a.createElement("img",{className:"card-img-left",src:e.thumb,alt:"Card cap"}),e.badge&&o.a.createElement(d.a,{color:"primary",pill:!0,className:"position-absolute badge-top-left"},e.badge))),o.a.createElement("div",{className:"w-60 d-flex align-items-center"},o.a.createElement(p.a,null,o.a.createElement(M.c,{to:"blog-detail"},o.a.createElement(x,{className:"mb-3 listing-heading",text:e.title,maxLine:"2",trimRight:!0,basedOn:"words",component:"h5"})),o.a.createElement(x,{className:"listing-desc text-muted",text:e.description,maxLine:"3",trimRight:!0,basedOn:"words",component:"p"})))))}))),o.a.createElement(m.a,null,o.a.createElement(y.a,{xxs:"12"},o.a.createElement(g.a,{listClassName:"justify-content-center"},o.a.createElement(b.a,null,o.a.createElement(f.a,{className:"prev",href:"#"},o.a.createElement("i",{className:"simple-icon-arrow-left"}))),o.a.createElement(b.a,{active:!0},o.a.createElement(f.a,{href:"#"},"1")),o.a.createElement(b.a,null,o.a.createElement(f.a,{href:"#"},"2")),o.a.createElement(b.a,null,o.a.createElement(f.a,{href:"#"},"3")),o.a.createElement(b.a,null,o.a.createElement(f.a,{className:"next",href:"#"},o.a.createElement("i",{className:"simple-icon-arrow-right"})))))))}}]),a}(c.Component);a.default=Object(N.d)(w)},199:function(e,a,t){"use strict";t.d(a,"a",(function(){return r})),t.d(a,"b",(function(){return i}));var s=t(6),n=t.n(s),l=t(234),r=function(e){return n.a.createElement(l.a,Object.assign({},e,{widths:["xxs","xs","sm","md","lg","xl","xxl"]}))},i=function(e){return n.a.createElement("div",{className:"separator ".concat(e.className)})}},204:function(e,a,t){"use strict";var s=t(6),n=t.n(s),l=t(236),r=t(237),i=t(201),c=t(200),o=function(e){return n.a.createElement(c.a,{id:"menu.".concat(e)})},m=function(e,a,t){return 0===t?"":e.split(a)[0]+a},u=function(e){var a=e.match.path.substr(1),t=a.split("/");return t[t.length-1].indexOf(":")>-1&&(t=t.filter((function(e){return-1===e.indexOf(":")}))),n.a.createElement(s.Fragment,null,n.a.createElement(l.a,{className:"pt-0 breadcrumb-container d-none d-sm-block d-lg-inline-block"},t.map((function(e,s){return n.a.createElement(r.a,{key:s,active:t.length===s+1},t.length!==s+1?n.a.createElement(i.c,{to:"/"+m(a,e,s)},o(e)):o(e))}))))};a.a=function(e){var a=e.heading,t=e.match;return n.a.createElement(s.Fragment,null,a&&n.a.createElement("h1",null,n.a.createElement(c.a,{id:a})),n.a.createElement(u,{match:t}))}},234:function(e,a,t){"use strict";var s=t(20),n=t(24),l=t(6),r=t.n(l),i=t(92),c=t.n(i),o=t(190),m=t.n(o),u=t(191),d=c.a.oneOfType([c.a.number,c.a.string]),p=c.a.oneOfType([c.a.bool,c.a.number,c.a.string,c.a.shape({size:c.a.oneOfType([c.a.bool,c.a.number,c.a.string]),order:d,offset:d})]),g={tag:u.tagPropType,xs:p,sm:p,md:p,lg:p,xl:p,className:c.a.string,cssModule:c.a.object,widths:c.a.array},b={tag:"div",widths:["xs","sm","md","lg","xl"]},f=function(e,a,t){return!0===t||""===t?e?"col":"col-"+a:"auto"===t?e?"col-auto":"col-"+a+"-auto":e?"col-"+t:"col-"+a+"-"+t},h=function(e){var a=e.className,t=e.cssModule,l=e.widths,i=e.tag,c=Object(n.a)(e,["className","cssModule","widths","tag"]),o=[];l.forEach((function(a,s){var n=e[a];if(delete c[a],n||""===n){var l=!s;if(Object(u.isObject)(n)){var r,i=l?"-":"-"+a+"-",d=f(l,a,n.size);o.push(Object(u.mapToCssModules)(m()(((r={})[d]=n.size||""===n.size,r["order"+i+n.order]=n.order||0===n.order,r["offset"+i+n.offset]=n.offset||0===n.offset,r)),t))}else{var p=f(l,a,n);o.push(p)}}})),o.length||o.push("col");var d=Object(u.mapToCssModules)(m()(a,o),t);return r.a.createElement(i,Object(s.a)({},c,{className:d}))};h.propTypes=g,h.defaultProps=b,a.a=h},235:function(e,a,t){"use strict";var s=t(20),n=t(24),l=t(6),r=t.n(l),i=t(92),c=t.n(i),o=t(190),m=t.n(o),u=t(191),d=c.a.oneOfType([c.a.number,c.a.string]),p={tag:u.tagPropType,noGutters:c.a.bool,className:c.a.string,cssModule:c.a.object,form:c.a.bool,xs:d,sm:d,md:d,lg:d,xl:d},g={tag:"div",widths:["xs","sm","md","lg","xl"]},b=function(e){var a=e.className,t=e.cssModule,l=e.noGutters,i=e.tag,c=e.form,o=e.widths,d=Object(n.a)(e,["className","cssModule","noGutters","tag","form","widths"]),p=[];o.forEach((function(a,t){var s=e[a];if(delete d[a],s){var n=!t;p.push(n?"row-cols-"+s:"row-cols-"+a+"-"+s)}}));var g=Object(u.mapToCssModules)(m()(a,l?"no-gutters":null,c?"form-row":"row",p),t);return r.a.createElement(i,Object(s.a)({},d,{className:g}))};b.propTypes=p,b.defaultProps=g,a.a=b},236:function(e,a,t){"use strict";var s=t(20),n=t(24),l=t(6),r=t.n(l),i=t(92),c=t.n(i),o=t(190),m=t.n(o),u=t(191),d={tag:u.tagPropType,listTag:u.tagPropType,className:c.a.string,listClassName:c.a.string,cssModule:c.a.object,children:c.a.node,"aria-label":c.a.string},p=function(e){var a=e.className,t=e.listClassName,l=e.cssModule,i=e.children,c=e.tag,o=e.listTag,d=e["aria-label"],p=Object(n.a)(e,["className","listClassName","cssModule","children","tag","listTag","aria-label"]),g=Object(u.mapToCssModules)(m()(a),l),b=Object(u.mapToCssModules)(m()("breadcrumb",t),l);return r.a.createElement(c,Object(s.a)({},p,{className:g,"aria-label":d}),r.a.createElement(o,{className:b},i))};p.propTypes=d,p.defaultProps={tag:"nav",listTag:"ol","aria-label":"breadcrumb"},a.a=p},237:function(e,a,t){"use strict";var s=t(20),n=t(24),l=t(6),r=t.n(l),i=t(92),c=t.n(i),o=t(190),m=t.n(o),u=t(191),d={tag:u.tagPropType,active:c.a.bool,className:c.a.string,cssModule:c.a.object},p=function(e){var a=e.className,t=e.cssModule,l=e.active,i=e.tag,c=Object(n.a)(e,["className","cssModule","active","tag"]),o=Object(u.mapToCssModules)(m()(a,!!l&&"active","breadcrumb-item"),t);return r.a.createElement(i,Object(s.a)({},c,{className:o,"aria-current":l?"page":void 0}))};p.propTypes=d,p.defaultProps={tag:"li"},a.a=p},244:function(e,a,t){"use strict";var s=t(20),n=t(24),l=t(6),r=t.n(l),i=t(92),c=t.n(i),o=t(190),m=t.n(o),u=t(191),d={tag:u.tagPropType,inverse:c.a.bool,color:c.a.string,body:c.a.bool,outline:c.a.bool,className:c.a.string,cssModule:c.a.object,innerRef:c.a.oneOfType([c.a.object,c.a.string,c.a.func])},p=function(e){var a=e.className,t=e.cssModule,l=e.color,i=e.body,c=e.inverse,o=e.outline,d=e.tag,p=e.innerRef,g=Object(n.a)(e,["className","cssModule","color","body","inverse","outline","tag","innerRef"]),b=Object(u.mapToCssModules)(m()(a,"card",!!c&&"text-white",!!i&&"card-body",!!l&&(o?"border":"bg")+"-"+l),t);return r.a.createElement(d,Object(s.a)({},g,{className:b,ref:p}))};p.propTypes=d,p.defaultProps={tag:"div"},a.a=p},260:function(e,a,t){"use strict";var s=t(20),n=t(24),l=t(6),r=t.n(l),i=t(92),c=t.n(i),o=t(190),m=t.n(o),u=t(191),d={tag:u.tagPropType,className:c.a.string,cssModule:c.a.object,innerRef:c.a.oneOfType([c.a.object,c.a.string,c.a.func])},p=function(e){var a=e.className,t=e.cssModule,l=e.innerRef,i=e.tag,c=Object(n.a)(e,["className","cssModule","innerRef","tag"]),o=Object(u.mapToCssModules)(m()(a,"card-body"),t);return r.a.createElement(i,Object(s.a)({},c,{className:o,ref:l}))};p.propTypes=d,p.defaultProps={tag:"div"},a.a=p},315:function(e,a,t){"use strict";var s=t(20),n=t(24),l=t(6),r=t.n(l),i=t(92),c=t.n(i),o=t(190),m=t.n(o),u=t(191),d={children:c.a.node,className:c.a.string,listClassName:c.a.string,cssModule:c.a.object,size:c.a.string,tag:u.tagPropType,listTag:u.tagPropType,"aria-label":c.a.string},p=function(e){var a,t=e.className,l=e.listClassName,i=e.cssModule,c=e.size,o=e.tag,d=e.listTag,p=e["aria-label"],g=Object(n.a)(e,["className","listClassName","cssModule","size","tag","listTag","aria-label"]),b=Object(u.mapToCssModules)(m()(t),i),f=Object(u.mapToCssModules)(m()(l,"pagination",((a={})["pagination-"+c]=!!c,a)),i);return r.a.createElement(o,{className:b,"aria-label":p},r.a.createElement(d,Object(s.a)({},g,{className:f})))};p.propTypes=d,p.defaultProps={tag:"nav",listTag:"ul","aria-label":"pagination"},a.a=p},316:function(e,a,t){"use strict";var s=t(20),n=t(24),l=t(6),r=t.n(l),i=t(92),c=t.n(i),o=t(190),m=t.n(o),u=t(191),d={active:c.a.bool,children:c.a.node,className:c.a.string,cssModule:c.a.object,disabled:c.a.bool,tag:u.tagPropType},p=function(e){var a=e.active,t=e.className,l=e.cssModule,i=e.disabled,c=e.tag,o=Object(n.a)(e,["active","className","cssModule","disabled","tag"]),d=Object(u.mapToCssModules)(m()(t,"page-item",{active:a,disabled:i}),l);return r.a.createElement(c,Object(s.a)({},o,{className:d}))};p.propTypes=d,p.defaultProps={tag:"li"},a.a=p},317:function(e,a,t){"use strict";var s=t(20),n=t(24),l=t(6),r=t.n(l),i=t(92),c=t.n(i),o=t(190),m=t.n(o),u=t(191),d={"aria-label":c.a.string,children:c.a.node,className:c.a.string,cssModule:c.a.object,next:c.a.bool,previous:c.a.bool,first:c.a.bool,last:c.a.bool,tag:u.tagPropType},p=function(e){var a,t=e.className,l=e.cssModule,i=e.next,c=e.previous,o=e.first,d=e.last,p=e.tag,g=Object(n.a)(e,["className","cssModule","next","previous","first","last","tag"]),b=Object(u.mapToCssModules)(m()(t,"page-link"),l);c?a="Previous":i?a="Next":o?a="First":d&&(a="Last");var f,h=e["aria-label"]||a;c?f="\u2039":i?f="\u203a":o?f="\xab":d&&(f="\xbb");var y=e.children;return y&&Array.isArray(y)&&0===y.length&&(y=null),g.href||"a"!==p||(p="button"),(c||i||o||d)&&(y=[r.a.createElement("span",{"aria-hidden":"true",key:"caret"},y||f),r.a.createElement("span",{className:"sr-only",key:"sr"},h)]),r.a.createElement(p,Object(s.a)({},g,{className:b,"aria-label":h}),y)};p.propTypes=d,p.defaultProps={tag:"a"},a.a=p},382:function(e,a,t){"use strict";var s=t(20),n=t(24),l=t(6),r=t.n(l),i=t(92),c=t.n(i),o=t(190),m=t.n(o),u=t(191),d={color:c.a.string,pill:c.a.bool,tag:u.tagPropType,innerRef:c.a.oneOfType([c.a.object,c.a.func,c.a.string]),children:c.a.node,className:c.a.string,cssModule:c.a.object},p=function(e){var a=e.className,t=e.cssModule,l=e.color,i=e.innerRef,c=e.pill,o=e.tag,d=Object(n.a)(e,["className","cssModule","color","innerRef","pill","tag"]),p=Object(u.mapToCssModules)(m()(a,"badge","badge-"+l,!!c&&"badge-pill"),t);return d.href&&"span"===o&&(o="a"),r.a.createElement(o,Object(s.a)({},d,{className:p,ref:i}))};p.propTypes=d,p.defaultProps={color:"secondary",pill:!1,tag:"span"},a.a=p},741:function(e,a,t){"use strict";t.d(a,"b",(function(){return s})),t.d(a,"a",(function(){return n}));var s=[{title:"Distinctively Exploit Optimal Alignments with Mentality Networks",description:"Keeping your eye on the ball while performing a deep dive on the start-up mentality to derive convergence on cross-platform integration. Collaboratively administrate via plug-and-play networks.",thumb:"/assets/img/detail-small-5.jpg",badge:"NEW",type:"image"},{title:"Progressively Maintain Extensive Infomediaries",description:"Credibly reintermediate backend ideas for cross-platform models. Continually reintermediate integrated processes through technically sound intellectual capital.",thumb:"/assets/img/detail-small-2.jpg",badge:"UPDATE",type:"video"},{title:"Assertively Iterate Resource Maximizing",description:"Keeping your eye on the ball while performing a deep dive on the start-up mentality to derive convergence on cross-platform integration.",thumb:"/assets/img/detail-small-3.jpg",type:"image"},{title:"Podcasting Operational Change Management Inside of Workflows",description:"Quickly deploy strategic networks with compelling e-business. Credibly pontificate highly efficient manufactured products and enabled data.",thumb:"/assets/img/detail-small-7.jpg",badge:"TRENDING",type:"image"},{title:"Objectively Innovate Empowered Manufactured Products",description:"Completely synergize resource taxing relationships via premier niche markets.",thumb:"/assets/img/detail-small-1.jpg",type:"image"},{title:"Completely Pursue Scalable Customer Service",description:"Credibly reintermediate backend ideas for cross-platform models. Continually reintermediate integrated processes through technically sound intellectual capital.",thumb:"/assets/img/detail-small-6.jpg",type:"image"},{title:"Dynamically Procrastinate B2C Users After Installed Base Benefits",description:"Dramatically maintain clicks-and-mortar solutions without functional solutions. Completely synergize resource taxing relationships via premier niche markets.",thumb:"/assets/img/detail-small-7.jpg",type:"image"},{title:"Progressively Maintain Extensive Infomediaries",description:"Dramatically maintain clicks-and-mortar solutions without functional solutions.",thumb:"/assets/img/detail-small-8.jpg",type:"image"}],n=[{title:"Using the Template",link:"#",icon:"iconsminds-director"},{title:"Security",link:"#",icon:"iconsminds-security-settings"},{title:"Account Settings",link:"#",icon:"iconsminds-male"},{title:"Policies and Docs",link:"#",icon:"iconsminds-newspaper"}]}}]);
//# sourceMappingURL=blog-list.fde1d464.chunk.js.map