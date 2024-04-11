import{r as n,t as C,e as O,o as k,p as ee,s as te,aF as S,U as B,V as ae,ai as re,b3 as ie}from"./index-481ffadb.js";import{a as ne}from"./ProCard-f8f59c62.js";var oe=globalThis&&globalThis.__rest||function(e,i){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(t[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,a=Object.getOwnPropertySymbols(e);r<a.length;r++)i.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(t[a[r]]=e[a[r]]);return t};const le=e=>{var{prefixCls:i,className:t,hoverable:a=!0}=e,r=oe(e,["prefixCls","className","hoverable"]);const{getPrefixCls:l}=n.useContext(C),s=l("card",i),g=O(`${s}-grid`,t,{[`${s}-grid-hoverable`]:a});return n.createElement("div",Object.assign({},r,{className:g}))},N=le,de=e=>{const{antCls:i,componentCls:t,headerHeight:a,cardPaddingBase:r,tabsMarginBottom:l}=e;return Object.assign(Object.assign({display:"flex",justifyContent:"center",flexDirection:"column",minHeight:a,marginBottom:-1,padding:`0 ${r}px`,color:e.colorTextHeading,fontWeight:e.fontWeightStrong,fontSize:e.headerFontSize,background:e.headerBg,borderBottom:`${e.lineWidth}px ${e.lineType} ${e.colorBorderSecondary}`,borderRadius:`${e.borderRadiusLG}px ${e.borderRadiusLG}px 0 0`},S()),{"&-wrapper":{width:"100%",display:"flex",alignItems:"center"},"&-title":Object.assign(Object.assign({display:"inline-block",flex:1},B),{[`
          > ${t}-typography,
          > ${t}-typography-edit-content
        `]:{insetInlineStart:0,marginTop:0,marginBottom:0}}),[`${i}-tabs-top`]:{clear:"both",marginBottom:l,color:e.colorText,fontWeight:"normal",fontSize:e.fontSize,"&-bar":{borderBottom:`${e.lineWidth}px ${e.lineType} ${e.colorBorderSecondary}`}}})},se=e=>{const{cardPaddingBase:i,colorBorderSecondary:t,cardShadow:a,lineWidth:r}=e;return{width:"33.33%",padding:i,border:0,borderRadius:0,boxShadow:`
      ${r}px 0 0 0 ${t},
      0 ${r}px 0 0 ${t},
      ${r}px ${r}px 0 0 ${t},
      ${r}px 0 0 0 ${t} inset,
      0 ${r}px 0 0 ${t} inset;
    `,transition:`all ${e.motionDurationMid}`,"&-hoverable:hover":{position:"relative",zIndex:1,boxShadow:a}}},ce=e=>{const{componentCls:i,iconCls:t,actionsLiMargin:a,cardActionsIconSize:r,colorBorderSecondary:l,actionsBg:s}=e;return Object.assign(Object.assign({margin:0,padding:0,listStyle:"none",background:s,borderTop:`${e.lineWidth}px ${e.lineType} ${l}`,display:"flex",borderRadius:`0 0 ${e.borderRadiusLG}px ${e.borderRadiusLG}px `},S()),{"& > li":{margin:a,color:e.colorTextDescription,textAlign:"center","> span":{position:"relative",display:"block",minWidth:e.cardActionsIconSize*2,fontSize:e.fontSize,lineHeight:e.lineHeight,cursor:"pointer","&:hover":{color:e.colorPrimary,transition:`color ${e.motionDurationMid}`},[`a:not(${i}-btn), > ${t}`]:{display:"inline-block",width:"100%",color:e.colorTextDescription,lineHeight:`${e.fontSize*e.lineHeight}px`,transition:`color ${e.motionDurationMid}`,"&:hover":{color:e.colorPrimary}},[`> ${t}`]:{fontSize:r,lineHeight:`${r*e.lineHeight}px`}},"&:not(:last-child)":{borderInlineEnd:`${e.lineWidth}px ${e.lineType} ${l}`}}})},ge=e=>Object.assign(Object.assign({margin:`-${e.marginXXS}px 0`,display:"flex"},S()),{"&-avatar":{paddingInlineEnd:e.padding},"&-detail":{overflow:"hidden",flex:1,"> div:not(:last-child)":{marginBottom:e.marginXS}},"&-title":Object.assign({color:e.colorTextHeading,fontWeight:e.fontWeightStrong,fontSize:e.fontSizeLG},B),"&-description":{color:e.colorTextDescription}}),pe=e=>{const{componentCls:i,cardPaddingBase:t,colorFillAlter:a}=e;return{[`${i}-head`]:{padding:`0 ${t}px`,background:a,"&-title":{fontSize:e.fontSize}},[`${i}-body`]:{padding:`${e.padding}px ${t}px`}}},be=e=>{const{componentCls:i}=e;return{overflow:"hidden",[`${i}-body`]:{userSelect:"none"}}},me=e=>{const{antCls:i,componentCls:t,cardShadow:a,cardHeadPadding:r,colorBorderSecondary:l,boxShadowTertiary:s,cardPaddingBase:g,extraColor:d}=e;return{[t]:Object.assign(Object.assign({},te(e)),{position:"relative",background:e.colorBgContainer,borderRadius:e.borderRadiusLG,[`&:not(${t}-bordered)`]:{boxShadow:s},[`${t}-head`]:de(e),[`${t}-extra`]:{marginInlineStart:"auto",color:d,fontWeight:"normal",fontSize:e.fontSize},[`${t}-body`]:Object.assign({padding:g,borderRadius:` 0 0 ${e.borderRadiusLG}px ${e.borderRadiusLG}px`},S()),[`${t}-grid`]:se(e),[`${t}-cover`]:{"> *":{display:"block",width:"100%"},[`img, img + ${i}-image-mask`]:{borderRadius:`${e.borderRadiusLG}px ${e.borderRadiusLG}px 0 0`}},[`${t}-actions`]:ce(e),[`${t}-meta`]:ge(e)}),[`${t}-bordered`]:{border:`${e.lineWidth}px ${e.lineType} ${l}`,[`${t}-cover`]:{marginTop:-1,marginInlineStart:-1,marginInlineEnd:-1}},[`${t}-hoverable`]:{cursor:"pointer",transition:`box-shadow ${e.motionDurationMid}, border-color ${e.motionDurationMid}`,"&:hover":{borderColor:"transparent",boxShadow:a}},[`${t}-contain-grid`]:{[`${t}-body`]:{display:"flex",flexWrap:"wrap"},[`&:not(${t}-loading) ${t}-body`]:{marginBlockStart:-e.lineWidth,marginInlineStart:-e.lineWidth,padding:0}},[`${t}-contain-tabs`]:{[`> ${t}-head`]:{[`${t}-head-title, ${t}-extra`]:{paddingTop:r}}},[`${t}-type-inner`]:pe(e),[`${t}-loading`]:be(e),[`${t}-rtl`]:{direction:"rtl"}}},$e=e=>{const{componentCls:i,cardPaddingSM:t,headerHeightSM:a,headerFontSizeSM:r}=e;return{[`${i}-small`]:{[`> ${i}-head`]:{minHeight:a,padding:`0 ${t}px`,fontSize:r,[`> ${i}-head-wrapper`]:{[`> ${i}-extra`]:{fontSize:e.fontSize}}},[`> ${i}-body`]:{padding:t}},[`${i}-small${i}-contain-tabs`]:{[`> ${i}-head`]:{[`${i}-head-title, ${i}-extra`]:{minHeight:a,paddingTop:0,display:"flex",alignItems:"center"}}}}},he=k("Card",e=>{const i=ee(e,{cardShadow:e.boxShadowCard,cardHeadPadding:e.padding,cardPaddingBase:e.paddingLG,cardActionsIconSize:e.fontSize,cardPaddingSM:12});return[me(i),$e(i)]},e=>({headerBg:"transparent",headerFontSize:e.fontSizeLG,headerFontSizeSM:e.fontSize,headerHeight:e.fontSizeLG*e.lineHeightLG+e.padding*2,headerHeightSM:e.fontSize*e.lineHeight+e.paddingXS*2,actionsBg:e.colorBgContainer,actionsLiMargin:`${e.paddingSM}px 0`,tabsMarginBottom:-e.padding-e.lineWidth,extraColor:e.colorText}));var P=globalThis&&globalThis.__rest||function(e,i){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(t[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,a=Object.getOwnPropertySymbols(e);r<a.length;r++)i.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(t[a[r]]=e[a[r]]);return t};function fe(e){return e.map((t,a)=>n.createElement("li",{style:{width:`${100/e.length}%`},key:`action-${a}`},n.createElement("span",null,t)))}const ye=n.forwardRef((e,i)=>{const{prefixCls:t,className:a,rootClassName:r,extra:l,headStyle:s={},bodyStyle:g={},title:d,loading:h,bordered:u=!0,size:f,type:b,cover:y,actions:v,tabList:m,children:x,activeTabKey:T,defaultActiveTabKey:M,tabBarExtraContent:H,hoverable:L,tabProps:G={}}=e,I=P(e,["prefixCls","className","rootClassName","extra","headStyle","bodyStyle","title","loading","bordered","size","type","cover","actions","tabList","children","activeTabKey","defaultActiveTabKey","tabBarExtraContent","hoverable","tabProps"]),{getPrefixCls:R,direction:W}=n.useContext(C),D=p=>{var c;(c=e.onTabChange)===null||c===void 0||c.call(e,p)},A=n.useMemo(()=>{let p=!1;return n.Children.forEach(x,c=>{c&&c.type&&c.type===N&&(p=!0)}),p},[x]),o=R("card",t),[_,F]=he(o),K=n.createElement(ie,{loading:!0,active:!0,paragraph:{rows:4},title:!1},x),w=T!==void 0,X=Object.assign(Object.assign({},G),{[w?"activeKey":"defaultActiveKey"]:w?T:M,tabBarExtraContent:H});let j;const $=ae(f),U=!$||$==="default"?"large":$,E=m&&m.length?n.createElement(ne,Object.assign({size:U},X,{className:`${o}-head-tabs`,onChange:D,items:m.map(p=>{var{tab:c}=p,Z=P(p,["tab"]);return Object.assign({label:c},Z)})})):null;(d||l||E)&&(j=n.createElement("div",{className:`${o}-head`,style:s},n.createElement("div",{className:`${o}-head-wrapper`},d&&n.createElement("div",{className:`${o}-head-title`},d),l&&n.createElement("div",{className:`${o}-extra`},l)),E));const V=y?n.createElement("div",{className:`${o}-cover`},y):null,q=n.createElement("div",{className:`${o}-body`,style:g},h?K:x),J=v&&v.length?n.createElement("ul",{className:`${o}-actions`},fe(v)):null,Q=re(I,["onTabChange"]),Y=O(o,{[`${o}-loading`]:h,[`${o}-bordered`]:u,[`${o}-hoverable`]:L,[`${o}-contain-grid`]:A,[`${o}-contain-tabs`]:m&&m.length,[`${o}-${$}`]:$,[`${o}-type-${b}`]:!!b,[`${o}-rtl`]:W==="rtl"},a,r,F);return _(n.createElement("div",Object.assign({ref:i},Q,{className:Y}),j,V,q,J))}),xe=ye;var Se=globalThis&&globalThis.__rest||function(e,i){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(t[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,a=Object.getOwnPropertySymbols(e);r<a.length;r++)i.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(t[a[r]]=e[a[r]]);return t};const ue=e=>{const{prefixCls:i,className:t,avatar:a,title:r,description:l}=e,s=Se(e,["prefixCls","className","avatar","title","description"]),{getPrefixCls:g}=n.useContext(C),d=g("card",i),h=O(`${d}-meta`,t),u=a?n.createElement("div",{className:`${d}-meta-avatar`},a):null,f=r?n.createElement("div",{className:`${d}-meta-title`},r):null,b=l?n.createElement("div",{className:`${d}-meta-description`},l):null,y=f||b?n.createElement("div",{className:`${d}-meta-detail`},f,b):null;return n.createElement("div",Object.assign({},s,{className:h}),u,y)},ve=ue,z=xe;z.Grid=N;z.Meta=ve;const ze=z;export{ze as C};