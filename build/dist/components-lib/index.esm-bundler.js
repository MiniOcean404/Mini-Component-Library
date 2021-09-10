/*!
 * engineering-component-library v1.0.0
 * (c) 2021 kkb
 * @license MIT
 */
import{openBlock as n,createBlock as t,defineComponent as o,createVNode as e,Fragment as u,createTextVNode as c}from"vue";var i={name:"MyButton",data:function(){return{count:0}},template:'<button v-on:click="count++">You clicked me {{ count }} times.</button>',install:function(n){n.component(i.name,i)}},a={name:"SfcButton"};a.render=function(o,e,u,c,i,a){return n(),t("button",null,"Sfc 666")},a.__file="packages/components/sfc-button/SfcButton.vue",a.install=function(n){n.component(a.name,a)};var l=o({name:"JsxButton",render:()=>e(u,null,[e("button",null,[c("JSX 666")])])});l.install=function(n){n.component(l.name,l)};var r=[i,a,l],f=function(n,t){void 0===t&&(t={}),n.use(s(t)),r.forEach((function(t){n.use(t)}))},s=function(n){return void 0===n&&(n={size:"",zIndex:""}),function(t){t.config.globalProperties.$ELEMENT={size:n.size||"",zIndex:n.zIndex||2e3}}},m={version:"1.0.0",install:f};export{l as JsxButton,i as MyButton,a as SfcButton,m as default,f as install};
//# sourceMappingURL=index.esm-bundler.js.map
