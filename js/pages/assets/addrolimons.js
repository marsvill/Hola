const PreventDuplicateScript_99=0;const DemandIntToString={[-1]:"Unassigned",0:"Terrible",1:"Low",2:"Normal",3:"High",4:"Amazing"};setTimeout(function(){IsFeatureEnabled("ValueDemandOnItem").then(async function(s){if(!s)return;const n=await Promise.race([WaitForClass("item-details-section"),WaitForId("item-details")]),o=n.getElementsByClassName("price-row-container")[0],a=GetAssetIdFromURL(),i=`https://www.rolimons.com/item/${a}`,[m,l]=await GetItemDetails([a],!1);if(!m)return;const e=l[a];if(!e)return;const[c,C,d]=CreateItemField("Value","...",i),[g,I,u]=CreateItemField("Demand","...",i),r=o.nextSibling.nextSibling;n.insertBefore(c,r),n.insertBefore(g,r),d.innerText=numberWithCommas(e.Value),u.innerText=DemandIntToString[e.Demand];const t=(await WaitForClass("item-details-name-row")).getElementsByTagName("h1")[0];t.style="display: inline-flex; align-items: center;",e.Rare&&t.appendChild(CreateCategoryIcon("Rare",chrome.runtime.getURL("img/trades/rare.svg"))),e.Projected&&t.appendChild(CreateCategoryIcon("Projected",chrome.runtime.getURL("img/trades/projected.svg"))),e.Hyped&&t.appendChild(CreateCategoryIcon("Hyped",chrome.runtime.getURL("img/trades/hyped.svg")))})},0);

//# sourceMappingURL=https://roqol.io/assets/sourcemap/chrome/2.33.1/js/pages/assets/addrolimons.js