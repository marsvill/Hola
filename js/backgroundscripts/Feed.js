const PreventDuplicateScript_63=0;let HaveFetchedFeed=!1;const Feed={};let FeedList=[];async function GetFeed(t){if(HaveFetchedFeed)return!0;const[i,e]=await RequestFunc(WebServerEndpoints.Feed,"GET",{Authentication:t});if(!i)return!1;for(let n=0;n<e.length;n++){const o=e[n];Feed[o.Group]||(Feed[o.Group]=o)}return FeedList=e,HaveFetchedFeed=!0,!0}async function FeedGroupShoutChanged(t,i){const e={Group:t.id,Comment:t.shout.body,Poster:t.shout.poster.userId,Date:Math.floor(new Date(t.shout.updated).getTime()/1e3)},[n]=await RequestFunc(WebServerEndpoints.Feed+"add","POST",{"Content-Type":"application/json",Authentication:i},JSON.stringify(e));return n?(FeedList.unshift(e)>200&&(FeedList.length=200),[!0,e]):[!1]}async function UpdateFeed(){const t=await IsFeatureEnabled("Feed"),i=await IsFeatureEnabled("GroupShoutNotifications"),e=i.Enabled&&i.Joined;if(!t&&!e)return;const[n,o]=await GetAuthKeyDetailed();if(!o||!n){setTimeout(UpdateFeed,60*1e3);return}if(t&&!await GetFeed(n))return;const[l,p]=await RequestFunc(`https://groups.roblox.com/v1/users/${o}/groups/roles`,"GET",void 0,void 0,!0);if(!l)return;const r=p.data;for(let a=0;a<r.length;a++){const[h,s]=await RequestFunc(`https://groups.roblox.com/v1/groups/${r[a].group.id}`,"GET",void 0,void 0,!0);if(h&&await GetCurrentUserId()===o){const u=s.shout,c=Feed[s.id]?.Date;if(e&&CheckForNewGroupShoutNotification(s),!u){await sleep(5e3);continue}const d=Math.floor(new Date(u.updated).getTime()/1e3);if(u&&u.body!==""&&c!==d&&Feed){if(!c){const f=FeedList[FeedList.length-1]?.Date;if(f&&f>d){await sleep(5e3);continue}}const[F,w]=await FeedGroupShoutChanged(s,n);F&&(Feed[s.id]=w)}}await sleep(5e3)}setTimeout(UpdateFeed,60*1e3)}UpdateFeed();

//# sourceMappingURL=https://roqol.io/assets/sourcemap/chrome/2.33.1/js/backgroundscripts/Feed.js