import{u as b,j as l,a as o}from"./styled-components.browser.esm-9616713e.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";const y=b.table`
  width: 100%;
  border: none;
  ${e=>e.disabled&&`
    background-color: lightgrey;
    cursor: not-allowed;
    color: #darkgrey;
  `}
`,d=e=>l(y,{...e,children:e.children});try{d.displayName="Table",d.__docgenInfo={description:"",displayName:"Table",props:{disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}}}}}catch{}const m=b.thead`
  font-weight: bold;
  color: ${e=>e.theme.textColor};
`,T=({children:e})=>l(m,{children:e});try{T.displayName="TableHeader",T.__docgenInfo={description:"",displayName:"TableHeader",props:{}}}catch{}const u=b.td`
  padding: 8px;
  text-align: ${e=>e.align||"center"};
`,a=({children:e,align:h="center"})=>l(u,{align:h,children:e});try{a.displayName="TableCell",a.__docgenInfo={description:"",displayName:"TableCell",props:{align:{defaultValue:{value:"center"},description:"",name:"align",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'},{value:'"center"'}]}}}}}catch{}const g=b.tr`
  &:nth-child(even) {
    background-color: #f9f9f9;
  }
`,r=({children:e})=>l(g,{children:e});try{r.displayName="TableRow",r.__docgenInfo={description:"",displayName:"TableRow",props:{}}}catch{}const f=b.tfoot`
    width: 100%;
`,c=({children:e})=>l(f,{children:e});try{c.displayName="TableFooter",c.__docgenInfo={description:"",displayName:"TableFooter",props:{}}}catch{}const x={title:"Components/Table",component:d},_=e=>o(d,{...e,children:[l(T,{children:o(r,{children:[l(a,{children:"Header 1"}),l(a,{children:"Header 2"})]})}),o("tbody",{children:[o(r,{children:[l(a,{children:"Row 1, Cell 1"}),l(a,{children:"Row 1, Cell 2"})]}),o(r,{children:[l(a,{children:"Row 2, Cell 1"}),l(a,{children:"Row 2, Cell 2"})]}),o(r,{children:[l(a,{children:"Row 3, Cell 1"}),l(a,{children:"Row 3, Cell 2"})]}),o(r,{children:[l(a,{children:"Row 4, Cell 1"}),l(a,{children:"Row 4, Cell 2"})]})]}),l(c,{children:o(r,{children:[l(a,{children:"Footer 1"}),l(a,{children:"Footer 2"})]})})]}),n=_.bind({});n.args={};const t=_.bind({});t.args={disabled:!0};var s,i,C;n.parameters={...n.parameters,docs:{...(s=n.parameters)==null?void 0:s.docs,source:{originalSource:`args => <Table {...args}>
    <TableHeader>
      <TableRow>
        <TableCell>Header 1</TableCell>
        <TableCell>Header 2</TableCell>
      </TableRow>
    </TableHeader>
    <tbody>
      <TableRow>
        <TableCell>Row 1, Cell 1</TableCell>
        <TableCell>Row 1, Cell 2</TableCell>
      </TableRow>
      <TableRow>
        <TableCell>Row 2, Cell 1</TableCell>
        <TableCell>Row 2, Cell 2</TableCell>
      </TableRow>
      <TableRow>
        <TableCell>Row 3, Cell 1</TableCell>
        <TableCell>Row 3, Cell 2</TableCell>
      </TableRow>
      <TableRow>
        <TableCell>Row 4, Cell 1</TableCell>
        <TableCell>Row 4, Cell 2</TableCell>
      </TableRow>
    </tbody>
    <TableFooter>
      <TableRow>
        <TableCell>Footer 1</TableCell>
        <TableCell>Footer 2</TableCell>
      </TableRow>
    </TableFooter>
  </Table>`,...(C=(i=n.parameters)==null?void 0:i.docs)==null?void 0:C.source}}};var w,p,R;t.parameters={...t.parameters,docs:{...(w=t.parameters)==null?void 0:w.docs,source:{originalSource:`args => <Table {...args}>
    <TableHeader>
      <TableRow>
        <TableCell>Header 1</TableCell>
        <TableCell>Header 2</TableCell>
      </TableRow>
    </TableHeader>
    <tbody>
      <TableRow>
        <TableCell>Row 1, Cell 1</TableCell>
        <TableCell>Row 1, Cell 2</TableCell>
      </TableRow>
      <TableRow>
        <TableCell>Row 2, Cell 1</TableCell>
        <TableCell>Row 2, Cell 2</TableCell>
      </TableRow>
      <TableRow>
        <TableCell>Row 3, Cell 1</TableCell>
        <TableCell>Row 3, Cell 2</TableCell>
      </TableRow>
      <TableRow>
        <TableCell>Row 4, Cell 1</TableCell>
        <TableCell>Row 4, Cell 2</TableCell>
      </TableRow>
    </tbody>
    <TableFooter>
      <TableRow>
        <TableCell>Footer 1</TableCell>
        <TableCell>Footer 2</TableCell>
      </TableRow>
    </TableFooter>
  </Table>`,...(R=(p=t.parameters)==null?void 0:p.docs)==null?void 0:R.source}}};const S=["Default","DisabledTable"];export{n as Default,t as DisabledTable,S as __namedExportsOrder,x as default};
