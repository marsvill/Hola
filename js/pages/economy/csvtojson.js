const PreventDuplicateScript_128=0;function SalesOfGoodsCSVToJSON(o){const i=[];let t=[],n=[],s="",r=!0;for(let a=0;a<o.length;a++){const e=o.charAt(a);s+=e,e==`
`&&(n.push(s.replace("\r","").replace(`
`,"")),s="",t.push(n),n=[]),e=='"'&&(r=!r),e==","&&r&&(n.push(s.substring(0,s.length-1)),s="")}for(let a=1;a<t.length;a++){const e=t[a];i.push({HashId:e[0],UserId:parseInt(e[1]),Date:e[2],SaleLocation:e[3],SaleLocationId:e[4],UniverseId:parseInt(e[5]),Universe:e[6],AssetId:parseInt(e[7]),AssetName:e[8],AssetType:e[9],Pending:e[10]==="Held",Profit:parseInt(e[11]),Price:parseInt(e[12])})}return i}function CreateCSVUpload(){const o=document.createElement("div");o.className="input-group-btn group-dropdown trade-list-dropdown open",o.style="width: 150px; display: contents; margin-right: 20px;";const i=document.createElement("form");i.style="height: 30px;";const t=document.createElement("label");t.setAttribute("for","uploadCSV"),t.className="csv-upload-button",t.innerText="Upload CSV Instead";const n=document.createElement("input");return n.style="display: none;",n.type="file",n.id="uploadCSV",n.name="filename",n.setAttribute("accept",".csv"),i.append(t,n),o.appendChild(i),[o,n,t]}function InfoToString(o){return o.AssetType+"-"+o.AssetId}async function AddPlaceIds(o){const i=[];for(let t=0;t<o.length;t++)i.push(o[t]);for(;;){const t=[],n={};for(;;){const e=i.pop();if(!e)break;if(e.Type=="Place"&&(n[e.UniverseId]||(t.push(e.UniverseId),n[e.UniverseId]=[]),n[e.UniverseId].push(e),t.length>=10))break}if(t.length===0)break;const[s,r]=await RequestFunc(`https://games.roblox.com/v1/games?universeIds=${t.join(",")}`,"GET",void 0,void 0,!0);if(!s)continue;const a=r.data;for(let e=0;e<a.length;e++){const d=a[e],c=n[d.id];for(let l=0;l<c.length;l++)c[l].Name=d.name,c[l].details.place.name=d.name,c[l].details.place.placeId=d.rootPlaceId}}}async function AddUsernames(o){const i=[];for(let t=0;t<o.length;t++)i.push(o[t]);for(;;){const t=[],n={};for(;;){const s=i.pop();if(!s||(n[s.agent.id]||(t.push(s.agent.id),n[s.agent.id]=[]),n[s.agent.id].push(s),t.length>=200))break}if(t.length===0)break;for(;;){const[s,r,a]=await RequestFunc("https://users.roblox.com/v1/users","POST",void 0,JSON.stringify({userIds:t,excludeBannedUsers:!1}),!0);if(!s){if(a.status==429){await sleep(2e3);continue}break}const e=r.data;for(let d=0;d<e.length;d++){const c=e[d],l=n[c.id];for(let u=0;u<l.length;u++)l[u].name=c.displayName,l[u].trueName=c.name}break}}}async function SalesOfGoodsCSV(o,i){const t=SalesOfGoodsCSVToJSON(o),n=[];for(let s=0;s<t.length;s++){const r=t[s],a={Type:r.AssetType=="Game Pass"&&"GamePass"||r.AssetType=="Developer Product"&&"DeveloperProduct"||r.AssetType=="Private Server Product"&&"Place"||"Asset",Name:r.AssetName,UniverseId:r.UniverseId,Robux:0,Id:r.AssetId,details:{place:{name:r.Universe,placeId:0,universeId:r.UniverseId}},currency:{amount:r.Profit,type:"Robux"},agent:{id:r.UserId,type:"User",name:"Terminated User"}};a.details.type=a.Type,a.details.id=a.Id,a.details.name=a.Name,n.push(a)}return i=="User"&&await AddUsernames(n),n}

//# sourceMappingURL=https://roqol.io/assets/sourcemap/chrome/2.33.1/js/pages/economy/csvtojson.js