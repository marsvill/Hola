const PreventDuplicateScript_169=0;async function HookGroupController(){let o;for(;o=document.querySelector('[ng-controller="groupController"]'),!o;)await new Promise(t=>setTimeout(t,100));if(!o)return;for(;!angular;)await new Promise(t=>setTimeout(t,100));const n=angular.element(o).scope(),r=n.isLockedGroup,a=n.canViewWall;n.canViewWall=function(...t){return r()?!1:a(...t)},n.isLockedGroup=function(){return r()&&$.when($(".group-header")).then(t=>{const i=t[0];if(!i)return;const l=i.getElementsByClassName("group-name text-overflow")[0];if(l.getElementsByTagName("svg").length>0)return;const e=document.createElement("div");e.setAttribute("data-toggle","tooltip"),e.setAttribute("data-placement","bottom"),e.setAttribute("data-original-title","Locked Group"),e.className="locked-group-icon",$(e).tooltip(),e.style="width: 30px; height: 30px; display: inline-block; margin-left: 10px;",e.innerHTML=`<svg fill="#ffffff" height="100%" width="100%" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
                viewBox="0 0 330 330" xml:space="preserve">
           <g id="XMLID_509_">
               <path id="XMLID_510_" d="M65,330h200c8.284,0,15-6.716,15-15V145c0-8.284-6.716-15-15-15h-15V85c0-46.869-38.131-85-85-85
                   S80,38.131,80,85v45H65c-8.284,0-15,6.716-15,15v170C50,323.284,56.716,330,65,330z M180,234.986V255c0,8.284-6.716,15-15,15
                   s-15-6.716-15-15v-20.014c-6.068-4.565-10-11.824-10-19.986c0-13.785,11.215-25,25-25s25,11.215,25,25
                   C190,223.162,186.068,230.421,180,234.986z M110,85c0-30.327,24.673-55,55-55s55,24.673,55,55v45H110V85z"/>
           </g>
           </svg>`,l.appendChild(e)}),!1}}HookGroupController();

//# sourceMappingURL=https://roqol.io/assets/sourcemap/chrome/2.33.1/js/pages/generalfixes/scriptinjections/BannedGroup.js