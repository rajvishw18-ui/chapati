//#region node_modules/.nitro/vite/services/ssr/assets/_tanstack-start-manifest_v-DBt_smoC.js
var tsrStartManifest = () => ({
  routes: {
    __root__: {
      filePath: "/vercel/sandbox/primary/src/routes/__root.tsx",
      children: ["/", "/dish/$dishId"],
      preloads: ["/assets/index-DfSw7QMh.js"],
      scripts: [
        {
          attrs: {
            type: "module",
            async: !0,
            src: "/assets/index-DfSw7QMh.js",
          },
        },
      ],
    },
    "/": {
      filePath: "/vercel/sandbox/primary/src/routes/index.tsx",
      children: void 0,
      preloads: [
        "/assets/routes-DzVLoBkQ.js",
        "/assets/variant-control-KCAME-SW.js",
      ],
    },
    "/dish/$dishId": {
      filePath: "/vercel/sandbox/primary/src/routes/dish.$dishId.tsx",
      children: void 0,
      preloads: [
        "/assets/dish._dishId-Bm-mzvcA.js",
        "/assets/variant-control-KCAME-SW.js",
      ],
    },
  },
});
//#endregion
export { tsrStartManifest };
