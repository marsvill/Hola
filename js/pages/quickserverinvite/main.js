const PreventDuplicateScript_224=0;const InviteCache={};let PreviousBox;async function GetInvite(i,e){if(InviteCache[e]){for(;InviteCache[e]===!0;)await sleep(50);return InviteCache[e]?[!0,InviteCache[e]]:[!1]}InviteCache[e]=!0;const[t,n]=await RequestFunc(`${WebServerEndpoints.Servers}invite?placeId=${i}&jobId=${e}`,"GET");return t?(InviteCache[e]=n.Invite,[!0,n.Invite]):(delete InviteCache[e],[!1])}async function ElementAdded(i){if(i.className.search("game-server-item")===-1||i.className.search("rbx-private-game-server-item")>-1)return;const e=i.classList.contains("rorsl-server");let t;if(e)t=i.getElementsByTagName("button")[0].parentNode;else{const o=i.getElementsByClassName("card-item")[0];let a;for(;!a;)await sleep(50),a=o.getElementsByClassName("game-server-details")[0];const s=a.children;for(let r=0;r<s.length;r++)if(s[r].tagName.toLowerCase()==="span"){t=s[r];break}}if(t.children[0].style="width: 70%!important; max-width: 70%!important; min-width: 30%!important;",t.children.length>1)return;const n=CreateServerButton("Invite");e&&(n.style.marginLeft=""),t.appendChild(n),new MutationObserver(function(o){o.forEach(function(a){if(a.type!=="childList")return;const s=a.removedNodes;for(let r=0;r<s.length;r++){const d=s[r];n===d&&t.appendChild(n)}})}).observe(t,{childList:!0});let l;n.addEventListener("click",async function(){if(l&&!l.parentNode&&(l=null),PreviousBox&&l===PreviousBox){PreviousBox.remove(),PreviousBox=null;return}PreviousBox&&PreviousBox.remove();const[o,a,s]=CreateInviteBox();let r=o;e&&(o.style="left: -24px; bottom: 30px;",r=document.createElement("div"),r.style="position: absolute;",r.appendChild(o)),t.appendChild(r),l=r,PreviousBox=r,a.value="Loading...";const[d,v]=await GetInvite(i.getAttribute("placeid"),i.getAttribute("jobid"));a.value=d&&v||"Failed to generate";let c=0;d&&a.addEventListener("click",async function(){c++,a.select(),navigator.clipboard.writeText(v).then(async()=>{s.style="",s.innerText="Copied to clipboard!";const u=c;await sleep(2e3),u===c&&(s.style="display: none;")},async()=>{s.style="",s.innerText="Failed to copy!";const u=c;await sleep(2e3),u===c&&(s.style="display: none;")})})})}function NewServerAddedMutationInvite(i){i.forEach(function(e){if(e.type!=="childList")return;const t=e.addedNodes;for(let n=0;n<t.length;n++)ElementAdded(t[n])})}function HandleInviteList(i){WaitForId(i).then(function(e){new MutationObserver(NewServerAddedMutationInvite).observe(e,{childList:!0});const t=e.children;for(let n=0;n<t.length;n++)ElementAdded(t[n])})}setTimeout(function(){IsFeatureEnabled("QuickInvite").then(function(i){i&&(HandleInviteList("rbx-game-server-item-container"),HandleInviteList("rbx-friends-game-server-item-container"),HandleInviteList("rbx-recent-game-server-item-container"),HandleInviteList("rbx-voice-game-server-item-container"),HandleInviteList("rbx-running-games"))})},0);

//# sourceMappingURL=https://roqol.io/assets/sourcemap/chrome/2.33.1/js/pages/quickserverinvite/main.js