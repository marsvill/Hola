const PreventDuplicateScript_72=0;const LastFriendsActivity={};function CanUpdateFriendActivity(s,e){return!(!s.universeId||s.userPresenceType!==2||e&&e.userPresenceType===2&&e.universeId===s.universeId&&e.userPresenceType===2)}async function UpdateFriendsActivity(s){if(!await IsFeatureEnabled("FriendsActivity"))return;const[e,c]=await GetAuthKeyDetailed();if(!e||!c)return;const[d,o]=await RequestFunc("https://presence.roblox.com/v1/presence/users","POST",{"Content-Type":"application/json"},JSON.stringify({userIds:s}),!0);if(!d)return;const i=o.userPresences,t=[];let u=!1;for(let r=0;r<i.length;r++){const n=i[r],a=LastFriendsActivity[n.userId];LastFriendsActivity[n.userId]=n,CanUpdateFriendActivity(n,a)&&(t.includes(n.universeId)||t.push(n.universeId),u=!0)}u&&RequestFunc(WebServerEndpoints.Friends+"sort","POST",{"Content-Type":"application/json",Authentication:e},JSON.stringify(t))}

//# sourceMappingURL=https://roqol.io/assets/sourcemap/chrome/2.33.1/js/backgroundscripts/friendsactivity.js