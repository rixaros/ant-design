(("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd=("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd||[]).push([["188b7d4f"],{"188b7d4f":function(e,t,l){"use strict";l.d(t,"__esModule",{value:!0}),l.d(t,"default",{enumerable:!0,get:function(){return i;}});var i=l("777fffbe")._(l("a595f12e")).default;},a595f12e:function(e,t,l){"use strict";var i=l("852bbaa9")._;l.d(t,"__esModule",{value:!0}),l.d(t,"default",{enumerable:!0,get:function(){return m;}});var s=l("777fffbe"),n=l("852bbaa9"),a=l("f19d2b93"),d=n._(l("5b220c3d")),o=l("a9d1a279"),r=l("97e4b5b7"),u=l("9c86e52a"),c=s._(l("23546486"));let f=d.default.lazy(()=>Promise.all([l.ensure("vendors_1"),l.ensure("123b29fa")]).then(l.dr(i,l.bind(l,"123b29fa")))),h={cn:{title:"\u4E3B\u9898\u7F16\u8F91\u5668",save:"\u4FDD\u5B58",edit:"\u7F16\u8F91",export:"\u5BFC\u51FA",editModelTitle:"\u7F16\u8F91\u4E3B\u9898\u914D\u7F6E",editJsonContentTypeError:"\u4E3B\u9898 JSON \u683C\u5F0F\u9519\u8BEF",editSuccessfully:"\u7F16\u8F91\u6210\u529F",saveSuccessfully:"\u4FDD\u5B58\u6210\u529F",initialEditor:"\u6B63\u5728\u521D\u59CB\u5316\u7F16\u8F91\u5668..."},en:{title:"Theme Editor",save:"Save",edit:"Edit",export:"Export",editModelTitle:"edit Theme Config",editJsonContentTypeError:"The theme of the JSON format is incorrect",editSuccessfully:"Edited successfully",saveSuccessfully:"Saved successfully",initialEditor:"Initializing Editor..."}},b="ant-design-v5-theme-editor-theme";var m=()=>{let{message:e}=o.App.useApp(),[t,l]=(0,c.default)(h),[i,s]=d.default.useState({});return(0,d.useEffect)(()=>{let e=localStorage.getItem(b);e&&s(JSON.parse(e));},[]),(0,a.jsxs)("div",{children:[(0,a.jsxs)(u.Helmet,{children:[(0,a.jsx)("title",{children:`${t.title} - Ant Design`}),(0,a.jsx)("meta",{property:"og:title",content:`${t.title} - Ant Design`})]}),(0,a.jsx)(d.Suspense,{fallback:(0,a.jsx)(o.Skeleton,{style:{margin:24}}),children:(0,a.jsx)(f,{advanced:!0,hideAdvancedSwitcher:!0,theme:{name:"Custom Theme",key:"test",config:i},style:{height:"calc(100vh - 64px)"},onThemeChange:e=>{s(e.config);},locale:"cn"===l?r.zhCN:r.enUS,actions:(0,a.jsx)(o.Button,{type:"primary",onClick:()=>{localStorage.setItem(b,JSON.stringify(i)),e.success(t.saveSuccessfully);},children:t.save})})})]});};}}]);