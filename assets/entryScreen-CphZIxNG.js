var e=[{key:`render-pipeline`,code:`X-PEN`,name:`Plotter pens · calibration`},{key:`sky`,code:`E-SKY`,name:`Sky · butterscotch, held`},{key:`exterior`,code:`C-SITE`,name:`Elysium Planitia · ground`},{key:`starship`,code:`S-PAD`,name:`Launch site · OLIT, stack`},{key:`dome`,code:`A-SHEL`,name:`Dome One · shell, 13 rings`},{key:`groundworks`,code:`C-DECK`,name:`Park deck · levels, plinth`},{key:`player`,code:`G-FIG`,name:`Scale figure · 1.70 m eye`},{key:`archkit`,code:`A-KIT`,name:`Standard parts · tagged`},{key:`interiors`,code:`A-INT`,name:`Interiors · rooms, notes`},{key:`park`,code:`G-KEY`,name:`Key plan · districts`},{key:`tram`,code:`T-LOOP`,name:`The Loop · track, Gate S`},{key:`freedomElevator`,code:`A-TWR`,name:`Freedom Tower · lift, deck`},{key:`robots`,code:`M-GKR`,name:`Groundskeepers · GK series`},{key:`optimus-exhibit`,code:`M-OPT`,name:`Optimus court · the eight`},{key:`vegetation`,code:`L-PLNT`,name:`Planting · Tree 1`},{key:`fountain`,code:`P-FTN`,name:`The Fountain · basin, jets`},{key:`audio`,code:`M-AIR`,name:`Air handlers · runs, plant`},{key:`prewarm`,code:`X-INK`,name:`Inking · dimensions`}],t={physics:`groundworks`,interaction:`player`,doors:`interiors`,opsScreens:`interiors`},n={"render-pipeline":`Calibrating pens`,sky:`Plotting the sky`,exterior:`Contouring the plain`,starship:`Siting the launch pad`,dome:`Striking the shell`,groundworks:`Setting out levels`,player:`Adding the figure`,archkit:`Tagging the parts`,interiors:`Fitting out interiors`,park:`Drawing the key plan`,tram:`Laying the Loop`,freedomElevator:`Raising the tower`,robots:`Logging groundskeepers`,"optimus-exhibit":`Ranking the eight`,vegetation:`Planting Tree 1`,fountain:`Filling the basin`,audio:`Routing air handlers`,prewarm:`Pens down · inking`,ready:`Last layer · inking`},r={domeBase:130,domeCrown:64,domeSphere:164.031,domeCenterY:-100.031,thetaBase:.91495,ringStep:.070381,rings:13,oculusR:11.535,oculusY:63.594,hubR:2.4,ribDepth:[.62,1.55],ringDepth:[.5,1.15],ringHalf:[.15,.3],plinth:{inner:128.9,outer:131.7,top:1.15,bottom:-2.4},portal:{axisY:4.6,bore:6.15,tubeR:5.6,wallZ:128.4},floorR:122,rimWalk:112,boulevard:[91,103],loopR:97,platformEdge:95.6,deckDepth:6.6,canopyH:3.6,treeH:12,treeCanopy:4.6,soilRing:5.5,commons:{z:-54,r:11.3,roof:9.95,parapet:10.55,lantern:13.46,soffit:4.4,l2:5.05},car:{halfWidth:1.3,floor:.62,doorHead:1.94,cant:1.99,crown:2.428,skirt:-.4,seat:.456},eye:1.7,tower:{x:33,z:57,terraceR:12.76,terraceY:.986,padY:.55,legBaseR:7.8,legTopR:4.42,legBaseY:1.75,legTopY:37.946,twist:1.55,legs:16,rings:[5.2,13.6,18.8,22.8,26.2,29.3,32.5,35.7],deckY:38.746,deckR:5.45,wallHead:2.78,roof:[[5.45,3.05],[3.9,4.3],[2.3,5.45],[.78,6.25]],spireBase:44.646,tipY:49.296,glassY:50.196,glassR:160.681},ftn:{x:-38,z:-40,courtR:12.6,steps:[[9.3,.155],[8.62,.31]],basinR:6.98,wall:.62,copingY:.835,waterY:.645,floorY:.375,plinth:[[2.42,.79],[2.08,1.03],[1.74,1.27]],pedR:1.36,pedY:1.95,lower:{core:4.1,rimR:2.68,rimY:5.3},upper:{core:6.06,rimR:1.06,rimY:6.72},finialY:6.9,crownJetY:9.45},opt:{x:-28,z:70,courtR:9.4,plinthR:6,deckY:.6,riser:.15,tread:.36,steps:3,figure:1.73,rankPitch:2.4,signOffset:5.35,signClear:2.25,signPanel:1.06},ship:{x:-83,z:200,range:215,slabW:68.6,slabTop:.76,padY:-.44,towerX:-100.5,towerW:12.2,trussTop:132.86,crownTop:138.96,rodTop:145.46,armY:125.46,armLen:26.5,qdY:94.06,deckY:20.06,vehX:-77.6,vehR:4.5,boosterTop:91.06,noseY:141.3,noseLen:12.7}},i={w:1180,h:812},a=3.78,o={cx:592,ground:312},s=e=>o.cx-e*a,c=e=>o.ground-e*a,l={keyPlan:{x:0,y:410,w:404,h:396},detail:{x:424,y:410,w:366,h:218},mon:{x:424,y:646,w:366,h:160},launch:{x:810,y:410,w:370,h:176},notes:{x:810,y:604,w:370,h:202}},u={k:37.8,cx:556,gy:588},d=e=>u.cx+e*u.k,f=e=>u.gy-e*u.k,p={k:12.6,gy:780,ftnCx:436,optCx:672},m=e=>p.ftnCx+e*p.k,h=e=>p.optCx+e*p.k,g=e=>p.gy-e*p.k,_={k:.756,gy:564,domeCx:921,shipCx:1090},v=e=>_.domeCx+e*_.k,y=e=>_.shipCx+e*_.k,b=e=>_.gy-e*_.k,x=e=>String(Math.round(e*100)/100),S=(e,t,n,r,i)=>`<line x1="${x(e)}" y1="${x(t)}" x2="${x(n)}" y2="${x(r)}" class="${i}"/>`,C=(e,t,n,r,i)=>`<rect x="${x(e)}" y="${x(t)}" width="${x(Math.abs(n))}" height="${x(Math.abs(r))}" class="${i}"/>`,w=(e,t,n,r)=>`<circle cx="${x(e)}" cy="${x(t)}" r="${x(n)}" class="${r}"/>`,T=(e,t)=>`<path d="${e}" class="${t}"/>`,E=(e,t,n=!1)=>T(`M ${e.map(e=>`${x(e[0])} ${x(e[1])}`).join(` L `)}${n?` Z`:``}`,t);function D(e,t,n,r,i=`start`,a=0,o=0){let s=a===0?``:` transform="rotate(${a} ${x(e)} ${x(t)})"`,c=o===0?``:` textLength="${x(o)}" lengthAdjust="spacing"`;return`<text x="${x(e)}" y="${x(t)}" class="${r}" text-anchor="${i}"${s}${c}>${n}</text>`}function O(e,t){return C(e.x,e.y,e.w,e.h,`s0`)+D(e.x+12,e.y+17,t,`tb`)+S(e.x+12,e.y+22.5,e.x+e.w-12,e.y+22.5,`s2`)}var k=(e,t)=>S(e-3.4,t+3.4,e+3.4,t-3.4,`s1`);function A(e,t,n,r,i){let a=Math.sign(n-r)||1;return S(e,r+a*2.5,e,n+a*5,`s0`)+S(t,r+a*2.5,t,n+a*5,`s0`)+S(e,n,t,n,`s1`)+k(e,n)+k(t,n)+D((e+t)/2,n-4.5,i,`tn`,`middle`)}function j(e,t,n,r,i){let a=Math.sign(n-r)||1;return S(r+a*2.5,e,n+a*5,e,`s0`)+S(r+a*2.5,t,n+a*5,t,`s0`)+S(n,e,n,t,`s1`)+k(n,e)+k(n,t)+D(n-4.5,(e+t)/2,i,`tn`,`middle`,-90)}function M(e,t,n,r){return S(e,t,e+r*52,t,`s1`)+E([[e,t],[e-4.4,t-7.6],[e+4.4,t-7.6]],`s2`,!0)+E([[e,t],[e-4.4,t-7.6],[e,t-7.6]],`f2`,!0)+D(e+r*8,t-4,n,`tn`,r>0?`start`:`end`)}function N(e,t,n,r,i=`tx`,a=`s1`){let o=t[0]+n;return E([e,t,[o,t[1]]],a)+w(e[0],e[1],1.7,`f2`)+D(o+(n>0?4:-4),t[1]-3.6,r,i,n>0?`start`:`end`)}function P(e,t,n){let r=(t+n)/2;return E([[e,t],[e,r-9],[e-6.5,r-3.5],[e+6.5,r+3.5],[e,r+9],[e,n]],`s1`)}function F(e,t=.58){let n=`M ${x(e[0][0])} ${x(e[0][1])}`;for(let r=1;r<=e.length;r++){let i=e[r-1],a=e[r%e.length],o=Math.hypot(a[0]-i[0],a[1]-i[1])*t;n+=` A ${x(o)} ${x(o)} 0 0 1 ${x(a[0])} ${x(a[1])}`}return`${n} Z`}var ee=(e,t)=>{let n=Math.sin(e*12.9898+t*78.233)*43758.545;return n-Math.floor(n)};function I(e,t,n,r,i,a){let o=[];for(let s=0;s<i;s++){let c=s/i*Math.PI*2,l=.9+ee(s,a)*.2;o.push([e+Math.cos(c)*n*l,t+Math.sin(c)*r*l])}return o}var L=(e,t=0)=>(r.domeSphere+t)*Math.sin(e),R=(e,t=0)=>r.domeCenterY+(r.domeSphere+t)*Math.cos(e),z=(e,t,n)=>e+(t-e)*n,B=e=>z(r.ribDepth[0],r.ribDepth[1],e/r.thetaBase);function V(){let e=[];return e.push(`<defs><pattern id="hatch-earth" width="10" height="10" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">`+S(0,0,0,10,`s0`)+`</pattern><pattern id="hatch-cut" width="4.6" height="4.6" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">`+S(0,0,0,4.6,`s0`)+`</pattern></defs>`),e.push(S(o.cx,40,o.cx,336,`s0 chain`)),e.push(S(60,o.ground,1120,o.ground,`s0 chain`)),e.push(D(1030,o.ground-10,`± 0.000 PARK DECK DATUM`,`ts`,`end`)),e.push(D(24,392,`SECTION A–A`,`tt`)),e.push(S(24,398,232,398,`s3`)),e.push(S(24,401.5,232,401.5,`s0`)),e.push(D(244,392,`ON THE ARRIVAL AXIS, LOOKING WEST · 1:500`,`ts`)),e.push(U(O(l.keyPlan,`KEY PLAN · 1:2000`)+O(l.detail,`DETAIL A · PLATFORM EDGE AT GATE S · 1:50`)+O(l.mon,`THE MONUMENTS · 1:150`)+O(l.launch,`THE LAUNCH SITE · 1:2500`)+O(l.notes,`GENERAL NOTES`))),e.join(``)}var H=(e,t)=>`<g class="ly" data-layer="${e}">${t}</g>`,U=e=>`<g class="t3">${e}</g>`;function W(){let e=[[`0.13`,`s0`],[`0.25`,`s1`],[`0.35`,`s1 dash`],[`0.50`,`s2`],[`0.70`,`s3`],[`IFC`,`sk`],[`REV`,`sr`]],t=[D(596,393.4,`PENS`,`ts`)];return e.forEach((e,n)=>{let r=640+n*66;t.push(S(r,390,r+36,390,e[1])),t.push(D(r+18,402,e[0],`tn`,`middle`))}),H(`render-pipeline`,U(t.join(``)))}function G(){let e=[];e.push(w(150,54,11,`s2`));for(let t=0;t<12;t++){let n=t/12*Math.PI*2;e.push(S(150+Math.cos(n)*15,54+Math.sin(n)*15,150+Math.cos(n)*20,54+Math.sin(n)*20,`s1`))}e.push(S(116,88,212,88,`s0`)),e.push(T(`M 190 88 A 40 40 0 0 0 ${x(180.3)} ${x(72.6)}`,`s1`)),e.push(D(196,80,`27°`,`tn`)),e.push(D(116,108,`SUN · ALT 27° AZ 250° WSW`,`tx`)),e.push(D(116,121,`SOL 214, SHIFT 14 — HELD`,`ts`)),e.push(D(1166,30,`SKY: BUTTERSCOTCH · AERIAL PERSPECTIVE FROM 55 m`,`ts`,`end`));let t=r.oculusY/Math.tan(56.1*Math.PI/180),n=[s(r.oculusR),c(r.oculusY)],i=[s(-r.oculusR),c(r.oculusY)],a=[s(-r.oculusR-t),c(0)],o=[s(r.oculusR-t),c(0)];return e.push(E([n,o,a,i],`f1`,!0)),e.push(E([n,o],`s0`)),e.push(E([i,a],`s0`)),e.push(N([s(-26),c(36)],[s(-58),c(46)],64,`OCULUS SHAFT · PROJECTED 56°`)),H(`sky`,e.join(``))}function K(){let e=[],t=c(-1),n=s(r.plinth.outer),i=s(-r.plinth.outer);e.push(S(30,t,n,t,`s3`)),e.push(S(i,t,1162,t,`s3`)),e.push(C(30,t,n-30,24,`fe`)),e.push(C(i,t,1162-i,24,`fe`));for(let n=0;n<4;n++)e.push(S(42+n*15,t+30,48+n*15,t+30,`s0`)),e.push(S(1096+n*15,t+30,1102+n*15,t+30,`s0`));e.push(P(30,t-34,t+24)),e.push(P(1162,t-34,t+24)),e.push(D(36,248,`GROUND FALLS TO THE SOUTH PASS · SEE SHEET 07`,`ts`)),e.push(D(1130,276,`SITE ELEVATION − 2 540 m (MOLA)`,`ts`,`end`));let a=c(r.portal.axisY+r.portal.tubeR),o=c(r.portal.axisY-r.portal.tubeR);return e.push(S(44,a,s(r.portal.wallZ),a,`s2`)),e.push(S(44,o,s(r.portal.wallZ),o,`s2`)),e.push(S(44,c(r.portal.axisY),s(r.portal.wallZ+3),c(r.portal.axisY),`s0 chain`)),e.push(P(52,a-4,o+4)),e.push(N([70,o-2],[70,c(-7)],90,`TUBE Ø 11.2 → SOUTH PASS, 421 m`)),H(`exterior`,e.join(``))}function q(){let e=[],t=r.ringStep,n=r.domeSphere*a,i=(e,t)=>`M ${x(s(L(e)))} ${x(c(R(e)))} A ${x(n)} ${x(n)} 0 0 1 ${x(s(L(t)))} ${x(c(R(t)))}`;e.push(D(24,20,`SHELL: 24 RIBS AT 15° · 13 RING PARALLELS · 4 × 2 PANES PER BAY`,`ts`));for(let n of[1,-1]){let o=[],l=[];for(let e=0;e<=48;e++){let i=z(t,r.thetaBase,e/48),a=B(i);o.push([s(n*L(i,a)),c(R(i,a))]),l.push([s(n*L(i)),c(R(i))])}let u=[...o,...l.slice().reverse()];e.push(E(u,`fh`,!0)),e.push(E(u,`s2`,!0)),e.push(T(n>0?i(r.thetaBase,t):i(-t,-r.thetaBase),`s2`));for(let t=2;t<=r.rings;t++){let i=t*r.ringStep;if(i>r.thetaBase+1e-6)continue;let o=i/r.thetaBase,l=z(r.ringDepth[0],r.ringDepth[1],o),u=z(r.ringHalf[0],r.ringHalf[1],o),d=B(i),f=s(n*L(i,d+l/2)),p=c(R(i,d+l/2)),m=-n*i*180/Math.PI;e.push(`<g transform="translate(${x(f)} ${x(p)}) rotate(${x(m)})">`+C(-u*a,-l/2*a,u*2*a,l*a,`f2`)+`</g>`)}let d=s(n*r.plinth.outer),f=(r.plinth.outer-r.plinth.inner)*a,p=n>0?d:d-f;e.push(C(p,c(r.plinth.top),f,(r.plinth.top-r.plinth.bottom)*a,`fh`)),e.push(C(p,c(r.plinth.top),f,(r.plinth.top-r.plinth.bottom)*a,`s3`))}let o=c(r.oculusY);return e.push(C(s(r.oculusR)-3,o-7,6,7,`f2`)),e.push(C(s(-r.oculusR)-3,o-7,6,7,`f2`)),e.push(S(s(r.oculusR),o-3.5,s(-r.oculusR),c(r.domeCrown)-3.5,`s1`)),e.push(S(s(-r.oculusR),o-3.5,s(r.oculusR),c(r.domeCrown)-3.5,`s1`)),e.push(C(s(r.hubR),c(r.domeCrown)-5,r.hubR*2*a,5,`f2`)),e.push(N([s(-8),o-6],[700,40],70,`OCULUS Ø 23.07`)),e.push(N([s(78.6),c(43.9)],[330,98],40,`GLASS R 164.031 · CENTRE OFF SHEET`)),e.push(w(s(r.portal.wallZ),c(r.portal.axisY),r.portal.bore*a,`s1 dash`)),H(`dome`,e.join(``))}function J(){let e=[],t=c(0);e.push(S(s(r.plinth.inner),t,s(-r.plinth.inner),t,`s3`)),e.push(C(s(r.plinth.inner),t,r.plinth.inner*2*a,15,`fe`));for(let n of[1,-1])e.push(S(s(n*r.rimWalk),t,s(n*r.rimWalk),t-5,`s1`)),e.push(S(s(n*r.boulevard[0]),t,s(n*r.boulevard[0]),t-4,`s0`)),e.push(S(s(n*r.boulevard[1]),t,s(n*r.boulevard[1]),t-4,`s0`));return e.push(N([s(112),t-5],[s(105),c(11)],76,`RIM WALK r 112`)),e.push(N([s(-130),c(.6)],[s(-118),c(17)],-70,`PLINTH + 1.150 / FOOTING − 2.400`)),H(`groundworks`,e.join(``))}function Y(e,t,n){let r=e=>t-e*n;return w(e,r(1.71),.105*n,`f2`)+T(`M ${x(e-.2*n)} ${x(r(0))} L ${x(e-.2*n)} ${x(r(1.02))} L ${x(e-.24*n)} ${x(r(1.5))} L ${x(e-.1*n)} ${x(r(1.57))} L ${x(e+.1*n)} ${x(r(1.57))} L ${x(e+.24*n)} ${x(r(1.5))} L ${x(e+.2*n)} ${x(r(1.02))} L ${x(e+.2*n)} ${x(r(0))} L ${x(e+.07*n)} ${x(r(0))} L ${x(e+.07*n)} ${x(r(1))} L ${x(e-.07*n)} ${x(r(1))} L ${x(e-.07*n)} ${x(r(0))} Z`,`f2`)}function X(){let e=l.detail,t=d(2.72),n=f(r.car.floor),i=[];return i.push(Y(t,n,u.k)),i.push(j(f(r.car.floor+r.eye),n,t+40,t+13,`1700`)),i.push(D(e.x+e.w-14,452,`VISITOR · NO EVA · NO SUIT CHECK`,`ts`,`end`)),H(`player`,U(i.join(``)))}function Z(){let e=[],t=(e,t,n,r,i)=>S(e,t,n,r,`s0`)+w(n,r,1.7,`f2`)+w(e,t,12.5,`fp`)+w(e,t,12.5,`s1`)+D(e,t+3.4,i,`tn`,`middle`);return e.push(t(215,c(24.9),s(93),c(r.canopyH),`02`)),e.push(t(640,c(15.6),s(-r.soilRing),c(.52),`11`)),e.push(t(880,c(10.6),s(-104),c(.2),`07`)),e.push(D(1166,96,`PART TAGS TO THE STANDARD PARTS SCHEDULE, SHEET 05`,`ts`,`end`)),H(`archkit`,U(e.join(``)))}function Q(){let e=r.commons,t=[],n=s(e.z+e.r),i=s(e.z-e.r);t.push(C(n,c(e.roof),i-n,e.roof*a,`s2`)),t.push(S(n,c(e.soffit),i,c(e.soffit),`s1`)),t.push(S(n,c(e.l2),i,c(e.l2),`s1`)),t.push(S(n-11,c(e.roof),i+11,c(e.roof),`s2`)),t.push(C(n-11,c(e.parapet),i-n+22,(e.parapet-e.roof)*a,`s2`)),t.push(C(s(e.z+4.45),c(e.lantern),8.9*a,(e.lantern-e.parapet)*a,`s2`)),t.push(D(s(e.z),c(2.1),`ASSEMBLY`,`ts`,`middle`)),t.push(D(s(e.z),c(6.6),`GALLEY · CLINIC`,`ts`,`middle`)),t.push(N([s(e.z-8),c(e.lantern)],[s(e.z-26),c(21)],84,`THE COMMONS · DRUM Ø 22.6`));let o=l.notes,u=[[`ALL LEVELS TO PARK DECK DATUM ± 0.000.`,`THE SPRINGING IS THE DATUM.`],[`THE FREEDOM TOWER STANDS 33.0 IN FRONT`,`OF THE CUT, SO IT IS DRAWN IN CHAIN.`],[`NO EVA. THE SHELL IS SEALED AND STAYS`,`SEALED. 71.2 kPa, 21.4 °C, RH 34 %.`],[`MAINTAINED BY THE GK SERIES AND THE`,`EIGHT. IN PARK TODAY 214 OF 10 000.`],[`THE ONLY SOUND IS AIR, WATER, MACHINERY`,`AND THE TRAM. NOTHING IS PLAYED.`]],d=[],f=o.y+42;return u.forEach((e,t)=>{d.push(D(o.x+12,f,String(t+1),`tn`));for(let t of e)d.push(D(o.x+32,f,t,`tx`)),f+=14;f+=6}),H(`interiors`,t.join(``)+U(d.join(``)))}function te(){let e=l.keyPlan,t=a/4,n=e.x+202,i=e.y+214,o=e=>n+e*t,s=e=>i+e*t,c=[];c.push(w(n,i,r.plinth.outer*t,`s2`)),c.push(w(n,i,r.floorR*t,`s0`)),c.push(w(n,i,r.rimWalk*t,`s0 chain`)),c.push(w(n,i,r.boulevard[0]*t,`s0`)),c.push(w(n,i,r.boulevard[1]*t,`s0`)),c.push(w(n,i,r.loopR*t,`s2 chain`)),c.push(w(n,i,r.oculusR*t,`s0 dash`));let u=[[Math.PI/2,`GATE S`,`middle`,0,16],[.05,`FARMSIDE`,`start`,9,3.4],[Math.PI+.07,`OVERLOOK`,`end`,-9,-8]];for(let[e,t,n,i,a]of u){let l=o(Math.cos(e)*r.loopR),u=s(Math.sin(e)*r.loopR);c.push(C(l-4,u-4,8,8,`f2`)),c.push(D(l+i,u+a,t,`ts`,n))}c.push(w(o(-2),s(-54),11.3*t,`s2`)),c.push(D(o(-2),s(-54)-21,`THE COMMONS`,`ts`,`middle`)),c.push(w(o(37),s(23),7*t,`s2`)),c.push(w(o(-52),s(34),24*t,`s0 dash`)),c.push(D(o(-52),s(34)+4,`BOWL`,`ts`,`middle`)),c.push(w(o(r.ftn.x),s(r.ftn.z),28*t,`s0 dash`)),c.push(w(o(r.ftn.x),s(r.ftn.z),r.ftn.courtR*t,`s2`)),c.push(w(o(r.ftn.x),s(r.ftn.z),r.ftn.steps[0][0]*t,`s0`)),c.push(w(o(r.ftn.x),s(r.ftn.z),r.ftn.basinR*t,`f1`)),c.push(w(o(r.ftn.x),s(r.ftn.z),r.ftn.basinR*t,`s2`)),c.push(D(o(r.ftn.x),s(r.ftn.z)-20,`THE FOUNTAIN`,`ts`,`middle`)),c.push(E([[o(2),s(50)],[o(12),s(52)],[o(22.6),s(54.8)]],`s0`)),c.push(w(o(r.tower.x),s(r.tower.z),r.tower.terraceR*t,`s2`)),c.push(w(o(r.tower.x),s(r.tower.z),r.tower.legBaseR*t,`s0`)),c.push(w(o(r.tower.x),s(r.tower.z),r.tower.deckR*t,`f2`)),c.push(D(o(r.tower.x)+16,s(r.tower.z)+3.4,`FREEDOM TOWER`,`ts`)),c.push(E([[o(-2.4),s(73.2)],[o(-9),s(71.6)],[o(-22),s(70)]],`s0`)),c.push(w(o(r.opt.x),s(r.opt.z),r.opt.courtR*t,`s2`)),c.push(w(o(r.opt.x),s(r.opt.z),r.opt.plinthR*t,`f2`)),c.push(D(o(r.opt.x)-14,s(r.opt.z)+3.4,`THE EIGHT`,`ts`,`end`));for(let e=0;e<3;e++){let n=-22+e*22;c.push(C(o(53),s(n-4.5),34*t,9*t,`s2`))}c.push(D(o(70),s(40),`FARMSIDE A–C`,`ts`,`middle`)),c.push(`<g transform="rotate(20 ${x(o(48))} ${x(s(-58))})">`+C(o(48)-13*t,s(-58)-7.5*t,26*t,15*t,`s2`)+`</g>`),c.push(D(o(48)+20,s(-58)-8,`THE WORKS`,`ts`));for(let e=0;e<10;e++){let t=Math.PI+.18+e*.115;c.push(C(o(Math.cos(t)*88)-3,s(Math.sin(t)*88)-3,6,6,`s1`))}c.push(D(o(-67)-6,s(-76),`HABS 01–10`,`ts`,`end`)),c.push(C(o(-114)-5,s(-6)-9,10,18,`s2`)),c.push(S(n-9,i,n+9,i,`sr`)),c.push(S(n,i-9,n,i+9,`sr`)),c.push(w(n,i,r.soilRing*t,`sr`)),c.push(D(n+12,i-6,`TREE 1`,`tr`)),c.push(S(o(-6),s(r.portal.wallZ-4),o(-6),e.y+e.h-30,`s2`)),c.push(S(o(6),s(r.portal.wallZ-4),o(6),e.y+e.h-30,`s2`)),c.push(S(n,e.y+34,n,e.y+e.h-30,`s1 chain`));for(let t of[e.y+34,e.y+e.h-30])c.push(S(n,t,n-25,t,`s1`)),c.push(E([[n-25,t],[n-17,t-4],[n-17,t+4]],`f2`,!0)),c.push(w(n-34,t,9,`s2`)),c.push(D(n-34,t+3.6,`A`,`tb`,`middle`));let d=e.x+e.w-40,f=e.y+56;c.push(E([[d,f-22],[d+6,f+10],[d,f+3],[d-6,f+10]],`f2`,!0)),c.push(D(d,f+24,`N`,`tb`,`middle`));let p=e=>[o(-.3988995873452545*e),s(.9170105456212747*e)];c.push(E([p(136),p(184)],`s1 chain`));let[m,h]=p(190),[g,_]=p(178);return c.push(E([[m,h],[g-4.6,_-2.4],[g+3.4,_-5.6]],`f2`,!0)),c.push(D(p(170)[0]-8,p(170)[1]-4,`LAUNCH SITE 215 m`,`ts`,`end`)),c.push(D(e.x+12,e.y+e.h-8,`PARK Ø 260 · FLOOR r 122 · LOOP r 97 · 3 STOPS`,`ts`)),H(`park`,U(c.join(``)))}function ne(){let e=[],t=c(0);for(let n of[1,-1]){let i=s(n*r.loopR);e.push(S(i,t+12,i,t-22,`s0 chain`)),e.push(C(i-1.35*a,t-1,2.7*a,3,`f2`))}e.push(D(s(-r.loopR),t+22,`CL LOOP`,`ts`,`middle`));let n=s(r.platformEdge),i=s(r.platformEdge-r.deckDepth);return e.push(C(n,c(.9),i-n,.9*a,`fh`)),e.push(C(n,c(.9),i-n,.9*a,`s2`)),e.push(S(i,c(r.canopyH),n-4,c(r.canopyH+.26),`s2`)),e.push(S(i-8,c(r.canopyH),i-8,c(.9),`s2`)),e.push(C(s(r.loopR+1.3),c(r.car.floor+r.car.crown),2.6*a,(r.car.crown+.4)*a,`s2`)),e.push(N([n-6,c(2.2)],[252,152],-12,`GATE S · PORTAL STATION`)),e.push(D(240,165,`HEADWAY 4 MIN · 2 CARS · 8 m/s`,`ts`,`end`)),e.push(D(s(r.portal.wallZ)+6,c(11.5),`IRIS`,`ts`)),H(`tram`,e.join(``))+re()}function re(){let e=l.detail,t=r.car,n=t.floor,i=t.halfWidth,a=[];return a.push(S(u.cx,448,u.cx,604,`s0 chain`)),a.push(C(d(-.675),u.gy,1.35*u.k,9,`fh`)),a.push(C(d(-.675),u.gy,1.35*u.k,9,`s2`)),a.push(T(`M ${x(d(-1.12))} ${x(f(n+t.skirt))} L ${x(d(-i))} ${x(f(n))} L ${x(d(-i))} ${x(f(n+t.cant))} Q ${x(d(-i))} ${x(f(n+t.crown))} ${x(d(0))} ${x(f(n+t.crown))} Q ${x(d(i))} ${x(f(n+t.crown))} ${x(d(i))} ${x(f(n+t.cant))} L ${x(d(i))} ${x(f(n))} L ${x(d(1.12))} ${x(f(n+t.skirt))} Z`,`s3`)),a.push(S(d(-i),f(n),d(i),f(n),`s2`)),a.push(S(d(i),f(n)-2,d(i),f(n+t.doorHead)+2,`sp`)),a.push(S(d(i)-4,f(n+t.doorHead),d(i)+4,f(n+t.doorHead),`s2`)),a.push(C(d(.25),f(n+t.seat),.94*u.k,.12*u.k,`s1`)),a.push(C(d(-1.19),f(n+t.seat),.94*u.k,.12*u.k,`s1`)),a.push(C(d(1.4),f(n),e.x+e.w-14-d(1.4),.62*u.k,`fh`)),a.push(S(d(1.4),f(n),e.x+e.w-14,f(n),`s3`)),a.push(S(d(1.4),f(n),d(1.4),u.gy,`s3`)),a.push(C(d(1.6),f(n)-2,.4*u.k,2,`f2`)),a.push(D(d(1.82),f(n)+15,`TACTILE`,`ts`,`middle`)),a.push(A(d(-i),d(i),458,f(n+t.crown),`2600`)),a.push(A(u.cx,d(1.4),612,f(n),`1400`)),a.push(N([d(1.35),f(n+.4)],[d(3.2),520],30,`100 CLEAR`,`tn`)),a.push(j(f(n+t.doorHead),f(n),d(-2.1),d(-i),`1940`)),a.push(D(e.x+e.w-14,618,`LEVEL BOARDING · DOOR CLEAR 1760`,`ts`,`end`)),H(`tram`,U(a.join(``)))}function ie(){let e=r.tower,t=[],n=t=>s(e.z+t),i=t=>{let n=(t-e.legBaseY)/(e.legTopY-e.legBaseY),r=e.legBaseR,i=e.legTopR*Math.cos(e.twist),a=e.legTopR*Math.sin(e.twist),o=r+(i-r)*n,s=a*n;return Math.hypot(o,s)},o=e.glassR*a,l=t=>r.domeCenterY+Math.sqrt(e.glassR**2-t*t);t.push(T(`M ${x(s(92))} ${x(c(l(92)))} A ${x(o)} ${x(o)} 0 0 1 ${x(s(24))} ${x(c(l(24)))}`,`s1 chain`)),t.push(D(s(10),158,`GLASS AT x + 33.0 · R 160.681`,`ts`)),t.push(D(s(10),171,`SPIRE TIP HOLDS 0.900 UNDER IT`,`ts`));let u=[],d=(e.terraceY-(e.padY+.075))/3;for(let t=0;t<=3;t++){let r=e.terraceR-t*.74,i=e.padY+.075+t*d;u.push([n(r),c(i)],[n(r-.74),c(i)],[n(r-.74),c(i+d)])}t.push(E(u,`sk`)),t.push(E(u.map(e=>[2*n(0)-e[0],e[1]]),`sk`)),t.push(S(n(e.terraceR),c(e.padY+.075),n(-e.terraceR),c(e.padY+.075),`s0`));for(let r of[1,-1])for(let i=0;i<e.legs;i++){let a=i/e.legs*Math.PI*2;if(Math.cos(a)>.001)continue;let o=a+r*e.twist;t.push(S(n(e.legBaseR*Math.sin(a)),c(e.legBaseY),n(e.legTopR*Math.sin(o)),c(e.legTopY),`sf`))}for(let r of e.rings){let a=e.padY+r,o=i(a);t.push(S(n(o),c(a),n(-o),c(a),`sk`))}t.push(C(n(e.deckR),c(e.deckY),e.deckR*2*a,.62*a,`sk`));for(let r=-3;r<=3;r++){let i=r/3*(e.deckR-.1);t.push(S(n(i),c(e.deckY),n(i),c(e.deckY+e.wallHead),`sf`))}t.push(S(n(e.deckR),c(e.deckY+e.wallHead),n(-e.deckR),c(e.deckY+e.wallHead),`sk`));let f=e.roof.map(([t,r])=>[n(t),c(e.deckY+r)]),p=e.roof.map(([t,r])=>[n(-t),c(e.deckY+r)]);return t.push(E([...f].reverse().concat(p),`sk`)),t.push(E([[n(.34),c(e.spireBase)],[n(0),c(e.tipY)],[n(-.34),c(e.spireBase)]],`sk`)),t.push(M(n(0),c(e.tipY),`+ 49.296 SPIRE TIP`,1)),t.push(N([n(-e.deckR),c(e.deckY)],[455,212],46,`FREEDOM TOWER · DECK + 38.746`,`tb`,`s1`)),H(`freedomElevator`,t.join(``))}function ae(){let e=[],t=[],n=[];for(let e=0;e<=16;e++){let i=z(4*r.ringStep,8*r.ringStep,e/16),a=B(i)+.4;t.push([s(-L(i,a)),c(R(i,a))]),n.push([s(-L(i,a+1.35)),c(R(i,a+1.35))])}e.push(E([...t,...n.slice().reverse()],`s2`,!0));for(let r=0;r<=16;r+=2)e.push(E([t[r],n[r]],`s0`));for(let t of[4,8]){let n=t*r.ringStep;e.push(w(s(-L(n,B(n)+.2)),c(R(n,B(n)+.2)),2.4,`s1`))}e.push(N([n[8][0],n[8][1]],[900,70],36,`PANEWALKER · ONE LAP 34 MIN`)),e.push(D(1166,83,`GK-01 · GK-02 · SWEEP-1 · MULE-1 — NO STANDING CREW`,`ts`,`end`));let i=u.k,a=d(4.5),o=f(r.car.floor);return e.push(C(a-.21*i,o-.404*i,.42*i,.29*i,`s2`)),e.push(w(a-.123*i,o-.152*i,.152*i,`s2`)),e.push(w(a+.123*i,o-.152*i,.152*i,`s2`)),e.push(S(a,o-.404*i,a,o-.6*i,`s2`)),e.push(w(a,o-.6*i,2.4,`f2`)),e.push(D(a,o+15,`GK-01`,`ts`,`middle`)),H(`robots`,e.join(``))}function oe(){let e=[],t=c(0),n=r.treeH-r.treeCanopy*1.15;e.push(C(s(r.soilRing),c(.52),r.soilRing*2*a,.52*a,`fh`)),e.push(C(s(r.soilRing),c(.52),r.soilRing*2*a,.52*a,`s2`)),e.push(T(`M ${x(s(.42))} ${x(c(.38))} L ${x(s(.19))} ${x(c(n))} L ${x(s(-.19))} ${x(c(n))} L ${x(s(-.42))} ${x(c(.38))} Z`,`s2`));let i=c(r.treeH-r.treeCanopy*.92),l=r.treeCanopy*a;e.push(T(F(I(o.cx,i,l,l*.96,15,3)),`s2`));let u=c(11);e.push(E([[s(6.4),t],[s(6.4),u],[s(-6.4),u],[s(-6.4),t]],`s1 dash`)),e.push(D(s(6.4)-8,u+13,`PLANTING ENVELOPE 12.8 × 11.0`,`ts`,`end`)),e.push(T(F(I(o.cx,i-4,l+12,l+8,17,9)),`sr`)),e.push(E([[s(-13),c(21)],[s(-16.5),c(24.4)],[s(-9.5),c(24.4)]],`sr`,!0)),e.push(D(s(-13),c(22.1),`G`,`tr`,`middle`)),e.push(N([s(-4.5),c(12)],[s(-22),c(30)],104,`TREE 1 · GINKGO BILOBA · PLANTED SOL 1`,`tb`,`sr`)),e.push(D(s(-22)+108,c(30)+10,`12.0 m — 1.0 m ABOVE ENVELOPE. SEE REV G.`,`tr`));for(let n of[22,34,78,-20,-30,-74]){let r=s(n);e.push(T(F(I(r,c(2.2),8,6,8,n)),`s1`)),e.push(S(r,t,r,c(1.1),`s1`))}return e.push(A(s(r.soilRing),s(-r.soilRing),c(-6),t,`Ø 11.0 SOIL RING`)),H(`vegetation`,e.join(``))}function se(){let e=r.ftn,t=[],n=g(0),i=[[m(9.9),n],[m(e.steps[0][0]),n],[m(e.steps[0][0]),g(e.steps[0][1])],[m(e.steps[1][0]),g(e.steps[0][1])],[m(e.steps[1][0]),g(e.steps[1][1])],[m(e.basinR+e.wall),g(e.steps[1][1])],[m(e.basinR+e.wall),g(e.copingY)],[m(e.basinR),g(e.copingY)],[m(e.basinR),g(e.floorY)],[m(e.plinth[0][0]),g(e.floorY-.03)]];t.push(E(i,`fh`,!0)),t.push(E(i,`s3`)),t.push(C(m(0),g(e.waterY),e.basinR*p.k,(e.waterY-e.floorY+.03)*p.k,`f1`)),t.push(S(m(0),g(e.waterY),m(e.basinR),g(e.waterY),`s1`));let a=(e,t)=>[[m(t),g(e.core)],[m(e.rimR*.6),g(e.core+(e.rimY-e.core)*.44)],[m(e.rimR),g(e.rimY-.14)],[m(e.rimR),g(e.rimY)],[m(e.rimR*.93),g(e.rimY-.07)],[m(e.rimR*.11),g(e.rimY-.44)]],o=[[m(e.plinth[0][0]),g(e.floorY-.03)]];for(let t=0;t<e.plinth.length;t++){let[n,r]=e.plinth[t],i=e.plinth[t+1];o.push([m(n),g(r)],[m(i?i[0]:e.pedR),g(r)])}o.push([m(e.pedR),g(e.pedY)],[m(.34),g(e.pedY+.14)],[m(.34),g(e.lower.core)]),o.push(...a(e.lower,.34)),o.push([m(.3),g(e.upper.core)]),o.push(...a(e.upper,.3)),o.push([m(.12),g(e.finialY)],[m(0),g(e.finialY)],[m(0),g(e.floorY-.03)]),t.push(E(o,`fh`,!0)),t.push(E(o,`s3`,!0));let s=(t,n,r,i)=>T(`M ${x(m(t))} ${x(g(n))} Q ${x(m((t+r)/2))} ${x(g(n+i*2))} ${x(m(r))} ${x(g(e.waterY))}`,`s1 dash`);return t.push(s(6.3,e.waterY+.06,3.5,.9)),t.push(s(3.15,e.waterY+.08,5.55,.78)),t.push(S(m(0),g(e.finialY),m(0),g(8),`s1 dash`)),t.push(S(m(0),g(8),m(0),n,`s0 chain`)),t.push(D(m(.4),g(7.6),`CROWN JET + 9.45`,`tn`)),t.push(N([m(5.2),g(e.waterY)],[m(5.9),g(3.2)],22,`WATER + 0.645`,`tn`)),t.push(D(m(0),n+11,`THE FOUNTAIN · HALF SECTION`,`ts`)),t.push(D(m(0),n+22,`BASIN Ø 13.96 · SEAT 0.835`,`tn`)),H(`fountain`,U(t.join(``)))}function ce(){let e=r.opt,t=[],n=g(0),i=p.k;t.push(S(h(-8),n,h(8),n,`s2`));let a=e.steps*e.tread,o=[[h(-(e.plinthR+a)),n]];for(let t=1;t<=e.steps;t++)o.push([h(-(e.plinthR+a-(t-1)*e.tread)),g(t*e.riser)]),o.push([h(-(e.plinthR+a-t*e.tread)),g(t*e.riser)]);o.push([h(-e.plinthR),g(e.deckY)],[h(e.plinthR),g(e.deckY)]);for(let t=e.steps;t>=1;t--)o.push([h(e.plinthR+a-t*e.tread),g(t*e.riser)]),o.push([h(e.plinthR+a-(t-1)*e.tread),g(t*e.riser)]);o.push([h(e.plinthR+a),n]),t.push(E(o,`fh`,!0)),t.push(E(o,`s3`)),t.push(S(h(-e.plinthR),g(e.deckY-.075),h(e.plinthR),g(e.deckY-.075),`s0`));for(let n=0;n<4;n++){let r=(n-1.5)*e.rankPitch;t.push(Y(h(r+.5),g(e.deckY),i*.985)),t.push(Y(h(r-.5),g(e.deckY),i*.985))}return t.push(j(g(e.deckY+e.figure),g(e.deckY),h(e.plinthR+a)+12,h(4.2),`1730`)),t.push(D(l.mon.x+l.mon.w-12,n+11,`THE OPTIMUS COURT`,`ts`,`end`)),t.push(D(l.mon.x+l.mon.w-12,n+22,`PLINTH Ø 12.0 · EIGHT`,`tn`,`end`)),H(`optimus-exhibit`,U(t.join(``)))}function le(){let e=r.ship,t=[],n=b(0),i=_.k,a=e=>y(e);t.push(S(v(-138),n,v(138),n,`s2`));let o=r.domeSphere*i;t.push(T(`M ${x(v(r.domeBase))} ${x(n)} A ${x(o)} ${x(o)} 0 0 0 ${x(v(-r.domeBase))} ${x(n)}`,`s2`)),t.push(S(v(-r.tower.z*.42),b(r.tower.tipY),v(r.tower.z*.42),b(r.tower.tipY),`s0 dash`)),t.push(D(v(0),b(r.tower.tipY)-4,`FREEDOM TOWER + 49.30`,`tn`,`middle`)),t.push(D(v(0),n+13,`DOME ONE · CROWN + 64.000`,`ts`,`middle`)),t.push(S(a(-42),b(e.padY),a(34),b(e.padY),`s2`)),t.push(C(a(-38.3),b(e.slabTop),68.6*i,2.4*i,`fh`)),t.push(C(a(-38.3),b(e.slabTop),68.6*i,2.4*i,`s2`));let s=e.towerW/2,c=-17.5;t.push(C(a(c-s),b(e.rodTop),e.towerW*i,(e.rodTop-e.slabTop)*i,`s2`));for(let n=1;n<10;n++){let r=b(e.slabTop+(e.trussTop-e.slabTop)*n/10);t.push(S(a(c-s),r,a(c+s),r,`s0`))}t.push(S(a(c+s),b(e.armY),a(c+s+e.armLen),b(e.armY+1.4),`s2`)),t.push(S(a(c+s),b(e.armY-2.6),a(c+s+e.armLen),b(e.armY-.8),`s1`)),t.push(S(a(c+s),b(e.qdY),a(c+s+9),b(e.qdY),`s1`));let l=5.36;return t.push(C(a(-4.94),b(e.deckY),20.6*i,3.6*i,`s2`)),t.push(C(a(l-e.vehR),b(e.boosterTop),e.vehR*2*i,(e.boosterTop-e.deckY)*i,`s3`)),t.push(T(`M ${x(a(l-e.vehR))} ${x(b(e.boosterTop))} L ${x(a(l-e.vehR))} ${x(b(e.noseY-e.noseLen))} Q ${x(a(l-e.vehR))} ${x(b(e.noseY))} ${x(a(l))} ${x(b(e.noseY))} Q ${x(a(l+e.vehR))} ${x(b(e.noseY))} ${x(a(l+e.vehR))} ${x(b(e.noseY-e.noseLen))} L ${x(a(l+e.vehR))} ${x(b(e.boosterTop))} Z`,`s3`)),t.push(j(b(e.rodTop),b(e.padY),a(34)+14,a(c+s+e.armLen),`147 100`)),t.push(D(a(-4),n+13,`THE LAUNCH SITE · 215 m WSW`,`ts`,`middle`)),H(`starship`,U(t.join(``)))}function ue(){let e=[];for(let t of[1,-1]){let n=s(t*120);e.push(w(n,c(3.2),.6*a,`s2`)),e.push(w(n,c(3.2),.6*a-2.2,`s0`));for(let r=0;r<3;r++){let i=n-t*(14+r*13);e.push(S(i,c(3.2),i-t*9,c(3.2),`s1`)),e.push(E([[i-t*9,c(3.2)],[i-t*5.4,c(3.2)-2.6],[i-t*5.4,c(3.2)+2.6]],`f2`,!0))}}return e.push(N([s(120),c(3.8)],[s(108),c(20)],70,`AIR HANDLERS · CONTINUOUS · 21.4 °C`)),H(`audio`,e.join(``))}function de(){let e=[],t=c(0);e.push(A(s(r.domeBase),s(-r.domeBase),348,t,`260 000 SPAN AT SPRINGING`)),e.push(A(s(r.plinth.outer),s(-r.plinth.outer),366,t,`Ø 263 400 OVER PLINTH`)),e.push(A(s(r.oculusR),s(-r.oculusR),51,c(r.oculusY),`Ø 23 070`)),e.push(j(c(r.domeCrown),t,1146,s(-r.domeBase),`64 000 CROWN`)),e.push(M(s(-30),c(r.domeCrown),`+ 64.000 CROWN`,1));for(let t=0;t<5;t++){let n=872+t*10*a;e.push(C(n,367,10*a,5,t%2==0?`f2`:`s1`)),e.push(D(n,383,String(t*10),`tn`,`middle`))}return e.push(S(872,372,1061,372,`s2`)),e.push(D(1061,383,`50 m`,`tn`,`middle`)),e.push(D(872,361,`SCALE 1:500`,`ts`)),H(`prewarm`,e.join(``))}function fe(){return`<svg viewBox="0 0 ${i.w} ${i.h}" preserveAspectRatio="xMidYMid meet" aria-hidden="true">`+V()+W()+G()+K()+le()+q()+J()+X()+Z()+Q()+te()+ne()+ie()+ae()+ce()+oe()+se()+ue()+de()+`</svg>`}var $=(e,t)=>`<div class="zone ${e}">${t.map(e=>`<span>${e}</span>`).join(``)}</div>`;function pe(){let t=[`A`,`B`,`C`,`D`,`E`,`F`,`G`,`H`],n=[`1`,`2`,`3`,`4`],r=e.map(e=>`<div class="row" data-row="${e.key}"><span class="code">${e.code}</span><span class="name">${e.name}</span><span class="box"></span></div>`).join(``);return`<div class="trim">`+$(`t`,t)+$(`b`,t)+$(`l`,n)+$(`r`,n)+`</div><div class="plate"><div class="field">${fe()}<div class="note" role="alert"><div class="note-tag">Note</div><div class="note-head"></div><div class="note-body"></div></div></div><div class="margin"><div class="cap">Plot register<b><span class="count">00</span> / ${e.length}</b></div><div class="reg">${r}</div><div class="revs"><div class="rev"><i>F</i><b>SOL 190</b><span>Loop headway 6 → 4 min. Park opened.</span></div><div class="rev"><i>G</i><b>SOL 214</b><span>Tree 1 at 12.0 m — 1.0 m above planting envelope. Drawing amended to suit.</span></div><div class="rev last"><i>H</i><b>SOL 241</b><span>Freedom Tower, the Fountain, the Optimus court and the launch site added. Pen table and parts schedule to Sheet 05.</span></div></div><div class="fill"></div><div class="stampcell"><button type="button" disabled><span class="pending"><em class="p-top">Plotting</em><span class="p-num"><b class="pct">0</b><i>%</i></span><em class="p-now">Calibrating pens</em></span><span class="issued"><em>Admit one</em><b>Board</b><em>Gate S · The Loop</em></span><i class="hint">Click to board</i></button></div></div><div class="foot"><h1>Dome One — General Arrangement</h1><div class="sub">Section A–A · Key plan · Detail A · The monuments · The launch site · Sheet 03 of 12</div><div class="adm">Admission is by stamp. Gate S is always open.</div></div><div class="title"><div class="proj"><b>Elysium Commons</b><span>Elysium Planitia, Mars · − 2 540 m</span></div><div class="cells"><div><em>Scale</em><b>1:500</b></div><div><em>Sheet</em><b>03/12</b></div><div><em>Rev</em><b>H</b></div><div><em>Drawn</em><b>GK-04</b></div><div><em>Checked</em><b>GK-01</b></div><div><em>Date</em><b>SOL 241</b></div></div><div class="status"><em>Status</em>As built · Shift 14, held</div></div></div>`}function me(r){let i=document.createElement(`style`);i.textContent=`
#entry {
  --paper: #e8dfcd;
  --ink: #2a231b;
  --ink-2: rgba(42, 35, 27, 0.62);
  --ink-3: rgba(42, 35, 27, 0.34);
  --ink-4: rgba(42, 35, 27, 0.16);
  --rust: #a53c15;
  --sans: "Avenir Next Condensed", "Arial Narrow", "Helvetica Neue", Helvetica, Arial, sans-serif;
  --mono: ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace;
  --trim: clamp(7px, 0.85vmin, 17px);
  --gut: clamp(11px, 1.3vmin, 23px);
  position: fixed; inset: 0; z-index: 40;
  background-color: var(--paper);
  background-image:
    linear-gradient(153deg, rgba(255, 250, 238, 0.62), rgba(255, 250, 238, 0) 44%),
    linear-gradient(2deg, rgba(112, 82, 48, 0.11), rgba(112, 82, 48, 0) 26%),
    url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='g'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.86' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23g)' opacity='0.05'/%3E%3C/svg%3E");
  background-size: auto, auto, 200px 200px;
  color: var(--ink);
  font-family: var(--sans);
  font-variant-numeric: tabular-nums lining-nums;
  font-feature-settings: "tnum" 1, "lnum" 1;
  opacity: 1; transition: opacity 1.05s ease;
  overflow: hidden;
}
#entry.hidden { opacity: 0; pointer-events: none; }

/* --- plate furniture: trim, zone marks, frame ---------------------------- */
#entry .trim { position: absolute; inset: var(--trim); border: 1px solid var(--ink-3); }
#entry .zone {
  position: absolute; display: flex; overflow: hidden;
  font-family: var(--mono); font-size: clamp(5.5px, 0.66vmin, 8.5px);
  letter-spacing: 0.06em; color: var(--ink-3);
}
#entry .zone.t { top: 0; left: var(--gut); right: var(--gut); height: var(--gut); }
#entry .zone.b { bottom: 0; left: var(--gut); right: var(--gut); height: var(--gut); }
#entry .zone.l { left: 0; top: var(--gut); bottom: var(--gut); width: var(--gut); flex-direction: column; }
#entry .zone.r { right: 0; top: var(--gut); bottom: var(--gut); width: var(--gut); flex-direction: column; }
#entry .zone span { flex: 1 1 0; display: grid; place-items: center; }
#entry .zone.t span + span, #entry .zone.b span + span { border-left: 1px solid var(--ink-4); }
#entry .zone.l span + span, #entry .zone.r span + span { border-top: 1px solid var(--ink-4); }

#entry .plate {
  position: absolute; inset: calc(var(--trim) + var(--gut));
  border: 1px solid var(--ink);
  display: grid;
  grid-template-columns: minmax(0, 1fr) clamp(198px, 19.5vw, 420px);
  grid-template-rows: minmax(0, 1fr) auto;
  grid-template-areas: "field margin" "foot title";
}

/* --- the drawing field --------------------------------------------------- */
#entry .field {
  grid-area: field; position: relative; min-width: 0; min-height: 0;
  padding: clamp(5px, 0.7vmin, 13px);
}
#entry svg {
  display: block; width: 100%; height: 100%;
  fill: none; stroke: none; stroke-linejoin: round;
}
#entry svg text { stroke: none; }
#entry .s0 { stroke: var(--ink-3); stroke-width: 0.9; }
#entry .s1 { stroke: var(--ink-2); stroke-width: 1.1; }
#entry .s2 { stroke: var(--ink); stroke-width: 1.6; }
#entry .s3 { stroke: var(--ink); stroke-width: 2.6; }
#entry .sr { stroke: var(--rust); stroke-width: 1.5; }
#entry .sp { stroke: var(--paper); stroke-width: 3.6; }
/* Work standing IN FRONT of the cutting plane — long-dash-dot, the drafting
   convention that keeps the Freedom Tower legible as "nearer than the cut"
   without pretending it was sectioned. Its lattice is inked at .sf. */
#entry .sk { stroke: var(--ink-2); stroke-width: 1.2; stroke-dasharray: 13 3 1.6 3; }
#entry .sf { stroke: var(--ink-3); stroke-width: 0.85; }
#entry .dash { stroke-dasharray: 7 4; }
#entry .chain { stroke-dasharray: 15 3.5 2 3.5; }
#entry .f1 { fill: rgba(42, 35, 27, 0.09); }
#entry .f2 { fill: var(--ink); }
#entry .fp { fill: var(--paper); }
#entry .fe { fill: url(#hatch-earth); }
#entry .fh { fill: url(#hatch-cut); }
#entry .tx { fill: var(--ink-2); font-family: var(--sans); font-size: 12px; letter-spacing: 0.09em; }
#entry .tb { fill: var(--ink); font-family: var(--sans); font-size: 12px; letter-spacing: 0.09em; }
#entry .ts { fill: var(--ink-2); font-family: var(--sans); font-size: 9.5px; letter-spacing: 0.09em; }
#entry .tn { fill: var(--ink-2); font-family: var(--mono); font-size: 10px; letter-spacing: 0.01em; }
#entry .tt { fill: var(--ink); font-family: var(--sans); font-size: 15.5px; letter-spacing: 0.16em; }
#entry .tr { fill: var(--rust); font-family: var(--sans); font-size: 10.5px; letter-spacing: 0.09em; }
#entry .ly { opacity: 0; transition: opacity 620ms ease; }
#entry .ly.on { opacity: 1; }
/* Tier-3 ink: the accompaniment boxes (pen table, key plan, Detail A, parts,
   notes). Demoted so the section + register read first; still rich as
   texture. Multiplies with the .ly plot-in, so a t3 box inks straight to
   its demoted weight. */
#entry .t3 { opacity: 0.55; }
#entry.void .field svg { opacity: 0.14; }

/* --- the halt note (WebGPU refusal) -------------------------------------- */
#entry .note {
  position: absolute; left: 6%; right: 6%; top: 50%; transform: translateY(-50%);
  display: none; padding: clamp(14px, 2vmin, 26px) clamp(16px, 2.4vmin, 32px);
  background: var(--paper); border: 1.6px solid var(--rust);
  box-shadow: 0 0 0 4px var(--paper);
}
#entry.void .note { display: block; }
#entry .note-tag {
  font-size: clamp(8px, 0.95vmin, 11px); letter-spacing: 0.4em;
  text-transform: uppercase; color: var(--rust);
}
#entry .note-head {
  margin: 0.5em 0 0.45em; font-size: clamp(15px, 1.9vmin, 24px);
  letter-spacing: 0.14em; text-transform: uppercase; color: var(--ink);
}
#entry .note-body {
  max-width: 62ch; font-family: var(--mono); font-size: clamp(11px, 1.15vmin, 14px);
  line-height: 1.65; letter-spacing: 0.01em; color: var(--ink);
}

/* --- right margin: plot register, revisions ------------------------------ */
#entry .margin {
  grid-area: margin; border-left: 1px solid var(--ink);
  display: flex; flex-direction: column; min-height: 0; overflow: hidden;
}
#entry .cap {
  display: flex; justify-content: space-between; align-items: baseline;
  padding: 0.62em 0.85em 0.5em;
  font-size: clamp(8px, 0.92vmin, 11px); letter-spacing: 0.24em;
  text-transform: uppercase; color: var(--ink);
  border-bottom: 1px solid var(--ink-3);
}
#entry .cap b { font-family: var(--mono); font-weight: 400; letter-spacing: 0.04em; color: var(--ink-2); }
#entry .reg { padding: 0.15em 0.85em 0.3em; }
#entry .row {
  display: grid; grid-template-columns: 4.6em 1fr 0.62em; gap: 0.55em;
  align-items: center; min-height: clamp(14px, 1.85vh, 27px);
  border-bottom: 1px solid var(--ink-4);
  font-size: clamp(7.6px, 0.88vmin, 10.5px); letter-spacing: 0.1em;
  text-transform: uppercase; color: var(--ink-4);
  transition: color 380ms ease;
}
#entry .row .code { font-family: var(--mono); letter-spacing: 0.02em; }
#entry .row .name { overflow: hidden; white-space: nowrap; text-overflow: ellipsis; }
#entry .row .box {
  width: 0.62em; height: 0.62em; border: 1px solid currentColor;
  transition: background 380ms ease;
}
#entry .row.done { color: var(--ink-2); }
#entry .row.done .box { background: var(--ink-2); }
#entry .row.now { color: var(--rust); }
#entry .row.now .box { background: linear-gradient(90deg, var(--rust) 50%, transparent 50%); }
#entry .revs { padding: 0.9em 0.85em 0.2em; }
#entry .rev {
  display: grid; grid-template-columns: 1.1em 3.9em 1fr; gap: 0.5em;
  padding: 0.42em 0; border-top: 1px solid var(--ink-4);
  font-size: clamp(7.2px, 0.82vmin, 10px); letter-spacing: 0.08em;
  text-transform: uppercase; line-height: 1.35; color: var(--ink-2);
}
#entry .rev i { font-style: normal; font-family: var(--mono); color: var(--rust); }
#entry .rev b { font-weight: 400; font-family: var(--mono); letter-spacing: 0; }
#entry .rev.last { color: var(--ink); }
#entry .fill { flex: 1 1 auto; min-height: 0.6em; }

/* --- the stamp: the one action ------------------------------------------- */
#entry .stampcell { padding: 0.6em 0.85em 1.1em; }
#entry button {
  appearance: none; -webkit-appearance: none; display: block;
  position: relative; width: 100%; height: clamp(62px, 8.4vh, 108px);
  margin: 0; padding: 0; border: 0; background: none; font: inherit;
  color: inherit; cursor: default;
}
#entry button > span {
  position: absolute; display: flex; flex-direction: column;
  align-items: center; justify-content: center; text-align: center;
}
#entry .pending {
  inset: 0; gap: 0.15em; border: 1px dashed var(--ink-3); color: var(--ink-3);
}
#entry .pending em {
  font-style: normal; font-size: clamp(7px, 0.8vmin, 9.5px);
  letter-spacing: 0.3em; text-indent: 0.3em; text-transform: uppercase;
}
#entry .pending .p-now {
  color: var(--ink); max-width: 94%; overflow: hidden;
  white-space: nowrap; text-overflow: ellipsis;
}
#entry .p-num {
  display: flex; align-items: baseline; gap: 0.1em; color: var(--ink);
  font-family: var(--mono); line-height: 1;
}
#entry .p-num b { font-size: clamp(19px, 2.6vh, 34px); font-weight: 400; }
#entry .p-num i { font-style: normal; font-size: clamp(9px, 1.2vh, 14px); }
#entry.void .p-num { display: none; }
#entry.void .pending { border-color: var(--rust); border-style: solid; }
#entry.void .pending em { color: var(--rust); }
/* Ready: hierarchy inverts in one move. The button leaves the register cell
   (fixed against the #entry overlay, which is the viewport) and lands as a
   full-size stamp over the washed plate — the primary element, then paper. */
#entry button.ready {
  cursor: pointer;
  position: fixed; left: 50%; top: 53%;
  width: min(max(44vw, 52vmin), 86vw, 900px);
  height: auto; aspect-ratio: 3.15 / 1; max-height: 34vh;
  transform: translate(-50%, -50%);
}
#entry .issued {
  inset: 0; gap: 0.3em; transform: rotate(-3deg);
  border: 2.5px solid var(--rust); color: var(--rust);
  background-color: rgba(232, 223, 205, 0.62);
  box-shadow: inset 0 0 0 4.5px var(--paper), inset 0 0 0 6.5px var(--rust);
  transition: transform 160ms ease;
}
#entry .issued em {
  font-style: normal; font-size: clamp(10px, 1.7vmin, 21px);
  letter-spacing: 0.42em; text-indent: 0.42em; text-transform: uppercase;
}
#entry .issued b {
  font-size: clamp(30px, 6.6vmin, 84px); font-weight: 700; line-height: 1.06;
  letter-spacing: 0.24em; text-indent: 0.24em; text-transform: uppercase;
}
/* The one line allowed to break costume: an explicit affordance. */
#entry .hint {
  position: absolute; left: 50%; top: calc(100% + 1em);
  transform: translateX(-50%);
  display: none; white-space: nowrap; font-style: normal;
  font-family: var(--mono); font-size: clamp(9px, 1.15vmin, 13px);
  letter-spacing: 0.34em; text-indent: 0.34em; text-transform: uppercase;
  color: var(--ink-2);
}
#entry button.ready .hint { display: block; animation: entry-hint 420ms ease 980ms both; }
#entry button:not(.ready) .issued { display: none; }
#entry button.ready .pending { display: none; }
#entry button.ready .issued { animation: entry-stamp 540ms cubic-bezier(0.16, 1.3, 0.3, 1) 260ms both; }
#entry button.ready:hover .issued, #entry button.ready:focus-visible .issued {
  background-image: linear-gradient(rgba(165, 60, 21, 0.08), rgba(165, 60, 21, 0.08));
  transform: rotate(-3deg) scale(1.02);
}
#entry button.ready:active .issued { transform: rotate(-3deg) scale(0.985); }
#entry button:focus-visible { outline: none; }
#entry button.ready:focus-visible .issued { outline: 1.5px dashed var(--rust); outline-offset: 7px; }
/* The finished sheet steps back so the stamp owns the frame. */
#entry .field svg, #entry .cap, #entry .reg, #entry .revs,
#entry .title, #entry .foot, #entry .trim { transition: opacity 760ms ease; }
#entry.done .field svg { opacity: 0.4; }
#entry.done .cap, #entry.done .reg, #entry.done .revs { opacity: 0.42; }
#entry.done .title, #entry.done .foot, #entry.done .trim { opacity: 0.5; }

/* --- title block and sheet caption --------------------------------------- */
#entry .title { grid-area: title; border-left: 1px solid var(--ink); border-top: 1px solid var(--ink); }
#entry .proj { padding: 0.75em 0.85em 0.6em; }
#entry .proj b {
  display: block; font-size: clamp(11px, 1.28vmin, 17px); font-weight: 700;
  letter-spacing: 0.15em; text-transform: uppercase; color: var(--ink);
}
#entry .proj span {
  display: block; margin-top: 0.35em;
  font-size: clamp(7px, 0.8vmin, 9.5px); letter-spacing: 0.2em;
  text-transform: uppercase; color: var(--ink-2);
}
#entry .cells { display: grid; grid-template-columns: repeat(3, 1fr); }
#entry .cells div {
  padding: 0.42em 0.6em 0.45em;
  border-top: 1px solid var(--ink-3); border-left: 1px solid var(--ink-3);
}
#entry .cells div:nth-child(3n + 1) { border-left: 0; }
#entry .cells em {
  display: block; font-style: normal; font-size: clamp(6px, 0.68vmin, 8px);
  letter-spacing: 0.2em; text-transform: uppercase; color: var(--ink-3);
}
#entry .cells b {
  display: block; margin-top: 0.25em; font-family: var(--mono); font-weight: 400;
  font-size: clamp(8px, 0.92vmin, 11.5px); letter-spacing: 0.02em; color: var(--ink);
}
#entry .status {
  display: flex; gap: 0.8em; align-items: baseline;
  padding: 0.45em 0.85em 0.6em; border-top: 1px solid var(--ink-3);
  font-size: clamp(7px, 0.82vmin, 10px); letter-spacing: 0.16em;
  text-transform: uppercase; color: var(--ink);
}
#entry .status em { font-style: normal; color: var(--ink-3); letter-spacing: 0.2em; }
#entry .foot {
  grid-area: foot; border-top: 1px solid var(--ink);
  display: flex; align-items: baseline; gap: 1.6em; flex-wrap: wrap;
  padding: 0.75em 1em 0.8em;
}
#entry .foot h1 {
  margin: 0; font-size: clamp(10px, 1.2vmin, 16px); font-weight: 700;
  letter-spacing: 0.2em; text-transform: uppercase; color: var(--ink);
}
#entry .foot .sub, #entry .foot .adm {
  font-size: clamp(7px, 0.82vmin, 10px); letter-spacing: 0.18em;
  text-transform: uppercase; color: var(--ink-2);
}
#entry .foot .adm { margin-left: auto; text-align: right; color: var(--ink-3); }

@media (max-width: 1000px) {
  #entry .revs, #entry .foot .adm { display: none; }
}
@media (max-height: 620px) {
  #entry .revs { display: none; }
}
@keyframes entry-stamp {
  from { opacity: 0; transform: rotate(-3deg) scale(1.6); }
  to { opacity: 1; transform: rotate(-3deg) scale(1); }
}
@keyframes entry-hint {
  from { opacity: 0; }
  to { opacity: 1; }
}
@media (prefers-reduced-motion: reduce) {
  #entry .ly, #entry .row, #entry .issued, #entry .field svg, #entry .cap,
  #entry .reg, #entry .revs, #entry .title, #entry .foot, #entry .trim { transition: none; }
  #entry button.ready .issued, #entry button.ready .hint { animation: none; }
}
`,document.head.appendChild(i);let a=document.createElement(`div`);a.id=`entry`,a.innerHTML=pe(),r.appendChild(a);let o=a.querySelector(`button`),s=a.querySelector(`.pct`),c=a.querySelector(`.p-now`),l=a.querySelector(`.p-top`),u=a.querySelector(`.count`),d=e.map(e=>a.querySelector(`[data-row="${e.key}"]`)),f=e.map(e=>Array.from(a.querySelectorAll(`[data-layer="${e.key}"]`))),p=-1,m=null,h=e=>{if(!(e<=p)){for(let t=p+1;t<=e;t++){for(let e of f[t])e.classList.add(`on`);d[t].classList.add(`done`),t>0&&d[t-1].classList.remove(`now`)}d[e].classList.remove(`done`),d[e].classList.add(`now`),p=e,u.textContent=String(e+1).padStart(2,`0`)}},g=n=>{let r=t[n]??n;return r===`ready`?e.length-1:e.findIndex(e=>e.key===r)};return{setProgress(e,t){let r=g(e);r>=0&&h(r);let i=n[e];i&&(c.textContent=i),s.textContent=String(Math.round(Math.min(1,Math.max(0,t))*100))},showError(e,t){m!==null&&(window.clearTimeout(m),m=null),i.isConnected||document.head.appendChild(i),a.isConnected||r.appendChild(a),a.classList.remove(`hidden`,`done`),a.classList.add(`void`),o.disabled=!0,o.classList.remove(`ready`);let n=a.querySelector(`.note-head`),s=a.querySelector(`.note-body`);n.textContent=e,s.textContent=t,l.textContent=`Plot halted`,c.textContent=`Not issued`,u.textContent=`--`},showEnter(){for(let t=0;t<e.length;t++){for(let e of f[t])e.classList.add(`on`);d[t].classList.remove(`now`),d[t].classList.add(`done`)}return p=e.length-1,u.textContent=String(e.length),s.textContent=`100`,a.classList.add(`done`),o.disabled=!1,o.classList.add(`ready`),o.focus({preventScroll:!0}),new Promise(e=>{o.addEventListener(`click`,()=>e(),{once:!0})})},hide(){a.classList.add(`hidden`),m!==null&&window.clearTimeout(m),m=window.setTimeout(()=>{m=null,a.remove(),i.remove()},1200)}}}export{me as createEntryScreen};