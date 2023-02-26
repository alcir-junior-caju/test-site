"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[942],{"26as":(e,n,s)=>{s.d(n,{m:()=>l});var i=s("ueIs"),a=s("N5nB");const l=(0,i.zo)(a.Zb)({padding:"20px"})},eSrO:(e,n,s)=>{s.r(n),s.d(n,{default:()=>T,historic:()=>w});var i=s("ERkP"),a=s("/F87"),l=s("i08G"),r=s("13oN"),t=s("wHT0"),o=s("N5nB"),d=s("aGrZ"),c=s("xeA9"),u=s("q4t4"),m=s("uCKF"),h=s("26as"),x=s("P0LX"),f=s("ueIs");const j=(0,f.zo)("div")({position:"absolute",top:"10px",right:"10px",zIndex:999});var v=s("jg1C");function p({info:e}){var n,s,l,t,c,h,f,p,g;const{translate:C}=(0,d.nt)(),b=(0,m.TL)(),{isLoadingDeleteClient:q,client:y,showInformation:I}=(0,m.CG)((e=>e.client)),{id:Z}=(0,a.UO)(),[N,z]=(0,i.useState)(!1),w=(0,a.s0)(),{enqueueSnackbar:T}=(0,x.Ds)();return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(j,{children:(0,v.jsx)(o.lX,{moreMenu:[{icon:"edit",label:C("insas.edit",{interpolation:C("insas.client")}),onDelete:()=>{b((0,u.ud)())}},{icon:"trash-alt",label:C("insas.delete",{interpolation:C("insas.client")}),onDelete:()=>z(!0)}]})}),(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(r.q8,{title:C("insas.billing_address"),separator:"",isShowTitle:!0,isVisibility:I,data:[{content:`${(null==(n=e.addressInfo)?void 0:n.gate)||""} ${null==(s=e.addressInfo)?void 0:s.address}, ${null==(l=e.addressInfo)?void 0:l.city}, ${null==(t=e.addressInfo)?void 0:t.state.toLocaleUpperCase()} ${null==(c=e.addressInfo)?void 0:c.zipCode}`}]}),(0,v.jsx)(r.q8,{title:C("insas.contact"),isShowTitle:!0,isVisibility:I,isMarginTop:!0,data:[{label:"phone",content:(null==(h=e.contactInfo)?void 0:h.phone)||""},{label:"email",content:(null==(f=e.contactInfo)?void 0:f.email)||""}]})]}),(0,v.jsx)(r.Vq,{type:"delete",message:`Are you sure you want to delete ${null==y||null==(p=y.personalInfo)?void 0:p.firstName} ${null==y||null==(g=y.personalInfo)?void 0:g.lastName}?`,isOpen:N,onCancel:()=>z(!1),onClose:async()=>{try{await b((0,u.Nu)(Number(Z))).unwrap(),w("/dashboard/clients"),T("Client deleted successfully!",{variant:"success"})}catch(e){T("Unable to deleted client",{variant:"error"})}},isLoading:q})]})}var g=s("hnsu"),C=s("RBMA"),b=s("4iGT");function q({title:e,sx:n}){const{translate:s}=(0,d.nt)();return(0,v.jsx)(l.ZT$,{sx:Object.assign({},n,{color:"#637381",fontWeight:700,fontSize:18}),children:s(`insas.${e}`)})}function y({control:e,errors:n}){const{translate:s}=(0,d.nt)();return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(q,{title:"contact",sx:{mt:2}}),(0,v.jsxs)(l.rjZ,{container:!0,spacing:2,children:[(0,v.jsx)(l.rjZ,{item:!0,xs:12,mt:2,children:(0,v.jsx)(g.Qr,{name:"firstName",control:e,render:({field:{value:e,onChange:i}})=>{var a;return(0,v.jsx)(l.nvn,{label:s("insas.firstName"),size:"small",value:e,onChange:i,fullWidth:!0,error:!!n.firstName,helperText:null==(a=n.firstName)?void 0:a.message,required:!0})}})}),(0,v.jsx)(l.rjZ,{item:!0,xs:12,children:(0,v.jsx)(g.Qr,{name:"lastName",control:e,render:({field:{value:e,onChange:i}})=>{var a;return(0,v.jsx)(l.nvn,{label:s("insas.lastName"),size:"small",value:e,onChange:i,fullWidth:!0,error:!!n.lastName,helperText:null==(a=n.lastName)?void 0:a.message,required:!0})}})}),(0,v.jsx)(l.rjZ,{item:!0,xs:12,children:(0,v.jsx)(g.Qr,{name:"phone",control:e,render:({field:{value:e,onChange:i}})=>{var a;return(0,v.jsx)(l.nvn,{label:s("insas.phone"),size:"small",fullWidth:!0,value:e,onChange:i,error:!!n.phone,helperText:null==(a=n.phone)?void 0:a.message,required:!0})}})}),(0,v.jsx)(l.rjZ,{item:!0,xs:12,children:(0,v.jsx)(g.Qr,{name:"additionalPhone",control:e,render:({field:{value:e,onChange:n}})=>(0,v.jsx)(l.nvn,{label:"Additional Phone",size:"small",fullWidth:!0,value:e,onChange:n})})}),(0,v.jsx)(l.rjZ,{item:!0,xs:12,children:(0,v.jsx)(g.Qr,{name:"email",control:e,render:({field:{value:e,onChange:s}})=>{var i;return(0,v.jsx)(l.nvn,{label:"E-mail",size:"small",fullWidth:!0,value:e,onChange:s,error:!!n.email,helperText:null==(i=n.email)?void 0:i.message,required:!0})}})})]})]})}const I=(0,f.zo)(o.Zb)({paddingTop:"20px",paddingRight:"20px",paddingLeft:"20px",paddingBottom:"80px"});var Z=s("45gT");const N=Z.Ry().shape({firstName:Z.Z_().required("First name is required"),lastName:Z.Z_().required("Last name is required"),phone:Z.Z_().required("Phone is required"),additionalPhone:Z.Z_(),email:Z.Z_().required("E-mail is required").email("Invalid E-mail"),address:Z.Z_().required("Address is required"),complement:Z.Z_(),zipCode:Z.Z_().max(12).min(5).required("Zip Code is required"),state:Z.Z_().required("State is required"),city:Z.Z_().required("City is required")});function z(){const{control:e,handleSubmit:n,setValue:s,reset:t,formState:{errors:c}}=(0,g.cI)({resolver:(0,b.X)(N),defaultValues:{firstName:"",lastName:"",phone:"",additionalPhone:"",email:"",address:"",complement:"",zipCode:"",state:"",city:""}}),[h,f]=(0,i.useState)(!1),{isLoadingPutClientInfo:j,client:p}=(0,m.CG)((e=>e.client)),Z=(0,m.TL)(),{enqueueSnackbar:z}=(0,x.Ds)(),{id:w}=(0,a.UO)(),{translate:T}=(0,d.nt)();return(0,i.useEffect)((()=>{var e,n,i,a,l,r,t,o,d,c;p&&(s("address",(null==(e=p.addressInfo)?void 0:e.address)||""),s("complement",(null==(n=p.addressInfo)?void 0:n.complement)||""),s("zipCode",(null==(i=p.addressInfo)?void 0:i.zipCode)||""),s("city",(null==(a=p.addressInfo)?void 0:a.city)||""),s("state",(null==(l=p.addressInfo)?void 0:l.state)||""),s("firstName",(null==(r=p.personalInfo)?void 0:r.firstName)||""),s("lastName",(null==(t=p.personalInfo)?void 0:t.lastName)||""),s("phone",(null==(o=p.contactInfo)?void 0:o.phone)||""),s("additionalPhone",(null==(d=p.contactInfo)?void 0:d.additionalPhone)||""),s("email",(null==(c=p.contactInfo)?void 0:c.email)||""))}),[p,s]),(0,i.useEffect)((()=>()=>{Z((0,u.uC)())}),[Z]),(0,v.jsx)(I,{children:(0,v.jsxs)("form",{noValidate:!0,onSubmit:n((async function(e){try{const n=Object.assign({},e,{blocked:null==p?void 0:p.blocked});await Z((0,u.V)({id:Number(w),data:n})).unwrap(),t(),z("Client updated successfully!",{variant:"success"}),Z((0,u.uC)()),Z((0,u.s3)(Number(w)))}catch(n){z("Unable to update client",{variant:"error"})}})),children:[(0,v.jsx)(q,{title:"billing_address"}),(0,v.jsxs)(l.rjZ,{container:!0,spacing:2,children:[(0,v.jsx)(l.rjZ,{item:!0,xs:12,mt:2,children:(0,v.jsx)(g.Qr,{name:"address",control:e,render:({field:{value:e,onChange:n}})=>{var s;return(0,v.jsx)(l.nvn,{label:T("insas.address"),size:"small",value:e,onChange:n,fullWidth:!0,error:!!c.address,helperText:null==(s=c.address)?void 0:s.message,required:!0})}})}),(0,v.jsx)(l.rjZ,{item:!0,xs:12,md:6,children:(0,v.jsx)(g.Qr,{name:"complement",control:e,render:({field:{value:e,onChange:n}})=>{var s;return(0,v.jsx)(l.nvn,{label:T("insas.complement"),size:"small",value:e,onChange:n,fullWidth:!0,error:!!c.complement,helperText:null==(s=c.complement)?void 0:s.message,required:!0})}})}),(0,v.jsx)(l.rjZ,{item:!0,xs:12,md:6,children:(0,v.jsx)(g.Qr,{name:"zipCode",control:e,render:({field:{value:e,onChange:n}})=>{var s;return(0,v.jsx)(l.nvn,{label:T("insas.zip"),size:"small",value:e,onChange:n,fullWidth:!0,error:!!c.zipCode,helperText:null==(s=c.zipCode)?void 0:s.message,required:!0})}})}),(0,v.jsx)(l.rjZ,{item:!0,xs:12,md:8,children:(0,v.jsx)(g.Qr,{name:"city",control:e,render:({field:{value:e,onChange:n}})=>{var s;return(0,v.jsx)(l.nvn,{label:T("insas.city"),size:"small",value:e,onChange:n,fullWidth:!0,error:!!c.city,helperText:null==(s=c.city)?void 0:s.message,required:!0})}})}),(0,v.jsx)(l.rjZ,{item:!0,xs:12,md:4,children:(0,v.jsx)(g.Qr,{name:"state",control:e,render:({field:{value:e,onChange:n}})=>{var s;return(0,v.jsx)(l.nvn,{label:T("insas.state"),size:"small",value:e,onChange:n,fullWidth:!0,error:!!c.state,helperText:null==(s=c.state)?void 0:s.message,required:!0})}})})]}),(0,v.jsx)(y,{control:e,errors:c}),(0,v.jsx)(l.rjZ,{item:!0,xs:12,children:(0,v.jsx)(l.xuv,{sx:{display:"flex",justifyContent:"flex-end"},mt:4,children:(0,v.jsxs)(l.Kqy,{direction:"row",spacing:2,children:[(0,v.jsx)(o.zx,{sx:{paddingLeft:5,paddingRight:5},onClick:()=>f(!0),children:T("insas.cancel")}),(0,v.jsx)(r.Vq,{type:"discard",message:"Are you sure you want to discard the changes?",isOpen:h,onCancel:()=>f(!1),onClose:()=>Z((0,u.uC)())}),(0,v.jsx)(C.fl,{type:"submit",variant:"contained",sx:{paddingLeft:5,paddingRight:5},loading:j,children:T("insas.save")})]})})})]})})}const w=[{date:"08 Oct 2020",id:"e99f09a7-dd88-49d5-b1c8-1daf80c2d7b1",price:482.05},{date:"14 Jul 2020",id:"e99f09a7-dd88-49d5-b1c8-1daf80c2d7b2",price:482.35},{date:"11 May 2020",id:"e99f09a7-dd88-49d5-b1c8-1daf80c2d7b3",price:534.09}];const T=function(){var e,n,s;const x=(0,m.TL)(),{isLoadingGetClient:f,client:j,showInformation:g,showEditClientInfo:C}=(0,m.CG)((e=>e.client)),{id:b}=(0,a.UO)(),{translate:q}=(0,d.nt)(),y=(0,a.s0)(),I=`${null==j||null==(e=j.personalInfo)?void 0:e.firstName} ${null==j||null==(n=j.personalInfo)?void 0:n.lastName}`;return(0,i.useEffect)((()=>{var e;x((0,u.s3)(Number(b))),x((0,c.k$)(Number(null==j||null==(e=j.locations[0])?void 0:e.id)))}),[b,x]),f?(0,v.jsx)(l.ukE,{}):(0,v.jsxs)(l.rjZ,{container:!0,spacing:2,children:[(0,v.jsx)(l.rjZ,{item:!0,xs:12,children:(0,v.jsxs)(l.Kqy,{spacing:2,children:[(0,v.jsx)(r.aG,{links:[{href:"/dashboard/home",name:"home"},{name:"client_list",href:"/dashboard/clients"},{name:I,noTranslate:!0}]}),(0,v.jsx)(r.Dx,{avatar:null==j||null==(s=j.avatar)?void 0:s.url,button:(0,v.jsxs)(l.Kqy,{spacing:0,direction:"row",justifyContent:"space-between",alignItems:"center",alignContent:"center",children:[(0,v.jsx)(o.u,{title:q(g?"insas.hide_information":"insas.show_information"),children:(0,v.jsx)(o.zx,{onClick:function(){x((0,u.Fo)())},children:(0,v.jsx)(o.JO,{src:g?"eye":"eye-off"})})}),(0,v.jsx)(o.zx,{disabled:!0,children:(0,v.jsx)(o.JO,{src:"chat"})})]}),title:I})]})}),(0,v.jsx)(l.rjZ,{item:!0,xs:12,md:9,children:(0,v.jsx)(a.j3,{})}),C?(0,v.jsx)(l.rjZ,{item:!0,xs:12,md:3,children:(0,v.jsx)(z,{})}):(0,v.jsx)(l.rjZ,{item:!0,xs:12,md:3,children:(0,v.jsxs)(l.Kqy,{spacing:2,children:[(0,v.jsx)(h.m,{children:(0,v.jsx)(p,{info:{addressInfo:null==j?void 0:j.addressInfo,contactInfo:null==j?void 0:j.contactInfo}})}),(0,v.jsx)(t.k,{locations:null==j?void 0:j.locations,widthDefault:!1,title:q("insas.location"),handleShowForm:function(){y(`/dashboard/clients/${b}/location/create`)}}),(0,v.jsx)(t.v7,{historic:w,widthDefault:!1})]})})]})}}}]);