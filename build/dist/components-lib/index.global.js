/*!
 * engineering-component-library v1.0.0
 * (c) 2021 kkb
 * @license MIT
 */
var MiniOcean=function(n,t){"use strict";var e={name:"MyButton",data:function(){return{count:0}},template:'<button v-on:click="count++">You clicked me {{ count }} times.</button>',install:function(n){n.component(e.name,e)}},o={name:"SfcButton"};o.render=function(n,e,o,u,c,i){return t.openBlock(),t.createBlock("button",null,"Sfc 666")},o.__file="packages/components/sfc-button/SfcButton.vue",o.install=function(n){n.component(o.name,o)};var u=t.defineComponent({name:"JsxButton",render:()=>t.createVNode(t.Fragment,null,[t.createVNode("button",null,[t.createTextVNode("JSX 666")])])});u.install=function(n){n.component(u.name,u)};var c=[e,o,u],i=function(n,t){void 0===t&&(t={}),n.use(a(t)),c.forEach((function(t){n.use(t)}))},a=function(n){return void 0===n&&(n={size:"",zIndex:""}),function(t){t.config.globalProperties.$ELEMENT={size:n.size||"",zIndex:n.zIndex||2e3}}},r={version:"1.0.0",install:i};return n.JsxButton=u,n.MyButton=e,n.SfcButton=o,n.default=r,n.install=i,Object.defineProperty(n,"__esModule",{value:!0}),n}({},Vue);
//# sourceMappingURL=index.global.js.map
