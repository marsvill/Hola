const PreventDuplicateScript_243=0;function CreateMenuOption(n,i){const l=document.createElement("li");l.className="menu-option";const s=document.createElement("a");s.className="menu-option-content";const c=document.createElement("span");return c.className="font-caption-header",c.innerText=i?n:n.replace(/([A-Z])/g," $1").trim(),s.appendChild(c),l.appendChild(s),l}function CreateMenuList(){return document.createElement("div")}function CreateMobileSettingsDropdown(){const n=document.createElement("div");return n.className="tab-dropdown",n.innerHTML='<div class="input-group-btn dropdown" uib-dropdown=""> <button type="button" uib-dropdown-toggle="" class="input-dropdown-btn dropdown-toggle" aria-haspopup="true" aria-expanded="false"> <span class="rbx-selection-label">General</span> <span class="icon-down-16x16"></span> </button> <ul class="dropdown-menu"></ul> </div>',n}function CreateMobileSettingsDropdownReact(){const n=document.createElement("div");return n.className="rbx-select-group select-group mobile-navigation-dropdown",n.innerHTML='<select class="input-field rbx-select select-option"></select><span class="icon-arrow icon-down-16x16"></span>',n}function CreateMobileMenuOption(n,i){const l=document.createElement("li"),s=document.createElement("a");return s.innerText=i?n:n.replace(/([A-Z])/g," $1").trim(),l.appendChild(s),l}function CreateMobileMenuOptionReact(n,i,l){const s=document.createElement("option");return s.value=l?n.replace(/\s+/g,"-").toLowerCase():n,s.innerText=i?n:n.replace(/([A-Z])/g," $1").trim(),s}function CreateStandaloneButton(n){const i=document.createElement("div");return i.style="display: flex; justify-content: center; width: 100%;",i.innerHTML='<button class="btn-control-sm" style="width: 90%; margin-top: 20px;"><span>Return</span></button>',i.getElementsByTagName("span")[0].innerText=n,[i,i.getElementsByTagName("button")[0]]}async function CreateSettingsListReact(){const n=await WaitForId("settings-container"),i=n.parentNode,l=await WaitForClassPath(n,"mobile-navigation-dropdown"),s=CreateMenuOption("RoQoL Settings",!0);WaitForClassPath(n,"menu-vertical").then(function(e){e.appendChild(s)});const c=l.getElementsByClassName("select-option")[0],N=CreateMobileMenuOptionReact("RoQoL Settings",!0,!0);c.appendChild(N);const o=document.createElement("div");o.style.display="none",o.id="settings-container",o.innerHTML='<div class="left-navigation"> <ul class="menu-vertical submenus" role="tablist" ng-init="currentData.activeTab">  </ul> </div> <div class="tab-content rbx-tab-content ng-scope" ng-controller="accountsContentController">   </div>',i.appendChild(o);const S=o.getElementsByClassName("menu-vertical")[0],a=CreateMobileSettingsDropdownReact();a.style.display="none";const g=a.getElementsByClassName("input-field")[0];o.appendChild(a);const[j,W]=CreateStandaloneButton("Return");a.appendChild(j);let x,V;function O(){o.style.display="",n.style.display="none",l.style.display="none",a.style.display="",window.history.pushState(null,"Settings",`/my/account?tab=robloxqol${V?"&option="+V:""}`)}s.addEventListener("click",O),N.addEventListener("click",O);let M=c?.value;c&&c.addEventListener("change",function(e){c.value==="roblox-qol"&&(e.stopImmediatePropagation(),e.stopPropagation(),O(),c.value=M),M=c.value}),g.addEventListener("change",function(){u(g.value)});const L=o.getElementsByClassName("tab-content rbx-tab-content")[0];o.appendChild(L);const m={},r={},A={};function E(){for(const[e,h]of Object.entries(m))h.style.display="none"}function u(e){E(),x&&(x.className="menu-option",x.children[0].className="menu-option-content"),x=r[e],r[e].className="menu-option active",r[e].children[0].className="menu-option-content active",m[e].style.display="",m[e].dispatchEvent(new CustomEvent("RobloxQoL.Opened")),V=e,window.history.pushState(null,"Settings","/my/account?tab=robloxqol&option="+e)}const d=[];let C=[];async function B(e,h,k){d.push(e),await new Promise(P=>{C.push(P)});const p=Object.keys(Settings),b=CreateMenuList(),t=CreateMenuOption(e),y=CreateMobileMenuOptionReact(e);h(b),k||(S.insertBefore(t,r[p[p.indexOf(e)+1]]),g.insertBefore(y,A[p[p.indexOf(e)+1]])),t.addEventListener("click",function(){u(e)}),y.addEventListener("click",function(){u(e)}),L.appendChild(b),r[e]=t,m[e]=b,b.style.display="none"}const F=[B("Themes",CreateThemesSection),B("Security",CreateSecuritySection),B("Diagnose",CreateDiagnoseSection,!0),B("Subscription",CreateSubscriptionSection)];for(const[e,h]of Object.entries(Settings)){if(d.includes(e))continue;const k=CreateMenuList();L.appendChild(k);const p=CreateMenuOption(e);S.appendChild(p),p.addEventListener("click",function(){u(e)});const b=CreateMobileMenuOptionReact(e);g.appendChild(b),b.addEventListener("click",function(){u(e)}),r[e]=p,A[e]=b,m[e]=k}for(const[e,h]of Object.entries(Settings))d.includes(e)||CreateSpecificSettingsSection(m[e],e,h);for(let e=0;e<C.length;e++)C[e]();await Promise.all(F);const[f,Q]=CreateStandaloneButton("Return");S.parentNode.appendChild(f);function R(){o.style.display="none",n.style.display="",l.style.display="",a.style.display="none",window.history.pushState(null,"Settings","/my/account?")}Q.addEventListener("click",R),W.addEventListener("click",R);const T=new URLSearchParams(window.location.search);if(T.get("tab")==="robloxqol"){O();const e=T.get("option");e?(E(),u(e)):(E(),u(Object.keys(Settings)[0]))}AddImportExportButtons(m.General)}async function CreateSettingsListController(){const n=await WaitForId("settings-container"),i=n.parentNode,l=await WaitForId("vertical-menu"),s=await WaitForClassPath(await WaitForQuerySelector('[ng-controller="accountsController"]'),"section","tab-dropdown"),c=CreateMenuOption("RoQoL Settings",!0);l.appendChild(c);const N=CreateMobileMenuOption("RoQoL Settings",!0);s.getElementsByClassName("dropdown-menu")[0].appendChild(N);const o=document.createElement("div");o.style.display="none",o.id="settings-container",o.innerHTML='<div class="left-navigation"> <ul class="menu-vertical submenus" role="tablist" ng-init="currentData.activeTab">  </ul> </div> <div class="tab-content rbx-tab-content ng-scope" ng-controller="accountsContentController">   </div>',i.appendChild(o);const S=o.getElementsByClassName("menu-vertical")[0],a=CreateMobileSettingsDropdown(),g=a.getElementsByClassName("input-group-btn dropdown")[0];a.style.display="none";const j=a.getElementsByClassName("dropdown-menu")[0];s.parentNode.appendChild(a);const W=a.getElementsByClassName("input-dropdown-btn dropdown-toggle")[0],x=W.getElementsByClassName("rbx-selection-label")[0],[V,O]=CreateStandaloneButton("Return");a.appendChild(V);let M,L;function m(t){x.innerText=t.replace(/([A-Z])/g," $1").trim()}let r=!1;function A(){r&&(g.className=g.className.replace("open",""),r=!1)}W.addEventListener("click",function(t){t.stopPropagation(),r?A():(g.className+=" open",r=!0)}),document.addEventListener("click",A);function E(){o.style.display="",n.style.display="none",s.style.display="none",a.style.display="",window.history.pushState(null,"Settings",`/my/account?tab=robloxqol${L?"&option="+L:""}`)}c.addEventListener("click",E),N.addEventListener("click",E);const u=o.getElementsByClassName("tab-content rbx-tab-content")[0];o.appendChild(u);const d={},C={},B={};function F(){for(const[t,y]of Object.entries(d))y.style.display="none"}function f(t){F(),M&&(M.className="menu-option",M.children[0].className="menu-option-content"),M=C[t],C[t].className="menu-option active",d[t].style.display="",d[t].dispatchEvent(new CustomEvent("RobloxQoL.Opened")),L=t,m(t),window.history.pushState(null,"Settings","/my/account?tab=robloxqol&option="+t)}const Q=[];let R=[];async function T(t,y,P){Q.push(t),await new Promise(q=>{R.push(q)});const v=Object.keys(Settings),w=CreateMenuList(),D=CreateMenuOption(t),I=CreateMobileMenuOption(t);y(w),P||(S.insertBefore(D,C[v[v.indexOf(t)+1]]),j.insertBefore(I,B[v[v.indexOf(t)+1]])),D.addEventListener("click",function(){f(t)}),I.addEventListener("click",function(){f(t)}),u.appendChild(w),C[t]=D,d[t]=w,w.style.display="none"}const e=[T("Themes",CreateThemesSection),T("Security",CreateSecuritySection),T("Diagnose",CreateDiagnoseSection,!0)];for(const[t,y]of Object.entries(Settings)){if(Q.includes(t))continue;const P=CreateMenuList();u.appendChild(P);const v=CreateMenuOption(t);S.appendChild(v),v.addEventListener("click",function(){f(t)});const w=CreateMobileMenuOption(t);j.appendChild(w),w.addEventListener("click",function(){f(t)}),C[t]=v,B[t]=w,d[t]=P}for(const[t,y]of Object.entries(Settings))Q.includes(t)||CreateSpecificSettingsSection(d[t],t,y);for(let t=0;t<R.length;t++)R[t]();await Promise.all(e);const[h,k]=CreateStandaloneButton("Return");S.parentNode.appendChild(h);function p(){o.style.display="none",n.style.display="",s.style.display="",a.style.display="none",window.history.pushState(null,"Settings","/my/account?")}k.addEventListener("click",p),O.addEventListener("click",p);const b=new URLSearchParams(window.location.search);if(b.get("tab")==="robloxqol"){E();const t=b.get("option");t?(F(),f(t)):(F(),f(Object.keys(Settings)[0]))}AddImportExportButtons(d.General)}async function CreateSettingsList(){await Promise.race([new Promise(async i=>{await WaitForClassPath(await WaitForQuerySelector('[ng-controller="accountsController"]'),"section","tab-dropdown"),i("Controller")}),new Promise(async i=>{await WaitForClass("mobile-navigation-dropdown"),i("React")})])==="React"?CreateSettingsListReact():CreateSettingsListController()}setTimeout(CreateSettingsList,0);

//# sourceMappingURL=https://roqol.io/assets/sourcemap/chrome/2.33.1/js/pages/settings/mainv2.js