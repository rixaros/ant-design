(("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd=("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd||[]).push([["5d3cbfba"],{"15047c9c":function(e,n,t){"use strict";t.d(n,"__esModule",{value:!0}),t.d(n,"default",{enumerable:!0,get:function(){return i;}});var r=t("f19d2b93");t("0fef50f8");var l=t("5b220c3d"),o=t("e22febe0"),a=t("a9d1a279");let d=[{label:"Submit and continue",key:"1"}];var i=()=>{let[e,n]=(0,l.useState)([]),t=e=>{n(n=>{let t=[...n];return t[e]=!0,t;}),setTimeout(()=>{n(n=>{let t=[...n];return t[e]=!1,t;});},6e3);};return(0,r.jsxs)(a.Space,{direction:"vertical",children:[(0,r.jsx)(a.Dropdown.Button,{type:"primary",loading:!0,menu:{items:d},children:"Submit"}),(0,r.jsx)(a.Dropdown.Button,{type:"primary",size:"small",loading:!0,menu:{items:d},children:"Submit"}),(0,r.jsx)(a.Dropdown.Button,{type:"primary",loading:e[0],menu:{items:d},onClick:()=>t(0),children:"Submit"}),(0,r.jsx)(a.Dropdown.Button,{icon:(0,r.jsx)(o.DownOutlined,{}),loading:e[1],menu:{items:d},onClick:()=>t(1),children:"Submit"})]});};},"348fe64f":function(e,n,t){"use strict";t.d(n,"__esModule",{value:!0}),t.d(n,"default",{enumerable:!0,get:function(){return a;}});var r=t("f19d2b93");t("6fd6fca1");var l=t("a9d1a279");let o=[{key:"1",label:(0,r.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.antgroup.com",children:"1st menu item"})},{key:"2",label:(0,r.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.aliyun.com",children:"2nd menu item"})},{key:"3",label:(0,r.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.luohanacademy.com",children:"3rd menu item"})}];var a=()=>(0,r.jsxs)(l.Space,{direction:"vertical",children:[(0,r.jsxs)(l.Space,{wrap:!0,children:[(0,r.jsx)(l.Dropdown,{menu:{items:o},placement:"bottomLeft",arrow:!0,children:(0,r.jsx)(l.Button,{children:"bottomLeft"})}),(0,r.jsx)(l.Dropdown,{menu:{items:o},placement:"bottom",arrow:!0,children:(0,r.jsx)(l.Button,{children:"bottom"})}),(0,r.jsx)(l.Dropdown,{menu:{items:o},placement:"bottomRight",arrow:!0,children:(0,r.jsx)(l.Button,{children:"bottomRight"})})]}),(0,r.jsxs)(l.Space,{wrap:!0,children:[(0,r.jsx)(l.Dropdown,{menu:{items:o},placement:"topLeft",arrow:!0,children:(0,r.jsx)(l.Button,{children:"topLeft"})}),(0,r.jsx)(l.Dropdown,{menu:{items:o},placement:"top",arrow:!0,children:(0,r.jsx)(l.Button,{children:"top"})}),(0,r.jsx)(l.Dropdown,{menu:{items:o},placement:"topRight",arrow:!0,children:(0,r.jsx)(l.Button,{children:"topRight"})})]})]});},"3e9387a8":function(e,n,t){"use strict";t.d(n,"__esModule",{value:!0}),t.d(n,"default",{enumerable:!0,get:function(){return a;}});var r=t("f19d2b93");t("079c47f2");var l=t("a9d1a279");let o=[{label:"1st menu item",key:"1"},{label:"2nd menu item",key:"2"},{label:"3rd menu item",key:"3"}];var a=()=>{let{token:{colorBgLayout:e,colorTextTertiary:n}}=l.theme.useToken();return(0,r.jsx)(l.Dropdown,{menu:{items:o},trigger:["contextMenu"],children:(0,r.jsx)("div",{style:{color:n,background:e,height:200,textAlign:"center",lineHeight:"200px"},children:"Right Click on here"})});};},"518d5f39":function(e,n,t){"use strict";t.d(n,"__esModule",{value:!0}),t.d(n,"default",{enumerable:!0,get:function(){return d;}});var r=t("f19d2b93");t("1d907343");var l=t("e22febe0"),o=t("a9d1a279");let a=[{key:"1",label:(0,r.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.antgroup.com",children:"1st menu item"})},{key:"2",label:(0,r.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.aliyun.com",children:"2nd menu item (disabled)"}),icon:(0,r.jsx)(l.SmileOutlined,{}),disabled:!0},{key:"3",label:(0,r.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.luohanacademy.com",children:"3rd menu item (disabled)"}),disabled:!0},{key:"4",danger:!0,label:"a danger item"}];var d=()=>(0,r.jsx)(o.Dropdown,{menu:{items:a},children:(0,r.jsx)("a",{onClick:e=>e.preventDefault(),children:(0,r.jsxs)(o.Space,{children:["Hover me",(0,r.jsx)(l.DownOutlined,{})]})})});},"6d894512":function(e,n,t){"use strict";t.d(n,"__esModule",{value:!0}),t.d(n,"default",{enumerable:!0,get:function(){return d;}});var r=t("f19d2b93");t("d704d01c");var l=t("e22febe0");let{_InternalPanelDoNotUseOrYouWillBeFired:o}=t("a9d1a279").Dropdown,a=[{key:"1",label:(0,r.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.antgroup.com",children:"1st menu item"})},{key:"2",label:(0,r.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.aliyun.com",children:"2nd menu item (disabled)"}),icon:(0,r.jsx)(l.SmileOutlined,{}),disabled:!0},{key:"3",label:(0,r.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.luohanacademy.com",children:"3rd menu item (disabled)"}),disabled:!0},{key:"4",danger:!0,label:"a danger item"}];var d=()=>(0,r.jsx)(o,{menu:{items:a}});},"804fc4ef":function(e,n,t){"use strict";t.d(n,"__esModule",{value:!0}),t.d(n,"default",{enumerable:!0,get:function(){return d;}});var r=t("f19d2b93");t("6b636e9e");var l=t("e22febe0"),o=t("a9d1a279");let a=[{label:(0,r.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.antgroup.com",children:"1st menu item"}),key:"0"},{label:(0,r.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.aliyun.com",children:"2nd menu item"}),key:"1"},{type:"divider"},{label:"3rd menu item\uFF08disabled\uFF09",key:"3",disabled:!0}];var d=()=>(0,r.jsx)(o.Dropdown,{menu:{items:a},children:(0,r.jsx)("a",{onClick:e=>e.preventDefault(),children:(0,r.jsxs)(o.Space,{children:["Hover me",(0,r.jsx)(l.DownOutlined,{})]})})});},"88ce6cff":function(e,n,t){"use strict";t.d(n,"__esModule",{value:!0}),t.d(n,"default",{enumerable:!0,get:function(){return d;}});var r=t("f19d2b93");t("a3f7f3d9");var l=t("e22febe0"),o=t("a9d1a279");let a=[{key:"1",type:"group",label:"Group title",children:[{key:"1-1",label:"1st menu item"},{key:"1-2",label:"2nd menu item"}]},{key:"2",label:"sub menu",children:[{key:"2-1",label:"3rd menu item"},{key:"2-2",label:"4th menu item"}]},{key:"3",label:"disabled sub menu",disabled:!0,children:[{key:"3-1",label:"5d menu item"},{key:"3-2",label:"6th menu item"}]}];var d=()=>(0,r.jsx)("div",{style:{height:200},children:(0,r.jsx)(o.Dropdown,{menu:{items:a,openKeys:["2"]},open:!0,autoAdjustOverflow:!1,children:(0,r.jsx)("a",{onClick:e=>e.preventDefault(),children:(0,r.jsxs)(o.Space,{children:["Cascading menu",(0,r.jsx)(l.DownOutlined,{})]})})})});},"9919536e":function(e,n,t){"use strict";t.d(n,"__esModule",{value:!0}),t.d(n,"default",{enumerable:!0,get:function(){return i;}});var r=t("f19d2b93");t("026f22db");var l=t("e22febe0"),o=t("a9d1a279");function a(e,n,t,r,l){return{key:n,icon:t,children:r,label:e,type:l};}let d=[a("Item Group","group",null,[a("Option 0","01"),a("Option 0","02")],"group"),a("Navigation One","sub1",(0,r.jsx)(l.MailOutlined,{}),[a("Item 1","g1",null,[a("Option 1","1"),a("Option 2","2")],"group"),a("Item 2","g2",null,[a("Option 3","3"),a("Option 4","4")],"group")]),a("Navigation Two","sub2",(0,r.jsx)(l.AppstoreOutlined,{}),[a("Option 5","5"),a("Option 6","6"),a("Submenu","sub3",null,[a("Option 7","7"),a("Option 8","8")])]),a("Navigation Three","sub4",(0,r.jsx)(l.SettingOutlined,{}),[a("Option 9","9"),a("Option 10","10"),a("Option 11","11"),a("Option 12","12")]),null];var i=()=>(0,r.jsx)(o.Dropdown,{menu:{items:d,selectedKeys:["1"],openKeys:["sub1"]},children:(0,r.jsx)("a",{onClick:e=>e.preventDefault(),children:(0,r.jsxs)(o.Space,{children:["Hover to check menu style",(0,r.jsx)(l.DownOutlined,{})]})})});},a040a548:function(e,n,t){"use strict";t.d(n,"__esModule",{value:!0}),t.d(n,"default",{enumerable:!0,get:function(){return i;}});var r=t("f19d2b93");t("6eead573");var l=t("e22febe0"),o=t("a9d1a279");let a=({key:e})=>{o.message.info(`Click on item ${e}`);},d=[{label:"1st menu item",key:"1"},{label:"2nd menu item",key:"2"},{label:"3rd menu item",key:"3"}];var i=()=>(0,r.jsx)(o.Dropdown,{menu:{items:d,onClick:a},children:(0,r.jsx)("a",{onClick:e=>e.preventDefault(),children:(0,r.jsxs)(o.Space,{children:["Hover me, Click menu item",(0,r.jsx)(l.DownOutlined,{})]})})});},a8936d6a:function(e,n,t){"use strict";t.d(n,"__esModule",{value:!0}),t.d(n,"default",{enumerable:!0,get:function(){return c;}});var r=t("777fffbe"),l=t("f19d2b93");t("74cf00c5");var o=r._(t("5b220c3d")),a=t("e22febe0"),d=t("a9d1a279");let{useToken:i}=d.theme,u=[{key:"1",label:(0,l.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.antgroup.com",children:"1st menu item"})},{key:"2",label:(0,l.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.aliyun.com",children:"2nd menu item (disabled)"}),disabled:!0},{key:"3",label:(0,l.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.luohanacademy.com",children:"3rd menu item (disabled)"}),disabled:!0}];var c=()=>{let{token:e}=i(),n={backgroundColor:e.colorBgElevated,borderRadius:e.borderRadiusLG,boxShadow:e.boxShadowSecondary},t={boxShadow:"none"};return(0,l.jsx)(d.Dropdown,{menu:{items:u},dropdownRender:e=>(0,l.jsxs)("div",{style:n,children:[o.default.cloneElement(e,{style:t}),(0,l.jsx)(d.Divider,{style:{margin:0}}),(0,l.jsx)(d.Space,{style:{padding:8},children:(0,l.jsx)(d.Button,{type:"primary",children:"Click me!"})})]}),children:(0,l.jsx)("a",{onClick:e=>e.preventDefault(),children:(0,l.jsxs)(d.Space,{children:["Hover me",(0,l.jsx)(a.DownOutlined,{})]})})});};},baa9e58e:function(e,n,t){"use strict";t.d(n,"__esModule",{value:!0}),t.d(n,"default",{enumerable:!0,get:function(){return d;}});var r=t("f19d2b93");t("31a5aae3");var l=t("e22febe0"),o=t("a9d1a279");let a=[{key:"1",type:"group",label:"Group title",children:[{key:"1-1",label:"1st menu item"},{key:"1-2",label:"2nd menu item"}]},{key:"2",label:"sub menu",children:[{key:"2-1",label:"3rd menu item"},{key:"2-2",label:"4th menu item"}]},{key:"3",label:"disabled sub menu",disabled:!0,children:[{key:"3-1",label:"5d menu item"},{key:"3-2",label:"6th menu item"}]}];var d=()=>(0,r.jsx)(o.Dropdown,{menu:{items:a},children:(0,r.jsx)("a",{onClick:e=>e.preventDefault(),children:(0,r.jsxs)(o.Space,{children:["Cascading menu",(0,r.jsx)(l.DownOutlined,{})]})})});},bb8c45c2:function(e,n,t){"use strict";t.d(n,"__esModule",{value:!0}),t.d(n,"default",{enumerable:!0,get:function(){return d;}});var r=t("f19d2b93");t("769eb070");var l=t("5b220c3d"),o=t("e22febe0"),a=t("a9d1a279"),d=()=>{let[e,n]=(0,l.useState)(!1);return(0,r.jsx)(a.Dropdown,{menu:{items:[{label:"Clicking me will not close the menu.",key:"1"},{label:"Clicking me will not close the menu also.",key:"2"},{label:"Clicking me will close the menu.",key:"3"}],onClick:e=>{"3"===e.key&&n(!1);}},onOpenChange:(e,t)=>{("trigger"===t.source||e)&&n(e);},open:e,children:(0,r.jsx)("a",{onClick:e=>e.preventDefault(),children:(0,r.jsxs)(a.Space,{children:["Hover me",(0,r.jsx)(o.DownOutlined,{})]})})});};},c0f50d1b:function(e,n,t){"use strict";t.d(n,"__esModule",{value:!0}),t.d(n,"default",{enumerable:!0,get:function(){return a;}});var r=t("f19d2b93");t("02b8fe80");var l=t("a9d1a279");let o=[{key:"1",label:(0,r.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.antgroup.com",children:"1st menu item"})},{key:"2",label:(0,r.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.aliyun.com",children:"2nd menu item"})},{key:"3",label:(0,r.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.luohanacademy.com",children:"3rd menu item"})}];var a=()=>(0,r.jsxs)(l.Space,{direction:"vertical",children:[(0,r.jsxs)(l.Space,{wrap:!0,children:[(0,r.jsx)(l.Dropdown,{menu:{items:o},placement:"bottomLeft",arrow:{pointAtCenter:!0},children:(0,r.jsx)(l.Button,{children:"bottomLeft"})}),(0,r.jsx)(l.Dropdown,{menu:{items:o},placement:"bottom",arrow:{pointAtCenter:!0},children:(0,r.jsx)(l.Button,{children:"bottom"})}),(0,r.jsx)(l.Dropdown,{menu:{items:o},placement:"bottomRight",arrow:{pointAtCenter:!0},children:(0,r.jsx)(l.Button,{children:"bottomRight"})})]}),(0,r.jsxs)(l.Space,{wrap:!0,children:[(0,r.jsx)(l.Dropdown,{menu:{items:o},placement:"topLeft",arrow:{pointAtCenter:!0},children:(0,r.jsx)(l.Button,{children:"topLeft"})}),(0,r.jsx)(l.Dropdown,{menu:{items:o},placement:"top",arrow:{pointAtCenter:!0},children:(0,r.jsx)(l.Button,{children:"top"})}),(0,r.jsx)(l.Dropdown,{menu:{items:o},placement:"topRight",arrow:{pointAtCenter:!0},children:(0,r.jsx)(l.Button,{children:"topRight"})})]})]});},ca9008a6:function(e,n,t){"use strict";t.d(n,"__esModule",{value:!0}),t.d(n,"default",{enumerable:!0,get:function(){return d;}});var r=t("f19d2b93");t("8d6ea8ed");var l=t("e22febe0"),o=t("a9d1a279");let a=[{key:"1",label:"Item 1"},{key:"2",label:"Item 2"},{key:"3",label:"Item 3"}];var d=()=>(0,r.jsx)(o.Dropdown,{menu:{items:a,selectable:!0,defaultSelectedKeys:["3"]},children:(0,r.jsx)(o.Typography.Link,{children:(0,r.jsxs)(o.Space,{children:["Selectable",(0,r.jsx)(l.DownOutlined,{})]})})});},e30474b6:function(e,n,t){"use strict";t.d(n,"__esModule",{value:!0}),t.d(n,"default",{enumerable:!0,get:function(){return a;}});var r=t("f19d2b93");t("96a8b7e7");var l=t("a9d1a279");let o=[{key:"1",label:(0,r.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.antgroup.com",children:"1st menu item"})},{key:"2",label:(0,r.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.aliyun.com",children:"2nd menu item"})},{key:"3",label:(0,r.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.luohanacademy.com",children:"3rd menu item"})}];var a=()=>(0,r.jsxs)(l.Space,{direction:"vertical",children:[(0,r.jsxs)(l.Space,{wrap:!0,children:[(0,r.jsx)(l.Dropdown,{menu:{items:o},placement:"bottomLeft",children:(0,r.jsx)(l.Button,{children:"bottomLeft"})}),(0,r.jsx)(l.Dropdown,{menu:{items:o},placement:"bottom",children:(0,r.jsx)(l.Button,{children:"bottom"})}),(0,r.jsx)(l.Dropdown,{menu:{items:o},placement:"bottomRight",children:(0,r.jsx)(l.Button,{children:"bottomRight"})})]}),(0,r.jsxs)(l.Space,{wrap:!0,children:[(0,r.jsx)(l.Dropdown,{menu:{items:o},placement:"topLeft",children:(0,r.jsx)(l.Button,{children:"topLeft"})}),(0,r.jsx)(l.Dropdown,{menu:{items:o},placement:"top",children:(0,r.jsx)(l.Button,{children:"top"})}),(0,r.jsx)(l.Dropdown,{menu:{items:o},placement:"topRight",children:(0,r.jsx)(l.Button,{children:"topRight"})})]})]});},e6a372c7:function(e,n,t){"use strict";t.d(n,"__esModule",{value:!0}),t.d(n,"default",{enumerable:!0,get:function(){return c;}});var r=t("777fffbe"),l=t("f19d2b93");t("36a4159e");var o=r._(t("5b220c3d")),a=t("e22febe0"),d=t("a9d1a279");let i=e=>{d.message.info("Click on left button."),console.log("click left button",e);},u={items:[{label:"1st menu item",key:"1",icon:(0,l.jsx)(a.UserOutlined,{})},{label:"2nd menu item",key:"2",icon:(0,l.jsx)(a.UserOutlined,{})},{label:"3rd menu item",key:"3",icon:(0,l.jsx)(a.UserOutlined,{}),danger:!0},{label:"4rd menu item",key:"4",icon:(0,l.jsx)(a.UserOutlined,{}),danger:!0,disabled:!0}],onClick:e=>{d.message.info("Click on menu item."),console.log("click",e);}};var c=()=>(0,l.jsxs)(d.Space,{wrap:!0,children:[(0,l.jsx)(d.Dropdown.Button,{menu:u,onClick:i,children:"Dropdown"}),(0,l.jsx)(d.Dropdown.Button,{menu:u,placement:"bottom",icon:(0,l.jsx)(a.UserOutlined,{}),children:"Dropdown"}),(0,l.jsx)(d.Dropdown.Button,{menu:u,onClick:i,disabled:!0,children:"Dropdown"}),(0,l.jsx)(d.Dropdown.Button,{menu:u,buttonsRender:([e,n])=>[(0,l.jsx)(d.Tooltip,{title:"tooltip",children:e},"leftButton"),o.default.cloneElement(n,{loading:!0})],children:"With Tooltip"}),(0,l.jsx)(d.Dropdown,{menu:u,children:(0,l.jsx)(d.Button,{children:(0,l.jsxs)(d.Space,{children:["Button",(0,l.jsx)(a.DownOutlined,{})]})})}),(0,l.jsx)(d.Dropdown.Button,{menu:u,onClick:i,danger:!0,children:"Danger"})]});},e9edb21b:function(e,n,t){"use strict";t.d(n,"__esModule",{value:!0}),t.d(n,"default",{enumerable:!0,get:function(){return d;}});var r=t("f19d2b93");t("bd86365d");var l=t("e22febe0"),o=t("a9d1a279");let a=[{label:(0,r.jsx)("a",{href:"https://www.antgroup.com",children:"1st menu item"}),key:"0"},{label:(0,r.jsx)("a",{href:"https://www.aliyun.com",children:"2nd menu item"}),key:"1"},{type:"divider"},{label:"3rd menu item",key:"3"}];var d=()=>(0,r.jsx)(o.Dropdown,{menu:{items:a},trigger:["click"],children:(0,r.jsx)("a",{onClick:e=>e.preventDefault(),children:(0,r.jsxs)(o.Space,{children:["Click me",(0,r.jsx)(l.DownOutlined,{})]})})});},f1a7d23b:function(e,n,t){"use strict";t.d(n,"__esModule",{value:!0}),t.d(n,"default",{enumerable:!0,get:function(){return d;}});var r=t("f19d2b93");t("12584de4");var l=t("e22febe0"),o=t("a9d1a279");let a=[{key:"1",label:"My Account",disabled:!0},{type:"divider"},{key:"2",label:"Profile",extra:"\u2318P"},{key:"3",label:"Billing",extra:"\u2318B"},{key:"4",label:"Settings",icon:(0,r.jsx)(l.SettingOutlined,{}),extra:"\u2318S"}];var d=()=>(0,r.jsx)(o.Dropdown,{menu:{items:a},children:(0,r.jsx)("a",{onClick:e=>e.preventDefault(),children:(0,r.jsxs)(o.Space,{children:["Hover me",(0,r.jsx)(l.DownOutlined,{})]})})});},fce9d388:function(e,n,t){"use strict";t.d(n,"__esModule",{value:!0}),t.d(n,"default",{enumerable:!0,get:function(){return a;}});var r=t("f19d2b93");t("078f22c2");var l=t("e22febe0"),o=t("a9d1a279"),a=()=>(0,r.jsx)(o.Space,{children:(0,r.jsx)(o.Dropdown.Button,{icon:(0,r.jsx)(l.DownOutlined,{}),menu:{items:[]},children:"Submit"})});}}]);