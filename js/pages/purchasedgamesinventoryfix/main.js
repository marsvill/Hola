const PreventDuplicateScript_222=0;let IsPurchasedGamesOpened=!1,CurrentPurchasedGamesPage=1,OpenPurchasedGamesConnections=[],PurchasedGamesCards=[];function HideDefaultCard2(t,n){!t.getAttribute("custom")&&t.className=="list-item item-card ng-scope place-item"&&(t.style=n&&"display:none;"||"")}function HideRobloxDefaultCards2(t,n){const a=t.children;for(let e=0;e<a.length;e++)HideDefaultCard(a[e],n)}function ClearPurchasedGamesCards(){for(let t=0;t<PurchasedGamesCards.length;t++)PurchasedGamesCards[t].remove();PurchasedGamesCards=[]}async function CreateCardsFromPurchasedGames(t,n){HideRobloxDefaultCards2(n,!0),ClearPurchasedGamesCards();for(let a=0;a<t.length;a++){const e=t[a],s=CreatePrivateServerCard(e.Image,e.Name,e.OwnerName,e.OwnerId,e.OwnerType,e.Price,e.PlaceId);n.appendChild(s),PurchasedGamesCards.push(s)}n.parentElement.className="current-items"}function AddConnection(t,n,a){return OpenPurchasedGamesConnections.push({Callback:t,Type:n,Element:a}),t}async function PurchasedGamesOpened(){CurrentPurchasedGamesPage=1,WaitForClass("breadcrumb-container").then(r=>{const i=r.getElementsByTagName("li")[2];i.getElementsByTagName("span")[0].innerText="Purchased"});const t=await WaitForClass("hlist item-cards item-cards-embed ng-scope");ClearPurchasedGamesCards(),HideRobloxDefaultCards2(t,!0);function n(r,i){const o=i&&"enabled"||"disabled",l=!i&&"enabled"||"disabled";r.removeAttribute(l),r.setAttribute(o,o)}const a=await WaitForClass("btn-generic-right-sm"),e=await WaitForClass("btn-generic-left-sm"),s=(await WaitForClass("pager")).getElementsByTagName("li")[1].getElementsByTagName("span")[0];async function c(){if(!IsPurchasedGamesOpened)return;n(a,!1),n(e,!1),s.innerText=`Page ${CurrentPurchasedGamesPage}`;const r=await GetPurchasedGames(CurrentPurchasedGamesPage);IsPurchasedGamesOpened&&(CreateCardsFromPurchasedGames(r,t),n(a,r.length>=30),n(e,CurrentPurchasedGamesPage>1))}e.addEventListener("click",AddConnection(function(){CurrentPurchasedGamesPage--,c()},"click",e)),a.addEventListener("click",AddConnection(function(){CurrentPurchasedGamesPage++,c()},"click",a)),DefaultPurchasedGamesCardElementObserver.observe(t,{childList:!0}),c()}function CheckPurchasedGamesOpened(){const t=window.location.href.search("tab=purchased-games")>-1;if(t&&!IsPurchasedGamesOpened)IsPurchasedGamesOpened=!0,PurchasedGamesOpened();else if(!t&&IsPurchasedGamesOpened){DefaultPurchasedGamesCardElementObserver.disconnect();for(let a=0;a<OpenPurchasedGamesConnections.length;a++){const e=OpenPurchasedGamesConnections[a];e.Element.removeEventListener(e.Type,e.Callback)}ClearPurchasedGamesCards(),OpenPurchasedGamesConnections=[],LoadingParagraph.style="display:none;";const n=FindFirstClass("hlist item-cards item-cards-embed ng-scope");n&&HideRobloxDefaultCards2(n,!1),IsPurchasedGamesOpened=!1}}window.addEventListener("popstate",CheckPurchasedGamesOpened);const DefaultPurchasedGamesCardElementObserver=new MutationObserver(function(t,n){t.forEach(function(a){if(a.type==="childList"){const e=a.addedNodes;for(let s=0;s<e.length;s++)e[s].nodeType==Node.ELEMENT_NODE&&HideDefaultCard2(e[s],!0)}})});setTimeout(function(){IsFeatureEnabled("PurchasedGamesFix").then(async function(t){if(!t)return;let n=await WaitForClass("menu-vertical submenus"),a;for(;!a;)await sleep(100),a=await GetButtonCategoryFromHref(n,"places");const e=a.getElementsByTagName("div")[0].getElementsByTagName("ul")[0],s=e.children;let c;for(let i=0;i<s.length;i++)if(s[i].getAttribute("href")==="#!/places/purchased"){c=s[i];break}if(!c)return;c.remove();const[r]=CreateActivePrivateServersButton("Purchased","#!/places?tab=purchased-games");e.insertBefore(r,e.nextSibiling),CheckPurchasedGamesOpened()})},0);

//# sourceMappingURL=https://roqol.io/assets/sourcemap/chrome/2.33.1/js/pages/purchasedgamesinventoryfix/main.js