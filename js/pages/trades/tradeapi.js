const PreventDuplicateScript_263=0;async function DeclineTrade(n){for(;;){const[s,t,e]=await RequestFunc(`https://trades.roblox.com/v1/trades/${n}/decline`,"POST",void 0,void 0,!0);if(!s){if(e.status===429){await sleep(5*1e3);continue}return[!1,t,e]}return[!0,t,e]}}async function GetTradeInfo(n,s){for(;;){const[t,e,u]=await RequestFunc(`https://trades.roblox.com/v1/trades/${n}`,"GET",void 0,void 0,!0);if(!t){if(!s)return[!1,e];if(u.status===429){await sleep(5*1e3);continue}return[!1]}return[!0,e]}}async function GetTrades(n,s,t,e){for(;;){const[u,i,r]=await RequestFunc(`https://trades.roblox.com/v1/trades/${n}?cursor=${t||""}&limit=${s}`,"GET",void 0,void 0,!0);if(!u){if(!e)return[!1,i];if(r.status===429){await sleep(5*1e3);continue}return[!1,i]}return[!0,i]}}function GetAllTrades(n,s,t,e){return new Promise((u,i)=>{let r,f=!1;async function a(){if(f){u();return}const[o,c]=await GetTrades(n,s,r,t);if(!o){e(!1,c,a,u);return}r=c.nextPageCursor,r||(f=!0),e(!0,c,a,u)}a()})}

//# sourceMappingURL=https://roqol.io/assets/sourcemap/chrome/2.33.1/js/pages/trades/tradeapi.js