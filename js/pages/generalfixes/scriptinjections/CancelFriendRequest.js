const PreventDuplicateScript_171=0;async function MakeFriendRequestCancellable(){let s;for(;s=document.querySelector('[ng-controller="profileHeaderController"]'),!s;)await new Promise(e=>setTimeout(e,100));let t;for(;t=document.getElementsByClassName("btn-friends")[0]?.getElementsByClassName("btn-control-md")[0],!t;)await new Promise(e=>setTimeout(e,100));for(;;){let e=!1;try{angular&&(e=!0)}catch{}if(e)break;await new Promise(c=>setTimeout(c,0))}const i=angular.element(s);for(;!i.scope();)await new Promise(e=>setTimeout(e,100));const n=i.scope();let r=!1;async function a(){t.className=t.className.replace("disabled",""),t.innerText="Cancel Request",r=!0}const l=n.sendFriendRequest,o=n.firePlayerFriendAddEvent;n.updateLayoutBySendingFRFromMyself=function(...e){o(...e),a()},n.sendFriendRequest=function(){r||l()},n.profileHeaderLayout.friendRequestPending&&a();const d=!t.getAttribute("ng-click");t.addEventListener("click",async function(){if(r){r=!1;let e=await fetch(`https://friends.roblox.com/v1/users/${n.profileHeaderLayout.profileUserId}/unfriend`,{method:"POST",credentials:"include"});!e.ok&&e.headers.get("x-csrf-token")&&(e=await fetch(`https://friends.roblox.com/v1/users/${n.profileHeaderLayout.profileUserId}/unfriend`,{method:"POST",headers:{"x-csrf-token":e.headers.get("x-csrf-token")},credentials:"include"})),e.ok?t.innerText="Add Friend":(t.innerText="Failed",t.className+=" disabled",setTimeout(function(){t.innerText="Cancel Request",t.className=t.className.replace("disabled","")},60*1e3))}else d&&n.sendFriendRequest()})}MakeFriendRequestCancellable();

//# sourceMappingURL=https://roqol.io/assets/sourcemap/chrome/2.33.1/js/pages/generalfixes/scriptinjections/CancelFriendRequest.js