function c(){return typeof window>"u"?null:window.LanguageModel?window.LanguageModel:window.ai?.languageModel?window.ai.languageModel:null}function f(){return c()!==null}let i=null,a=null;function w(e){a=e}async function p(){return i||(i=d()),i}async function d(){const e=c();if(!e)throw new Error("Chrome AI not available — enable at chrome://flags/#optimization-guide-on-device-model");a&&a("Checking Chrome AI...");const n=await e.availability();if(n==="unavailable")throw new Error("Chrome AI unavailable — enable at chrome://flags/#optimization-guide-on-device-model");n==="after-download"||n==="downloading"?a&&a("Downloading Chrome AI model..."):a&&a("Starting Chrome AI...");const t=await e.create({temperature:.7,topK:3});return a&&a("Ready"),t}async function m(e,n,t,r){const l=await p(),s=`You are a helpful wiki assistant. Answer concisely based on this article.

Article: "${e}"

Content:
${n.slice(0,4e3)}

Question: ${t}`;let o="";try{const u=l.promptStreaming(s);for await(const g of u)o=g,r(o)}catch{o=await l.prompt(s),r(o)}return o}function h(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/\n\n/g,"</p><p>").replace(/\n/g,"<br>").replace(/`([^`]+)`/g,"<code>$1</code>").replace(/\*\*([^*]+)\*\*/g,"<strong>$1</strong>").replace(/^/,"<p>").replace(/$/,"</p>")}export{m as a,h as f,f as h,w as s};
