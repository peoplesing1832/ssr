(()=>{"use strict";var e={n:r=>{var n=r&&r.__esModule?()=>r.default:()=>r;return e.d(n,{a:n}),n},d:(r,n)=>{for(var o in n)e.o(n,o)&&!e.o(r,o)&&Object.defineProperty(r,o,{enumerable:!0,get:n[o]})},o:(e,r)=>Object.prototype.hasOwnProperty.call(e,r)};const r=require("express");var n=e.n(r);require("react"),require("react-dom/server");var o=n()();o.get("*",(function(e,r){r.send('\n    <html>\n      <head></head>\n      <body>\n        <div id="root">Hello</div>\n      </body>\n    </html>\n  ')})),o.listen(3e3,(function(){console.log("listening on port 3000 💗")}))})();