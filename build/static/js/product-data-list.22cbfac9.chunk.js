(this["webpackJsonpgogo-react"]=this["webpackJsonpgogo-react"]||[]).push([[82],{199:function(e,t,a){"use strict";a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return r}));var n=a(6),c=a.n(n),l=a(234),s=function(e){return c.a.createElement(l.a,Object.assign({},e,{widths:["xxs","xs","sm","md","lg","xl","xxl"]}))},r=function(e){return c.a.createElement("div",{className:"separator ".concat(e.className)})}},204:function(e,t,a){"use strict";var n=a(6),c=a.n(n),l=a(236),s=a(237),r=a(201),i=a(200),o=function(e){return c.a.createElement(i.a,{id:"menu.".concat(e)})},m=function(e,t,a){return 0===a?"":e.split(t)[0]+t},d=function(e){var t=e.match.path.substr(1),a=t.split("/");return a[a.length-1].indexOf(":")>-1&&(a=a.filter((function(e){return-1===e.indexOf(":")}))),c.a.createElement(n.Fragment,null,c.a.createElement(l.a,{className:"pt-0 breadcrumb-container d-none d-sm-block d-lg-inline-block"},a.map((function(e,n){return c.a.createElement(s.a,{key:n,active:a.length===n+1},a.length!==n+1?c.a.createElement(r.c,{to:"/"+m(t,e,n)},o(e)):o(e))}))))};t.a=function(e){var t=e.heading,a=e.match;return c.a.createElement(n.Fragment,null,t&&c.a.createElement("h1",null,c.a.createElement(i.a,{id:t})),c.a.createElement(d,{match:a}))}},421:function(e,t,a){"use strict";var n=a(6),c=a.n(n),l=a(288);t.a=function(e){var t=Object.assign({},e);return delete t.autoCorrect,delete t.autoCapitalize,c.a.createElement(l.a.Input,t)}},627:function(e,t,a){"use strict";var n=a(194),c=a(195),l=a(197),s=a(196),r=a(198),i=a(6),o=a.n(i),m=a(199),d=a(544),u=a(545),p=a(422),g=function(e){function t(){return Object(n.a)(this,t),Object(l.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(r.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){}},{key:"onChangePage",value:function(e){this.props.onChangePage(e)}},{key:"render",value:function(){var e=this,t=this.props,a=t.totalPage,n=void 0===a?0:a,c=t.currentPage,l=void 0===c?1:c,s=t.numberLimit,r=void 0===s?5:s,i=t.lastIsActive,g=void 0===i||i,h=t.firstIsActive,E=void 0===h||h,f=1,b=r;r>n?(f=1,b=n):l<=parseInt(r/2,10)?(f=1,b=r):l+parseInt(r/2,10)<=n?(f=l-parseInt(r/2,10),b=l+parseInt(r/2,10)):(f=n-(r-1),b=n);for(var k=[],C=f=0===f?1:f;C<=b;C++)k.push(C);var v=l<=1?"disabled":"",N=l>=n?"disabled":"",x=l<=1?"disabled":"",y=l>=n?"disabled":"";return n>1?o.a.createElement(m.a,{xxs:"12",className:"mt-3"},o.a.createElement(d.a,{className:"pagination justify-content-center"},E&&o.a.createElement(u.a,{className:"page-item ".concat(v)},o.a.createElement(p.a,{className:"page-link first",onClick:function(){return e.onChangePage(1)}},o.a.createElement("i",{className:"simple-icon-control-start"}))),o.a.createElement(u.a,{className:"page-item ".concat(x)},o.a.createElement(p.a,{className:"page-link prev",onClick:function(){return e.onChangePage(l-1)}},o.a.createElement("i",{className:"simple-icon-arrow-left"}))),k.map((function(t){return o.a.createElement(u.a,{key:t,className:"page-item ".concat(l===t&&"active")},o.a.createElement(p.a,{className:"page-link",onClick:function(){return e.onChangePage(t)}},t))})),o.a.createElement(u.a,{className:"page-item ".concat(y)},o.a.createElement(p.a,{className:"page-link next",onClick:function(){return e.onChangePage(l+1)}},o.a.createElement("i",{className:"simple-icon-arrow-right"}))),g&&o.a.createElement(u.a,{className:"page-item ".concat(N)},o.a.createElement(p.a,{className:"page-link last",onClick:function(){return e.onChangePage(n)}},o.a.createElement("i",{className:"simple-icon-control-end"}))))):o.a.createElement(m.a,{xxs:"12",className:"mt-2"})}}]),t}(o.a.Component);t.a=g},662:function(e,t,a){"use strict";var n=a(6),c=a.n(n),l=a(244),s=a(382),r=a(540),i=a(201),o=a(190),m=a.n(o),d=a(488),u=a(199);t.a=c.a.memo((function(e){var t=e.product,a=e.isSelect,n=e.collect,o=e.onCheckItem;return c.a.createElement(u.a,{xxs:"12",className:"mb-3"},c.a.createElement(d.b,{id:"menu_id",data:t.id,collect:n},c.a.createElement(l.a,{onClick:function(e){return o(e,t.id)},className:m()("d-flex flex-row",{active:a})},c.a.createElement("div",{className:"pl-2 d-flex flex-grow-1 min-width-zero"},c.a.createElement("div",{className:"card-body align-self-center d-flex flex-column flex-lg-row justify-content-between min-width-zero align-items-lg-center"},c.a.createElement(i.c,{to:"?p=".concat(t.id),className:"w-40 w-sm-100"},c.a.createElement("p",{className:"list-item-heading mb-1 truncate"},t.title)),c.a.createElement("p",{className:"mb-1 text-muted text-small w-15 w-sm-100"},t.category),c.a.createElement("p",{className:"mb-1 text-muted text-small w-15 w-sm-100"},t.date),c.a.createElement("div",{className:"w-15 w-sm-100"},c.a.createElement(s.a,{color:t.statusColor,pill:!0},t.status))),c.a.createElement("div",{className:"custom-control custom-checkbox pl-1 align-self-center pr-4"},c.a.createElement(r.a,{className:"item-check mb-0",type:"checkbox",id:"check_".concat(t.id),checked:a,onChange:function(){},label:""}))))))}))},663:function(e,t,a){"use strict";var n=a(6),c=a.n(n),l=a(488);t.a=function(e){var t=e.onContextMenu,a=e.onContextMenuClick;return c.a.createElement(l.a,{id:"menu_id",onShow:function(e){return t(e,e.detail.data)}},c.a.createElement(l.c,{onClick:a,data:{action:"copy"}},c.a.createElement("i",{className:"simple-icon-docs"})," ",c.a.createElement("span",null,"Copy")),c.a.createElement(l.c,{onClick:a,data:{action:"move"}},c.a.createElement("i",{className:"simple-icon-drawer"})," ",c.a.createElement("span",null,"Move to archive")),c.a.createElement(l.c,{onClick:a,data:{action:"delete"}},c.a.createElement("i",{className:"simple-icon-trash"})," ",c.a.createElement("span",null,"Delete")))}},664:function(e,t,a){"use strict";var n=a(194),c=a(195),l=a(197),s=a(196),r=a(198),i=a(6),o=a.n(i),m=a(235),d=a(407),u=a(392),p=a(540),g=a(550),h=a(542),E=a(543),f=a(454),b=a(541),k=a(217),C=a(199),v=a(204),N=a(200),x=a(689),y=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(l.a)(this,Object(s.a)(t).call(this))).toggleDisplayOptions=function(){a.setState((function(e){return{displayOptionsIsOpen:!e.displayOptionsIsOpen}}))},a.toggleSplit=function(){a.setState((function(e){return{dropdownSplitOpen:!e.dropdownSplitOpen}}))},a.state={dropdownSplitOpen:!1,displayOptionsIsOpen:!1},a}return Object(r.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props.intl.messages,t=this.props,a=t.displayMode,n=t.changeDisplayMode,c=t.handleChangeSelectAll,l=t.changeOrderBy,s=t.changePageSize,r=t.selectedPageSize,i=t.totalItemCount,k=t.selectedOrderOption,y=t.match,O=t.startIndex,S=t.endIndex,w=t.selectedItemsLength,I=t.itemsLength,P=t.onSearchKey,M=t.orderOptions,z=t.pageSizes,j=t.toggleModal,L=t.heading,D=this.state,A=D.displayOptionsIsOpen,R=D.dropdownSplitOpen;return o.a.createElement(m.a,null,o.a.createElement(C.a,{xxs:"12"},o.a.createElement("div",{className:"mb-2"},o.a.createElement("h1",null,o.a.createElement(N.a,{id:L})),o.a.createElement("div",{className:"text-zero top-right-button-container"},o.a.createElement(d.a,{color:"primary",size:"lg",className:"top-right-button",onClick:function(){return j()}},o.a.createElement(N.a,{id:"pages.add-new"})),"  ",o.a.createElement(u.a,{isOpen:R,toggle:this.toggleSplit},o.a.createElement("div",{className:"btn btn-primary btn-lg pl-4 pr-0 check-button check-all"},o.a.createElement(p.a,{className:"custom-checkbox mb-0 d-inline-block",type:"checkbox",id:"checkAll",checked:w>=I,onChange:function(){return c(!0)},label:o.a.createElement("span",{className:"custom-control-label ".concat(w>0&&w<I?"indeterminate":"")})})),o.a.createElement(g.a,{caret:!0,color:"primary",className:"dropdown-toggle-split btn-lg"}),o.a.createElement(h.a,{right:!0},o.a.createElement(E.a,null,o.a.createElement(N.a,{id:"pages.delete"})),o.a.createElement(E.a,null,o.a.createElement(N.a,{id:"pages.another-action"}))))),o.a.createElement(v.a,{match:y})),o.a.createElement("div",{className:"mb-2"},o.a.createElement(d.a,{color:"empty",className:"pt-0 pl-0 d-inline-block d-md-none",onClick:this.toggleDisplayOptions},o.a.createElement(N.a,{id:"pages.display-options"})," ",o.a.createElement("i",{className:"simple-icon-arrow-down align-middle"})),o.a.createElement(f.a,{isOpen:A,className:"d-md-block",id:"displayOptions"},o.a.createElement("span",{className:"mr-3 d-inline-block float-md-left"},o.a.createElement("a",{href:"#/",className:"mr-2 view-icon ".concat("list"===a?"active":""),onClick:function(){return n("list")}},o.a.createElement(x.a,null)),o.a.createElement("a",{href:"#/",className:"mr-2 view-icon ".concat("thumblist"===a?"active":""),onClick:function(){return n("thumblist")}},o.a.createElement(x.e,null)),o.a.createElement("a",{href:"#/",className:"mr-2 view-icon ".concat("imagelist"===a?"active":""),onClick:function(){return n("imagelist")}},o.a.createElement(x.b,null))),o.a.createElement("div",{className:"d-block d-md-inline-block pt-1"},o.a.createElement(b.a,{className:"mr-1 float-md-left btn-group mb-1"},o.a.createElement(g.a,{caret:!0,color:"outline-dark",size:"xs"},o.a.createElement(N.a,{id:"pages.orderby"}),k.label),o.a.createElement(h.a,null,M.map((function(e,t){return o.a.createElement(E.a,{key:t,onClick:function(){return l(e.column)}},e.label)})))),o.a.createElement("div",{className:"search-sm d-inline-block float-md-left mr-1 mb-1 align-top"},o.a.createElement("input",{type:"text",name:"keyword",id:"search",placeholder:e["menu.search"],onKeyPress:function(e){return P(e)}}))),o.a.createElement("div",{className:"float-md-right pt-1"},o.a.createElement("span",{className:"text-muted text-small mr-1"},"".concat(O,"-").concat(S," of ").concat(i," ")),o.a.createElement(b.a,{className:"d-inline-block"},o.a.createElement(g.a,{caret:!0,color:"outline-dark",size:"xs"},r),o.a.createElement(h.a,{right:!0},z.map((function(e,t){return o.a.createElement(E.a,{key:t,onClick:function(){return s(e)}},e)}))))))),o.a.createElement(C.b,{className:"mb-5"})))}}]),t}(i.Component);t.a=Object(k.d)(y)},665:function(e,t,a){"use strict";var n=a(6),c=a.n(n),l=a(244),s=a(428),r=a(382),i=a(260),o=a(235),m=a(540),d=a(399),u=a(294),p=a(201),g=a(190),h=a.n(g),E=a(488),f=a(199);t.a=c.a.memo((function(e){var t=e.product,a=e.isSelect,n=e.collect,g=e.onCheckItem;return c.a.createElement(f.a,{sm:"6",lg:"4",xl:"3",className:"mb-3",key:t.id},c.a.createElement(E.b,{id:"menu_id",data:t.id,collect:n},c.a.createElement(l.a,{onClick:function(e){return g(e,t.id)},className:h()({active:a})},c.a.createElement("div",{className:"position-relative"},c.a.createElement(p.c,{to:"?p=".concat(t.id),className:"w-40 w-sm-100"},c.a.createElement(s.a,{top:!0,alt:t.title,src:t.img})),c.a.createElement(r.a,{color:t.statusColor,pill:!0,className:"position-absolute badge-top-left"},t.status)),c.a.createElement(i.a,null,c.a.createElement(o.a,null,c.a.createElement(f.a,{xxs:"2"},c.a.createElement(m.a,{className:"item-check mb-0",type:"checkbox",id:"check_".concat(t.id),checked:a,onChange:function(){},label:""})),c.a.createElement(f.a,{xxs:"10",className:"mb-3"},c.a.createElement(d.a,null,t.title),c.a.createElement(u.a,{className:"text-muted text-small mb-0 font-weight-light"},t.date)))))))}))},666:function(e,t,a){"use strict";var n=a(6),c=a.n(n),l=a(244),s=a(382),r=a(540),i=a(201),o=a(190),m=a.n(o),d=a(488),u=a(199);t.a=c.a.memo((function(e){var t=e.product,a=e.isSelect,n=e.collect,o=e.onCheckItem;return c.a.createElement(u.a,{xxs:"12",key:t.id,className:"mb-3"},c.a.createElement(d.b,{id:"menu_id",data:t.id,collect:n},c.a.createElement(l.a,{onClick:function(e){return o(e,t.id)},className:m()("d-flex flex-row",{active:a})},c.a.createElement(i.c,{to:"?p=".concat(t.id),className:"d-flex"},c.a.createElement("img",{alt:t.title,src:t.img,className:"list-thumbnail responsive border-0 card-img-left"})),c.a.createElement("div",{className:"pl-2 d-flex flex-grow-1 min-width-zero"},c.a.createElement("div",{className:"card-body align-self-center d-flex flex-column flex-lg-row justify-content-between min-width-zero align-items-lg-center"},c.a.createElement(i.c,{to:"?p=".concat(t.id),className:"w-40 w-sm-100"},c.a.createElement("p",{className:"list-item-heading mb-1 truncate"},t.title)),c.a.createElement("p",{className:"mb-1 text-muted text-small w-15 w-sm-100"},t.category),c.a.createElement("p",{className:"mb-1 text-muted text-small w-15 w-sm-100"},t.date),c.a.createElement("div",{className:"w-15 w-sm-100"},c.a.createElement(s.a,{color:t.statusColor,pill:!0},t.status))),c.a.createElement("div",{className:"custom-control custom-checkbox pl-1 align-self-center pr-4"},c.a.createElement(r.a,{className:"item-check mb-0",type:"checkbox",id:"check_".concat(t.id),checked:a,onChange:function(){},label:""}))))))}))},667:function(e,t,a){"use strict";var n=a(6),c=a.n(n),l=a(417),s=a(412),r=a(413),i=a(539),o=a(524),m=a(540),d=a(414),u=a(407),p=a(288),g=a(421),h=a(200);t.a=function(e){var t=e.modalOpen,a=e.toggleModal,n=e.categories;return c.a.createElement(l.a,{isOpen:t,toggle:a,wrapClassName:"modal-right",backdrop:"static"},c.a.createElement(s.a,{toggle:a},c.a.createElement(h.a,{id:"pages.add-new-modal-title"})),c.a.createElement(r.a,null,c.a.createElement(i.a,null,c.a.createElement(h.a,{id:"pages.product-name"})),c.a.createElement(o.a,null),c.a.createElement(i.a,{className:"mt-4"},c.a.createElement(h.a,{id:"pages.category"})),c.a.createElement(p.b,{components:{Input:g.a},className:"react-select",classNamePrefix:"react-select",name:"form-field-name",options:n}),c.a.createElement(i.a,{className:"mt-4"},c.a.createElement(h.a,{id:"pages.description"})),c.a.createElement(o.a,{type:"textarea",name:"text",id:"exampleText"}),c.a.createElement(i.a,{className:"mt-4"},c.a.createElement(h.a,{id:"pages.status"})),c.a.createElement(m.a,{type:"radio",id:"exCustomRadio",name:"customRadio",label:"ON HOLD"}),c.a.createElement(m.a,{type:"radio",id:"exCustomRadio2",name:"customRadio",label:"PROCESSED"})),c.a.createElement(d.a,null,c.a.createElement(u.a,{color:"secondary",outline:!0,onClick:a},c.a.createElement(h.a,{id:"pages.cancel"})),c.a.createElement(u.a,{color:"primary",onClick:a},c.a.createElement(h.a,{id:"pages.submit"}))," "))}},976:function(e,t,a){"use strict";a.r(t);var n=a(281),c=a(194),l=a(195),s=a(197),r=a(196),i=a(198),o=a(6),m=a.n(o),d=a(235),u=a(683),p=a.n(u),g=a(10),h=a(662),E=a(627),f=a(663),b=a(664),k=a(665),C=a(666),v=a(667);function N(e){return{data:e.data}}var x=g.l+"/cakes/paging",y=function(e){function t(e){var l;return Object(c.a)(this,t),(l=Object(s.a)(this,Object(r.a)(t).call(this,e))).toggleModal=function(){l.setState({modalOpen:!l.state.modalOpen})},l.changeOrderBy=function(e){l.setState({selectedOrderOption:l.state.orderOptions.find((function(t){return t.column===e}))},(function(){return l.dataListRender()}))},l.changePageSize=function(e){l.setState({selectedPageSize:e,currentPage:1},(function(){return l.dataListRender()}))},l.changeDisplayMode=function(e){return l.setState({displayMode:e}),!1},l.onChangePage=function(e){l.setState({currentPage:e},(function(){return l.dataListRender()}))},l.onSearchKey=function(e){"Enter"===e.key&&l.setState({search:e.target.value.toLowerCase()},(function(){return l.dataListRender()}))},l.onCheckItem=function(e,t){if("A"===e.target.tagName||e.target.parentElement&&"A"===e.target.parentElement.tagName)return!0;null===l.state.lastChecked&&l.setState({lastChecked:t});var a=l.state.selectedItems;if(a.includes(t)?a=a.filter((function(e){return e!==t})):a.push(t),l.setState({selectedItems:a}),e.shiftKey){var c,s=l.state.items,r=l.getIndex(t,s,"id"),i=l.getIndex(l.state.lastChecked,s,"id");s=s.slice(Math.min(r,i),Math.max(r,i)+1),(c=a).push.apply(c,Object(n.a)(s.map((function(e){return e.id})))),a=Array.from(new Set(a)),l.setState({selectedItems:a})}document.activeElement.blur()},l.handleChangeSelectAll=function(e){return l.state.selectedItems.length>=l.state.items.length?e&&l.setState({selectedItems:[]}):l.setState({selectedItems:l.state.items.map((function(e){return e.id}))}),document.activeElement.blur(),!1},l.onContextMenuClick=function(e,t,a){console.log("onContextMenuClick - selected items",l.state.selectedItems),console.log("onContextMenuClick - action : ",t.action)},l.onContextMenu=function(e,t){var a=t.data;return l.state.selectedItems.includes(a)||l.setState({selectedItems:[a]}),!0},l.mouseTrap=a(730),l.state={displayMode:"list",selectedPageSize:10,orderOptions:[{column:"title",label:"Product Name"},{column:"category",label:"Category"},{column:"status",label:"Status"}],pageSizes:[10,20,30,50,100],categories:[{label:"Cakes",value:"Cakes",key:0},{label:"Cupcakes",value:"Cupcakes",key:1},{label:"Desserts",value:"Desserts",key:2}],selectedOrderOption:{column:"title",label:"Product Name"},dropdownSplitOpen:!1,modalOpen:!1,currentPage:1,totalItemCount:0,totalPage:1,search:"",selectedItems:[],lastChecked:null,isLoading:!1},l}return Object(i.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.dataListRender(),this.mouseTrap.bind(["ctrl+a","command+a"],(function(){return e.handleChangeSelectAll(!1)})),this.mouseTrap.bind(["ctrl+d","command+d"],(function(){return e.setState({selectedItems:[]}),!1}))}},{key:"componentWillUnmount",value:function(){this.mouseTrap.unbind("ctrl+a"),this.mouseTrap.unbind("command+a"),this.mouseTrap.unbind("ctrl+d"),this.mouseTrap.unbind("command+d")}},{key:"getIndex",value:function(e,t,a){for(var n=0;n<t.length;n++)if(t[n][a]===e)return n;return-1}},{key:"dataListRender",value:function(){var e=this,t=this.state,a=t.selectedPageSize,n=t.currentPage,c=t.selectedOrderOption,l=t.search;p.a.get("".concat(x,"?pageSize=").concat(a,"&currentPage=").concat(n,"&orderBy=").concat(c.column,"&search=").concat(l)).then((function(e){return e.data})).then((function(t){e.setState({totalPage:t.totalPage,items:t.data,selectedItems:[],totalItemCount:t.totalItem,isLoading:!0})}))}},{key:"render",value:function(){var e=this,t=this.state,a=t.currentPage,n=t.items,c=t.displayMode,l=t.selectedPageSize,s=t.totalItemCount,r=t.selectedOrderOption,i=t.selectedItems,u=t.orderOptions,p=t.pageSizes,g=t.modalOpen,x=t.categories,y=this.props.match,O=(a-1)*l,S=a*l;return this.state.isLoading?m.a.createElement(o.Fragment,null,m.a.createElement("div",{className:"disable-text-selection"},m.a.createElement(b.a,{heading:"menu.data-list",displayMode:c,changeDisplayMode:this.changeDisplayMode,handleChangeSelectAll:this.handleChangeSelectAll,changeOrderBy:this.changeOrderBy,changePageSize:this.changePageSize,selectedPageSize:l,totalItemCount:s,selectedOrderOption:r,match:y,startIndex:O,endIndex:S,selectedItemsLength:i?i.length:0,itemsLength:n?n.length:0,onSearchKey:this.onSearchKey,orderOptions:u,pageSizes:p,toggleModal:this.toggleModal}),m.a.createElement(v.a,{modalOpen:g,toggleModal:this.toggleModal,categories:x}),m.a.createElement(d.a,null,this.state.items.map((function(t){return"imagelist"===e.state.displayMode?m.a.createElement(k.a,{key:t.id,product:t,isSelect:e.state.selectedItems.includes(t.id),collect:N,onCheckItem:e.onCheckItem}):"thumblist"===e.state.displayMode?m.a.createElement(C.a,{key:t.id,product:t,isSelect:e.state.selectedItems.includes(t.id),collect:N,onCheckItem:e.onCheckItem}):m.a.createElement(h.a,{key:t.id,product:t,isSelect:e.state.selectedItems.includes(t.id),onCheckItem:e.onCheckItem,collect:N})}))," ",m.a.createElement(E.a,{currentPage:this.state.currentPage,totalPage:this.state.totalPage,onChangePage:function(t){return e.onChangePage(t)}}),m.a.createElement(f.a,{onContextMenuClick:this.onContextMenuClick,onContextMenu:this.onContextMenu})))):m.a.createElement("div",{className:"loading"})}}]),t}(o.Component);t.default=y}}]);
//# sourceMappingURL=product-data-list.22cbfac9.chunk.js.map