import { renderers } from './renderers.mjs';
import { s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_CvSoi7hX.mjs';
import { manifest } from './manifest_FldpFC2S.mjs';
import { createExports } from '@astrojs/netlify/ssr-function.js';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/estructuradecostos.astro.mjs');
const _page2 = () => import('./pages/facturas.astro.mjs');
const _page3 = () => import('./pages/inventario.astro.mjs');
const _page4 = () => import('./pages/ventas.astro.mjs');
const _page5 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/.pnpm/astro@5.7.12_@netlify+blobs_da9644ce15ce2c0e87bfd2de8a69fff2/node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/EstructuraDeCostos.astro", _page1],
    ["src/pages/Facturas.astro", _page2],
    ["src/pages/Inventario.astro", _page3],
    ["src/pages/Ventas.astro", _page4],
    ["src/pages/index.astro", _page5]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./_noop-actions.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "56417f14-a984-4bd3-bed6-62ab81890097"
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
