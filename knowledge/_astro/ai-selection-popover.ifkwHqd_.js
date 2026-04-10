import{h as k,a as E,f as b,s as x}from"./ai-engine.Bpmh-5dj.js";const y="ai-selection-popover",g="ai-selection-response";h();document.addEventListener("astro:page-load",h);function h(){const r=document.querySelector(".prose");if(!r||!k())return;document.getElementById(y)?.remove(),document.getElementById(g)?.remove();const e=document.createElement("div");e.id=y,e.className="ai-popover",e.innerHTML=`
    <button class="ai-popover-btn" aria-label="Ask AI about selection">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
        <path d="M12 2a8 8 0 0 1 8 8c0 3.4-2.1 6.3-5 7.5V20a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-2.5C6.1 16.3 4 13.4 4 10a8 8 0 0 1 8-8z"/>
        <line x1="10" y1="22" x2="14" y2="22"/>
      </svg>
      <span>Ask AI</span>
    </button>
  `,document.body.appendChild(e);const t=document.createElement("div");t.id=g,t.className="ai-response",t.style.display="none";let d=!1,a=null;document.addEventListener("mouseup",n=>{if(e.contains(n.target)||t.contains(n.target))return;const o=window.getSelection(),s=o?.toString().trim();s&&s.length>3&&r.contains(o.anchorNode)?f(o):e.contains(n.target)||p()}),document.addEventListener("keydown",n=>{n.key==="Escape"&&p()});function f(n){const o=n.getRangeAt(0),s=o.getBoundingClientRect();e.style.display="flex",e.style.left=`${s.left+s.width/2-e.offsetWidth/2}px`,e.style.top=`${s.top+window.scrollY-e.offsetHeight-8}px`,d=!0;const u=n.toString().trim(),l=e.querySelector(".ai-popover-btn");a&&l.removeEventListener("click",a),a=()=>m(u,o),l.addEventListener("click",a)}function p(){d&&(e.style.display="none",d=!1)}async function m(n,o){p();const u=document.querySelector("article h1")?.textContent??"Article",l=r.innerText.slice(0,6e3);(o.startContainer.parentElement?.closest("p, li, blockquote, h2, h3, h4, div")||r).after(t),t.style.display="block",t.innerHTML=`<div class="ai-response-header">
      <span class="ai-response-label">AI</span>
      <button class="ai-response-close" aria-label="Close">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
      </button>
    </div>
    <div class="ai-response-body">
      <div class="ai-loading">Loading model...</div>
    </div>`,t.querySelector(".ai-response-close").addEventListener("click",()=>{t.style.display="none"});const v=t.querySelector(".ai-response-body");x(i=>{const c=v.querySelector(".ai-loading");c&&(c.textContent=i)});try{const i=`Explain this passage from the article: "${n}"`;await E(u,l,i,c=>{v.innerHTML=b(c)})}catch(i){v.innerHTML=`<div class="ai-error">Failed: ${i.message}</div>`}}}
