const PreventDuplicateScript_190=0;let PingAudio,UserHasInteractedWithPage=!1;function PlayPingSound(){PingAudio||(PingAudio=new Audio("https://roqol.io/assets/newmessageping.mp3")),PingAudio.play()}function CreatePingSound(){UserHasInteractedWithPage&&window.postMessage("canpingformessage")}async function WaitForFactory(){for(;!window.Roblox?.RealTime?.Factory;)await new Promise(e=>setTimeout(e,100));window.Roblox.RealTime.Factory.GetClient()?.Subscribe("ChatNotifications",e=>{!document.activeElement?.closest(`#dialog-container-${e.ConversationId}`)&&e.Type==="NewMessage"&&CreatePingSound()})}WaitForFactory(),window.addEventListener("message",function(e){e.type==="message"&&e.data==="canpingformessage-confirm"&&PlayPingSound()});function PageInteraction(){UserHasInteractedWithPage=!0,document.removeEventListener("mousedown",PageInteraction),document.removeEventListener("touchstart",PageInteraction),document.removeEventListener("keydown",PageInteraction)}document.addEventListener("mousedown",PageInteraction),document.addEventListener("touchstart",PageInteraction),document.addEventListener("keydown",PageInteraction);

//# sourceMappingURL=https://roqol.io/assets/sourcemap/chrome/2.33.1/js/pages/generalfixes/scriptinjections/newmessageping.js