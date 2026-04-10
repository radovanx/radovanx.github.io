import{h as f,a as h,s as b}from"./ai-engine.DxJ7nNiN.js";const u="ai-selection-popover",g="ai-selection-response";document.addEventListener("astro:page-load",E);function E(){const i=document.querySelector(".prose");if(!i||!f())return;document.getElementById(u)?.remove(),document.getElementById(g)?.remove();const e=document.createElement("div");e.id=u,e.className="ai-popover",e.innerHTML=`
    <button class="ai-popover-btn" aria-label="Ask AI about selection">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
        <path d="M12 2a8 8 0 0 1 8 8c0 3.4-2.1 6.3-5 7.5V20a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-2.5C6.1 16.3 4 13.4 4 10a8 8 0 0 1 8-8z"/>
        <line x1="10" y1="22" x2="14" y2="22"/>
      </svg>
      <span>Ask AI</span>
    </button>
  `,document.body.appendChild(e);const t=document.createElement("div");t.id=g,t.className="ai-response",t.style.display="none";let l=!1;document.addEventListener("mouseup",n=>{if(e.contains(n.target)||t.contains(n.target))return;const o=window.getSelection(),s=o?.toString().trim();s&&s.length>3&&i.contains(o.anchorNode)?y(o):e.contains(n.target)||c()}),document.addEventListener("keydown",n=>{n.key==="Escape"&&c()});function y(n){const o=n.getRangeAt(0),s=o.getBoundingClientRect();e.style.display="flex",e.style.left=`${s.left+s.width/2-e.offsetWidth/2}px`,e.style.top=`${s.top+window.scrollY-e.offsetHeight-8}px`,l=!0;const d=e.querySelector(".ai-popover-btn");d.onclick=()=>m(n.toString().trim(),o)}function c(){l&&(e.style.display="none",l=!1)}async function m(n,o){c();const d=document.querySelector("article h1")?.textContent??"Article",v=i.innerText.slice(0,6e3);(o.startContainer.parentElement?.closest("p, li, blockquote, h2, h3, h4, div")||i).after(t),t.style.display="block",t.innerHTML=`<div class="ai-response-header">
      <span class="ai-response-label">AI</span>
      <button class="ai-response-close" aria-label="Close">&times;</button>
    </div>
    <div class="ai-response-body">
      <div class="ai-loading">Loading model...</div>
    </div>`,t.querySelector(".ai-response-close").addEventListener("click",()=>{t.style.display="none"});const p=t.querySelector(".ai-response-body");b(a=>{const r=p.querySelector(".ai-loading");r&&(r.textContent=a)});try{const a=`Explain this passage from the article: "${n}"`;await h(d,v,a,r=>{p.innerHTML=k(r)})}catch(a){p.innerHTML=`<div class="ai-error">Failed: ${a.message}</div>`}}}function k(i){return i.replace(/\n\n/g,"</p><p>").replace(/\n/g,"<br>").replace(/`([^`]+)`/g,"<code>$1</code>").replace(/\*\*([^*]+)\*\*/g,"<strong>$1</strong>").replace(/^/,"<p>").replace(/$/,"</p>")}
