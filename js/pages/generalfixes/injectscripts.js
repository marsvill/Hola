const PreventDuplicateScript_161=0;async function InjectScript(e,o,r,i,a){if(o){let n=function(c){return new RegExp(c.replace(/\*/g,"[^ ]*")).test(window.location.href)};var d=n;const[m,s]=ModifyURLForLocale(o);if(!n(o)&&!n(s))return}const t=document.createElement("script");if(t.id="injectedscript-"+e,t.src=chrome.runtime.getURL(r||"js/pages/generalfixes/scriptinjections/"+e+".js"),i)for([k,v]of Object.entries(i))t.setAttribute(k,v);if(a)try{ChildRemoved(document.documentElement,function(n){n===t&&document.documentElement.insertBefore(t,document.documentElement.children[0])}),document.documentElement.insertBefore(t,document.documentElement.children[0])}catch(n){console.log(n)}for(;!document.head;)await new Promise(n=>setTimeout(n,20));return document.head.appendChild(t),t}InjectScript("xhrwrapper","*://*.roblox.com/*","js/pages/bestfriend/xhrwrapper.js",void 0,!0),InjectScript("bestfriendpresence","*://*.roblox.com/*","js/pages/bestfriend/presence.js",void 0,!0),InjectScript("bestfriendinventory","*://www.roblox.com/users/*/inventory*","js/pages/bestfriend/inventory.js",void 0,!0),InjectScript("viewoffsaleitems","*://create.roblox.com/*","js/pages/generalfixes/scriptinjections/viewoffsaleitems.js",void 0,!0),IsFeatureEnabled("FixAvatarPageFirefoxMobileMenu").then(function(e){e&&chrome.runtime.sendMessage({type:"UserAgent"}).then(function(o){o.toLowerCase().includes("android")&&o.toLowerCase().includes("firefox")&&InjectScript("firefoxandroidavatartabs","*://www.roblox.com/my/avatar")})}),IsFeatureEnabled("NewMessagePing3").then(async function(e){e&&(window.addEventListener("message",async function(o){o.source===window&&o.type==="message"&&o.data==="canpingformessage"&&await chrome.runtime.sendMessage({type:"canpingformessage"})&&window.postMessage("canpingformessage-confirm")}),InjectScript("newmessageping","*://www.roblox.com/*"),InjectScript("newmessageping","*://web.roblox.com/*"))}),InjectScript("checkforinvite","*://*.roblox.com/games/*",void 0,{search:window.location.search}),InjectScript("AvatarPage","*://*.roblox.com/my/avatar"),IsFeatureEnabled("AddRowToHomeFriends").then(function(e){e&&InjectScript("addrowtohomefriends","*://*.roblox.com/home*")}),IsFeatureEnabled("FriendsHomeLastOnline").then(function(e){e&&InjectScript("friendshomelastonline","*://*.roblox.com/home*")}),IsFeatureEnabled("CancelFriendRequest").then(function(e){e&&InjectScript("CancelFriendRequest","*://*.roblox.com/users/*/profile")}),IsFeatureEnabled("RemoveAccessoryLimit").then(function(e){e&&InjectScript("RemoveAccessoryLimit","*://*.roblox.com/my/avatar*")}),IsFeatureEnabled("TradeAge").then(function(e){e&&InjectScript("TradeAge","*://*.roblox.com/trades*")}),IsFeatureEnabled("NameOnHomeFriends").then(function(e){e&&InjectScript("FriendsName","*://*.roblox.com/home*")}),IsFeatureEnabled("ExtraOutfits").then(function(e){e&&InjectScript("alertavatarchange","*://*.roblox.com/my/avatar*")}),IsFeatureEnabled("BestFriendPresenceV3").then(function(e){e&&InjectScript("followPlayerIntoGameIntercept","*://www.roblox.com/*")}),IsFeatureEnabled("SortPrivateServersByPlayerCount").then(function(e){e&&InjectScript("privateserverslistsort","*://www.roblox.com/games/*")});async function CheckModifyHomeLayout(){const e=await IsFeatureEnabled("ModifyHomeLayout"),o=await IsFeatureEnabled("ReduceHomeRecommendationsToOneRow");!e&&!o||InjectScript("ModifyHomeLayout","*://*.roblox.com/home*","js/pages/home/editlayout.js",{ModifyHomeLayout:e,ReduceHomeRecommendationsToOneRow:o},!0)}CheckModifyHomeLayout();

//# sourceMappingURL=https://roqol.io/assets/sourcemap/chrome/2.33.1/js/pages/generalfixes/injectscripts.js