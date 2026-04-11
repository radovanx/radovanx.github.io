function d(){return typeof window>"u"?null:window.LanguageModel?window.LanguageModel:window.ai?.languageModel?window.ai.languageModel:null}function b(){return d()!==null}let i=null,c=0,a=null;function C(e){a=e}async function w(){return c>=8&&(i=null,c=0),i||(i=h().catch(e=>{throw i=null,e})),i}async function h(){const e=d();if(!e)throw new Error("Chrome AI not available — enable at chrome://flags/#optimization-guide-on-device-model");a&&a("Checking Chrome AI...");const o=await e.availability();if(o==="unavailable")throw new Error(`Chrome AI unavailable — enable both flags and relaunch:
chrome://flags/#optimization-guide-on-device-model
chrome://flags/#prompt-api-for-gemini-nano`);["after-download","downloadable","downloading"].includes(o)?a&&a("Downloading Chrome AI model..."):a&&a("Starting Chrome AI...");const l=await e.create({temperature:.7,topK:3});return a&&a("Ready"),l}async function v(e,o,l,u){const f=await w(),p=`You are a helpful wiki assistant. Answer concisely based on this article.

Article: "${e}"

Content:
${o.slice(0,4e3)}

Question: ${l}`;let n="";try{const m=f.promptStreaming(p);let g=!0,r=!1,s="";for await(const t of m)g?(n=t,s=t,g=!1):(!r&&t.startsWith(s)&&(r=!0),r?n=t:n+=t,s=t),u(n)}catch{n=await f.prompt(p),u(n)}return c++,n}function y(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/\n\n/g,"</p><p>").replace(/\n/g,"<br>").replace(/`([^`]+)`/g,"<code>$1</code>").replace(/\*\*([^*]+)\*\*/g,"<strong>$1</strong>").replace(/^/,"<p>").replace(/$/,"</p>")}export{v as a,y as f,b as h,C as s};
