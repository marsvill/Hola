const PreventDuplicateScript_174=0;async function SetGroupIdOnElement(){const t=document.getElementById("groups-list").getElementsByClassName("mCSB_container")[0];function c(e,s,n){if(s){const o=e.children;if(o)for(let r=0;r<o.length;r++)n(o[r])}return new MutationObserver(function(o,r){o.forEach(function(u){if(u.type!=="childList")return;const l=u.addedNodes;for(let i=0;i<l.length;i++)n(l[i],function(){try{r.disconnect()}catch{}})})}).observe(e,{childList:!0})}c(t,!0,function(e){const n=angular.element(e).scope()?.group?.id;n&&e.setAttribute("groupId",n)})}async function SendGroupsBackToContent_Scripts(){let t;for(;t=document.querySelector('[ng-controller="groupController"]'),!t;)await new Promise(e=>setTimeout(e,100));const c=angular.element(t).scope();document.dispatchEvent(new CustomEvent("CurrentRobloxGroups",{detail:c.library.groupsList.groups}))}SetGroupIdOnElement(),SendGroupsBackToContent_Scripts();

//# sourceMappingURL=https://roqol.io/assets/sourcemap/chrome/2.33.1/js/pages/generalfixes/scriptinjections/SetGroupIdOnElements.js