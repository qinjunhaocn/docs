import{l as Q,ap as R,bh as T,d as x,h as n,o as c,F as h,w as s,a as o,e as i,u as t,c as I,H as $,au as y,I as q,N as k,aw as U,_ as j,r as L}from"./app-JhrqFNfS.js";import{N as E}from"./Checkbox-bsLwEwyN.js";import{N as P}from"./Input-E2RrsAi-.js";import{N as C}from"./Button-nYdEs2hD.js";import{N}from"./Alert-ddJ3OuAY.js";import{N as M}from"./Image-WJJc240j.js";import"./browser-VP0JNGur.js";import"./arrayReduce-3kzx2or8.js";function O(){const m=Q(T,null);return m===null&&R("use-message","No outer <n-message-provider /> founded. See prerequisite in https://www.naiveui.com/en-US/os-theme/components/message for more details. If you want to use `useMessage` outside setup, please check https://www.naiveui.com/zh-CN/os-theme/components/message#Q-&-A."),m}const z="https://alist.nn.ci/tool/aliyundrive/callback",V="76917ccccd4441c39457a04f6084fb2f",D=x({__name:"Request",setup(m){function S(){const e=new URL("https://open.aliyundrive.com/oauth/authorize");e.searchParams.set("client_id",u.value?p.value:V),e.searchParams.set("redirect_uri",z),e.searchParams.set("scope","user:base,file:all:read,file:all:write"),e.searchParams.set("response_type","code"),e.searchParams.set("state",window.btoa(u.value?`${p.value}::${_.value}`:"::")),e.searchParams.set("relogin","true"),window.open(e.toString(),"_blank")}const r=n(),d=n(!1),p=n(""),_=n(""),u=n(!1);async function B(){try{d.value=!0;const a=await(await fetch(U()+"/alist/ali_open/qr",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(u.value?{client_id:p.value,client_secret:_.value}:{})})).json();r.value=a}catch(e){console.log(e),r.value={error:"error",qrCodeUrl:"",sid:""}}finally{d.value=!1}}const g=n(),w=n(!1),b=O();async function A(){var e;try{w.value=!0;const l=await(await fetch(`${U()}/proxy/https://open.aliyundrive.com/oauth/qrcode/${(e=r.value)==null?void 0:e.sid}/status`)).json();if(g.value=l,l.status==="LoginSuccess"){const v=new URL(z);v.searchParams.set("code",l.authCode),window.open(v.toString(),"_blank")}else b.warning(l.status)}catch(a){console.log(a),b.error(String(a))}finally{w.value=!1}}return(e,a)=>(c(),h(t(k),{vertical:"",size:"large"},{default:s(()=>{var l,v;return[o(t(E),{checked:u.value,"onUpdate:checked":a[0]||(a[0]=f=>u.value=f),size:"large"},{default:s(()=>[i("Use my own client")]),_:1},8,["checked"]),u.value?(c(),I($,{key:0},[o(t(P),{size:"large",value:p.value,"onUpdate:value":a[1]||(a[1]=f=>p.value=f),placeholder:"client_id"},null,8,["value"]),o(t(P),{size:"large",value:_.value,"onUpdate:value":a[2]||(a[2]=f=>_.value=f),placeholder:"client_secret"},null,8,["value"])],64)):y("v-if",!0),o(t(C),{size:"large",type:"primary",onClick:S,block:""},{default:s(()=>[i("Go to login")]),_:1}),o(t(C),{size:"large",type:"info",onClick:B,block:"",loading:d.value,disabled:!!r.value},{default:s(()=>[i("Scan QrCode ")]),_:1},8,["loading","disabled"]),(l=r.value)!=null&&l.error?(c(),h(t(N),{key:1,title:"Error",type:"error"},{default:s(()=>[i(q(r.value.error),1)]),_:1})):y("v-if",!0),(v=r.value)!=null&&v.qrCodeUrl?(c(),h(t(k),{key:2,vertical:""},{default:s(()=>[o(t(k),{justify:"center"},{default:s(()=>[o(t(M),{width:"300",src:r.value.qrCodeUrl},null,8,["src"])]),_:1}),o(t(N),{title:"Scan the QrCode",type:"info"},{default:s(()=>[i("Use AliyunDrive APP To Scan Then Click the Button Below")]),_:1}),o(t(C),{size:"large",onClick:A,type:"info",block:"",loading:w.value},{default:s(()=>[i("I have scan")]),_:1},8,["loading"])]),_:1})):y("v-if",!0),g.value&&g.value.status!=="LoginSuccess"?(c(),h(t(N),{key:3,title:"Warning",type:"warning"},{default:s(()=>[i(q(g.value.status),1)]),_:1})):y("v-if",!0)]}),_:1}))}}),F=j(D,[["__scopeId","data-v-df083b7e"],["__file","Request.vue"]]),G=x({__name:"request.html",setup(m){return(S,r)=>{const d=L("NaiveClient");return c(),I("div",null,[o(d,null,{default:s(()=>[o(t(F))]),_:1})])}}}),te=j(G,[["__file","request.html.vue"]]);export{te as default};