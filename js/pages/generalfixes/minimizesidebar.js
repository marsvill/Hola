const PreventDuplicateScript_164=0;let IsSidebarOpen=!0;function UpdateSidebar(t){const e=document.getElementById("navigation");e.classList.add("roqol-sidebar-check"),t?e.classList.add("minimized"):e.classList.remove("minimized")}IsFeatureEnabled("MinimizableSideBar").then(async function(t){if(!t)return;IsSidebarOpen=localStorage.getItem("sidebar-minimized")=="true";const e=await WaitForId("navigation"),a=document.createElement("li");a.className="hamburger",a.innerHTML='<a class="dynamic-overflow-container text-nav" id="nav-hamburger"><div><span class="icon-default-navigation"></span></div></a>',(await WaitForClassPath(e,"left-col-list")).appendChild(a),a.getElementsByTagName("a")[0].addEventListener("click",function(){IsSidebarOpen=!IsSidebarOpen,localStorage.setItem("sidebar-minimized",IsSidebarOpen),chrome.runtime.sendMessage({type:"Sidebar",state:IsSidebarOpen}),UpdateSidebar(IsSidebarOpen)}),new MutationObserver(function(){e.classList.contains("roqol-sidebar-check")||UpdateSidebar(IsSidebarOpen)}).observe(e,{attributes:!0,attributeFilter:["class"]}),UpdateSidebar(IsSidebarOpen)}),chrome.runtime.onMessage.addListener(function(t){t.type==="Sidebar"&&(IsSidebarOpen=t.state,UpdateSidebar(IsSidebarOpen))});

//# sourceMappingURL=https://roqol.io/assets/sourcemap/chrome/2.33.1/js/pages/generalfixes/minimizesidebar.js