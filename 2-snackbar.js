import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */import{i}from"./assets/vendor-BbbuE1sJ.js";const s=document.querySelector(".form");let t="",r="";s.addEventListener("input",l);s.addEventListener("click",n);function l(e){t=Number(e.currentTarget.delay.value),r=e.currentTarget.state.value}function n(e){e.preventDefault(),new Promise((a,o)=>{setTimeout(()=>{r==="fulfilled"?a(i.success({message:`✅ Fulfilled promise in ${t}ms`})):r==="rejected"&&o(i.error({message:`❌ Rejected promise in ${t}ms`}))},t)})}
//# sourceMappingURL=2-snackbar.js.map
