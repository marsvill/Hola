const PreventDuplicateScript_214=0;async function GetUniverseId(){const n=await WaitForId("game-detail-meta-data");let e;for(;!e;)e=n.getAttribute("data-universe-id"),await sleep(20);return parseInt(e)}async function CreateTypeTime(n,e,l,i){const m=await WaitForClass("game-title-container"),[d,p]=CreateGamePlaytime(e,l,i),[y,L,s,E]=CreateDropdownList("All Time");y.style="width: 120px; display: inline-table; right: 0px; position: absolute;",s.parentElement.style="border-color: transparent; width: 100%;",s.style="font-size: 12px;",d.appendChild(y),m.appendChild(d);let c=0,f=!1;async function h(t){c++;const u=c;p.innerText="...";const[r,o]=await RequestFunc(`${WebServerEndpoints.Playtime}?time=${t}&universeId=${n}&type=${e}`);if(c===u&&(p.innerText=r&&SecondsToLengthShort(o.Playtime,!0,!0)||"???"),!f&&e==="Play"&&r&&t==="all"){f=!0;const C=o.LastPlayed;if(C){const[P,I]=CreateGamePlaytime(function(){IsFeatureEnabled("PlaytimeHeatmap").then(function(D){if(!D)return;const w=CreateHeatmap(P);w&&document.getElementsByClassName("content")[0].appendChild(w)})},"Last Played",chrome.runtime.getURL("/img/sandglass.png")),v=new Date,g=new Date(C*1e3),F=v.getFullYear()!==g.getFullYear()?"numeric":void 0;I.innerText=g.toLocaleString(void 0,{month:"short",day:"numeric",year:F}),m.insertBefore(P,d)}}}function a(t,u){const[r,o]=CreateDropdownButton(t);L.appendChild(r),o.addEventListener("click",function(){s.innerText=t,s.title=t,E(),h(u)})}a("Past Day","1"),a("Past Week","7"),a("Past Month","30"),a("Past Year","365"),a("All Time","all"),h("all")}IsFeatureEnabled("Playtime").then(async function(n){if(!n)return;const e=await GetUniverseId();CreateTypeTime(e,"Play");const[l,i]=await RequestFunc(`https://develop.roblox.com/v1/universes/${e}/permissions`,"GET",void 0,void 0,!0);l&&(i.canManage||i.canCloudEdit)&&CreateTypeTime(e,"Edit","Edited",chrome.runtime.getURL("/img/hammer.png"))});

//# sourceMappingURL=https://roqol.io/assets/sourcemap/chrome/2.33.1/js/pages/playtime/game.js