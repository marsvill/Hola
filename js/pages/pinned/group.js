const PreventDuplicateScript_209=0;IsFeatureEnabled("PinnedGroups").then(async function(b){if(!b)return;let d;const a=document.createElement("div");a.className="rbx-divider";const E={},p={};let o=[];function O(t,n){n||(n=t.parentElement.children);for(let r=0;r<n.length;r++)if(n[r]===t)return r}function P(t,n,r){if(r){const i=d.children;let e=O(t,i);e&&(e=i.length-(e+1)),E[n]=e,d.insertBefore(a,d.children[0]);const s=[];for(const[l,g]of Object.entries(p)){const G=o.indexOf(parseInt(l));G!==-1&&s.push({GroupId:l,Element:g,Order:G})}s.sort(function(l,g){return l.Order-g.Order});for(let l=0;l<s.length;l++)d.insertBefore(s[l].Element,a)}else{let i=E[n];i?i=d.children.length-i:i=-1,d.insertBefore(t,d.children[i])}o.length===0&&a.remove()}const f=document.createElement("li"),m=document.createElement("div"),v=document.createElement("button");m.appendChild(v),f.appendChild(m);let h=!1,I;function u(){return parseInt(window.location.href.split("groups/")[1].split("/")[0])}function c(){v.innerText=o.includes(u())?"Unpin":"Pin"}setInterval(function(){I!==u()&&(I=u(),c())},100);async function S(){if(h)return;h=!0;const t=o.includes(u());t?o.splice(o.indexOf(u()),1):o.push(u()),c(),P(p[u()],u(),!t);const[n]=await RequestFunc(WebServerEndpoints.Pinned+"group/pin","POST",null,JSON.stringify([{GroupId:u(),Pinned:!t}]));h=!1}WaitForClass("group-menu").then(function(t){ChildAdded(t,!0,async function(n){if(n.className.includes("popover")){const r=await WaitForClassPath(n,"popover-content","dropdown-menu");r.insertBefore(f,r.children[0])}}),c()}),f.addEventListener("click",S),RequestFunc(WebServerEndpoints.Pinned+"group/pinned","GET").then(function([t,n]){t&&(o=n,c(),WaitForId("groups-list").then(async function(r){const i=await WaitForClassPath(r,"mCSB_container");d=i,ChildAdded(i,!0,async function(e){if(!e.className||e.getAttribute("hooked"))return;e.setAttribute("hooked",!0);let s;for(;s=parseInt(e.getAttribute("groupId")),!(s&&!isNaN(s));)await sleep(50);p[s]=e,o.includes(s)&&P(e,s,!0)}),InjectScript("SetGroupIdOnElements")}))}),document.addEventListener("CurrentRobloxGroups",function(t){const n=t.detail,r={};for(let e=0;e<n.length;e++)r[n[e].id]=!0;const i=[];for(let e=0;e<o.length;e++)r[o[e]]||i.push({GroupId:o[e],Pinned:!1});i.length!=0&&RequestFunc(WebServerEndpoints.Pinned+"group/pin","POST",null,JSON.stringify(i))}),c()});

//# sourceMappingURL=https://roqol.io/assets/sourcemap/chrome/2.33.1/js/pages/pinned/group.js