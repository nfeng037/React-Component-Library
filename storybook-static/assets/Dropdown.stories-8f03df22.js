import{u as y,j as u}from"./styled-components.browser.esm-9616713e.js";import{r as S}from"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";const V=y.select`
  padding: 8px;
  border-radius: 4px;
  border: 1px solid #ccc;
  &:disabled {
    background-color: #f3f3f3;
    color: #ccc;
    cursor: not-allowed;
  }
`,n=({id:e,name:r,value:o,onChange:l,options:b,disabled:f=!1})=>u(V,{id:e,name:r,value:o,onChange:l,disabled:f,children:b.map(s=>u("option",{value:s.value,children:s.label},s.value))});try{n.displayName="Dropdown",n.__docgenInfo={description:"",displayName:"Dropdown",props:{id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},name:{defaultValue:null,description:"",name:"name",required:!1,type:{name:"string"}},value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"string"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"(event: ChangeEvent<HTMLSelectElement>) => void"}},options:{defaultValue:null,description:"",name:"options",required:!0,type:{name:"{ value: string; label: string; }[]"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}}}}}catch{}const w={title:"Components/Dropdown",component:n,argTypes:{}},g=e=>{const[r,o]=S.useState(e.value);return u(n,{...e,value:r,onChange:l=>o(l.target.value)})},a=g.bind({});a.args={options:[{value:"option1",label:"Option 1"},{value:"option2",label:"Option 2"},{value:"option3",label:"Option 3"}],value:"option1"};const t=g.bind({});t.args={options:[{value:"option1",label:"Option 1"},{value:"option2",label:"Option 2"},{value:"option3",label:"Option 3"}],value:"option1",disabled:!0};var i,p,d;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`args => {
  const [value, setValue] = useState(args.value);
  return <Dropdown {...args} value={value} onChange={(e: {
    target: {
      value: React.SetStateAction<string>;
    };
  }) => setValue(e.target.value)} />;
}`,...(d=(p=a.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};var c,m,v;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`args => {
  const [value, setValue] = useState(args.value);
  return <Dropdown {...args} value={value} onChange={(e: {
    target: {
      value: React.SetStateAction<string>;
    };
  }) => setValue(e.target.value)} />;
}`,...(v=(m=t.parameters)==null?void 0:m.docs)==null?void 0:v.source}}};const x=["Primary","Disabled"];export{t as Disabled,a as Primary,x as __namedExportsOrder,w as default};
