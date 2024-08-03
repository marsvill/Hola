const PreventDuplicateScript_234=0;async function LoadCSS(){const l=document.createElement("link");for(l.href=chrome.runtime.getURL("css/filters.css"),l.type="text/css",l.rel="stylesheet";!document.head;)await sleep(100);document.head.appendChild(l)}let FilterListOpen=!1,FilterList;function UpdateFilterListVisibility(){FilterList.style=`display:${FilterListOpen&&"block"||"none"};`}async function HandleMapRegion(l){let s;const r=CreateFilterButton("Region Map");r.classList.add("ignore-paid-check");const i=document.createElement("div");i.className="filter-globe",i.style="display:none;",FilterList.appendChild(i);const e=CreateInfoDiv(),[u,d]=CreateHeaderAndValueForHover(e,"","");e.className="filter-globe-serverinfo",e.style.display="none",e.style.pointerEvents="none",i.appendChild(e);let v,a,C=!1,y=CreatePlanetaryJS(void 0,void 0,window);i.addEventListener("mouseenter",function(){v&&v.plugins.autorotate.pause(),C=!0}),i.addEventListener("mouseleave",function(){v&&v.plugins.autorotate.resume(),C=!1,e.style.display="none"});let b;const k={dark:{oceans:"#354060",land:"#1b1f2b",borders:"#5f6061"},light:{oceans:"#8ab4f8",land:"#bbe2c6",borders:"#64686b"}};let p=k.dark;function w(){p=document.body.className.includes("light-theme")?k.light:k.dark,b&&(b.oceans.fill=p.oceans,b.lakes.fill=p.oceans,b.land.fill=p.land,b.borders.stroke=p.borders)}new MutationObserver(w).observe(document.body,{attributeFilter:["class"]}),w();function D(){if(v)return;a=document.createElement("canvas"),a.id="region-globe",a.style="height: 100%; width: 100%;",a.setAttribute("height","500px"),a.setAttribute("width","500px"),i.appendChild(a),globe=y.planet(),v=globe;function S(f){return function(t){var n=null;t.plugins.autorotate={paused:C,pause:function(){t.plugins.autorotate.paused=!0},resume:function(){t.plugins.autorotate.paused=!1}},t.onDraw(function(){if(t.plugins.autorotate.paused||!n)n=new Date;else{var o=new Date,c=o-n,g=t.projection.rotate();g[0]+=f*c/1e3,g[0]>=180&&(g[0]-=360),t.projection.rotate(g),n=o}})}}function m(f){f=f||{};var t=null;return function(n){n.onInit(function(){var o=n.plugins.topojson.world;t=topojson.feature(o,o.objects.ne_110m_lakes)}),n.onDraw(function(){n.withSavedContext(function(o){o.beginPath(),n.path.context(o)(t),o.fillStyle=f.fill||"black",o.fill()})})}}function h(){s&&s()}LoadLocalFile(chrome.runtime.getURL("js/modules/world.json")).then(function(f){b={topojson:{world:JSON.parse(f)},oceans:{fill:p.oceans},land:{fill:p.land},borders:{stroke:p.borders},lakes:{fill:p.oceans}},globe.loadPlugin(y.plugins.earth(b)),globe.loadPlugin(m(b.lakes)),globe.loadPlugin(y.plugins.zoom({scaleExtent:[200,700]})),globe.loadPlugin(y.plugins.drag({onDragStart:function(){a.style.cursor="grabbing",this.plugins.autorotate.pause()},onDragEnd:function(){a.style.cursor="grab",C||this.plugins.autorotate.resume()},onDrag:h})),globe.loadPlugin(y.plugins.pings()),globe.projection.scale(250).translate([250,250]).rotate([0,-10,0]),globe.loadPlugin(S(10)),globe.draw(a)}).catch(),a.style["border-radius"]="12px"}let B=!1,F=!1,L=!1;function P(){a&&(a.style.cursor="grab"),e.style.display="none",i.style=`display:${L&&"block"||"none"};`}async function x(){if(B||F)return;D(),F=!0;const[S,m]=await RequestFunc(WebServerEndpoints.Servers+"regions","POST",void 0,JSON.stringify({PlaceId:await GetPlaceIdFromGamePage()}));if(F=!1,!S)return;B=!0;for(let t=0;t<m.length;t++){const n=m[t],o=n.Lat,c=n.Lng,g={color:"#3c89e7",ttl:2e3,angle:3.5};setInterval(function(){globe.plugins.pings.add(c,o,g)},350)}function h(t,n){let o=99999999,c;for(let g=0;g<m.length;g++){const E=m[g],R=DistanceBetweenCoordinates(t,n,E.Lat,E.Lng);R<o&&(o=R,c=E)}return[o,c]}let f;d3.select("#region-globe").on("mousedown.regiontrigger",function(){const t=d3.mouse(this),n=globe.projection.invert(t),[o,c]=h(n[1],n[0]);o<325&&(f=c)},!0),d3.select("#region-globe").on("click.regiontrigger",function(){const t=d3.mouse(this),n=globe.projection.invert(t),[o,c]=h(n[1],n[0]);if(o<325&&f===c){if(!l)return CreatePaymentPrompt();FilterListOpen=!1,UpdateFilterListVisibility(),EnableRegionFilter(c.Region),L=!1,P()}f=void 0}),s=function(){const t=d3.mouse(a),n=globe.projection.invert(t),[o,c]=h(n[1],n[0]);o<325?(u.innerText=c.Region,d.innerText=`Servers: ${c.Count}`,e.style.display="",e.style.top=t[1]-e.offsetHeight-5+"px",e.style.left=t[0]-e.offsetWidth/2+"px",a.style.cursor="pointer"):e.style.display="none"},d3.select("#region-globe").on("mousemove.regiontrigger",s)}return r.addEventListener("click",function(){L=!L,P(),x()}),r}function CreateMaxPlayersFilter(){const[l,s,r]=CreateFilterPlayerCountBox(),i=CreateFilterButton("Max Players");let e=!1;function u(){l.style=`display:${e&&"block"||"none"};`}return i.addEventListener("click",function(){e=!e,u()}),r.addEventListener("click",function(){e=!1,u(),FilterListOpen=!1,UpdateFilterListVisibility();const d=parseInt(s.value);d&&EnableMaxPlayerCount(d)}),u(),FilterList.appendChild(l),i}function CreateGeneralButtons(l){const s=CreateFilterButton("Available Room");s.addEventListener("click",function(){FilterListOpen=!1,UpdateFilterListVisibility(),EnableAvailableSpaces()});const r=CreateFilterButton("Smallest Servers");r.addEventListener("click",function(){FilterListOpen=!1,UpdateFilterListVisibility(),EnableSmallestServer()});const i=CreateFilterButton("Best Connection");i.addEventListener("click",function(){if(!l)return CreatePaymentPrompt();FilterListOpen=!1,UpdateFilterListVisibility(),EnableBestConnection()});const e=CreateFilterButton("Oldest Servers");e.addEventListener("click",function(){if(!l)return CreatePaymentPrompt();FilterListOpen=!1,UpdateFilterListVisibility(),EnableServerAge(!0)});const u=CreateFilterButton("Newest Servers");u.addEventListener("click",function(){if(!l)return CreatePaymentPrompt();FilterListOpen=!1,UpdateFilterListVisibility(),EnableServerAge(!1)});const d=CreateFilterButton("Random Servers");return d.addEventListener("click",function(){FilterListOpen=!1,UpdateFilterListVisibility(),EnableRandomServers()}),[[s,r,d],[i,u,e]]}async function HandleFilterClick(l,s){FilterList=CreateFilterList(),s.addEventListener("click",function(){FilterListOpen=!FilterListOpen,UpdateFilterListVisibility()});const r=await PaidForFeature("ServerRegions"),[i,e]=CreateGeneralButtons(r);if(i.push(CreateMaxPlayersFilter()),e.unshift(await HandleMapRegion(r)),r)FilterList.append(...e),FilterList.append(...i);else{FilterList.append(...i),FilterList.append(...e);for(let u=0;u<e.length;u++){const d=e[u];d.classList.contains("ignore-paid-check")||(d.classList.add("paid-disabled"),d.style="pointer-events: all; cursor: pointer;")}}FilterList.children[FilterList.children.length-1].style.marginBottom="0",l.appendChild(FilterList),document.body.setAttribute("RoQoLServerFiltersEnabled","true")}async function RunFiltersMain(){LoadCSS();let l;for(;!l;)l=(await WaitForId("rbx-running-games")).getElementsByTagName("div")[0]?.getElementsByTagName("div")[0],await sleep(100);const s=document.createElement("div");s.className="rbx-filter";const r=CreateFiltersButton(),i=l.getElementsByTagName("button")[0];i.style="margin-left:16px;",l.insertBefore(s,i),s.appendChild(r),HandleFilterClick(s,r)}

//# sourceMappingURL=https://roqol.io/assets/sourcemap/chrome/2.33.1/js/pages/serverfilters/filters.js