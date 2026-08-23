import fs from 'node:fs';
import path from 'node:path';

const root = path.resolve('ai-portfolio');
const index = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
const match = index.match(/const WORKS = (\[[\s\S]*?\]);\n\nconst CATS/);
if (!match) throw new Error('WORKS data not found in index.html');
const works = JSON.parse(match[1]);

const css = String.raw`<style id="mira-lab-style">
:root{--lab-a:#b84b31;--lab-b:#c8dc72;--lab-bg:#171a12;--lab-paper:#e9e2d4;--lab-line:rgba(233,226,212,.22);--lab-grain:.12}
#mira-lab{position:fixed;inset:0;z-index:2147483000;pointer-events:none;font-family:"SF Mono",Menlo,monospace;font-size:10px;letter-spacing:.08em;color:var(--lab-paper);line-height:1.35}
#mira-lab *{box-sizing:border-box}#lab-launch{pointer-events:auto;position:fixed;right:20px;bottom:20px;border:1px solid var(--lab-paper);background:var(--lab-bg);color:var(--lab-paper);padding:10px 13px;font:10px inherit;letter-spacing:.1em;box-shadow:5px 5px 0 var(--lab-a);cursor:pointer;transition:transform .18s,background .18s;color .18s}#lab-launch:hover{transform:translate(-3px,-3px);background:var(--lab-a)}#lab-launch b{color:var(--lab-b);font-weight:400}
#lab-panel{pointer-events:auto;position:fixed;right:20px;bottom:66px;width:min(360px,calc(100vw - 28px));max-height:min(690px,calc(100vh - 92px));overflow:auto;background:rgba(23,32,24,.97);border:1px solid var(--lab-paper);box-shadow:10px 10px 0 var(--lab-a);padding:18px;display:none}#lab-panel.open{display:block;animation:lab-in .2s ease-out}@keyframes lab-in{from{opacity:0;transform:translateY(10px)}to{opacity:1;transform:none}}
.lab-head{display:flex;justify-content:space-between;align-items:flex-start;border-bottom:1px solid var(--lab-line);padding-bottom:14px;margin-bottom:15px}.lab-head small{display:block;color:rgba(233,226,212,.5);font-size:8px;letter-spacing:.14em;margin-bottom:5px}.lab-head strong{display:block;font:400 19px/1.05 Didot,"Bodoni MT",Georgia,serif;letter-spacing:-.02em}.lab-close{background:transparent;color:var(--lab-paper);border:0;font:18px/1 monospace;padding:0;cursor:pointer}.lab-status{display:flex;justify-content:space-between;align-items:center;margin-bottom:18px}.lab-status span{color:rgba(233,226,212,.5);font-size:8px}.lab-status b{color:var(--lab-b);font-weight:400;font-size:9px}.lab-pulse{display:inline-block;width:6px;height:6px;margin-right:6px;background:var(--lab-b);box-shadow:0 0 0 3px rgba(200,220,114,.15)}
.lab-grid{display:grid;grid-template-columns:1fr 1fr;gap:12px;border-top:1px solid var(--lab-line);border-bottom:1px solid var(--lab-line);padding:14px 0;margin-bottom:14px}.lab-control label{display:flex;justify-content:space-between;color:rgba(233,226,212,.62);font-size:8px;margin-bottom:6px}.lab-control output{color:var(--lab-paper)}.lab-control input{width:100%;accent-color:var(--lab-a);height:18px}.lab-actions{display:grid;grid-template-columns:1fr 1fr;gap:7px;margin:0 0 18px}.lab-actions button{border:1px solid var(--lab-line);background:transparent;color:var(--lab-paper);padding:9px 8px;font:9px inherit;letter-spacing:.06em;cursor:pointer;transition:all .18s}.lab-actions button:hover,.lab-actions button.active{background:var(--lab-a);border-color:var(--lab-a);color:#fff}.lab-actions button.primary{background:var(--lab-b);border-color:var(--lab-b);color:var(--lab-bg)}
.lab-label{font-size:8px;color:rgba(233,226,212,.48);letter-spacing:.15em;margin-bottom:8px}.lab-phases{display:grid;gap:5px}.lab-phase{display:grid;grid-template-columns:24px 1fr auto;align-items:center;gap:8px;border:1px solid transparent;padding:7px 8px;color:rgba(233,226,212,.57);cursor:pointer;transition:all .18s}.lab-phase:hover,.lab-phase.active{border-color:var(--lab-line);background:rgba(233,226,212,.055);color:var(--lab-paper)}.lab-phase i{font-style:normal;color:var(--lab-a);font-size:8px}.lab-phase b{font-weight:400;font-size:9px}.lab-phase span{font-size:8px;color:rgba(233,226,212,.45)}.lab-log{margin-top:14px;border-top:1px solid var(--lab-line);padding-top:12px;color:rgba(233,226,212,.56);font-size:8px;line-height:1.75;min-height:42px}.lab-log b{font-weight:400;color:var(--lab-b)}
#lab-cursor{position:fixed;left:0;top:0;width:26px;height:26px;border:1px solid var(--lab-a);transform:translate(-50%,-50%);pointer-events:none;opacity:0;mix-blend-mode:difference;transition:opacity .2s,width .15s,height .15s}.lab-active #lab-cursor{opacity:.8}.lab-active #lab-cursor:after{content:"";position:absolute;left:50%;top:-7px;width:1px;height:40px;background:var(--lab-a);transform:translateX(-50%)}.lab-active #lab-cursor:before{content:"";position:absolute;top:50%;left:-7px;width:40px;height:1px;background:var(--lab-a);transform:translateY(-50%)}
#lab-grain{position:fixed;inset:0;opacity:var(--lab-grain);pointer-events:none;mix-blend-mode:multiply;background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='180' height='180' viewBox='0 0 180 180'%3E%3Cfilter id='f'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.78' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23f)' opacity='.8'/%3E%3C/svg%3E")}.lab-outline *{outline:1px solid rgba(184,75,49,.22)!important}.lab-outline canvas{outline:2px solid var(--lab-a)!important}
@media(max-width:520px){#lab-launch{right:12px;bottom:12px}.lab-panel{right:12px!important;bottom:55px!important}}
</style>`;

const js = String.raw`<script id="mira-lab-script">
(()=>{const root=document.getElementById('mira-lab'),panel=document.getElementById('lab-panel'),launch=document.getElementById('lab-launch'),cursor=document.getElementById('lab-cursor'),log=document.getElementById('lab-log'),status=document.getElementById('lab-state'),grain=document.getElementById('lab-grain'),pageKey=root.dataset.project||'project';let seed=Date.now()%100000,phase=0,timer;
const q=s=>document.querySelector(s),qa=s=>[...document.querySelectorAll(s)];
function write(message){log.innerHTML='<b>'+String(new Date().toLocaleTimeString([], {hour:'2-digit',minute:'2-digit',second:'2-digit'}))+'</b>  '+message}
function setPhase(i){phase=i;qa('.lab-phase').forEach((el,n)=>el.classList.toggle('active',n===i));const names=['brief / intent is pinned','generate / variation is alive','curate / signal over noise','ship / ready for review'];status.textContent=names[i].split(' / ')[0].toUpperCase();write(names[i]);}
function open(){panel.classList.add('open');launch.innerHTML='LAB / <b>CLOSE</b> ×';document.body.classList.add('lab-active');setPhase(phase)}
function close(){panel.classList.remove('open');launch.innerHTML='LAB / <b>OPEN</b> ↗';document.body.classList.remove('lab-active')}
launch.addEventListener('click',()=>panel.classList.contains('open')?close():open());q('.lab-close').addEventListener('click',close);
document.addEventListener('pointermove',e=>{cursor.style.left=e.clientX+'px';cursor.style.top=e.clientY+'px';document.documentElement.style.setProperty('--lab-pointer-x',e.clientX+'px');document.documentElement.style.setProperty('--lab-pointer-y',e.clientY+'px')});
qa('.lab-phase').forEach((el,i)=>el.addEventListener('click',()=>setPhase(i)));
const grainCtl=q('#lab-grain-control'),tempoCtl=q('#lab-tempo-control'),tensionCtl=q('#lab-tension-control');
grainCtl.addEventListener('input',e=>{document.documentElement.style.setProperty('--lab-grain',(e.target.value/100).toFixed(2));q('#lab-grain-value').textContent=e.target.value+'%';write('surface / grain '+e.target.value+'%')});
tempoCtl.addEventListener('input',e=>{document.documentElement.style.setProperty('--lab-tempo',e.target.value);q('#lab-tempo-value').textContent=e.target.value+'%';write('motion / tempo '+e.target.value+'%')});
tensionCtl.addEventListener('input',e=>{document.documentElement.style.setProperty('--lab-tension',e.target.value);q('#lab-tension-value').textContent=e.target.value+'%';document.body.style.filter='contrast('+(1+e.target.value/520)+') saturate('+(1+e.target.value/400)+')';write('material / tension '+e.target.value+'%')});
function clickGenerator(){const btn=qa('button').find(b=>/regener|random|再生|生成|new |reset|reseed|regrow|重置|随机|restart/i.test((b.textContent||'').trim())&&!b.closest('#mira-lab'));if(btn){btn.click();return btn.textContent.trim().slice(0,28)}const ev=new Event('change',{bubbles:true});qa('input[type=range]').slice(0,2).forEach(i=>{i.value=+i.value+(Math.random()>.5?1:-1);i.dispatchEvent(ev)});return 'surface seed shifted'}
q('#lab-regen').addEventListener('click',()=>{seed=(seed*1664525+1013904223)>>>0;root.dataset.seed=seed;const hit=clickGenerator();setPhase(1);write('variation / '+hit+' · seed '+seed)});
q('#lab-outline').addEventListener('click',e=>{document.body.classList.toggle('lab-outline');e.currentTarget.classList.toggle('active');write(document.body.classList.contains('lab-outline')?'inspection / structure visible':'inspection / structure hidden')});
q('#lab-full').addEventListener('click',()=>{if(document.fullscreenElement)document.exitFullscreen?.();else document.documentElement.requestFullscreen?.();write('viewport / fullscreen toggled')});
q('#lab-share').addEventListener('click',async()=>{const url=location.href;try{await navigator.clipboard.writeText(url);write('share / link copied to clipboard')}catch{prompt('Copy this project URL',url);write('share / url exposed for copying')}});
q('#lab-save').addEventListener('click',()=>{const canvases=qa('canvas');if(canvases.length){const c=canvases[0];const a=document.createElement('a');a.download=pageKey+'-capture.png';a.href=c.toDataURL('image/png');a.click();write('capture / first canvas exported as PNG')}else{window.print();write('capture / print sheet opened')}});
document.addEventListener('keydown',e=>{if(['INPUT','TEXTAREA','SELECT'].includes(document.activeElement?.tagName))return;if(e.key.toLowerCase()==='l')open();if(e.key.toLowerCase()==='r')q('#lab-regen').click();if(e.key.toLowerCase()==='f')q('#lab-full').click();if(e.key.toLowerCase()==='s')q('#lab-save').click();if(e.key==='Escape'&&panel.classList.contains('open'))close()});
setPhase(0);timer=setInterval(()=>{if(panel.classList.contains('open'))setPhase((phase+1)%4)},4200);window.addEventListener('beforeunload',()=>clearInterval(timer));
})();
</script>`;

function esc(s){return String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));}
function markup(w){
  const title=esc(w.title_en), cat=esc(w.category.toUpperCase()), num=esc(w.num), slug=esc(w.slug);
  return `<div id="mira-lab" data-project="${slug}" data-num="${num}" style="--lab-a:${w.palette[1]};--lab-b:${w.palette[2]}"><button id="lab-launch" aria-label="Open project lab">LAB / <b>OPEN</b> ↗</button><aside id="lab-panel" aria-label="Project lab"><div class="lab-head"><div><small>PROJECT LAB / ${num} · ${cat}</small><strong>${title}</strong></div><button class="lab-close" aria-label="Close">×</button></div><div class="lab-status"><span><i class="lab-pulse"></i>LIVE TRACE</span><b id="lab-state">BRIEF</b></div><div class="lab-grid"><div class="lab-control"><label>GRAIN <output id="lab-grain-value">12%</output></label><input id="lab-grain-control" type="range" min="0" max="42" value="12"></div><div class="lab-control"><label>TEMPO <output id="lab-tempo-value">68%</output></label><input id="lab-tempo-control" type="range" min="20" max="120" value="68"></div><div class="lab-control"><label>TENSION <output id="lab-tension-value">24%</output></label><input id="lab-tension-control" type="range" min="0" max="80" value="24"></div></div><div class="lab-actions"><button id="lab-regen" class="primary">REGENERATE ↻</button><button id="lab-save">CAPTURE PNG</button><button id="lab-outline">INSPECT LAYERS</button><button id="lab-full">FULLSCREEN ⛶</button><button id="lab-share">COPY SHARE LINK</button></div><div class="lab-label">PROCESS TRACE / CLICK A PHASE</div><div class="lab-phases"><div class="lab-phase active"><i>01</i><b>BRIEF</b><span>intent</span></div><div class="lab-phase"><i>02</i><b>GENERATE</b><span>variation</span></div><div class="lab-phase"><i>03</i><b>CURATE</b><span>judgement</span></div><div class="lab-phase"><i>04</i><b>SHIP</b><span>artifact</span></div></div><div id="lab-log" class="lab-log"><b>00:00:00</b>  lab / ready for a brief</div></aside><div id="lab-cursor" aria-hidden="true"></div><div id="lab-grain" aria-hidden="true"></div></div>`;
}

let upgraded=0;
for(const w of works){
  const file=path.join(root,w.path,'index.html');
  if(!fs.existsSync(file)) continue;
  let html=fs.readFileSync(file,'utf8');
  if(html.includes('id="mira-lab"')) continue;
  html=html.replace('</head>',css+'</head>');
  html=html.replace(/<\/body>\s*<\/html>\s*$/i,markup(w)+js+'</body></html>');
  fs.writeFileSync(file,html);
  upgraded++;
}
console.log(`upgraded ${upgraded} project pages`);
