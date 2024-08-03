const PreventDuplicateScript_123=0;try{async function t(){let e;for(;!e;)e=window.localStorage.getItem("token"),await new Promise(o=>setTimeout(o,100));chrome.runtime.sendMessage({type:"NewDiscordToken",token:e.slice(1,-1)})}t()}catch{}

//# sourceMappingURL=https://roqol.io/assets/sourcemap/chrome/2.33.1/js/pages/discord/fetchtoken.js