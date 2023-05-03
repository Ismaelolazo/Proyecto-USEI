globalThis._importMeta_={url:import.meta.url,env:process.env};import 'file://C:/Users/OMEN/Desktop/TempsVUe/node_modules/node-fetch-native/dist/polyfill.mjs';
import { Server } from 'http';
import { tmpdir } from 'os';
import { join } from 'path';
import { mkdirSync } from 'fs';
import { parentPort, threadId } from 'worker_threads';
import { provider, isWindows } from 'file://C:/Users/OMEN/Desktop/TempsVUe/node_modules/std-env/dist/index.mjs';
import { eventHandler, setHeaders, sendRedirect, defineEventHandler, handleCacheHeaders, createEvent, getRequestHeader, getRequestHeaders, setResponseHeader, createError, createApp, createRouter as createRouter$1, lazyEventHandler, toNodeListener, getQuery } from 'file://C:/Users/OMEN/Desktop/TempsVUe/node_modules/h3/dist/index.mjs';
import { createRenderer } from 'file://C:/Users/OMEN/Desktop/TempsVUe/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import devalue from 'file://C:/Users/OMEN/Desktop/TempsVUe/node_modules/@nuxt/devalue/dist/devalue.mjs';
import { parseURL, withQuery, joinURL, withLeadingSlash, withoutTrailingSlash } from 'file://C:/Users/OMEN/Desktop/TempsVUe/node_modules/ufo/dist/index.mjs';
import destr from 'file://C:/Users/OMEN/Desktop/TempsVUe/node_modules/destr/dist/index.mjs';
import { snakeCase } from 'file://C:/Users/OMEN/Desktop/TempsVUe/node_modules/scule/dist/index.mjs';
import { createFetch as createFetch$1, Headers } from 'file://C:/Users/OMEN/Desktop/TempsVUe/node_modules/ofetch/dist/node.mjs';
import { createCall, createFetch } from 'file://C:/Users/OMEN/Desktop/TempsVUe/node_modules/unenv/runtime/fetch/index.mjs';
import { createHooks } from 'file://C:/Users/OMEN/Desktop/TempsVUe/node_modules/hookable/dist/index.mjs';
import { hash } from 'file://C:/Users/OMEN/Desktop/TempsVUe/node_modules/ohash/dist/index.mjs';
import { createStorage } from 'file://C:/Users/OMEN/Desktop/TempsVUe/node_modules/unstorage/dist/index.mjs';
import unstorage_47drivers_47fs from 'file://C:/Users/OMEN/Desktop/TempsVUe/node_modules/unstorage/drivers/fs.mjs';
import defu from 'file://C:/Users/OMEN/Desktop/TempsVUe/node_modules/defu/dist/defu.mjs';
import { toRouteMatcher, createRouter } from 'file://C:/Users/OMEN/Desktop/TempsVUe/node_modules/radix3/dist/index.mjs';
import { promises } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'file://C:/Users/OMEN/Desktop/TempsVUe/node_modules/pathe/dist/index.mjs';

const _runtimeConfig = {"app":{"baseURL":"/","buildAssetsDir":"/_nuxt/","cdnURL":""},"nitro":{"routeRules":{"/__nuxt_error":{"cache":false}},"envPrefix":"NUXT_"},"public":{}};
const ENV_PREFIX = "NITRO_";
const ENV_PREFIX_ALT = _runtimeConfig.nitro.envPrefix ?? process.env.NITRO_ENV_PREFIX ?? "_";
const getEnv = (key) => {
  const envKey = snakeCase(key).toUpperCase();
  return destr(process.env[ENV_PREFIX + envKey] ?? process.env[ENV_PREFIX_ALT + envKey]);
};
function isObject(input) {
  return typeof input === "object" && !Array.isArray(input);
}
function overrideConfig(obj, parentKey = "") {
  for (const key in obj) {
    const subKey = parentKey ? `${parentKey}_${key}` : key;
    const envValue = getEnv(subKey);
    if (isObject(obj[key])) {
      if (isObject(envValue)) {
        obj[key] = { ...obj[key], ...envValue };
      }
      overrideConfig(obj[key], subKey);
    } else {
      obj[key] = envValue ?? obj[key];
    }
  }
}
overrideConfig(_runtimeConfig);
const config$1 = deepFreeze(_runtimeConfig);
const useRuntimeConfig = () => config$1;
function deepFreeze(object) {
  const propNames = Object.getOwnPropertyNames(object);
  for (const name of propNames) {
    const value = object[name];
    if (value && typeof value === "object") {
      deepFreeze(value);
    }
  }
  return Object.freeze(object);
}

const globalTiming = globalThis.__timing__ || {
  start: () => 0,
  end: () => 0,
  metrics: []
};
const timingMiddleware = eventHandler((event) => {
  const start = globalTiming.start();
  const _end = event.res.end;
  event.res.end = function(chunk, encoding, cb) {
    const metrics = [["Generate", globalTiming.end(start)], ...globalTiming.metrics];
    const serverTiming = metrics.map((m) => `-;dur=${m[1]};desc="${encodeURIComponent(m[0])}"`).join(", ");
    if (!event.res.headersSent) {
      event.res.setHeader("Server-Timing", serverTiming);
    }
    _end.call(event.res, chunk, encoding, cb);
    return this;
  }.bind(event.res);
});

const serverAssets = [{"baseName":"server","dir":"C:/Users/OMEN/Desktop/TempsVUe/server/assets"}];

const assets$1 = createStorage();

for (const asset of serverAssets) {
  assets$1.mount(asset.baseName, unstorage_47drivers_47fs({ base: asset.dir }));
}

const storage = createStorage({});

const useStorage = () => storage;

storage.mount('/assets', assets$1);

storage.mount('root', unstorage_47drivers_47fs({"driver":"fs","base":"C:\\Users\\OMEN\\Desktop\\TempsVUe","ignore":["**/node_modules/**","**/.git/**"]}));
storage.mount('src', unstorage_47drivers_47fs({"driver":"fs","base":"C:\\Users\\OMEN\\Desktop\\TempsVUe\\server","ignore":["**/node_modules/**","**/.git/**"]}));
storage.mount('build', unstorage_47drivers_47fs({"driver":"fs","base":"C:\\Users\\OMEN\\Desktop\\TempsVUe\\.nuxt","ignore":["**/node_modules/**","**/.git/**"]}));
storage.mount('cache', unstorage_47drivers_47fs({"driver":"fs","base":"C:\\Users\\OMEN\\Desktop\\TempsVUe\\.nuxt\\cache","ignore":["**/node_modules/**","**/.git/**"]}));

function defineRenderHandler(handler) {
  return eventHandler(async (event) => {
    if (event.req.url.endsWith("/favicon.ico")) {
      event.res.setHeader("Content-Type", "image/x-icon");
      event.res.end("data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7");
      return;
    }
    const response = await handler(event);
    if (!response) {
      if (!event.res.writableEnded) {
        event.res.statusCode = event.res.statusCode === 200 ? 500 : event.res.statusCode;
        event.res.end("No response returned from render handler: " + event.req.url);
      }
      return;
    }
    const nitroApp = useNitroApp();
    await nitroApp.hooks.callHook("render:response", response, { event });
    if (!event.res.headersSent && response.headers) {
      for (const header in response.headers) {
        event.res.setHeader(header, response.headers[header]);
      }
      if (response.statusCode) {
        event.res.statusCode = response.statusCode;
      }
      if (response.statusMessage) {
        event.res.statusMessage = response.statusMessage;
      }
    }
    return typeof response.body === "string" ? response.body : JSON.stringify(response.body);
  });
}

const config = useRuntimeConfig();
const _routeRulesMatcher = toRouteMatcher(createRouter({ routes: config.nitro.routeRules }));
function createRouteRulesHandler() {
  return eventHandler((event) => {
    const routeRules = getRouteRules(event);
    if (routeRules.headers) {
      setHeaders(event, routeRules.headers);
    }
    if (routeRules.redirect) {
      return sendRedirect(event, routeRules.redirect.to, routeRules.redirect.statusCode);
    }
  });
}
function getRouteRules(event) {
  event.context._nitro = event.context._nitro || {};
  if (!event.context._nitro.routeRules) {
    const path = new URL(event.req.url, "http://localhost").pathname;
    event.context._nitro.routeRules = getRouteRulesForPath(path);
  }
  return event.context._nitro.routeRules;
}
function getRouteRulesForPath(path) {
  return defu({}, ..._routeRulesMatcher.matchAll(path).reverse());
}

const defaultCacheOptions = {
  name: "_",
  base: "/cache",
  swr: true,
  maxAge: 1
};
function defineCachedFunction(fn, opts) {
  opts = { ...defaultCacheOptions, ...opts };
  const pending = {};
  const group = opts.group || "nitro";
  const name = opts.name || fn.name || "_";
  const integrity = hash([opts.integrity, fn, opts]);
  const validate = opts.validate || (() => true);
  async function get(key, resolver) {
    const cacheKey = [opts.base, group, name, key + ".json"].filter(Boolean).join(":").replace(/:\/$/, ":index");
    const entry = await useStorage().getItem(cacheKey) || {};
    const ttl = (opts.maxAge ?? opts.maxAge ?? 0) * 1e3;
    if (ttl) {
      entry.expires = Date.now() + ttl;
    }
    const expired = entry.integrity !== integrity || ttl && Date.now() - (entry.mtime || 0) > ttl || !validate(entry);
    const _resolve = async () => {
      if (!pending[key]) {
        entry.value = void 0;
        entry.integrity = void 0;
        entry.mtime = void 0;
        entry.expires = void 0;
        pending[key] = Promise.resolve(resolver());
      }
      entry.value = await pending[key];
      entry.mtime = Date.now();
      entry.integrity = integrity;
      delete pending[key];
      if (validate(entry)) {
        useStorage().setItem(cacheKey, entry).catch((error) => console.error("[nitro] [cache]", error));
      }
    };
    const _resolvePromise = expired ? _resolve() : Promise.resolve();
    if (opts.swr && entry.value) {
      _resolvePromise.catch(console.error);
      return Promise.resolve(entry);
    }
    return _resolvePromise.then(() => entry);
  }
  return async (...args) => {
    const key = (opts.getKey || getKey)(...args);
    const entry = await get(key, () => fn(...args));
    let value = entry.value;
    if (opts.transform) {
      value = await opts.transform(entry, ...args) || value;
    }
    return value;
  };
}
const cachedFunction = defineCachedFunction;
function getKey(...args) {
  return args.length ? hash(args, {}) : "";
}
function defineCachedEventHandler(handler, opts = defaultCacheOptions) {
  const _opts = {
    ...opts,
    getKey: (event) => {
      const url = event.req.originalUrl || event.req.url;
      const friendlyName = decodeURI(parseURL(url).pathname).replace(/[^a-zA-Z0-9]/g, "").substring(0, 16);
      const urlHash = hash(url);
      return `${friendlyName}.${urlHash}`;
    },
    validate: (entry) => {
      if (entry.value.code >= 400) {
        return false;
      }
      if (entry.value.body === void 0) {
        return false;
      }
      return true;
    },
    group: opts.group || "nitro/handlers",
    integrity: [
      opts.integrity,
      handler
    ]
  };
  const _cachedHandler = cachedFunction(async (incomingEvent) => {
    const reqProxy = cloneWithProxy(incomingEvent.req, { headers: {} });
    const resHeaders = {};
    let _resSendBody;
    const resProxy = cloneWithProxy(incomingEvent.res, {
      statusCode: 200,
      getHeader(name) {
        return resHeaders[name];
      },
      setHeader(name, value) {
        resHeaders[name] = value;
        return this;
      },
      getHeaderNames() {
        return Object.keys(resHeaders);
      },
      hasHeader(name) {
        return name in resHeaders;
      },
      removeHeader(name) {
        delete resHeaders[name];
      },
      getHeaders() {
        return resHeaders;
      },
      end(chunk, arg2, arg3) {
        if (typeof chunk === "string") {
          _resSendBody = chunk;
        }
        if (typeof arg2 === "function") {
          arg2();
        }
        if (typeof arg3 === "function") {
          arg3();
        }
        return this;
      },
      write(chunk, arg2, arg3) {
        if (typeof chunk === "string") {
          _resSendBody = chunk;
        }
        if (typeof arg2 === "function") {
          arg2();
        }
        if (typeof arg3 === "function") {
          arg3();
        }
        return this;
      },
      writeHead(statusCode, headers2) {
        this.statusCode = statusCode;
        if (headers2) {
          for (const header in headers2) {
            this.setHeader(header, headers2[header]);
          }
        }
        return this;
      }
    });
    const event = createEvent(reqProxy, resProxy);
    event.context = incomingEvent.context;
    const body = await handler(event) || _resSendBody;
    const headers = event.res.getHeaders();
    headers.etag = headers.Etag || headers.etag || `W/"${hash(body)}"`;
    headers["last-modified"] = headers["Last-Modified"] || headers["last-modified"] || new Date().toUTCString();
    const cacheControl = [];
    if (opts.swr) {
      if (opts.maxAge) {
        cacheControl.push(`s-maxage=${opts.maxAge}`);
      }
      if (opts.staleMaxAge) {
        cacheControl.push(`stale-while-revalidate=${opts.staleMaxAge}`);
      } else {
        cacheControl.push("stale-while-revalidate");
      }
    } else if (opts.maxAge) {
      cacheControl.push(`max-age=${opts.maxAge}`);
    }
    if (cacheControl.length) {
      headers["cache-control"] = cacheControl.join(", ");
    }
    const cacheEntry = {
      code: event.res.statusCode,
      headers,
      body
    };
    return cacheEntry;
  }, _opts);
  return defineEventHandler(async (event) => {
    if (opts.headersOnly) {
      if (handleCacheHeaders(event, { maxAge: opts.maxAge })) {
        return;
      }
      return handler(event);
    }
    const response = await _cachedHandler(event);
    if (event.res.headersSent || event.res.writableEnded) {
      return response.body;
    }
    if (handleCacheHeaders(event, {
      modifiedTime: new Date(response.headers["last-modified"]),
      etag: response.headers.etag,
      maxAge: opts.maxAge
    })) {
      return;
    }
    event.res.statusCode = response.code;
    for (const name in response.headers) {
      event.res.setHeader(name, response.headers[name]);
    }
    return response.body;
  });
}
function cloneWithProxy(obj, overrides) {
  return new Proxy(obj, {
    get(target, property, receiver) {
      if (property in overrides) {
        return overrides[property];
      }
      return Reflect.get(target, property, receiver);
    },
    set(target, property, value, receiver) {
      if (property in overrides) {
        overrides[property] = value;
        return true;
      }
      return Reflect.set(target, property, value, receiver);
    }
  });
}
const cachedEventHandler = defineCachedEventHandler;

const plugins = [
  
];

function hasReqHeader(event, name, includes) {
  const value = getRequestHeader(event, name);
  return value && typeof value === "string" && value.toLowerCase().includes(includes);
}
function isJsonRequest(event) {
  return hasReqHeader(event, "accept", "application/json") || hasReqHeader(event, "user-agent", "curl/") || hasReqHeader(event, "user-agent", "httpie/") || event.req.url?.endsWith(".json") || event.req.url?.includes("/api/");
}
function normalizeError(error) {
  const cwd = process.cwd();
  const stack = (error.stack || "").split("\n").splice(1).filter((line) => line.includes("at ")).map((line) => {
    const text = line.replace(cwd + "/", "./").replace("webpack:/", "").replace("file://", "").trim();
    return {
      text,
      internal: line.includes("node_modules") && !line.includes(".cache") || line.includes("internal") || line.includes("new Promise")
    };
  });
  const statusCode = error.statusCode || 500;
  const statusMessage = error.statusMessage ?? (statusCode === 404 ? "Not Found" : "");
  const message = error.message || error.toString();
  return {
    stack,
    statusCode,
    statusMessage,
    message
  };
}

const errorHandler = (async function errorhandler(error, event) {
  const { stack, statusCode, statusMessage, message } = normalizeError(error);
  const errorObject = {
    url: event.node.req.url,
    statusCode,
    statusMessage,
    message,
    stack: statusCode !== 404 ? `<pre>${stack.map((i) => `<span class="stack${i.internal ? " internal" : ""}">${i.text}</span>`).join("\n")}</pre>` : "",
    data: error.data
  };
  event.node.res.statusCode = errorObject.statusCode !== 200 && errorObject.statusCode || 500;
  if (errorObject.statusMessage) {
    event.node.res.statusMessage = errorObject.statusMessage;
  }
  if (error.unhandled || error.fatal) {
    const tags = [
      "[nuxt]",
      "[request error]",
      error.unhandled && "[unhandled]",
      error.fatal && "[fatal]",
      Number(errorObject.statusCode) !== 200 && `[${errorObject.statusCode}]`
    ].filter(Boolean).join(" ");
    console.error(tags, errorObject.message + "\n" + stack.map((l) => "  " + l.text).join("  \n"));
  }
  if (isJsonRequest(event)) {
    event.node.res.setHeader("Content-Type", "application/json");
    event.node.res.end(JSON.stringify(errorObject));
    return;
  }
  const isErrorPage = event.node.req.url?.startsWith("/__nuxt_error");
  const res = !isErrorPage ? await useNitroApp().localFetch(withQuery(joinURL(useRuntimeConfig().app.baseURL, "/__nuxt_error"), errorObject), {
    headers: getRequestHeaders(event),
    redirect: "manual"
  }).catch(() => null) : null;
  if (!res) {
    const { template } = await import('file://C:/Users/OMEN/Desktop/TempsVUe/node_modules/@nuxt/ui-templates/dist/templates/error-dev.mjs') ;
    {
      errorObject.description = errorObject.message;
    }
    event.node.res.setHeader("Content-Type", "text/html;charset=UTF-8");
    event.node.res.end(template(errorObject));
    return;
  }
  for (const [header, value] of res.headers.entries()) {
    setResponseHeader(event, header, value);
  }
  if (res.status && res.status !== 200) {
    event.node.res.statusCode = res.status;
  }
  if (res.statusText) {
    event.node.res.statusMessage = res.statusText;
  }
  event.node.res.end(await res.text());
});

const assets = {
  "/favicon.ico": {
    "type": "image/vnd.microsoft.icon",
    "etag": "\"47e-aNnpLAb6T+FtQyVLvOxUjMHAq8E\"",
    "mtime": "2021-10-04T08:14:32.000Z",
    "size": 1150,
    "path": "../../.output/public/favicon.ico"
  },
  "/favicon.png": {
    "type": "image/png",
    "etag": "\"547-quR1O4wfCsrroHjZuQ3z6MDSC+0\"",
    "mtime": "2021-10-04T08:14:32.000Z",
    "size": 1351,
    "path": "../../.output/public/favicon.png"
  },
  "/_nuxt/404.f035af6f.js": {
    "type": "application/javascript",
    "etag": "\"fb-yI+PykmD7FH8X887qqktiISTjXs\"",
    "mtime": "2023-05-03T13:00:43.315Z",
    "size": 251,
    "path": "../../.output/public/_nuxt/404.f035af6f.js"
  },
  "/_nuxt/Banner404.f1bf7627.js": {
    "type": "application/javascript",
    "etag": "\"378-ZOOnmCZQin+0A8+p1/i1J1MxACs\"",
    "mtime": "2023-05-03T13:00:43.316Z",
    "size": 888,
    "path": "../../.output/public/_nuxt/Banner404.f1bf7627.js"
  },
  "/_nuxt/basic-components.4de7703a.js": {
    "type": "application/javascript",
    "etag": "\"4aec-AUJpRzBtecBakuy6P0B/OxCGJts\"",
    "mtime": "2023-05-03T13:00:43.316Z",
    "size": 19180,
    "path": "../../.output/public/_nuxt/basic-components.4de7703a.js"
  },
  "/_nuxt/coming-soon.410772be.js": {
    "type": "application/javascript",
    "etag": "\"337-NCrWu+9v2oODyavhcSqI8eGoH6Q\"",
    "mtime": "2023-05-03T13:00:43.316Z",
    "size": 823,
    "path": "../../.output/public/_nuxt/coming-soon.410772be.js"
  },
  "/_nuxt/ComingSoon.d5fb2431.js": {
    "type": "application/javascript",
    "etag": "\"356-cuWP0L6feyXtsa9BKXOBrlFwA5U\"",
    "mtime": "2023-05-03T13:00:43.316Z",
    "size": 854,
    "path": "../../.output/public/_nuxt/ComingSoon.d5fb2431.js"
  },
  "/_nuxt/composables.7797710f.js": {
    "type": "application/javascript",
    "etag": "\"61-F7HXvPy8PFsg7sWlJ2FLTYti81s\"",
    "mtime": "2023-05-03T13:00:43.316Z",
    "size": 97,
    "path": "../../.output/public/_nuxt/composables.7797710f.js"
  },
  "/_nuxt/default.0dfc15bf.js": {
    "type": "application/javascript",
    "etag": "\"13b0-2LWK4orGp7CN/QZ+Ly7XMilGSKc\"",
    "mtime": "2023-05-03T13:00:43.316Z",
    "size": 5040,
    "path": "../../.output/public/_nuxt/default.0dfc15bf.js"
  },
  "/_nuxt/entry.6720be9a.js": {
    "type": "application/javascript",
    "etag": "\"226acc-OkPHKGH1LmkmuujH3C2m1JPJPAg\"",
    "mtime": "2023-05-03T13:00:43.317Z",
    "size": 2255564,
    "path": "../../.output/public/_nuxt/entry.6720be9a.js"
  },
  "/_nuxt/entry.a75a175e.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"aeb2c-J9+IV2G8/XlfiRMmlP4O8Qcc3Kk\"",
    "mtime": "2023-05-03T13:00:43.316Z",
    "size": 715564,
    "path": "../../.output/public/_nuxt/entry.a75a175e.css"
  },
  "/_nuxt/error-404.23f2309d.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"e2e-ivsbEmi48+s9HDOqtrSdWFvddYQ\"",
    "mtime": "2023-05-03T13:00:43.316Z",
    "size": 3630,
    "path": "../../.output/public/_nuxt/error-404.23f2309d.css"
  },
  "/_nuxt/error-404.954a09a9.js": {
    "type": "application/javascript",
    "etag": "\"8cf-EPeakubUyH/qvA786HKfSjhewOM\"",
    "mtime": "2023-05-03T13:00:43.316Z",
    "size": 2255,
    "path": "../../.output/public/_nuxt/error-404.954a09a9.js"
  },
  "/_nuxt/error-500.4185939a.js": {
    "type": "application/javascript",
    "etag": "\"77d-ZWhR6OUYMk07BpBvRi6QRAeWlxU\"",
    "mtime": "2023-05-03T13:00:43.316Z",
    "size": 1917,
    "path": "../../.output/public/_nuxt/error-500.4185939a.js"
  },
  "/_nuxt/error-500.aa16ed4d.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"79e-7j4Tsx89siDo85YoIs0XqsPWmPI\"",
    "mtime": "2023-05-03T13:00:43.316Z",
    "size": 1950,
    "path": "../../.output/public/_nuxt/error-500.aa16ed4d.css"
  },
  "/_nuxt/error-component.6d4ae27c.js": {
    "type": "application/javascript",
    "etag": "\"4ad-LbEoT83DmQTECUx6E85WuMPCM3o\"",
    "mtime": "2023-05-03T13:00:43.315Z",
    "size": 1197,
    "path": "../../.output/public/_nuxt/error-component.6d4ae27c.js"
  },
  "/_nuxt/error.b53a6f5d.js": {
    "type": "application/javascript",
    "etag": "\"107-FKuGaqkOFdznxwg6o4AszDcuaPs\"",
    "mtime": "2023-05-03T13:00:43.316Z",
    "size": 263,
    "path": "../../.output/public/_nuxt/error.b53a6f5d.js"
  },
  "/_nuxt/index.9a1fd85b.js": {
    "type": "application/javascript",
    "etag": "\"85d6-zieYRSNg6LdXX/z9Wvgm+E42hJA\"",
    "mtime": "2023-05-03T13:00:43.316Z",
    "size": 34262,
    "path": "../../.output/public/_nuxt/index.9a1fd85b.js"
  },
  "/_nuxt/materialdesignicons-webfont.5be9e9d7.eot": {
    "type": "application/vnd.ms-fontobject",
    "etag": "\"12aae0-GLTvA08q7BwIed5xQcHFnoNNCXU\"",
    "mtime": "2023-05-03T13:00:43.316Z",
    "size": 1223392,
    "path": "../../.output/public/_nuxt/materialdesignicons-webfont.5be9e9d7.eot"
  },
  "/_nuxt/materialdesignicons-webfont.633d596f.woff2": {
    "type": "font/woff2",
    "etag": "\"5d2f8-wtunkFhOlGmtjUyXdeCH4ix7aaA\"",
    "mtime": "2023-05-03T13:00:43.315Z",
    "size": 381688,
    "path": "../../.output/public/_nuxt/materialdesignicons-webfont.633d596f.woff2"
  },
  "/_nuxt/materialdesignicons-webfont.7f3afe9b.woff": {
    "type": "font/woff",
    "etag": "\"872e8-V9C6Y3wg5NY7jDb4bLSGK4uK3ak\"",
    "mtime": "2023-05-03T13:00:43.316Z",
    "size": 553704,
    "path": "../../.output/public/_nuxt/materialdesignicons-webfont.7f3afe9b.woff"
  },
  "/_nuxt/materialdesignicons-webfont.948fce52.ttf": {
    "type": "font/ttf",
    "etag": "\"12aa04-aOk3PGfYI4P3UxgCz4Ny3Zs6JXo\"",
    "mtime": "2023-05-03T13:00:43.316Z",
    "size": 1223172,
    "path": "../../.output/public/_nuxt/materialdesignicons-webfont.948fce52.ttf"
  },
  "/images/banner/banner1.jpg": {
    "type": "image/jpeg",
    "etag": "\"56af-8ITU4nqf0HuAPSMYpFXhPR4pBUY\"",
    "mtime": "2021-10-04T08:14:32.000Z",
    "size": 22191,
    "path": "../../.output/public/images/banner/banner1.jpg"
  },
  "/images/banner/img.jpg": {
    "type": "image/jpeg",
    "etag": "\"31b46-O+6xw3yLo2B/ibOOHT1+Zcnq/QU\"",
    "mtime": "2021-10-04T08:14:32.000Z",
    "size": 203590,
    "path": "../../.output/public/images/banner/img.jpg"
  },
  "/images/c2a/app-store.png": {
    "type": "image/png",
    "etag": "\"11ad-O5PhQnlGmUgNVChgYMCUhPssoEk\"",
    "mtime": "2021-10-04T08:14:32.000Z",
    "size": 4525,
    "path": "../../.output/public/images/c2a/app-store.png"
  },
  "/images/c2a/play-store.png": {
    "type": "image/png",
    "etag": "\"1557-74nCYtBqlvNwCBsnTWCKYFgNwwg\"",
    "mtime": "2021-10-04T08:14:32.000Z",
    "size": 5463,
    "path": "../../.output/public/images/c2a/play-store.png"
  },
  "/images/blog/img1.jpg": {
    "type": "image/jpeg",
    "etag": "\"57fc-SzpyjgqJPDXaOCwGfHtVv+OeGHw\"",
    "mtime": "2021-10-04T08:14:32.000Z",
    "size": 22524,
    "path": "../../.output/public/images/blog/img1.jpg"
  },
  "/images/blog/img2.jpg": {
    "type": "image/jpeg",
    "etag": "\"36fa-wZxu738MFGUUq43Avmx76LsX3ro\"",
    "mtime": "2021-10-04T08:14:32.000Z",
    "size": 14074,
    "path": "../../.output/public/images/blog/img2.jpg"
  },
  "/images/blog/img3.jpg": {
    "type": "image/jpeg",
    "etag": "\"4dd7-d1sxcCCNNp5toE9XgPMwc7M0E+A\"",
    "mtime": "2021-10-04T08:14:32.000Z",
    "size": 19927,
    "path": "../../.output/public/images/blog/img3.jpg"
  },
  "/images/card/docks.jpg": {
    "type": "image/jpeg",
    "etag": "\"188ca-U09Z3HyuWhIXDP6Sn5q4oW2PJmU\"",
    "mtime": "2023-01-13T15:29:42.000Z",
    "size": 100554,
    "path": "../../.output/public/images/card/docks.jpg"
  },
  "/images/card/house.jpg": {
    "type": "image/jpeg",
    "etag": "\"127b0-k1qAk4Zuuqw6Zy3d0X4FxqYbp38\"",
    "mtime": "2023-01-13T15:30:12.000Z",
    "size": 75696,
    "path": "../../.output/public/images/card/house.jpg"
  },
  "/images/card/road.jpg": {
    "type": "image/jpeg",
    "etag": "\"129f9-1ezP73KXf79mK2RoE4UEXAPsWQ4\"",
    "mtime": "2023-01-13T15:29:58.000Z",
    "size": 76281,
    "path": "../../.output/public/images/card/road.jpg"
  },
  "/images/form-banner/form-banner1.png": {
    "type": "image/png",
    "etag": "\"df5c-9tzl32KXtKjWvTrHJpaiGTpWGl8\"",
    "mtime": "2021-10-04T08:14:32.000Z",
    "size": 57180,
    "path": "../../.output/public/images/form-banner/form-banner1.png"
  },
  "/images/landingpage/banner-img.png": {
    "type": "image/png",
    "etag": "\"27ba0-0Cc/8Vu0T2+hlvfHmIAXN/Np9k0\"",
    "mtime": "2021-10-04T08:14:32.000Z",
    "size": 162720,
    "path": "../../.output/public/images/landingpage/banner-img.png"
  },
  "/images/landingpage/comingsoon.jpg": {
    "type": "image/jpeg",
    "etag": "\"28ac3-gpuBIT5LCFxIgdvOBnFXk4AsUao\"",
    "mtime": "2021-10-04T08:14:32.000Z",
    "size": 166595,
    "path": "../../.output/public/images/landingpage/comingsoon.jpg"
  },
  "/images/landingpage/emp.jpg": {
    "type": "image/jpeg",
    "etag": "\"3d15c-k6xRz1Ava/DF4JY04zaV0s9kMpk\"",
    "mtime": "2023-05-03T06:16:11.772Z",
    "size": 250204,
    "path": "../../.output/public/images/landingpage/emp.jpg"
  },
  "/images/landingpage/logo-principal.png": {
    "type": "image/png",
    "etag": "\"15760-dxawyJbQr7A45XQ6IgRycxsUzhc\"",
    "mtime": "2023-05-03T05:14:13.229Z",
    "size": 87904,
    "path": "../../.output/public/images/landingpage/logo-principal.png"
  },
  "/images/logos/logo-principal.png": {
    "type": "image/png",
    "etag": "\"19c38-ebsmd4mDERHmCVLWqL0s0zV28rg\"",
    "mtime": "2023-05-03T05:38:42.661Z",
    "size": 105528,
    "path": "../../.output/public/images/logos/logo-principal.png"
  },
  "/images/logos/logocato.png": {
    "type": "image/png",
    "etag": "\"226cb-RbwDVaWDpe4m8xTKIqVcNL4CO5k\"",
    "mtime": "2023-05-03T05:56:13.547Z",
    "size": 141003,
    "path": "../../.output/public/images/logos/logocato.png"
  },
  "/images/logos/purple-logo.png": {
    "type": "image/png",
    "etag": "\"615-uVVdkgRUNwkGEcS4chyRftC8PkU\"",
    "mtime": "2021-10-04T08:14:32.000Z",
    "size": 1557,
    "path": "../../.output/public/images/logos/purple-logo.png"
  },
  "/images/logos/white-logo.png": {
    "type": "image/png",
    "etag": "\"5fe-BfdwgyPb0XDsQMzktBfDW3gpoSQ\"",
    "mtime": "2021-10-04T08:14:32.000Z",
    "size": 1534,
    "path": "../../.output/public/images/logos/white-logo.png"
  },
  "/images/logos/white-text.png": {
    "type": "image/png",
    "etag": "\"c87-7xaYnsYEN6wjIQIRtceglkYvPU0\"",
    "mtime": "2021-10-04T08:14:32.000Z",
    "size": 3207,
    "path": "../../.output/public/images/logos/white-text.png"
  },
  "/images/portfolio/img1.jpg": {
    "type": "image/jpeg",
    "etag": "\"7446-47L/Zb6o0+Dc8xxaUVe5hcw7bKI\"",
    "mtime": "2021-10-04T08:14:32.000Z",
    "size": 29766,
    "path": "../../.output/public/images/portfolio/img1.jpg"
  },
  "/images/portfolio/img2.jpg": {
    "type": "image/jpeg",
    "etag": "\"5d44-LF6xYYTHG4qtR/J23ygh/cZkXW8\"",
    "mtime": "2021-10-04T08:14:32.000Z",
    "size": 23876,
    "path": "../../.output/public/images/portfolio/img2.jpg"
  },
  "/images/portfolio/img3.jpg": {
    "type": "image/jpeg",
    "etag": "\"6bac-JFeqDb0866Spnjfz5VHJBgQDG8w\"",
    "mtime": "2021-10-04T08:14:32.000Z",
    "size": 27564,
    "path": "../../.output/public/images/portfolio/img3.jpg"
  },
  "/images/portfolio/img4.jpg": {
    "type": "image/jpeg",
    "etag": "\"5eb4-s8rfIXaWA1f8W92tgye85pdatc0\"",
    "mtime": "2021-10-04T08:14:32.000Z",
    "size": 24244,
    "path": "../../.output/public/images/portfolio/img4.jpg"
  },
  "/images/portfolio/img5.jpg": {
    "type": "image/jpeg",
    "etag": "\"9eed-yibYXfQMhxIXNuwchVusgwMvhOE\"",
    "mtime": "2021-10-04T08:14:32.000Z",
    "size": 40685,
    "path": "../../.output/public/images/portfolio/img5.jpg"
  },
  "/images/portfolio/img6.jpg": {
    "type": "image/jpeg",
    "etag": "\"4c72-ZmVNtDtkaY+bGIqMOTZPLJFjB7k\"",
    "mtime": "2021-10-04T08:14:32.000Z",
    "size": 19570,
    "path": "../../.output/public/images/portfolio/img6.jpg"
  },
  "/images/team/t1.jpg": {
    "type": "image/jpeg",
    "etag": "\"3890-5w6xQpFPfaTyC4cbTGaRhgNgjSE\"",
    "mtime": "2021-10-04T08:14:32.000Z",
    "size": 14480,
    "path": "../../.output/public/images/team/t1.jpg"
  },
  "/images/team/t2.jpg": {
    "type": "image/jpeg",
    "etag": "\"2f32-9Lxso2ni4ZcD0XrExsl9VKL/TO4\"",
    "mtime": "2021-10-04T08:14:32.000Z",
    "size": 12082,
    "path": "../../.output/public/images/team/t2.jpg"
  },
  "/images/team/t3.jpg": {
    "type": "image/jpeg",
    "etag": "\"28ec-tZm6RaVYc5nOXRIXBR1pAeXwXls\"",
    "mtime": "2021-10-04T08:14:32.000Z",
    "size": 10476,
    "path": "../../.output/public/images/team/t3.jpg"
  },
  "/images/team/t4.jpg": {
    "type": "image/jpeg",
    "etag": "\"3bf3-8AkUEdpBIA8eZuyRVUTrRuLieqo\"",
    "mtime": "2021-10-04T08:14:32.000Z",
    "size": 15347,
    "path": "../../.output/public/images/team/t4.jpg"
  },
  "/images/testimonial/1.jpg": {
    "type": "image/jpeg",
    "etag": "\"7aba-Z2kghsmd6jT6lUbdS4PEU//gqjs\"",
    "mtime": "2021-10-04T08:14:32.000Z",
    "size": 31418,
    "path": "../../.output/public/images/testimonial/1.jpg"
  },
  "/images/testimonial/2.jpg": {
    "type": "image/jpeg",
    "etag": "\"11ce9-jQ7gNLkDWl7ip+V79loVinily1U\"",
    "mtime": "2021-10-04T08:14:32.000Z",
    "size": 72937,
    "path": "../../.output/public/images/testimonial/2.jpg"
  },
  "/images/testimonial/3.jpg": {
    "type": "image/jpeg",
    "etag": "\"138fe-w9zqsUQPG4yoxgoDNojvLFEwbwI\"",
    "mtime": "2021-10-04T08:14:32.000Z",
    "size": 80126,
    "path": "../../.output/public/images/testimonial/3.jpg"
  },
  "/images/features/2/img1.jpg": {
    "type": "image/jpeg",
    "etag": "\"47fe-x9B0bPDQBIlGWAbFbn3Edi5pjZg\"",
    "mtime": "2021-10-04T08:14:32.000Z",
    "size": 18430,
    "path": "../../.output/public/images/features/2/img1.jpg"
  },
  "/images/features/2/img2.jpg": {
    "type": "image/jpeg",
    "etag": "\"49d9-VFqTO17/fgR5HMsWMRme/VBTvrU\"",
    "mtime": "2021-10-04T08:14:32.000Z",
    "size": 18905,
    "path": "../../.output/public/images/features/2/img2.jpg"
  },
  "/images/features/2/img3.jpg": {
    "type": "image/jpeg",
    "etag": "\"9643-qV25vjPyiM6NMVghdPCTalhBLHw\"",
    "mtime": "2021-10-04T08:14:32.000Z",
    "size": 38467,
    "path": "../../.output/public/images/features/2/img3.jpg"
  },
  "/images/features/2/img4.jpg": {
    "type": "image/jpeg",
    "etag": "\"4727-IhmXVnF7OBOusLIKKLUwtnh0B8c\"",
    "mtime": "2021-10-04T08:14:32.000Z",
    "size": 18215,
    "path": "../../.output/public/images/features/2/img4.jpg"
  },
  "/images/features/3/feature-img.jpg": {
    "type": "image/jpeg",
    "etag": "\"61ee-RDlMufoJsXSgQmPvVi1sOUk/eoc\"",
    "mtime": "2021-10-04T08:14:32.000Z",
    "size": 25070,
    "path": "../../.output/public/images/features/3/feature-img.jpg"
  },
  "/images/features/3/img1.jpg": {
    "type": "image/jpeg",
    "etag": "\"1e317-F8Y+Wy1sW+h3CylQbiRjFXDjkHU\"",
    "mtime": "2021-10-04T08:14:32.000Z",
    "size": 123671,
    "path": "../../.output/public/images/features/3/img1.jpg"
  }
};

function readAsset (id) {
  const serverDir = dirname(fileURLToPath(globalThis._importMeta_.url));
  return promises.readFile(resolve(serverDir, assets[id].path))
}

const publicAssetBases = [];

function isPublicAssetURL(id = '') {
  if (assets[id]) {
    return true
  }
  for (const base of publicAssetBases) {
    if (id.startsWith(base)) { return true }
  }
  return false
}

function getAsset (id) {
  return assets[id]
}

const METHODS = ["HEAD", "GET"];
const EncodingMap = { gzip: ".gz", br: ".br" };
const _f4b49z = eventHandler((event) => {
  if (event.req.method && !METHODS.includes(event.req.method)) {
    return;
  }
  let id = decodeURIComponent(withLeadingSlash(withoutTrailingSlash(parseURL(event.req.url).pathname)));
  let asset;
  const encodingHeader = String(event.req.headers["accept-encoding"] || "");
  const encodings = encodingHeader.split(",").map((e) => EncodingMap[e.trim()]).filter(Boolean).sort().concat([""]);
  if (encodings.length > 1) {
    event.res.setHeader("Vary", "Accept-Encoding");
  }
  for (const encoding of encodings) {
    for (const _id of [id + encoding, joinURL(id, "index.html" + encoding)]) {
      const _asset = getAsset(_id);
      if (_asset) {
        asset = _asset;
        id = _id;
        break;
      }
    }
  }
  if (!asset) {
    if (isPublicAssetURL(id)) {
      throw createError({
        statusMessage: "Cannot find static asset " + id,
        statusCode: 404
      });
    }
    return;
  }
  const ifNotMatch = event.req.headers["if-none-match"] === asset.etag;
  if (ifNotMatch) {
    event.res.statusCode = 304;
    event.res.end();
    return;
  }
  const ifModifiedSinceH = event.req.headers["if-modified-since"];
  if (ifModifiedSinceH && asset.mtime) {
    if (new Date(ifModifiedSinceH) >= new Date(asset.mtime)) {
      event.res.statusCode = 304;
      event.res.end();
      return;
    }
  }
  if (asset.type && !event.res.getHeader("Content-Type")) {
    event.res.setHeader("Content-Type", asset.type);
  }
  if (asset.etag && !event.res.getHeader("ETag")) {
    event.res.setHeader("ETag", asset.etag);
  }
  if (asset.mtime && !event.res.getHeader("Last-Modified")) {
    event.res.setHeader("Last-Modified", asset.mtime);
  }
  if (asset.encoding && !event.res.getHeader("Content-Encoding")) {
    event.res.setHeader("Content-Encoding", asset.encoding);
  }
  if (asset.size && !event.res.getHeader("Content-Length")) {
    event.res.setHeader("Content-Length", asset.size);
  }
  return readAsset(id);
});

const _lazy_eQL4Ow = () => Promise.resolve().then(function () { return renderer$1; });

const handlers = [
  { route: '', handler: _f4b49z, lazy: false, middleware: true, method: undefined },
  { route: '/__nuxt_error', handler: _lazy_eQL4Ow, lazy: true, middleware: false, method: undefined },
  { route: '/**', handler: _lazy_eQL4Ow, lazy: true, middleware: false, method: undefined }
];

function createNitroApp() {
  const config = useRuntimeConfig();
  const hooks = createHooks();
  const h3App = createApp({
    debug: destr(true),
    onError: errorHandler
  });
  h3App.use(config.app.baseURL, timingMiddleware);
  const router = createRouter$1();
  h3App.use(createRouteRulesHandler());
  for (const h of handlers) {
    let handler = h.lazy ? lazyEventHandler(h.handler) : h.handler;
    if (h.middleware || !h.route) {
      const middlewareBase = (config.app.baseURL + (h.route || "/")).replace(/\/+/g, "/");
      h3App.use(middlewareBase, handler);
    } else {
      const routeRules = getRouteRulesForPath(h.route.replace(/:\w+|\*\*/g, "_"));
      if (routeRules.cache) {
        handler = cachedEventHandler(handler, {
          group: "nitro/routes",
          ...routeRules.cache
        });
      }
      router.use(h.route, handler, h.method);
    }
  }
  h3App.use(config.app.baseURL, router);
  const localCall = createCall(toNodeListener(h3App));
  const localFetch = createFetch(localCall, globalThis.fetch);
  const $fetch = createFetch$1({ fetch: localFetch, Headers, defaults: { baseURL: config.app.baseURL } });
  globalThis.$fetch = $fetch;
  const app = {
    hooks,
    h3App,
    router,
    localCall,
    localFetch
  };
  for (const plugin of plugins) {
    plugin(app);
  }
  return app;
}
const nitroApp = createNitroApp();
const useNitroApp = () => nitroApp;

const server = new Server(toNodeListener(nitroApp.h3App));
function getAddress() {
  if (provider === "stackblitz" || process.env.NITRO_NO_UNIX_SOCKET) {
    return "0";
  }
  const socketName = `worker-${process.pid}-${threadId}.sock`;
  if (isWindows) {
    return join("\\\\.\\pipe\\nitro", socketName);
  } else {
    const socketDir = join(tmpdir(), "nitro");
    mkdirSync(socketDir, { recursive: true });
    return join(socketDir, socketName);
  }
}
const listenAddress = getAddress();
server.listen(listenAddress, () => {
  const _address = server.address();
  parentPort.postMessage({
    event: "listen",
    address: typeof _address === "string" ? { socketPath: _address } : { host: "localhost", port: _address.port }
  });
});
{
  process.on("unhandledRejection", (err) => console.error("[nitro] [dev] [unhandledRejection]", err));
  process.on("uncaughtException", (err) => console.error("[nitro] [dev] [uncaughtException]", err));
}

const appRootId = "__nuxt";

const appRootTag = "div";

function buildAssetsURL(...path) {
  return joinURL(publicAssetsURL(), useRuntimeConfig().app.buildAssetsDir, ...path);
}
function publicAssetsURL(...path) {
  const publicBase = useRuntimeConfig().app.cdnURL || useRuntimeConfig().app.baseURL;
  return path.length ? joinURL(publicBase, ...path) : publicBase;
}

globalThis.__buildAssetsURL = buildAssetsURL;
globalThis.__publicAssetsURL = publicAssetsURL;
const getClientManifest = () => import('file://C:/Users/OMEN/Desktop/TempsVUe/.nuxt/dist/server/client.manifest.mjs').then((r) => r.default || r).then((r) => typeof r === "function" ? r() : r);
const getStaticRenderedHead = () => Promise.resolve().then(function () { return _virtual__headStatic$1; }).then((r) => r.default || r);
const getSPARenderer = lazyCachedFunction(async () => {
  const manifest = await getClientManifest();
  const options = {
    manifest,
    renderToString: () => `<${appRootTag} id="${appRootId}"></${appRootTag}>`,
    buildAssetsURL
  };
  const renderer = createRenderer(() => () => {
  }, options);
  const result = await renderer.renderToString({});
  const renderToString = (ssrContext) => {
    const config = useRuntimeConfig();
    ssrContext.payload = {
      serverRendered: false,
      config: {
        public: config.public,
        app: config.app
      },
      data: {},
      state: {}
    };
    ssrContext.renderMeta = ssrContext.renderMeta ?? getStaticRenderedHead;
    return Promise.resolve(result);
  };
  return {
    rendererContext: renderer.rendererContext,
    renderToString
  };
});
const PAYLOAD_URL_RE = /\/_payload(\.[a-zA-Z0-9]+)?.js(\?.*)?$/;
const renderer = defineRenderHandler(async (event) => {
  const ssrError = event.node.req.url?.startsWith("/__nuxt_error") ? getQuery(event) : null;
  if (ssrError && event.node.req.socket.readyState !== "readOnly") {
    throw createError("Cannot directly render error page!");
  }
  let url = ssrError?.url || event.node.req.url;
  const isRenderingPayload = PAYLOAD_URL_RE.test(url);
  if (isRenderingPayload) {
    url = url.substring(0, url.lastIndexOf("/")) || "/";
    event.node.req.url = url;
  }
  getRouteRules(event);
  const ssrContext = {
    url,
    event,
    runtimeConfig: useRuntimeConfig(),
    noSSR: !!true   ,
    error: !!ssrError,
    nuxt: void 0,
    payload: ssrError ? { error: ssrError } : {}
  };
  const renderer = await getSPARenderer() ;
  const _rendered = await renderer.renderToString(ssrContext).catch((error) => {
    throw !ssrError && ssrContext.payload?.error || error;
  });
  await ssrContext.nuxt?.hooks.callHook("app:rendered", { ssrContext });
  if (ssrContext.payload?.error && !ssrError) {
    throw ssrContext.payload.error;
  }
  if (isRenderingPayload) {
    const response2 = renderPayloadResponse(ssrContext);
    return response2;
  }
  const renderedMeta = await ssrContext.renderMeta?.() ?? {};
  const inlinedStyles = "";
  const htmlContext = {
    htmlAttrs: normalizeChunks([renderedMeta.htmlAttrs]),
    head: normalizeChunks([
      renderedMeta.headTags,
      null,
      _rendered.renderResourceHints(),
      _rendered.renderStyles(),
      inlinedStyles,
      ssrContext.styles
    ]),
    bodyAttrs: normalizeChunks([renderedMeta.bodyAttrs]),
    bodyPrepend: normalizeChunks([
      renderedMeta.bodyScriptsPrepend,
      ssrContext.teleports?.body
    ]),
    body: [
      _rendered.html
    ],
    bodyAppend: normalizeChunks([
      `<script>window.__NUXT__=${devalue(ssrContext.payload)}<\/script>`,
      _rendered.renderScripts(),
      renderedMeta.bodyScripts
    ])
  };
  const nitroApp = useNitroApp();
  await nitroApp.hooks.callHook("render:html", htmlContext, { event });
  const response = {
    body: renderHTMLDocument(htmlContext),
    statusCode: event.node.res.statusCode,
    statusMessage: event.node.res.statusMessage,
    headers: {
      "Content-Type": "text/html;charset=UTF-8",
      "X-Powered-By": "Nuxt"
    }
  };
  return response;
});
function lazyCachedFunction(fn) {
  let res = null;
  return () => {
    if (res === null) {
      res = fn().catch((err) => {
        res = null;
        throw err;
      });
    }
    return res;
  };
}
function normalizeChunks(chunks) {
  return chunks.filter(Boolean).map((i) => i.trim());
}
function joinTags(tags) {
  return tags.join("");
}
function joinAttrs(chunks) {
  return chunks.join(" ");
}
function renderHTMLDocument(html) {
  return `<!DOCTYPE html>
<html ${joinAttrs(html.htmlAttrs)}>
<head>${joinTags(html.head)}</head>
<body ${joinAttrs(html.bodyAttrs)}>${joinTags(html.bodyPrepend)}${joinTags(html.body)}${joinTags(html.bodyAppend)}</body>
</html>`;
}
function renderPayloadResponse(ssrContext) {
  return {
    body: `export default ${devalue(splitPayload(ssrContext).payload)}`,
    statusCode: ssrContext.event.node.res.statusCode,
    statusMessage: ssrContext.event.node.res.statusMessage,
    headers: {
      "content-type": "text/javascript;charset=UTF-8",
      "x-powered-by": "Nuxt"
    }
  };
}
function splitPayload(ssrContext) {
  const { data, prerenderedAt, ...initial } = ssrContext.payload;
  return {
    initial: { ...initial, prerenderedAt },
    payload: { data, prerenderedAt }
  };
}

const renderer$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  'default': renderer
});

const _virtual__headStatic = {"headTags":"<meta charset=\"utf-8\">\n<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">","bodyTags":"","bodyTagsOpen":"","htmlAttrs":"","bodyAttrs":""};

const _virtual__headStatic$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  'default': _virtual__headStatic
});
//# sourceMappingURL=index.mjs.map
