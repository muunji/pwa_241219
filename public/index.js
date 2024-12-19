//******************************** */
const root = document.getElementById('root');

//* form method = post action '/click'
const clickForm = document.createElement('form');
clickForm.method = "POST";
clickForm.action = "/click";

root.appendChild(clickForm);

const button = document.createElement('button');
button.textContent = "HELLO";

clickForm.appendChild(button);

const input = document.createElement('input');
input.placeholder = "write";
input.name = "letter";

clickForm.appendChild(input);

//***************************** */
if("serviceWorker" in navigator){
  window.navigator.serviceWorker.register("/test.js")
  .then((test)=>{
    console.log("registered with scope",test);
  })
  .catch((error)=>{
    console.error("failed",error);
  })
}

//푸시알림
if('Notification'in window && 'serviceWorker' in navigator) {
  Notification.requestPermission().then(permission =>{
    if(permission === 'granted'){
      navigator.serviceWorker.ready.then(registration => {
        registration.showNotification('Hello from PWA!');
      });
    }
  });
}