const PreventDuplicateScript_121=0;async function FilterTeamCreateUniverses(r){const n=SplitArrayIntoChunks(r,100),i=[];for(;n.length>0;)for(;;){const[t,s]=await RequestFunc("https://develop.roblox.com/v1/universes/multiget/teamcreate?ids=1259281718&ids=4460388970&ids=4202076347");if(!t){if(s.StatusCode==429){await sleep(5*1e3);continue}return[!1]}const e=s.data;for(let a=0;a<e.length;a++){const u=e[a];u.isEnabled&&i.push(u.id)}break}return[!0,i]}async function GetPlayerOwnedUniverses(){let r="";const n=[];for(;;){const[i,t]=await RequestFunc("https://develop.roblox.com/v1/user/universes?isArchived=true&limit=100&sortOrder=Asc");if(!i){if(t.StatusCode==429){await sleep(5*1e3);continue}return[!1]}const s=t.data;for(let e=0;e<s.length;e++)n.push(s[e].id);if(r=t.nextPageCursor,!r)break}return[!0,n]}

//# sourceMappingURL=https://roqol.io/assets/sourcemap/chrome/2.33.1/js/pages/create/getteamcreateuniverses.js