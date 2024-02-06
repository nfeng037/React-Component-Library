import{u as o,a as h,j as t}from"./styled-components.browser.esm-9616713e.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";const y=o.div`
  background-image: url(${e=>e.imageUrl});
  background-size: cover;
  background-position: center;
  height: 400px; // Adjust the height as needed
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  position: relative;
  ${e=>e.disabled&&`
    cursor: not-allowed;
    background: none;
    background-color: darkgrey;
  `}
`,I=o.h1`
  color: #fff;
`,H=o.h2`
  color: #fff;
`,_=o.button`
  padding: 10px 20px;
  margin-top: 20px;
  font-size: 16px;
  cursor: pointer;
`,k=({imageUrl:e,title:s,subtitle:n,Text:i,disabled:b=!1,OnClick:x})=>h(y,{imageUrl:e,disabled:b,children:[s&&t(I,{children:s}),n&&t(H,{children:n}),i&&t(_,{onClick:x,children:i})]}),g=k;try{HeroImg.displayName="HeroImg",HeroImg.__docgenInfo={description:"",displayName:"HeroImg",props:{imageUrl:{defaultValue:null,description:"",name:"imageUrl",required:!0,type:{name:"string"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},subtitle:{defaultValue:null,description:"",name:"subtitle",required:!1,type:{name:"string"}},Text:{defaultValue:null,description:"",name:"Text",required:!1,type:{name:"string"}},OnClick:{defaultValue:null,description:"",name:"OnClick",required:!1,type:{name:"(() => void)"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}}}}}catch{}const V={title:"Components/HeroImage",component:g},f=e=>t(g,{...e}),r=f.bind({});r.args={imageUrl:"https://via.placeholder.com/1200x400",title:"Welcome to Our Website",subtitle:"Discover our amazing services",Text:"Learn More"};const a=f.bind({});a.args={...r.args,disabled:!0};var l,c,d;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:"args => <HeroImage {...args} />",...(d=(c=r.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var u,m,p;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:"args => <HeroImage {...args} />",...(p=(m=a.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const j=["Default","Disabled"];export{r as Default,a as Disabled,j as __namedExportsOrder,V as default};
