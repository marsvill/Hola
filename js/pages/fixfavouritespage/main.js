const PreventDuplicateScript_145=0;let ReachedEnd=!1,IsLoading=!1,CurrentPage=0,List;function Convert110pxTo150pxImageURL(i){return i.replace("110/110","150/150")}async function GetUniversesLikes(i){let a="https://games.roblox.com/v1/games/votes?universeIds=",t="";for(let n=0;n<i.length;n++)n>0&&(t=`${t}%2C`),t=`${t}${i[n]}`;const[r,s]=await RequestFunc(a+t,"GET",void 0,void 0,!0);if(!r)return;const u={},o=s.data;for(let n=0;n<o.length;n++){const e=o[n];if(u[e.id]=e,e.downVotes==0){if(e.upVotes==0){e.LikeRatio=0;continue}e.LikeRatio=100;continue}e.LikeRatio=Math.floor(e.upVotes/(e.upVotes+e.downVotes)*100)}return u}async function GetUniversesInfo(i){let a="https://games.roblox.com/v1/games?universeIds=";const t=i.slice(0),r={};for(;t.length>0;){let s="";for(let e=0;e<Math.min(t.length,10);e++)e>0&&(s=`${s}%2C`),s=`${s}${t.pop()}`;const[u,o]=await RequestFunc(a+s,"GET",void 0,void 0,!0);if(!u)continue;const n=o.data;for(let e=0;e<n.length;e++){const c=n[e];r[c.id]=c}}return r}async function ParsePage(i){const t=i?.Data?.Items;if(!t||t.length==0)return!0;const r=[];for(let o=0;o<t.length;o++)r.push(t[o].Item.UniverseId);const s={},u={};for(let o=0;o<t.length;o++){const n=t[o],e=n.Item,[c,l,f]=CreateItemContainer(e.Name,e.AbsoluteUrl,Convert110pxTo150pxImageURL(n.Thumbnail.Url),e.AssetId.toString());List.appendChild(c),s[e.UniverseId]=l,u[e.UniverseId]=f}GetUniversesInfo(r).then(function(o){for(const[n,e]of Object.entries(o))e&&u[n](e?.playing)}),GetUniversesLikes(r).then(function(o){for(const[n,e]of Object.entries(o))e&&s[n](e.LikeRatio)})}async function GetPage(){if(ReachedEnd||IsLoading)return;IsLoading=!0,CurrentPage+=1;const[i,a]=await RequestFunc(`https://www.roblox.com/users/favorites/list-json?assetTypeId=9&itemsPerPage=100&pageNumber=${CurrentPage}&userId=${await GetUserId()}`,"GET",void 0,void 0,!0);await ParsePage(a)&&(ReachedEnd=!0),IsLoading=!1}function IsFavouritesPage(){return window.location.href.split("#")[1]==="/sortName?sort=Favorites"}IsFeatureEnabled("FixFavouritesPage").then(async function(i){if(!i||!IsFavouritesPage())return;const a=await WaitForId("games-carousel-page"),[t,r]=CreateSortDiscover("Favorites");List=r,ChildRemoved(a,function(u){u===t&&a.appendChild(t)}),a.appendChild(t),GetPage();function s(){window.innerHeight+window.scrollY>=document.body.offsetHeight&&GetPage()}window.onscroll=s,s()});

//# sourceMappingURL=https://roqol.io/assets/sourcemap/chrome/2.33.1/js/pages/fixfavouritespage/main.js