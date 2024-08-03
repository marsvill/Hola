const PreventDuplicateScript_159=0;IsFeatureEnabled("HideDesktopAppBanner").then(function(n){n&&WaitForId("desktop-app-banner").then(async function(a){let e;for(;!e;)e=a.getElementsByClassName("banner-container")[0],await sleep(1);e.className="banner-container hidden"})});

//# sourceMappingURL=https://roqol.io/assets/sourcemap/chrome/2.33.1/js/pages/generalfixes/hidedesktopbanner.js