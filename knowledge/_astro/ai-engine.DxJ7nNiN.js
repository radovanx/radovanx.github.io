import{_ as m}from"./Base.astro_astro_type_script_index_0_lang.uUC9y4Rf.js";function f(){return"gpu"in navigator}let s=null,o=null;function _(t){o=t}async function p(){if(!f())throw new Error("WebGPU not available");return s||(s=w()),s}async function w(){const{CreateMLCEngine:t}=await m(async()=>{const{CreateMLCEngine:e}=await import("./index.Djdld9tR.js");return{CreateMLCEngine:e}},[]);return await t("Llama-3.2-1B-Instruct-q4f16_1-MLC",{initProgressCallback:e=>{const n=typeof e=="string"?e:e?.text??"Loading model...";o&&o(n)}})}async function C(t,r,e,n){const c=await p(),l=`You are a helpful assistant for a knowledge wiki. You answer questions about articles concisely and accurately. Use the article content as your primary source.

Article: "${t}"

Content:
${r.slice(0,4e3)}`,u=await c.chat.completions.create({messages:[{role:"system",content:l},{role:"user",content:e}],stream:!0,max_tokens:512,temperature:.7});let a="";for await(const g of u){const i=g.choices?.[0]?.delta?.content??"";i&&(a+=i,n(a))}return a}export{C as a,f as h,_ as s};
