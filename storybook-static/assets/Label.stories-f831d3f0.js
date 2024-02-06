import{u as V,j as l,t as k}from"./styled-components.browser.esm-9616713e.js";import{t as i}from"./typography-f51941fe.js";import{a as L}from"./themes-9bf0b096.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";const C=V.label`
  font-size: ${e=>e.size==="small"?i.helperText:e.size==="medium"?i.paragraph:i.header5};
  font-family: "Playfair Display", serif;
  cursor: pointer;
  color: ${e=>e.theme.textColor};
  ${e=>e.disabled&&`
    background-color: grey;
    cursor: not-allowed;
    color: #ccc;
  `}
`,n=({size:e="medium",htmlFor:_,text:v,disabled:T=!1,...q})=>l(C,{size:e,htmlFor:_,disabled:T,...q,children:v});try{n.displayName="Label",n.__docgenInfo={description:"",displayName:"Label",props:{text:{defaultValue:null,description:"",name:"text",required:!1,type:{name:"String"}},size:{defaultValue:{value:"medium"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}},htmlFor:{defaultValue:null,description:"",name:"htmlFor",required:!0,type:{name:"String"}},color:{defaultValue:null,description:"",name:"color",required:!1,type:{name:"String"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}}}}}catch{}const I={title:"Components/Label",component:n,argTypes:{}},$=e=>l(n,{...e}),a={args:{htmlFor:"my-input",text:"Username:"}},s={args:{...a.args,size:"small"}},t={args:{...a.args,size:"large"}},o={args:{...a.args,size:"large",disabled:!0}},r=$.bind({});r.args={size:"medium",text:"Default Front",color:L.textColor};r.decorators=[e=>l(k,{theme:L,children:l(e,{})})];var m,c,d;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    htmlFor: 'my-input',
    text: 'Username:'
  }
}`,...(d=(c=a.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var u,p,g;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    size: 'small'
  }
}`,...(g=(p=s.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};var f,b,y;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    size: 'large'
  }
}`,...(y=(b=t.parameters)==null?void 0:b.docs)==null?void 0:y.source}}};var z,S,h;o.parameters={...o.parameters,docs:{...(z=o.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    size: 'large',
    disabled: true
  }
}`,...(h=(S=o.parameters)==null?void 0:S.docs)==null?void 0:h.source}}};var x,D,F;r.parameters={...r.parameters,docs:{...(x=r.parameters)==null?void 0:x.docs,source:{originalSource:"args => <Label {...args} />",...(F=(D=r.parameters)==null?void 0:D.docs)==null?void 0:F.source}}};const O=["Default","SmallFontSize","LargeFontSize","DisabledLabel","DarkThemeFont"];export{r as DarkThemeFont,a as Default,o as DisabledLabel,t as LargeFontSize,s as SmallFontSize,O as __namedExportsOrder,I as default};
