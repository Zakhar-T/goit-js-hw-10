import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */import{f as p,i as y}from"./assets/vendor-BbSUbo7J.js";const c=document.querySelector("#datetime-picker"),r=document.querySelector("button[type='button']"),n=document.querySelector(".timer");let a={};const h={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(t){console.log(t[0]),t.length>0&&(a=t[0],a>Date.now()?r.removeAttribute("disabled"):(r.setAttribute("disabled","true"),y.error({message:"Please choose a date in the future",position:"topRight",closeOnClick:!0}),this.clear()))}};p("#datetime-picker",h);r.addEventListener("click",f);function f(){const t=a-Date.now(),e=d(t),o=n.querySelector("span[data-days]"),i=n.querySelector("span[data-hours]"),u=n.querySelector("span[data-minutes]"),s=n.querySelector("span[data-seconds]");o.textContent=String(e.days).padStart(2,"0"),i.textContent=String(e.hours).padStart(2,"0"),u.textContent=String(e.minutes).padStart(2,"0"),s.textContent=String(e.seconds).padStart(2,"0"),r.setAttribute("disabled","true"),c.setAttribute("disabled","true"),b()}function b(){let t=setInterval(()=>{const e=a-Date.now(),o=d(e);n.querySelector("span[data-days]").textContent=String(o.days).padStart(2,"0"),n.querySelector("span[data-hours]").textContent=String(o.hours).padStart(2,"0"),n.querySelector("span[data-minutes]").textContent=String(o.minutes).padStart(2,"0"),n.querySelector("span[data-seconds]").textContent=String(o.seconds).padStart(2,"0"),e<=1e3&&(clearInterval(t),t=null,c.removeAttribute("disabled"))},1e3)}function d(t){const s=Math.floor(t/864e5),l=Math.floor(t%864e5/36e5),m=Math.floor(t%864e5%36e5/6e4),S=Math.floor(t%864e5%36e5%6e4/1e3);return{days:s,hours:l,minutes:m,seconds:S}}
//# sourceMappingURL=1-timer.js.map
