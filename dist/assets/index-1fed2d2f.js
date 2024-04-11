import{o as z,p as C,s as O,r as d,t as M,e as E}from"./index-481ffadb.js";const j=t=>{const{componentCls:e,sizePaddingEdgeHorizontal:o,colorSplit:r,lineWidth:i}=t;return{[e]:Object.assign(Object.assign({},O(t)),{borderBlockStart:`${i}px solid ${r}`,"&-vertical":{position:"relative",top:"-0.06em",display:"inline-block",height:"0.9em",margin:`0 ${t.dividerVerticalGutterMargin}px`,verticalAlign:"middle",borderTop:0,borderInlineStart:`${i}px solid ${r}`},"&-horizontal":{display:"flex",clear:"both",width:"100%",minWidth:"100%",margin:`${t.dividerHorizontalGutterMargin}px 0`},[`&-horizontal${e}-with-text`]:{display:"flex",alignItems:"center",margin:`${t.dividerHorizontalWithTextGutterMargin}px 0`,color:t.colorTextHeading,fontWeight:500,fontSize:t.fontSizeLG,whiteSpace:"nowrap",textAlign:"center",borderBlockStart:`0 ${r}`,"&::before, &::after":{position:"relative",width:"50%",borderBlockStart:`${i}px solid transparent`,borderBlockStartColor:"inherit",borderBlockEnd:0,transform:"translateY(50%)",content:"''"}},[`&-horizontal${e}-with-text-left`]:{"&::before":{width:"5%"},"&::after":{width:"95%"}},[`&-horizontal${e}-with-text-right`]:{"&::before":{width:"95%"},"&::after":{width:"5%"}},[`${e}-inner-text`]:{display:"inline-block",padding:"0 1em"},"&-dashed":{background:"none",borderColor:r,borderStyle:"dashed",borderWidth:`${i}px 0 0`},[`&-horizontal${e}-with-text${e}-dashed`]:{"&::before, &::after":{borderStyle:"dashed none none"}},[`&-vertical${e}-dashed`]:{borderInlineStartWidth:i,borderInlineEnd:0,borderBlockStart:0,borderBlockEnd:0},[`&-plain${e}-with-text`]:{color:t.colorText,fontWeight:"normal",fontSize:t.fontSize},[`&-horizontal${e}-with-text-left${e}-no-default-orientation-margin-left`]:{"&::before":{width:0},"&::after":{width:"100%"},[`${e}-inner-text`]:{paddingInlineStart:o}},[`&-horizontal${e}-with-text-right${e}-no-default-orientation-margin-right`]:{"&::before":{width:"100%"},"&::after":{width:0},[`${e}-inner-text`]:{paddingInlineEnd:o}}})}},P=z("Divider",t=>{const e=C(t,{dividerVerticalGutterMargin:t.marginXS,dividerHorizontalWithTextGutterMargin:t.margin,dividerHorizontalGutterMargin:t.marginLG});return[j(e)]},{sizePaddingEdgeHorizontal:0});var G=globalThis&&globalThis.__rest||function(t,e){var o={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(o[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(o[r[i]]=t[r[i]]);return o};const H=t=>{const{getPrefixCls:e,direction:o}=d.useContext(M),{prefixCls:r,type:i="horizontal",orientation:l="center",orientationMargin:a,className:p,rootClassName:m,children:s,dashed:b,plain:x}=t,$=G(t,["prefixCls","type","orientation","orientationMargin","className","rootClassName","children","dashed","plain"]),n=e("divider",r),[u,S]=P(n),w=l.length>0?`-${l}`:l,c=!!s,h=l==="left"&&a!=null,g=l==="right"&&a!=null,v=E(n,S,`${n}-${i}`,{[`${n}-with-text`]:c,[`${n}-with-text${w}`]:c,[`${n}-dashed`]:!!b,[`${n}-plain`]:!!x,[`${n}-rtl`]:o==="rtl",[`${n}-no-default-orientation-margin-left`]:h,[`${n}-no-default-orientation-margin-right`]:g},p,m),f=d.useMemo(()=>typeof a=="number"?a:/^\d+$/.test(a)?Number(a):a,[a]),y=Object.assign(Object.assign({},h&&{marginLeft:f}),g&&{marginRight:f});return u(d.createElement("div",Object.assign({className:v},$,{role:"separator"}),s&&i!=="vertical"&&d.createElement("span",{className:`${n}-inner-text`,style:y},s)))},N=H;export{N as D};
