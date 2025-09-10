// This file overwrites the stock UV config.js

self.__uv$config = {
  prefix: "/files/mp3/",
  encodeUrl: (e) => {if(!e)return e;let t="";for(let r=0;r<e.length;r++)t+=r?String.fromCharCode(e.charCodeAt(r)^3):e[r];return encodeURIComponent(t)},
  decodeUrl: (e) => {if(!e)return e;let[t,...r]=e.split("?"),n="",u=decodeURIComponent(t);for(let a=0;a<u.length;a++)n+=a?String.fromCharCode(u.charCodeAt(a)^3):u[a];return n+(r.length?"?"+r.join("?"):"")},
  handler: "https://cdn.jsdelivr.net/npm/@titaniumnetwork-dev/ultraviolet/dist/uv.handler.js",
  client: "https://cdn.jsdelivr.net/npm/@titaniumnetwork-dev/ultraviolet/dist/uv.client.js",
  bundle: "https://cdn.jsdelivr.net/npm/@titaniumnetwork-dev/ultraviolet/dist/uv.bundle.js",
  config: "https://cdn.jsdelivr.net/gh/mehhhofficial/supreme-dollop@latest/uv.config3.js",
  sw: "https://cdn.jsdelivr.net/npm/@titaniumnetwork-dev/ultraviolet/dist/uv.sw.js",
};
