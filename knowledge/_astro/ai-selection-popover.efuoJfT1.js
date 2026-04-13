import{a as w,f as x,s as S}from"./ai-engine.CquYftIr.js";const y="ai-selection-popover",h="ai-selection-response";k();document.addEventListener("astro:page-load",k);function k(){const r=document.querySelector(".prose");if(!r)return;document.getElementById(y)?.remove(),document.getElementById(h)?.remove();const e=document.createElement("div");e.id=y,e.className="ai-popover",e.innerHTML=`
    <button class="ai-popover-btn" aria-label="Ask AI about selection">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
        <path d="M12 2a8 8 0 0 1 8 8c0 3.4-2.1 6.3-5 7.5V20a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-2.5C6.1 16.3 4 13.4 4 10a8 8 0 0 1 8-8z"/>
        <line x1="10" y1="22" x2="14" y2="22"/>
      </svg>
      <span>Ask AI</span>
    </button>
  `,document.body.appendChild(e);const t=document.createElement("div");t.id=h,t.className="ai-response",t.style.display="none";let u=!1,f=!1,c=null;document.addEventListener("mouseup",n=>{if(e.contains(n.target)||t.contains(n.target))return;const s=window.getSelection(),o=s?.toString().trim();o&&o.length>3&&r.contains(s.anchorNode)?E(s):e.contains(n.target)||m()}),document.addEventListener("keydown",n=>{n.key==="Escape"&&m()});function E(n){const s=n.getRangeAt(0),o=s.getBoundingClientRect();e.style.display="flex";const d=e.offsetWidth,p=e.offsetHeight,v=document.documentElement.clientWidth;let l=o.left+o.width/2-d/2;l=Math.max(8,Math.min(l,v-d-8));let i=o.top+window.scrollY-p-8;o.top-p-8<0&&(i=o.bottom+window.scrollY+8),e.style.left=`${l}px`,e.style.top=`${i}px`,u=!0;const a=n.toString().trim(),g=e.querySelector(".ai-popover-btn");c&&g.removeEventListener("click",c),c=()=>b(a,s),g.addEventListener("click",c)}function m(){u&&(e.style.display="none",u=!1)}async function b(n,s){if(f)return;f=!0,m();const d=document.querySelector("article h1")?.textContent??"Article",p=r.innerText.slice(0,3e3);(s.startContainer.parentElement?.closest("p, li, blockquote, h2, h3, h4, div")||r).after(t),t.style.display="block",t.innerHTML=`<div class="ai-response-header">
      <span class="ai-response-label">AI</span>
      <button class="ai-response-close" aria-label="Close">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
      </button>
    </div>
    <div class="ai-response-body">
      <div class="ai-loading">Thinking...</div>
    </div>`,t.querySelector(".ai-response-close").addEventListener("click",()=>{t.style.display="none"});const l=t.querySelector(".ai-response-body");S(i=>{const a=l.querySelector(".ai-loading");a&&(a.textContent=i)});try{const i=`Explain this passage from the article: "${n}"`;await w(d,p,i,a=>{l.innerHTML=x(a)})}catch(i){l.innerHTML=`<div class="ai-error">${C(i.message)}</div>`}finally{f=!1}}}function C(r){return r.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}
