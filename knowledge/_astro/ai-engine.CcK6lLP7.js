function d(){return typeof window<"u"&&"LanguageModel"in window}let t=null,a=null;function f(e){a=e}async function p(){return t||(t=u()),t}async function u(){if(!window.LanguageModel)throw new Error("Chrome AI not available — enable at chrome://flags/#optimization-guide-on-device-model");a&&a("Checking Chrome AI...");const e=await window.LanguageModel.availability();if(e==="unavailable")throw new Error("Chrome AI unavailable — enable at chrome://flags/#optimization-guide-on-device-model");e==="after-download"||e==="downloading"?a&&a("Downloading Chrome AI model..."):a&&a("Starting Chrome AI...");const o=await window.LanguageModel.create({temperature:.7,topK:3});return a&&a("Ready"),o}async function w(e,o,s,i){const r=await p(),l=`You are a helpful wiki assistant. Answer concisely based on this article.

Article: "${e}"

Content:
${o.slice(0,4e3)}

Question: ${s}`;let n="";try{const c=r.promptStreaming(l);for await(const g of c)n=g,i(n)}catch{n=await r.prompt(l),i(n)}return n}function m(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/\n\n/g,"</p><p>").replace(/\n/g,"<br>").replace(/`([^`]+)`/g,"<code>$1</code>").replace(/\*\*([^*]+)\*\*/g,"<strong>$1</strong>").replace(/^/,"<p>").replace(/$/,"</p>")}export{w as a,m as f,d as h,f as s};
