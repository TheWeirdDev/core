(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"./docz/examples/example-actions.mdx":function(e,n,t){"use strict";t.r(n);var a=t("./node_modules/@babel/runtime/helpers/objectWithoutProperties.js"),i=t.n(a),r=t("./node_modules/react/index.js"),o=t.n(r),l=t("./node_modules/@mdx-js/tag/dist/index.js"),c=t("./node_modules/docz/dist/index.m.js"),s=t("./src/material-table.js");n.default=function(e){var n=e.components,t=i()(e,["components"]);return o.a.createElement(l.MDXTag,{name:"wrapper",components:n},o.a.createElement(l.MDXTag,{name:"h1",components:n,props:{id:"actions-example"}},"Actions Example"),o.a.createElement(c.Playground,{__position:0,__codesandbox:"undefined",__code:"<MaterialTable\n  columns={[\n    { title: 'Name', field: 'name' },\n    { title: 'Surname', field: 'surname' },\n    { title: 'Birth Year', field: 'birthYear', type: 'numeric' },\n    {\n      title: 'Birth Place',\n      field: 'birthCity',\n      lookup: { 34: '\u0130stanbul', 63: '\u015eanl\u0131urfa' },\n    },\n  ]}\n  data={[\n    { name: 'Mehmet', surname: 'Baran', birthYear: 1987, birthCity: 63 },\n    { name: 'Zerya Bet\xfcl', surname: 'Baran', birthYear: 2017, birthCity: 34 },\n  ]}\n  title=\"Actions\"\n  actions={[\n    {\n      icon: 'account_circle',\n      tooltip: 'Show User Info',\n      onClick: (event, rowData) => {\n        alert('You clicked user ' + rowData.name)\n      },\n    },\n    rowData => ({\n      icon: 'account_circle',\n      tooltip: 'Show User Info',\n      disabled: rowData.birthYear >= 2000,\n      onClick: (event, rowData) => {\n        alert('You clicked user ' + rowData.name)\n      },\n    }),\n  ]}\n/>",__scope:{props:t,MaterialTable:s.a}},o.a.createElement(s.a,{columns:[{title:"Name",field:"name"},{title:"Surname",field:"surname"},{title:"Birth Year",field:"birthYear",type:"numeric"},{title:"Birth Place",field:"birthCity",lookup:{34:"\u0130stanbul",63:"\u015eanl\u0131urfa"}}],data:[{name:"Mehmet",surname:"Baran",birthYear:1987,birthCity:63},{name:"Zerya Bet\xfcl",surname:"Baran",birthYear:2017,birthCity:34}],title:"Actions",actions:[{icon:"account_circle",tooltip:"Show User Info",onClick:function(e,n){alert("You clicked user "+n.name)}},function(e){return{icon:"account_circle",tooltip:"Show User Info",disabled:e.birthYear>=2e3,onClick:function(e,n){alert("You clicked user "+n.name)}}}]})))}}}]);