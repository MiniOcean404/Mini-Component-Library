/*!
 * engineering-component-library v1.0.0
 * (c) 2021 kkb
 * @license MIT
 */
import{openBlock as n,createBlock as t,defineComponent as e,createVNode as o,Fragment as a,createTextVNode as u}from"vue";var c={name:"MyButton",data:function(){return{count:0}},template:'<button v-on:click="count++">You clicked me {{ count }} times.</button>',install:function(n){n.component(c.name,c)}},s={name:"SfcButton",render:function(e,o,a,u,c,s){return n(),t("button",null,"Sfc 666")},__file:"packages/components/sfc-button/SfcButton.vue",install:function(n){n.component(s.name,s)}},i=e({name:"JsxButton",render:()=>o(a,null,[o("button",null,[u("JSX 666")])])});i.install=function(n){n.component(i.name,i)};var l=[c,s,i],r=function(n,t){void 0===t&&(t={}),n.use(f(t)),l.forEach((function(t){n.use(t)}))},f=function(n){return void 0===n&&(n={size:"",zIndex:""}),function(t){t.config.globalProperties.$ELEMENT={size:n.size||"",zIndex:n.zIndex||2e3}}},m={version:"1.0.0",install:r};export{i as JsxButton,c as MyButton,s as SfcButton,m as default,r as install};
//# sourceMappingURL=index.esm-browser.prod.js.map
