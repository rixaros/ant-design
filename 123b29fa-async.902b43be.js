(("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd=("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd||[]).push([["123b29fa"],{"123b29fa":function(e,t,n){"use strict";var a=n("ecdfa290"),o=n("17b539d1");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=a(n("6e49c8d1")),r=a(n("be2f1eeb")),c=n("e22febe0"),i=n("a9d1a279"),f=a(n("600aabe0")),u=a(n("33c22082")),d=function(e,t){if(e&&e.__esModule)return e;if(null===e||"object"!=o(e)&&"function"!=typeof e)return{default:e};var n=y(void 0);if(n&&n.has(e))return n.get(e);var a={__proto__:null},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in e)if("default"!==r&&Object.prototype.hasOwnProperty.call(e,r)){var c=l?Object.getOwnPropertyDescriptor(e,r):null;c&&(c.get||c.set)?Object.defineProperty(a,r,c):a[r]=e[r];}return a.default=e,n&&n.set(e,a),a;}(n("5b220c3d")),s=a(n("70a9ff02")),m=n("bd55fb5c"),g=a(n("1331c1c4")),h=a(n("ac361412")),b=a(n("3e5c9b49")),p=n("bb70ee62"),v=n("41925e0a");function y(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(y=function(e){return e?n:t;})(e);}function O(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable;})),n.push.apply(n,a);}return n;}function C(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?O(Object(n),!0).forEach(function(t){(0,r.default)(e,t,n[t]);}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):O(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t));});}return e;}var k=(0,a(n("415f9c32")).default)("ThemeEditor",function(e){return(0,r.default)({},e.componentCls,(0,r.default)((0,r.default)({backgroundColor:e.colorBgLayout,height:"100vh",display:"flex",flexDirection:"column"},"".concat(e.componentCls,"-header"),{height:e.headerHeight,display:"flex",alignItems:"center",padding:"0 16px",background:e.colorBgContainer,borderBottom:"1px solid ".concat(e.colorSplit),flex:"0 0 ".concat(e.headerHeight,"px"),"&-title":{fontSize:e.fontSizeLG,fontWeight:e.fontWeightStrong,color:e.colorText},"&-actions":{marginLeft:"auto","&-diff":{fontSize:e.fontSize,color:e.colorTextTertiary}}}),"".concat(e.componentCls,"-body"),{flex:1,height:0}));}),j={name:"\u9ED8\u8BA4\u4E3B\u9898",key:"default",config:{}};function E(e){return"[object Object]"===Object.prototype.toString.call(e);}var P=(0,d.forwardRef)(function(e,t){var n=e.theme,a=e.onThemeChange,o=e.className,r=e.style,y=e.darkAlgorithm,O=e.locale,P=void 0===O?p.zhCN:O,w=e.actions,S=e.mode,T=e.onModeChange,x=e.advanced,M=e.onAdvancedChange,_=e.hideAdvancedSwitcher,D=e.children,N="antd-theme-editor",z=k(N),L=(0,l.default)(z,2),H=L[0],I=L[1],R=(0,d.useState)(!1),A=(0,l.default)(R,2),W=A[0],B=A[1],F=(0,u.default)("global",{value:S,onChange:T}),G=(0,l.default)(F,2),J=G[0],q=G[1],K=i.message.useMessage(),Q=(0,l.default)(K,2),U=Q[0],V=Q[1],X=(0,u.default)(!1,{value:x,onChange:function(e){e||q("global"),null==M||M(e);}}),Y=(0,l.default)(X,2),Z=Y[0],$=Y[1],ee=(0,b.default)({theme:n,defaultTheme:j,onChange:function(e){null==a||a(e);},darkAlgorithm:y}),et=ee.theme,en=ee.infoFollowPrimary,ea=ee.onInfoFollowPrimaryChange,eo=ee.updateRef,el=(0,d.useMemo)(function(){var e=et.config,t=e.token,n=e.components,a=void 0===n?{}:n,o=Object.keys(void 0===t?{}:t).length;return a&&Object.values(a).forEach(function(e){E(e)&&(o+=Object.keys(e).length);}),o;},[et]);(0,d.useImperativeHandle)(t,function(){return{updateRef:eo};});var er=function(){B(!1);};return H(d.default.createElement(p.LocaleContext.Provider,{value:P},d.default.createElement(m.AdvancedContext.Provider,{value:Z},V,d.default.createElement("div",{className:(0,f.default)(I,N,o),style:r},d.default.createElement("div",{className:"".concat(N,"-header")},d.default.createElement("div",{className:"".concat(N,"-header-title")},P.title),!_&&d.default.createElement(i.Dropdown,{trigger:["click"],menu:{items:[{key:"basic",label:P.basicMode,onClick:function(){return $(!1);}},{key:"advanced",label:P.advancedMode,onClick:function(){return $(!0);}}]}},d.default.createElement(i.Tag,{color:Z?"blue":"green",style:{marginLeft:24,cursor:"pointer",fontSize:12}},d.default.createElement("span",null,Z?P.advancedMode:P.basicMode),d.default.createElement(c.CaretDownOutlined,{style:{fontSize:10}}))),Z&&d.default.createElement(i.Segmented,{value:J,options:[{label:P.globalToken,value:"global"},{label:P.componentToken,value:"component"}],onChange:function(e){return q(e);},style:{marginLeft:24}}),d.default.createElement("div",{className:"".concat(N,"-header-actions")},d.default.createElement("span",{className:"".concat(N,"-header-actions-diff"),style:{marginRight:8,fontSize:14}},P.total," ",d.default.createElement("span",{style:{color:v.HIGHLIGHT_COLOR}},el)," ",P.changes),d.default.createElement(i.Button,{style:{marginRight:8},onClick:function(){return B(!0);}},P.themeConfig),w)),d.default.createElement("div",{className:"".concat(N,"-body")},"global"===J&&d.default.createElement(h.default,{theme:et,infoFollowPrimary:en,onInfoFollowPrimaryChange:ea},D),"component"===J&&d.default.createElement(s.default,{theme:et})),d.default.createElement(g.default,{open:W,onOk:function(e){var t=C(C({},et),{},{config:e});if(!E(t)){U.error("\u4E3B\u9898 JSON \u683C\u5F0F\u9519\u8BEF");return;}null==a||a(t),er(),U.success("\u7F16\u8F91\u6210\u529F");},theme:et,onCancel:er})))));});t.default=P;}}]);