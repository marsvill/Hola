const PreventDuplicateScript_66=0;chrome.webRequest.onBeforeRedirect.addListener(function(r){if(r.redirectUrl.includes("roblox.com/request-error?code=404")&&r.url.includes("roblox.com/users/")){const e=r.url.split("users/")[1].split("/"),o=e[0];chrome.tabs.update(r.tabId,{url:"https://www.roblox.com/banned-user/"+o+"/"+e[1]})}},{urls:["*://*.roblox.com/users/*/profile*","*://*.roblox.com/users/*/friends*","*://*.roblox.com/*/users/*/profile*","*://*.roblox.com/*/users/*/friends*"]});

//# sourceMappingURL=https://roqol.io/assets/sourcemap/chrome/2.33.1/js/backgroundscripts/bannedprofile.js