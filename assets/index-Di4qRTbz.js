(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=[`Windows`,`macOS`,`Linux`,`Chrome OS`,`Chromium OS`];function t(t=navigator){let r=t.userAgentData,i=r?.brands?.some(e=>e.brand===`Chromium`)===!0,a=r?r.mobile===!1&&e.includes(r.platform??``):n(t),o=`gpu`in t;return{eligible:i&&a,chromium:i,desktop:a,webgpu:o}}function n(e){let t=e.userAgent??``;return/Android|iPhone|iPad|iPod|Mobile|Silk/i.test(t)||/Macintosh/.test(t)&&(e.maxTouchPoints??0)>1?!1:/Macintosh|Windows NT|X11|Linux|CrOS/.test(t)}var r=`
#gate {
  --paper: #e8dfcd;
  --ink: #2a231b;
  --ink-2: rgba(42, 35, 27, 0.62);
  --ink-3: rgba(42, 35, 27, 0.34);
  --ink-4: rgba(42, 35, 27, 0.16);
  --rust: #a53c15;
  --sans: "Avenir Next Condensed", "Arial Narrow", "Helvetica Neue", Helvetica, Arial, sans-serif;
  --mono: ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace;
  position: fixed; inset: 0; z-index: 60;
  display: flex; align-items: center; justify-content: center;
  padding: clamp(18px, 5vmin, 56px);
  background-color: var(--paper);
  background-image:
    linear-gradient(153deg, rgba(255, 250, 238, 0.62), rgba(255, 250, 238, 0) 44%),
    url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='g'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.86' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23g)' opacity='0.05'/%3E%3C/svg%3E");
  background-size: auto, 200px 200px;
  color: var(--ink);
  font-family: var(--sans);
  font-variant-numeric: tabular-nums lining-nums;
  overflow: auto;
}
#gate .sheet {
  /* margin: auto, not flex centering alone — a sheet taller than a short
     landscape phone stays scrollable from its top instead of clipping. */
  position: relative; width: min(100%, 620px); margin: auto;
  border: 1px solid var(--ink);
  padding: clamp(18px, 4.5vmin, 40px) clamp(16px, 4.5vmin, 44px) clamp(20px, 5vmin, 44px);
  box-shadow: 0 0 0 clamp(5px, 1.2vmin, 10px) var(--paper), 0 0 0 calc(clamp(5px, 1.2vmin, 10px) + 1px) var(--ink-3);
}
#gate .kicker {
  font-size: clamp(9px, 2.6vmin, 11px); letter-spacing: 0.32em;
  text-transform: uppercase; color: var(--ink-2);
}
#gate h1 {
  margin: 0.55em 0 0; font-size: clamp(19px, 6vmin, 30px); font-weight: 700;
  letter-spacing: 0.14em; text-transform: uppercase; color: var(--ink);
}
#gate .rule { height: 3px; margin-top: 0.55em; border-top: 2.4px solid var(--ink); border-bottom: 1px solid var(--ink-3); }
#gate .note {
  margin: 1.3em 0 0; font-size: clamp(11px, 3.3vmin, 13.5px); line-height: 1.75;
  letter-spacing: 0.07em; text-transform: uppercase; color: var(--ink-2);
}
#gate .note b { color: var(--ink); font-weight: 700; }
#gate .survey { margin-top: 1.5em; border-top: 1px solid var(--ink); }
#gate .survey .cap {
  padding: 0.6em 0 0.45em; font-size: clamp(8.5px, 2.4vmin, 10px);
  letter-spacing: 0.28em; text-transform: uppercase; color: var(--ink);
  border-bottom: 1px solid var(--ink-3);
}
#gate .srow {
  display: grid; grid-template-columns: 1fr auto; gap: 1em; align-items: baseline;
  padding: 0.62em 0 0.5em; border-bottom: 1px solid var(--ink-4);
  font-family: var(--mono); font-size: clamp(10px, 3vmin, 12.5px);
  letter-spacing: 0.1em; text-transform: uppercase; color: var(--ink-2);
}
#gate .srow b { font-weight: 400; color: var(--ink); }
#gate .srow.bad, #gate .srow.bad b { color: var(--rust); }
#gate .stampwrap { display: grid; place-items: center; margin-top: clamp(20px, 5.5vmin, 34px); }
/* The stamp is an SVG die: its rings and lines live in one coordinate space
   and scale as ONE unit with the sheet, so no wording, font fallback or
   viewport can push it past the plate (the HTML version overflowed the
   moment the die text grew — nowrap type keyed to the viewport cannot
   respect a width-capped container). 97% swallows the 3° rotation's reach. */
#gate .stamp {
  display: block; width: min(97%, 520px); height: auto;
  color: var(--rust); transform: rotate(-3deg);
  animation: gate-stamp 540ms cubic-bezier(0.16, 1.3, 0.3, 1) 260ms both;
}
#gate .stamp .st-s { font: 23px var(--sans); fill: currentColor; }
#gate .stamp .st-b { font: 700 64px var(--sans); fill: currentColor; }
#gate .how {
  margin: clamp(16px, 4.5vmin, 26px) auto 0; max-width: 40ch; text-align: center;
  font-family: var(--mono); font-size: clamp(9px, 2.7vmin, 12px);
  letter-spacing: 0.16em; text-transform: uppercase; color: var(--ink);
  line-height: 1.9; text-wrap: balance;
}
#gate .foot {
  margin-top: clamp(16px, 4.5vmin, 28px); padding-top: 0.7em;
  border-top: 1px solid var(--ink-3);
  display: flex; justify-content: space-between; gap: 1em; flex-wrap: wrap;
  font-size: clamp(7.5px, 2.2vmin, 9.5px); letter-spacing: 0.22em;
  text-transform: uppercase; color: var(--ink-3);
}
@keyframes gate-stamp {
  from { opacity: 0; transform: rotate(-3deg) scale(1.5); }
  to { opacity: 1; transform: rotate(-3deg) scale(1); }
}
@media (prefers-reduced-motion: reduce) {
  #gate .stamp { animation: none; }
}
`;function i(e,t,n){let r=Math.max(300,Math.round(t.length*50)),i=e=>Math.min(Math.round(e.length*23.5),r),a=r+170,o=a/2,s=(e,t,n,r)=>`<text x="${o}" y="${t}" class="${n}" text-anchor="middle" textLength="${r}" lengthAdjust="spacing">${e.toUpperCase()}</text>`;return`<svg class="stamp" viewBox="0 0 ${a} 240" role="img" aria-label="${t}"><rect x="8" y="8" width="${a-16}" height="224" fill="none" stroke="currentColor" stroke-width="7"/><rect x="23" y="23" width="${a-46}" height="194" fill="none" stroke="currentColor" stroke-width="4"/>`+s(e,74,`st-s`,i(e))+s(t,150,`st-b`,r)+s(n,205,`st-s`,i(n))+`</svg>`}function a(e,t){let n=document.createElement(`style`);n.textContent=r,document.head.appendChild(n);let a=(e,t,n)=>`<b>${e?t:n}</b>`,o=e=>e?`srow`:`srow bad`,s=document.createElement(`div`);s.id=`gate`,s.innerHTML=`<div class="sheet"><div class="kicker">Elysium Commons · Dome One</div><h1>Notice to visitors</h1><div class="rule"></div><p class="note">The park runs as a <b>desktop Chromium</b> application — WebGPU, pointer lock, a keyboard and a mouse. There is no mobile service and no other engine. The park is not going anywhere; return on desktop Chrome, Edge or any Chromium browser.</p><div class="survey"><div class="cap">Admission survey · this device</div><div class="${o(t.chromium)}"><span>Engine — Chromium</span>${a(t.chromium,`Pass`,`Fail`)}</div><div class="${o(t.desktop)}"><span>Device — Desktop</span>${a(t.desktop,`Pass`,`Fail`)}</div><div class="${o(t.webgpu)}"><span>Renderer — WebGPU</span>${a(t.webgpu,`Present`,`Absent`)}</div></div><div class="stampwrap">`+i(`Admission held`,`Chromium Desktop only`,`Gate S · The Loop`)+`</div><div class="how">Open on desktop Chrome, Edge or Chromium with WebGPU · gate S is always open</div><div class="foot"><span>Elysium Planitia, Mars · − 2 540 m</span><span>Sheet 00 · Sol 214</span></div></div>`,e.appendChild(s)}var o=`modulepreload`,s=function(e){return`/`+e},c={},l=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let e=document.getElementsByTagName(`link`),i=document.querySelector(`meta[property=csp-nonce]`),a=i?.nonce||i?.getAttribute(`nonce`);function l(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}function u(e){return import.meta.resolve?import.meta.resolve(e):new URL(e,import.meta.url).href}r=l(t.map(t=>{if(t=s(t,n),t=u(t),t in c)return;c[t]=!0;let r=t.endsWith(`.css`);for(let n=e.length-1;n>=0;n--){let i=e[n];if(i.href===t&&(!r||i.rel===`stylesheet`))return}let i=document.createElement(`link`);if(i.rel=r?`stylesheet`:o,r||(i.as=`script`),i.crossOrigin=``,i.href=t,a&&i.setAttribute(`nonce`,a),document.head.appendChild(i),r)return new Promise((e,n)=>{i.addEventListener(`load`,e),i.addEventListener(`error`,()=>n(Error(`Unable to preload CSS for ${t}`)))})}))}function i(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return r.then(t=>{for(let e of t||[])e.status===`rejected`&&i(e.reason);return e().catch(i)})},u=t();u.eligible?l(()=>import(`./main-pS1gDgLB.js`),[]):a(document.body,u);export{l as t};