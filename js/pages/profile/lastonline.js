const PreventDuplicateScript_220=0;IsFeatureEnabled("LastOnline").then(async function(l){if(!l)return;const r=await GetTargetId(),n=document.createElement("li");n.className="profile-stat",n.innerHTML='<p class="text-label">Last Online</p><p title class="text-lead">...</p>';const s=n.getElementsByClassName("text-lead")[0];async function o(){const[e,t]=await RequestFunc("https://presence.roblox.com/v1/presence/last-online","POST",{"Content-Type":"application/json"},JSON.stringify({userIds:[r]}),!0);if(!e)return s.innerText="Failed",!1;const i=new Date(t.lastOnlineTimestamps[0].lastOnline);return s.title=i.toLocaleDateString(void 0,{hour:"numeric",minute:"numeric",second:"numeric",hour12:!0}),s.innerText=SecondsToLengthSingle(Date.now()/1e3-i.getTime()/1e3,!0)+" ago",!0}RequestFunc("https://presence.roblox.com/v1/presence/users","POST",{"Content-Type":"application/json"},JSON.stringify({userIds:[r]}),!0).then(async function([e,t]){if(!e){s.innerText="Failed";return}if(t.userPresences?.[0]?.userPresenceType!=0){s.innerText="Now";return}for(let i=0;i<3&&!await o();i++)await sleep(1500)});const a=await WaitForClass("profile-stats-container");a.insertBefore(n,a.children[1]),ChildAdded(a,!0,function(e){const t=e.getElementsByClassName("text-label")[0];t&&e!=n&&t.innerText==="Last Online"&&e.remove(),e.style.width="33.33%"})});

//# sourceMappingURL=https://roqol.io/assets/sourcemap/chrome/2.33.1/js/pages/profile/lastonline.js