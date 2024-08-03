const PreventDuplicateScript_155=0;async function DisableFooter(){const o=await WaitForId("footer-container");o.style="display: none;",document.body.style="margin-bottom: 0px;"}IsFeatureEnabled("HideFooter").then(function(o){o&&DisableFooter()});

//# sourceMappingURL=https://roqol.io/assets/sourcemap/chrome/2.33.1/js/pages/generalfixes/disablefooter.js