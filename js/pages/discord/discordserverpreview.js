const PreventDuplicateScript_122=0;try{async function n(){const o=new URLSearchParams(window.location.hash.substring(2)).get("previewServerId");if(!o||!window.location.href.includes("discord.com/guild-discovery"))return;for(window.location.hash="";document.querySelector("[data-testid=app-spinner]");)await new Promise(e=>setTimeout(e,0));let r;for(;!r;)r=document.querySelector("[class^=guildList__]"),await new Promise(e=>setTimeout(e,0));let i;for(;!i;)i=r.querySelector("[class^=loaded__]"),await new Promise(e=>setTimeout(e,0));i=i.children[0];for([k,v]of Object.entries(i)){if(!k.startsWith("__reactFiber$"))continue;const e=v.memoizedProps?.children;if(e)for(let t=0;t<e.length;t++){const s=e[t];if(s?._owner?.memoizedProps?.guild?.id){s._owner.memoizedProps.guild.id=o,s._owner.memoizedProps.onView(o);break}}}}setTimeout(n,0)}catch{}

//# sourceMappingURL=https://roqol.io/assets/sourcemap/chrome/2.33.1/js/pages/discord/discordserverpreview.js