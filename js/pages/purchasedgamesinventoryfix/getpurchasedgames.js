const PreventDuplicateScript_221=0;let FullPurchasedCache={};const PurchasedGames=[],PurchasedGameIds=[],CachedGamesIds=[],CachedGamesId={};let FirstTranscationId,LastCachedTranscation,NextCursor="",FetchedFromCache=!1,ReachedPurchasedGamesEnd=!1,IsFetchingPurchasedGames=!1,TotalTranscationsLoaded=0,PurchasedGamesLoaded=0;async function FetchFromCache(){if(FetchedFromCache)return;FetchedFromCache=!0;const o=window.localStorage.getItem("robloxqol-purchasedgames");if(!o)return;const a=JSON.parse(o);if(a.Games){window.localStorage.removeItem("robloxqol-purchasedgames");return}const i=a[await GetUserId()],r=i.Games;LastCachedTranscation=i.LastTranscation;for(let n=0;n<r.length;n++)CachedGamesIds.push(r[n]),CachedGamesId[r[n]]=!0;FullPurchasedCache=a}async function SaveCache(){FetchedFromCache&&(FullPurchasedCache[await GetUserId()]={Games:PurchasedGameIds,LastTranscation:LastCachedTranscation},window.localStorage.setItem("robloxqol-purchasedgames",JSON.stringify(FullPurchasedCache)))}function UpdatePurchasedGamesParagraph(){LoadingParagraph.innerText=`Found ${PurchasedGamesLoaded} purchased games out of ${TotalTranscationsLoaded} transcations!${!LastCachedTranscation&&`
(The first time loading will take a bit)`||""}`}async function GetBuilderTypeFromAssetIds(o){const a=[],i={};for(let n=0;n<o.length;n++){const s=o[n];i[s.UniverseId]=s,a.push(s.UniverseId)}const r=SplitArrayIntoChunks(a,10);for(let n=0;n<r.length;n++){const s=r[n];let e="";for(let t=0;t<s.length;t++)e!=""&&(e=e+"&"),e=e+"universeIds="+s[t];for(;;){const[t,u]=await RequestFunc("https://games.roblox.com/v1/games?"+e,"GET",void 0,void 0,!0);if(!t){await sleep(1e3);continue}const c=u.data;for(let l=0;l<c.length;l++){const d=c[l];i[d.id].OwnerType=d.creator.type}break}UpdatePurchasedGamesParagraph()}}async function GetGameInfosFromAssetIds(o){const a=[],i=SplitArrayIntoChunks(o,35);for(let r=0;r<i.length;r++){const n=i[r];let s="";for(let e=0;e<n.length;e++)s!=""&&(s=s+"&"),s=s+"placeIds="+n[e];for(;;){const[e,t]=await RequestFunc("https://games.roblox.com/v1/games/multiget-place-details?"+s,"GET",void 0,void 0,!0);if(!e){await sleep(1e3);continue}for(let u=0;u<t.length;u++){const c=t[u],l={PlaceId:c.placeId,UniverseId:c.universeId,Name:c.name,OwnerName:c.builder,OwnerId:c.builderId,Price:c.price};PurchasedGames.push(l),a.push(l),PurchasedGameIds.push(c.placeId),PurchasedGamesLoaded++}break}UpdatePurchasedGamesParagraph()}return await GetBuilderTypeFromAssetIds(a),a}async function RequestPurchasedGames(){await FetchFromCache();const[o,a]=await RequestFunc(`https://economy.roblox.com/v2/users/${await GetUserId()}/transactions?cursor=${NextCursor}&limit=100&transactionType=Purchase`,"GET",void 0,void 0,!0);if(!o)return;NextCursor===""&&(FirstTranscationId=a.data[0]?.id||LastCachedTranscation),NextCursor=a.nextPageCursor,NextCursor||(ReachedPurchasedGamesEnd=!0);const i=a.data,r=[];let n=!1;for(let e=0;e<i.length;e++){const t=i[e];if(t.id===LastCachedTranscation){n=!0;break}t.transactionType==="Purchase"&&t.details.type==="Asset"&&r.push(t.details.id),TotalTranscationsLoaded++}if(UpdatePurchasedGamesParagraph(),r.length===0&&!n)return;let s=[];if(r.length>0&&(s=await GetGameInfosFromAssetIds(r)),n){ReachedPurchasedGamesEnd=!0;const e=await GetGameInfosFromAssetIds(CachedGamesIds);for(let t=0;t<e.length;t++)s.push(e[t])}ReachedPurchasedGamesEnd&&(LastCachedTranscation=FirstTranscationId,SaveCache()),await GetImagesForGames(s)}async function GetImagesForGames(o){let a="";const i={};for(let e=0;e<o.length;e++){const t=o[e];t.Image||(a!=""&&(a=a+","),a=a+t.PlaceId,i[t.PlaceId]=t)}if(a.length==0)return;const[r,n]=await RequestFunc(`https://thumbnails.roblox.com/v1/places/gameicons?placeIds=${a}&returnPolicy=0&size=150x150&format=Png&isCircular=false`,"GET",void 0,void 0,!0);if(!r){for(let e=0;e<o.length;e++)o[e].Image="https://tr.rbxcdn.com/53eb9b17fe1432a809c73a13889b5006/420/420/Image/Png";return}const s=n.data;for(let e=0;e<s.length;e++){const t=s[e];t.state==="Completed"?i[t.targetId].Image=t.imageUrl:i[t.targetId].Image="https://tr.rbxcdn.com/53eb9b17fe1432a809c73a13889b5006/420/420/Image/Png"}}async function GetPurchasedGames(o){if(!IsPurchasedGamesOpened)return;const a=await WaitForClass("tab-content rbx-tab-content");for(a.insertBefore(LoadingParagraph,a.firstChild),LoadingParagraph.style="",LoadingParagraph.innerText="Loading";IsFetchingPurchasedGames;)await sleep(100);for(IsFetchingPurchasedGames=!0;!ReachedPurchasedGamesEnd&&IsPurchasedGamesOpened;)await RequestPurchasedGames(),await sleep(100);if(IsFetchingPurchasedGames=!1,!IsPurchasedGamesOpened)return[];LoadingParagraph.style="display:none;";const i=[],r=o*30-30,n=Math.min(o*30,PurchasedGames.length);for(let s=r;s<n;s++)i.push(PurchasedGames[s]);return i}

//# sourceMappingURL=https://roqol.io/assets/sourcemap/chrome/2.33.1/js/pages/purchasedgamesinventoryfix/getpurchasedgames.js