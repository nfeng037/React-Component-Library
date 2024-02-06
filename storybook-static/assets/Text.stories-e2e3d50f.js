import{u as $,j as P}from"./styled-components.browser.esm-9616713e.js";import{t as l}from"./typography-f51941fe.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";const j=$.span`
  font-family: "Playfair Display", serif;
  font-size: ${e=>e.types==="header"?l.header2:e.types==="paragraph"?l.paragraph:l.copyrightText};
  font-weight: ${e=>e.bold?"bold":"normal"};
  font-style: ${e=>e.italic?"italic":"normal"};
  ${e=>e.disabled&&`
    background-color: grey;
    cursor: not-allowed;
    color: #ccc;
  `}
`,p=({types:e="paragraph",bold:I,italic:V,text:B,...H})=>P(j,{types:e,bold:I,italic:V,...H,children:B});try{p.displayName="Text",p.__docgenInfo={description:"",displayName:"Text",props:{text:{defaultValue:null,description:"",name:"text",required:!1,type:{name:"String"}},types:{defaultValue:{value:"paragraph"},description:"",name:"types",required:!1,type:{name:"enum",value:[{value:'"header"'},{value:'"paragraph"'},{value:'"copyright"'}]}},bold:{defaultValue:null,description:"",name:"bold",required:!1,type:{name:"boolean"}},italic:{defaultValue:null,description:"",name:"italic",required:!1,type:{name:"boolean"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}}}}}catch{}const z={title:"Components/Text",component:p,argTypes:{}},a={args:{types:"paragraph",text:"Paragraph"}},r={args:{types:"header",text:"Header Text"}},t={args:{types:"copyright",text:"Copyright Text"}},s={args:{bold:!0,text:"Bold Text"}},o={args:{italic:!0,text:"Italic Text"}},n={args:{text:"Disabled",disabled:!0}};var c,d,i;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    types: 'paragraph',
    text: 'Paragraph'
  }
}`,...(i=(d=a.parameters)==null?void 0:d.docs)==null?void 0:i.source}}};var u,m,x;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    types: 'header',
    text: 'Header Text'
  }
}`,...(x=(m=r.parameters)==null?void 0:m.docs)==null?void 0:x.source}}};var g,y,T;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    types: 'copyright',
    text: 'Copyright Text'
  }
}`,...(T=(y=t.parameters)==null?void 0:y.docs)==null?void 0:T.source}}};var h,f,b;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    bold: true,
    text: 'Bold Text'
  }
}`,...(b=(f=s.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};var _,S,D;o.parameters={...o.parameters,docs:{...(_=o.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    italic: true,
    text: 'Italic Text'
  }
}`,...(D=(S=o.parameters)==null?void 0:S.docs)==null?void 0:D.source}}};var q,v,C;n.parameters={...n.parameters,docs:{...(q=n.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    text: 'Disabled',
    disabled: true
  }
}`,...(C=(v=n.parameters)==null?void 0:v.docs)==null?void 0:C.source}}};const E=["DefaultText","HeaderText","CopyRightText","BoldText","ItalicText","DisabledText"];export{s as BoldText,t as CopyRightText,a as DefaultText,n as DisabledText,r as HeaderText,o as ItalicText,E as __namedExportsOrder,z as default};
