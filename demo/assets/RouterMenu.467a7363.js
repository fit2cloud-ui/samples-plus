import{a,h as s,o as m,l as c,m as n,n as i,x as d,q as e,j as t}from"./index.014e1043.js";const _=e(" \u8DEF\u7531\u4E0E\u83DC\u5355 "),l=t("h4",null,[e(" \u5DE6\u4FA7\u83DC\u5355\u662F\u6839\u636E\u8DEF\u7531\u751F\u6210\u7684 "),t("br"),e(" \u8DEF\u7531\u9879(\u4F8B\u5982: \u8BE6\u60C5\u9875)\u4E0D\u60F3\u5728\u83DC\u5355\u4E2D\u663E\u793A: meta: { hidden: true } "),t("br"),e(' \u83DC\u5355\u56FD\u9645\u5316: title: "route.router_demo" '),t("br"),e(' \u8BE6\u60C5\u9875\u5173\u8054\u83DC\u5355(\u9AD8\u4EAE\u663E\u793A\u83DC\u5355): activeMenu: "/router-demo/detail" '),t("br"),e(" \u83DC\u5355\u6392\u5E8F: \u4E00\u7EA7\u83DC\u5355sort: 1 // \u4ECE\u5C0F\u5230\u5927\u6392\u5E8F\uFF0C\u6CA1\u6709sort\u7684\u81EA\u52A8\u6309modules\u76EE\u5F55\u4E2D\u6587\u4EF6\u540D\u987A\u5E8F\u6392\u5E8F\uFF0C\u5E76\u4E14\u6392\u5728\u6709sort\u5C5E\u6027\u7684\u540E\u9762 ")],-1),p=e(" \u4F8B\u5B50\uFF1A "),h=t("pre",null,`      export default {
        sort: 1,
        path: "/router-demo",
        component: Layout,
        name: "RouterDemo",
        meta: {
          title: "route.router_demo",
          icon: "Share"
        },
        children: [
          {
            path: "menu",
            component: () => import("@/business/router-demo/RouterMenu.vue"),
            name: "RouterMenu",
            meta: {
              title: "route.router_menu",
            }
          },
          {
            path: "detail",
            component: () => import("@/business/router-demo/RouterDetail.vue"),
            name: "RouterDetail",
            meta: {
              activeMenu: "/router-demo/menu",
              hidden: true,
            }
          },
        ]
      }
    `,-1),b=e("\u6253\u5F00\u8BE6\u60C5\u9875"),M={__name:"RouterMenu",setup(f){const o=a();function r(){o.push({name:"RouterDetail"})}return(R,x)=>{const u=s("el-button");return m(),c(d,null,{header:n(()=>[_]),default:n(()=>[l,p,h,i(u,{onClick:r},{default:n(()=>[b]),_:1})]),_:1})}}};export{M as default};
