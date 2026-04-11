function u(){return typeof window>"u"?null:window.LanguageModel?window.LanguageModel:window.ai?.languageModel?window.ai.languageModel:null}function w(){return u()!==null}let o=null,l=0,a=null;function m(e){a=e}async function f(){return l>=8&&(o=null,l=0),o||(o=d().catch(e=>{throw o=null,e})),o}async function d(){const e=u();if(!e)throw new Error("Chrome AI not available — enable at chrome://flags/#optimization-guide-on-device-model");a&&a("Checking Chrome AI...");const n=await e.availability();if(n==="unavailable")throw new Error("Chrome AI unavailable — enable at chrome://flags/#optimization-guide-on-device-model");n==="after-download"||n==="downloading"?a&&a("Downloading Chrome AI model..."):a&&a("Starting Chrome AI...");const i=await e.create({temperature:.7,topK:3});return a&&a("Ready"),i}async function h(e,n,i,r){const s=await f(),c=`You are a helpful wiki assistant. Answer concisely based on this article.

Article: "${e}"

Content:
${n.slice(0,4e3)}

Question: ${i}`;let t="";try{const g=s.promptStreaming(c);for await(const p of g)t=p,r(t)}catch{t=await s.prompt(c),r(t)}return l++,t}function b(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/\n\n/g,"</p><p>").replace(/\n/g,"<br>").replace(/`([^`]+)`/g,"<code>$1</code>").replace(/\*\*([^*]+)\*\*/g,"<strong>$1</strong>").replace(/^/,"<p>").replace(/$/,"</p>")}export{h as a,b as f,w as h,m as s};
