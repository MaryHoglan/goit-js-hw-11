import{a as f,S as d,i as n}from"./assets/vendor-DXaqCXe3.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function i(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=i(e);fetch(e.href,r)}})();const m="49357891-7b2a70058984a44bc943728d9",g="https://pixabay.com/api/";async function y(o){return(await f.get(g,{params:{key:m,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data.hits}const p=document.querySelector(".gallery");let h=new d(".gallery a");function L(o){const t=o.map(({webformatURL:i,largeImageURL:a,tags:e,likes:r,views:s,comments:c,downloads:u})=>`
        <li class="gallery-item">
            <a href="${a}" class="gallery-link">
                <img src="${i}" alt="${e}" loading="lazy">
            </a>
            <ul class="info">
                <li> 👍 ${r}</li>
                <li> 👀 ${s}</li>
                <li> 💬 ${c}</li>
                <li> 📥 ${u}</li>
            </ul>
        </li>
    `).join("");p.innerHTML=t,h.refresh()}n.settings({position:"topRight",iconColor:"#fff",messageColor:"#fff"});const b=document.querySelector(".form"),q=document.querySelector(".gallery"),l=document.querySelector(".loader");b.addEventListener("submit",async o=>{o.preventDefault();const t=o.target.elements["search-text"].value.trim();if(!t){n.warning({title:"Warning",message:"Please enter a search query!"});return}q.innerHTML="",l.classList.remove("hidden");try{const i=await y(t);i.length===0?n.error({title:"Error",message:"No images found. Try another query."}):L(i)}catch{n.error({title:"Error",message:"Failed to fetch images."})}finally{l.classList.add("hidden")}});
//# sourceMappingURL=index.js.map
