const PreventDuplicateScript_206=0;async function CreatePaymentModalV2(o){const e=document.createElement("div");e.id="modal-dialog",e.className="modal-dialog purchase-modal-prompt-roqol";let t=["Best Friends","Custom Themes","500 Extra Outfits","Voice Chat Servers","Pinned Games"];const[a,l]=await RequestFunc(WebServerEndpoints.Configuration+"paidfeatures","GET");a&&(t=l.Features);let n=a?l.Price:"5";e.innerHTML=`<div id="simplemodal-container" class="simplemodal-container" style="position: fixed; z-index: 1042; height: 272px; width: 400px; left: 50%; top: 50%; transform: translate(-50%, -50%);"><a class="modalCloseImg simplemodal-close" title="Close"></a><div tabindex="-1" class="simplemodal-wrap" style="height: 100%; outline: 0px; width: 100%; overflow: visible;"><div id="modal-confirmation" class="modal-confirmation noImage protocolhandler-starting-modal simplemodal-data" data-modal-type="confirmation" style="display: block;">
    <div id="modal-dialog" class="modal-dialog">
    <div class="modal-content">
        <div class="modal-header">
            <button type="button" class="close top-right-close-button" data-dismiss="modal" style="">
                <span aria-hidden="true"><span class="icon-close"></span></span><span class="sr-only">Close</span>
            </button>
            <h5 class="modal-title">RoQoL Premium</h5>
        </div>

        <div class="modal-body">
            <div class="modal-top-body">
                <div class="modal-message"><p class="modal-message-label" style="
    /* color: white; */
">This feature is only available to RoQoL Premium subscribers!</p></div>
                <div class="modal-image-container roblox-item-image" data-image-size="medium" data-no-overlays="" data-no-click="">
                    <img class="modal-thumb" alt="generic image">
                </div>
                <div class="modal-checkbox checkbox" style="display: none;">
                    <input id="modal-checkbox-input" type="checkbox">
                    <label for="modal-checkbox-input"></label>
                </div>
            </div><h5 style="
    margin-top: 10px;
    margin-bottom: 5px;
">Subscribe to get benefits such as:</h5>
    
    <ul class="feature-list" style="
    margin-left: 20px;
    margin-bottom: 15px;
"></ul>
            <div class="modal-btns" style="
">
                
                <a id="price-confirm-btn" class="btn-growth-md btn-full-width" target="_blank" href="https://roqol.io/pages/pricing" style="
    margin:  0;
    width: calc(100% - 40px);
">Subscribe for ${SanitizeString(n)}$</a>
            </div>
        </div>
        <div class="modal-footer text-footer" ${o?"":'style="display: none;"'}>${SanitizeString(o)||""}</div>
    </div>
    </div>
    </div></div></div>`,setTimeout(function(){const i=e.getElementsByClassName("modal-content")[0];i.style.opacity=1},0);const d=e.getElementsByClassName("feature-list")[0];for(let i=0;i<t.length;i++){const s=document.createElement("li");s.style="list-style-type: disc;",s.innerText=t[i],d.appendChild(s)}return e}async function CreatePaymentPrompt(o){const e=document.createElement("div");e.id="simplemodal-overlay",e.className="simplemodal-overlay",e.style="background-color: rgb(0, 0, 0); opacity: 0.8; height: 100%; width: 100%; position: fixed; left: 0px; top: 0px; z-index: 1041;";const t=await CreatePaymentModalV2(o);document.body.append(e,t);function a(){t.remove(),e.remove()}return document.getElementById("price-confirm-btn").addEventListener("click",a),t.getElementsByClassName("close")[0].addEventListener("click",a),[t,e]}

//# sourceMappingURL=https://roqol.io/assets/sourcemap/chrome/2.33.1/js/pages/paymentprompt.js