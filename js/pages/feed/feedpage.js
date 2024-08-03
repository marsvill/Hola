const PreventDuplicateScript_141=0;IsFeatureEnabled("Feed").then(async function(n){if(!n)return;const e=document?.head?.getElementsByTagName("title")?.[0];e&&(e.innerText+=" - Feed");const t=await WaitForClass("content");t.replaceChildren(),t.appendChild(CreateFeed())});

//# sourceMappingURL=https://roqol.io/assets/sourcemap/chrome/2.33.1/js/pages/feed/feedpage.js