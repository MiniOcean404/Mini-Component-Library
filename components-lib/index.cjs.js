/*!
 * engineering-component-library v1.0.0
 * (c) 2021 kkb
 * @license MIT
 */
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("vue"),n={name:"MyButton",data:function(){return{count:0}},template:'<button v-on:click="count++">You clicked me {{ count }} times.</button>',install:function(e){e.component(n.name,n)}},t={name:"SfcButton"};t.render=function(n,t,o,u,c,r){return e.openBlock(),e.createBlock("button",null,"Sfc 666")},t.__file="packages/components/sfc-button/SfcButton.vue",t.install=function(e){e.component(t.name,t)};var o=e.defineComponent({name:"JsxButton",render:()=>e.createVNode(e.Fragment,null,[e.createVNode("button",null,[e.createTextVNode("JSX 666")])])});o.install=function(e){e.component(o.name,o)};var u=[n,t,o],c=function(e,n){void 0===n&&(n={}),e.use(r(n)),u.forEach((function(n){e.use(n)}))},r=function(e){return void 0===e&&(e={size:"",zIndex:""}),function(n){n.config.globalProperties.$ELEMENT={size:e.size||"",zIndex:e.zIndex||2e3}}},i={version:"1.0.0",install:c};exports.JsxButton=o,exports.MyButton=n,exports.SfcButton=t,exports.default=i,exports.install=c;
//# sourceMappingURL=index.cjs.js.map
