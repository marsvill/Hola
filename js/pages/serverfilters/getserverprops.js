const PreventDuplicateScript_236=0;const sleep=e=>new Promise(r=>setTimeout(r,e));let RefreshButton;const ServerElements=[];function FindFirstId(e){return document.getElementById(e)}async function WaitForId(e){let r=null;for(;r=FindFirstId(e),r==null;)await sleep(50);return r}async function GetRefreshButton(){return RefreshButton||(RefreshButton=(await WaitForId("rbx-running-games")).getElementsByClassName("btn-more rbx-refresh refresh-link-icon btn-control-xs btn-min-width")[0],new MutationObserver(function(r){r.forEach(function(n){if(n.type==="attributes"&&n.attributeName==="disabled"&&RefreshButton.getAttribute("disabled")==="")for(let i=0;i<ServerElements.length;i++){const t=ServerElements[i];t.removeAttribute("qol-checked"),t.removeAttribute("jobid"),t.removeAttribute("placeid"),t.removeAttribute("accesscode");const o=t.getElementsByClassName("text-info rbx-game-status rbx-game-server-status text-overflow server-info")[0];o&&o.remove()}})}).observe(RefreshButton,{attributes:!0})),RefreshButton}async function ElementAdded(e){const r=e.classList.contains("rorsl-server");if(!e.className.includes("game-server-item")||e.classList.contains("rbx-game-server-item-container")||e.getAttribute("client-hooked"))return;e.setAttribute("client-hooked",!0);async function n(){if(e.getAttribute("checking-qol-checked")||e.getAttribute("qol-checked"))return;for(e.removeAttribute("has-region"),e.setAttribute("checking-qol-checked",!0),await GetRefreshButton();RefreshButton.getAttribute("disabled")==="";)await sleep(50);if(r){const c=e.getElementsByClassName("rbx-game-server-join")[0];if(c&&c.onclick){const s=new RegExp('Roblox.GameLauncher.joinGameInstance\\(([0-9]+), "([0-9 a-z A-Z -]+)"\\)',"gm").exec(c.onclick);s[2]&&(e.setAttribute("jobid",s[2]),e.setAttribute("placeid",s[1]),e.setAttribute("qol-checked",!0))}e.removeAttribute("checking-qol-checked");return}if(AngularInfo=angular.element(e).context[Object.keys(angular.element(e).context)[0]],!AngularInfo){e.removeAttribute("checking-qol-checked");return}let t=AngularInfo.return.memoizedProps,o=0;for(;!t&&o<5;)await sleep(100),t=AngularInfo.return.memoizedProps,o++;if(!t||t.id==null){e.removeAttribute("checking-qol-checked");return}e.setAttribute("jobid",t.id),e.setAttribute("placeid",t.placeId),e.classList.contains("rbx-private-game-server-item")&&e.setAttribute("accesscode",t.accessCode),e.setAttribute("qol-checked",!0),e.removeAttribute("checking-qol-checked")}ServerElements.push(e),new MutationObserver(function(t){t.forEach(function(o){o.type==="attributes"&&o.attributeName==="qol-checked"&&n()})}).observe(e,{attributes:!0});const i=e.getElementsByClassName("player-thumbnails-container")[0];if(i){let t=!1;new MutationObserver(function(o){t||o.forEach(function(c){t||c.type==="childList"&&(t=!0,setTimeout(function(){t=!1,e.removeAttribute("jobid"),e.removeAttribute("placeid"),e.removeAttribute("accesscode");const s=e.getElementsByClassName("text-info rbx-game-status rbx-game-server-status text-overflow server-info")[0];s&&s.remove(),e.removeAttribute("qol-checked")},0))})}).observe(i,{childList:!0})}n()}function NewServerAddedMutation(e){e.forEach(function(r){if(r.type!=="childList")return;const n=r.addedNodes;for(let i=0;i<n.length;i++)ElementAdded(n[i])})}function HandleList(e){WaitForId(e).then(function(r){new MutationObserver(NewServerAddedMutation).observe(r,{childList:!0});const n=r.children;for(let i=0;i<n.length;i++)ElementAdded(n[i])})}async function GetServerProps(){HandleList("rbx-game-server-item-container"),HandleList("rbx-friends-game-server-item-container"),HandleList("rbx-private-game-server-item-container"),HandleList("rbx-running-games")}GetServerProps();

//# sourceMappingURL=https://roqol.io/assets/sourcemap/chrome/2.33.1/js/pages/serverfilters/getserverprops.js