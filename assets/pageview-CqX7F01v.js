import{L as o,M as n}from"./app-Brb64NgT.js";const s=async()=>{const t=o();try{const{pageviewCount:e}=await n(()=>import("./app-Brb64NgT.js").then(r=>r.N),[]);return e({serverURL:t.serverURL})}catch{console.error("@waline/client is not installed!")}};export{s as updatePageview};