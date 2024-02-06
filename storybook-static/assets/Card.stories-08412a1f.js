import{u as o,a as h,j as r}from"./styled-components.browser.esm-9616713e.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";const y=o.div`
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 20px;
  max-width: 300px;
  opacity: ${e=>e.disabled?.5:1};
  ${e=>e.disabled&&`
  cursor: not-allowed;
  background: none;
  background-color: darkgrey;
`}
`,_=o.img`
  width: 100%;
  border-radius: 4px;
`,k=o.h2`
  font-size: 1.2em;
  margin-top: 10px;
`,T=o.p`
  margin-top: 10px;
`,q=o.button`
  margin-top: 20px;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  background-color: blue;
  color: white;
  cursor: pointer;
`,n=({imageurl:e,title:d,content:C,buttonText:i,onButtonClick:f,disabled:s})=>h(y,{disabled:s,children:[e&&r(_,{src:e,alt:d}),r(k,{children:d}),r(T,{children:C}),i&&r(q,{onClick:f,disabled:s,children:i})]}),b=n;try{n.displayName="Card",n.__docgenInfo={description:"",displayName:"Card",props:{imageurl:{defaultValue:null,description:"",name:"imageurl",required:!1,type:{name:"string"}},title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},content:{defaultValue:null,description:"",name:"content",required:!0,type:{name:"string"}},buttonText:{defaultValue:null,description:"",name:"buttonText",required:!1,type:{name:"string"}},onButtonClick:{defaultValue:null,description:"",name:"onButtonClick",required:!1,type:{name:"(() => void)"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}}}}}catch{}const D={title:"Components/Card",component:b},x=e=>r(b,{...e}),t=x.bind({});t.args={imageurl:"https://via.placeholder.com/300",title:"Card Title",content:"This is a card description.",buttonText:"Click Me"};const a=x.bind({});a.args={imageurl:"https://via.placeholder.com/300",title:"Card Title",content:"This is a card description.",buttonText:"Click Me",disabled:!0};var l,c,p;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:"args => <Card {...args} />",...(p=(c=t.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var u,m,g;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:"args => <Card {...args} />",...(g=(m=a.parameters)==null?void 0:m.docs)==null?void 0:g.source}}};const j=["Default","Disabled"];export{t as Default,a as Disabled,j as __namedExportsOrder,D as default};
