!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},t={},o=e.parcelRequired7c6;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in t){var o=t[e];delete t[e];var i={id:e,exports:{}};return n[e]=i,o.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,n){t[e]=n},e.parcelRequired7c6=o);var i=o("h6c0i");document.querySelector(".form").addEventListener("submit",(function(e){e.preventDefault();var n=e.currentTarget.elements,t=n.delay,o=n.step,r=n.amount,a=0,l=0;function u(){var e,n;(e=a+=1,n=o.value,new Promise((function(t,o){Math.random()>.3?t({position:e,delay:n}):o({position:e,delay:n})}))).then((function(e){var n=e.position,t=e.delay;i.Notify.success("✅ Fulfilled promise ".concat(n," in ").concat(t,"ms"))})).catch((function(e){var n=e.position,t=e.delay;i.Notify.failure("❌ Rejected promise ".concat(n," in ").concat(t,"ms"))})),a===Number(r.value)&&clearInterval(l)}setTimeout((function(){u(),l=setInterval(u,o.value)}),t.value)}))}();
//# sourceMappingURL=03-promises.37817251.js.map
