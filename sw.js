if(!self.define){let e,i={};const c=(c,r)=>(c=new URL(c+".js",r).href,i[c]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=c,e.onload=i,document.head.appendChild(e)}else e=c,importScripts(c),i()})).then((()=>{let e=i[c];if(!e)throw new Error(`Module ${c} didn’t register its module`);return e})));self.define=(r,a)=>{const f=e||("document"in self?document.currentScript.src:"")||location.href;if(i[f])return;let d={};const o=e=>c(e,f),s={module:{uri:f},exports:d,require:o};i[f]=Promise.all(r.map((e=>s[e]||o(e)))).then((e=>(a(...e),d)))}}define(["./workbox-8a9ef17b"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"1.png",revision:"c053eb36e58cfbbebeaadde13590065b"},{url:"2.png",revision:"2ba9358754e4feb0f727b49283d461f3"},{url:"app.js",revision:"89ffce599698d5063719df08cfa8e5ec"},{url:"img/001-carro-de-la-carretilla.png",revision:"be8fb4793f6c22c58c3a800bcf2a5fcf"},{url:"img/CervezaTecateLata12.jpg",revision:"9b0fc012cf6102c1dcf3a1c935d0efdf"},{url:"img/CervezaTecateLight.jpg",revision:"41aaebda5283818095460bf7658e6cd2"},{url:"img/corona12pzs.jpg",revision:"52a43d61122c8fb7611bcdce96e2db27"},{url:"img/corona6pzas.jpg",revision:"dfac215a8864d2df56aca202978f3f22"},{url:"img/corona6pzas330mllata.jpg",revision:"1e8b49617f82306e1dec7702ca09b3fe"},{url:"img/efectos.png",revision:"9028d1846206cb8ebc6478aa25479219"},{url:"img/fondo.jpg",revision:"8e489f739bc26ddde74b3ee67490c988"},{url:"img/fondo1.jpg",revision:"7a5f325d42db12b7a3d8c9b2efb9ed02"},{url:"img/logo cer.png",revision:"a43504da6a877a97012599567489f8f6"},{url:"img/mensaje.png",revision:"00f4c9cec43ab39b32ff8e944d4810a4"},{url:"img/responsive.png",revision:"6bf8f373b772c4aeff264d6c654965e0"},{url:"img/salon.jpg",revision:"49c5df78c070efa7f6b85ddfcdc6a6b5"},{url:"img/tec6.jpg",revision:"323f8102b94827767e02f441939af7ed"},{url:"img/tecate.jpg",revision:"e9f56eec90c70e60024b20c7dcad9d22"},{url:"img/teclado.jpg",revision:"294dd74136400f3ed0f8d96eadd2a931"},{url:"img/teju.png",revision:"016fc55820133e7e3aa51860c13467c6"},{url:"img/tejup.jpg",revision:"2551d76124ccb4e5176a6fbe23fed16a"},{url:"img/vick6.jpg",revision:"09a80b4cb02a85a888767b3c50790e67"},{url:"img/victoria 6pzas.jpg",revision:"b3fd6dae0eb69be4f256841497969e0f"},{url:"img/victoria6pzaslata.jpg",revision:"23b2e6fc226c2c732e529e5a6aa57936"},{url:"img/victoriavicky24pzas.jpg",revision:"7833e6ec61668db2b9059d7c94ade446"},{url:"index.html",revision:"0ed08b775f08c14aba1c6b5b607db21b"},{url:"manifest.json",revision:"43e7e8ed31ba44b69ef0a92482ff13d4"},{url:"modal.js",revision:"13c985c6975f2fd190eabff27c38e021"},{url:"stock.js",revision:"5ac1d704c1ff03c66b4040ff9adc2f9e"},{url:"styles.css",revision:"c2765d35bf02e33f6732adddb0655d9a"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]})}));
//# sourceMappingURL=sw.js.map
