"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[144],{"8EpQ":(a,e,n)=>{n.r(e),n.d(e,{default:()=>j});var s=n("ERkP"),t=n("/F87"),l=n("i08G"),i=n("13oN"),r=n("wHT0"),o=n("N5nB"),d=n("aGrZ"),f=n("NfVe"),c=n("uCKF"),u=n("0DEe"),m=n("4y/S"),h=n("jg1C");function j(){var a;const{translate:e}=(0,d.nt)(),{id:n}=(0,t.UO)(),[j,v]=(0,s.useState)(!1),{staffEdit:x,isLoadingGetStaff:p,staffList:k}=(0,c.CG)((a=>a.staff)),I=(null==x?void 0:x.personalInfo.firstName)+" "+(null==x?void 0:x.personalInfo.lastName);(0,s.useEffect)((()=>{n&&(0,c.WI)((0,f.Dh)(Number(n)))}),[n]);const g=k.map((a=>{var e;return{id:a.id,name:(null==a?void 0:a.personalInfo.firstName)+" "+(null==a?void 0:a.personalInfo.lastName),photoUrl:null==(e=a.avatar)?void 0:e.url}}));return p?(0,h.jsx)(l.ukE,{}):(0,h.jsxs)(l.rjZ,{container:!0,spacing:2,children:[(0,h.jsx)(l.rjZ,{item:!0,xs:12,children:(0,h.jsxs)(l.Kqy,{spacing:2,children:[(0,h.jsx)(i.aG,{links:[{name:"home",href:"#"},{name:"staffList",href:"/dashboard/staff"},{name:I,noTranslate:!0}]}),(0,h.jsx)(i.Dx,{title:I,avatar:null==x||null==(a=x.avatar)?void 0:a.url,button:(0,h.jsx)(l.Kqy,{spacing:0,direction:"row",mr:4,children:(0,h.jsx)(o.rs,{labelPlacement:"start",label:e("insas.active"),size:"small",name:"active",onChange:a=>{v(a.target.checked)},value:j,checked:j})})})]})}),(0,h.jsx)(l.rjZ,{item:!0,xs:12,md:3,children:(0,h.jsx)(u.m,{children:(0,h.jsx)(m.c,{info:{addressInfo:null==x?void 0:x.addressInfo,contactInfo:null==x?void 0:x.contactInfo},staffEdit:x})})}),(0,h.jsx)(l.rjZ,{item:!0,xs:12,md:3,children:(0,h.jsx)(r.ag,{title:"Client History",client:g,widthDefault:!1})})]})}}}]);