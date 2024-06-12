import{r as m}from"./index-6c164b11.js";import{u as c}from"./index-3cb24333.js";import{M as x}from"./index-2d5973e3.js";import"./iframe-b5bc3161.js";import"../sb-preview/runtime.js";import"./extends-b1413392.js";import"./index-4593f2b5.js";import"./index-8c3ac41d.js";import"./index-7df1acc3.js";import"./index-356e4a49.js";var d={exports:{}},n={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var u=m,y=Symbol.for("react.element"),g=Symbol.for("react.fragment"),j=Object.prototype.hasOwnProperty,f=u.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,b={key:!0,ref:!0,__self:!0,__source:!0};function p(o,e,l){var t,r={},i=null,h=null;l!==void 0&&(i=""+l),e.key!==void 0&&(i=""+e.key),e.ref!==void 0&&(h=e.ref);for(t in e)j.call(e,t)&&!b.hasOwnProperty(t)&&(r[t]=e[t]);if(o&&o.defaultProps)for(t in e=o.defaultProps,e)r[t]===void 0&&(r[t]=e[t]);return{$$typeof:y,type:o,key:i,ref:h,props:r,_owner:f.current}}n.Fragment=g;n.jsx=p;n.jsxs=p;d.exports=n;var s=d.exports;function a(o){const e={a:"a",code:"code",h2:"h2",hr:"hr",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",...c(),...o.components};return s.jsxs(s.Fragment,{children:[s.jsx(x,{title:"Introduction"}),`
`,s.jsxs("div",{align:"center",children:[s.jsx("img",{src:"https://github.com/SpookyJelly/cheesy-stories/assets/74237436/b410d10c-93ff-4eb2-ac66-61f1298dd47b",alt:"logo",width:"150px"}),s.jsx("h1",{children:"cheesy-stories"})]}),`
`,s.jsx("hr",{}),`
`,s.jsx(e.p,{children:`Cheesy-stories is an add-on to Storybook that provides the ability to adjust the width of any story. This makes it easy for developers to see the changes in components that occur as the width changes.
Easy to use, just install and you are ready to go.`}),`
`,s.jsxs(e.p,{children:[s.jsx(e.a,{href:"https://www.npmjs.com/package/cheesy-stories",rel:"nofollow",children:s.jsx(e.img,{src:"https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white",alt:"NPM"})}),`
`,s.jsx(e.a,{href:"https://github.com/SpookyJelly/cheesy-stories",rel:"nofollow",children:s.jsx(e.img,{src:"https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white",alt:"Github"})})]}),`
`,s.jsx(e.hr,{}),`
`,s.jsx(e.h2,{id:"get-started",children:"Get started"}),`
`,s.jsxs(e.ol,{children:[`
`,s.jsx(e.li,{children:"Installation"}),`
`]}),`
`,s.jsx(e.pre,{children:s.jsx(e.code,{className:"language-bash",children:`
npm install --save-dev cheesy-stories
`})}),`
`,s.jsx(e.pre,{children:s.jsx(e.code,{className:"language-bash",children:`yarn add -D cheesy-stories
`})}),`
`,s.jsxs(e.ol,{start:"2",children:[`
`,s.jsxs(e.li,{children:["Resister the addon in ",s.jsx(e.code,{children:".stories/main.ts"})]}),`
`]}),`
`,s.jsx(e.pre,{children:s.jsx(e.code,{className:"language-typescript",children:`const config = {
  // ...
  addons: ["cheesy-stories"],
};
`})}),`
`,s.jsx(e.p,{children:"This is it!! Dead Simple 🚀"}),`
`,s.jsx(e.h2,{id:"advanced-usage",children:"Advanced Usage"}),`
`,s.jsxs(e.p,{children:["Check my ",s.jsx(e.a,{href:"https://github.com/SpookyJelly/cheesy-stories",rel:"nofollow",children:"github repository"})," for more information."]}),`
`,s.jsx(e.h2,{id:"troubleshooting--faq",children:"Troubleshooting & FAQ"}),`
`,s.jsxs(e.p,{children:["If you have an issue to submit, please visit ",s.jsx(e.a,{href:"https://github.com/SpookyJelly/cheesy-stories/issues/new",rel:"nofollow",children:'"Issues"'}),"."]}),`
`,s.jsx(e.h2,{id:"license",children:"License"}),`
`,s.jsx(e.p,{children:"MIT"})]})}function N(o={}){const{wrapper:e}={...c(),...o.components};return e?s.jsx(e,{...o,children:s.jsx(a,{...o})}):a(o)}export{N as default};
