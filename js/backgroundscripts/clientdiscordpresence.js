const PreventDuplicateScript_67=0;let ExternalDiscordLoggingIn=!1,ExternalDiscordLoggedIn=!1,ExternalDiscordWS,ExternalDiscordInfo;async function OpenExternalDiscord(){if(!await IsFeatureEnabled("ExternalDiscordPresence")||ExternalDiscordLoggedIn||ExternalDiscordLoggingIn||(ExternalDiscordWS=new WebSocket("ws://localhost:9300/presence"),!ExternalDiscordWS))return;ExternalDiscordLoggingIn=!0;function c(t){typeof t=="object"?ExternalDiscordWS.send(JSON.stringify(t)):ExternalDiscordWS.send(t)}let n=0,s=0,a="",i=!1,d=0,f=await IsFeatureEnabled("DiscordPresenceJoin"),l;async function m(){let t=await IsFeatureEnabled("DiscordPresenceJoin");if(LastInGame!=i||LastPlaceId!=n||LastJobId!=a||LastPlaceId!=0&&t!=f){if(f=t,!LastInGame||LastPlaceId==0){a=LastJobId,n=LastPlaceId,s=LastUniverseId,i=LastInGame,c({});return}const[e,I]=await GetUniverseInfo(LastUniverseId);if(!e)return;LastUniverseId!=s&&(d=new Date().toISOString()),a=LastJobId,n=LastPlaceId,s=LastUniverseId,i=LastInGame;const L=await GetUniverseThumbnail(s);let r=I.name;const p=I.creator.name,b=I.creator.hasVerifiedBadge;r.length<2&&(r=r+"(00(00(00");const u=[{Label:"View Game",Url:`https://www.roblox.com/games/${n}`}];t&&u.unshift({Label:"Join",Url:`roblox://experiences/start?placeId=${n}&gameInstanceId=${a}`}),l={Activity:{Details:r,Buttons:u,State:`by ${p}${b?" \u2611\uFE0F":""}`,LargeText:r,LargeImage:L,SmallImage:"https://cdn.discordapp.com/app-assets/1105722413905346660/1105722508038115438.png",SmallText:"Roblox",Timestamps:{Start:d}},PlaceId:n,JobId:a},c(l)}}let o;ExternalDiscordWS.onopen=function(){ExternalDiscordLoggedIn=!0,ExternalDiscordLoggingIn=!1,o=setInterval(m,5*1e3),CloseDiscord()},ExternalDiscordWS.onclose=function(t){o&&(clearInterval(o),o=null),ExternalDiscordLoggingIn=!1,ExternalDiscordLoggedIn=!1,ExternalDiscordWS=null,ExternalDiscordInfo=null},ExternalDiscordWS.onmessage=function(t){let e;try{e=JSON.parse(t.data)}catch{}e?.Type&&(e.Type=="Timestamp"?(i=!0,n=e.PlaceId,s=e.UniverseId,a=e.JobId,d=new Date(e.Timestamp).toISOString()):e.Type=="Authentication"&&(ExternalDiscordInfo=e.User,l&&c(l)))}}function CloseExternalDiscord(){ExternalDiscordWS&&ExternalDiscordWS.close(1e3)}OpenExternalDiscord(),setInterval(OpenExternalDiscord,10*1e3),BindToOnMessage("GetExternalDiscordInfo",!1,function(){return ExternalDiscordInfo||ExternalDiscordLoggedIn});

//# sourceMappingURL=https://roqol.io/assets/sourcemap/chrome/2.33.1/js/backgroundscripts/clientdiscordpresence.js