const PreventDuplicateScript_138=0;function UpdateOutfitSearchCard(e,n){if(e.nodeType!==Node.ELEMENT_NODE)return;const t=e.getElementsByClassName("item-card-thumb-container")[0]?.getAttribute("data-item-name")?.toLowerCase();t&&(e.style.display=t.includes(n)?"":"none")}function OutfitSearch(e,n){for(const t of e.children)UpdateOutfitSearchCard(t,n)}function AddOutfitSearchBar(){const e=document.createElement("input");return e.className="form-control input-field",e.type="text",e.placeholder="Search",e}IsFeatureEnabled("AvatarSearchbar").then(async function(e){if(!e)return;const n=await WaitForQuerySelector('[avatar-tab-content=""]');ChildAdded(n,!0,async function(t){if(!t.className)return;const r=await WaitForClassPath(t,"hlist"),a=AddOutfitSearchBar();t.insertBefore(a,t.querySelector('[avatar-items=""]')),a.addEventListener("input",function(){OutfitSearch(r,a.value.toLowerCase())}),ChildAdded(r,!0,function(i){UpdateOutfitSearchCard(i,a.value.toLowerCase())}),new MutationObserver(function(){t.className.includes("active")||a.value!=""&&(a.value="")}).observe(t,{attributeFilter:["class"]})})});

//# sourceMappingURL=https://roqol.io/assets/sourcemap/chrome/2.33.1/js/pages/extraoutfits/outfitsearch.js