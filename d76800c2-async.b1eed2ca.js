(("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd=("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd||[]).push([["d76800c2"],{"0233e4e8":function(e,a,t){"use strict";t.d(a,"__esModule",{value:!0}),t.d(a,"default",{enumerable:!0,get:function(){return d;}});var n=t("f19d2b93");t("a3d831de");var l=t("e22febe0"),o=t("a9d1a279");let i={action:"//jsonplaceholder.typicode.com/posts/",listType:"picture",previewFile:e=>(console.log("Your upload file:",e),fetch("https://next.json-generator.com/api/json/get/4ytyBoLK8",{method:"POST",body:e}).then(e=>e.json()).then(({thumbnail:e})=>e))};var d=()=>(0,n.jsx)(o.Upload,{...i,children:(0,n.jsx)(o.Button,{icon:(0,n.jsx)(l.UploadOutlined,{}),children:"Upload"})});},"08c36089":function(e,a,t){"use strict";t.d(a,"__esModule",{value:!0}),t.d(a,"default",{enumerable:!0,get:function(){return r;}});var n=t("f19d2b93");t("239e5624");var l=t("5b220c3d"),o=t("e22febe0"),i=t("a9d1a279");let d=(e,a)=>{let t=new FileReader;t.addEventListener("load",()=>a(t.result)),t.readAsDataURL(e);},s=e=>{let a="image/jpeg"===e.type||"image/png"===e.type;a||i.message.error("You can only upload JPG/PNG file!");let t=e.size/1024/1024<2;return t||i.message.error("Image must smaller than 2MB!"),a&&t;};var r=()=>{let[e,a]=(0,l.useState)(!1),[t,r]=(0,l.useState)(),u=e=>{if("uploading"===e.file.status){a(!0);return;}"done"===e.file.status&&d(e.file.originFileObj,e=>{a(!1),r(e);});},p=(0,n.jsxs)("button",{style:{border:0,background:"none"},type:"button",children:[e?(0,n.jsx)(o.LoadingOutlined,{}):(0,n.jsx)(o.PlusOutlined,{}),(0,n.jsx)("div",{style:{marginTop:8},children:"Upload"})]});return(0,n.jsxs)(i.Flex,{gap:"middle",wrap:!0,children:[(0,n.jsx)(i.Upload,{name:"avatar",listType:"picture-card",className:"avatar-uploader",showUploadList:!1,action:"https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload",beforeUpload:s,onChange:u,children:t?(0,n.jsx)("img",{src:t,alt:"avatar",style:{width:"100%"}}):p}),(0,n.jsx)(i.Upload,{name:"avatar",listType:"picture-circle",className:"avatar-uploader",showUploadList:!1,action:"https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload",beforeUpload:s,onChange:u,children:t?(0,n.jsx)("img",{src:t,alt:"avatar",style:{width:"100%"}}):p})]});};},"0b82e25f":function(e,a,t){"use strict";t.d(a,"__esModule",{value:!0}),t.d(a,"default",{enumerable:!0,get:function(){return d;}});var n=t("f19d2b93");t("a6e7809e");var l=t("e22febe0"),o=t("a9d1a279");let i={beforeUpload:e=>{let a="image/png"===e.type;return a||o.message.error(`${e.name} is not a png file`),a||o.Upload.LIST_IGNORE;},onChange:e=>{console.log(e.fileList);}};var d=()=>(0,n.jsx)(o.Upload,{...i,children:(0,n.jsx)(o.Button,{icon:(0,n.jsx)(l.UploadOutlined,{}),children:"Upload png only"})});},"0d0b908e":function(e,a,t){"use strict";t.d(a,"__esModule",{value:!0}),t.d(a,"default",{enumerable:!0,get:function(){return d;}});var n=t("f19d2b93");t("673426ab");var l=t("5b220c3d"),o=t("e22febe0"),i=t("a9d1a279"),d=()=>{let[e,a]=(0,l.useState)([{uid:"-1",name:"xxx.png",status:"done",url:"http://www.baidu.com/xxx.png"}]);return(0,n.jsx)(i.Upload,{action:"https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload",onChange:e=>{let t=[...e.fileList];a(t=(t=t.slice(-2)).map(e=>(e.response&&(e.url=e.response.url),e)));},multiple:!0,fileList:e,children:(0,n.jsx)(i.Button,{icon:(0,n.jsx)(o.UploadOutlined,{}),children:"Upload"})});};},"127530ff":function(e,a,t){"use strict";t.d(a,"__esModule",{value:!0}),t.d(a,"default",{enumerable:!0,get:function(){return s;}});var n=t("f19d2b93");t("88746497");var l=t("5b220c3d"),o=t("e22febe0"),i=t("a9d1a279");let d=({value:e,onChange:a})=>{let[t,d]=(0,l.useState)(),s=()=>({dir:"user-dir/",expire:"1577811661",host:"https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload",accessId:"c2hhb2RhaG9uZw==",policy:"eGl4aWhhaGFrdWt1ZGFkYQ==",signature:"ZGFob25nc2hhbw=="}),r=async()=>{try{let e=await s();d(e);}catch(e){i.message.error(e);}};(0,l.useEffect)(()=>{r();},[]);let u=async e=>{if(!t)return!1;1e3*Number(t.expire)<Date.now()&&await r();let a=e.name.slice(e.name.lastIndexOf(".")),n=Date.now()+a;return e.url=t.dir+n,e;},p={name:"file",fileList:e,action:null==t?void 0:t.host,onChange:({fileList:e})=>{console.log("Aliyun OSS:",e),null==a||a([...e]);},onRemove:t=>{let n=(e||[]).filter(e=>e.url!==t.url);a&&a(n);},data:e=>({key:e.url,OSSAccessKeyId:null==t?void 0:t.accessId,policy:null==t?void 0:t.policy,Signature:null==t?void 0:t.signature}),beforeUpload:u};return(0,n.jsx)(i.Upload,{...p,children:(0,n.jsx)(i.Button,{icon:(0,n.jsx)(o.UploadOutlined,{}),children:"Click to Upload"})});};var s=()=>(0,n.jsx)(i.Form,{labelCol:{span:4},children:(0,n.jsx)(i.Form.Item,{label:"Photos",name:"photos",children:(0,n.jsx)(d,{})})});},"1a0f0ca6":function(e,a,t){"use strict";t.d(a,"__esModule",{value:!0}),t.d(a,"default",{enumerable:!0,get:function(){return p;}});var n=t("f19d2b93");t("e77f1b4a");var l=t("5b220c3d"),o=t("e22febe0"),i=t("915a4463"),d=t("9944ffaa"),s=t("7f663da5"),r=t("a9d1a279");let u=({originNode:e,file:a})=>{let{attributes:t,listeners:l,setNodeRef:o,transform:i,transition:r,isDragging:u}=(0,d.useSortable)({id:a.uid}),p={transform:s.CSS.Translate.toString(i),transition:r,cursor:"move"};return(0,n.jsx)("div",{ref:o,style:p,className:u?"is-dragging":"",...t,...l,children:"error"===a.status&&u?e.props.children:e});};var p=()=>{let[e,a]=(0,l.useState)([{uid:"-1",name:"image1.png",status:"done",url:"https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"},{uid:"-2",name:"image2.png",status:"done",url:"https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"},{uid:"-3",name:"image3.png",status:"done",url:"https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"},{uid:"-4",name:"image4.png",status:"done",url:"https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"},{uid:"-5",name:"image.png",status:"error"}]),t=(0,i.useSensor)(i.PointerSensor,{activationConstraint:{distance:10}});return(0,n.jsx)(i.DndContext,{sensors:[t],onDragEnd:({active:e,over:t})=>{e.id!==(null==t?void 0:t.id)&&a(a=>{let n=a.findIndex(a=>a.uid===e.id),l=a.findIndex(e=>e.uid===(null==t?void 0:t.id));return(0,d.arrayMove)(a,n,l);});},children:(0,n.jsx)(d.SortableContext,{items:e.map(e=>e.uid),strategy:d.verticalListSortingStrategy,children:(0,n.jsx)(r.Upload,{action:"https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload",fileList:e,onChange:({fileList:e})=>{a(e);},itemRender:(e,a)=>(0,n.jsx)(u,{originNode:e,file:a}),children:(0,n.jsx)(r.Button,{icon:(0,n.jsx)(o.UploadOutlined,{}),children:"Click to Upload"})})})});};},"20ca9577":function(e,a,t){"use strict";t.d(a,"__esModule",{value:!0}),t.d(a,"default",{enumerable:!0,get:function(){return i;}});var n=t("f19d2b93");t("fb163429");var l=t("e22febe0"),o=t("a9d1a279"),i=()=>(0,n.jsx)(o.Upload,{action:"https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload",directory:!0,children:(0,n.jsx)(o.Button,{icon:(0,n.jsx)(l.UploadOutlined,{}),children:"Upload Directory"})});},"25c16012":function(e,a,t){"use strict";t.d(a,"__esModule",{value:!0}),t.d(a,"default",{enumerable:!0,get:function(){return s;}});var n=t("f19d2b93");t("3f74e845");var l=t("e22febe0"),o=t("a9d1a279");let{Dragger:i}=o.Upload,d=[{uid:"-1",name:"image.png",status:"done",url:"https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"},{uid:"-2",name:"image.png",status:"done",url:"https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"},{uid:"-xxx",percent:50,name:"image.png",status:"uploading",url:"https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"},{uid:"-5",name:"image.png",status:"error"}];var s=()=>{let e=(0,n.jsxs)("button",{style:{border:0,background:"none"},type:"button",children:[(0,n.jsx)(l.PlusOutlined,{}),(0,n.jsx)("div",{style:{marginTop:8},children:"Upload"})]});return(0,n.jsxs)(o.Space,{direction:"vertical",children:[(0,n.jsx)(o.Upload,{disabled:!0,children:"Click Text to Upload"}),(0,n.jsx)(o.Upload,{disabled:!0,children:(0,n.jsx)(o.Button,{icon:(0,n.jsx)(l.UploadOutlined,{}),children:"Click to Upload"})}),(0,n.jsx)(o.Upload,{name:"avatar",listType:"picture-card",fileList:d,disabled:!0,children:e}),(0,n.jsx)(o.Upload,{name:"avatar",listType:"picture-circle",fileList:d,disabled:!0,children:e}),(0,n.jsxs)(i,{disabled:!0,children:[(0,n.jsx)("p",{className:"ant-upload-drag-icon",children:(0,n.jsx)(l.InboxOutlined,{})}),(0,n.jsx)("p",{className:"ant-upload-text",children:"Click or drag file to this area to upload"}),(0,n.jsx)("p",{className:"ant-upload-hint",children:"Support for a single or bulk upload. Strictly prohibited from uploading company data or other banned files."})]})]});};},"2f6d0717":function(e,a,t){"use strict";t.d(a,"__esModule",{value:!0}),t.d(a,"default",{enumerable:!0,get:function(){return d;}});var n=t("f19d2b93");t("5ec4a406");var l=t("e22febe0"),o=t("a9d1a279");let i=[{uid:"0",name:"xxx.png",status:"uploading",percent:33},{uid:"-1",name:"yyy.png",status:"done",url:"https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",thumbUrl:"https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"},{uid:"-2",name:"zzz.png",status:"error"}];var d=()=>(0,n.jsx)(o.Upload,{action:"https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload",listType:"picture",defaultFileList:i,children:(0,n.jsx)(o.Button,{type:"primary",icon:(0,n.jsx)(l.UploadOutlined,{}),children:"Upload"})});},"4c3ad593":function(e,a,t){"use strict";t.d(a,"__esModule",{value:!0}),t.d(a,"default",{enumerable:!0,get:function(){return s;}});var n=t("777fffbe"),l=t("f19d2b93");t("4a566940");var o=t("5b220c3d"),i=t("a9d1a279"),d=n._(t("019abefd")),s=()=>{let[e,a]=(0,o.useState)([{uid:"-1",name:"image.png",status:"done",url:"https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"}]),t=async e=>{let a=e.url;a||(a=await new Promise(a=>{let t=new FileReader;t.readAsDataURL(e.originFileObj),t.onload=()=>a(t.result);}));let t=new Image;t.src=a;let n=window.open(a);null==n||n.document.write(t.outerHTML);};return(0,l.jsx)(d.default,{rotationSlider:!0,children:(0,l.jsx)(i.Upload,{action:"https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload",listType:"picture-card",fileList:e,onChange:({fileList:e})=>{a(e);},onPreview:t,children:e.length<5&&"+ Upload"})});};},"5dad80a7":function(e,a,t){"use strict";t.d(a,"__esModule",{value:!0}),t.d(a,"default",{enumerable:!0,get:function(){return d;}});var n=t("f19d2b93");t("02bbb19b");var l=t("e22febe0"),o=t("a9d1a279");let i={name:"file",action:"https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload",headers:{authorization:"authorization-text"},onChange(e){"uploading"!==e.file.status&&console.log(e.file,e.fileList),"done"===e.file.status?o.message.success(`${e.file.name} file uploaded successfully`):"error"===e.file.status&&o.message.error(`${e.file.name} file upload failed.`);},progress:{strokeColor:{"0%":"#108ee9","100%":"#87d068"},strokeWidth:3,format:e=>e&&`${parseFloat(e.toFixed(2))}%`}};var d=()=>(0,n.jsx)(o.Upload,{...i,children:(0,n.jsx)(o.Button,{icon:(0,n.jsx)(l.UploadOutlined,{}),children:"Click to Upload"})});},"67c0461c":function(e,a,t){"use strict";t.d(a,"__esModule",{value:!0}),t.d(a,"default",{enumerable:!0,get:function(){return i;}});var n=t("f19d2b93");t("b529e592");var l=t("e22febe0"),o=t("a9d1a279"),i=()=>(0,n.jsxs)(o.Space,{direction:"vertical",style:{width:"100%"},size:"large",children:[(0,n.jsx)(o.Upload,{action:"https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload",listType:"picture",maxCount:1,children:(0,n.jsx)(o.Button,{icon:(0,n.jsx)(l.UploadOutlined,{}),children:"Upload (Max: 1)"})}),(0,n.jsx)(o.Upload,{action:"https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload",listType:"picture",maxCount:3,multiple:!0,children:(0,n.jsx)(o.Button,{icon:(0,n.jsx)(l.UploadOutlined,{}),children:"Upload (Max: 3)"})})]});},"7f224fc2":function(e,a,t){"use strict";t.d(a,"__esModule",{value:!0}),t.d(a,"default",{enumerable:!0,get:function(){return d;}});var n=t("f19d2b93");t("19bcfe66");var l=t("e22febe0"),o=t("a9d1a279");let i={action:"https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload",listType:"picture",beforeUpload:e=>new Promise(a=>{let t=new FileReader;t.readAsDataURL(e),t.onload=()=>{let e=document.createElement("img");e.src=t.result,e.onload=()=>{let t=document.createElement("canvas");t.width=e.naturalWidth,t.height=e.naturalHeight;let n=t.getContext("2d");n.drawImage(e,0,0),n.fillStyle="red",n.textBaseline="middle",n.font="33px Arial",n.fillText("Ant Design",20,20),t.toBlob(e=>a(e));};};})};var d=()=>(0,n.jsx)(o.Upload,{...i,children:(0,n.jsx)(o.Button,{icon:(0,n.jsx)(l.UploadOutlined,{}),children:"Upload"})});},"814b2c84":function(e,a,t){"use strict";t.d(a,"__esModule",{value:!0}),t.d(a,"default",{enumerable:!0,get:function(){return s;}});var n=t("f19d2b93");t("86251019");var l=t("5b220c3d"),o=t("e22febe0"),i=t("a9d1a279");let d=e=>new Promise((a,t)=>{let n=new FileReader;n.readAsDataURL(e),n.onload=()=>a(n.result),n.onerror=e=>t(e);});var s=()=>{let[e,a]=(0,l.useState)(!1),[t,s]=(0,l.useState)(""),[r,u]=(0,l.useState)([{uid:"-1",name:"image.png",status:"done",url:"https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"},{uid:"-2",name:"image.png",status:"done",url:"https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"},{uid:"-3",name:"image.png",status:"done",url:"https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"},{uid:"-4",name:"image.png",status:"done",url:"https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"},{uid:"-xxx",percent:50,name:"image.png",status:"uploading",url:"https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"},{uid:"-5",name:"image.png",status:"error"}]),p=async e=>{e.url||e.preview||(e.preview=await d(e.originFileObj)),s(e.url||e.preview),a(!0);},c=(0,n.jsxs)("button",{style:{border:0,background:"none"},type:"button",children:[(0,n.jsx)(o.PlusOutlined,{}),(0,n.jsx)("div",{style:{marginTop:8},children:"Upload"})]});return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.Upload,{action:"https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload",listType:"picture-card",fileList:r,onPreview:p,onChange:({fileList:e})=>u(e),children:r.length>=8?null:c}),t&&(0,n.jsx)(i.Image,{wrapperStyle:{display:"none"},preview:{visible:e,onVisibleChange:e=>a(e),afterOpenChange:e=>!e&&s("")},src:t})]});};},"84bf143f":function(e,a,t){"use strict";t.d(a,"__esModule",{value:!0}),t.d(a,"default",{enumerable:!0,get:function(){return d;}});var n=t("f19d2b93");t("08214589");var l=t("e22febe0"),o=t("a9d1a279");let i={name:"file",action:"https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload",headers:{authorization:"authorization-text"},onChange(e){"uploading"!==e.file.status&&console.log(e.file,e.fileList),"done"===e.file.status?o.message.success(`${e.file.name} file uploaded successfully`):"error"===e.file.status&&o.message.error(`${e.file.name} file upload failed.`);}};var d=()=>(0,n.jsx)(o.Upload,{...i,children:(0,n.jsx)(o.Button,{icon:(0,n.jsx)(l.UploadOutlined,{}),children:"Click to Upload"})});},"8c945a26":function(e,a,t){"use strict";t.d(a,"__esModule",{value:!0}),t.d(a,"default",{enumerable:!0,get:function(){return d;}});var n=t("f19d2b93");t("2d4c5ad8");var l=t("5b220c3d"),o=t("e22febe0"),i=t("a9d1a279"),d=()=>{let[e,a]=(0,l.useState)([]),[t,d]=(0,l.useState)(!1);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.Upload,{onRemove:t=>{let n=e.indexOf(t),l=e.slice();l.splice(n,1),a(l);},beforeUpload:t=>(a([...e,t]),!1),fileList:e,children:(0,n.jsx)(i.Button,{icon:(0,n.jsx)(o.UploadOutlined,{}),children:"Select File"})}),(0,n.jsx)(i.Button,{type:"primary",onClick:()=>{let t=new FormData;e.forEach(e=>{t.append("files[]",e);}),d(!0),fetch("https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload",{method:"POST",body:t}).then(e=>e.json()).then(()=>{a([]),i.message.success("upload successfully.");}).catch(()=>{i.message.error("upload failed.");}).finally(()=>{d(!1);});},disabled:0===e.length,loading:t,style:{marginTop:16},children:t?"Uploading":"Start Upload"})]});};},"919451da":function(e,a,t){"use strict";t.d(a,"__esModule",{value:!0}),t.d(a,"default",{enumerable:!0,get:function(){return d;}});var n=t("f19d2b93");t("37e76120");var l=t("e22febe0"),o=t("a9d1a279");let i={action:"https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload",onChange({file:e,fileList:a}){"uploading"!==e.status&&console.log(e,a);},defaultFileList:[{uid:"1",name:"xxx.png",size:1234567,status:"done",response:"Server Error 500",url:"http://www.baidu.com/xxx.png"},{uid:"2",name:"yyy.png",size:1234567,status:"done",url:"http://www.baidu.com/yyy.png"},{uid:"3",name:"zzz.png",size:1234567,status:"error",response:"Server Error 500",url:"http://www.baidu.com/zzz.png"}],showUploadList:{extra:({size:e=0})=>(0,n.jsxs)("span",{style:{color:"#cccccc"},children:["(",(e/1024/1024).toFixed(2),"MB)"]}),showDownloadIcon:!0,downloadIcon:"Download",showRemoveIcon:!0,removeIcon:(0,n.jsx)(l.StarOutlined,{onClick:e=>console.log(e,"custom removeIcon event")})}};var d=()=>(0,n.jsx)(o.Upload,{...i,children:(0,n.jsx)(o.Button,{icon:(0,n.jsx)(l.UploadOutlined,{}),children:"Upload"})});},"9e402f4c":function(e,a,t){"use strict";t.d(a,"__esModule",{value:!0}),t.d(a,"default",{enumerable:!0,get:function(){return s;}});var n=t("f19d2b93");t("b0311274");var l=t("e22febe0"),o=t("a9d1a279");let{Dragger:i}=o.Upload,d={name:"file",multiple:!0,action:"https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload",onChange(e){let{status:a}=e.file;"uploading"!==a&&console.log(e.file,e.fileList),"done"===a?o.message.success(`${e.file.name} file uploaded successfully.`):"error"===a&&o.message.error(`${e.file.name} file upload failed.`);},onDrop(e){console.log("Dropped files",e.dataTransfer.files);}};var s=()=>(0,n.jsxs)(i,{...d,children:[(0,n.jsx)("p",{className:"ant-upload-drag-icon",children:(0,n.jsx)(l.InboxOutlined,{})}),(0,n.jsx)("p",{className:"ant-upload-text",children:"Click or drag file to this area to upload"}),(0,n.jsx)("p",{className:"ant-upload-hint",children:"Support for a single or bulk upload. Strictly prohibited from uploading company data or other banned files."})]});},a4393fb3:function(e,a,t){"use strict";t.d(a,"__esModule",{value:!0}),t.d(a,"default",{enumerable:!0,get:function(){return s;}});var n=t("f19d2b93");t("1705d06c");var l=t("5b220c3d"),o=t("e22febe0"),i=t("a9d1a279");let d=e=>new Promise((a,t)=>{let n=new FileReader;n.readAsDataURL(e),n.onload=()=>a(n.result),n.onerror=e=>t(e);});var s=()=>{let[e,a]=(0,l.useState)(!1),[t,s]=(0,l.useState)(""),[r,u]=(0,l.useState)([{uid:"-1",name:"image.png",status:"done",url:"https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"},{uid:"-xxx",percent:50,name:"image.png",status:"uploading",url:"https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"},{uid:"-5",name:"image.png",status:"error"}]),p=async e=>{e.url||e.preview||(e.preview=await d(e.originFileObj)),s(e.url||e.preview),a(!0);},c=(0,n.jsxs)("button",{style:{border:0,background:"none"},type:"button",children:[(0,n.jsx)(o.PlusOutlined,{}),(0,n.jsx)("div",{style:{marginTop:8},children:"Upload"})]});return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.Upload,{action:"https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload",listType:"picture-circle",fileList:r,onPreview:p,onChange:({fileList:e})=>u(e),children:r.length>=8?null:c}),t&&(0,n.jsx)(i.Image,{wrapperStyle:{display:"none"},preview:{visible:e,onVisibleChange:e=>a(e),afterOpenChange:e=>!e&&s("")},src:t})]});};},ab4ac97e:function(e,a,t){"use strict";t.d(a,"__esModule",{value:!0}),t.d(a,"default",{enumerable:!0,get:function(){return d;}});var n=t("f19d2b93");t("18901ddd");var l=t("e22febe0"),o=t("a9d1a279");let i={action:"https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload",onChange({file:e,fileList:a}){"uploading"!==e.status&&console.log(e,a);},defaultFileList:[{uid:"1",name:"xxx.png",status:"uploading",url:"http://www.baidu.com/xxx.png",percent:33},{uid:"2",name:"yyy.png",status:"done",url:"http://www.baidu.com/yyy.png"},{uid:"3",name:"zzz.png",status:"error",response:"Server Error 500",url:"http://www.baidu.com/zzz.png"}]};var d=()=>(0,n.jsx)(o.Upload,{...i,children:(0,n.jsx)(o.Button,{icon:(0,n.jsx)(l.UploadOutlined,{}),children:"Upload"})});},b57dc0dc:function(e,a,t){"use strict";t.d(a,"__esModule",{value:!0}),t.d(a,"default",{enumerable:!0,get:function(){return s;}});var n=t("f19d2b93");t("77cfdf0c");var l=t("5b220c3d"),o=t("e22febe0"),i=t("a9d1a279");let d=e=>new Promise((a,t)=>{let n=new FileReader;n.readAsDataURL(e),n.onload=()=>a(n.result),n.onerror=e=>t(e);});var s=()=>{let[e,a]=(0,l.useState)(!1),[t,s]=(0,l.useState)(""),[r,u]=(0,l.useState)([{uid:"-2",name:"pdf.pdf",status:"done",url:"http://cdn07.foxitsoftware.cn/pub/foxit/cpdf/FoxitCompanyProfile.pdf"},{uid:"-3",name:"doc.doc",status:"done",url:"https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.doc"},{uid:"-4",name:"image.png",status:"error"},{uid:"-5",name:"pdf.pdf",status:"error"},{uid:"-6",name:"doc.doc",status:"error"}]),p=async e=>{e.url||e.preview||(e.preview=await d(e.originFileObj)),a(!0),s(e.url||e.preview);},c=(0,n.jsxs)("button",{style:{border:0,background:"none"},type:"button",children:[(0,n.jsx)(o.PlusOutlined,{}),(0,n.jsx)("div",{style:{marginTop:8},children:"Upload"})]});return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.Upload,{action:"https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload",listType:"picture-card",fileList:r,onPreview:p,onChange:({fileList:e})=>u(e),iconRender:(e,a)=>{let t=[{type:(0,n.jsx)(o.FilePdfTwoTone,{}),suf:[".pdf"]},{type:(0,n.jsx)(o.FileExcelTwoTone,{}),suf:[".xlsx",".xls",".csv"]},{type:(0,n.jsx)(o.FileWordTwoTone,{}),suf:[".doc",".docx"]},{type:(0,n.jsx)(o.PictureTwoTone,{}),suf:[".webp",".svg",".png",".gif",".jpg",".jpeg",".jfif",".bmp",".dpg"]}],l="uploading"===e.status?(0,n.jsx)(o.LoadingOutlined,{}):(0,n.jsx)(o.PaperClipOutlined,{});return("picture"===a||"picture-card"===a||"picture-circle"===a)&&("picture-card"===a&&"uploading"===e.status?l=(0,n.jsx)(o.LoadingOutlined,{}):t.forEach(a=>{a.suf.includes(e.name.slice(e.name.lastIndexOf(".")))&&(l=a.type);})),l;},children:r.length>=8?null:c}),t&&(0,n.jsx)(i.Image,{wrapperStyle:{display:"none"},preview:{visible:e,onVisibleChange:e=>a(e),afterOpenChange:e=>!e&&s("")},src:t})]});};},e4fb96a1:function(e,a,t){"use strict";t.d(a,"__esModule",{value:!0}),t.d(a,"default",{enumerable:!0,get:function(){return d;}});var n=t("f19d2b93");t("515ef171");var l=t("e22febe0"),o=t("a9d1a279");let i={action:"https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload",onChange({file:e,fileList:a}){"uploading"!==e.status&&console.log(e,a);},defaultFileList:[{uid:"1",name:"xxx.png",status:"uploading",url:"http://www.baidu.com/xxx.png",percent:33},{uid:"2",name:"yyy.png",status:"done",url:"http://www.baidu.com/yyy.png"},{uid:"3",name:"zzz.png",status:"error",response:"Server Error 500",url:"http://www.baidu.com/zzz.png"}]};var d=()=>(0,n.jsx)(o.ConfigProvider,{theme:{components:{Upload:{actionsColor:"yellow"}}},children:(0,n.jsx)(o.Upload,{...i,children:(0,n.jsx)(o.Button,{icon:(0,n.jsx)(l.UploadOutlined,{}),children:"Upload"})})});}}]);