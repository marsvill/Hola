const PreventDuplicateScript_76=0;let FeatureKilledStatus,IsFetchingFeatureKills=!1,FeatureKilledFails=0;async function FetchKilledFeatures(){let e=IsFetchingFeatureKills;for(;IsFetchingFeatureKills;)await sleep(20);if(e)return;IsFetchingFeatureKills=!0;const[a,i]=await RequestFunc(WebServerEndpoints.Configuration+`v2/${ExtensionVersion}/disabled_features`,"GET");if(IsFetchingFeatureKills=!1,!a){if(FeatureKilledFails++,!FeatureKilledStatus){const t=await LocalStorage.get("KilledFeatures");if(t){FeatureKilledStatus=JSON.parse(t);return}}FeatureKilledFails<5?(await sleep(5*1e3),await FetchKilledFeatures()):FeatureKilledStatus=[];return}FeatureKilledFails=0,FeatureKilledStatus=i,LocalStorage.set("KilledFeatures",JSON.stringify(FeatureKilledStatus))}async function IsFeatureKilled(e){if(IgnoreDisabledFeatures)return!1;for(;!FeatureKilledStatus;)await sleep(100);return FeatureKilledStatus.includes(e)}BindToOnMessage("getkilledfeatures",!0,async function(){for(;!FeatureKilledStatus;)await sleep(100);return FeatureKilledStatus}),FetchKilledFeatures(),setInterval(FetchKilledFeatures,60*1e3);

//# sourceMappingURL=https://roqol.io/assets/sourcemap/chrome/2.33.1/js/backgroundscripts/killswitch.js