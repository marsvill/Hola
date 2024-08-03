const PreventDuplicateScript_239=0;setTimeout(function(){IsFeatureEnabled("RandomServersButton").then(async function(p){if(p==="None"||!p)return;const n=await WaitForId("game-details-play-button-container");await WaitForClassPath(n,"btn-common-play-game-lg");const t=document.createElement("button");t.className="btn-common-play-game-lg btn-primary-md btn-full-width random-server-join-button",t.style="margin-left: 5px; width: 33%;",t.setAttribute("data-toggle","tooltip"),t.setAttribute("data-placement","top"),t.setAttribute("data-original-title","Join Random Server");const u=document.createElement("span");u.style=`height: 36px; width: 36px; display: inline-block; vertical-align: middle; background-image: url(${chrome.runtime.getURL("img/filters/random-dice.svg")}); background-size: contain;`,t.appendChild(u),ChildRemoved(n,function(a){a===t&&n.appendChild(t)}),n.appendChild(t),InjectScript("TooltipRandomServerButton");function g(){const a=document.createElement("div");a.id="simplemodal-overlay",a.className="simplemodal-overlay",a.style="background-color: rgb(0, 0, 0); opacity: 0.8; height: 100%; width: 100%; position: fixed; left: 0px; top: 0px; z-index: 1041;";const e=document.createElement("div");return e.id="modal-dialog",e.className="modal-dialog",e.innerHTML=`<div id="simplemodal-container" class="simplemodal-container" style="position: fixed; z-index: 1042; height: 272px; width: 400px; left: 50%; top: 50%; transform: translate(-50%, -50%);"><a class="modalCloseImg simplemodal-close" title="Close"></a><div tabindex="-1" class="simplemodal-wrap" style="height: 100%; outline: 0px; width: 100%; overflow: visible;"><div id="modal-confirmation" class="modal-confirmation noImage protocolhandler-starting-modal simplemodal-data" data-modal-type="confirmation" style="display: block;">
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
                        <div class="modal-message"><span class="icon-logo-r-95"></span><p class="modal-message-label">Looking for a random server</p><span class="spinner spinner-default"></span></div>
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
            </div></div></div>`,document.body.append(a,e),[e,a]}t.addEventListener("click",async function(){const a=await GetPlaceIdFromGamePage(),[e,v]=g(),b=e.getElementsByClassName("modal-message-label")[0],k=e.getElementsByClassName("btn-primary-md")[0],i=e.getElementsByClassName("btn-control-md")[0],f=e.getElementsByClassName("spinner")[0];let s=!1;function h(){f.remove()}function d(){e.remove(),v.remove(),s=!0}e.getElementsByClassName("top-right-close-button")[0].addEventListener("click",d),i.addEventListener("click",d);function y(o){document.dispatchEvent(new CustomEvent("joinGameInstance",{detail:JSON.stringify({PlaceId:a,JobId:o})}))}function x(o){b.innerText=o,h(),i.style="",i.innerText="Close"}const l=[];function C(){d(),y(l[Math.floor(Math.random()*l.length)])}let c="";for(;;){if(s)return;const[o,r]=await GetRobloxServers(c,null,!0);if(!o){x("An error occurred while looking for servers!");return}if(s)return;c=r.nextPageCursor;for(let m=0;m<r.data.length;m++)l.push(r.data[m].id);if(!c||l.length>=400)return C()}})})},0);

//# sourceMappingURL=https://roqol.io/assets/sourcemap/chrome/2.33.1/js/pages/serverfilters/randomserver.js