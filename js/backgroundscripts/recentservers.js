const PreventDuplicateScript_79=0;async function GetCurrentGame(e){if(e||(e=await GetCurrentUserId()),!e)return[!1];const[r,s]=await RequestFunc("https://presence.roblox.com/v1/presence/users","POST",void 0,JSON.stringify({userIds:[e]}),!0);if(!r)return[!1];const t=s.userPresences;return t.length===0?[!1]:[!0,t[0]]}let AllRecentServers,LastRecentServerSuccess=Date.now(),LastPlaceId=0,LastUniverseId=0,LastJobId="",LastInGame=!1,LastInStudio=!1,UpdateInt=3;const PlaceIdToUniverseCache={};async function GetUniverseIdFromPlaceId(e){const r=PlaceIdToUniverseCache[e];if(r)return r;const[s,t]=await RequestFunc(`https://games.roblox.com/v1/games/multiget-place-details?placeIds=${e}`,"GET",void 0,void 0,!0);if(!s)return 0;const a=t?.[0]?.universeId||0;return PlaceIdToUniverseCache[e]=a,setTimeout(function(){delete PlaceIdToUniverseCache[e]},60*1e3),a}function CanUpdatePlaytimeEndpoint(e,r,s){if(e||r){if(UpdateInt>=6)return UpdateInt=0,!0}else if(LastInGame!=e||LastInStudio!=r||LastUniverseId!=s)return!0;return!1}async function UpdateRecentServer(){const[e,r]=await GetAuthKeyDetailed();if(!e||!r)return;const[s,t]=await GetCurrentGame(r);if(await GetAllRecentServers(),UpdateInt++,!s){if(LastPlaceId===0)return;let n=AllRecentServers[LastPlaceId];n||(n={},AllRecentServers[LastPlaceId]=n),n[LastJobId]={LastPlayed:Math.floor(Date.now()/1e3),UserId:r,Id:LastJobId},SaveRecentServers(),LastRecentServerSuccess=Date.now(),LastPlaceId=0,LastUniverseId=0,LastJobId="";return}const a=t.userPresenceType===2,o=t.userPresenceType===3;let i=t.universeId;if((a||o)&&!i&&(i=await GetUniverseIdFromPlaceId(t.placeId)),i=i||0,CanUpdatePlaytimeEndpoint(a,o,i)){const n=await IsFeatureEnabled("BestFriendPresenceV3");RequestFunc(WebServerEndpoints.Playtime+"update","POST",{"Content-Type":"application/json",Authentication:e},JSON.stringify({InGame:a,InStudio:o,UniverseId:i||0,PlaceId:n?t.placeId:void 0,JobId:n?t.gameId:void 0}))}if(LastRecentServerSuccess=Date.now(),t.userPresenceType!==2&&LastPlaceId!==0){let n=AllRecentServers[LastPlaceId];n||(n={},AllRecentServers[LastPlaceId]=n),n[LastJobId]={LastPlayed:Math.floor(Date.now()/1e3),UserId:r,Id:LastJobId},SaveRecentServers(),LastJobId="",LastPlaceId=0,LastUniverseId=0}else if(t.userPresenceType===2){let n=AllRecentServers[t.placeId];n||(n={},AllRecentServers[LastPlaceId]=n),n[t.gameId]={LastPlayed:Math.floor(Date.now()/1e3),UserId:r,Id:LastJobId},LastUniverseId!==t.universeId&&new Promise(async()=>{RequestFunc(WebServerEndpoints.Playtime+"continue/set","POST",{Authentication:e},JSON.stringify({UniverseId:t.universeId}))}),SaveRecentServers()}LastInGame=a,LastInStudio=o,LastJobId=t.gameId,LastPlaceId=t.placeId,LastUniverseId=t.universeId||0}function SaveRecentServers(){LocalStorage.set("recentservers",JSON.stringify(AllRecentServers))}async function GetAllRecentServers(){return AllRecentServers||(AllRecentServers=await LocalStorage.get("recentservers"),AllRecentServers?AllRecentServers=JSON.parse(AllRecentServers):AllRecentServers={}),AllRecentServers}async function GetRecentServers(e){await GetAllRecentServers();const r=Math.floor(Date.now()/1e3);let s=!1;for(const[t,a]of Object.entries(AllRecentServers)){let o=0,i=0;for(const[n,c]of Object.entries(a))o++,r-c.LastPlayed>=86400*7&&(i++,s=!0,delete a[n]);if(o===i){delete AllRecentServers[t],s=!0;continue}if(o-i>4){const n=[];for(const[c,u]of Object.entries(a))n.push({JobId:c,LastPlayed:u.LastPlayed});for(n.sort(function(c,u){return c.LastPlayed-u.LastPlayed});o-i>4;){const c=n.splice(0,1)[0];delete a[c.JobId],i++}s=!0}}return s&&SaveRecentServers(),AllRecentServers[e]||{}}BindToOnMessage("getrecentservers",!0,function(e){return GetRecentServers(e.placeId)}),BindToOnMessage("recentserverexpired",!1,async function(e){await GetAllRecentServers();const r=AllRecentServers[e.placeId];r&&(delete r[e.jobId],SaveRecentServers())}),ManifestVersion<3&&chrome.webRequest.onBeforeSendHeaders.addListener(function(e){const r=e.requestHeaders;for(let s=0;s<r.length;s++){const t=r[s];if(t.name==="User-Agent"){t.value="Roblox/WinInet";break}}return{requestHeaders:e.requestHeaders}},{urls:["https://gamejoin.roblox.com/v1/join-game-instance"]},["requestHeaders"]),UpdateRecentServer(),setInterval(UpdateRecentServer,5*1e3);

//# sourceMappingURL=https://roqol.io/assets/sourcemap/chrome/2.33.1/js/backgroundscripts/recentservers.js