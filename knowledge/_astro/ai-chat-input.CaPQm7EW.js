import{s as y,a as k,f as C,b as E}from"./ai-engine.CquYftIr.js";const p="ai-article-chat",g=`<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
  <line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>
</svg>`,L=`<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
  <rect x="6" y="6" width="12" height="12" rx="2"/>
</svg>`;v();document.addEventListener("astro:page-load",v);function v(){const n=document.querySelector(".prose");if(!n)return;document.getElementById(p)?.remove();const t=document.createElement("div");t.id=p,t.className="ai-chat",t.innerHTML=`
    <div class="ai-chat-header">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
        <path d="M12 2a8 8 0 0 1 8 8c0 3.4-2.1 6.3-5 7.5V20a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-2.5C6.1 16.3 4 13.4 4 10a8 8 0 0 1 8-8z"/>
      </svg>
      <span>Ask about this article</span>
    </div>
    <div class="ai-chat-messages" id="ai-chat-messages"></div>
    <form class="ai-chat-form" id="ai-chat-form">
      <input type="text" class="ai-chat-input" placeholder="Ask a question..." autocomplete="off" />
      <button type="submit" class="ai-chat-submit" aria-label="Send">${g}</button>
    </form>
  `,n.after(t);const d=t.querySelector("#ai-chat-form"),r=t.querySelector(".ai-chat-input"),e=t.querySelector(".ai-chat-submit"),i=t.querySelector("#ai-chat-messages"),f=document.querySelector("article h1")?.textContent??"Article",b=n.innerText.slice(0,3e3);let l=!1;function h(a){l=a,r.disabled=a,e.disabled=!a&&!1,a?(e.innerHTML=L,e.setAttribute("aria-label","Stop"),e.classList.add("ai-chat-submit--loading"),e.type="button"):(e.innerHTML=g,e.setAttribute("aria-label","Send"),e.classList.remove("ai-chat-submit--loading"),e.type="submit",e.disabled=!1)}e.addEventListener("click",a=>{l&&(a.preventDefault(),E())}),d.addEventListener("submit",async a=>{a.preventDefault();const c=r.value.trim();if(!c||l)return;r.value="",h(!0);const u=document.createElement("div");u.className="ai-chat-msg ai-chat-msg--user",u.textContent=c,i.appendChild(u);const s=document.createElement("div");s.className="ai-chat-msg ai-chat-msg--ai",s.innerHTML='<span class="ai-loading">Thinking...</span>',i.appendChild(s),i.scrollTop=i.scrollHeight,y(o=>{const m=s.querySelector(".ai-loading");m&&(m.textContent=o)});try{await k(f,b,c,o=>{s.innerHTML=C(o),i.scrollTop=i.scrollHeight})}catch(o){s.innerHTML=`<span class="ai-error">${S(o.message)}</span>
        <button class="ai-retry-btn">Retry</button>`,s.querySelector(".ai-retry-btn").addEventListener("click",()=>{s.remove(),r.value=c,d.dispatchEvent(new Event("submit"))})}h(!1),r.focus()})}function S(n){return n.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}
