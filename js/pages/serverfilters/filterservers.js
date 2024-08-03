const PreventDuplicateScript_235=0;async function GetRobloxServers(e,r,t,a){return await RequestFunc(`https://games.roblox.com/v1/games/${await GetPlaceIdFromGamePage()}/servers/0?sortOrder=${r&&1||2}&excludeFullGames=${t&&!0||!1}&limit=${a||100}&cursor=${e||""}`,"GET",void 0,void 0,!0)}

//# sourceMappingURL=https://roqol.io/assets/sourcemap/chrome/2.33.1/js/pages/serverfilters/filterservers.js