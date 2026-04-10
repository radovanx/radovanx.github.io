import{h as m,s as g,a as f}from"./ai-engine.DfOLA0Be.js";const l="ai-article-chat";document.addEventListener("astro:page-load",v);function v(){const s=document.querySelector(".prose");if(!s||!m())return;document.getElementById(l)?.remove();const e=document.createElement("div");e.id=l,e.className="ai-chat",e.innerHTML=`
    <div class="ai-chat-header">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
        <path d="M12 2a8 8 0 0 1 8 8c0 3.4-2.1 6.3-5 7.5V20a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-2.5C6.1 16.3 4 13.4 4 10a8 8 0 0 1 8-8z"/>
      </svg>
      <span>Ask about this article</span>
    </div>
    <div class="ai-chat-messages" id="ai-chat-messages"></div>
    <form class="ai-chat-form" id="ai-chat-form">
      <input
        type="text"
        class="ai-chat-input"
        placeholder="Ask a question..."
        autocomplete="off"
      />
      <button type="submit" class="ai-chat-submit" aria-label="Send">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
          <line x1="22" y1="2" x2="11" y2="13"/>
          <polygon points="22 2 15 22 11 13 2 9 22 2"/>
        </svg>
      </button>
    </form>
  `,s.after(e);const d=e.querySelector("#ai-chat-form"),n=e.querySelector(".ai-chat-input"),t=e.querySelector("#ai-chat-messages"),u=document.querySelector("article h1")?.textContent??"Article",p=s.innerText.slice(0,6e3);d.addEventListener("submit",async h=>{h.preventDefault();const o=n.value.trim();if(!o)return;n.value="",n.disabled=!0;const r=document.createElement("div");r.className="ai-chat-msg ai-chat-msg--user",r.textContent=o,t.appendChild(r);const a=document.createElement("div");a.className="ai-chat-msg ai-chat-msg--ai",a.innerHTML='<span class="ai-loading">Loading model...</span>',t.appendChild(a),t.scrollTop=t.scrollHeight,g(i=>{const c=a.querySelector(".ai-loading");c&&(c.textContent=i)});try{await f(u,p,o,i=>{a.innerHTML=y(i),t.scrollTop=t.scrollHeight})}catch(i){a.innerHTML=`<span class="ai-error">Failed: ${i.message}</span>`}n.disabled=!1,n.focus()})}function y(s){return s.replace(/\n\n/g,"</p><p>").replace(/\n/g,"<br>").replace(/`([^`]+)`/g,"<code>$1</code>").replace(/\*\*([^*]+)\*\*/g,"<strong>$1</strong>").replace(/^/,"<p>").replace(/$/,"</p>")}
