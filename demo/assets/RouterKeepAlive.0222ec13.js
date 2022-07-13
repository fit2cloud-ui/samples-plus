import{a as _,r as m,g as d,h as l,o as h,l as v,m as t,n as s,x as f,q as n,j as e}from"./index.014e1043.js";const x=n(" \u8DEF\u7531\u7EC4\u4EF6\u7F13\u5B58 "),R=e("h4",null," \u7F13\u5B58\u5F53\u524D\u9875\u9762\u7684\u7EC4\u4EF6\uFF0C\u8DEF\u7531\u8BBE\u7F6Ecache: true ",-1),A=n(" \u4F8B\u5B50\uFF1A "),K=e("pre",null,`      {
        path: "keep-alive",
        component: () => import("@/business/router-demo/RouterKeepAlive"),
        name: "RouterKeepAlive",
        meta: {
          title: "route.router_keep_alive",
        }
      },
      {
        path: "keep-alive-detail",
        component: () => import("@/business/router-demo/RouterKeepAliveDetail"),
        name: "RouterKeepAliveDetail", // cache: true\u65F6\uFF0C\u5FC5\u987B\u4FDD\u8BC1name\u4E0Ecomponent\u4E2D\u7684name\u4E00\u81F4
        hidden: true,
        meta: {
          cache: true,
          activeMenu: "/router-demo/menu"
        }
      }
    `,-1),k=e("h4",null," \u8BE5\u7EC4\u4EF6\u6CA1\u6709\u7F13\u5B58\uFF0C\u5728\u8F93\u5165\u6846\u5185\u586B\u5199\u6587\u672C\uFF0C\u7136\u540E\u6253\u5F00\u8BE6\u60C5\u9875\uFF0C\u518D\u8FD4\u56DE\u8BE5\u9875\u9762\uFF0C\u53EF\u4EE5\u770B\u5230\u8F93\u5165\u6846\u5185\u5BB9\u4E3A\u7A7A\u3002 ",-1),V=e("h4",null," \u6253\u5F00\u8BE6\u60C5\u9875\u65F6\u53EF\u4EE5\u5728\u63A7\u5236\u53F0\u91CC\u770B\u5230destroyed\u89E6\u53D1\uFF0C\u8BF4\u660E\u7EC4\u4EF6\u5DF2\u9500\u6BC1\uFF0C\u6CA1\u6709\u7F13\u5B58 ",-1),b=n("\u6253\u5F00\u8BE6\u60C5\u9875(\u5DF2\u7F13\u5B58)"),D={__name:"RouterKeepAlive",setup(g){const u=_(),o=m("");function r(){u.push({name:"RouterKeepAliveDetail"})}return d(()=>{console.log("RouterKeepAlive \u88AB\u5378\u8F7D\u4E4B\u540E\u89E6\u53D1")}),(B,a)=>{const i=l("el-input"),c=l("el-button");return h(),v(f,null,{header:t(()=>[x]),default:t(()=>[R,A,K,k,V,s(i,{modelValue:o.value,"onUpdate:modelValue":a[0]||(a[0]=p=>o.value=p),style:{width:"200px","margin-right":"50px"}},null,8,["modelValue"]),s(c,{onClick:r},{default:t(()=>[b]),_:1})]),_:1})}}};export{D as default};
