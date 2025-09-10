// This file overwrites the stock UV config.js
self.__uv$config = {
  prefix: "/uv/service/",
  encodeUrl: function(input) {
      if (!input) return input;
      let seed = 1337;
      let output = "";
      for (let i = 0; i < input.length; i++) {
          const xorChar = input.charCodeAt(i) ^ ((seed + i) % 256);
          output += String.fromCharCode(xorChar);
      }
      return encodeURIComponent(output);
  },
  decodeUrl: function(input) {
      if (!input) return input;
      const decoded = decodeURIComponent(input);
      let seed = 1337;
      let output = "";
      for (let i = 0; i < decoded.length; i++) {
          const xorChar = decoded.charCodeAt(i) ^ ((seed + i) % 256);
          output += String.fromCharCode(xorChar);
      }
      return output;
  },
  handler: "https://cdn.jsdelivr.net/npm/@titaniumnetwork-dev/ultraviolet/dist/uv.handler.js",
  client: "https://cdn.jsdelivr.net/npm/@titaniumnetwork-dev/ultraviolet/dist/uv.client.js",
  bundle: "https://cdn.jsdelivr.net/npm/@titaniumnetwork-dev/ultraviolet/dist/uv.bundle.js",
  config: "https://cdn.jsdelivr.net/gh/mehhhofficial/supreme-dollop@latest/uv.config2.js",
  sw: "https://cdn.jsdelivr.net/npm/@titaniumnetwork-dev/ultraviolet/dist/uv.sw.js",
};
