(()=>{"use strict";var n={650:(n,e,t)=>{t.d(e,{Z:()=>c});var r=t(81),a=t.n(r),i=t(645),o=t.n(i)()(a());o.push([n.id,'\n.contact{\n  display: flex;\n  flex-direction: column;\n  border: 2px solid var(--gold);\n  align-items: center; \n  background-color: white;\n  color: var(--background);\n  flex: 1;\n}\n\n.contact>p{\n  font-family: "Madina", Arial, Helvetica, sans-serif;\n  font-size: 6rem;\n  text-align: center;\n  color: var(--background);\n  margin-top: 4rem;\n}\n.phone{\n  font-size: 2rem;\n  text-align: center;\n  margin: 2rem 0 0 0;\n}\n\nform{\n  max-width: 45rem;\n  padding: 1rem;\n  border-radius: 10px;\n\n}\n\nlabel{\n  display: block;\n  padding: 1.5rem 0 0.5rem 0;\n  text-transform: uppercase;\n  font-weight: 600;\n}\ninput, textarea{\n  display: block;\n  width: 100%;\n  margin-left: 10px;\n  border: 2px solid var(--gold);\n  padding: 0.5rem;\n  font-size: 1.1rem;\n  border-radius: 10px;\n}\ninput, textarea:focus{\n  outline-color: rgb(241, 203, 149);\n}\n\n#submit-btn{\n  border-radius:50px;\n  background-color:var(--background);\n  color: var(--gold);\n  padding: 0.5rem 1rem;\n  font-size: 1.2rem;\n  letter-spacing: 1px;\n  font-weight: 600;\n  border: 0;\n  text-transform: uppercase;\n  width: auto;\n  cursor: pointer;\n  margin:  2rem auto 0 auto;\n\n}\n#submit-btn:hover{\n  background-color: #0b1826e4;\n  \n}\n.contactFooter{\n  text-align: center;\n  font-size: 0.9rem;\n  padding: 8px;\n  letter-spacing: 2px;\n  color:var(--gold);\n  background-color: var(--background);\n  width: 100%;\n  position: absolute;\n  bottom: 0;\n\n}',""]);const c=o},254:(n,e,t)=>{t.d(e,{Z:()=>u});var r=t(81),a=t.n(r),i=t(645),o=t.n(i),c=t(667),s=t.n(c),d=new URL(t(806),t.b),l=o()(a()),p=s()(d);l.push([n.id,':root{\n  --golden-color: linear-gradient(\n    to right,\n    #462523 0,\n    #c6a677 12%,\n    #f3da8d 40%,\n    #f6f2c0 50%,\n    #f3da8d 60%,\n    #c6a677 88%,\n    #462523 100% \n  ); \n  --background:#0b1826;\n  --gold: rgb(243, 217, 180);\n   \n}\n\n*{\n  margin:0;\n  padding:0;\n  box-sizing: border-box;\n}\n\n@font-face {\n  font-family: "Madina";\n  src: url('+p+');\n}\n\n#content {\n  background-color: var(--background);\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n  min-width: 800px; \n}\n.title{\n  background-color: var(--background);\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  height: 20vh;\n}\n.title>span{\n  font-family: "Madina", Verdana, Geneva, Tahoma, sans-serif;\n  font-size: 6rem;\n  letter-spacing: 0.9rem;\n  padding: 8px;\n  color: transparent;\n  width:fit-content;\n  background:var(--golden-color);\n\n  background-clip: text;\n  -webkit-background-clip:text\n\n}\n.nav{\n  border-bottom: 2px solid var(--gold); \n}\n\n.nav>ul{\n  display: flex;\n  justify-content: space-evenly;\n  font-size: 1.5rem;\n  list-style: none;\n  color:var(--gold);\n}\n\nli{\n  cursor: pointer;\n}',""]);const u=l},301:(n,e,t)=>{t.d(e,{Z:()=>u});var r=t(81),a=t.n(r),i=t(645),o=t.n(i),c=t(667),s=t.n(c),d=new URL(t(215),t.b),l=o()(a()),p=s()(d);l.push([n.id,".home{\n  background-image:\n  linear-gradient(\n    to right,\n    #0b1826 35%,\n    60%,\n    transparent 100%\n    ),\n    url("+p+");\n    \n  background-size: cover;\n  background-position: center right;\n  background-repeat: no-repeat;\n  display: flex;\n  flex:1;\n  \n}\n\n.banner{\n  color:transparent;\n  font-size: 2.2rem;\n  text-align: center;\n  padding: 2rem;\n  width: 35vw;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background:var(--golden-color);\n  background-clip: text;\n  -webkit-background-clip:text\n}\n\n.homeFooter{\n  text-align: center;\n  font-size: 0.9rem;\n  color:white;\n  background-color: #0b182690;\n  color:var(--gold);\n  margin-top: auto;\n  position: absolute;\n  left:50%;\n  bottom: 0;\n  padding:8px;\n  border-radius: 15px;\n}",""]);const u=l},83:(n,e,t)=>{t.d(e,{Z:()=>c});var r=t(81),a=t.n(r),i=t(645),o=t.n(i)()(a());o.push([n.id,"\n.container{ \n  background-color: white;\n  padding: 32px 60px;\n  display: grid;\n  grid-template-rows: repeat(minmax(400px, 1fr));\n  grid-template-columns:repeat(auto-fill, minmax(400px,1fr));\n  column-gap: 8px;\n  row-gap: 22px;\n}\n.card{\n  justify-self: center;\n  padding:8px;\n  \n}\n.card>img{\n  width: 300px;\n  height: 240px;\n  object-fit: cover;\n  object-position: center center;\n  border-radius: 15px;\n  border:2px solid var(--gold);\n}\n.item {\n  padding: 0 12px;\n  font-weight: 700;\n  color: var(--background);\n  font-size: 1.1rem;\n  font-weight: 1.1rem; \n  height: 3rem;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  \n}\n\n.menu{\n  display:flex;\n  flex-direction: column;\n  flex:1;\n}\n\n.menuFooter {\n  text-align: center;\n  font-size: 0.9rem;\n  padding: 8px;\n  letter-spacing: 2px;\n  color:var(--gold);\n  bottom: 0;\n\n}\n",""]);const c=o},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,a,i){"string"==typeof n&&(n=[[null,n,void 0]]);var o={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(o[s]=!0)}for(var d=0;d<n.length;d++){var l=[].concat(n[d]);r&&o[l[0]]||(void 0!==i&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=i),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),a&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=a):l[4]="".concat(a)),e.push(l))}},e}},667:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var i={},o=[],c=0;c<n.length;c++){var s=n[c],d=r.base?s[0]+r.base:s[0],l=i[d]||0,p="".concat(d," ").concat(l);i[d]=l+1;var u=t(p),m={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==u)e[u].references++,e[u].updater(m);else{var v=a(m,r);r.byIndex=c,e.splice(c,0,{identifier:p,updater:v,references:1})}o.push(p)}return o}function a(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,a){var i=r(n=n||[],a=a||{});return function(n){n=n||[];for(var o=0;o<i.length;o++){var c=t(i[o]);e[c].references--}for(var s=r(n,a),d=0;d<i.length;d++){var l=t(i[d]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}i=s}}},569:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var a=void 0!==t.layer;a&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,a&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},215:(n,e,t)=>{n.exports=t.p+"496eb3fe4d69e349dbe8.jpg"},806:(n,e,t)=>{n.exports=t.p+"4486d3c4447c8170f5bb.ttf"}},e={};function t(r){var a=e[r];if(void 0!==a)return a.exports;var i=e[r]={id:r,exports:{}};return n[r](i,i.exports,t),i.exports}t.m=n,t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var r=e.getElementsByTagName("script");r.length&&(n=r[r.length-1].src)}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{var n=t(379),e=t.n(n),r=t(795),a=t.n(r),i=t(569),o=t.n(i),c=t(565),s=t.n(c),d=t(216),l=t.n(d),p=t(589),u=t.n(p),m=t(254),v={};v.styleTagTransform=u(),v.setAttributes=s(),v.insert=o().bind(null,"head"),v.domAPI=a(),v.insertStyleElement=l(),e()(m.Z,v),m.Z&&m.Z.locals&&m.Z.locals;var g=t(301),f={};f.styleTagTransform=u(),f.setAttributes=s(),f.insert=o().bind(null,"head"),f.domAPI=a(),f.insertStyleElement=l(),e()(g.Z,f),g.Z&&g.Z.locals&&g.Z.locals;var b=t(83),h={};h.styleTagTransform=u(),h.setAttributes=s(),h.insert=o().bind(null,"head"),h.domAPI=a(),h.insertStyleElement=l(),e()(b.Z,h),b.Z&&b.Z.locals&&b.Z.locals;var x=t(650),y={};y.styleTagTransform=u(),y.setAttributes=s(),y.insert=o().bind(null,"head"),y.domAPI=a(),y.insertStyleElement=l(),e()(x.Z,y),x.Z&&x.Z.locals&&x.Z.locals,(()=>{const n=document.createElement("header"),e=document.createElement("nav");n.classList.add("title"),e.classList.add("nav"),n.innerHTML="<span>Almanal Delicacies</span>",e.innerHTML='<ul class="list">\n      <li id="home-btn">Home</li>\n      <li id="menu-btn">Menu</li>\n      <li id="contact-btn">Contact</li>\n      </ul>',content.append(n,e)})();const k=()=>{const n=document.createElement("main");n.classList.add("home"),n.innerHTML=' <div class="banner">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus architecto veniam cum aperiam facere laudantium amet incidunt, hic doloremque expedita, neque impedit. Magni explicabo, in est ratione ipsa, iusto fugiat, delectus quos fuga tempore itaque.</div>\n    <footer class="homeFooter">\n        Created by Halla Idris\n    </footer>',content.append(n)};k(),document.getElementById("content");const w=document.querySelector("#home-btn"),S=document.querySelector("#menu-btn"),T=document.querySelector("#contact-btn");w.addEventListener("click",(()=>{document.querySelector("main").remove(),k()})),S.addEventListener("click",(()=>{document.querySelector("main").remove(),(()=>{const n=document.createElement("main");n.classList.add("menu"),n.innerHTML=' \n    <div class = container>\n    <div class="card">\n      <img src="../images/card1.jpg" alt="">\n      <div class="item">\n        <div class="text"> Broccoli Cheddar Soup</div>\n        <div class="price">$12</div>\n      </div>\n    </div>\n\n    <div class="card">\n      <img src="../images/card2.jpg" alt="">\n      <div class="item">\n        <div class="text">Orange Chicken and Rice</div>\n        <div class="price">$18</div>\n      </div>\n    </div>\n\n    <div class="card">\n      <img src="../images/card3.jpg" alt="">\n      <div class="item">\n        <div class="text">Saucy Thai Chicken Pizzas</div>\n        <div class="price">$18</div>\n      </div>\n    </div>\n\n    <div class="card">\n      <img src="../images/card4.jpg" alt="">\n      <div class="item">\n        <div class="text">Garlic Shrimp Scampi</div>\n        <div class="price">$18</div>\n      </div>\n    </div>\n\n    <div class="card">\n      <img src="../images/card5.jpg" alt="">\n      <div class="item">\n        <div class="text">Butterburger</div>\n        <div class="price">$16</div>\n      </div>\n    </div>\n\n    <div class="card">\n      <img src="../images/card6.jpg" alt="">\n      <div class="item">\n        <div class="text">Roast Beef</div>\n        <div class="price">$22</div>\n      </div>\n    </div>\n\n    <div class="card">\n      <img src="../images/card7.jpg" alt="">\n      <div class="item">\n        <div class="text">Red Velvet Cheesecake</div>\n        <div class="price">$26</div>\n      </div>\n    </div>\n\n    <div class="card">\n      <img src="../images/card8.jpg" alt="">\n      <div class="item">\n        <div class="text">Chocolate Pecan Skillet Cookie</div>\n        <div class="price">$28</div>\n      </div>\n    </div>\n    </div>\n\n    <footer class="menuFooter">\n    Created by Halla Idris\n    </footer>\n      ',content.append(n)})()})),T.addEventListener("click",(()=>{document.querySelector("main").remove(),(()=>{const n=document.createElement("main");n.classList.add("contact"),n.innerHTML=' \n      <p>Contact us</p>\n      <div class="phone">\n        Phone: (xxx)xxx-xxxx\n      </div>\n\n      \n      <form action="#">\n        <div class = "message">\n          <div>\n            <label for="msg">Write us a message:</label>\n            <textarea id="msg" name="msg" rows="5" cols="50" maxlength="400" placeholder="Maximum 400 characters"></textarea>\n          </div>\n          <div class="email">\n            <label for="email">Your e-mail:</label>\n            <input \n            type="email" id="email" name="email" required\n            pattern="^S+@S+.S+$">\n          </div>\n        </div>\n        <input type="submit" id="submit-btn" value="Send">\n      \n        </form>\n\n    <footer class="contactFooter">\n        Created by Halla Idris\n    </footer>   \n      ',content.append(n)})()}))})()})();