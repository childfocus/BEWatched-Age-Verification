!function(t){var o={};function a(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=o,a.d=function(e,n,t){a.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(n,e){if(1&e&&(n=a(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var t=Object.create(null);if(a.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var o in n)a.d(t,o,function(e){return n[e]}.bind(null,o));return t},a.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(n,"a",n),n},a.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},a.p="",a(a.s=1)}([function(e){e.exports=JSON.parse('{"a":"0.0.1"}')},function(e,n,t){"use strict";t.r(n);var o,a,r,c,s,i,l,d,n=t(0);function u(n,e){var t,o=Object.keys(n);return Object.getOwnPropertySymbols&&(t=Object.getOwnPropertySymbols(n),e&&(t=t.filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})),o.push.apply(o,t)),o}function g(o){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?u(Object(a),!0).forEach(function(e){var n,t;n=o,e=a[t=e],t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e}):Object.getOwnPropertyDescriptors?Object.defineProperties(o,Object.getOwnPropertyDescriptors(a)):u(Object(a)).forEach(function(e){Object.defineProperty(o,e,Object.getOwnPropertyDescriptor(a,e))})}return o}function v(e,n){var t="f"===n?s.content.genderF:s.content.genderM,n="f"===n?s.content.genderFFull:s.content.genderMFull;return e.replace("#G#",t).replace("#GF#",n)}function b(n,t){n=0<arguments.length&&n!==a?n:"",t=1<arguments.length&&t!==a?t:{};s.debug&&console.log("".concat(r," trigger event:"),n,t);try{if(!n)throw new Error("triggerEvent needs an eventName");var e=new CustomEvent(n,t);o.dispatchEvent(e),s.debug&&console.log("".concat(r," event triggered:"),n,t)}catch(e){s.debug&&(console.warn("".concat(r," - trigger event failed:"),n,t),console.error(e))}}window.BWAV=(o=window,t=window.BWAV_SETTINGS||{},r="BWAV",c="v".concat(n.a),n=g({agecheck:"This is an <strong>adult-only</strong> website",consent:'By continuing to browse this website, you aggree to our <a href="#">cookie policy</a> and <a href="#">terms and conditions</a>.',consentButton:"I am older than 18",agecheckFooter:'<a href="#">More information</a>',questionIntro:"But more important...",question:"Is #G# 18 years or older?",yes:"Yes",no:"No",genderM:"he",genderF:"she",genderMFull:"this boy",genderFFull:"this girl",correct:"Correct, #G# is <strong>underaged</strong>",correctContent:"But you can admit, it's not always easy to see if someone is of age. At the moment this picture was taken, #GF# was active as a sex worker.",incorrect:"Unfortunately, #G# is <strong>underaged</strong>",incorrectContent:"As you can see, it's not always easy to see if someone is of age. Because at the moment this picture was taken, #GF# was active as a sex worker.",info:'<p>We do our best to avoid working with underaged sex workers, but we can never be 100% succesful. In the future, when in doubt, but still want to meet? Try asking for an ID for example. Only then will you be sure to not do anything illegal.</p>\n    <p>And if it turns out the sex worker is indeed underaged? Report this anonymously to Child Focus, by calling tollfree to <a href="tel:116 000">116 000</a> or by using <a href="#">this online form</a>. And help us in the combat against sexual exploitation of children.</p>',close:"Go to the website"},t.content||{}),s=g(g({debug:!1,accentColor:"green",accentTextColor:"white",shadowColor:"rgba(0,128,0,.25)",logo:"logo.png",ageCheck:!0,blur:!1,models:[{id:1,avatar:"images/model-1.jpg",underaged:!1,gender:"f"},{id:2,avatar:"images/model-2.jpg",underaged:!0,gender:"m"},{id:3,avatar:"images/model-3.jpg",underaged:!1,gender:"f"}],cdnPrefix:"",cookieAge:30,cookieName:"bwav",eventPrefix:"bwav:",logos:[{url:"https://google.com",image:"images/logo-eu.png"},{url:"https://childfocus.be",image:"images/logo-child-focus.png"}]},t||{}),{},{content:n}),i={target:"body",overlay:".bwav__overlay",wrapper:".bwav__wrapper",agecheck:".bwav__agecheck"},l={blur:"bwav--blur",show:"bwav--shown"},d={},document.addEventListener("DOMContentLoaded",function(){var e;s.debug&&console.log("".concat(r," init")),b("".concat(s.eventPrefix,"on_init"),s),function(){s.debug&&console.log("".concat(r," adding styles"));try{var e=document.createElement("link");e.rel="stylesheet",e.href="".concat(s.cdnPrefix,"/bewatched-age-verification.").concat(c,".css"),document.head.appendChild(e),s.debug&&console.log("".concat(r," stylesheet added")),document.documentElement.style.setProperty("--bwav-color--primary",s.accentColor),document.documentElement.style.setProperty("--bwav-color--primary-text",s.accentTextColor),document.documentElement.style.setProperty("--bwav-color--primary-shadow",s.shadowColor),s.debug&&console.log("".concat(r," custom css properties added to :root"))}catch(e){s.debug&&(console.warn("".concat(r," - addStyles failed")),console.error(e))}}(),function(){s.debug&&console.log("".concat(r," setup HTML"));var e=document.querySelector(i.target);try{var n=document.createElement("div");n.innerHTML='\n        <div class="bwav__overlay">\n          <div class="bwav__wrapper"></div>\n        </div>\n      ',d.target=e,d.overlay=n.querySelector(i.overlay),d.wrapper=n.querySelector(i.wrapper),e.appendChild(d.overlay),s.debug&&console.log("".concat(r," HTML setup done"))}catch(e){s.debug&&(console.warn("".concat(r," HTML setup failed")),console.error(e))}}(),s.ageCheck&&d.target.classList.add(l.show),s.ageCheck&&(e='\n    <div class="bwav__agecheck">\n      <div class="bwav__avatar">\n        <div class="bwav__avatar__image" style="background-image: url('.concat(s.logo,');"></div>\n      </div>\n\n      <div class="bwav__content">\n        <p>').concat(s.content.agecheck,'</p>\n        <div class="bwav__agecheck__consent">').concat(s.content.consent,'</div>\n\n        <button class="bwav__button" onclick="BWAV.start()"><span>').concat(s.content.consentButton,'</span></button>\n      </div>\n\n      <div class="bwav__footer">\n        ').concat(s.content.agecheckFooter,"\n      </div>\n    </div>\n    "),d.wrapper.innerHTML=e),d.model=s.models[Math.floor(Math.random()*s.models.length)],s.debug&&console.log("".concat(r," initialisation finished")),b("".concat(s.eventPrefix,"after_init"))}),{start:function(){s.debug&&console.log("".concat(r," start"),d.model),b("".concat(s.eventPrefix,"on_start"),{model:d.model});var e='\n    <div class="bwav__step">\n      <div class="bwav__avatar bwav__avatar--scaleup">\n        <div class="bwav__avatar__image" style="background-image: url('.concat(d.model.avatar,');"></div>\n      </div>\n\n      <div class="bwav__content">\n        <p>').concat(s.content.questionIntro,'</p>\n        <p class="bwav__question">').concat(s.content.question,'</p>\n\n        <div class="bwav__actions">\n          <button class="bwav__button" onclick={BWAV.answer(true)}><span>').concat(s.content.yes,'</span></button>\n          <button class="bwav__button" onclick={BWAV.answer(false)}><span>').concat(s.content.no,"</span></button>\n        </div>\n      </div>\n    </div>\n    ");d.wrapper.innerHTML=e,d.target.classList.add(l.show)},answer:function(e){s.debug&&console.log("".concat(r," answer question"),e);var n=d.model.underaged!==e;b("".concat(s.eventPrefix,"on_answer"),{answer:e,model:d.model,correct:n}),n='\n      <div class="bwav__step">\n        <div class="bwav__avatar bwav__avatar--scaledown'.concat(n?" bwav__avatar--blur":"",'">\n          <div class="bwav__avatar__image" style="background-image: url(').concat(d.model.avatar,');"></div>\n        </div>\n\n        ').concat(n?'\n          <p class="bwav__title">'.concat(v(s.content.correct,d.model.gender),"</p>\n        "):'\n            <p class="bwav__title">'.concat(v(s.content.incorrect,d.model.gender),"</p>\n          "),'\n\n        <div class="bwav__content">\n          ').concat(n?'\n          <p class="bwav__intro">'.concat(v(s.content.correctContent,d.model.gender),"</p>\n        "):'\n            <p class="bwav__intro">'.concat(v(s.content.incorrectContent,d.model.gender),"</p>\n          "),"\n          ").concat(s.content.info,'\n\n          <div class="bwav__actions">\n            <button class="bwav__button" onclick={BWAV.close()}><span>').concat(s.content.close,'</span></button>\n          </div>\n        </div>\n\n        <div class="bwav__footer">\n          <div class="bwav__footer__logos">\n            ').concat(s.logos.map(function(e){return'\n            <div class="bwav__footer__logo">\n              <a href="'.concat(e.url,'">\n                <img src="').concat(e.image,'" />\n              </a>\n            </div>\n            ')}).join(""),"\n          </div>\n        </div>\n      </div>\n    "),d.wrapper.innerHTML=n},close:function(){s.debug&&console.log("".concat(r," close")),d.target.classList.remove(l.show),b("".concat(s.eventPrefix,"on_close"),{model:d.model})}})}]);