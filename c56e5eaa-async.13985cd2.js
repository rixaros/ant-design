(("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd=("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd||[]).push([["c56e5eaa"],{c56e5eaa:function(e,a,t){"use strict";t.d(a,"__esModule",{value:!0}),t.d(a,"texts",{enumerable:!0,get:function(){return o;}}),t("f4b27995");let o=[{value:"Here are the frequently asked questions about Ant Design and antd that you should look up before you ask in the community or create a new issue. We also maintain a ",paraId:0},{value:"FAQ issues label",paraId:0},{value:" for common GitHub issues.",paraId:0},{value:"undefined",paraId:1},{value:"null",paraId:1},{value:"antd",paraId:1},{value:"Yes. antd will treat ",paraId:2,tocIndex:0},{value:"undefined",paraId:2,tocIndex:0},{value:" as uncontrolled but ",paraId:2,tocIndex:0},{value:"null",paraId:2,tocIndex:0},{value:" as controlled component which means empty value of it.",paraId:2,tocIndex:0},{value:"As input element, React treats both ",paraId:3,tocIndex:0},{value:"undefined",paraId:3,tocIndex:0},{value:" and ",paraId:3,tocIndex:0},{value:"null",paraId:3,tocIndex:0},{value:" as uncontrolled. When the ",paraId:3,tocIndex:0},{value:"value",paraId:3,tocIndex:0},{value:" is converted from a valid value to ",paraId:3,tocIndex:0},{value:"undefined",paraId:3,tocIndex:0},{value:" or ",paraId:3,tocIndex:0},{value:"null",paraId:3,tocIndex:0},{value:", the component is no longer controlled, which causes some unexpected cases.",paraId:3,tocIndex:0},{value:"But in antd, ",paraId:4,tocIndex:0},{value:"undefined",paraId:4,tocIndex:0},{value:" is treated as uncontrolled, and ",paraId:4,tocIndex:0},{value:"null",paraId:4,tocIndex:0},{value:" is used as an explicit empty value of controlled components. To deal with some cases (e.g. ",paraId:4,tocIndex:0},{value:"allowClear",paraId:4,tocIndex:0},{value:") like clearing the ",paraId:4,tocIndex:0},{value:"value",paraId:4,tocIndex:0},{value:" when the ",paraId:4,tocIndex:0},{value:"value",paraId:4,tocIndex:0},{value:" is non-primitive. If you need a component controlled with the ",paraId:4,tocIndex:0},{value:"value",paraId:4,tocIndex:0},{value:" valid, just set the ",paraId:4,tocIndex:0},{value:"value",paraId:4,tocIndex:0},{value:" as ",paraId:4,tocIndex:0},{value:"null",paraId:4,tocIndex:0},{value:".",paraId:4,tocIndex:0},{value:"Note: For ",paraId:5,tocIndex:0},{value:"options",paraId:5,tocIndex:0},{value:" in ",paraId:5,tocIndex:0},{value:"Select-like",paraId:5,tocIndex:0},{value:" components, it is ",paraId:5,tocIndex:0},{value:"strongly recommended not",paraId:5,tocIndex:0},{value:" to use ",paraId:5,tocIndex:0},{value:"undefined",paraId:5,tocIndex:0},{value:" and ",paraId:5,tocIndex:0},{value:"null",paraId:5,tocIndex:0},{value:" as ",paraId:5,tocIndex:0},{value:"value",paraId:5,tocIndex:0},{value:" in ",paraId:5,tocIndex:0},{value:"option",paraId:5,tocIndex:0},{value:". Please use ",paraId:5,tocIndex:0},{value:"string | number",paraId:5,tocIndex:0},{value:" as a valid ",paraId:5,tocIndex:0},{value:"value",paraId:5,tocIndex:0},{value:" in ",paraId:5,tocIndex:0},{value:"option",paraId:5,tocIndex:0},{value:".",paraId:5,tocIndex:0},{value:"NOT RECOMMENDED. Internal API is not guaranteed to be compatible with future versions. It may be removed or changed in some versions. If you really need to use it, you should make sure these APIs are still valid when upgrading to a new version or just lock version for usage.",paraId:6,tocIndex:1},{value:"We are cautious when adding APIs because some APIs may not be abstract enough to become historical debt. For example, when there is a need to change the way of interaction, these poor abstractions may cause breaking changes. To avoid such problems, we recommend that new features be implemented through HOCs first.",paraId:7,tocIndex:2},{value:"Select Dropdown DatePicker TimePicker Popover Popconfirm",paraId:1},{value:"This is an old bug that has been fixed since ",paraId:8,tocIndex:3},{value:"v3.11.x",paraId:8,tocIndex:3},{value:". If you're using an older version, you can use ",paraId:8,tocIndex:3},{value:"<Select getPopupContainer={trigger => trigger.parentElement}>",paraId:8,tocIndex:3},{value:" to render a component inside Popover. (Or other ",paraId:8,tocIndex:3},{value:"getXxxxContainer",paraId:8,tocIndex:3},{value:" props)",paraId:8,tocIndex:3},{value:"https://ant.design/components/select/#Select-props",paraId:9,tocIndex:3},{value:"Related issue: ",paraId:10,tocIndex:3},{value:"#3487",paraId:10,tocIndex:3},{value:" ",paraId:10,tocIndex:3},{value:"#3438",paraId:10,tocIndex:3},{value:"Select Dropdown DatePicker TimePicker Popover Popconfirm",paraId:1},{value:"Use ",paraId:11,tocIndex:4},{value:"<Select getPopupContainer={trigger => trigger.parentElement}>",paraId:11,tocIndex:4},{value:" (",paraId:11,tocIndex:4},{value:"API reference",paraId:12,tocIndex:4},{value:") to render a component inside the scroll area. If you need to config this globally in your application, try ",paraId:11,tocIndex:4},{value:"<ConfigProvider getPopupContainer={trigger => trigger.parentElement}>",paraId:11,tocIndex:4},{value:" (",paraId:11,tocIndex:4},{value:"API reference",paraId:13,tocIndex:4},{value:")",paraId:11,tocIndex:4},{value:"And make sure that parentElement is ",paraId:14,tocIndex:4},{value:"position: relative",paraId:14,tocIndex:4},{value:" or ",paraId:14,tocIndex:4},{value:"position: absolute",paraId:14,tocIndex:4},{value:".",paraId:14,tocIndex:4},{value:"Related issue: ",paraId:15,tocIndex:4},{value:"#3487",paraId:15,tocIndex:4},{value:" ",paraId:15,tocIndex:4},{value:"#3438",paraId:15,tocIndex:4},{value:"See: ",paraId:16,tocIndex:5},{value:"customize-theme",paraId:17,tocIndex:5},{value:".",paraId:16,tocIndex:5},{value:"Menu",paraId:1},{value:"Button",paraId:1},{value:"While you can override a component's style, we don't recommend doing so. antd is not only a set of React components, but also a design specification as well.",paraId:18,tocIndex:6},{value:"antd will avoid breaking change in minor & patch version. You can safely do the following things:",paraId:19,tocIndex:7},{value:"Official demo usage",paraId:20,tocIndex:7},{value:"FAQ suggestion. Including codesandbox sample, marked as FAQ issue",paraId:20,tocIndex:7},{value:"And which you should avoid doing:",paraId:21,tocIndex:7},{value:"Bug as feature. It will break in any other case (e.g. Use div as Tabs children)",paraId:22,tocIndex:7},{value:"Use magic code to realize requirement but which can be realized with normal API",paraId:22,tocIndex:7},{value:"Please refer to ",paraId:23,tocIndex:8},{value:"Use custom date library",paraId:24,tocIndex:8},{value:".",paraId:23,tocIndex:8},{value:"defaultValue",paraId:1},{value:"The ",paraId:25,tocIndex:9},{value:"defaultXxxx",paraId:25,tocIndex:9},{value:" (e.g. ",paraId:25,tocIndex:9},{value:"defaultValue",paraId:25,tocIndex:9},{value:") of ",paraId:25,tocIndex:9},{value:"Input",paraId:25,tocIndex:9},{value:"/",paraId:25,tocIndex:9},{value:"Select",paraId:25,tocIndex:9},{value:"(etc...) only works on the first render. It is a specification of React. Please read ",paraId:25,tocIndex:9},{value:"React's documentation",paraId:25,tocIndex:9},{value:".",paraId:25,tocIndex:9},{value:"antd use shallow compare of props to optimize performance. You should always pass the new object when updating the state. Please ref ",paraId:26,tocIndex:10},{value:"React's document",paraId:26,tocIndex:10},{value:"value",paraId:1},{value:"Input",paraId:1},{value:"Select",paraId:1},{value:"Try ",paraId:27,tocIndex:11},{value:"onChange",paraId:27,tocIndex:11},{value:" to change ",paraId:27,tocIndex:11},{value:"value",paraId:27,tocIndex:11},{value:", and please read ",paraId:27,tocIndex:11},{value:"React's documentation",paraId:27,tocIndex:11},{value:".",paraId:27,tocIndex:11},{value:"Try ",paraId:28,tocIndex:12},{value:"Space",paraId:28,tocIndex:12},{value:" component to make them aligned.",paraId:28,tocIndex:12},{value:"Yes, antd is designed to help you develop a complete background application. To do so, we override some global styles for styling convenience, and currently these cannot be removed or changed. More info at ",paraId:29,tocIndex:13},{value:"https://github.com/ant-design/ant-design/issues/4331",paraId:29,tocIndex:13},{value:" .",paraId:29,tocIndex:13},{value:"Alternatively, follow the instructions in ",paraId:30,tocIndex:13},{value:"How to avoid modifying global styles?",paraId:31,tocIndex:13},{value:"antd",paraId:1},{value:"antd",paraId:1},{value:"To potentially solve this, try ",paraId:32,tocIndex:14},{value:"npm mirror china",paraId:32,tocIndex:14},{value:" and ",paraId:32,tocIndex:14},{value:"cnpm",paraId:32,tocIndex:14},{value:".",paraId:32,tocIndex:14},{value:"dependencies.antd",paraId:1},{value:"package.json",paraId:1},{value:"Please install ",paraId:33,tocIndex:15},{value:"antd",paraId:33,tocIndex:15},{value:" with either npm or yarn.",paraId:33,tocIndex:15},{value:"message",paraId:1},{value:"notification",paraId:1},{value:"No, ",paraId:34,tocIndex:16},{value:"message",paraId:34,tocIndex:16},{value:" is just a function, not a React Component, thus it is not a typo that it is in lower case.",paraId:34,tocIndex:16},{value:"antd",paraId:1},{value:"Please check ",paraId:35,tocIndex:17},{value:"Ant Design Mobile",paraId:35,tocIndex:17},{value:" as a possible solution, as ",paraId:35,tocIndex:17},{value:"antd",paraId:35,tocIndex:17},{value:" has not been optimized to work well on mobile. You can also try the ",paraId:35,tocIndex:17},{value:"react-component",paraId:35,tocIndex:17},{value:" repositories which start with 'm-' 'rn-', which are also designed for mobile.",paraId:35,tocIndex:17},{value:"antd",paraId:1},{value:"Yes, you can ",paraId:36,tocIndex:18},{value:"import ",paraId:36,tocIndex:18},{value:"antd",paraId:36,tocIndex:18},{value:" with script tag",paraId:36,tocIndex:18},{value:", but we recommend using ",paraId:36,tocIndex:18},{value:"npm",paraId:36,tocIndex:18},{value:" to import ",paraId:36,tocIndex:18},{value:"antd",paraId:36,tocIndex:18},{value:", as it is simple and easy to maintain.",paraId:36,tocIndex:18},{value:"If you need some features which should not be included in antd, try to extend antd's component with ",paraId:37,tocIndex:19},{value:"HOC",paraId:37,tocIndex:19},{value:". ",paraId:37,tocIndex:19},{value:"more",paraId:37,tocIndex:19},{value:"antd will have a strict discussion on the demand for new components to prevent API corruption and become ",paraId:38,tocIndex:19},{value:"historical debt",paraId:39,tocIndex:19},{value:". And it is also more inclined to provide atomic capabilities for APIs so that developers can customize the features they need more flexibly.",paraId:38,tocIndex:19},{value:"antd expose the basic component definitions. For the unexposed props, you can get them via the utility types provided by antd. For example:",paraId:40,tocIndex:20},{value:"import type { Checkbox, CheckboxProps, GetProp, GetProps, GetRef, Input } from 'antd';\n\n// Get Props\ntype CheckboxGroupProps = GetProps<typeof Checkbox.Group>;\n\n// Get Prop\ntype CheckboxValue = GetProp<CheckboxProps, 'value'>;\n\n// Get Ref\ntype InputRef = GetRef<typeof Input>;\n",paraId:41,tocIndex:20},{value:"Please check whether you have imported dayjs locale correctly.",paraId:42,tocIndex:21},{value:"import dayjs from 'dayjs';\n\nimport 'dayjs/locale/zh-cn';\n\ndayjs.locale('zh-cn');\n",paraId:43,tocIndex:21},{value:"Please check whether there are two versions of dayjs installed.",paraId:44,tocIndex:21},{value:"npm ls dayjs\n",paraId:45,tocIndex:21},{value:"If you are using a mismatched version of dayjs with ",paraId:46,tocIndex:21},{value:"antd's dayjs",paraId:46,tocIndex:21},{value:" in your project. That would be a problem cause locale not working.",paraId:46,tocIndex:21},{value:"You can configure ",paraId:47,tocIndex:22},{value:"nonce",paraId:47,tocIndex:22},{value:" by ",paraId:47,tocIndex:22},{value:"ConfigProvider",paraId:48,tocIndex:22},{value:".",paraId:47,tocIndex:22},{value:"mode",paraId:1},{value:"DatePicker",paraId:1},{value:"RangePicker",paraId:1},{value:"In a real world development, you may need a ",paraId:49,tocIndex:23},{value:"YearPicker",paraId:49,tocIndex:23},{value:", ",paraId:49,tocIndex:23},{value:"MonthRangePicker",paraId:49,tocIndex:23},{value:" or ",paraId:49,tocIndex:23},{value:"WeekRangePicker",paraId:49,tocIndex:23},{value:". You are trying to add ",paraId:49,tocIndex:23},{value:"mode",paraId:49,tocIndex:23},{value:" to ",paraId:49,tocIndex:23},{value:"DatePicker",paraId:49,tocIndex:23},{value:"/",paraId:49,tocIndex:23},{value:"RangePicker",paraId:49,tocIndex:23},{value:" expected to implement those pickers. However, the ",paraId:49,tocIndex:23},{value:"DatePicker",paraId:49,tocIndex:23},{value:"/",paraId:49,tocIndex:23},{value:"RangePicker",paraId:49,tocIndex:23},{value:" cannot be selected and the panels won't close now.",paraId:49,tocIndex:23},{value:"Reproduction link: ",paraId:50,tocIndex:23},{value:"https://codesandbox.io/s/dank-brook-v1csy",paraId:50,tocIndex:23},{value:"Same issues\uFF1A",paraId:50,tocIndex:23},{value:"#15572",paraId:50,tocIndex:23},{value:", ",paraId:50,tocIndex:23},{value:"#16436",paraId:50,tocIndex:23},{value:", ",paraId:50,tocIndex:23},{value:"#11938",paraId:50,tocIndex:23},{value:", ",paraId:50,tocIndex:23},{value:"#11735",paraId:50,tocIndex:23},{value:", ",paraId:50,tocIndex:23},{value:"#11586",paraId:50,tocIndex:23},{value:", ",paraId:50,tocIndex:23},{value:"#10425",paraId:50,tocIndex:23},{value:", ",paraId:50,tocIndex:23},{value:"#11053",paraId:50,tocIndex:23},{value:"Like ",paraId:51,tocIndex:23},{value:"the explanation",paraId:51,tocIndex:23},{value:" explains, this is because ",paraId:51,tocIndex:23},{value:'<DatePicker mode="year" />',paraId:51,tocIndex:23},{value:" does not equal the ",paraId:51,tocIndex:23},{value:"YearPicker",paraId:51,tocIndex:23},{value:", nor is ",paraId:51,tocIndex:23},{value:'<RangePicker mode="month" />',paraId:51,tocIndex:23},{value:" equal to ",paraId:51,tocIndex:23},{value:"MonthRangePicker",paraId:51,tocIndex:23},{value:". The ",paraId:51,tocIndex:23},{value:"mode",paraId:51,tocIndex:23},{value:" property was added to support ",paraId:51,tocIndex:23},{value:"showing time picker panel in DatePicker",paraId:51,tocIndex:23},{value:" in antd 3.0, which simply controls the displayed panel, and won't change the original date picking behavior of ",paraId:51,tocIndex:23},{value:"DatePicker",paraId:51,tocIndex:23},{value:"/",paraId:51,tocIndex:23},{value:"RangePicker",paraId:51,tocIndex:23},{value:" (for instance you will still need to click date cell to finish selection in a ",paraId:51,tocIndex:23},{value:"DatePicker",paraId:51,tocIndex:23},{value:", whatever the ",paraId:51,tocIndex:23},{value:"mode",paraId:51,tocIndex:23},{value:" is).",paraId:51,tocIndex:23},{value:"Likewise, ",paraId:52,tocIndex:23},{value:"disabledDate",paraId:52,tocIndex:23},{value:" ",paraId:52,tocIndex:23},{value:"cannot work on year/month panels",paraId:52,tocIndex:23},{value:" of ",paraId:52,tocIndex:23},{value:'<DatePicker mode="year/month" />',paraId:52,tocIndex:23},{value:", but only on cells of date panel.",paraId:52,tocIndex:23},{value:":::success{title=Workaround} You can refer to ",paraId:53,tocIndex:23},{value:"this article",paraId:53,tocIndex:23},{value:" or ",paraId:53,tocIndex:23},{value:"this article",paraId:53,tocIndex:23},{value:", using ",paraId:53,tocIndex:23},{value:"mode",paraId:53,tocIndex:23},{value:" and ",paraId:53,tocIndex:23},{value:"onPanelChange",paraId:53,tocIndex:23},{value:" to encapsulate a ",paraId:53,tocIndex:23},{value:"YearPicker",paraId:53,tocIndex:23},{value:" or ",paraId:53,tocIndex:23},{value:"MonthRangePicker",paraId:53,tocIndex:23},{value:" for your needs.",paraId:53,tocIndex:23},{value:"Or you can simply upgrade to ",paraId:54,tocIndex:23},{value:"antd@4.0",paraId:54,tocIndex:23},{value:", in which we ",paraId:54,tocIndex:23},{value:"added more XxxPickers",paraId:54,tocIndex:23},{value:" to meet those requirements, and ",paraId:54,tocIndex:23},{value:"disabledDate",paraId:54,tocIndex:23},{value:" could be effect on those pickers too. :::",paraId:54,tocIndex:23},{value:"prefixCls",paraId:1},{value:"Static methods like message/notification/Modal.confirm are not using the same render tree as ",paraId:55,tocIndex:24},{value:"<Button />",paraId:55,tocIndex:24},{value:", but rendered to independent DOM node created by ",paraId:55,tocIndex:24},{value:"ReactDOM.render",paraId:55,tocIndex:24},{value:", which cannot access React context from ConfigProvider. Consider two solutions here:",paraId:55,tocIndex:24},{value:"Replace original usages with ",paraId:56,tocIndex:24},{value:"message.useMessage",paraId:57,tocIndex:24},{value:", ",paraId:56,tocIndex:24},{value:"notification.useNotification",paraId:58,tocIndex:24},{value:" and ",paraId:56,tocIndex:24},{value:"Modal.useModal",paraId:59,tocIndex:24},{value:".",paraId:56,tocIndex:24},{value:"Use ",paraId:60,tocIndex:24},{value:"App.useApp",paraId:61,tocIndex:24},{value:" to get message/notification/modal instance.",paraId:60,tocIndex:24},{value:"You should only access the API by official doc with ref. Directly access internal ",paraId:62,tocIndex:25},{value:"props",paraId:62,tocIndex:25},{value:" or ",paraId:62,tocIndex:25},{value:"state",paraId:62,tocIndex:25},{value:" is not recommended which will make your code strong coupling with current version. Any refactor will break your code like refactor with ",paraId:62,tocIndex:25},{value:"Hooks",paraId:62,tocIndex:25},{value:" version, delete or rename internal ",paraId:62,tocIndex:25},{value:"props",paraId:62,tocIndex:25},{value:" or ",paraId:62,tocIndex:25},{value:"state",paraId:62,tocIndex:25},{value:", adjust internal node constructor, etc.",paraId:62,tocIndex:25},{value:"open",paraId:1},{value:"For historical reasons, the display names of the pop components are not uniform, and both ",paraId:63,tocIndex:26},{value:"open",paraId:63,tocIndex:26},{value:" and ",paraId:63,tocIndex:26},{value:"visible",paraId:63,tocIndex:26},{value:" are used. This makes the memory cost that non-tsx users encounter when developing. It also leads to ambiguity about what name to choose when adding a feature. So we want to unify the attribute name, you can still use the original ",paraId:63,tocIndex:26},{value:"visible",paraId:63,tocIndex:26},{value:" and it will still be backward compatible, but we will remove this attribute from the documentation as of v5.",paraId:63,tocIndex:26},{value:":where",paraId:1},{value:"Please ref dynamic theme document ",paraId:64,tocIndex:27},{value:"Legacy Browser Compatible",paraId:65,tocIndex:27},{value:" part.",paraId:64,tocIndex:27},{value:"Same as above. You can adjust antd css priority to override. Related issue: ",paraId:66,tocIndex:28},{value:"#38794",paraId:66,tocIndex:28},{value:"Please ref document ",paraId:67,tocIndex:29},{value:"Shadow Dom Usage",paraId:68,tocIndex:29},{value:".",paraId:67,tocIndex:29},{value:"Config with SeedToken:",paraId:69,tocIndex:30},{value:"import { ConfigProvider } from 'antd';\n\n<ConfigProvider theme={{ token: { motion: false } }}>\n  <App />\n</ConfigProvider>;\n",paraId:70,tocIndex:30},{value:"Please ref dynamic theme document ",paraId:71,tocIndex:31},{value:"SSR",paraId:72,tocIndex:31},{value:" part.",paraId:71,tocIndex:31},{value:"In the Ant Design Token system, ",paraId:73,tocIndex:32},{value:"colorPrimary",paraId:73,tocIndex:32},{value:" and ",paraId:73,tocIndex:32},{value:"colorInfo",paraId:73,tocIndex:32},{value:" are both ",paraId:73,tocIndex:32},{value:"Seed Token",paraId:74,tocIndex:32},{value:", so they are independent of each other. ",paraId:73,tocIndex:32},{value:"colorLink",paraId:73,tocIndex:32},{value:" is an ",paraId:73,tocIndex:32},{value:"Alias Token",paraId:75,tocIndex:32},{value:", inherits ",paraId:73,tocIndex:32},{value:"colorInfo",paraId:73,tocIndex:32},{value:" by default, and is independent of ",paraId:73,tocIndex:32},{value:"colorPrimary",paraId:73,tocIndex:32},{value:".",paraId:73,tocIndex:32},{value:"Spelt",paraId:76,tocIndex:33},{value:"Usage",paraId:76,tocIndex:33},{value:"Pronunciation",paraId:76,tocIndex:33},{value:"\u2705 ",paraId:76,tocIndex:33},{value:"Ant Design",paraId:76,tocIndex:33},{value:"Capitalized with space, for the design language",paraId:76,tocIndex:33},{value:"-",paraId:76,tocIndex:33},{value:"\u2705 ",paraId:76,tocIndex:33},{value:"antd",paraId:76,tocIndex:33},{value:"All lowercase, for the React UI library",paraId:76,tocIndex:33},{value:"\u2705 ",paraId:76,tocIndex:33},{value:"ant.design",paraId:76,tocIndex:33},{value:"For ant.design website url",paraId:76,tocIndex:33},{value:"-",paraId:76,tocIndex:33},{value:"Here are some typical wrong examples:",paraId:77,tocIndex:33},{value:"\u274C AntD",paraId:78,tocIndex:33},{value:"\u274C antD",paraId:78,tocIndex:33},{value:"\u274C Antd",paraId:78,tocIndex:33},{value:"\u274C ant design",paraId:78,tocIndex:33},{value:"\u274C AntDesign",paraId:78,tocIndex:33},{value:"\u274C antdesign",paraId:78,tocIndex:33},{value:"\u274C Antdesign",paraId:78,tocIndex:33},{value:"https://opencollective.com/ant-design",paraId:79,tocIndex:34},{value:"setFieldsValue",paraId:1},{value:"null",paraId:1},{value:"When we try to set the form value using the ",paraId:80,tocIndex:35},{value:"setFieldsValue",paraId:80,tocIndex:35},{value:" method in the form instance of the form component, if the passed object contains the type null, such as:",paraId:80,tocIndex:35},{value:'// This is not real world code, just for explain\nimport { Form } from \'antd\';\n\ntype Test = {\n  value: string[] | null;\n};\n\nexport default () => {\n  const [form] = Form.useForm<Test>();\n\n  form.setFieldsValue({\n    value: null, // Error: Type "null" cannot be assigned to type "string[] | undefined".\n  });\n};\n',paraId:81,tocIndex:35},{value:"If you encounter the above error, please check the current project ",paraId:82,tocIndex:35},{value:"tsconfig.json",paraId:82,tocIndex:35},{value:" contains the following configuration:",paraId:82,tocIndex:35},{value:'{\n  "strictNullChecks": true\n}\n',paraId:83,tocIndex:35},{value:"The above problem occurs if ",paraId:84,tocIndex:35},{value:"strictNullChecks",paraId:84,tocIndex:35},{value:" is set to ",paraId:84,tocIndex:35},{value:"true",paraId:84,tocIndex:35},{value:", If you can determine the project don't need this configuration (see ",paraId:84,tocIndex:35},{value:"strictNullChecks",paraId:84,tocIndex:35},{value:" to judge whether need the configuration). You can try changing to ",paraId:84,tocIndex:35},{value:"false",paraId:84,tocIndex:35},{value:" to turn off the control strict check. However, if you do need to enable this feature, you can avoid this situation by using other types instead of ",paraId:84,tocIndex:35},{value:"null",paraId:84,tocIndex:35},{value:" when defining types",paraId:84,tocIndex:35},{value:"If you are using the App Router of Next.js, when you use the sub-components provided by some antd components, such as ",paraId:85,tocIndex:36},{value:"Select.Option ",paraId:85,tocIndex:36},{value:", ",paraId:85,tocIndex:36},{value:"Form.Item",paraId:85,tocIndex:36},{value:", ",paraId:85,tocIndex:36},{value:"Typography.Title",paraId:85,tocIndex:36},{value:", etc., you may get the following error:",paraId:85,tocIndex:36},{value:"Error: Cannot access .Option on the server. You cannot dot into a client module from a server component. You can only pass the imported name through.\n",paraId:86,tocIndex:36},{value:"Currently, this problem is ",paraId:87,tocIndex:36},{value:"waiting for Next.js to give an official solution",paraId:87,tocIndex:36},{value:". There are two workarounds as of now if you need to use sub-components in your page with the App Router:",paraId:87,tocIndex:36},{value:"Create a wrapper component that extracts the sub-components that you need, and re-exports them. Take the ",paraId:88,tocIndex:36},{value:"Typography",paraId:88,tocIndex:36},{value:" component as an example. A wrapper component would look something like this:",paraId:88,tocIndex:36},{value:"'use client';\n\nimport React from 'react';\nimport { Typography as OriginTypography } from 'antd';\nimport type { LinkProps } from 'antd/es/typography/Link';\nimport type { ParagraphProps } from 'antd/es/typography/Paragraph';\nimport type { TextProps } from 'antd/es/typography/Text';\nimport type { TitleProps } from 'antd/es/typography/Title';\n\nconst Title = React.forwardRef<HTMLElement, TitleProps & React.RefAttributes<HTMLElement>>(\n  (props, ref) => <OriginTypography.Title ref={ref} {...props} />,\n);\n\nconst Paragraph = React.forwardRef<HTMLElement, ParagraphProps & React.RefAttributes<HTMLElement>>(\n  (props, ref) => <OriginTypography.Paragraph ref={ref} {...props} />,\n);\n\nconst Link = React.forwardRef<HTMLElement, LinkProps & React.RefAttributes<HTMLElement>>(\n  (props, ref) => <OriginTypography.Link ref={ref} {...props} />,\n);\n\nconst Text = React.forwardRef<HTMLElement, TextProps & React.RefAttributes<HTMLElement>>(\n  (props, ref) => <OriginTypography.Text ref={ref} {...props} />,\n);\n\nexport { Title, Link, Text, Paragraph };\n",paraId:89,tocIndex:36},{value:"You can also make the page fully client-rendered by adding ",paraId:90,tocIndex:36},{value:"use client",paraId:90,tocIndex:36},{value:" tag at the beginning of your page's source:",paraId:90,tocIndex:36},{value:'\'use client\';\n\n// This is not real world code, just for explain\nexport default () => {\n  return (\n    <div className="App">\n      <Form>\n        <Form.Item>\n          <Button type="primary">Button</Button>\n        </Form.Item>\n      </Form>\n    </div>\n  );\n};\n',paraId:91,tocIndex:36}];}}]);