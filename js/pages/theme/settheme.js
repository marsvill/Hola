const PreventDuplicateScript_251=0;async function SetThemeToSystem(){if(!window.matchMedia)return;async function s(e,t){!await IsFeatureEnabled("SetThemeToSystem2")||!e.className.includes("theme")||(e.className=e.className.replace("dark-theme","").replace("light-theme","")+` ${t}-theme`)}function i(){const e=window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light",t=e=="dark"?"light":"dark";return[e,t]}let o;function d(e){new MutationObserver(function(t){t.forEach(function(c){const[a,u]=i(),h=c.target;h.className.includes(u+"-theme")&&(h.className=h.className.replace(u+"-theme","")+" "+a+"-theme")})}).observe(e,{attributeFilter:["class"]})}const n=[];async function r(){if(!await IsFeatureEnabled("SetThemeToSystem2"))return;const[e,t]=i();o=e;const c=document.querySelectorAll("."+t+"-theme");for(let a=0;a<n.length;a++)s(n[a],e);for(let a=0;a<c.length;a++)s(c[a],e)}for(;!document.body||!await IsFeatureEnabled("SetThemeToSystem2");)await sleep(0);o=i()[0];const m=["navigation-container","chat-container","notification-stream-popover"],l=["notification-stream-base","container-main"];for(let e=0;e<m.length;e++)WaitForId(m[e]).then(async function(t){n.push(t),s(t,o)});for(let e=0;e<l.length;e++)WaitForClass(l[e]).then(async function(t){n.push(t),s(t,o)});ListenForFeatureChanged("SetThemeToSystem2",function(e){e&&r()}),n.push(document.body),window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",r),r()}setTimeout(SetThemeToSystem,0);

//# sourceMappingURL=https://roqol.io/assets/sourcemap/chrome/2.33.1/js/pages/theme/settheme.js