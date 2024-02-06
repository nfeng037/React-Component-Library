import{u as I,j as r,t as a}from"./styled-components.browser.esm-9616713e.js";import{t as F}from"./typography-f51941fe.js";import{d as p,a as d}from"./themes-9bf0b096.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";const G=I.button`
  border-radius: 3px;
  display: inline-block;
  padding: ${e=>e.size==="small"?"8px":e.size==="medium"?"12px 25px":"18px 32px"};
  border: none;
  font-size: ${F.paragraph};
  border-radius: 1rem;
  min-width: 80px;
  cursor: pointer;
  font-family: "Playfair Display", serif;
  transition: background-color 0.3s linear, color 0.3s linear;

  background-color: ${e=>e.primary?e.theme.primaryColor:e.theme.secondaryColor};
  color: ${e=>e.primary?e.theme.textColorOnPrimary:e.theme.textColorOnSecondary};

  &:hover {
    background-color: ${e=>e.primary?e.theme.primaryHoverColor:e.theme.secondaryHoverColor};
  }

  &:focus {
    outline: 2px solid ${e=>e.theme.primaryColor};
    outline-offset: 2px;
  }

  &:active {
    background-color: ${e=>e.primary?e.theme.primaryActiveColor:e.theme.secondaryActiveColor};
  }

  &:disabled {
    background-color: ${e=>e.theme.disabled};
    color: ${e=>e.theme.textOnDisabled};
    cursor: not-allowed;
  }

  ${e=>e.isSuccess&&`
    background-color: ${e.theme.status.successColor};
    &:hover {
      background-color: ${e.theme.status.successHoverColor};
    }
    &:focus {
      outline: 2px solid ${e.theme.status.successColor};
      outline-offset: 2px;
    }
    &:active {
      background-color: ${e.theme.status.successActiveColor};
    }
  `}

  ${e=>e.isError&&`
    background-color: ${e.theme.status.errorColor};
    &:hover {
      background-color: ${e.theme.status.errorHoverColor};
    }
    &:focus {
      outline: 2px solid ${e.theme.status.errorColor};
      outline-offset: 2px;
    }
    &:active {
      background-color: ${e.theme.status.errorActiveColor};
    }
  `}

  ${e=>e.isWarning&&`
    background-color: ${e.theme.status.warningColor};
    &:hover {
      background-color: ${e.theme.status.warningHoverColor};
    }
    &:focus {
      outline: 2px solid ${e.theme.status.warningColor};
      outline-offset: 2px;
    }
    &:active {
      background-color: ${e.theme.status.warningActiveColor};
    }
  `}
`,g=({size:e="medium",disabled:h=!1,text:M,onClick:N,...P})=>r(G,{type:"button",onClick:N,disabled:h,size:e,...P,"aria-disabled":h?!0:void 0,children:M});try{g.displayName="Button",g.__docgenInfo={description:"",displayName:"Button",props:{text:{defaultValue:null,description:"",name:"text",required:!1,type:{name:"string"}},primary:{defaultValue:null,description:"",name:"primary",required:!1,type:{name:"boolean"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},size:{defaultValue:{value:"medium"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"MouseEventHandler<HTMLButtonElement>"}},isSuccess:{defaultValue:null,description:"",name:"isSuccess",required:!1,type:{name:"boolean"}},isError:{defaultValue:null,description:"",name:"isError",required:!1,type:{name:"boolean"}},isWarning:{defaultValue:null,description:"",name:"isWarning",required:!1,type:{name:"boolean"}}}}}catch{}const X={title:"Components/Button",component:g,argTypes:{}},t=e=>r(g,{...e}),o=t.bind({});o.args={primary:!0,size:"medium",text:"Default Button"};o.decorators=[e=>r(a,{theme:p,children:r(e,{})})];const s=t.bind({});s.args={primary:!0,size:"medium",text:"Dark Theme Button"};s.decorators=[e=>r(a,{theme:d,children:r(e,{})})];const i=t.bind({});i.args={primary:!0,size:"small",text:"Small Button"};i.decorators=[e=>r(a,{theme:p,children:r(e,{})})];const n=t.bind({});n.args={primary:!0,size:"large",text:"Large Button"};n.decorators=[e=>r(a,{theme:p,children:r(e,{})})];const c=t.bind({});c.args={primary:!0,size:"medium",text:"Disabled",disabled:!0};c.decorators=[e=>r(a,{theme:d,children:r(e,{})})];const u=t.bind({});u.args={primary:!0,size:"medium",text:"Success",isSuccess:!0};u.decorators=[e=>r(a,{theme:d,children:r(e,{})})];const l=t.bind({});l.args={primary:!0,size:"medium",text:"Error",isError:!0};l.decorators=[e=>r(a,{theme:d,children:r(e,{})})];const m=t.bind({});m.args={primary:!0,size:"medium",text:"Warning",isWarning:!0};m.decorators=[e=>r(a,{theme:d,children:r(e,{})})];var f,y,b;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:"args => <Button {...args} />",...(b=(y=o.parameters)==null?void 0:y.docs)==null?void 0:b.source}}};var x,v,C;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:"args => <Button {...args} />",...(C=(v=s.parameters)==null?void 0:v.docs)==null?void 0:C.source}}};var $,k,S;i.parameters={...i.parameters,docs:{...($=i.parameters)==null?void 0:$.docs,source:{originalSource:"args => <Button {...args} />",...(S=(k=i.parameters)==null?void 0:k.docs)==null?void 0:S.source}}};var B,z,D;n.parameters={...n.parameters,docs:{...(B=n.parameters)==null?void 0:B.docs,source:{originalSource:"args => <Button {...args} />",...(D=(z=n.parameters)==null?void 0:z.docs)==null?void 0:D.source}}};var E,T,_;c.parameters={...c.parameters,docs:{...(E=c.parameters)==null?void 0:E.docs,source:{originalSource:"args => <Button {...args} />",...(_=(T=c.parameters)==null?void 0:T.docs)==null?void 0:_.source}}};var q,V,H;u.parameters={...u.parameters,docs:{...(q=u.parameters)==null?void 0:q.docs,source:{originalSource:"args => <Button {...args} />",...(H=(V=u.parameters)==null?void 0:V.docs)==null?void 0:H.source}}};var W,w,A;l.parameters={...l.parameters,docs:{...(W=l.parameters)==null?void 0:W.docs,source:{originalSource:"args => <Button {...args} />",...(A=(w=l.parameters)==null?void 0:w.docs)==null?void 0:A.source}}};var L,O,j;m.parameters={...m.parameters,docs:{...(L=m.parameters)==null?void 0:L.docs,source:{originalSource:"args => <Button {...args} />",...(j=(O=m.parameters)==null?void 0:O.docs)==null?void 0:j.source}}};const Y=["DefaultTheme","DarkTheme","Small","Large","Disabled","Success","Error","Warning"];export{s as DarkTheme,o as DefaultTheme,c as Disabled,l as Error,n as Large,i as Small,u as Success,m as Warning,Y as __namedExportsOrder,X as default};
