const PreventDuplicateScript_131=0;IsFeatureEnabled("ActivePrivateServers").then(async function(d){if(!d)return;const t=document.createElement("tr");t.innerHTML='<td class="summary-transaction-label"><a>Private Servers<span class="icon-right-16x16" style="margin-left: 10px;"></span></a><div class="box" style="display: none;"></div></td><td class="amount icon-robux-container" style=""><span></span><span class="icon-robux-16x16"></span><span style="display: none;"></span><span class="price">Open</span></td>';let l=!1,i=!1;const r=t.getElementsByClassName("box")[0],g=t.getElementsByTagName("a")[0],p=t.getElementsByClassName("icon-right-16x16")[0],c=t.getElementsByClassName("price")[0];g.addEventListener("click",async function(){if(i=!i,r.style.display=i?"":"none",p.className=`icon-${i?"down":"right"}-16x16`,l)return;l=!0;const a=document.createElement("div");a.className="spinner spinner-default",r.appendChild(a),c.innerText="...";let n=0;function o(){c.innerText=`${numberWithCommas(n)}/month`}await GetActivePrivateServersV2(function(s){const e=document.createElement("li");e.innerHTML=`<div class="item-card-container"> <a class="item-card-link"> <div class="item-card-thumb-container"> <thumbnail-2d class="item-card-thumb"><span class="thumbnail-2d-container"> <img image-load="" alt="" title="" class="game-icon" src> </span> </thumbnail-2d> <span class="restriction-icon ng-hide"></span> <span ng-show="item.AssetRestrictionIcon" ng-class="'icon-' + item.AssetRestrictionIcon.CssTag + '-label'" class="ng-hide icon--label"> </span> </div> <div class="item-card-name" title="harry"> <!-- ngIf: $ctrl.shouldShowPremiumIcon(item) --> <span ng-bind="item.Item.Name" class="ng-binding">harry</span> </div> </a> <!-- ngIf: item.Item.AudioUrl --> <!-- ngIf: $ctrl.showCreatorName && !item.itemDetailsLoading --><div ng-if="$ctrl.showCreatorName &amp;&amp; !item.itemDetailsLoading" class="text-overflow item-card-label ng-scope"> <span ng-bind="'Label.OwnershipPreposition' | translate" class="ng-binding">By</span> <a class="creator-name text-overflow text-link ng-binding ng-hide" ng-href="" ng-hide="$ctrl.currentData.isPrivateServerCategoryType" ng-bind="item.Creator.nameForDisplay"></a> <a class="creator-name text-overflow text-link ng-binding" ng-href="https://www.roblox.com/users/51787703/profile/" ng-show="$ctrl.currentData.isPrivateServerCategoryType" ng-bind="item.PrivateServer.nameForDisplay" href="https://www.roblox.com/users/51787703/profile/">@Haydz6</a> </div><!-- end ngIf: $ctrl.showCreatorName && !item.itemDetailsLoading --> <!-- ngIf: !item.itemDetailsLoading --><div class="text-overflow item-card-price ng-scope" style="height: 100%;" ng-if="!item.itemDetailsLoading"> <!-- ngIf: $ctrl.doesItemHavePrice(item) --><span class="icon-robux-16x16 ng-scope" ng-if="$ctrl.doesItemHavePrice(item)"></span><!-- end ngIf: $ctrl.doesItemHavePrice(item) --> <span class="text-robux-tile">500</span>  </div></div>`,e.getElementsByClassName("game-icon")[0].src=s.Thumbnail.replaceAll("110","150"),e.getElementsByClassName("item-card-link")[0].href=`https://www.roblox.com/private-server/configure/${s.Id}`;const m=e.getElementsByClassName("item-card-name")[0];m.title=s.ServerName,m.innerText=s.ServerName,e.getElementsByClassName("text-robux-tile")[0].innerText=s.Price,e.getElementsByClassName("text-overflow item-card-label")[0].remove(),r.appendChild(e),n=s.Price,o()}),o(),a.remove()});const h=await WaitForClass("user-transactions-container");ChildAdded(h,!0,async function(a){if(a.className!=="summary")return;const n=await WaitForTagPath(await WaitForClassPath(a,"table summary"),"tbody");n.insertBefore(t,n.children[n.children.length-1])})});

//# sourceMappingURL=https://roqol.io/assets/sourcemap/chrome/2.33.1/js/pages/economy/privateservers.js