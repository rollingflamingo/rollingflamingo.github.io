(this["webpackJsonprollingflamingo.github.io"]=this["webpackJsonprollingflamingo.github.io"]||[]).push([[0],{25:function(e,t,n){},26:function(e,t,n){},27:function(e,t,n){},31:function(e,t,n){},32:function(e,t,n){},33:function(e,t,n){},36:function(e,t,n){},37:function(e,t,n){},38:function(e,t,n){},39:function(e,t,n){"use strict";n.r(t);var c=n(0),i=n(2),r=n.n(i),a=n(13),o=n.n(a),s=(n(25),n(3)),l=n(4),h=n(9),u=n(6),d=n(5),b=(n(26),n(27),i.createContext({theme:"light",themeToggle:function(){}})),j=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(c.jsxs)("div",{className:"hero-banner ".concat(this.context.theme),children:[Object(c.jsx)("div",{className:"left-container",children:this.props.leftContent}),Object(c.jsx)("div",{className:"right-container",children:this.props.rightContent})]})}}]),n}(i.Component);j.contextType=b;var p=n(8),f=n(14),O=n(15),m=n(16),v=n(17),g=n(18);p.b.add(f.faLinkedin,O.faGithub,m.faDocker,v.faMoon,g.faSun);n(31);var x=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(c.jsxs)("div",{className:"disclaimer ".concat(this.context.theme),children:[Object(c.jsx)("div",{className:"disclaimer-header",children:Object(c.jsx)("h2",{children:this.props.title})}),Object(c.jsx)("div",{className:"disclaimer-body",children:this.props.children})]})}}]),n}(i.Component);x.contextType=b;n(32);var y=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(c.jsx)("div",{className:"milestone".concat(this.props.scrollable?" scrollable ":" ").concat(this.context.theme),children:Object(c.jsx)("ul",{children:this.props.steps.map((function(e,t){return Object(c.jsx)("li",{children:e},t)}))})})}}]),n}(i.Component);y.contextType=b;var k=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(c.jsxs)(x,{title:"Page under construction!",children:[Object(c.jsx)("p",{children:"This should be a personal page, I'm building it in my free time so it will take a while, here's what I've accomplished so far:"}),Object(c.jsx)(y,{scrollable:!0,steps:["Github repository setup","React project setup, this had to been done twice, since the first time I forgot to set the language to typescript... My bad.","Configured Github Pages deploy, this was a bit tricky but it actually do no more than to commit production build into gh-pages branch.","Initial page setup, which is what you're currently viewing, I swear it'll get better.","Added Responsive layout.","Enhanced Hero Banner background optimization (kind of).","Added theming (light and dark).","Added theme switcher and Navbar (a very hideous one)."]})]})}}]),n}(r.a.Component);k.contextType=b;n(33);var C=n(10),w=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(c.jsxs)("div",{className:"person-card ".concat(this.context.theme),children:[Object(c.jsx)("h1",{children:this.props.title}),Object(c.jsxs)("div",{className:"description-content",children:[this.props.descriptions.map((function(e,t){return Object(c.jsx)("p",{children:e},t)})),Object(c.jsx)("div",{className:"lang-list",children:Object(c.jsx)("ul",{children:this.props.featuredLinks.map((function(e,t){return Object(c.jsx)("li",{children:Object(c.jsx)("a",{href:e.url,children:Object(c.jsx)(C.a,{icon:e.icon})})},t)}))})})]})]})}}]),n}(r.a.Component);w.contextType=b;var N=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(c.jsx)(w,{title:"Andrea Storace",descriptions:["Computer Science Bachelor Graduate","Software Engineering Student","Junior Web Developer"],featuredLinks:[{url:"https://github.com/rollingflamingo",icon:["fab","github"],alt:"Github Profile"},{url:"https://www.linkedin.com/in/andrea-storace-73b9b9103/",icon:["fab","linkedin"],alt:"Linkedin profile"}]})}}]),n}(r.a.Component),T=(n(36),function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(e){var c;return Object(s.a)(this,n),(c=t.call(this,e)).selector=void 0,c.selector=i.createRef(),c.state={transform:!1},c}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.props.opacify&&window.addEventListener("scroll",(function(){var t;e.setState({transform:window.pageYOffset>((null===(t=e.selector.current)||void 0===t?void 0:t.getBoundingClientRect().bottom)||100)})}),!1)}},{key:"render",value:function(){return Object(c.jsx)("header",{ref:this.selector,className:"custom-navbar ".concat(this.context.theme," ").concat(this.state.transform?"opaque":""),children:Object(c.jsxs)("div",{className:"main-container",children:[Object(c.jsx)("div",{className:"left-container",children:this.props.leftContent}),Object(c.jsx)("div",{className:"right-container",children:this.props.rightContent})]})})}}]),n}(i.Component));T.contextType=b;var L=n(19),S=n(7),I=(n(37),function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(e){var c;return Object(s.a)(this,n),(c=t.call(this,e)).state={checked:!1},c.handleClick=c.handleClick.bind(Object(h.a)(c)),c}return Object(l.a)(n,[{key:"render",value:function(){return Object(c.jsxs)("div",{className:"toggle ".concat(this.context.theme),children:[Object(c.jsx)("input",{type:"checkbox",id:this.props.id,checked:this.state.checked,onChange:this.handleClick}),this.renderLabel()]})}},{key:"renderLabel",value:function(e){return Object(c.jsx)("label",{htmlFor:this.props.id,children:e})}},{key:"handleClick",value:function(e){this.setState({checked:!this.state.checked},this.props.onClick)}}]),n}(i.Component));I.contextType=b;n(38);var P=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"renderLabel",value:function(e){var t="dark"===this.context.theme?"sun":"moon";return Object(L.a)(Object(S.a)(n.prototype),"renderLabel",this).call(this,Object(c.jsx)(C.a,{icon:t,size:"2x"}))}}]),n}(I),A=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(e){var c;return Object(s.a)(this,n),(c=t.call(this,e)).state={theme:"dark"},c.toggleTheme=c.toggleTheme.bind(Object(h.a)(c)),c}return Object(l.a)(n,[{key:"toggleTheme",value:function(){this.setState({theme:"light"===this.state.theme?"dark":"light"})}},{key:"render",value:function(){return Object(c.jsx)("div",{className:"App",children:Object(c.jsxs)(b.Provider,{value:{theme:this.state.theme,themeToggle:this.toggleTheme},children:[Object(c.jsx)(T,{rightContent:Object(c.jsx)(P,{id:"theme-switch",onClick:this.toggleTheme})}),Object(c.jsx)(j,{leftContent:Object(c.jsx)(k,{}),rightContent:Object(c.jsx)(N,{})}),Object(c.jsx)("div",{className:"temp-disclaimer ".concat(this.state.theme),children:Object(c.jsx)(k,{})})]})})}}]),n}(r.a.Component),B=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,40)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,r=t.getLCP,a=t.getTTFB;n(e),c(e),i(e),r(e),a(e)}))};o.a.render(Object(c.jsx)(r.a.StrictMode,{children:Object(c.jsx)(A,{})}),document.getElementById("root")),B()}},[[39,1,2]]]);
//# sourceMappingURL=main.d93c428d.chunk.js.map