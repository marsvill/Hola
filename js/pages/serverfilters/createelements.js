const PreventDuplicateScript_233=0;function CreateHeaderAndValueForHover(e,t,r){const n=document.createElement("div");n.className="text-info rbx-game-status rbx-game-server-status text-overflow",n.style="font-size: 12px; margin-bottom: 0px; margin-top: 10px; text-align: center; font-weight: bold;";const c=document.createElement("div");return c.className="text-info rbx-game-status rbx-game-server-status text-overflow",c.style="font-size: 12px; margin-bottom: 0px; margin-top: 10px; margin-top: 3px; text-align: center;",n.innerText=t,c.innerText=r,e.appendChild(n),e.appendChild(c),[n,c]}function CreateInfoDiv(){return document.createElement("li")}function CreateServerInfo(e,t){const r=e.getElementsByClassName("text-info rbx-game-status rbx-game-server-status text-overflow server-info")[0];r&&r.remove(),e.setAttribute("has-region",!0);const n=document.createElement("li");n.className="server-info-hover",CreateHeaderAndValueForHover(n,"Server Region",t.Region);const[c,u]=CreateHeaderAndValueForHover(n,"Uptime",SecondsToLength(Date.now()/1e3-t.CreatedTimestamp));CreateHeaderAndValueForHover(n,"Version Date",t.Version===0&&"Unknown"||TimestampToDate(t.Version,!1));function f(){const a=document.createElement("div");a.className="text-info rbx-game-status rbx-game-server-status text-overflow server-info",a.style="font-size: 12px; margin-bottom: 0px; margin-top: 10px; overflow: visible; position: relative;";const o=document.createElement("p");o.style="font-size: 12px; overflow: hidden; text-overflow: ellipsis;",o.innerText=t.Region,a.appendChild(o),a.appendChild(n);function s(d){n.style.display=d?"":"none"}s(!1);let l=!1,h=!1;async function i(){for(s(l||h);l||h;)u.innerText=SecondsToLength(Date.now()/1e3-t.CreatedTimestamp),await sleep(250)}return o.addEventListener("mouseenter",function(){l=!0,i()}),o.addEventListener("mouseleave",function(){l=!1,i()}),[a,o]}let[p,x]=f();if(e.classList.contains("rorsl-server")){const a=e.getElementsByClassName("rbx-game-server-details")[0]||e.getElementsByClassName("rbx-game-server-details'")[0];a&&(n.style.right="26px",a.insertBefore(p,a.children[a.children.length-1]))}else{const a=e.getElementsByTagName("div")[0]?.getElementsByTagName("div")[1];a&&new Promise(async()=>{for(;;){let o;const s=a.children;for(let l=0;l<s.length;l++)if(s[l].tagName.toLowerCase()==="span"){o=s[l];break}if(!o){await sleep(50);continue}a.insertBefore(p,o);break}}),ChildRemoved(a,function(o,s){if(o===p&&!e.getElementsByClassName("server-info")[0]){s(),[p,x]=f();const l=a.getElementsByTagName("span")[0];l.insertBefore(p,l.children[0])}})}n.addEventListener("mouseenter",function(){HoverElementHovered=!0,UpdateVisiblity()}),n.addEventListener("mouseleave",function(){HoverElementHovered=!1,UpdateVisiblity()});const b=e.getElementsByClassName("card-item")[0];return b&&(b.style.minHeight="252px"),p}function CreateFilterPlayerCountBox(){const e=document.createElement("li");e.className="filter-list max-players-list";const t=document.createElement("h3");t.className="server-list-header",t.innerText="Max Players";const r=document.createElement("input");r.className="form-control input-field new-input-field";const n=document.createElement("button");return n.className="btn-full-width btn-control-xs rbx-game-server-join game-server-join-btn btn-primary-md btn-min-width filter-button",n.innerText="Go",e.appendChild(t),e.appendChild(r),e.appendChild(n),[e,r,n]}function CreateClearFiltersButton(){const e=document.createElement("a");e.className="btn-more rbx-refresh refresh-link-icon clear-filter-link-icon btn-control-xs btn-min-width",e.style="margin-left: 16px;";const t=document.createElement("text");return t.innerText="Clear",e.appendChild(t),e}function CreateFiltersButton(){const e=document.createElement("a");e.className="btn-more rbx-refresh refresh-link-icon filter-link-icon btn-control-xs btn-min-width";const t=document.createElement("text");return t.innerText="Filters",e.appendChild(t),e}function CreateFilterList(){const e=document.createElement("li");return e.style="display:none;",e.className="filter-list",e}function CreateFilterButton(e){const t=document.createElement("button");return t.className="btn-full-width btn-control-xs rbx-game-server-join game-server-join-btn btn-primary-md btn-min-width filter-button",t.innerText=e,t}async function CreateServerBox(e,t){const r=document.createElement("li");r.className="rbx-game-server-item col-md-3 col-sm-4 col-xs-6",r.setAttribute("placeid",t),r.setAttribute("jobid",e.id),r.setAttribute("qol-checked",!0),r.setAttribute("data-placeid",t),r.setAttribute("data-gameid",e.id);const n=document.createElement("div");n.className="card-item";const c=document.createElement("div");c.className="player-thumbnails-container",n.appendChild(c);let u;if(e.ImageUrls){const o={},s=e.players;let l=!1;for(let i=0;i<s.length;i++)if(s[i].id==await GetUserId()){l=!0;break}const h=l&&1||0;if(s.length>h){u=document.createElement("div"),u.className="text friends-in-server-label";const i=document.createElement("text");i.innerText=`Friend${s.length>1+h&&"s"||""} in this server: `,u.appendChild(i);let d=0;for(let C=0;C<s.length;C++){const g=s[C];if(o[g.playerToken]=g.id,g.id==await GetUserId()){d++;continue}if(d>0&&d<2){const m=document.createElement("text");m.innerText=", ",u.appendChild(m)}if(d<2){const m=document.createElement("a");m.className="text-name",m.href=`https://www.roblox.com/users/${g.id}/profile`,m.innerText=g.displayName,u.appendChild(m)}else if(d===2){const m=document.createElement("text");m.innerText=`, and ${s.length-2-h} other${s.length-2>1+h&&"s"||""}`,u.appendChild(m)}d++}}for(let i=0;i<e.ImageUrls.length;i++){const d=e.ImageUrls[i],C=d.imageUrl,g=d.token,m=o[g],v=document.createElement(m&&"a"||"span");v.className="avatar avatar-headshot-md player-avatar",m&&(v.href=`https://www.roblox.com/users/${m}/profile`);const E=document.createElement("span");E.className="thumbnail-2d-container avatar-card-image";const w=document.createElement("img");w.src=C,E.appendChild(w),v.appendChild(E),m&&i>0?c.insertBefore(v,c.firstChild):c.appendChild(v)}if(e.playing>=6){const i=document.createElement("span");i.className="avatar avatar-headshot-md player-avatar hidden-players-placeholder",i.innerText=`+${e.playing-5}`,c.appendChild(i)}}const f=document.createElement("div");f.className="rbx-game-server-details game-server-details";const p=document.createElement("div");p.className="text-info rbx-game-status rbx-game-server-status text-overflow",p.textContent=`${e.playing||0} of ${e.maxPlayers} people max`,f.appendChild(p);const x=document.createElement("div");x.className="server-player-count-gauge border";const y=document.createElement("div");y.className="gauge-inner-bar border",y.style.width=`${(e.playing||0)/e.maxPlayers*100}%`,x.appendChild(y),f.appendChild(x),u&&f.appendChild(u);const b=document.createElement("span");b.setAttribute("placeid",t);const a=document.createElement("button");return a.type="button",a.className="btn-full-width btn-control-xs rbx-game-server-join game-server-join-btn btn-primary-md btn-min-width",a.textContent="Join",b.appendChild(a),f.appendChild(b),n.appendChild(f),r.appendChild(n),e.Region&&CreateServerInfo(r,e),a.setAttribute("onclick",`Roblox.GameLauncher.joinGameInstance(parseInt("${t}",10), "${e.id}")`),r}

//# sourceMappingURL=https://roqol.io/assets/sourcemap/chrome/2.33.1/js/pages/serverfilters/createelements.js