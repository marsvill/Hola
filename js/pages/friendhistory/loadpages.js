const PreventDuplicateScript_148=0;let AllHistory;async function FetchHistory(){const[t,e]=await RequestFunc(WebServerEndpoints.History,"GET");return[t,t&&e.History||e]}async function LoadPage(t){if(!AllHistory)for(;;){const[n,r]=await FetchHistory();if(!n){await sleep(1e3);continue}AllHistory=r.reverse();break}const e=[],s=t*18-18,i=Math.min(t*18,AllHistory.length);for(let n=s;n<i;n++)e.push(AllHistory[n]);return[e,AllHistory.length>t*18,AllHistory.length]}

//# sourceMappingURL=https://roqol.io/assets/sourcemap/chrome/2.33.1/js/pages/friendhistory/loadpages.js