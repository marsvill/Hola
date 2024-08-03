const PreventDuplicateScript_238=0;setTimeout(function(){IsFeatureEnabled("PreferredServerRegion").then(async function(s){if(s==="None"||!s)return;const c=await WaitForId("game-details-play-button-container");await WaitForClassPath(c,"btn-common-play-game-lg");const n=document.createElement("button");n.className="btn-common-play-game-lg btn-primary-md btn-full-width preferred-region-join-button",n.style="margin-left: 5px; width: 33%;",n.setAttribute("data-toggle","tooltip"),n.setAttribute("data-placement","top"),n.setAttribute("data-original-title","Join "+s);const h=document.createElement("span");h.style=`height: 36px; width: 36px; display: inline-block; vertical-align: middle; background-image: url(${chrome.runtime.getURL("img/filters/region-icon.png")}); background-size: contain;`,n.appendChild(h),ChildRemoved(c,function(o){o===n&&c.appendChild(n)}),c.appendChild(n),InjectScript("TooltipPreferredRegion");function P(){const o=document.createElement("div");o.id="simplemodal-overlay",o.className="simplemodal-overlay",o.style="background-color: rgb(0, 0, 0); opacity: 0.8; height: 100%; width: 100%; position: fixed; left: 0px; top: 0px; z-index: 1041;";const t=document.createElement("div");return t.id="modal-dialog",t.className="modal-dialog",t.innerHTML=`<div id="simplemodal-container" class="simplemodal-container" style="position: fixed; z-index: 1042; height: 272px; width: 400px; left: 50%; top: 50%; transform: translate(-50%, -50%);"><a class="modalCloseImg simplemodal-close" title="Close"></a><div tabindex="-1" class="simplemodal-wrap" style="height: 100%; outline: 0px; width: 100%; overflow: visible;"><div id="modal-confirmation" class="modal-confirmation noImage protocolhandler-starting-modal simplemodal-data" data-modal-type="confirmation" style="display: block;">
            <div id="modal-dialog" class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close top-right-close-button" data-dismiss="modal" style="">
                        <span aria-hidden="true"><span class="icon-close"></span></span><span class="sr-only">Close</span>
                    </button>
                    <h5 class="modal-title"></h5>
                </div>

                <div class="modal-body">
                    <div class="modal-top-body">
                        <div class="modal-message"><span class="icon-logo-r-95"></span><p class="modal-message-label">Looking for a ${SanitizeString(s)} server</p><span class="spinner spinner-default"></span></div>
                        <div class="modal-image-container roblox-item-image" data-image-size="medium" data-no-overlays="" data-no-click="">
                            <img class="modal-thumb" alt="generic image">
                        </div>
                        <div class="modal-checkbox checkbox" style="display: none;">
                            <input id="modal-checkbox-input" type="checkbox">
                            <label for="modal-checkbox-input"></label>
                        </div>
                    </div>
                    <div class="modal-btns">
                        <a id="decline-btn" class="btn-control-md" style="display: none;">No</a>
                        <a id="confirm-btn" class="btn-primary-md" style="display: none;">Yes</a>
                    </div>
                    <div class="loading modal-processing">
                        <img class="loading-default" src="https://images.rbxcdn.com/4bed93c91f909002b1f17f05c0ce13d1.gif" alt="Processing...">
                    </div>
                </div>
                <div class="modal-footer text-footer" style="display: none;"></div>
            </div>
            </div>
            </div></div></div>`,document.body.append(o,t),[t,o]}n.addEventListener("click",async function(){const o=await GetPlaceIdFromGamePage(),[t,T]=P(),g=t.getElementsByClassName("modal-message-label")[0],f=t.getElementsByClassName("btn-primary-md")[0],d=t.getElementsByClassName("btn-control-md")[0],B=t.getElementsByClassName("spinner")[0],x=n.getAttribute("aria-describedby");x&&document.getElementById(x)?.remove();let m=!1;function C(){B.remove()}function u(){t.remove(),T.remove(),m=!0}t.getElementsByClassName("top-right-close-button")[0].addEventListener("click",u),d.addEventListener("click",u);function k(e){document.dispatchEvent(new CustomEvent("joinGameInstance",{detail:JSON.stringify({PlaceId:o,JobId:e})}))}function b(e){g.innerText=e,C(),d.style="",d.innerText="Close"}function w(e,a){if(d.style="",C(),!e){g.innerText="We could not find a server!",d.innerText="Close";return}d.innerText="Cancel",g.innerText=`Would you like to join ${a} instead?`,f.style="",f.innerText="Join",f.addEventListener("click",function(){u(),k(e)})}function N(e){u(),k(e)}let v="";const r=[],p={},[J,E]=await RequestFunc("https://roqol.io/api/servers/regions","GET");if(J)for(let e=0;e<E.length;e++){const a=E[e];p[a.Region]=a}let S=p[s].Lat,I=p[s].Lng;for(;;){if(m)return;const[e,a]=await GetRobloxServers(v,null,!0);if(!e){b("An error occurred while looking for servers!");return}if(m)return;v=a.nextPageCursor;const R=[];for(let i=0;i<a.data.length;i++)R.push(a.data[i].id);const[F,L,M]=await RequestFunc(WebServerEndpoints.Servers,"POST",void 0,JSON.stringify({PlaceId:o,JobIds:R}));if(!F){if(M.status===402)return b("This feature is for subscribers only!"),CreatePaymentPrompt();b("An error occurred while looking for servers!");return}if(m)return;for(let i=0;i<L.length;i++){const l=L[i],y=p[l.Region];if(l.Distance=y?DistanceBetweenCoordinates(y.Lat,y.Lng,S,I):99999999,r.push(l),l.Region===s){N(l.JobId);return}}if(!v||r.length>=1e3){if(!S||!I)return w();r.sort(function(i,l){return i.Distance-l.Distance}),w(r[0]?.JobId,r[0]?.Region);return}}})})},0);

//# sourceMappingURL=https://roqol.io/assets/sourcemap/chrome/2.33.1/js/pages/serverfilters/preferredregion.js