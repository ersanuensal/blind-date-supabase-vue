import{r as z,c as R,a as H,b as U,o as d,d as u,e as t,f as C,w as A,g as I,h as f,u as N,i as M,j as l,F as D,k as T,t as v,l as w,v as k,m as q,n as S,p as B,q as j,s as W,x as Z,y as K,z as J,A as X,B as Q,C as ee}from"./vendor.163acdc1.js";const te=function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))e(a);new MutationObserver(a=>{for(const c of a)if(c.type==="childList")for(const r of c.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&e(r)}).observe(document,{childList:!0,subtree:!0});function n(a){const c={};return a.integrity&&(c.integrity=a.integrity),a.referrerpolicy&&(c.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?c.credentials="include":a.crossorigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function e(a){if(a.ep)return;a.ep=!0;const c=n(a);fetch(a.href,c)}};te();const F=z({user:null}),se={setUser(i){F.user=i?i.user:null}};var E={state:F,methods:se};const re="https://oyioqvxlilouegwbeekh.supabase.co",oe="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJvbGUiOiJhbm9uIiwiaWF0IjoxNjQzMDQ0MjY5LCJleHAiOjE5NTg2MjAyNjl9.kTzSGH01qKcDB7tuNFODKL20eBZZm8srXFI02ZVFOD8",x=R(re,oe);var ae="assets/logo.7c8b451f.png",$=(i,s)=>{const n=i.__vccOpts||i;for(const[e,a]of s)n[e]=a;return n};const ie={setup(){const i=H(()=>E.state.user),s=N();return{logout:async()=>{await x.auth.signOut(),s.push({name:"Login"})},user:i}}};"serviceWorker"in navigator&&window.addEventListener("load",()=>{navigator.serviceWorker.register("service-worker.js")});const ne={class:"bg-primaryc text-white"},le={class:"container py-5 px-4 flex flex-col gap-4 items-center sm:flex-row"},ce=t("div",{class:"flex items-center gap-x-4"},[t("img",{class:"h-8",src:ae,alt:""})],-1),de={class:"flex flex-1 justify-end gap-x-10"},ue=M("Explore"),me=M("Activities"),pe=M("Create an Activity"),ve=M("Login"),he=M("Register"),_e=M("Dashboard"),ye=M("Profile");function fe(i,s,n,e,a,c){const r=U("router-link");return d(),u("header",ne,[t("nav",le,[ce,t("ul",de,[C(r,{class:"cursor-pointer",to:{name:"Explore"}},{default:A(()=>[ue]),_:1}),C(r,{class:"cursor-pointer",to:{name:"Home"}},{default:A(()=>[me]),_:1}),e.user?(d(),I(r,{key:0,class:"cursor-pointer",to:{name:"Activity"}},{default:A(()=>[pe]),_:1})):f("",!0),e.user?f("",!0):(d(),I(r,{key:1,class:"cursor-pointer",to:{name:"Login"}},{default:A(()=>[ve]),_:1})),e.user?f("",!0):(d(),I(r,{key:2,class:"cursor-pointer",to:{name:"Register"}},{default:A(()=>[he]),_:1})),e.user?(d(),I(r,{key:3,class:"cursor-pointer",to:{name:"Chat"}},{default:A(()=>[_e]),_:1})):f("",!0),e.user?(d(),I(r,{key:4,class:"cursor-pointer",to:{name:"Profile"}},{default:A(()=>[ye]),_:1})):f("",!0),e.user?(d(),u("li",{key:5,onClick:s[0]||(s[0]=(...o)=>e.logout&&e.logout(...o)),class:"cursor-pointer"},"Logout")):f("",!0)])])])}var ge=$(ie,[["render",fe]]);const xe={components:{Navigation:ge},setup(){const i=l(null);return x.auth.user()||(i.value=!0),x.auth.onAuthStateChange((n,e)=>{E.methods.setUser(e),i.value=!0}),{appReady:i}},created(){this.$workbox&&this.$workbox.addEventListener("waiting",()=>{this.showUpdateUI=!0})}};"serviceWorker"in navigator&&window.addEventListener("load",()=>{navigator.serviceWorker.register("service-worker.js")});const be={key:0,class:"min-h-full font-Poppins box-border"};function we(i,s,n,e,a,c){const r=U("Navigation"),o=U("router-view");return e.appReady?(d(),u("div",be,[C(r),C(o)])):f("",!0)}var ke=$(xe,[["render",we]]);const Ae={name:"home",components:{},setup(){const i=l([]),s=l(null);return(async()=>{try{const{data:e,error:a}=await x.from("activities").select("*");if(a)throw a;i.value=e,s.value=!0}catch(e){console.warn(e.message)}})(),{data:i,dataLoaded:s}}},$e={key:0,class:"container mt-10 px-4"},Le={key:0,class:"w-full flex flex-col items-center"},Ue=t("h1",{class:"text-2xl"},"There are no Activities yet.",-1),Me=M("Create the first One"),Pe={key:1,class:"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"},Ce={class:"mt-2 py-1 px-3 text-xs text-primaryc bg-white shadow-md rounded-lg"},Ie={class:"mt-2 text-center text-xl text-white"},Ve={class:"mt-2 text-center text-xs text-white"};function De(i,s,n,e,a,c){const r=U("router-link");return e.dataLoaded?(d(),u("div",$e,[e.data.length===0?(d(),u("div",Le,[Ue,C(r,{class:"mt-6 py-2 px-6 rounded-sm text-sm text-white bg-primaryc duration-200 border-solid border-2 boder-transperent hover:border-primaryc hover:bg-white hover:text-primaryc",to:{name:"Activity"}},{default:A(()=>[Me]),_:1})])):(d(),u("div",Pe,[(d(!0),u(D,null,T(e.data,(o,h)=>(d(),I(r,{class:"flex flex-col items-center bg-primaryc p-8 shadow-md cursor-pointer",to:{name:"ViewActivity",params:{id:o.id}},key:h},{default:A(()=>[t("p",Ce,v(o.date),1),t("h1",Ie,v(o.name),1),t("p",Ve," In "+v(o.location)+" at "+v(o.time),1)]),_:2},1032,["to"]))),128))]))])):f("",!0)}var Te=$(Ae,[["render",De]]);const qe={name:"login",setup(){const i=N(),s=l(null),n=l(null),e=l(null);return{email:s,password:n,errorMsg:e,login:async()=>{try{const{error:c}=await x.auth.signIn({email:s.value,password:n.value});if(c)throw c;i.push({name:"Profile"})}catch(c){e.value=c.message,setTimeout(()=>{e.value=null},5e3)}}}}},Ne={class:"max-w-screen-sm mx-auto px-4 py-10"},je={key:0,class:"mb-10 p-4 rounded-md bg-light-grey"},Ee={class:"text-red-600"},Oe=t("h1",{class:"text-3 text-primaryc mb-4"},"Login",-1),ze={class:"flex flex-col mb-2"},Re=t("label",{for:"email",class:"mb-1 text-sm text-primaryc"},"Email",-1),Se={class:"flex flex-col mb-2"},Be=t("label",{for:"Password",class:"mb-1 text-sm text-primaryc"},"Password",-1),Je=t("button",{type:"submit",class:"mt-6 py-2 px-6 rounded-sm self-start text-sm text-white bg-primaryc duration-200 border-solid border-2 boder-transperent hover:border-primaryc hover:bg-white hover:text-primaryc"}," Login ",-1),Fe=M(" You don't have an account? "),Ye=t("span",{class:"text-primaryc"},"Register",-1);function Ge(i,s,n,e,a,c){const r=U("router-link");return d(),u("div",Ne,[e.errorMsg?(d(),u("div",je,[t("p",Ee,v(e.errorMsg),1)])):f("",!0),t("form",{onSubmit:s[2]||(s[2]=q((...o)=>e.login&&e.login(...o),["prevent"])),class:"p-8 flex flex-col bg-light-grey rounded-md shadow-lg"},[Oe,t("div",ze,[Re,w(t("input",{type:"text",id:"email","onUpdate:modelValue":s[0]||(s[0]=o=>e.email=o),required:"",class:"p-2 text-gray-500 focus:outline-none"},null,512),[[k,e.email]])]),t("div",Se,[Be,w(t("input",{type:"password",id:"password","onUpdate:modelValue":s[1]||(s[1]=o=>e.password=o),required:"",class:"p-2 text-gray-500 focus:outline-none"},null,512),[[k,e.password]])]),Je,C(r,{class:"text-sm text-black mt-6 text-center",to:{name:"Register"}},{default:A(()=>[Fe,Ye]),_:1})],32)])}var He=$(qe,[["render",Ge]]);const We={name:"register",setup(){const i=N(),s=l(null),n=l(null),e=l(null),a=l(null);return{email:s,password:n,confirmPassword:e,errorMsg:a,register:async()=>{if(n.value===e.value){try{const{error:r}=await x.auth.signUp({email:s.value,password:n.value});if(r)throw r;i.push({name:"Profile"})}catch(r){a.value=r.message,setTimeout(()=>{a.value=null},5e3)}return}a.value="Error: Passwords do not match",setTimeout(()=>{a.value=null},5e3)}}}},Ze={class:"max-w-screen-sm mx-auto px-4 py-10"},Ke={key:0,class:"mb-10 p-4 rounded-md bg-light-grey"},Xe={class:"text-red-600"},Qe=t("h1",{class:"text-3 text-primaryc mb-4"},"Register",-1),et={class:"flex flex-col mb-2"},tt=t("label",{for:"email",class:"mb-1 text-sm text-primaryc"},"Email",-1),st={class:"flex flex-col mb-2"},rt=t("label",{for:"Password",class:"mb-1 text-sm text-primaryc"},"Password",-1),ot={class:"flex flex-col mb-2"},at=t("label",{for:"confirmPassword",class:"mb-1 text-sm text-primaryc"},"Confirm Password",-1),it=t("button",{type:"submit",class:"mt-6 py-2 px-6 rounded-sm self-start text-sm text-white bg-primaryc duration-200 border-solid border-2 boder-transperent hover:border-primaryc hover:bg-white hover:text-primaryc"},"Register",-1),nt=M(" Already registered? "),lt=t("span",{class:"text-primaryc"},"Login",-1);function ct(i,s,n,e,a,c){const r=U("router-link");return d(),u("div",Ze,[e.errorMsg?(d(),u("div",Ke,[t("p",Xe,v(e.errorMsg),1)])):f("",!0),t("form",{onSubmit:s[3]||(s[3]=q((...o)=>e.register&&e.register(...o),["prevent"])),class:"p-8 flex flex-col bg-light-grey rounded-md shadow-lg"},[Qe,t("div",et,[tt,w(t("input",{type:"text",id:"email","onUpdate:modelValue":s[0]||(s[0]=o=>e.email=o),required:"",class:"p-2 text-gray-500 focus:outline-none"},null,512),[[k,e.email]])]),t("div",st,[rt,w(t("input",{type:"password",id:"password","onUpdate:modelValue":s[1]||(s[1]=o=>e.password=o),required:"",class:"p-2 text-gray-500 focus:outline-none"},null,512),[[k,e.password]])]),t("div",ot,[at,w(t("input",{type:"password",id:"confirmPassword","onUpdate:modelValue":s[2]||(s[2]=o=>e.confirmPassword=o),required:"",class:"p-2 text-gray-500 focus:outline-none"},null,512),[[k,e.confirmPassword]])]),it,C(r,{class:"text-sm text-black mt-6 text-center",to:{name:"Login"}},{default:A(()=>[nt,lt]),_:1})],32)])}var dt=$(We,[["render",ct]]);const ut="https://oyioqvxlilouegwbeekh.supabase.co",mt="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJvbGUiOiJhbm9uIiwiaWF0IjoxNjQzMDQ0MjY5LCJleHAiOjE5NTg2MjAyNjl9.kTzSGH01qKcDB7tuNFODKL20eBZZm8srXFI02ZVFOD8",L=R(ut,mt),b=z({user:{}});const pt={props:{path:String},emits:["upload","update:path"],setup(i,{emit:s}){const{path:n}=S(i),e=l("10em"),a=l(!1),c=l(""),r=l(),o=async()=>{try{const{data:_,error:g}=await L.storage.from("avatars").download(n.value);if(g)throw g;c.value=URL.createObjectURL(_)}catch(_){console.error("Error downloading image: ",_.message)}},h=async _=>{r.value=_.target.files;try{if(a.value=!0,!r.value||r.value.length===0)throw new Error("You must select an image to upload.");const g=r.value[0],P=g.name.split(".").pop(),p=`${`${Math.random()}.${P}`}`;let{error:y}=await L.storage.from("avatars").upload(p,g);if(y)throw y;s("update:path",p),s("upload")}catch(g){alert(g.message)}finally{a.value=!1}};return B(n,()=>{n.value&&o()}),{path:n,size:e,uploading:a,src:c,files:r,uploadAvatar:h}}},vt={class:"flex flex-col items-center"},ht=["src"],_t={class:"text-center py-10"},yt={class:"mt-6 py-2 px-6 rounded-sm self-start text-sm text-white bg-primaryc duration-200 border-solid border-2 boder-transperent hover:border-primaryc hover:bg-white hover:text-primaryc",for:"single"},ft=["disabled"];function gt(i,s,n,e,a,c){return d(),u("div",null,[t("div",vt,[e.src?(d(),u("img",{key:0,src:e.src,alt:"Avatar",class:"avatar image",style:j({height:e.size,width:e.size})},null,12,ht)):(d(),u("div",{key:1,class:"avatar no-image",style:j({height:e.size,width:e.size})},null,4)),t("div",_t,[t("label",yt,v(e.uploading?"Uploading ...":"Upload new Picture"),1),t("input",{style:{visibility:"hidden",position:"absolute"},type:"file",id:"single",accept:"image/*",onChange:s[0]||(s[0]=(...r)=>e.uploadAvatar&&e.uploadAvatar(...r)),disabled:e.uploading},null,40,ft)])])])}var xt=$(pt,[["render",gt]]);const bt={components:{Avatar:xt},setup(){const i=l(!0),s=l(""),n=l(""),e=l(""),a=l(""),c=l(null),r=l(null);async function o(){try{i.value=!0,b.user=L.auth.user();let{data:_,error:g,status:P}=await L.from("profiles").select("username, gender, avatar_url, interests").eq("id",b.user.id).single();if(g&&P!==406)throw g;_&&(s.value=_.username,n.value=_.gender,a.value=_.avatar_url,e.value=_.interests)}catch(_){alert(_.message)}finally{i.value=!1}}async function h(){try{i.value=!0,b.user=L.auth.user();const _={id:b.user.id,username:s.value,gender:n.value,avatar_url:a.value,updated_at:new Date,interests:e.value};let{error:g}=await L.from("profiles").upsert(_,{returning:"minimal"});if(r.value="Profile successfully updated.",setTimeout(()=>{r.value=null},5e3),g)throw g}catch(_){c.value=_.message,setTimeout(()=>{r.value=null},5e3)}finally{i.value=!1}}return W(()=>{o()}),{store:b,loading:i,username:s,gender:n,avatar_url:a,interests:e,errorMsg:c,statusMsg:r,updateProfile:h}}},wt={class:"max-w-screen-sm mx-auto px-4 py-10"},kt={key:0,class:"mb-10 p-4 rounded-md shadow-md bg-light-grey"},At={class:"test-primaryc"},$t={class:"test-red-500"},Lt={class:"flex flex-col mb-2"},Ut=t("label",{for:"email",class:"mb-1 text-sm text-primaryc"},"Email",-1),Mt=["value"],Pt={class:"flex flex-col mb-2"},Ct=t("label",{for:"username",class:"mb-1 text-sm text-primaryc"},"Username",-1),It={class:"flex flex-col mb-2"},Vt=t("label",{for:"gender",class:"mb-1 text-sm text-primaryc"},"Gender",-1),Dt={class:"flex flex-col mb-2"},Tt=t("label",{for:"interests",class:"mb-1 text-sm text-primaryc"},"Interests",-1),qt=["value","disabled"];function Nt(i,s,n,e,a,c){const r=U("Avatar");return d(),u("div",wt,[e.statusMsg||e.errorMsg?(d(),u("div",kt,[t("p",At,v(e.statusMsg),1),t("p",$t,v(e.errorMsg),1)])):f("",!0),t("form",{onSubmit:s[4]||(s[4]=q((...o)=>e.updateProfile&&e.updateProfile(...o),["prevent"])),class:"p-8 flex flex-col bg-light-grey rounded-md shadow-lg"},[C(r,{path:e.avatar_url,"onUpdate:path":s[0]||(s[0]=o=>e.avatar_url=o),onUpload:e.updateProfile},null,8,["path","onUpload"]),t("div",Lt,[Ut,t("input",{id:"email",type:"text",value:e.store.user.email,disabled:"",required:"",class:"p-2 text-gray-500 focus:outline-none"},null,8,Mt)]),t("div",Pt,[Ct,w(t("input",{id:"username",type:"text",placeholder:"Please set a Username","onUpdate:modelValue":s[1]||(s[1]=o=>e.username=o),class:"p-2 text-gray-500 focus:outline-none"},null,512),[[k,e.username]])]),t("div",It,[Vt,w(t("input",{id:"gender",type:"text",placeholder:"Please set a Gender.","onUpdate:modelValue":s[2]||(s[2]=o=>e.gender=o),class:"p-2 text-gray-500 focus:outline-none"},null,512),[[k,e.gender]])]),t("div",Dt,[Tt,w(t("textarea",{id:"interests",type:"textarea","onUpdate:modelValue":s[3]||(s[3]=o=>e.interests=o),placeholder:"Write something about yourself.",rows:"4",class:"p-2 h-50 text-gray-500 focus:outline-none resize-none"},null,512),[[k,e.interests]])]),t("button",{type:"submit",value:e.loading?"Loading ...":"Update",disabled:e.loading,class:"mt-6 py-2 px-6 rounded-sm self-start text-sm text-white bg-primaryc duration-200 border-solid border-2 boder-transperent hover:border-primaryc hover:bg-white hover:text-primaryc"},"Update",8,qt)],32)])}var jt=$(bt,[["render",Nt]]),Et="assets/trash.8e4eb5f3.png";const Ot={setup(){const i=l(""),s=l("select-activity"),n=l(""),e=l([]),a=l(""),c=l(""),r=l(""),o=l(null),h=l(null),_=()=>{if(s.value==="others"){e.value.push({id:K(),description:""});return}};return{ActivityName:i,ActivityType:s,ActivityDescription:n,ActivityDate:a,ActivityTime:c,ActivityLocation:r,activity:e,statusMsg:o,errorMsg:h,addActivity:_,removeActivity:p=>{if(e.value.length>1){e.value=e.value.filter(y=>y.id!==p);return}h.value="You must have at least one activity",setTimeout(()=>{h.value=null},5e3)},activityChange:()=>{e.value=[],_()},createActivity:async p=>{try{const{error:y}=await x.from("activities").insert({name:i.value,type:s.value,date:a.value,time:c.value,location:r.value,activity:e.value});if(y)throw y;o.value="Sucess. Activity Created",i.value=null,s.value="select-activity",e.value=[],setTimeout(()=>{o.value=null},5e3)}catch(y){h.value=y.message,setTimeout(()=>{h.value=null},5e3)}}}}},zt={class:"max-w-screen-md mx-auto px-4 py-10"},Rt={key:0,class:"mb-10 p-4 bg-light-grey rounded-md"},St={class:"text-black-500"},Bt={class:"text-red-500"},Jt={class:"p-8 flex items-start bg-light-grey rounded-md shadow-lg"},Ft=t("h1",{class:"text-2xl text-primaryc"},"Create an Activity",-1),Yt={class:"flex flex-col"},Gt=t("label",{for:"activity-name",class:"mb-1 text-sm text-primaryc"},"Activity Name",-1),Ht={class:"flex flex-col"},Wt=t("label",{for:"select-activity",class:"mb-1 text-sm text-primaryc"},"Activity Type",-1),Zt=t("option",{value:"select-activity"},"Select Activity Type",-1),Kt=t("option",{value:"sports"},"Sports",-1),Xt=t("option",{value:"others"},"Others",-1),Qt=[Zt,Kt,Xt],es={key:0,class:"flex flex-col py-4 gap-y-4"},ts={class:"flex flex-col md:w-2/3"},ss=t("label",{for:"activity",class:"mb-1 text-sm text-primaryc"}," Activity Description ",-1),rs=["onUpdate:modelValue"],os={class:"flex flex-col flex-1"},as=t("label",{for:"duration",class:"mb-1 text-sm text-primaryc"}," Duration ",-1),is=["onUpdate:modelValue"],ns=["onClick"],ls={class:"flex flex-col"},cs=t("label",{for:"activity-date",class:"mb-1 text-sm text-primaryc"},"Activity Date",-1),ds={class:"flex flex-col"},us=t("label",{for:"activity-time",class:"mb-1 text-sm text-primaryc"},"Activity Time",-1),ms={class:"flex flex-col"},ps=t("label",{for:"activity-location",class:"mb-1 text-sm text-primaryc"},"Activity Location",-1),vs=t("button",{type:"submit",class:"mt-6 py-2 px-6 rounded-sm self-start text-sm text-white bg-primaryc duration-200 border-solid border-2 boder-transperent hover:border-primaryc hover:bg-white hover:text-primaryc"}," Create ",-1);function hs(i,s,n,e,a,c){return d(),u("div",zt,[e.statusMsg||e.errorMsg?(d(),u("div",Rt,[t("p",St,v(e.statusMsg),1),t("p",Bt,v(e.errorMsg),1)])):f("",!0),t("div",Jt,[t("form",{onSubmit:s[7]||(s[7]=q((...r)=>e.createActivity&&e.createActivity(...r),["prevent"])),class:"flex flex-col gap-y-5 w-full"},[Ft,t("div",Yt,[Gt,w(t("input",{type:"text",required:"",class:"p-2 text-gray-500 focus:outline-none",placeholder:"Activity Name",id:"activity-name","onUpdate:modelValue":s[0]||(s[0]=r=>e.ActivityName=r)},null,512),[[k,e.ActivityName]])]),t("div",Ht,[Wt,w(t("select",{required:"",class:"p-2 text-gray-500 focus:outline-none",id:"select-activity",onChange:s[1]||(s[1]=(...r)=>e.activityChange&&e.activityChange(...r)),"onUpdate:modelValue":s[2]||(s[2]=r=>e.ActivityType=r)},Qt,544),[[Z,e.ActivityType]]),e.ActivityType==="others"?(d(),u("div",es,[(d(!0),u(D,null,T(e.activity,(r,o)=>(d(),u("div",{class:"flex flex-col gap-x-6 gap-y-2 relative md:flex-row",key:o},[t("div",ts,[ss,w(t("input",{required:"",type:"text",class:"p-2 w-full text-gray-500 focus:outline-none","onUpdate:modelValue":h=>r.description=h},null,8,rs),[[k,r.description]])]),t("div",os,[as,w(t("input",{required:"",type:"text",class:"p-2 w-full text-gray-500 focus:outline-none","onUpdate:modelValue":h=>r.duration=h},null,8,is),[[k,r.duration]]),t("img",{onClick:h=>e.removeActivity(r.id),src:Et,class:"h-4 w-auto absolute -left-5 cursor-pointer",alt:""},null,8,ns)])]))),128)),t("button",{onClick:s[3]||(s[3]=(...r)=>e.addActivity&&e.addActivity(...r)),class:"mt-6 py-2 px-6 rounded-sm self-start text-sm text-white bg-primaryc duration-200 border-solid border-2 boder-transperent hover:border-primaryc hover:bg-white hover:text-primaryc"}," Add Activity ")])):f("",!0)]),t("div",ls,[cs,w(t("input",{required:"",type:"date",class:"p-2 text-gray-500 focus:outline-none",id:"activity-date","onUpdate:modelValue":s[4]||(s[4]=r=>e.ActivityDate=r)},null,512),[[k,e.ActivityDate]])]),t("div",ds,[us,w(t("input",{required:"",type:"time",class:"p-2 text-gray-500 focus:outline-none",id:"activity-time","onUpdate:modelValue":s[5]||(s[5]=r=>e.ActivityTime=r)},null,512),[[k,e.ActivityTime]])]),t("div",ms,[ps,w(t("input",{required:"",type:"text",class:"p-2 text-gray-500 focus:outline-none",id:"activity-location","onUpdate:modelValue":s[6]||(s[6]=r=>e.ActivityLocation=r)},null,512),[[k,e.ActivityLocation]])]),vs],32)])])}var _s=$(Ot,[["render",hs]]);const ys={name:"view-activity",setup(){const i=l(null),s=l(null),n=l(null),e=l(null),a=l(null),c=J(),r=l(null),o=l(null),h=l(null);b.user=x.auth.user();const _=c.params.id,g=async()=>{try{const{data:p,error:y}=await x.from("activities").select("*").eq("id",_);if(y)throw y;i.value=p[0],n.value=!0}catch(p){e.value=p.message,setTimeout(()=>{e.value=null},5e3)}};g();const P=async()=>{const p=[];let y=[];try{const{data:V,error:$r}=await x.from("instanceOfActivities").select("user ( username )").eq("activity_id",_);p.value=V}catch(V){e.value=V.message,setTimeout(()=>{e.value=null},5e3)}p.value.forEach(V=>{y.push(V.user)}),o.value=!0,r.value=y};return P(),{data:i,dataLoaded:n,errorMsg:e,statusMsg:a,getData:g,joinActivity:async()=>{try{const{data:p,error:y}=await x.from("instanceOfActivities").insert({activity_id:_,user:b.user.id});if(y)throw y;a.value="You joined this activity",setTimeout(()=>{a.value=null},5e3)}catch(p){e.value=p.message,setTimeout(()=>{e.value=null},5e3)}c.go()},checkParticipation:P,members:r,membersLoaded:o,username:h,userParticipated:s}}},fs={class:"max-w-screen-sm mx-auto px-4 py-10"},gs={key:0,class:"mb-10 p-4 rounded-md shadow-md bg-light-grey"},xs={class:"test-primaryc"},bs={class:"test-red-500"},ws={key:1},ks={class:"flex flex-col items-center p-8 rounded-md shadow-md bg-light-grey relative"},As={class:"mt-2 py-1 px-3 text-xs text-white bg-primaryc shadow-md rounded-lg"},$s={class:"mt-2 text-center text-xl text-primaryc"},Ls={class:"mt-2 text-center text-xl text-primaryc"},Us={key:0,class:"mt-2 text-center text-xl text-primaryc"},Ms={key:1,class:"flex self-center gap-x-2"},Ps={key:2,class:"flex self-center gap-x-2"},Cs={class:"flex flex-col mt-6 items-center p-8 rounded-md shadow-md bg-light-grey relative"},Is={key:0,class:"mt-2 py-1 px-3 text-xl text-white bg-primaryc shadow-md rounded-lg"},Vs={class:"mt-2 text-center text-xl text-primaryc cursor-pointer"};function Ds(i,s,n,e,a,c){const r=U("router-link");return d(),u("div",fs,[e.statusMsg||e.errorMsg?(d(),u("div",gs,[t("p",xs,v(e.statusMsg),1),t("p",bs,v(e.errorMsg),1)])):f("",!0),e.dataLoaded?(d(),u("div",ws,[t("div",ks,[t("p",As,v(e.data.date)+" - "+v(e.data.type),1),t("h1",$s,v(e.data.name),1),t("p",Ls," In "+v(e.data.location)+" at "+v(e.data.time),1),e.data.type=="others"?(d(),u("p",Us," Doing "+v(e.data.activity[0].description)+" for "+v(e.data.activity[0].duration),1)):f("",!0),e.members!=null&&e.members.includes(e.username)?(d(),u("div",Ms,[t("div",{class:"mt-2 py-2 px-6 rounded-sm self-start cursor-pointer text-sm text-white bg-primaryc duration-200 border-solid border-2 boder-transperent hover:border-primaryc hover:bg-white hover:text-primaryc",onClick:s[0]||(s[0]=o=>e.joinActivity(e.username))}," Leave this Activity ")])):(d(),u("div",Ps,[t("div",{class:"mt-2 py-2 px-6 rounded-sm self-start cursor-pointer text-sm text-white bg-primaryc duration-200 border-solid border-2 boder-transperent hover:border-primaryc hover:bg-white hover:text-primaryc",onClick:s[1]||(s[1]=o=>e.joinActivity())}," Join this Activity ")]))]),t("div",Cs,[e.membersLoaded?(d(),u("p",Is," people participating: ")):f("",!0),(d(!0),u(D,null,T(e.members,(o,h)=>(d(),I(r,{to:{name:"ViewProfile",params:{username:o.username}},key:h},{default:A(()=>[t("p",Vs,v(o.username),1)]),_:2},1032,["to"]))),128))])])):f("",!0)])}var Ts=$(ys,[["render",Ds]]);const qs={props:{path:String},setup(i){const{path:s}=S(i),n=l("30em"),e=l(!1),a=l(""),c=l(),r=async()=>{try{const{data:o,error:h}=await L.storage.from("avatars").download(s.value);if(h)throw h;a.value=URL.createObjectURL(o)}catch(o){console.error("Error downloading image: ",o.message)}};return B(s,()=>{s.value&&r()}),{path:s,size:n,uploading:e,src:a,files:c}}},Ns={class:"flex flex-col items-center"},js=["src"];function Es(i,s,n,e,a,c){return d(),u("div",null,[t("div",Ns,[e.src?(d(),u("img",{key:0,src:e.src,alt:"Avatar",class:"avatar image",style:j({height:e.size,width:e.size})},null,12,js)):(d(),u("div",{key:1,class:"avatar no-image",style:j({height:e.size,width:e.size})},null,4))])])}var Y=$(qs,[["render",Es]]);const Os={name:"view-profile",components:{Avatar:Y},setup(){const i=l(null),s=J(),n=l(!0),e=l(""),a=l(""),c=l(""),r=l(""),o=l(""),h=s.params.username;b.user=x.auth.user();async function _(){try{n.value=!0;let{data:m,error:p,status:y}=await x.from("profiles").select("username, gender, avatar_url, interests").eq("username",h).single();if(p&&y!==406)throw p;m&&(e.value=m.username,a.value=m.gender,c.value=m.avatar_url,i.value=!0,r.value=m.interests)}catch(m){alert(m.message)}finally{n.value=!1}}_();async function g(){try{n.value=!0,b.user=x.auth.user();let{data:m,error:p,status:y}=await x.from("profiles").select("id").eq("username",h).single();if(p&&y!==406)throw p;m&&(o.value=m.id)}catch(m){alert(m.message)}finally{n.value=!1}}return g(),{dataLoaded:i,loading:n,username:e,gender:a,avatar_url:c,interests:r,like:async()=>{try{const{error:m}=await x.from("likes").insert({like_from:b.user.id,like_to:o.value})}catch{}},me:o}}},zs={class:"max-w-screen-sm mx-auto px-4 py-10"},Rs={class:"p-8 flex flex-col items-center bg-light-grey rounded-md shadow-lg"},Ss={class:"text-primaryc text-xl"},Bs={key:0,class:"text-primaryc text-xl"},Js={key:1,class:"text-primaryc text-xl"},Fs=t("button",{type:"submit",class:"mt-6 py-2 px-6 rounded-sm self-start text-sm text-white bg-primaryc duration-200 border-solid border-2 boder-transperent hover:border-primaryc hover:bg-white hover:text-primaryc"}," Like ",-1),Ys=[Fs];function Gs(i,s,n,e,a,c){const r=U("Avatar");return d(),u("div",zs,[t("div",Rs,[t("h1",Ss,"Profile of "+v(e.username),1),C(r,{path:e.avatar_url,"onUpdate:path":s[0]||(s[0]=o=>e.avatar_url=o)},null,8,["path"]),e.gender?(d(),u("p",Bs,"Gender: "+v(e.gender),1)):f("",!0),e.interests?(d(),u("p",Js,"Interests: "+v(e.interests),1)):f("",!0),t("form",{onSubmit:s[1]||(s[1]=q((...o)=>e.like&&e.like(...o),["prevent"]))},Ys,32)])])}var Hs=$(Os,[["render",Gs]]);const Ws={name:"explore",components:{Avatar:Y},setup(){const i=l([]),s=l(null),n=l(!1);l(""),l("");const e=c=>{var r="https://avatars.dicebear.com/api/personas/"+c+".svg";return r};async function a(){try{n.value=!1,E.user=x.auth.user();const{data:c,error:r}=await x.from("profiles").select("username, gender, avatar_url");if(r)throw r;i&&(i.value=c,s.value=!0)}catch(c){console.warn(c.message)}finally{setTimeout(()=>{n.value=!0},1e3)}}return a(),{dataLoaded:s,loading:n,data:i,getImgUrl:e}}},Zs={class:"max-w-screen-sm mx-auto px-4 py-10"},Ks={key:0,class:"w-full flex flex-col items-center"},Xs=t("h1",{class:"text-2xl"},"There are no Users yet.",-1),Qs=[Xs],er={key:1,class:"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 gap-6"},tr=["src"],sr={class:"mt-2 py-1 px-3 text-xl text-primaryc bg-white shadow-md rounded-lg"},rr={class:"mt-2 text-center text-xl text-white"};function or(i,s,n,e,a,c){const r=U("router-link");return d(),u("div",Zs,[e.data.length===0?(d(),u("div",Ks,Qs)):(d(),u("div",er,[(d(!0),u(D,null,T(e.data,(o,h)=>(d(),I(r,{class:"flex flex-col items-center bg-primaryc p-8 shadow-md cursor-pointer",to:{name:"ViewProfile",params:{username:o.username}},key:h},{default:A(()=>[t("img",{src:e.getImgUrl(o.username),alt:""},null,8,tr),t("p",sr,v(o.username),1),t("h1",rr,v(o.gender),1)]),_:2},1032,["to"]))),128))]))])}var ar=$(Ws,[["render",or]]),G="assets/heart.736e2403.png";const ir={name:"chat",components:{},setup(){const i=l("");l([]),l(!0);const s=l([]),n=l(null),e=l([]),a=l([]),c=N();b.user=L.auth.user();let r;(async()=>{try{const{data:m,error:p}=await L.from("profiles").select("username").eq("id",b.user.id).single();if(p)throw p;i.value=m,r=m}catch(m){console.warn(m.message)}})();const h=async m=>{console.log("start Date with ",m);try{const{error:p}=await L.from("dates").insert({person_a:m,person_b:b.user.id,location:1});if(p)throw p}catch(p){console.warn(p.message)}c.go()},_=async()=>{try{const{data:m,error:p}=await L.from("dates").select(`
                    person_a ( username ),
                    person_b ( username ),
                    loc:location ( name ),
                    loca:location ( adress ),
                    time
                    `).eq("person_b",b.user.id).single();if(p)throw p;console.log("dates",m),e.value=m}catch(m){console.warn(m.message)}},g=async()=>{try{const{data:m,error:p}=await L.from("dates").select(`
                    person_a ( username ),
                    person_b ( username ),
                    loc:location ( name ),
                    loca:location ( adress ),
                    time
                    `).eq("person_a",b.user.id).single();if(p)throw p;console.log("dates",m),a.value=m}catch(m){console.warn(m.message)}};return _(),g(),(async()=>{try{const{data:m,error:p}=await L.from("likes").select("like_from, user:like_from ( username ), id:like_from ( id )").eq("like_to",b.user.id);if(p)throw p;s.value=m,n.value=!0}catch(m){console.warn(m.message)}})(),{me:i,likes_from:s,dataLoaded:n,startDate:h,datesA:e,datesB:a}}},nr={class:"max-w-screen-sm mx-auto px-4 py-10"},lr={key:0,class:"mb-10 p-4 rounded-md shadow-md bg-light-grey"},cr={class:"test-primaryc"},dr={class:"test-red-500"},ur={key:1},mr={key:0,class:"text-center mt-5 p-8 flex flex-col bg-primaryc text-white rounded-md shadow-lg"},pr=t("img",{class:"h-20 w-20 self-center",src:G,alt:""},null,-1),vr={class:"text-xl"},hr={class:"text-xl"},_r={key:1,class:"text-center mt-5 p-8 flex flex-col bg-primaryc text-white rounded-md shadow-lg"},yr=t("img",{class:"h-20 w-20 self-center",src:G,alt:""},null,-1),fr={class:"text-xl"},gr={class:"text-xl"},xr={key:2},br=["onClick"];function wr(i,s,n,e,a,c){return d(),u("div",nr,[i.statusMsg||i.errorMsg?(d(),u("div",lr,[t("p",cr,v(i.statusMsg),1),t("p",dr,v(i.errorMsg),1)])):f("",!0),e.datesB!=""||e.datesA!=""?(d(),u("div",ur,[e.datesA!=""?(d(),u("div",mr,[pr,t("p",vr," You have a Date with "+v(e.datesA.person_a.username)+" at "+v(e.datesA.time),1),t("p",hr," Location is "+v(e.datesA.loc.name)+" in "+v(e.datesA.loca.adress),1)])):f("",!0),e.datesB!=""?(d(),u("div",_r,[yr,t("p",fr," You have a Date with "+v(e.datesB.person_b.username)+" at "+v(e.datesB.time),1),t("p",gr," Location is "+v(e.datesB.loc.name)+" in "+v(e.datesB.loca.adress),1)])):f("",!0)])):(d(),u("div",xr,[(d(!0),u(D,null,T(e.likes_from,(r,o)=>(d(),u("div",{key:o,class:"text-center mt-5 p-8 flex flex-col bg-light-grey rounded-md shadow-lg"},[t("p",null,v(r.user.username)+" likes you",1),t("button",{onClick:h=>e.startDate(r.id.id),class:"self-center py-2 px-6 rounded-sm text-sm text-white bg-primaryc duration-200 border-solid border-2 boder-transperent hover:border-primaryc hover:bg-white hover:text-primaryc"}," Request a Date today ",8,br)]))),128))]))])}var kr=$(ir,[["render",wr]]);const Ar=[{path:"/",name:"Home",component:Te,meta:{title:"Home",auth:!0}},{path:"/explore",name:"Explore",component:ar,meta:{title:"Explore",auth:!0}},{path:"/login",name:"Login",component:He,meta:{title:"Login",auth:!1}},{path:"/register",name:"Register",component:dt,meta:{title:"Sign Up",auth:!1}},{path:"/profile",name:"Profile",component:jt,meta:{title:"Profile",auth:!0}},{path:"/activity",name:"Activity",component:_s,meta:{title:"Create Activity",auth:!0}},{path:"/view-activity/:id",name:"ViewActivity",component:Ts,meta:{title:"View Activity",auth:!0}},{path:"/view-profile/:username",name:"ViewProfile",component:Hs,meta:{title:"View Profile",auth:!0}},{path:"/chat",name:"Chat",component:kr,meta:{title:"Dashboard",auth:!0}}],O=X({history:Q(),routes:Ar});O.beforeEach((i,s,n)=>{document.title=`${i.meta.title} | Meet People`,n()});O.beforeEach((i,s,n)=>{const e=x.auth.user();if(i.matched.some(a=>a.meta.auth)){if(e){n();return}n({name:"Login"});return}n()});ee(ke).use(O).mount("#app");
