const PreventDuplicateScript_258=0;IsFeatureEnabled("HideSerials").then(async function(l){if(!l)return;const e=document.createElement("div");e.className="trades-header-option",e.innerHTML='<span class="limited-icon-container hide-serials" style="cursor: pointer;"> <span class="icon-shop-limited"> </span> <span class="limited-number-container dont-hide">  <span class="font-caption-header text-header" style="white-space: nowrap;"></span> </span></span>';const i=e.getElementsByClassName("hide-serials")[0],r=i.getElementsByClassName("text-header")[0];let n=!1;const t=document.createElement("style");document.head.appendChild(t);function s(){r.innerText=n?"Show Serials":"Hide Serials",n?t.innerHTML=".limited-number-container:not(.dont-hide) {display: none!important;} body .tooltip {display: none!important;}":t.innerHTML=""}i.addEventListener("click",function(){n=!n,s()}),s();const d=await WaitForClass("trades-list-detail");ChildAdded(d,!0,function(a){a.tagName&&a.insertBefore(e,a.getElementsByClassName("trades-header-nowrap")[0].nextSibling)})});

//# sourceMappingURL=https://roqol.io/assets/sourcemap/chrome/2.33.1/js/pages/trades/hideserials.js