import{i as l}from"./assets/error-81165c32.js";/* empty css                      */import{i as o}from"./assets/vendor-77e16229.js";const n="/goit-js-hw-10/assets/success-ce58e14e.svg",s=document.querySelector(".form");s.addEventListener("submit",t=>{t.preventDefault();const r=Number(s.delay.value),a=s.state.value;new Promise((e,i)=>{setTimeout(()=>{a==="fulfilled"?e(r):i(r)},r)}).then(e=>{o.success({iconUrl:n,message:`Fulfilled promise in ${e}ms`,messageColor:"#ffffff",backgroundColor:"#59A10D",progressBar:!0,progressBarColor:"#326101",progressBarEasing:"linear",pauseOnHover:!0,position:"topRight"})}).catch(e=>{o.error({iconUrl:l,message:`Rejected promise in ${e}ms`,messageColor:"#ffffff",backgroundColor:"#EF4040",progressBar:!0,progressBarColor:"#B51B1B",progressBarEasing:"linear",pauseOnHover:!0,position:"topRight"})})});
//# sourceMappingURL=commonHelpers2.js.map
