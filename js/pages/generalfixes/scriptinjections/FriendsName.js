const PreventDuplicateScript_172=0;async function FriendsNameOnHomePage(){let r;const d=[];function p(){return r||new Promise(e=>{d.push(e)})}async function b(e,l){for(;;){const i=e.getElementsByClassName(l)[0];if(i)return i;await new Promise(a=>setTimeout(a,100))}}async function u(e){const l=await b(e,"hlist"),i=l.children;async function a(n){const c=parseInt(n.getAttribute("rbx-user-id"));await p();const o=r?.library?.friendsDict?.[c]?.name;if(!o||n.getElementsByClassName("roblox-name-subheader")[0])return;const t=document.createElement("span");t.className="text-overflow friend-name roblox-name-subheader font-caption-header",t.style="font-size: x-small; color: darkgrey; top: -6px; position: inherit; margin-bottom: -9px;",t.innerText=`@${o}`,t.title=o;const m=n.getElementsByClassName("friend-link")[0],h=m.getElementsByClassName("friend-parent-container")[0]?.nextSibling;h?m.insertBefore(t,h):m.appendChild(t)}new MutationObserver(function(n){n.forEach(function(c){const o=c.addedNodes;for(let t=0;t<o.length;t++)a(o[t])})}).observe(l,{childList:!0});for(let n=0;n<i.length;n++)a(i[n]);e.classList.add("roblox-usernames")}document.addEventListener("RobloxQoL.BestFriendsLoaded",function(){u(document.getElementById("best-friend-list-container"))});let s;for(;s=document.querySelector('[ng-controller="peopleListContainerController"]'),!s;)await new Promise(e=>setTimeout(e,100));const f=angular.element(s).scope();for(;f.library?.numOfFriends===null;)await new Promise(e=>setTimeout(e,100));r=f;for(let e=0;e<d.length;e++)d[e](r);u(s)}FriendsNameOnHomePage();

//# sourceMappingURL=https://roqol.io/assets/sourcemap/chrome/2.33.1/js/pages/generalfixes/scriptinjections/FriendsName.js