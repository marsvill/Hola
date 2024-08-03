const PreventDuplicateScript_135=0;function CreateOutfitModalWindow(l,e,n,h,C){let T=document.createElement("div");T.className="modal-dialog";let o=document.createElement("div");o.className="modal-content";let E=document.createElement("div");E.className="modal-content ng-scope";let u=document.createElement("div");u.className="modal-header";let p=document.createElement("button");p.className="close",p.type="button",p.setAttribute("ng-click","close()");let m=document.createElement("span");m.setAttribute("aria-hidden",!0);let f=document.createElement("span");f.className="icon-close",m.appendChild(f),p.appendChild(m);let b=document.createElement("span");b.className="sr-only ng-binding",b.innerText="Close",p.appendChild(b);let c=document.createElement("h5");c.className="ng-binding",c.innerText=l,u.appendChild(p),u.appendChild(c);let g=document.createElement("form");g.setAttribute("name","nameForm"),g.className="ng-pristine ng-invalid ng-invalid-required ng-valid-pattern";let d=document.createElement("button");d.setAttribute("ng-disabled","nameForm.$invalid || nameForm.outfitName.$pristine"),d.setAttribute("disabled","disabled"),d.id="submit",d.type="button",d.className="btn-secondary-md btn-min-width ng-binding",d.innerText=h;let r,t;r=document.createElement("div"),r.className="modal-body";let y=document.createElement("p");y.className="font-caption-header text-description ng-binding",y.innerText=e;let x=document.createElement("div");if(x.setAttribute("ng-class","{'form-has-error': nameForm.outfitName.$invalid && !nameForm.outfitName.$pristine, 'form-has-feedback': nameForm.outfitName.$valid && !nameForm.outfitName.$pristine }"),x.className="form-group",n){t=document.createElement("input"),t.setAttribute("name","outfitName"),t.type="text",t.setAttribute("focus-me",!0),t.setAttribute("ng-model","outfitName"),t.setAttribute("ng-pattern","^[A-Z0-9 ]+$"),t.className="form-control input-field ng-pristine ng-isolate-scope ng-empty ng-invalid ng-invalid-required ng-valid-pattern ng-touched",t.setAttribute("required",""),t.setAttribute("placeholder",n),t.setAttribute("autocomplete","off"),t.addEventListener("keypress",function(I){if(I.code==="Enter"){I.preventDefault(),d.click();return}});let N=document.createElement("p");N.setAttribute("ng-class","{'invisible': !nameForm.outfitName.$invalid || nameForm.outfitName.$pristine }"),N.className="form-control-label ng-binding invisible",N.innerText="Name can contain letters, numbers, and spaces.",x.appendChild(N)}r.appendChild(y),n&&r.appendChild(t);let i=document.createElement("div");i.className="modal-footer";let A=document.createElement("button");A.className="btn-control-md btn-min-width ng-binding",A.type="button",A.innerText=C,i.appendChild(d),i.appendChild(A),r&&g.appendChild(r),g.append(i),E.appendChild(u),E.appendChild(g),o.appendChild(E),T.appendChild(o);let a=document.createElement("div");a.setAttribute("uib-modal-window","modal-window"),a.setAttribute("role","dialog"),a.setAttribute("index","0"),a.setAttribute("tabindex","-1"),a.setAttribute("uib-modal-animation-class","fade"),a.setAttribute("modal-in-class","in"),a.setAttribute("animate","animate"),a.setAttribute("ng-style","{'z-index': 1050 + $$topModalIndex*10, display: 'block'}"),a.className="modal ng-scope ng-isolate-scope in",a.style="z-index: 1050; display: block;";let s=document.createElement("div");return s.setAttribute("uib-modal-backdrop","modal-backdrop"),s.setAttribute("ng-style","{'z-index': 1040 + (index && 1 || 0) + index*10}"),s.setAttribute("uib-modal-animation-class","fade"),s.setAttribute("modal-in-class","in"),s.setAttribute("data-bootstrap-modal-aria-hidden-count","1"),s.setAttribute("aria-hidden","true"),s.className="modal-backdrop ng-scope in",s.style="z-index: 1040;",a.appendChild(T),document.body.appendChild(a),document.body.appendChild(s),[a,s,p,A,d,t]}function CreateButton(l){let e=document.createElement("button");e.setAttribute("ng-type","button"),e.className="btn-secondary-xs",e.innerText=l||"Create Extra Outfit",e.style="float: right; margin-right: 8px;";const n=CostumesList.getElementsByTagName("div")[0];return n.appendChild(e),ChildAdded(n,!0,function(h){h.style.marginTop="0px"}),n.style.marginTop="-28px",n.style.height="28px",e}function CreateItemCardMenuButton(l){let e=document.createElement("button");return e.setAttribute("ng-repeat","option in outfitMenuOptions"),e.setAttribute("ng-click","onItemMenuButtonClicked($event,item,option)"),e.type="button",e.className="btn-secondary-xs ng-binding ng-scope",e.innerText=l,e}function CreateOutfitElement(l,e,n,h,C,T){let o=document.createElement("li");o.setAttribute("ng-repeat","item in items"),o.setAttribute("ng-class","{'five-column' : !avatarLibrary.metaData.isCategoryReorgEnabled, 'six-column' : avatarLibrary.metaData.isCategoryReorgEnabled}"),o.className="list-item item-card ng-scope six-column",C&&o.setAttribute("no-id",!0);let E=document.createElement("div"),u=document.createElement("div");u.className="item-card-container remove-panel outfit-card",u.setAttribute("ng-disabled","avatarCallLimiter.itemCardsDisabled"),u.setAttribute("ng-class","{'outfit-card':item.type === 'Outfit', 'locked-card':avatarCallLimiter.itemCardsDisabled}");let p=document.createElement("div");p.className="item-card-link";let m=document.createElement("a");m.setAttribute("href",""),m.setAttribute("ng-class","{'text-secondary':avatarCallLimiter.itemCardsDisabled}"),m.setAttribute("data-item-name",l),m.className="item-card-thumb-container";let f=document.createElement("thumbnail-2d");f.setAttribute("ng-class","{'shimmer':avatarCallLimiter.itemCardsDisabled}"),f.setAttribute("thumbnail-target-id","item.id"),f.setAttribute("thumbnail-type","item.thumbnailType"),f.className="item-card-thumb ng-isolate-scope";let b=document.createElement("span");b.className="thumbnail-2d-container",b.setAttribute("ng-class","$ctrl.getCssClasses()"),b.setAttribute("thumbnail-type","Outfit"),b.setAttribute("thumbnail-target-id",n);let c=document.createElement("img");c.setAttribute("ng-if","$ctrl.thumbnailUrl && !$ctrl.isLazyLoadingEnabled()"),c.setAttribute("ng-src",e),c.setAttribute("thumbnail-error","$ctrl.setThumbnailLoadFailed"),c.setAttribute("ng-class","{'loading': $ctrl.thumbnailUrl && !isLoaded }"),c.className="ng-scope ng-isolate-scope",c.src=e;let g;h||(g=document.createElement("img"),g.src=chrome.runtime.getURL("img/extraoutfits/cloudicon.png"),g.style="position:absolute;right:4px;bottom:4px; height:20px; width: 20px;");let d=document.createElement("span");d.setAttribute("ng-show","item.itemRestrictionIcon"),d.setAttribute("ng-class","item.itemRestrictionIcon"),d.className="restriction-icon ng-hide",b.appendChild(c),g&&b.appendChild(g),f.appendChild(b),m.appendChild(f),m.appendChild(d);let r=document.createElement("div");r.className="item-card-caption";let t=document.createElement("div");t.setAttribute("ng-show","item.selected && isAssetTypeSelectionEnabled(item.assetType.name)"),t.setAttribute("data-item-status","equipped"),t.className="item-card-equipped ng-hide";let y=document.createElement("div");y.className="item-card-equipped-label";let x=document.createElement("div");x.className="icon-check-selection",t.appendChild(y),t.appendChild(x);let i=document.createElement("div");i.setAttribute("ng-if","item.type === 'Outfit'"),i.setAttribute("ng-class","{active:item.active}"),i.setAttribute("blur-target","blur-target"),i.className="item-card-menu ng-scope ng-isolate-scope";let A=CreateItemCardMenuButton("Update"),a=CreateItemCardMenuButton("Rename"),s=CreateItemCardMenuButton("Delete"),N=CreateItemCardMenuButton("Cancel");i.appendChild(A),i.appendChild(a),i.appendChild(s),i.appendChild(N);let I=document.createElement("a");I.className="item-card-name-link";let k=document.createElement("div");k.title=l,k.className="text-overflow item-card-name ng-binding",k.innerText=l,I.appendChild(k);let v=document.createElement("span");return v.setAttribute("ng-if","item.type === 'Outfit' && item.isEditable === true"),v.setAttribute("ng-click","openOutfitMenu(item)"),v.className="icon-settings-16x16 edit-outfit ng-scope",v.setAttribute("data-item-name",l),r.appendChild(t),r.appendChild(i),r.appendChild(I),r.appendChild(v),p.appendChild(m),u.appendChild(p),u.appendChild(r),E.appendChild(u),o.appendChild(E),T||o.setAttribute("outfit-type","Extra"),ExtraOutfitsElements.push(o),[o,A,a,s,N,m,v,i,c,k,v]}function GetOutfitTypeFromElement(l){return l.getAttribute("outfit-type")!="Extra"&&"Roblox"||"Extra"}async function CreateAlert(l,e){let n=document.createElement("div");n.className="alert-system-feedback";let h=document.createElement("div");h.className=`alert alert-${e&&"success"||"warning"} ng-binding on`,h.innerText=l,n.appendChild(h);try{const C=(await WaitForClass("alert-context")).parentNode.parentNode;C.children[0]?C.insertBefore(n,C.children[0]):C.appendChild(n)}catch(C){console.log(C)}await sleep(3e3),n.remove()}

//# sourceMappingURL=https://roqol.io/assets/sourcemap/chrome/2.33.1/js/pages/extraoutfits/createelements.js