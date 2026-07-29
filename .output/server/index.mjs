globalThis.__nitro_main__ = import.meta.url;
import {
  n as HTTPError,
  r as defineLazyEventHandler,
  t as H3Core,
} from "./_libs/h3+rou3+srvx.mjs";
import { t as HookableCore } from "./_libs/hookable.mjs";
import { t as FastResponse } from "./_libs/srvx.mjs";
//#region #nitro-vite-setup
function lazyService(loader) {
  let promise, mod;
  return {
    fetch(req) {
      if (mod) return mod.fetch(req);
      if (!promise)
        promise = loader().then((_mod) => (mod = _mod.default || _mod));
      return promise.then((mod) => mod.fetch(req));
    },
  };
}
var services = { ["ssr"]: lazyService(() => import("./_ssr/ssr.mjs")) };
globalThis.__nitro_vite_envs__ = services;
//#endregion
//#region #nitro/virtual/public-assets-data
var public_assets_data_default = {
  "/assets/aloo-gobhi-QYA5mmOd.jpg": {
    type: "image/jpeg",
    etag: '"d271-W2H4IdeHaN685filuQuIc5PDc6k"',
    mtime: "2026-07-29T05:54:13.783Z",
    size: 53873,
    path: "../public/assets/aloo-gobhi-QYA5mmOd.jpg",
  },
  "/robots.txt": {
    type: "text/plain; charset=utf-8",
    etag: '"a0-CKGXSIe7TSsqDTmGm/nY1t/o5d0"',
    mtime: "2026-07-29T05:54:14.347Z",
    size: 160,
    path: "../public/robots.txt",
  },
  "/assets/chow-mein-lXlRZ30C.jpg": {
    type: "image/jpeg",
    etag: '"9600-B4+2WwgaWoiH46HALJndp5/unEM"',
    mtime: "2026-07-29T05:54:13.783Z",
    size: 38400,
    path: "../public/assets/chow-mein-lXlRZ30C.jpg",
  },
  "/assets/dal-makhani-C6FpEhWF.jpg": {
    type: "image/jpeg",
    etag: '"e98e-87Z9ELhezy6eD9lrSzutzd7Z8Z4"',
    mtime: "2026-07-29T05:54:13.783Z",
    size: 59790,
    path: "../public/assets/dal-makhani-C6FpEhWF.jpg",
  },
  "/assets/dish._dishId-Bm-mzvcA.js": {
    type: "text/javascript; charset=utf-8",
    etag: '"1508-A3ThdUU7p/E//KisRkQlwQsf9eE"',
    mtime: "2026-07-29T05:54:13.783Z",
    size: 5384,
    path: "../public/assets/dish._dishId-Bm-mzvcA.js",
  },
  "/assets/green-salad-CuHW0-z8.jpg": {
    type: "image/jpeg",
    etag: '"115ab-HfVMFqyYDCvp86qxVvsQVro1AHA"',
    mtime: "2026-07-29T05:54:13.783Z",
    size: 71083,
    path: "../public/assets/green-salad-CuHW0-z8.jpg",
  },
  "/assets/gulab-jamun-BgoGJ3_v.jpg": {
    type: "image/jpeg",
    etag: '"b7ed-bISITDAAbMmUnclrkBtJR71ML/I"',
    mtime: "2026-07-29T05:54:13.783Z",
    size: 47085,
    path: "../public/assets/gulab-jamun-BgoGJ3_v.jpg",
  },
  "/assets/hara-bhara-kabab-Beqcteo0.jpg": {
    type: "image/jpeg",
    etag: '"17fbc-XIyG7HNQ13+uX6QSkDiV3ApDEaQ"',
    mtime: "2026-07-29T05:54:13.783Z",
    size: 98236,
    path: "../public/assets/hara-bhara-kabab-Beqcteo0.jpg",
  },
  "/assets/index-DfSw7QMh.js": {
    type: "text/javascript; charset=utf-8",
    etag: '"63aa7-pL+FUNEiDD8kdMA3oXaLU6DKyj0"',
    mtime: "2026-07-29T05:54:13.783Z",
    size: 408231,
    path: "../public/assets/index-DfSw7QMh.js",
  },
  "/assets/jeera-rice-BERsqeaV.jpg": {
    type: "image/jpeg",
    etag: '"e046-VHsvGAjuMekz645QXAr/cuAsOU8"',
    mtime: "2026-07-29T05:54:13.783Z",
    size: 57414,
    path: "../public/assets/jeera-rice-BERsqeaV.jpg",
  },
  "/assets/lime-soda-CSLWzT9U.jpg": {
    type: "image/jpeg",
    etag: '"9b09-HTD9qfdpM61NobDiIjRJBkg3xLc"',
    mtime: "2026-07-29T05:54:13.783Z",
    size: 39689,
    path: "../public/assets/lime-soda-CSLWzT9U.jpg",
  },
  "/assets/mango-lassi-CrB4sjjk.jpg": {
    type: "image/jpeg",
    etag: '"9415-kIEg3VdXIfPCoTQCJ6YjtDwBaBA"',
    mtime: "2026-07-29T05:54:13.783Z",
    size: 37909,
    path: "../public/assets/mango-lassi-CrB4sjjk.jpg",
  },
  "/assets/masala-chai-CThnpQTT.jpg": {
    type: "image/jpeg",
    etag: '"b7e8-0+kGErQ6+c5yzTEbgl8K/wBVAA8"',
    mtime: "2026-07-29T05:54:13.783Z",
    size: 47080,
    path: "../public/assets/masala-chai-CThnpQTT.jpg",
  },
  "/assets/masala-dosa-BbuxB91u.jpg": {
    type: "image/jpeg",
    etag: '"10136-Y1uQqZmgcDC1pZfOnwb9OixDXnU"',
    mtime: "2026-07-29T05:54:13.783Z",
    size: 65846,
    path: "../public/assets/masala-dosa-BbuxB91u.jpg",
  },
  "/assets/masala-papad-LR1oieeE.jpg": {
    type: "image/jpeg",
    etag: '"e9fd-mVQQWVlUsPThuf3zbk2q4X5e28s"',
    mtime: "2026-07-29T05:54:13.783Z",
    size: 59901,
    path: "../public/assets/masala-papad-LR1oieeE.jpg",
  },
  "/assets/paneer-butter-masala-BcJWXwGf.jpg": {
    type: "image/jpeg",
    etag: '"b9dd-hOChQyaegNWVeSUveMIMF4zKwbM"',
    mtime: "2026-07-29T05:54:13.783Z",
    size: 47581,
    path: "../public/assets/paneer-butter-masala-BcJWXwGf.jpg",
  },
  "/assets/paneer-tikka-C8Zhbtdo.jpg": {
    type: "image/jpeg",
    etag: '"12895-jW4r7UKwvezhccB8GkJECjDAG9s"',
    mtime: "2026-07-29T05:54:13.783Z",
    size: 75925,
    path: "../public/assets/paneer-tikka-C8Zhbtdo.jpg",
  },
  "/assets/rasmalai-CaeAnm87.jpg": {
    type: "image/jpeg",
    etag: '"a5d3-S6OOYqmC+7z559H3px2vX4zREvU"',
    mtime: "2026-07-29T05:54:13.783Z",
    size: 42451,
    path: "../public/assets/rasmalai-CaeAnm87.jpg",
  },
  "/assets/routes-DzVLoBkQ.js": {
    type: "text/javascript; charset=utf-8",
    etag: '"21e1-5Gi2RHdZbFe5VD4YoCkJSInIFvI"',
    mtime: "2026-07-29T05:54:13.783Z",
    size: 8673,
    path: "../public/assets/routes-DzVLoBkQ.js",
  },
  "/assets/styles-BZLnxJ7Q.css": {
    type: "text/css; charset=utf-8",
    etag: '"133bf-CbGeiTN9WqC4zSnx9f/Q/a+P9+E"',
    mtime: "2026-07-29T05:54:13.783Z",
    size: 78783,
    path: "../public/assets/styles-BZLnxJ7Q.css",
  },
  "/assets/tandoori-mushroom-CoaSJHHe.jpg": {
    type: "image/jpeg",
    etag: '"11b60-+oVLYXqc4IcyI9VgmeE9wvdXXrI"',
    mtime: "2026-07-29T05:54:13.783Z",
    size: 72544,
    path: "../public/assets/tandoori-mushroom-CoaSJHHe.jpg",
  },
  "/assets/thali-DRJnKMuZ.jpg": {
    type: "image/jpeg",
    etag: '"10d0f-WQ5M63IUhFQIzKrOyv4RBJPGb2Q"',
    mtime: "2026-07-29T05:54:13.783Z",
    size: 68879,
    path: "../public/assets/thali-DRJnKMuZ.jpg",
  },
  "/assets/variant-control-KCAME-SW.js": {
    type: "text/javascript; charset=utf-8",
    etag: '"85b-XN11e7J3bcNbEZF61cO1RExqsN4"',
    mtime: "2026-07-29T05:54:13.783Z",
    size: 2139,
    path: "../public/assets/variant-control-KCAME-SW.js",
  },
  "/favicon.ico": {
    type: "image/vnd.microsoft.icon",
    etag: '"4f95-3RXc3p2mhEAs1WBwaIvE0Y0uu0Y"',
    mtime: "2026-07-29T05:54:14.347Z",
    size: 20373,
    path: "../public/favicon.ico",
  },
  "/assets/butter-naan-g4KI3I-l.jpg": {
    type: "image/jpeg",
    etag: '"e683-oGID9LDRiQX88fFj/PPHQEd9dY8"',
    mtime: "2026-07-29T05:54:13.783Z",
    size: 59011,
    path: "../public/assets/butter-naan-g4KI3I-l.jpg",
  },
  "/assets/veg-kolhapuri-DPDKWeS1.jpg": {
    type: "image/jpeg",
    etag: '"10045-cBmMpqYARgUKB9jLmueHcsng2PM"',
    mtime: "2026-07-29T05:54:13.783Z",
    size: 65605,
    path: "../public/assets/veg-kolhapuri-DPDKWeS1.jpg",
  },
  "/assets/veg-manchurian-C1ElVmIy.jpg": {
    type: "image/jpeg",
    etag: '"df77-HCu/x+TGR5/n8EssWyqCh70sUPc"',
    mtime: "2026-07-29T05:54:13.783Z",
    size: 57207,
    path: "../public/assets/veg-manchurian-C1ElVmIy.jpg",
  },
};
//#endregion
//#region #nitro/virtual/public-assets
var publicAssetBases = {};
function isPublicAssetURL(id = "") {
  if (public_assets_data_default[id]) return true;
  for (const base in publicAssetBases) if (id.startsWith(base)) return true;
  return false;
}
//#endregion
//#region node_modules/.pnpm/nitro@3.0.260603-beta_chokidar@5.0.0_jiti@2.7.0_vite@8.1.5_@types+node@22.20.1_jiti@2.7.0_/node_modules/nitro/dist/runtime/internal/route-rules.mjs
var headers = (m) =>
  function headersRouteRule(event) {
    for (const [key, value] of Object.entries(m.options || {}))
      event.res.headers.set(key, value);
  };
//#endregion
//#region #nitro/virtual/routing
var findRouteRules = /* @__PURE__ */ (() => {
  const $0 = [
    {
      name: "headers",
      route: "/assets/**",
      handler: headers,
      options: { "cache-control": "public, max-age=31536000, immutable" },
    },
  ];
  return (m, p) => {
    let r = [];
    if (p.charCodeAt(p.length - 1) === 47) p = p.slice(0, -1) || "/";
    let s = p.split("/");
    if (s.length > 1) {
      if (s[1] === "assets")
        r.unshift({
          data: $0,
          params: { _: s.slice(2).join("/") },
        });
    }
    return r;
  };
})();
var _lazy_YCMzf7 = defineLazyEventHandler(
  () => import("./_chunks/ssr-renderer.mjs"),
);
var findRoute = /* @__PURE__ */ (() => {
  const data = {
    route: "/**",
    handler: _lazy_YCMzf7,
  };
  return (_m, p) => {
    return {
      data,
      params: { _: p.slice(1) },
    };
  };
})();
[].filter(Boolean);
//#endregion
//#region node_modules/.pnpm/nitro@3.0.260603-beta_chokidar@5.0.0_jiti@2.7.0_vite@8.1.5_@types+node@22.20.1_jiti@2.7.0_/node_modules/nitro/dist/runtime/internal/error/prod.mjs
var errorHandler = (error, event) => {
  const res = defaultHandler(error, event);
  return new FastResponse(
    typeof res.body === "string" ? res.body : JSON.stringify(res.body, null, 2),
    res,
  );
};
function defaultHandler(error, event) {
  const unhandled = error.unhandled ?? !HTTPError.isError(error);
  const { status = 500, statusText = "" } = unhandled ? {} : error;
  if (status === 404) {
    const url = event.url || new URL(event.req.url);
    const baseURL = "/";
    if (/^\/[^/]/.test(baseURL) && !url.pathname.startsWith(baseURL))
      return {
        status: 302,
        headers: new Headers({
          location: `${baseURL}${url.pathname.slice(1)}${url.search}`,
        }),
      };
  }
  const headers = new Headers(unhandled ? {} : error.headers);
  headers.set("content-type", "application/json; charset=utf-8");
  return {
    status,
    statusText,
    headers,
    body: {
      error: true,
      ...(unhandled
        ? {
            status,
            unhandled: true,
          }
        : typeof error.toJSON === "function"
          ? error.toJSON()
          : {
              status,
              statusText,
              message: error.message,
            }),
    },
  };
}
//#endregion
//#region #nitro/virtual/error-handler
var errorHandlers = [errorHandler];
async function error_handler_default(error, event) {
  for (const handler of errorHandlers)
    try {
      const response = await handler(error, event, { defaultHandler });
      if (response) return response;
    } catch (error) {
      console.error(error);
    }
}
//#endregion
//#region #nitro/virtual/app
function createNitroApp() {
  const captureError = (error, errorCtx) => {
    if (errorCtx?.event) {
      const errors = errorCtx.event.req.context?.nitro?.errors;
      if (errors)
        errors.push({
          error,
          context: errorCtx,
        });
    }
  };
  const h3App = createH3App({
    onError(error, event) {
      return error_handler_default(error, event);
    },
  });
  let appHandler = (req) => {
    req.context ||= {};
    req.context.nitro = req.context.nitro || { errors: [] };
    return h3App.fetch(req);
  };
  return {
    fetch: appHandler,
    h3: h3App,
    hooks: void 0,
    captureError,
  };
}
function createH3App(config) {
  const h3App = new H3Core(config);
  h3App["~findRoute"] = (event) =>
    findRoute(event.req.method, event.url.pathname);
  h3App["~getMiddleware"] = (event, route) => {
    const pathname = event.url.pathname;
    const method = event.req.method;
    const middleware = [];
    const routeRules = getRouteRules(method, pathname);
    event.context.routeRules = routeRules?.routeRules;
    if (routeRules?.routeRuleMiddleware.length)
      middleware.push(...routeRules.routeRuleMiddleware);
    if (route?.data?.middleware?.length)
      middleware.push(...route.data.middleware);
    return middleware;
  };
  return h3App;
}
//#endregion
//#region node_modules/.pnpm/nitro@3.0.260603-beta_chokidar@5.0.0_jiti@2.7.0_vite@8.1.5_@types+node@22.20.1_jiti@2.7.0_/node_modules/nitro/dist/runtime/internal/app.mjs
var APP_ID = "default";
function useNitroApp() {
  let instance = useNitroApp._instance;
  if (instance) return instance;
  instance = useNitroApp._instance = createNitroApp();
  globalThis.__nitro__ = globalThis.__nitro__ || {};
  globalThis.__nitro__[APP_ID] = instance;
  return instance;
}
function useNitroHooks() {
  const nitroApp = useNitroApp();
  const hooks = nitroApp.hooks;
  if (hooks) return hooks;
  return (nitroApp.hooks = new HookableCore());
}
function getRouteRules(method, pathname) {
  const m = findRouteRules(method, pathname);
  if (!m?.length) return { routeRuleMiddleware: [] };
  const routeRules = {};
  for (const layer of m)
    for (const rule of layer.data) {
      const currentRule = routeRules[rule.name];
      if (currentRule) {
        if (rule.options === false) {
          delete routeRules[rule.name];
          continue;
        }
        if (
          typeof currentRule.options === "object" &&
          typeof rule.options === "object"
        )
          currentRule.options = {
            ...currentRule.options,
            ...rule.options,
          };
        else currentRule.options = rule.options;
        currentRule.route = rule.route;
        currentRule.params = {
          ...currentRule.params,
          ...layer.params,
        };
      } else if (rule.options !== false)
        routeRules[rule.name] = {
          ...rule,
          params: layer.params,
        };
    }
  const middleware = [];
  const orderedRules = Object.values(routeRules).sort(
    (a, b) => (a.handler?.order || 0) - (b.handler?.order || 0),
  );
  for (const rule of orderedRules) {
    if (rule.options === false || !rule.handler) continue;
    middleware.push(rule.handler(rule));
  }
  return {
    routeRules,
    routeRuleMiddleware: middleware,
  };
}
//#endregion
//#region node_modules/.pnpm/nitro@3.0.260603-beta_chokidar@5.0.0_jiti@2.7.0_vite@8.1.5_@types+node@22.20.1_jiti@2.7.0_/node_modules/nitro/dist/presets/cloudflare/runtime/_module-handler.mjs
function createHandler(hooks) {
  const nitroApp = useNitroApp();
  const nitroHooks = useNitroHooks();
  return {
    async fetch(request, env, context) {
      globalThis.__env__ = env;
      augmentReq(request, {
        env,
        context,
      });
      const ctxExt = {};
      const url = new URL(request.url);
      if (hooks.fetch) {
        const res = await hooks.fetch(request, env, context, url, ctxExt);
        if (res) return res;
      }
      return await nitroApp.fetch(request);
    },
    scheduled(controller, env, context) {
      globalThis.__env__ = env;
      context.waitUntil(
        nitroHooks.callHook("cloudflare:scheduled", {
          controller,
          env,
          context,
        }) || Promise.resolve(),
      );
    },
    email(message, env, context) {
      globalThis.__env__ = env;
      context.waitUntil(
        nitroHooks.callHook("cloudflare:email", {
          message,
          event: message,
          env,
          context,
        }) || Promise.resolve(),
      );
    },
    queue(batch, env, context) {
      globalThis.__env__ = env;
      context.waitUntil(
        nitroHooks.callHook("cloudflare:queue", {
          batch,
          event: batch,
          env,
          context,
        }) || Promise.resolve(),
      );
    },
    tail(traces, env, context) {
      globalThis.__env__ = env;
      context.waitUntil(
        nitroHooks.callHook("cloudflare:tail", {
          traces,
          env,
          context,
        }) || Promise.resolve(),
      );
    },
    trace(traces, env, context) {
      globalThis.__env__ = env;
      context.waitUntil(
        nitroHooks.callHook("cloudflare:trace", {
          traces,
          env,
          context,
        }) || Promise.resolve(),
      );
    },
  };
}
function augmentReq(cfReq, ctx) {
  const req = cfReq;
  req.ip = cfReq.headers.get("cf-connecting-ip") || void 0;
  req.runtime ??= { name: "cloudflare" };
  req.runtime.cloudflare = {
    ...req.runtime.cloudflare,
    ...ctx,
  };
  req.waitUntil = ctx.context?.waitUntil.bind(ctx.context);
}
//#endregion
//#region node_modules/.pnpm/nitro@3.0.260603-beta_chokidar@5.0.0_jiti@2.7.0_vite@8.1.5_@types+node@22.20.1_jiti@2.7.0_/node_modules/nitro/dist/presets/cloudflare/runtime/cloudflare-module.mjs
var cloudflare_module_default = createHandler({
  fetch(cfRequest, env, context, url) {
    if (env.ASSETS && isPublicAssetURL(url.pathname))
      return env.ASSETS.fetch(cfRequest);
  },
});
//#endregion
export { cloudflare_module_default as default };
