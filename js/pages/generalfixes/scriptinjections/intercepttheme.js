const PreventDuplicateScript_189=0;async function InterceptTheme(){let n=document.getElementById("themes-list"),e;for(;e=document.querySelector('[ng-controller="personalController"]'),!e;)await new Promise(t=>setTimeout(t,0));const o=angular.element(n).scope(),s=angular.element(e).scope(),l=o.chooseThemes;o.chooseThemes=function(...t){s.themeContent?.newThemeType?(document.dispatchEvent(new CustomEvent("RobloxQoLThemeChange",{detail:null})),l(...t)):document.dispatchEvent(new CustomEvent("RobloxQoLThemeChange",{detail:"System"}))}}InterceptTheme();

//# sourceMappingURL=https://roqol.io/assets/sourcemap/chrome/2.33.1/js/pages/generalfixes/scriptinjections/intercepttheme.js