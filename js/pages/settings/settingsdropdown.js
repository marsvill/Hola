const PreventDuplicateScript_244=0;async function AddOptionToSettingsDropdown(){ChildAdded(await WaitForId("navbar-settings"),!1,async function(){const n=await WaitForId("settings-popover-menu"),o=document.createElement("li"),t=document.createElement("a");if(t.className="rbx-menu-item",t.href="https://www.roblox.com/my/account?tab=robloxqol",t.innerText="QoL Settings",AlreadySetAuthenticationError){const e=document.createElement("img");e.src=chrome.runtime.getURL("img/warning.png"),e.style="width: 23px; height: 23px; margin-left: 5px;",t.href="https://www.roblox.com/my/account?tab=robloxqol&option=Diagnose",t.appendChild(e)}o.appendChild(t),n.insertBefore(o,n.firstChild)})}AddOptionToSettingsDropdown();

//# sourceMappingURL=https://roqol.io/assets/sourcemap/chrome/2.33.1/js/pages/settings/settingsdropdown.js