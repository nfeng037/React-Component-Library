import{u as b,j as c}from"./styled-components.browser.esm-9616713e.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";const h=b.img`
  background-color: lightgrey;
  opacity: ${e=>e.disabled?.5:1};
  ${e=>e.disabled&&`
    background-color: lightgrey;
    cursor: not-allowed;
    color: #darkgrey;
  `}
`,t=({src:e,alt:p,width:g,height:f,disabled:y})=>c(h,{src:e,alt:p,width:g,height:f,disabled:y}),m=t;try{t.displayName="Img",t.__docgenInfo={description:"",displayName:"Img",props:{src:{defaultValue:null,description:"",name:"src",required:!0,type:{name:"string"}},alt:{defaultValue:null,description:"",name:"alt",required:!1,type:{name:"string"}},width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"string"}},height:{defaultValue:null,description:"",name:"height",required:!1,type:{name:"string"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}}}}}catch{}const V={title:"Components/Img",component:m},u=e=>c(m,{...e}),r=u.bind({});r.args={src:"https://via.placeholder.com/150",alt:"Placeholder Image"};const a=u.bind({});a.args={...r.args,disabled:!0};var s,o,l;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:"args => <Img {...args} />",...(l=(o=r.parameters)==null?void 0:o.docs)==null?void 0:l.source}}};var d,i,n;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:"args => <Img {...args} />",...(n=(i=a.parameters)==null?void 0:i.docs)==null?void 0:n.source}}};const D=["Default","Disabled"];export{r as Default,a as Disabled,D as __namedExportsOrder,V as default};
