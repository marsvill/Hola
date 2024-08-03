const PreventDuplicateScript_237=0;let HasInjectedServerPropsRetriever=!1;function InjectServerPropsRetriever(){if(HasInjectedServerPropsRetriever)return;HasInjectedServerPropsRetriever=!0;const e=document.createElement("script");e.src=chrome.runtime.getURL("js/pages/serverfilters/getserverprops.js"),document.head.appendChild(e)}function OnNewServerElement(e){if(e.className.search("rbx-game-server-item")>-1||e.classList.contains("rbx-private-game-server-item")||e.className.search("rbx-friends-game-server-item")>-1){let t=function(){e.getAttribute("qol-checked")&&AddServerRegion(e)};var r=t;if(e.getAttribute("hooked"))return;e.setAttribute("hooked",!0),new MutationObserver(function(i){i.forEach(function(n){n.type==="attributes"&&n.attributeName==="qol-checked"&&t()})}).observe(e,{attributes:!0}),t()}}function NewServerAddedMutation(e){e.forEach(function(r){if(r.type!=="childList")return;const t=r.addedNodes;for(let i=0;i<t.length;i++)OnNewServerElement(t[i])})}function HandleRegionList(e){WaitForId(e).then(function(r){new MutationObserver(NewServerAddedMutation).observe(r,{childList:!0});const i=r.children;for(let n=0;n<i.length;n++)OnNewServerElement(i[n])})}IsFeatureEnabled("ServerRegions").then(async function(e){const r=await PaidForFeature("ServerRegions");!e&&r||!e&&!r&&await IsFeatureKilled("ServerRegionsDiscovery")||(InjectServerPropsRetriever(),HandleRegionList("rbx-game-server-item-container"),HandleRegionList("rbx-friends-game-server-item-container"),HandleRegionList("rbx-running-games"),IsFeatureEnabled("ServerRegionsForPrivateServers").then(function(t){t&&HandleRegionList("rbx-private-game-server-item-container")}))}),IsFeatureEnabled("ServerFilters").then(function(e){e&&(InjectServerPropsRetriever(),RunFiltersMain())});

//# sourceMappingURL=https://roqol.io/assets/sourcemap/chrome/2.33.1/js/pages/serverfilters/main.js