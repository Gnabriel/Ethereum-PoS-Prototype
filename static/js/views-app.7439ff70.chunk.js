(this["webpackJsonpgogo-react"]=this["webpackJsonpgogo-react"]||[]).push([[98],{1181:function(e,t,n){"use strict";n.r(t);var a=n(194),l=n(195),s=n(197),i=n(196),c=n(198),o=n(6),r=n.n(o),m=n(763),u=n(71),p=n(217),d=n(524),b=n(541),h=n(550),g=n(542),E=n(543),f=n(201),v=n(200),w=n(0),k=n(10),C=n(689),N=function(){return r.a.createElement("div",{className:"position-relative d-none d-sm-inline-block"},r.a.createElement(b.a,{className:"dropdown-menu-right"},r.a.createElement(h.a,{className:"header-icon",color:"empty"},r.a.createElement("i",{className:"simple-icon-grid"})),r.a.createElement(g.a,{className:"position-absolute mt-3",right:!0,id:"iconMenuDropdown"},r.a.createElement(f.c,{to:"/app/dashboards/default",className:"icon-menu-item"},r.a.createElement("i",{className:"iconsminds-shop-4 d-block"})," ",r.a.createElement(v.a,{id:"menu.dashboards"})),r.a.createElement(f.c,{to:"/app/ui",className:"icon-menu-item"},r.a.createElement("i",{className:"iconsminds-pantone d-block"})," ",r.a.createElement(v.a,{id:"menu.ui"})),r.a.createElement(f.c,{to:"/app/ui/charts",className:"icon-menu-item"},r.a.createElement("i",{className:"iconsminds-bar-chart-4 d-block"})," ",r.a.createElement(v.a,{id:"menu.charts"})),r.a.createElement(f.c,{to:"/app/applications/chat",className:"icon-menu-item"},r.a.createElement("i",{className:"iconsminds-speach-bubble d-block"})," ",r.a.createElement(v.a,{id:"menu.chat"})),r.a.createElement(f.c,{to:"/app/applications/survey",className:"icon-menu-item"},r.a.createElement("i",{className:"iconsminds-formula d-block"})," ",r.a.createElement(v.a,{id:"menu.survey"})),r.a.createElement(f.c,{to:"/app/applications/todo",className:"icon-menu-item"},r.a.createElement("i",{className:"iconsminds-check d-block"})," ",r.a.createElement(v.a,{id:"menu.todo"})))))},S=n(476),y=n.n(S),M=[{img:"/assets/img/profile-pic-l-2.jpg",title:"Joisse Kaycee just sent a new comment!",date:"09.04.2018 - 12:45",id:1},{img:"/assets/img/notification-thumb.jpg",title:"1 item is out of stock!",date:"09.04.2018 - 12:45",id:2},{img:"/assets/img/notification-thumb-2.jpg",title:"New order received! It is total $147,20.",date:"09.04.2018 - 12:45",id:3},{img:"/assets/img/notification-thumb-3.jpg",title:"3 items just added to wish list by a user!",date:"09.04.2018 - 12:45",id:4}],H=function(e){var t=e.img,n=e.title,a=e.date;return r.a.createElement("div",{className:"d-flex flex-row mb-3 pb-3 border-bottom"},r.a.createElement("a",{href:"/app/pages/details"},r.a.createElement("img",{src:t,alt:n,className:"img-thumbnail list-thumbnail xsmall border-0 rounded-circle"})),r.a.createElement("div",{className:"pl-3 pr-2"},r.a.createElement("a",{href:"/app/pages/details"},r.a.createElement("p",{className:"font-weight-medium mb-1"},n),r.a.createElement("p",{className:"text-muted mb-0 text-small"},a))))},O=function(){return r.a.createElement("div",{className:"position-relative d-inline-block"},r.a.createElement(b.a,{className:"dropdown-menu-right"},r.a.createElement(h.a,{className:"header-icon notificationButton",color:"empty"},r.a.createElement("i",{className:"simple-icon-bell"}),r.a.createElement("span",{className:"count"},"3")),r.a.createElement(g.a,{className:"position-absolute mt-3 scroll",right:!0,id:"notificationDropdown"},r.a.createElement(y.a,{options:{suppressScrollX:!0,wheelPropagation:!1}},M.map((function(e,t){return r.a.createElement(H,Object.assign({key:t},e))}))))))},j=n(453),x=n.n(j),L=(n(448),n(477)),F=function(e){function t(e){var n;return Object(a.a)(this,t),(n=Object(s.a)(this,Object(i.a)(t).call(this,e))).toggle=function(){n.setState((function(e){return{tooltipOpen:!e.tooltipOpen}}))},n.getColor=function(){return localStorage.getItem(k.n)?localStorage.getItem(k.n):k.a},n.changeMode=function(){var e=n.getColor();e.indexOf("dark")>-1?e=e.replace("dark","light"):e.indexOf("light")>-1&&(e=e.replace("light","dark")),n.setState({switchChecked:e.indexOf("dark")>-1},(function(){localStorage.setItem(k.n,e),setTimeout((function(){window.location.reload()}),500)}))},n.state={switchChecked:!1,tooltipOpen:!1},n}return Object(c.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this.getColor();this.setState({switchChecked:e.indexOf("dark")>-1})}},{key:"render",value:function(){return r.a.createElement("div",{className:"d-none d-md-inline-block align-middle mr-3"},r.a.createElement(x.a,{id:"Tooltip-Switch",className:"custom-switch custom-switch-primary custom-switch-small",checked:this.state.switchChecked,onChange:this.changeMode}),r.a.createElement(L.a,{placement:"left",isOpen:this.state.tooltipOpen,target:"Tooltip-Switch",toggle:this.toggle},"Dark Mode"))}}]),t}(o.Component),I=n(30),z=function(e){function t(e){var n;return Object(a.a)(this,t),(n=Object(s.a)(this,Object(i.a)(t).call(this,e))).handleChangeLocale=function(e,t){n.props.changeLocale(e),t!==Object(I.c)().direction&&(Object(I.e)(t),setTimeout((function(){window.location.reload()}),500))},n.isInFullScreen=function(){return document.fullscreenElement&&null!==document.fullscreenElement||document.webkitFullscreenElement&&null!==document.webkitFullscreenElement||document.mozFullScreenElement&&null!==document.mozFullScreenElement||document.msFullscreenElement&&null!==document.msFullscreenElement},n.handleSearchIconClick=function(e){if(window.innerWidth<k.j){var t=e.target;e.target.classList.contains("search")||(e.target.parentElement.classList.contains("search")?t=e.target.parentElement:e.target.parentElement.parentElement.classList.contains("search")&&(t=e.target.parentElement.parentElement)),t.classList.contains("mobile-view")?(n.search(),t.classList.remove("mobile-view"),n.removeEventsSearch()):(t.classList.add("mobile-view"),n.addEventsSearch())}else n.search()},n.addEventsSearch=function(){document.addEventListener("click",n.handleDocumentClickSearch,!0)},n.removeEventsSearch=function(){document.removeEventListener("click",n.handleDocumentClickSearch,!0)},n.handleDocumentClickSearch=function(e){var t=!1;if(e.target&&e.target.classList&&(e.target.classList.contains("navbar")||e.target.classList.contains("simple-icon-magnifier"))?(t=!0,e.target.classList.contains("simple-icon-magnifier")&&n.search()):e.target.parentElement&&e.target.parentElement.classList&&e.target.parentElement.classList.contains("search")&&(t=!0),!t){var a=document.querySelector(".mobile-view");a&&a.classList&&a.classList.remove("mobile-view"),n.removeEventsSearch(),n.setState({searchKeyword:""})}},n.handleSearchInputChange=function(e){n.setState({searchKeyword:e.target.value})},n.handleSearchInputKeyPress=function(e){"Enter"===e.key&&n.search()},n.search=function(){n.props.history.push(k.k+"/"+n.state.searchKeyword),n.setState({searchKeyword:""})},n.toggleFullScreen=function(){var e=n.isInFullScreen(),t=document.documentElement;e?document.exitFullscreen?document.exitFullscreen():document.webkitExitFullscreen?document.webkitExitFullscreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.msExitFullscreen&&document.msExitFullscreen():t.requestFullscreen?t.requestFullscreen():t.mozRequestFullScreen?t.mozRequestFullScreen():t.webkitRequestFullScreen?t.webkitRequestFullScreen():t.msRequestFullscreen&&t.msRequestFullscreen(),n.setState({isInFullScreen:!e})},n.handleLogout=function(){n.props.logoutUser(n.props.history)},n.menuButtonClick=function(e,t,a){e.preventDefault(),setTimeout((function(){var e=document.createEvent("HTMLEvents");e.initEvent("resize",!1,!1),window.dispatchEvent(e)}),350),n.props.setContainerClassnames(++t,a,n.props.selectedMenuHasSubItems)},n.mobileMenuButtonClick=function(e,t){e.preventDefault(),n.props.clickOnMobileMenu(t)},n.state={isInFullScreen:!1,searchKeyword:""},n}return Object(c.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this,t=this.props,n=t.containerClassnames,a=t.menuClickCount,l=t.locale,s=this.props.intl.messages;return r.a.createElement("nav",{className:"navbar fixed-top"},r.a.createElement("div",{className:"d-flex align-items-center navbar-left"},r.a.createElement(f.c,{to:"#",className:"menu-button d-none d-md-block",onClick:function(t){return e.menuButtonClick(t,a,n)}},r.a.createElement(C.c,null)),r.a.createElement(f.c,{to:"#",className:"menu-button-mobile d-xs-block d-sm-block d-md-none",onClick:function(t){return e.mobileMenuButtonClick(t,n)}},r.a.createElement(C.d,null)),r.a.createElement("div",{className:"search","data-search-path":"/app/pages/search"},r.a.createElement(d.a,{name:"searchKeyword",id:"searchKeyword",placeholder:s["menu.search"],value:this.state.searchKeyword,onChange:function(t){return e.handleSearchInputChange(t)},onKeyPress:function(t){return e.handleSearchInputKeyPress(t)}}),r.a.createElement("span",{className:"search-icon",onClick:function(t){return e.handleSearchIconClick(t)}},r.a.createElement("i",{className:"simple-icon-magnifier"}))),r.a.createElement("div",{className:"d-inline-block"},r.a.createElement(b.a,{className:"ml-2"},r.a.createElement(h.a,{caret:!0,color:"light",size:"sm",className:"language-button"},r.a.createElement("span",{className:"name"},l.toUpperCase())),r.a.createElement(g.a,{className:"mt-3",right:!0},k.i.map((function(t){return r.a.createElement(E.a,{onClick:function(){return e.handleChangeLocale(t.id,t.direction)},key:t.id},t.name)}))))),r.a.createElement("div",{className:"position-relative d-none d-none d-lg-inline-block"},r.a.createElement("a",{className:"btn btn-outline-primary btn-sm ml-2",target:"_top",href:"https://themeforest.net/cart/configure_before_adding/22544383?license=regular&ref=ColoredStrategies&size=source"},r.a.createElement(v.a,{id:"user.buy"})))),r.a.createElement("a",{className:"navbar-logo",href:"/"},r.a.createElement("span",{className:"logo d-none d-xs-block"}),r.a.createElement("span",{className:"logo-mobile d-block d-xs-none"})),r.a.createElement("div",{className:"navbar-right"},k.f&&r.a.createElement(F,null),r.a.createElement("div",{className:"header-icons d-inline-block align-middle"},r.a.createElement(N,null),r.a.createElement(O,null),r.a.createElement("button",{className:"header-icon btn btn-empty d-none d-sm-inline-block",type:"button",id:"fullScreenButton",onClick:this.toggleFullScreen},this.state.isInFullScreen?r.a.createElement("i",{className:"simple-icon-size-actual d-block"}):r.a.createElement("i",{className:"simple-icon-size-fullscreen d-block"}))),r.a.createElement("div",{className:"user d-inline-block"},r.a.createElement(b.a,{className:"dropdown-menu-right"},r.a.createElement(h.a,{className:"p-0",color:"empty"},r.a.createElement("span",{className:"name mr-1"},"Sarah Kortney"),r.a.createElement("span",null,r.a.createElement("img",{alt:"Profile",src:"/assets/img/profile-pic-l.jpg"}))),r.a.createElement(g.a,{className:"mt-3",right:!0},r.a.createElement(E.a,null,"Account"),r.a.createElement(E.a,null,"Features"),r.a.createElement(E.a,null,"History"),r.a.createElement(E.a,null,"Support"),r.a.createElement(E.a,{divider:!0}),r.a.createElement(E.a,{onClick:function(){return e.handleLogout()}},"Sign out"))))))}}]),t}(o.Component),A=Object(p.d)(Object(u.b)((function(e){var t=e.menu,n=e.settings;return{containerClassnames:t.containerClassnames,menuClickCount:t.menuClickCount,selectedMenuHasSubItems:t.selectedMenuHasSubItems,locale:n.locale}}),{setContainerClassnames:w.Hb,clickOnMobileMenu:w.kb,logoutUser:w.Ab,changeLocale:w.ib})(z)),P=n(219),V=n(39),B=n.n(V),D=n(544),q=n(545),W=n(454),K=n(190),R=n.n(K),Z=[{id:"dashboards",icon:"iconsminds-shop-4",label:"menu.dashboards",to:"/app/dashboards",subs:[{icon:"simple-icon-briefcase",label:"menu.default",to:"/app/dashboards/default"},{icon:"simple-icon-pie-chart",label:"menu.analytics",to:"/app/dashboards/analytics"},{icon:"simple-icon-basket-loaded",label:"menu.ecommerce",to:"/app/dashboards/ecommerce"},{icon:"simple-icon-doc",label:"menu.content",to:"/app/dashboards/content"}]},{id:"pages",icon:"iconsminds-digital-drawing",label:"menu.pages",to:"/app/pages",subs:[{id:"pages-authorization",label:"menu.authorization",to:"/user",subs:[{icon:"simple-icon-user-following",label:"menu.login",to:"/user/login",newWindow:!0},{icon:"simple-icon-user-follow",label:"menu.register",to:"/user/register",newWindow:!0},{icon:"simple-icon-user-following",label:"menu.forgot-password",to:"/user/forgot-password",newWindow:!0},{icon:"simple-icon-user-unfollow",label:"menu.reset-password",to:"/user/reset-password",newWindow:!0}]},{id:"pages-product",label:"menu.product",to:"/app/pages/product",subs:[{icon:"simple-icon-credit-card",label:"menu.data-list",to:"/app/pages/product/data-list"},{icon:"simple-icon-list",label:"menu.thumb-list",to:"/app/pages/product/thumb-list"},{icon:"simple-icon-grid",label:"menu.image-list",to:"/app/pages/product/image-list"},{icon:"simple-icon-picture",label:"menu.details",to:"/app/pages/product/details"},{icon:"simple-icon-book-open",label:"menu.details-alt",to:"/app/pages/product/details-alt"}]},{id:"pages-profile",label:"menu.profile",to:"/app/pages/profile",subs:[{icon:"simple-icon-share",label:"menu.social",to:"/app/pages/profile/social"},{icon:"simple-icon-link",label:"menu.portfolio",to:"/app/pages/profile/portfolio"}]},{id:"pages-blog",label:"menu.blog",to:"/app/pages/blog",subs:[{icon:"simple-icon-share",label:"menu.blog-list",to:"/app/pages/blog/blog-list"},{icon:"simple-icon-link",label:"menu.blog-detail",to:"/app/pages/blog/blog-detail"}]},{id:"pages-miscellaneous",label:"menu.miscellaneous",to:"/app/pages/miscellaneous",subs:[{icon:"simple-icon-question",label:"menu.faq",to:"/app/pages/miscellaneous/faq"},{icon:"simple-icon-graduation",label:"menu.knowledge-base",to:"/app/pages/miscellaneous/knowledge-base"},{icon:"simple-icon-diamond",label:"menu.prices",to:"/app/pages/miscellaneous/prices"},{icon:"simple-icon-magnifier",label:"menu.search",to:"/app/pages/miscellaneous/search"},{icon:"simple-icon-envelope-open",label:"menu.mailing",to:"/app/pages/miscellaneous/mailing"},{icon:"simple-icon-bag",label:"menu.invoice",to:"/app/pages/miscellaneous/invoice"},{icon:"simple-icon-exclamation",label:"menu.error",to:"/error",newWindow:!0}]}]},{id:"applications",icon:"iconsminds-air-balloon-1",label:"menu.applications",to:"/app/applications",subs:[{icon:"simple-icon-check",label:"menu.todo",to:"/app/applications/todo"},{icon:"simple-icon-calculator",label:"menu.survey",to:"/app/applications/survey"},{icon:"simple-icon-bubbles",label:"menu.chat",to:"/app/applications/chat"}]},{id:"ui",icon:"iconsminds-pantone",label:"menu.ui",to:"/app/ui",subs:[{id:"ui-forms",label:"menu.forms",to:"/app/ui/forms",subs:[{icon:"simple-icon-notebook",label:"menu.layouts",to:"/app/ui/forms/layouts"},{icon:"simple-icon-puzzle",label:"menu.components",to:"/app/ui/forms/components"},{icon:"simple-icon-check",label:"menu.validations",to:"/app/ui/forms/validations"},{icon:"simple-icon-magic-wand",label:"menu.wizard",to:"/app/ui/forms/wizard"}]},{id:"ui-components",label:"menu.components",to:"/app/ui/components",subs:[{icon:"simple-icon-bell",label:"menu.alerts",to:"/app/ui/components/alerts"},{icon:"simple-icon-badge",label:"menu.badges",to:"/app/ui/components/badges"},{icon:"simple-icon-control-play",label:"menu.buttons",to:"/app/ui/components/buttons"},{icon:"simple-icon-layers",label:"menu.cards",to:"/app/ui/components/cards"},{icon:"simple-icon-picture",label:"menu.carousel",to:"/app/ui/components/carousel"},{icon:"simple-icon-chart",label:"menu.charts",to:"/app/ui/components/charts"},{icon:"simple-icon-arrow-up",label:"menu.collapse",to:"/app/ui/components/collapse"},{icon:"simple-icon-arrow-down",label:"menu.dropdowns",to:"/app/ui/components/dropdowns"},{icon:"simple-icon-book-open",label:"menu.editors",to:"/app/ui/components/editors"},{icon:"simple-icon-star",label:"menu.icons",to:"/app/ui/components/icons"},{icon:"simple-icon-note",label:"menu.input-groups",to:"/app/ui/components/input-groups"},{icon:"simple-icon-screen-desktop",label:"menu.jumbotron",to:"/app/ui/components/jumbotron"},{icon:"simple-icon-map",label:"menu.maps",to:"/app/ui/components/maps"},{icon:"simple-icon-docs",label:"menu.modal",to:"/app/ui/components/modal"},{icon:"simple-icon-cursor",label:"menu.navigation",to:"/app/ui/components/navigation"},{icon:"simple-icon-pin",label:"menu.popover-tooltip",to:"/app/ui/components/popover-tooltip"},{icon:"simple-icon-shuffle",label:"menu.sortable",to:"/app/ui/components/sortable"},{icon:"simple-icon-grid",label:"menu.tables",to:"/app/ui/components/tables"}]}]},{id:"menu",icon:"iconsminds-three-arrow-fork",label:"menu.menu",to:"/app/menu",subs:[{icon:"simple-icon-logout",label:"menu.types",to:"/app/menu/types"},{icon:"simple-icon-layers",label:"menu.levels",to:"/app/menu/levels",subs:[{icon:"simple-icon-arrow-right",label:"menu.third-level-1",to:"/app/menu/levels/third-level-1"},{icon:"simple-icon-arrow-right",label:"menu.third-level-2",to:"/app/menu/levels/third-level-2"},{icon:"simple-icon-arrow-right",label:"menu.third-level-3",to:"/app/menu/levels/third-level-3"}]}]},{id:"blankpage",icon:"iconsminds-bucket",label:"menu.blank-page",to:"/app/blank-page"},{id:"docs",icon:"iconsminds-library",label:"menu.docs",to:"https://gogo-react-docs.coloredstrategies.com/",newWindow:!0}],_=function(e){function t(e){var n;return Object(a.a)(this,t),(n=Object(s.a)(this,Object(i.a)(t).call(this,e))).handleWindowResize=function(e){if(!e||e.isTrusted){var t=n.props.containerClassnames,a=n.getMenuClassesForResize(t);n.props.setContainerClassnames(0,a.join(" "),n.props.selectedMenuHasSubItems)}},n.handleDocumentClick=function(e){var t=n.getContainer(),a=!1;(e.target&&e.target.classList&&(e.target.classList.contains("menu-button")||e.target.classList.contains("menu-button-mobile"))||e.target.parentElement&&e.target.parentElement.classList&&(e.target.parentElement.classList.contains("menu-button")||e.target.parentElement.classList.contains("menu-button-mobile"))||e.target.parentElement&&e.target.parentElement.parentElement&&e.target.parentElement.parentElement.classList&&(e.target.parentElement.parentElement.classList.contains("menu-button")||e.target.parentElement.parentElement.classList.contains("menu-button-mobile")))&&(a=!0),t.contains(e.target)||t===e.target||a||(n.setState({viewingParentMenu:""}),n.toggle())},n.getMenuClassesForResize=function(e){var t=n.props,a=t.menuHiddenBreakpoint,l=t.subHiddenBreakpoint,s=e.split(" ").filter((function(e){return""!==e})),i=window.innerWidth;return i<a?s.push("menu-mobile"):i<l?(s=s.filter((function(e){return"menu-mobile"!==e}))).includes("menu-default")&&!s.includes("menu-sub-hidden")&&s.push("menu-sub-hidden"):(s=s.filter((function(e){return"menu-mobile"!==e}))).includes("menu-default")&&s.includes("menu-sub-hidden")&&(s=s.filter((function(e){return"menu-sub-hidden"!==e}))),s},n.getContainer=function(){return B.a.findDOMNode(Object(P.a)(n))},n.toggle=function(){var e=n.getIsHasSubItem();n.props.changeSelectedMenuHasSubItems(e);var t=n.props,a=t.containerClassnames,l=t.menuClickCount,s=a?a.split(" ").filter((function(e){return""!==e})):"",i=-1;e?s.includes("menu-sub-hidden")&&3===l?i=2:(s.includes("menu-hidden")||s.includes("menu-mobile"))&&(i=0):!s.includes("menu-default")||l%4!==0&&l%4!==3?!s.includes("menu-sub-hidden")||2!==l&&3!==l?(s.includes("menu-hidden")||s.includes("menu-mobile"))&&(i=0):i=0:i=1,i>=0&&n.props.setContainerClassnames(i,a,e)},n.handleProps=function(){n.addEvents()},n.addEvents=function(){["click","touchstart","touchend"].forEach((function(e){return document.addEventListener(e,n.handleDocumentClick,!0)}))},n.removeEvents=function(){["click","touchstart","touchend"].forEach((function(e){return document.removeEventListener(e,n.handleDocumentClick,!0)}))},n.setSelectedLiActive=function(e){var t=document.querySelector(".sub-menu  li.active");null!=t&&t.classList.remove("active");var a=document.querySelector(".third-level-menu  li.active");null!=a&&a.classList.remove("active");var l=document.querySelector(".third-level-menu  a.active");null!=l&&l.parentElement.classList.add("active");var s=document.querySelector(".sub-menu  a.active");if(null!=s)s.parentElement.classList.add("active"),n.setState({selectedParentMenu:s.parentElement.parentElement.getAttribute("data-parent")},e);else{var i=document.querySelector(".main-menu  li a.active");null!=i?n.setState({selectedParentMenu:i.getAttribute("data-flag")},e):""===n.state.selectedParentMenu&&n.setState({selectedParentMenu:Z[0].id},e)}},n.setHasSubItemStatus=function(){var e=n.getIsHasSubItem();n.props.changeSelectedMenuHasSubItems(e),n.toggle()},n.getIsHasSubItem=function(){var e=n.state.selectedParentMenu,t=Z.find((function(t){return t.id===e}));return!!t&&!!(t&&t.subs&&t.subs.length>0)},n.openSubMenu=function(e,t){var a=t.id,l=t.subs&&t.subs.length>0;if(n.props.changeSelectedMenuHasSubItems(l),l){e.preventDefault();var s=n.props,i=s.containerClassnames,c=s.menuClickCount,o=i?i.split(" ").filter((function(e){return""!==e})):"";o.includes("menu-mobile")?n.props.addContainerClassname("sub-show-temporary",i):!o.includes("menu-sub-hidden")||2!==c&&0!==c?!o.includes("menu-hidden")||1!==c&&3!==c?!o.includes("menu-default")||o.includes("menu-sub-hidden")||1!==c&&3!==c||n.props.setContainerClassnames(0,i,l):n.props.setContainerClassnames(2,i,l):n.props.setContainerClassnames(3,i,l),n.setState({viewingParentMenu:a})}else n.setState({viewingParentMenu:a,selectedParentMenu:a}),n.toggle()},n.toggleMenuCollapse=function(e,t){e.preventDefault();var a=n.state.collapsedMenus;return a.indexOf(t)>-1?n.setState({collapsedMenus:a.filter((function(e){return e!==t}))}):(a.push(t),n.setState({collapsedMenus:a})),!1},n.state={selectedParentMenu:"",viewingParentMenu:"",collapsedMenus:[]},n}return Object(c.a)(t,e),Object(l.a)(t,[{key:"componentDidUpdate",value:function(e){this.props.location.pathname!==e.location.pathname&&(this.setSelectedLiActive(this.setHasSubItemStatus),window.scrollTo(0,0)),this.handleProps()}},{key:"componentDidMount",value:function(){window.addEventListener("resize",this.handleWindowResize),this.handleWindowResize(),this.handleProps(),this.setSelectedLiActive(this.setHasSubItemStatus)}},{key:"componentWillUnmount",value:function(){this.removeEvents(),window.removeEventListener("resize",this.handleWindowResize)}},{key:"render",value:function(){var e=this,t=this.state,n=t.selectedParentMenu,a=t.viewingParentMenu,l=t.collapsedMenus;return r.a.createElement("div",{className:"sidebar"},r.a.createElement("div",{className:"main-menu"},r.a.createElement("div",{className:"scroll"},r.a.createElement(y.a,{options:{suppressScrollX:!0,wheelPropagation:!1}},r.a.createElement(D.a,{vertical:!0,className:"list-unstyled"},Z&&Z.map((function(t){return r.a.createElement(q.a,{key:t.id,className:R()({active:n===t.id&&""===a||a===t.id})},t.newWindow?r.a.createElement("a",{href:t.to,rel:"noopener noreferrer",target:"_blank"},r.a.createElement("i",{className:t.icon})," ",r.a.createElement(v.a,{id:t.label})):r.a.createElement(f.c,{to:t.to,onClick:function(n){return e.openSubMenu(n,t)},"data-flag":t.id},r.a.createElement("i",{className:t.icon})," ",r.a.createElement(v.a,{id:t.label})))})))))),r.a.createElement("div",{className:"sub-menu"},r.a.createElement("div",{className:"scroll"},r.a.createElement(y.a,{options:{suppressScrollX:!0,wheelPropagation:!1}},Z&&Z.map((function(t){return r.a.createElement(D.a,{key:t.id,className:R()({"d-block":e.state.selectedParentMenu===t.id&&""===e.state.viewingParentMenu||e.state.viewingParentMenu===t.id}),"data-parent":t.id},t.subs&&t.subs.map((function(n,a){return r.a.createElement(q.a,{key:"".concat(t.id,"_").concat(a),className:"".concat(n.subs&&n.subs.length>0?"has-sub-item":"")},n.newWindow?r.a.createElement("a",{href:n.to,rel:"noopener noreferrer",target:"_blank"},r.a.createElement("i",{className:n.icon})," ",r.a.createElement(v.a,{id:n.label})):n.subs&&n.subs.length>0?r.a.createElement(o.Fragment,null,r.a.createElement(f.c,{className:"rotate-arrow-icon opacity-50 ".concat(-1===l.indexOf("".concat(t.id,"_").concat(a))?"":"collapsed"),to:n.to,id:"".concat(t.id,"_").concat(a),onClick:function(n){return e.toggleMenuCollapse(n,"".concat(t.id,"_").concat(a))}},r.a.createElement("i",{className:"simple-icon-arrow-down"})," ",r.a.createElement(v.a,{id:n.label})),r.a.createElement(W.a,{isOpen:-1===l.indexOf("".concat(t.id,"_").concat(a))},r.a.createElement(D.a,{className:"third-level-menu"},n.subs.map((function(e,n){return r.a.createElement(q.a,{key:"".concat(t.id,"_").concat(a,"_").concat(n)},e.newWindow?r.a.createElement("a",{href:e.to,rel:"noopener noreferrer",target:"_blank"},r.a.createElement("i",{className:e.icon})," ",r.a.createElement(v.a,{id:e.label})):r.a.createElement(f.c,{to:e.to},r.a.createElement("i",{className:e.icon})," ",r.a.createElement(v.a,{id:e.label})))}))))):r.a.createElement(f.c,{to:n.to},r.a.createElement("i",{className:n.icon})," ",r.a.createElement(v.a,{id:n.label})))})))}))))))}}]),t}(o.Component),T=Object(m.g)(Object(u.b)((function(e){var t=e.menu;return{containerClassnames:t.containerClassnames,subHiddenBreakpoint:t.subHiddenBreakpoint,menuHiddenBreakpoint:t.menuHiddenBreakpoint,menuClickCount:t.menuClickCount,selectedMenuHasSubItems:t.selectedMenuHasSubItems}}),{setContainerClassnames:w.Hb,addContainerClassname:w.cb,changeDefaultClassnames:w.hb,changeSelectedMenuHasSubItems:w.jb})(_)),U=function(e){function t(){return Object(a.a)(this,t),Object(s.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(c.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.containerClassnames;return r.a.createElement("div",{id:"app-container",className:e},r.a.createElement(A,{history:this.props.history}),r.a.createElement(T,null),r.a.createElement("main",null,r.a.createElement("div",{className:"container-fluid"},this.props.children)))}}]),t}(o.Component),J=Object(m.g)(Object(u.b)((function(e){return{containerClassnames:e.menu.containerClassnames}}),{})(U)),X=r.a.lazy((function(){return n.e(59).then(n.bind(null,1171))})),$=r.a.lazy((function(){return n.e(77).then(n.bind(null,1172))})),G=r.a.lazy((function(){return n.e(22).then(n.bind(null,1173))})),Q=r.a.lazy((function(){return n.e(90).then(n.bind(null,1174))})),Y=r.a.lazy((function(){return n.e(65).then(n.bind(null,1175))})),ee=r.a.lazy((function(){return n.e(23).then(n.bind(null,1176))})),te=function(e){function t(){return Object(a.a)(this,t),Object(s.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(c.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.match;return r.a.createElement(J,null,r.a.createElement("div",{className:"dashboard-wrapper"},r.a.createElement(o.Suspense,{fallback:r.a.createElement("div",{className:"loading"})},r.a.createElement(m.d,null,r.a.createElement(m.a,{exact:!0,from:"".concat(e.url,"/"),to:"".concat(e.url,"/dashboards")}),r.a.createElement(m.b,{path:"".concat(e.url,"/dashboards"),render:function(e){return r.a.createElement(X,e)}}),r.a.createElement(m.b,{path:"".concat(e.url,"/applications"),render:function(e){return r.a.createElement(G,e)}}),r.a.createElement(m.b,{path:"".concat(e.url,"/pages"),render:function(e){return r.a.createElement($,e)}}),r.a.createElement(m.b,{path:"".concat(e.url,"/ui"),render:function(e){return r.a.createElement(Q,e)}}),r.a.createElement(m.b,{path:"".concat(e.url,"/menu"),render:function(e){return r.a.createElement(Y,e)}}),r.a.createElement(m.b,{path:"".concat(e.url,"/blank-page"),render:function(e){return r.a.createElement(ee,e)}}),r.a.createElement(m.a,{to:"/error"})))))}}]),t}(o.Component);t.default=Object(m.g)(Object(u.b)((function(e){return{containerClassnames:e.menu.containerClassnames}}),{})(te))},200:function(e,t,n){"use strict";var a=n(6),l=n.n(a),s=n(217);t.a=Object(s.d)((function(e){return l.a.createElement(s.a,e)}),{withRef:!1})},689:function(e,t,n){"use strict";var a=n(6),l=n.n(a),s=function(){return l.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 19 19"},l.a.createElement("path",{className:"view-icon-svg",d:"M17.5,3H.5a.5.5,0,0,1,0-1h17a.5.5,0,0,1,0,1Z"}),l.a.createElement("path",{className:"view-icon-svg",d:"M17.5,10H.5a.5.5,0,0,1,0-1h17a.5.5,0,0,1,0,1Z"}),l.a.createElement("path",{className:"view-icon-svg",d:"M17.5,17H.5a.5.5,0,0,1,0-1h17a.5.5,0,0,1,0,1Z"}))},i=function(){return l.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 19 19"},l.a.createElement("path",{className:"view-icon-svg",d:"M17.5,3H6.5a.5.5,0,0,1,0-1h11a.5.5,0,0,1,0,1Z"}),l.a.createElement("path",{className:"view-icon-svg",d:"M3,2V3H1V2H3m.12-1H.88A.87.87,0,0,0,0,1.88V3.12A.87.87,0,0,0,.88,4H3.12A.87.87,0,0,0,4,3.12V1.88A.87.87,0,0,0,3.12,1Z"}),l.a.createElement("path",{className:"view-icon-svg",d:"M3,9v1H1V9H3m.12-1H.88A.87.87,0,0,0,0,8.88v1.24A.87.87,0,0,0,.88,11H3.12A.87.87,0,0,0,4,10.12V8.88A.87.87,0,0,0,3.12,8Z"}),l.a.createElement("path",{className:"view-icon-svg",d:"M3,16v1H1V16H3m.12-1H.88a.87.87,0,0,0-.88.88v1.24A.87.87,0,0,0,.88,18H3.12A.87.87,0,0,0,4,17.12V15.88A.87.87,0,0,0,3.12,15Z"}),l.a.createElement("path",{className:"view-icon-svg",d:"M17.5,10H6.5a.5.5,0,0,1,0-1h11a.5.5,0,0,1,0,1Z"}),l.a.createElement("path",{className:"view-icon-svg",d:"M17.5,17H6.5a.5.5,0,0,1,0-1h11a.5.5,0,0,1,0,1Z"}))},c=function(){return l.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 19 19"},l.a.createElement("path",{className:"view-icon-svg",d:"M7,2V8H1V2H7m.12-1H.88A.87.87,0,0,0,0,1.88V8.12A.87.87,0,0,0,.88,9H7.12A.87.87,0,0,0,8,8.12V1.88A.87.87,0,0,0,7.12,1Z"}),l.a.createElement("path",{className:"view-icon-svg",d:"M17,2V8H11V2h6m.12-1H10.88a.87.87,0,0,0-.88.88V8.12a.87.87,0,0,0,.88.88h6.24A.87.87,0,0,0,18,8.12V1.88A.87.87,0,0,0,17.12,1Z"}),l.a.createElement("path",{className:"view-icon-svg",d:"M7,12v6H1V12H7m.12-1H.88a.87.87,0,0,0-.88.88v6.24A.87.87,0,0,0,.88,19H7.12A.87.87,0,0,0,8,18.12V11.88A.87.87,0,0,0,7.12,11Z"}),l.a.createElement("path",{className:"view-icon-svg",d:"M17,12v6H11V12h6m.12-1H10.88a.87.87,0,0,0-.88.88v6.24a.87.87,0,0,0,.88.88h6.24a.87.87,0,0,0,.88-.88V11.88a.87.87,0,0,0-.88-.88Z"}))},o=function(){return l.a.createElement(a.Fragment,null,l.a.createElement("svg",{className:"main",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 9 17"},l.a.createElement("rect",{x:"0.48",y:"0.5",width:"7",height:"1"}),l.a.createElement("rect",{x:"0.48",y:"7.5",width:"7",height:"1"}),l.a.createElement("rect",{x:"0.48",y:"15.5",width:"7",height:"1"})),l.a.createElement("svg",{className:"sub",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 18 17"},l.a.createElement("rect",{x:"1.56",y:"0.5",width:"16",height:"1"}),l.a.createElement("rect",{x:"1.56",y:"7.5",width:"16",height:"1"}),l.a.createElement("rect",{x:"1.56",y:"15.5",width:"16",height:"1"})))},r=function(){return l.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 26 17"},l.a.createElement("rect",{x:"0.5",y:"0.5",width:"25",height:"1"}),l.a.createElement("rect",{x:"0.5",y:"7.5",width:"25",height:"1"}),l.a.createElement("rect",{x:"0.5",y:"15.5",width:"25",height:"1"}))};n.d(t,"a",(function(){return s})),n.d(t,"e",(function(){return i})),n.d(t,"b",(function(){return c})),n.d(t,"c",(function(){return o})),n.d(t,"d",(function(){return r}))}}]);
//# sourceMappingURL=views-app.7439ff70.chunk.js.map