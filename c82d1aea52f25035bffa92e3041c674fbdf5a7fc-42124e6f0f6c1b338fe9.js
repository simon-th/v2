"use strict";(self.webpackChunkgatsby_starter=self.webpackChunkgatsby_starter||[]).push([[833],{208:function(e,t,n){function r(){return r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},r.apply(this,arguments)}function a(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}n.d(t,{Z:function(){return w}});var s=n(1721);function i(e,t){return e.replace(new RegExp("(^|\\s)"+t+"(?:\\s|$)","g"),"$1").replace(/\s+/g," ").replace(/^\s*|\s*$/g,"")}var o=n(7294),l=n(3935),c=!1,u=o.createContext(null),m="unmounted",p="exited",d="entering",f="entered",h="exiting",E=function(e){function t(t,n){var r;r=e.call(this,t,n)||this;var a,s=n&&!n.isMounting?t.enter:t.appear;return r.appearStatus=null,t.in?s?(a=p,r.appearStatus=d):a=f:a=t.unmountOnExit||t.mountOnEnter?m:p,r.state={status:a},r.nextCallback=null,r}(0,s.Z)(t,e),t.getDerivedStateFromProps=function(e,t){return e.in&&t.status===m?{status:p}:null};var n=t.prototype;return n.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},n.componentDidUpdate=function(e){var t=null;if(e!==this.props){var n=this.state.status;this.props.in?n!==d&&n!==f&&(t=d):n!==d&&n!==f||(t=h)}this.updateStatus(!1,t)},n.componentWillUnmount=function(){this.cancelNextCallback()},n.getTimeouts=function(){var e,t,n,r=this.props.timeout;return e=t=n=r,null!=r&&"number"!=typeof r&&(e=r.exit,t=r.enter,n=void 0!==r.appear?r.appear:t),{exit:e,enter:t,appear:n}},n.updateStatus=function(e,t){void 0===e&&(e=!1),null!==t?(this.cancelNextCallback(),t===d?this.performEnter(e):this.performExit()):this.props.unmountOnExit&&this.state.status===p&&this.setState({status:m})},n.performEnter=function(e){var t=this,n=this.props.enter,r=this.context?this.context.isMounting:e,a=this.props.nodeRef?[r]:[l.findDOMNode(this),r],s=a[0],i=a[1],o=this.getTimeouts(),u=r?o.appear:o.enter;!e&&!n||c?this.safeSetState({status:f},(function(){t.props.onEntered(s)})):(this.props.onEnter(s,i),this.safeSetState({status:d},(function(){t.props.onEntering(s,i),t.onTransitionEnd(u,(function(){t.safeSetState({status:f},(function(){t.props.onEntered(s,i)}))}))})))},n.performExit=function(){var e=this,t=this.props.exit,n=this.getTimeouts(),r=this.props.nodeRef?void 0:l.findDOMNode(this);t&&!c?(this.props.onExit(r),this.safeSetState({status:h},(function(){e.props.onExiting(r),e.onTransitionEnd(n.exit,(function(){e.safeSetState({status:p},(function(){e.props.onExited(r)}))}))}))):this.safeSetState({status:p},(function(){e.props.onExited(r)}))},n.cancelNextCallback=function(){null!==this.nextCallback&&(this.nextCallback.cancel(),this.nextCallback=null)},n.safeSetState=function(e,t){t=this.setNextCallback(t),this.setState(e,t)},n.setNextCallback=function(e){var t=this,n=!0;return this.nextCallback=function(r){n&&(n=!1,t.nextCallback=null,e(r))},this.nextCallback.cancel=function(){n=!1},this.nextCallback},n.onTransitionEnd=function(e,t){this.setNextCallback(t);var n=this.props.nodeRef?this.props.nodeRef.current:l.findDOMNode(this),r=null==e&&!this.props.addEndListener;if(n&&!r){if(this.props.addEndListener){var a=this.props.nodeRef?[this.nextCallback]:[n,this.nextCallback],s=a[0],i=a[1];this.props.addEndListener(s,i)}null!=e&&setTimeout(this.nextCallback,e)}else setTimeout(this.nextCallback,0)},n.render=function(){var e=this.state.status;if(e===m)return null;var t=this.props,n=t.children,r=(t.in,t.mountOnEnter,t.unmountOnExit,t.appear,t.enter,t.exit,t.timeout,t.addEndListener,t.onEnter,t.onEntering,t.onEntered,t.onExit,t.onExiting,t.onExited,t.nodeRef,a(t,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]));return o.createElement(u.Provider,{value:null},"function"==typeof n?n(e,r):o.cloneElement(o.Children.only(n),r))},t}(o.Component);function x(){}E.contextType=u,E.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:x,onEntering:x,onEntered:x,onExit:x,onExiting:x,onExited:x},E.UNMOUNTED=m,E.EXITED=p,E.ENTERING=d,E.ENTERED=f,E.EXITING=h;var v=E,g=function(e,t){return e&&t&&t.split(" ").forEach((function(t){return r=t,void((n=e).classList?n.classList.remove(r):"string"==typeof n.className?n.className=i(n.className,r):n.setAttribute("class",i(n.className&&n.className.baseVal||"",r)));var n,r}))},b=function(e){function t(){for(var t,n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return(t=e.call.apply(e,[this].concat(r))||this).appliedClasses={appear:{},enter:{},exit:{}},t.onEnter=function(e,n){var r=t.resolveArguments(e,n),a=r[0],s=r[1];t.removeClasses(a,"exit"),t.addClass(a,s?"appear":"enter","base"),t.props.onEnter&&t.props.onEnter(e,n)},t.onEntering=function(e,n){var r=t.resolveArguments(e,n),a=r[0],s=r[1]?"appear":"enter";t.addClass(a,s,"active"),t.props.onEntering&&t.props.onEntering(e,n)},t.onEntered=function(e,n){var r=t.resolveArguments(e,n),a=r[0],s=r[1]?"appear":"enter";t.removeClasses(a,s),t.addClass(a,s,"done"),t.props.onEntered&&t.props.onEntered(e,n)},t.onExit=function(e){var n=t.resolveArguments(e)[0];t.removeClasses(n,"appear"),t.removeClasses(n,"enter"),t.addClass(n,"exit","base"),t.props.onExit&&t.props.onExit(e)},t.onExiting=function(e){var n=t.resolveArguments(e)[0];t.addClass(n,"exit","active"),t.props.onExiting&&t.props.onExiting(e)},t.onExited=function(e){var n=t.resolveArguments(e)[0];t.removeClasses(n,"exit"),t.addClass(n,"exit","done"),t.props.onExited&&t.props.onExited(e)},t.resolveArguments=function(e,n){return t.props.nodeRef?[t.props.nodeRef.current,e]:[e,n]},t.getClassNames=function(e){var n=t.props.classNames,r="string"==typeof n,a=r?""+(r&&n?n+"-":"")+e:n[e];return{baseClassName:a,activeClassName:r?a+"-active":n[e+"Active"],doneClassName:r?a+"-done":n[e+"Done"]}},t}(0,s.Z)(t,e);var n=t.prototype;return n.addClass=function(e,t,n){var r=this.getClassNames(t)[n+"ClassName"],a=this.getClassNames("enter").doneClassName;"appear"===t&&"done"===n&&a&&(r+=" "+a),"active"===n&&e&&e.scrollTop,r&&(this.appliedClasses[t][n]=r,function(e,t){e&&t&&t.split(" ").forEach((function(t){return r=t,void((n=e).classList?n.classList.add(r):function(e,t){return e.classList?!!t&&e.classList.contains(t):-1!==(" "+(e.className.baseVal||e.className)+" ").indexOf(" "+t+" ")}(n,r)||("string"==typeof n.className?n.className=n.className+" "+r:n.setAttribute("class",(n.className&&n.className.baseVal||"")+" "+r)));var n,r}))}(e,r))},n.removeClasses=function(e,t){var n=this.appliedClasses[t],r=n.base,a=n.active,s=n.done;this.appliedClasses[t]={},r&&g(e,r),a&&g(e,a),s&&g(e,s)},n.render=function(){var e=this.props,t=(e.classNames,a(e,["classNames"]));return o.createElement(v,r({},t,{onEnter:this.onEnter,onEntered:this.onEntered,onEntering:this.onEntering,onExit:this.onExit,onExiting:this.onExiting,onExited:this.onExited}))},t}(o.Component);b.defaultProps={classNames:""};var w=b},4706:function(e,t,n){n.d(t,{Tf:function(){return a},dL:function(){return s},uZ:function(){return i},mr:function(){return o},yh:function(){return l},yF:function(){return c}});var r=n(7294);function a(){return r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",strokeLinecap:"round",strokeLinejoin:"round"},r.createElement("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),r.createElement("path",{d:"M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"}))}function s(){return r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",strokeLinecap:"round",strokeLinejoin:"round"},r.createElement("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),r.createElement("path",{d:"M11 7h-5a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-5"}),r.createElement("line",{x1:"10",y1:"14",x2:"20",y2:"4"}),r.createElement("polyline",{points:"15 4 20 4 20 9"}))}function i(){return r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",strokeLinecap:"round",strokeLinejoin:"round"},r.createElement("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),r.createElement("path",{d:"M14 3v4a1 1 0 0 0 1 1h4"}),r.createElement("path",{d:"M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z"}),r.createElement("line",{x1:"9",y1:"9",x2:"10",y2:"9"}),r.createElement("line",{x1:"9",y1:"13",x2:"15",y2:"13"}),r.createElement("line",{x1:"9",y1:"17",x2:"15",y2:"17"}))}function o(){return r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",strokeLinecap:"round",strokeLinejoin:"round"},r.createElement("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),r.createElement("rect",{x:"4",y:"4",width:"16",height:"16",rx:"4"}),r.createElement("circle",{cx:"12",cy:"12",r:"3"}),r.createElement("line",{x1:"16.5",y1:"7.5",x2:"16.5",y2:"7.501"}))}function l(){return r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",strokeLinecap:"round",strokeLinejoin:"round"},r.createElement("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),r.createElement("rect",{x:"4",y:"4",width:"16",height:"16",rx:"2",fill:"none"}),r.createElement("line",{x1:"8",y1:"11",x2:"8",y2:"16"}),r.createElement("line",{x1:"8",y1:"8",x2:"8",y2:"8.01"}),r.createElement("line",{x1:"12",y1:"16",x2:"12",y2:"11"}),r.createElement("path",{d:"M16 16v-3a2 2 0 0 0 -4 0",fill:"none"}))}function c(){return r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",strokeLinecap:"round",strokeLinejoin:"round"},r.createElement("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),r.createElement("circle",{cx:"12",cy:"12",r:"9"}),r.createElement("path",{d:"M8 11.973c2.5 -1.473 5.5 -.973 7.5 .527"}),r.createElement("path",{d:"M9 15c1.5 -1 4 -1 5 .5"}),r.createElement("path",{d:"M7 9c2 -1 6 -2 10 .5"}))}},2855:function(e,t,n){n.d(t,{Z:function(){return x}});var r=n(7294),a=n(5444),s=[{label:"Home",url:"/"},{label:"Experience",url:"/experience"},{label:"Projects",url:"/projects"}],i="hover:bg-gray-900 hover:scale-1",o="block text-sm font-semibold px-3 py-2 rounded-md transition ease-in-out";function l(e,t){var n=[];return e.forEach((function(e){var s=e.label,i=e.url;n.push(r.createElement(a.rU,{className:t,to:i,title:s},s))})),n}function c(e){var t=e.onClick;return r.createElement("div",{className:"absolute inset-y-0 left-0 flex items-center sm:hidden"},r.createElement("button",{type:"button",className:"inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white","aria-controls":"mobile-menu","aria-expanded":"false",onClick:t},r.createElement("span",{className:"sr-only"},"Open main menu"),r.createElement("svg",{className:"block h-6 w-6",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true"},r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M4 6h16M4 12h16M4 18h16"})),r.createElement("svg",{className:"hidden h-6 w-6",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true"},r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M6 18L18 6M6 6l12 12"}))))}function u(e){var t=e.isVisible?"":"hidden";return r.createElement("div",{className:t+" sm:hidden",id:"mobile-menu"},r.createElement("div",{className:"px-2 pt-2 pb-3 space-y-1"},l(s,o+" "+i+" bg-dark-navy")))}function m(){return r.createElement("div",{className:"flex-shrink-0 flex items-center"},r.createElement("h1",{className:"text-xl font-bold"},"Simon Hoque"))}function p(){return r.createElement("div",{className:"hidden sm:block"},r.createElement("div",{className:"flex space-x-8"},l(s,o+" "+i)))}function d(){var e=r.useState(!1),t=e[0],n=e[1];return r.createElement("nav",{className:"bg-dark-navy sm:bg-transparent sm:bg-gradient-to-b sm:from-dark-navy text-white fixed sm:h-36 w-full top-0 z-10"},r.createElement("div",{className:"max-w-7xl mx-auto px-2 sm:px-6 lg:px-8"},r.createElement("div",{className:"relative flex items-center justify-between h-16"},r.createElement(c,{onClick:function(){n(!t)}}),r.createElement("div",{className:"flex-1 flex items-center justify-center sm:items-stretch sm:justify-start"},r.createElement(m,null)),r.createElement(p,null))),r.createElement(u,{isVisible:t}))}var f=n(4706),h="w-6 h-6 stroke-gray-600 fill-none stroke-1.5 hover:stroke-white hover:scale-110",E="z-5 w-full flex flex-row md:flex-col justify-center md:fixed md:pb-0 md:w-fit transition ease-in-out";function x(e){var t=e.children;return r.createElement("main",{className:"min-h-screen bg-dark-navy text-white"},r.createElement(d,null),r.createElement("div",{className:"container mx-auto py-28 sm:py-36 xl:py-48 xl:pb-auto"},t),r.createElement("div",{className:E+" gap-6 pb-4 md:left-8 md:pb-0 md:bottom-12"},r.createElement("a",{href:"https://www.linkedin.com/in/simon-hoque",className:h,"aria-label":"LinkedIn"},r.createElement(f.yh,null)),r.createElement("a",{href:"https://www.github.com/simon-th",className:h,"aria-label":"GitHub"},r.createElement(f.Tf,null)),r.createElement("a",{href:"https://www.instagram.com/_simonhoque",className:h,"aria-label":"Instagram"},r.createElement(f.mr,null)),r.createElement("a",{href:"https://spoti.fi/3iTN4YT",className:h,"aria-label":"Spotify"},r.createElement(f.yF,null))),r.createElement("div",{className:E+" pb-6 md:bottom-9 md:right-12"},r.createElement("a",{href:"mailto:simon.thoque@gmail.com"},r.createElement("p",{className:"md:rotate-text text-sm text-gray-600 tracking-widest hover:scale-105 hover:text-white"},"simon.thoque@gmail.com"))))}},5273:function(e,t,n){n.d(t,{h1:function(){return r},h3:function(){return a},p:function(){return s},r:function(){return i},j:function(){return o}});var r="text-2xl md:text-3xl font-bold mb-5",a="text-lg md:text-xl font-semibold",s="text-md md:text-base xxl:text-lg",i="relative after:absolute after:bg-gray-400 after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-left after:scale-x-100 hover:after:origin-bottom-right hover:after:scale-x-0 after:transition-transform after:ease-in-out after:duration-300",o="border-gray-800 first:border-0 border-t"},6044:function(e,t,n){n.d(t,{T:function(){return s},y:function(){return i}});var r=n(7294),a=n(5273);function s(e,t){var n=[];return e.forEach((function(e){n.push(r.createElement("li",{className:t},e))})),n}function i(e){var t=[];return e.forEach((function(e){t.push(r.createElement("p",{className:a.p+" mb-4"},e))})),t}}}]);
//# sourceMappingURL=c82d1aea52f25035bffa92e3041c674fbdf5a7fc-42124e6f0f6c1b338fe9.js.map