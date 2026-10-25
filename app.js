// Two Fishes: chart maths, rendering and interaction. All wording comes from i18n/<lang>.js.
(function(){
'use strict';
const VS='︎';
const $=s=>document.querySelector(s);
const rad=d=>d*Math.PI/180, deg=r=>r*180/Math.PI;
const norm=x=>((x%360)+360)%360;
const sep=(a,b)=>{const d=norm(a-b);return d>180?360-d:d;};
const esc=s=>String(s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const cap=s=>s?s[0].toUpperCase()+s.slice(1):s;
const DAY=864e5;
const store={get(k,d){try{const v=localStorage.getItem(k);return v?JSON.parse(v):d;}catch(e){return d;}},set(k,v){try{localStorage.setItem(k,JSON.stringify(v));}catch(e){}}};

/* ---------- language ---------- */
const LANGS=window.TF_LANGS,EN=LANGS.en,LANG_ORDER=['en','el','it'].filter(c=>window.TF_LANGS[c]);
function detectLang(){const s=store.get('tf.lang',null);if(s&&LANGS[s])return s;const n=(navigator.language||'en').slice(0,2).toLowerCase();return LANGS[n]?n:'en';}
let LANG=detectLang(),L=LANGS[LANG];
const u=k=>L.ui[k]!=null?L.ui[k]:EN.ui[k]!=null?EN.ui[k]:k;
const F=new Proxy({},{get:(_,k)=>(L.f[k]||EN.f[k])});
const sN=i=>L.signs[i].n, sIn=i=>L.signs[i].inS, sKey=i=>L.signs[i].key;
const pN=id=>L.planets[id].n, pKey=id=>L.planets[id].key, pWhat=id=>L.planets[id].what;
const nm=p=>pN(p.id);
const hl=n=>L.hl(n), hShort=n=>L.houses[n-1].short, hKey=n=>L.houses[n-1].key;
const aN=id=>L.aspects[id].n, aV=id=>L.aspects[id].v;
const fmtDate=d=>d.toLocaleDateString(L.locale,{day:'numeric',month:'long',year:'numeric'});
const fmtShort=d=>d.toLocaleDateString(L.locale,{day:'numeric',month:'short',year:'numeric'});
const fmtDay=d=>d.toLocaleDateString(L.locale,{weekday:'long',day:'numeric',month:'long'});

// logo rays
(function(){let h='';for(let i=0;i<16;i++){const a=i*22.5,l=i%2?16:20;h+=`<path d="M-2.2 -12 L0 -${l} L2.2 -12Z" transform="rotate(${a})"/>`;}document.getElementById('rays').innerHTML=h;})();

/* ---------- structural data ---------- */
const SIGNS=[['♈','fire','cardinal',['Mars']],['♉','earth','fixed',['Venus']],['♊','air','mutable',['Mercury']],['♋','water','cardinal',['Moon']],
 ['♌','fire','fixed',['Sun']],['♍','earth','mutable',['Mercury']],['♎','air','cardinal',['Venus']],['♏','water','fixed',['Pluto','Mars']],
 ['♐','fire','mutable',['Jupiter']],['♑','earth','cardinal',['Saturn']],['♒','air','fixed',['Uranus','Saturn']],['♓','water','mutable',['Neptune','Jupiter']]
].map(([g,el,mod,rulers],i)=>({g:g+VS,el,mod,rulers,i}));
const PLANETS=[['Sun','☉'],['Moon','☽'],['Mercury','☿'],['Venus','♀'],['Mars','♂'],['Jupiter','♃'],['Saturn','♄'],['Uranus','♅'],['Neptune','♆'],['Pluto','♇'],['Node','☊'],['Chiron','⚷']].map(([id,g])=>({id,g:g+VS}));
const ANGLES=[{id:'ASC',g:'AC'},{id:'MC',g:'MC'}];
const PDEF=Object.fromEntries([...PLANETS,...ANGLES].map(p=>[p.id,p]));
const HOUSE_TYPE=['angular','succedent','cadent'];
const htype=n=>HOUSE_TYPE[(n-1)%3];
const ASPECTS=[
 {id:'conj',a:0,g:'☌',orb:8,t:3,cls:'neu'},{id:'opp',a:180,g:'☍',orb:8,t:3,cls:'hard'},{id:'tri',a:120,g:'△',orb:7,t:2.5,cls:'soft'},
 {id:'sq',a:90,g:'□',orb:7,t:2.5,cls:'hard'},{id:'sext',a:60,g:'⚹',orb:5,t:2,cls:'soft'},{id:'qx',a:150,g:'⚻',orb:2.5,t:1,cls:'odd'}
].map(a=>({...a,g:a.g+VS}));
const ASP=Object.fromEntries(ASPECTS.map(a=>[a.id,a]));
const CATS=[['love','♀',[5,7],['Venus','Mars','Moon']],['work','♄',[10,6],['Saturn','Sun','MC','Mars']],['money','♃',[2,8],['Venus','Jupiter']],
 ['energy','♂',[1,6],['Mars','Sun','ASC']],['mind','☿',[3,9],['Mercury']],['home','☽',[4],['Moon']],['social','♅',[11,5],['Venus','Jupiter','Uranus']],
 ['inner','♆',[12,9],['Neptune','Moon','Pluto']]].map(([id,g,houses,planets])=>({id,g:g+VS,houses,planets}));
const CITIES=[
 ['Athens',37.98,23.73,'Europe/Athens'],['Thessaloniki',40.64,22.94,'Europe/Athens'],['Patras',38.25,21.73,'Europe/Athens'],
 ['Heraklion',35.34,25.13,'Europe/Athens'],['Chania',35.51,24.02,'Europe/Athens'],['Larissa',39.64,22.42,'Europe/Athens'],
 ['Volos',39.36,22.94,'Europe/Athens'],['Ioannina',39.66,20.85,'Europe/Athens'],['Kalamata',37.04,22.11,'Europe/Athens'],
 ['Rhodes',36.43,28.22,'Europe/Athens'],['Corfu',39.62,19.92,'Europe/Athens'],['Nicosia',35.17,33.36,'Asia/Nicosia'],
 ['Limassol',34.68,33.04,'Asia/Nicosia'],['Istanbul',41.01,28.98,'Europe/Istanbul'],['Sofia',42.70,23.32,'Europe/Sofia'],
 ['Tirana',41.33,19.82,'Europe/Tirane'],['Bucharest',44.43,26.10,'Europe/Bucharest'],['Belgrade',44.79,20.45,'Europe/Belgrade'],
 ['London',51.51,-0.13,'Europe/London'],['Paris',48.86,2.35,'Europe/Paris'],['Lyon',45.76,4.84,'Europe/Paris'],['Berlin',52.52,13.40,'Europe/Berlin'],
 ['Munich',48.14,11.58,'Europe/Berlin'],['Rome',41.90,12.50,'Europe/Rome'],['Cagliari',39.22,9.12,'Europe/Rome'],['Milan',45.46,9.19,'Europe/Rome'],
 ['Naples',40.85,14.27,'Europe/Rome'],['Turin',45.07,7.69,'Europe/Rome'],['Palermo',38.12,13.36,'Europe/Rome'],['Sassari',40.73,8.56,'Europe/Rome'],
 ['Madrid',40.42,-3.70,'Europe/Madrid'],['Barcelona',41.39,2.17,'Europe/Madrid'],['Seville',37.39,-5.98,'Europe/Madrid'],['Lisbon',38.72,-9.14,'Europe/Lisbon'],
 ['Amsterdam',52.37,4.90,'Europe/Amsterdam'],['Brussels',50.85,4.35,'Europe/Brussels'],['Vienna',48.21,16.37,'Europe/Vienna'],['Zurich',47.37,8.54,'Europe/Zurich'],
 ['Geneva',46.20,6.14,'Europe/Zurich'],['Stockholm',59.33,18.07,'Europe/Stockholm'],['Moscow',55.76,37.62,'Europe/Moscow'],['Cairo',30.04,31.24,'Africa/Cairo'],
 ['Dubai',25.20,55.27,'Asia/Dubai'],['Mumbai',19.08,72.88,'Asia/Kolkata'],['Tokyo',35.68,139.69,'Asia/Tokyo'],
 ['Sydney',-33.87,151.21,'Australia/Sydney'],['Melbourne',-37.81,144.96,'Australia/Melbourne'],['Johannesburg',-26.20,28.05,'Africa/Johannesburg'],
 ['Montreal',45.50,-73.57,'America/Toronto'],['New York',40.71,-74.01,'America/New_York'],['Boston',42.36,-71.06,'America/New_York'],['Chicago',41.88,-87.63,'America/Chicago'],
 ['Los Angeles',34.05,-118.24,'America/Los_Angeles'],['Toronto',43.65,-79.38,'America/Toronto'],
 ['Mexico City',19.43,-99.13,'America/Mexico_City'],['Bogotá',4.71,-74.07,'America/Bogota'],['São Paulo',-23.55,-46.63,'America/Sao_Paulo'],['Buenos Aires',-34.60,-58.38,'America/Argentina/Buenos_Aires']
];

/* ---------- astronomy ---------- */
const jc=d=>(d.getTime()/DAY+2440587.5-2451545)/36525;
let CHIRON_T=null;
function chironLon(date){
  const c=window.CHIRON;if(!c)return NaN;
  if(!CHIRON_T){const a=new Float64Array(c.n),d=c.d.split(',');let v=c.first;a[0]=v/1000;for(let i=1;i<c.n;i++){v+=+d[i-1];a[i]=v/1000;}CHIRON_T=a;}
  const x=(date.getTime()-c.t0)/(c.step*DAY);if(!(x>=1&&x<CHIRON_T.length-2))return NaN;
  const i=Math.floor(x),t=x-i,p0=CHIRON_T[i-1],p1=CHIRON_T[i],p2=CHIRON_T[i+1],p3=CHIRON_T[i+2];
  return norm(0.5*(2*p1+(p2-p0)*t+(2*p0-5*p1+4*p2-p3)*t*t+(3*p1-p0-3*p2+p3)*t*t*t));
}
const chironOK=date=>!isNaN(chironLon(date));
const livePlanets=date=>PLANETS.filter(p=>p.id!=='Chiron'||chironOK(date));
function eclLon(id,date){
  const A=window.Astronomy;
  if(id==='Sun') return norm(A.SunPosition(date).elon);
  if(id==='Moon') return norm(A.EclipticGeoMoon?A.EclipticGeoMoon(date).lon:A.Ecliptic(A.GeoMoon(date)).elon);
  if(id==='Chiron')return chironLon(date);
  if(id==='Node'){const T=jc(date);return norm(125.04452-1934.136261*T+0.0020708*T*T+T*T*T/450000);}
  return norm(A.Ecliptic(A.GeoVector(id,date,true)).elon);
}
function speedOf(id,date){
  let d=eclLon(id,new Date(date.getTime()+DAY/2))-eclLon(id,new Date(date.getTime()-DAY/2));
  if(d>180)d-=360; if(d<-180)d+=360; return d;
}
function angles(date,lat,lon){
  const ramc=norm(window.Astronomy.SiderealTime(date)*15+lon);
  const eps=23.439291-0.0130042*jc(date);
  const r=rad(ramc),e=rad(eps),f=rad(lat);
  const mc=norm(deg(Math.atan2(Math.sin(r),Math.cos(r)*Math.cos(e))));
  const asc=norm(deg(Math.atan2(Math.cos(r),-(Math.sin(r)*Math.cos(e)+Math.tan(f)*Math.sin(e)))));
  return {ramc,eps,mc,asc};
}
function placidus(ang,lat){
  const {ramc,eps,asc,mc}=ang,e=rad(eps),f=rad(lat);
  const raToLon=ra=>norm(deg(Math.atan2(Math.sin(rad(ra)),Math.cos(rad(ra))*Math.cos(e))));
  const cusp=h=>{
    let ra=ramc+{11:30,12:60,2:120,3:150}[h];
    for(let i=0;i<15;i++){
      const dec=Math.asin(Math.sin(e)*Math.sin(rad(raToLon(ra))));
      const x=Math.tan(f)*Math.tan(dec); if(Math.abs(x)>=1) return null;
      const ad=deg(Math.asin(x)),sda=90+ad,sna=90-ad;
      ra=h===11?ramc+sda/3:h===12?ramc+2*sda/3:h===2?ramc+180-2*sna/3:ramc+180-sna/3;
    }
    return raToLon(ra);
  };
  const c11=cusp(11),c12=cusp(12),c2=cusp(2),c3=cusp(3);
  if([c11,c12,c2,c3].some(v=>v===null)) return null;
  return [asc,c2,c3,norm(mc+180),norm(c11+180),norm(c12+180),norm(asc+180),norm(c2+180),norm(c3+180),mc,c11,c12];
}
const equalCusps=asc=>Array.from({length:12},(_,i)=>norm(asc+30*i));
const wholeCusps=asc=>Array.from({length:12},(_,i)=>norm(Math.floor(asc/30)*30+30*i));
function houseOf(lon,cusps){
  for(let i=0;i<12;i++){const s=cusps[i],e=cusps[(i+1)%12];if(norm(lon-s)<norm(e-s))return i+1;}
  return 1;
}
function aspectBetween(l1,l2,orbFn){
  const d=sep(l1,l2);let best=null;
  for(const a of ASPECTS){const o=Math.abs(d-a.a),max=orbFn(a);if(o<=max&&(!best||o<best.orb))best={asp:a,orb:o};}
  return best;
}
function computeChart(date,lat,lon,sys){
  const pts=livePlanets(date).map(p=>({...p,lon:eclLon(p.id,date),speed:speedOf(p.id,date)}));
  const ang=angles(date,lat,lon);
  let cusps=sys==='whole'?wholeCusps(ang.asc):sys==='equal'?equalCusps(ang.asc):placidus(ang,lat),sysUsed=sys;
  if(!cusps){cusps=equalCusps(ang.asc);sysUsed='equal';}
  const all=[...pts,{...ANGLES[0],lon:ang.asc,speed:1},{...ANGLES[1],lon:ang.mc,speed:1}];
  all.forEach(p=>{p.sign=Math.floor(p.lon/30);p.house=houseOf(p.lon,cusps);p.retro=p.speed<0&&!['ASC','MC','Node'].includes(p.id);});
  const aspects=[];
  for(let i=0;i<all.length;i++)for(let j=i+1;j<all.length;j++){
    const a=all[i],b=all[j]; if(a.id==='ASC'&&b.id==='MC')continue;
    const lum=['Sun','Moon'].includes(a.id)||['Sun','Moon'].includes(b.id);
    const minor=['Node','Chiron','ASC','MC'].includes(a.id)||['Node','Chiron','ASC','MC'].includes(b.id);
    const hit=aspectBetween(a.lon,b.lon,x=>(x.orb+(lum?1:0))*(minor?.6:1));
    if(hit)aspects.push({p1:a,p2:b,...hit});
  }
  aspects.sort((x,y)=>x.orb-y.orb);
  return {date,pts:all,cusps,ang,sysUsed,aspects,byId:Object.fromEntries(all.map(p=>[p.id,p]))};
}
const LONG_IDS=['Jupiter','Saturn','Uranus','Neptune','Pluto','Chiron','Node'];
const TRANSIT_GROUPS=[{k:'long',ids:LONG_IDS},{k:'short',ids:['Sun','Mercury','Venus','Mars']},{k:'moon',ids:['Moon']}];
const SLOW={Pluto:9,Neptune:8,Uranus:7,Saturn:6,Jupiter:5,Chiron:4.5,Node:4,Mars:3,Sun:2,Venus:2,Mercury:2,Moon:0};
const slowRank=p=>SLOW[p.id]??1;
function computeTransits(natal,date){
  const pts=livePlanets(date).map(p=>{const lon=eclLon(p.id,date),speed=speedOf(p.id,date);
    return {...p,lon,speed,sign:Math.floor(lon/30),house:houseOf(lon,natal.cusps),retro:speed<0&&p.id!=='Node'};});
  const aspects=[];
  for(const t of pts)for(const n of natal.pts){
    const hit=aspectBetween(t.lon,n.lon,a=>t.id==='Moon'?Math.min(a.t,1.5):a.t);
    if(!hit)continue;
    const fut=Math.abs(sep(t.lon+t.speed*0.05,n.lon)-hit.asp.a);
    aspects.push({t,n,...hit,applying:fut<hit.orb});
  }
  aspects.sort((x,y)=>slowRank(y.t)-slowRank(x.t)||x.orb-y.orb);
  return {date,pts,aspects,byId:Object.fromEntries(pts.map(p=>[p.id,p]))};
}

/* ---------- time zones ---------- */
function tzOffsetMin(tz,d){
  const m=/^(?:UTC|GMT)\s*([+-]\d{1,2})(?::?(\d{2}))?$/i.exec(tz.trim());
  if(m){const h=+m[1];return h*60+(h<0?-1:1)*(+(m[2]||0));}
  const p=Object.fromEntries(new Intl.DateTimeFormat('en-US',{timeZone:tz,hourCycle:'h23',year:'numeric',month:'2-digit',day:'2-digit',hour:'2-digit',minute:'2-digit',second:'2-digit'}).formatToParts(d).map(x=>[x.type,x.value]));
  return (Date.UTC(+p.year,p.month-1,+p.day,+p.hour%24,+p.minute,+p.second)-d.getTime())/60000;
}
function localToUTC(dateStr,timeStr,tz){
  const [y,mo,d]=dateStr.split('-').map(Number),[h,mi]=(timeStr||'12:00').split(':').map(Number);
  const guess=Date.UTC(y,mo-1,d,h,mi);
  let t=guess-tzOffsetMin(tz,new Date(guess))*60000;
  t=guess-tzOffsetMin(tz,new Date(t))*60000;
  return new Date(t);
}

/* ---------- formatting ---------- */
const fmtIn=lon=>{const x=lon%30;let d=Math.floor(x),m=Math.round((x-d)*60);if(m===60){d++;m=0;}return `${d}°${String(m).padStart(2,'0')}′`;};
const fmtOrb=o=>{const d=Math.floor(o),m=Math.round((o-d)*60);return `${d}°${String(m).padStart(2,'0')}′`;};
const posStr=p=>`${fmtIn(p.lon)} ${sN(p.sign)}${p.retro?' ℞':''}`;
const glyph=p=>p.id==='ASC'||p.id==='MC'?`<span class="mono" style="font-size:.8em">${p.g}</span>`:`<span class="gl">${p.g}</span>`;
const glyphTxt=p=>p.id==='ASC'||p.id==='MC'?`<span class="mono" style="font-size:.75em">${p.g}</span>`:p.g;
function housesRuledBy(chart,id){return chart.cusps.map((c,i)=>SIGNS[Math.floor(c/30)].rulers.includes(id)?i+1:0).filter(Boolean);}
function homeHouse(p){return p.id==='ASC'?1:p.id==='MC'?10:p.house;}
const isoDate=d=>`${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`;
function startOfDayNoon(d){const x=new Date(d);x.setHours(12,0,0,0);return x;}
const daysFromToday=d=>Math.round((startOfDayNoon(d)-startOfDayNoon(new Date()))/DAY);

/* ---------- state ---------- */
const EXAMPLE={name:'',date:'2004-03-03',time:'16:05',unknown:false,city:'Cagliari',lat:39.22,lon:9.12,tz:'Europe/Rome',sys:'placidus',example:false};
let charts=store.get('tf.charts',null);
if(!Array.isArray(charts)||!charts.length)charts=[store.get('tf.profile',null)||EXAMPLE];
let active=Math.min(Math.max(0,+store.get('tf.active',0)||0),charts.length-1),profile=charts[active],editing=active,delArm=-1;
function saveCharts(){store.set('tf.charts',charts);store.set('tf.active',active);}
const chartName=(c,i)=>c.name||(i===0?u('myChart'):u('chart')+' '+(i+1));
let natal=null,transit=null,tDate=startOfDayNoon(new Date()),selN=null,selT=null,tl=null,playTimer=null,cal=null,curTab='chart';

/* ---------- wheel ---------- */
function spread(items,minSep){
  const arr=items.map(p=>({id:p.id,d:p.lon})).sort((a,b)=>a.d-b.d);
  if(arr.length<2)return Object.fromEntries(arr.map(x=>[x.id,x.d]));
  for(let k=0;k<40;k++){let moved=false;
    for(let i=0;i<arr.length;i++){const a=arr[i],b=arr[(i+1)%arr.length],gap=norm(b.d-a.d);
      if(gap<minSep){const push=(minSep-gap)/2+.01;a.d=norm(a.d-push);b.d=norm(b.d+push);moved=true;}}
    if(!moved)break;}
  return Object.fromEntries(arr.map(x=>[x.id,x.d]));
}
function wheelSVG(chart,tr,sel){
  const asc=chart.ang.asc,T=!!tr;
  const G=T?{zo:288,zi:242,pl:213,lab:189,hb:150,ac:126,to:352,tp:314,tlab:338,box:360}
           :{zo:334,zi:282,pl:252,lab:226,hb:178,ac:150,box:345};
  const P=(r,l)=>{const t=rad(180+l-asc);return [+(r*Math.cos(t)).toFixed(2),+(-r*Math.sin(t)).toFixed(2)];};
  const Ln=(r1,l1,r2,l2,c)=>{const a=P(r1,l1),b=P(r2,l2);return `<line x1="${a[0]}" y1="${a[1]}" x2="${b[0]}" y2="${b[1]}" class="${c}"/>`;};
  const TX=(r,l,c,txt,extra='')=>{const a=P(r,l);return `<text x="${a[0]}" y="${a[1]}" class="${c}" text-anchor="middle" dominant-baseline="central" ${extra}>${txt}</text>`;};
  const sector=(ri,ro,a0,a1)=>{const p1=P(ro,a0),p2=P(ro,a1),p3=P(ri,a1),p4=P(ri,a0);
    return `M${p1}A${ro} ${ro} 0 0 0 ${p2}L${p3}A${ri} ${ri} 0 0 1 ${p4}Z`;};
  let s=`<svg viewBox="${-G.box} ${-G.box} ${G.box*2} ${G.box*2}" class="wheel" role="img" aria-label="${esc(T?u('ariaBiwheel'):u('ariaWheel'))}">`;
  if(T)s+=`<circle r="${G.to}" class="w-tband"/>`;
  s+=`<circle r="${G.zo}" class="w-zbg"/>`;
  SIGNS.forEach((z,i)=>{s+=`<g class="w-sign el-${z.el}${sel==='sign:'+i?' sel':''}" data-pick="sign:${i}"><title>${sN(i)}</title><path d="${sector(G.zi,G.zo,i*30,i*30+30)}"/>${TX((G.zi+G.zo)/2,i*30+15,'',z.g)}</g>`;});
  for(let d=0;d<360;d++){const len=d%10===0?9:d%5===0?6:3;s+=Ln(G.zi,d,G.zi+len,d,'tick');}
  s+=`<circle r="${G.zi}" class="ring"/><circle r="${G.hb}" class="ring"/><circle r="${G.ac}" class="ring dot"/>`;
  chart.cusps.forEach((c,i)=>{const ang=i%3===0;s+=Ln(G.ac,c,G.zi,c,'cusp'+(ang?' ang':''));
    const mid=c+norm(chart.cusps[(i+1)%12]-c)/2;
    s+=TX((G.ac+G.hb)/2,mid,'hnum'+(sel==='house:'+(i+1)?' sel':''),i+1,`data-pick="house:${i+1}"`);});
  [['AC',chart.ang.asc],['MC',chart.ang.mc],['DC',norm(chart.ang.asc+180)],['IC',norm(chart.ang.mc+180)]].forEach(([t,l])=>{s+=TX(G.zi-12,l+4,'angl',t);});
  if(!T){chart.aspects.forEach(a=>{if(a.asp.cls==='neu')return;
      const inv=sel&&sel.startsWith('natal:')?(sel==='natal:'+a.p1.id||sel==='natal:'+a.p2.id):null;
      s+=Ln(G.ac,a.p1.lon,G.ac,a.p2.lon,`asp asp-${a.asp.cls}${inv===true?' hi':inv===false?' dim':''}`);});}
  else{tr.aspects.forEach(a=>{if(a.asp.cls==='neu')return;
      let inv=null;if(sel){if(sel.startsWith('transit:'))inv=sel==='transit:'+a.t.id;else if(sel.startsWith('natal:'))inv=sel==='natal:'+a.n.id;}
      s+=Ln(G.ac,a.t.lon,G.ac,a.n.lon,`asp asp-${a.asp.cls}${inv===true?' hi':inv===false?' dim':''}`);});}
  const np=chart.pts.filter(p=>p.id!=='ASC'&&p.id!=='MC'),dn=spread(np,T?8.5:7.5);
  np.forEach(p=>{const d=dn[p.id];
    s+=`<g class="w-pl${sel==='natal:'+p.id?' sel':''}" data-pick="natal:${p.id}"><title>${nm(p)} ${posStr(p)}</title>`+
      Ln(G.zi,p.lon,G.zi-6,p.lon,'tk')+Ln(G.zi-6,p.lon,G.pl+13,d,'lead')+
      `<circle cx="${P(G.pl,d)[0]}" cy="${P(G.pl,d)[1]}" r="14" class="hit"/>`+TX(G.pl,d,'g',p.g)+TX(G.lab,d,'deg',Math.floor(p.lon%30)+'°'+(p.retro?'℞':''))+`</g>`;});
  if(T){const dt=spread(tr.pts,8.5);
    tr.pts.forEach(p=>{const d=dt[p.id];
      s+=`<g class="w-pl tr${sel==='transit:'+p.id?' sel':''}" data-pick="transit:${p.id}"><title>${nm(p)} ${posStr(p)}</title>`+
        Ln(G.zo,p.lon,G.zo+6,p.lon,'tk')+Ln(G.zo+6,p.lon,G.tp-13,d,'lead')+
        `<circle cx="${P(G.tp,d)[0]}" cy="${P(G.tp,d)[1]}" r="14" class="hit"/>`+TX(G.tp,d,'g',p.g)+TX(G.tlab,d,'deg',Math.floor(p.lon%30)+'°'+(p.retro?'℞':''))+`</g>`;});}
  return s+'</svg>';
}

/* ---------- detail writers ---------- */
function aspectRow(a,pick,sub,orbTxt,selKey){
  const g1=a.t||a.p1,g2=a.n||a.p2;
  const title=a.t?F.transitTitle(a.t.id,a.asp.id,a.n.id):`${nm(g1)} ${aV(a.asp.id)} ${nm(g2)}`;
  return `<button type="button" class="aitem${selKey===pick?' sel':''}" data-pick="${pick}">
    <span class="gls"><span class="${a.t?'t':''}">${a.t?g1.g:glyphTxt(g1)}</span><span class="a ${a.asp.cls}">${a.asp.g}</span>${glyphTxt(g2)}</span>
    <span><span>${title}</span><span class="sub" style="display:block">${sub}</span></span>
    <span class="orb">${orbTxt}</span></button>`;
}
function dispositorLine(p){
  const r=SIGNS[p.sign].rulers[0],rp=natal.byId[r];
  if(r===p.id)return F.dispHome(p.id,p.sign);
  if(!rp)return '';
  return F.disp(p.sign,r,rp.sign,rp.house);
}
function natalPointHTML(id,showTransits){
  const p=natal.byId[id],S=L.signs[p.sign],hh=homeHouse(p),rules=housesRuledBy(natal,id),isAngle=id==='ASC'||id==='MC',z=SIGNS[p.sign];
  const asps=natal.aspects.filter(a=>a.p1.id===id||a.p2.id===id);
  let h=`<div class="eyebrow">${showTransits?u('natalPoint'):u('yourPlacement')}</div>
  <h3>${glyph(p)} ${nm(p)} ${sIn(p.sign)}</h3>
  <div class="pos">${posStr(p)} · ${isAngle?F.cuspOf(hh):hl(p.house)}</div>
  <p>${L.planets[id].info}</p>`;
  if(!isAngle)h+=`<div class="explain">${F.howRead(id,p.sign,p.house)}</div>`;
  h+=`<h4>${S.n} <span class="gl">${z.g}</span></h4><p>${S.body}</p>
  <dl class="kv"><dt>${u('atBest')}</dt><dd>${S.plus}</dd><dt>${u('watchFor')}</dt><dd>${S.minus}</dd><dt>${u('type')}</dt><dd>${L.el[z.el].n}, ${L.mod[z.mod].n}</dd></dl>`;
  h+=`<h4>${F.houseHeading(hh,isAngle)}</h4><p>${L.houses[hh-1].body}</p>`;
  if(rules.length&&!isAngle)h+=`<h4>${u('housesItRules')}</h4><p>${F.rulesPara(id,rules,p.house)}</p>`;
  if(p.retro)h+=`<p class="note">${F.retro(id)}</p>`;
  if(id==='ASC'){const r=SIGNS[p.sign].rulers[0],rp=natal.byId[r];h+=`<h4>${u('chartRuler')}</h4><p>${F.chartRuler(r,rp.sign,rp.house)}</p>`;}
  else if(!isAngle){const dl=dispositorLine(p);if(dl)h+=`<p class="note">${dl}</p>`;}
  if(showTransits&&transit){
    const ts=transit.aspects.filter(a=>a.n.id===id);
    h+=`<h4>${u('transitsNow')}</h4>`;
    h+=ts.length?`<div class="alist">${ts.map(a=>aspectRow(a,'ta:'+a.t.id+'|'+a.n.id+'|'+a.asp.id,a.applying?u('applying'):u('separating'),fmtOrb(a.orb))).join('')}</div>`:`<p class="note">${u('nothingInOrb')}</p>`;
  }else{
    h+=`<h4>${u('aspects')}</h4><p class="note">${u('aspectsNote')}</p>`;
    h+=asps.length?asps.map(a=>{const o=a.p1.id===id?a.p2:a.p1;return `<span class="chip" data-pick="natal:${o.id}"><span class="gl">${a.asp.g}</span>${aN(a.asp.id).toLowerCase()} ${nm(o)} <span class="mono" style="font-size:.75rem">${fmtOrb(a.orb)}</span></span>`;}).join(''):`<p class="note">${u('noAspects')}</p>`;
  }
  return h;
}
function signHTML(i,chart){
  const z=SIGNS[i],S=L.signs[i],inSign=chart.pts.filter(p=>p.sign===i),cusps=chart.cusps.map((c,k)=>Math.floor(c/30)===i?k+1:0).filter(Boolean);
  const rp=natal.byId[z.rulers[0]];
  return `<div class="eyebrow">${u('sign')}</div><h3><span class="gl">${z.g}</span> ${S.n}</h3>
  <div class="pos">${L.el[z.el].n} · ${L.mod[z.mod].n} · ${F.ruledBy(z.rulers)}</div>
  <p>${S.body}</p>
  <dl class="kv"><dt>${u('atBest')}</dt><dd>${S.plus}</dd><dt>${u('watchFor')}</dt><dd>${S.minus}</dd></dl>
  <div class="explain"><b>${cap(L.el[z.el].n)}.</b> ${L.el[z.el].info}<br><b>${cap(L.mod[z.mod].n)}.</b> ${L.mod[z.mod].info}</div>
  <h4>${u('inYourChart')}</h4>
  <dl class="kv"><dt>${u('planetsHere')}</dt><dd>${inSign.length?inSign.map(p=>`<span class="chip" data-pick="natal:${p.id}">${glyph(p)} ${nm(p)}</span>`).join(''):u('noneOfYours')}</dd>
  <dt>${u('houseCusps')}</dt><dd>${cusps.length?F.signCusps(i,cusps):u('intercepted')}</dd>
  <dt>${u('itsRuler')}</dt><dd>${rp?`${pN(z.rulers[0])} ${sIn(rp.sign)}, ${hl(rp.house)}`:''}</dd></dl>`;
}
function houseHTML(n,chart){
  const H=L.houses[n-1],c=chart.cusps[n-1],si=Math.floor(c/30),z=SIGNS[si],inH=chart.pts.filter(p=>p.house===n&&p.id!=='ASC'&&p.id!=='MC');
  const rulers=z.rulers.map(r=>natal.byId[r]).filter(Boolean),natural=n-1;
  let h=`<div class="eyebrow">${u('house')} · ${L.htype[htype(n)].n}</div><h3>${F.houseTitle(n)}</h3><div class="pos">${F.beginsAt(fmtIn(c),si)}</div>
  <p>${H.body}</p>
  <div class="explain"><b>${u('questions')}</b> ${H.q}</div>
  <h4>${F.yourHouseTitle(n)}</h4>
  <p>${F.cuspPara(n,si)}</p>`;
  h+=inH.length?`<p><b>${u('planetsInside')}</b></p><ul class="ctx">${inH.map(p=>`<li><span>${nm(p)} ${sIn(p.sign)}</span>${F.planetInHouse(p.id,n)} <a href="#" class="chip" data-pick="natal:${p.id}" onclick="return false">${glyph(p)} ${u('more')}</a></li>`).join('')}</ul>`
    :`<p>${u('emptyHouse')}</p>`;
  rulers.forEach(r=>{h+=`<p>${F.rulerPara(r.id,r.house,n)} <a href="#" class="chip" data-pick="natal:${r.id}" onclick="return false">${glyph(r)} ${nm(r)}</a></p>`;});
  h+=`<p class="note">${L.htype[htype(n)].info} ${F.naturalSign(natural)}</p>`;
  if(transit&&chart===natal&&curTab==='transits'){
    const tin=transit.pts.filter(p=>p.house===n);
    h+=`<h4>${u('passingNow')}</h4>${tin.length?tin.map(p=>`<span class="chip" data-pick="transit:${p.id}"><span class="gl">${p.g}</span> ${nm(p)}</span>`).join(''):`<p class="note">${u('noTransitHere')}</p>`}`;
  }
  return h;
}
function natalAspectHTML(k){
  const a=natal.aspects[k],h1=homeHouse(a.p1),h2=homeHouse(a.p2),A=L.aspects[a.asp.id];
  return `<div class="eyebrow">${u('aspectInChart')}</div><h3>${glyph(a.p1)} <span class="gl">${a.asp.g}</span> ${glyph(a.p2)}</h3>
  <div class="pos">${nm(a.p1)} ${A.v} ${nm(a.p2)} · ${u('orb')} ${fmtOrb(a.orb)}</div>
  <p><b>${A.n}.</b> ${A.key}</p>
  <div class="explain">${A.angle} ${F.orbExplain(fmtOrb(a.orb))}</div>
  <ul class="ctx"><li class="${a.asp.cls}"><span>${nm(a.p1)} ${sIn(a.p1.sign)} · ${hl(h1)}</span>${pKey(a.p1.id)}</li>
  <li class="${a.asp.cls}"><span>${nm(a.p2)} ${sIn(a.p2.sign)} · ${hl(h2)}</span>${pKey(a.p2.id)}</li></ul>
  <p>${F.aspectLife(h1,h2,a.p1.id,a.p2.id,a.asp.cls)}</p>`;
}
function transitWindow(a){
  if(a.t.id==='Moon')return null;
  const max=a.asp.t,f=d=>Math.abs(sep(eclLon(a.t.id,new Date(tDate.getTime()+d*DAY)),a.n.lon)-a.asp.a);
  const lim=LONG_IDS.includes(a.t.id)?800:120;let st=0,en=0;
  while(st>-lim&&f(st-1)<=max)st--;
  while(en<lim&&f(en+1)<=max)en++;
  const ex=[];let prev=f(st-1),cur=f(st);
  for(let d=st;d<=en;d++){const nx=f(d+1);if(cur<=prev&&cur<nx&&cur<.6)ex.push(d);prev=cur;cur=nx;}
  const at=d=>new Date(tDate.getTime()+d*DAY);
  return {start:at(st),end:at(en),days:en-st+1,ex:ex.map(at)};
}
function transitWindowHTML(a){
  if(a.t.id==='Moon')return `<div class="explain">${u('moonTransit')}</div>`;
  const long=LONG_IDS.includes(a.t.id),w=transitWindow(a);
  let h=`<div class="explain">${long?u('longTermText'):u('shortTermText')}`;
  if(w)h+=' '+F.inOrb(fmtShort(w.start),fmtShort(w.end),w.days,w.ex.map(fmtShort));
  return h+'</div>';
}
function transitStoryHTML(a){
  const t=a.t,n=a.n,nRules=housesRuledBy(natal,n.id),tRules=housesRuledBy(natal,t.id),A=L.aspects[a.asp.id];
  let h=`<div class="eyebrow">${u('transitReading')}</div>
  <h3><span class="gl" style="color:var(--pink)">${t.g}</span> <span class="gl">${a.asp.g}</span> ${glyph(n)}</h3>
  <div class="pos">${F.transitTitle(t.id,a.asp.id,n.id)} · ${u('orb')} ${fmtOrb(a.orb)} · ${a.applying?u('applyingLong'):u('separatingLong')}</div>
  <p>${F.tr(t.id,n.id)} ${A.key} ${F.lasts(t.id)}</p>
  ${transitWindowHTML(a)}
  <ul class="ctx">
   <li class="${a.asp.cls}"><span>${u('whereHappening')}</span>${F.whereHappening(t.id,t.sign,t.house)}</li>
   <li class="${a.asp.cls}"><span>${u('whatTouches')}</span>${n.id==='ASC'?F.touchAngle(1):n.id==='MC'?F.touchAngle(10):F.touchNatal(n.id,n.house)}</li>`;
  if(nRules.length)h+=`<li class="${a.asp.cls}"><span>${u('housesItRules')}</span>${F.nRules(n.id,nRules)}</li>`;
  if(tRules.length)h+=`<li><span>${u('visitorHouses')}</span>${F.tRules(t.id,tRules)}</li>`;
  if(n.id!=='ASC'&&n.id!=='MC'){const dl=dispositorLine(n);if(dl)h+=`<li><span>${u('chainRulership')}</span>${dl}</li>`;}
  const asps=natal.aspects.filter(x=>x.p1.id===n.id||x.p2.id===n.id).slice(0,4);
  if(asps.length)h+=`<li><span>${u('ripple')}</span>${F.ripple(n.id,asps.map(x=>{const o=x.p1.id===n.id?x.p2:x.p1;return nm(o)+' ('+aN(x.asp.id).toLowerCase()+')';}))}</li>`;
  return h+'</ul>';
}
function transitPointHTML(id){
  const t=transit.byId[id],as=transit.aspects.filter(a=>a.t.id===id),rules=housesRuledBy(natal,id);
  return `<div class="eyebrow">${F.skyOnDate(fmtShort(tDate))}</div><h3><span class="gl">${t.g}</span> ${F.transiting(id)}</h3>
  <div class="pos">${posStr(t)} · ${F.inYourHouse(t.house)}</div>
  <p>${F.transitPassing(id,t.house,rules)}</p>
  <h4>${u('aspectsToChart')}</h4>
  ${as.length?`<div class="alist">${as.map(a=>aspectRow(a,'ta:'+a.t.id+'|'+a.n.id+'|'+a.asp.id,`${hl(homeHouse(a.n))} · ${a.applying?u('applying'):u('separating')}`,fmtOrb(a.orb))).join('')}</div>`:`<p class="note">${u('noAspectsToday')}</p>`}`;
}

/* ---------- renderers ---------- */
function renderHeader(){
  $('#who-name').textContent=chartName(profile,active);
  const d=new Date(profile.date+'T12:00:00');
  $('#who-meta').textContent=`${fmtShort(d)} · ${profile.unknown?u('timeUnknown'):profile.time} · ${profile.city||(profile.lat+', '+profile.lon)}`;
  $('#example-banner').hidden=!profile.example;
  renderChartList();
}
function renderNatal(){
  $('#wheel-natal').innerHTML=wheelSVG(natal,null,selN);
  const S=natal.byId.Sun,M=natal.byId.Moon,A=natal.byId.ASC;
  $('#big3').innerHTML=[[S,u('sunSign')],[M,u('moonSign')],[A,u('risingSign')]].map(([p,l])=>`<button type="button" class="b3" data-pick="natal:${p.id}"><span class="gl">${p.id==='ASC'?SIGNS[p.sign].g:p.g}</span><span><small>${l}</small><b>${sN(p.sign)}</b> <span class="mono muted" style="font-size:.8rem">${fmtIn(p.lon)}</span></span></button>`).join('');
  $('#ptable').innerHTML=`<thead><tr><th></th><th>${u('point')}</th><th>${u('sign')}</th><th>${u('degree')}</th><th>${u('house')}</th></tr></thead><tbody>`+
    natal.pts.map(p=>`<tr class="click" data-pick="natal:${p.id}"><td>${glyph(p)}</td><td>${nm(p)}</td><td><span class="gl" style="color:var(--${SIGNS[p.sign].el})">${SIGNS[p.sign].g}</span> ${sN(p.sign)}</td><td class="mono">${fmtIn(p.lon)}${p.retro?' ℞':''}</td><td class="mono">${homeHouse(p)}</td></tr>`).join('')+'</tbody>';
  const V=natal.byId.Venus,Mo=natal.byId.Moon;
  $('#guide-chart-body').innerHTML=F.guideChart(PLANETS.slice(0,10).map(p=>`<span class="gl" style="color:var(--pink)">${p.g}</span> ${nm(p)} (${pWhat(p.id)})`).join(', '),V.sign,V.house,Mo.sign,Mo.house);
  $('#natal-aspects').innerHTML=natal.aspects.map((a,k)=>aspectRow(a,'na:'+k,`${hl(homeHouse(a.p1))} ↔ ${hl(homeHouse(a.p2))}`,fmtOrb(a.orb),selN)).join('');
  let d='';
  if(!selN)d=natalPointHTML('Sun')+(natal.sysUsed!==profile.sys?`<p class="note">${u('placidusFallback')}</p>`:'');
  else{const [k,v]=selN.split(':');
    d=k==='natal'?natalPointHTML(v):k==='sign'?signHTML(+v,natal):k==='house'?houseHTML(+v,natal):k==='na'?natalAspectHTML(+v):'';}
  if(profile.unknown)d+=`<p class="note">${u('timeUnknownNote')}</p>`;
  $('#detail-natal').innerHTML=d;
}
function renderTransits(){
  transit=computeTransits(natal,tDate);
  $('#t-label').textContent=fmtDate(tDate);
  $('#t-date').value=isoDate(tDate);
  $('#t-range').value=daysFromToday(tDate);
  $('#wheel-transit').innerHTML=wheelSVG(natal,transit,selT);
  const list=transit.aspects.filter(a=>a.t.id!=='Moon');
  const row=a=>{const r=housesRuledBy(natal,a.n.id);return aspectRow(a,'ta:'+a.t.id+'|'+a.n.id+'|'+a.asp.id,F.transitRowSub(a.t.house,homeHouse(a.n),r),`${fmtOrb(a.orb)}<br>${a.applying?u('applying'):u('separating')}`,selT);};
  $('#transit-list').innerHTML=TRANSIT_GROUPS.map(g=>{const Ls=transit.aspects.filter(a=>g.ids.includes(a.t.id));
    return `<div class="tgroup"><h4>${L.groups[g.k].t} <span class="count">${Ls.length}</span></h4><p class="note">${L.groups[g.k].d}</p>${Ls.length?Ls.map(row).join(''):`<p class="note">${u('noneInOrb')}</p>`}</div>`;}).join('');
  const score=Array(12).fill(0);
  transit.pts.forEach(p=>{if(p.id!=='Moon')score[p.house-1]+=slowRank(p)>=4?2:1;});
  transit.aspects.forEach(a=>{if(a.t.id==='Moon')return;const w=slowRank(a.t)>=4?2:1;score[homeHouse(a.n)-1]+=w;housesRuledBy(natal,a.n.id).forEach(h=>score[h-1]+=w*.5);});
  const max=Math.max(...score,1),top=[...score].sort((a,b)=>b-a)[2];
  $('#house-weather').innerHTML=L.houses.map((H,i)=>{const pls=transit.pts.filter(p=>p.house===i+1&&p.id!=='Moon').map(p=>p.g).join(' ');
    return `<button type="button" class="hcell${score[i]>=top&&score[i]>0?' hot':''}" data-pick="house:${i+1}"><span class="hn">${hl(i+1)}</span><span class="hs">${H.short}</span><span class="bar"><i style="width:${Math.round(score[i]/max*100)}%"></i></span><span class="pls">${pls||'&nbsp;'}</span></button>`;}).join('');
  let d='';
  if(!selT){const first=list[0];d=first?transitStoryHTML(first):`<p>${u('noTransits')}</p>`;}
  else{const [k,v]=selT.split(':');
    if(k==='ta'){const [ti,ni,ai]=v.split('|');const a=transit.aspects.find(x=>x.t.id===ti&&x.n.id===ni&&x.asp.id===ai);d=a?transitStoryHTML(a):`<p class="note">${u('outOfOrb')}</p>`+transitPointHTML(ti);}
    else if(k==='transit')d=transitPointHTML(v);
    else if(k==='natal')d=natalPointHTML(v,true);
    else if(k==='sign')d=signHTML(+v,natal);
    else if(k==='house')d=houseHTML(+v,natal);}
  $('#detail-transit').innerHTML=d;
  renderPotential();
  renderCalendar();
  renderTimeline();
}

/* ---------- Today's Tides ---------- */
const BENEFIC=['Venus','Jupiter','Sun','Moon'],MALEFIC=['Mars','Saturn','Pluto','Uranus','Neptune'];
function aspectValence(a){
  const t=a.t.id,c=a.asp.cls,ben=BENEFIC.includes(t),mal=MALEFIC.includes(t);
  if(c==='soft')return mal?.7:1;
  if(c==='hard')return ben?-.45:-1;
  if(c==='odd')return -.4;
  return ben?.8:mal?-.6:.2;
}
function dayPotential(tr){
  return CATS.map(cat=>{
    let sum=0;const why=[];
    tr.aspects.forEach(a=>{
      const n=a.n,t=a.t;let rel=0;
      if(cat.planets.includes(n.id))rel+=1;
      if(cat.houses.includes(homeHouse(n)))rel+=.8;
      if(housesRuledBy(natal,n.id).some(h=>cat.houses.includes(h)))rel+=.6;
      if(cat.planets.includes(t.id))rel+=.5;
      if(cat.houses.includes(t.house))rel+=.3;
      if(!rel)return;rel=Math.min(rel,1.6);
      const tight=1-a.orb/(t.id==='Moon'?1.5:a.asp.t),pw=t.id==='Moon'?.7:LONG_IDS.includes(t.id)?1.3:1;
      const v=aspectValence(a)*rel*Math.max(.15,tight)*pw;sum+=v;why.push({a,v});
    });
    const moon=tr.byId.Moon;
    if(cat.houses.includes(moon.house))sum+=.25;
    const score=Math.max(1,Math.min(5,Math.round((3+Math.max(-2,Math.min(2,sum*1.1)))*2)/2));
    why.sort((x,y)=>Math.abs(y.v)-Math.abs(x.v));
    return {cat,score,why:why.slice(0,4),moonHere:cat.houses.includes(moon.house)};
  });
}
const starHTML=sc=>{let h='';for(let i=1;i<=5;i++)h+=sc>=i?'★':sc>=i-.5?'<span style="position:relative">☆<span style="position:absolute;left:0;width:50%;overflow:hidden">★</span></span>':'<span class="off">★</span>';return h;};
function renderPotential(){
  const res=dayPotential(transit);
  $('#pot-eyebrow').textContent=daysFromToday(tDate)===0?u('todaysTides'):u('theTides');
  $('#pot-title').textContent=fmtDay(tDate);
  const best=res.filter(r=>r.score>=4).sort((a,b)=>b.score-a.score).map(r=>L.cats[r.cat.id].n.toLowerCase());
  const care=res.filter(r=>r.score<=2).sort((a,b)=>a.score-b.score).map(r=>L.cats[r.cat.id].n.toLowerCase());
  const moon=transit.byId.Moon;
  $('#pot-sum').innerHTML=F.tidesSummary(best.slice(0,3),care.slice(0,2),moon.sign,moon.house,SIGNS[moon.sign].g);
  $('#pot-list').innerHTML=res.map(r=>{
    const C=L.cats[r.cat.id],tone=r.score>=4?0:r.score<=2?2:1,cls=tone===0?' good':tone===2?' hard':'';
    const items=r.why.map(({a,v})=>`<li class="${v>=0?'soft':'hard'}"><span class="gl">${a.t.g}${a.asp.g}</span>${glyphTxt(a.n)} ${F.transitTitle(a.t.id,a.asp.id,a.n.id)} <span class="mono muted" style="font-size:.75rem">${fmtOrb(a.orb)}</span><br><span class="muted">${F.whyLine(v>=0,a.t.id,a.n.id,homeHouse(a.n))}</span></li>`).join('');
    return `<details class="pot${cls}"><summary><span class="pi">${r.cat.g}</span><span class="pn">${C.n}</span><span class="stars" aria-label="${r.score}/5">${starHTML(r.score)}</span><span class="adv">${C.adv[tone]}</span></summary>
      <div class="why">${items?`<b>${u('why')}</b><ul>${items}</ul>`:`<p class="muted" style="margin:4px 0">${u('calmArea')}</p>`}${r.moonHere?`<p style="margin:4px 0">${F.moonHere(moon.house)}</p>`:''}<div class="learn"><b>${u('learn')}</b> ${C.learn} ${u('learnTail')}</div></div></details>`;}).join('');
  let st=store.get('tf.visits',{last:'',n:0});const today=isoDate(new Date());
  if(st.last!==today){const y=new Date();y.setDate(y.getDate()-1);st={last:today,n:st.last===isoDate(y)?st.n+1:1};store.set('tf.visits',st);}
  $('#pot-streak').textContent=st.n>1?F.streak(st.n):u('comeBack');
}

/* ---------- calendar ---------- */
const CAL_BODIES=['Sun','Mercury','Venus','Mars','Jupiter','Saturn','Uranus','Neptune','Pluto'];
function computeMonth(y,m){
  const n=new Date(y,m+1,0).getDate(),at=d=>new Date(y,m,1+d,12);
  const pos={};CAL_BODIES.forEach(id=>{pos[id]=[];for(let d=-1;d<=n+1;d++)pos[id].push(eclLon(id,at(d)));});
  const days=[];
  for(let d=0;d<n;d++)days.push({date:at(d),moon:eclLon('Moon',at(d)),ev:[]});
  CAL_BODIES.forEach(id=>{const Lp=pos[id];
    for(let d=0;d<n;d++){const k=d+1;
      if(Math.floor(Lp[k+1]/30)!==Math.floor(Lp[k]/30))days[d].ev.push({kind:'ingress',cls:'neu',rank:SLOW[id]??1,id,to:Math.floor(Lp[k+1]/30),h:houseOf(Lp[k+1],natal.cusps)});
      if(id!=='Sun'){const s0=norm(Lp[k]-Lp[k-1]+180)-180,s1=norm(Lp[k+1]-Lp[k]+180)-180;
        if((s0>0&&s1<=0)||(s0<0&&s1>=0))days[d].ev.push({kind:'station',cls:'neu',rank:9,id,retro:s1<=0});}
    }
    natal.pts.forEach(np=>{ASPECTS.forEach(a=>{if(a.id==='qx')return;
      const o=Lp.map(v=>Math.abs(sep(v,np.lon)-a.a));
      for(let d=0;d<n;d++){const k=d+1,mv=Math.abs(norm(Lp[k+1]-Lp[k]+180)-180);
        if(o[k]<=o[k-1]&&o[k]<o[k+1]&&o[k]<=Math.max(.35,mv*.6))
          days[d].ev.push({kind:'aspect',cls:a.cls,rank:SLOW[id]??1,id,nid:np.id,aid:a.id,pick:`ta:${id}|${np.id}|${a.id}`});}
    });});
  });
  days.forEach(x=>x.ev.sort((a,b)=>b.rank-a.rank));
  return {y,m,days,key:natalKey()};
}
function eventHTML(e){
  if(e.kind==='ingress')return `<div class="cal-ev"><span><span><span class="gl">${PDEF[e.id].g}</span> ${F.enters(e.id,e.to)} <span class="gl">${SIGNS[e.to].g}</span></span><span class="sub note" style="display:block">${F.nowMoving(e.h)}</span></span></div>`;
  if(e.kind==='station')return `<div class="cal-ev"><span><span><span class="gl">${PDEF[e.id].g}</span> ${F.turns(e.id,e.retro)}</span><span class="sub note" style="display:block">${e.retro?F.stationRetro(e.id):F.stationDirect(e.id)}</span></span></div>`;
  const np=natal.byId[e.nid];
  return `<button type="button" class="aitem" data-pick="${e.pick}" style="grid-template-columns:minmax(0,1fr) auto"><span><span><span class="gl">${PDEF[e.id].g}${ASP[e.aid].g}</span>${glyphTxt(np)} ${F.transitTitle(e.id,e.aid,e.nid)}</span><span class="sub" style="display:block">${F.tr(e.id,e.nid)} (${pWhat(e.nid)}, ${hl(homeHouse(np))}). ${L.aspects[e.aid].key}</span></span><span class="orb">${u('exact')}</span></button>`;
}
function renderCalendar(){
  const y=tDate.getFullYear(),m=tDate.getMonth();
  if(!cal||cal.y!==y||cal.m!==m||cal.key!==natalKey())cal=computeMonth(y,m);
  $('#cal-title').textContent=tDate.toLocaleDateString(L.locale,{month:'long',year:'numeric'});
  const lead=(new Date(y,m,1).getDay()+6)%7,todayIso=isoDate(new Date()),selIso=isoDate(tDate);
  const mon=new Date(2024,0,1,12);
  let h=Array.from({length:7},(_,i)=>`<div class="cal-wd">${new Date(mon.getTime()+i*DAY).toLocaleDateString(L.locale,{weekday:'short'}).replace('.','')}</div>`).join('');
  for(let i=0;i<lead;i++)h+='<div class="cal-d pad"></div>';
  cal.days.forEach(x=>{const iso=isoDate(x.date),z=SIGNS[Math.floor(x.moon/30)];
    const dots=x.ev.slice(0,3).map(e=>`<i class="${e.cls}"></i>`).join('');
    h+=`<button type="button" class="cal-d${iso===todayIso?' today':''}${iso===selIso?' sel':''}" data-day="${iso}" aria-label="${esc(fmtShort(x.date))}"><span class="n">${x.date.getDate()}</span><span class="mg" style="color:var(--${z.el})">${z.g}</span><span class="dots">${dots}</span></button>`;});
  $('#cal-grid').innerHTML=h;
  const x=cal.days[tDate.getDate()-1],ms=Math.floor(x.moon/30),mh=houseOf(x.moon,natal.cusps);
  let d=`<div class="eyebrow">${u('yourDay')}</div><h3>${tDate.toLocaleDateString(L.locale,{weekday:'long',day:'numeric',month:'long',year:'numeric'})}</h3><div class="rel">${F.rel(daysFromToday(tDate))}</div>
    <p class="moon"><span class="gl" style="color:var(--pink)">☽︎</span> ${F.calMoon(ms,mh,SIGNS[ms].g)}</p>`;
  d+=x.ev.length?x.ev.map(eventHTML).join(''):`<p class="note">${u('noExact')}</p>`;
  $('#cal-day').innerHTML=d;
}

/* ---------- timeline ---------- */
const TL_BODIES=['Jupiter','Saturn','Uranus','Neptune','Pluto','Node'];
function computeTimeline(start,days){
  const series=TL_BODIES.map(id=>{const a=new Float64Array(days+1);for(let d=0;d<=days;d++)a[d]=eclLon(id,new Date(start.getTime()+d*DAY));return a;});
  const rows=[];
  TL_BODIES.forEach((id,bi)=>{const arr=series[bi];
    natal.pts.forEach(n=>{if(n.id==='Node'&&id==='Node')return;
      ASPECTS.filter(a=>a.id!=='qx').forEach(a=>{
        const max=id==='Node'?1.5:2,passes=[];let run=null;
        for(let d=0;d<=days;d++){const o=Math.abs(sep(arr[d],n.lon)-a.a);
          if(o<=max){if(!run)run={s:d,e:d,min:o,ex:d};else{run.e=d;if(o<run.min){run.min=o;run.ex=d;}}}
          else if(run){passes.push(run);run=null;}}
        if(run)passes.push(run);
        if(passes.length)rows.push({t:PDEF[id],n,asp:a,passes});
      });});});
  rows.sort((x,y)=>x.passes[0].s-y.passes[0].s);
  return {start,days,rows};
}
function renderTimeline(){
  const need=!tl||tl.natalKey!==natalKey()||tDate<tl.start||tDate>new Date(tl.start.getTime()+(tl.days-20)*DAY);
  if(need){const s=new Date(tDate.getFullYear(),tDate.getMonth()-1,1,12);tl=computeTimeline(s,400);tl.natalKey=natalKey();}
  const W=900,LW=170,RH=24,TOP=28,H=TOP+tl.rows.length*RH+10,x=d=>LW+d/tl.days*(W-LW-10);
  let s=`<svg class="tl" viewBox="0 0 ${W} ${H}" role="img" aria-label="${esc(u('yearAhead'))}">`;
  for(let m=0;m<14;m++){const md=new Date(tl.start.getFullYear(),tl.start.getMonth()+m,1,12),d=(md-tl.start)/DAY;if(d>tl.days)break;
    s+=`<line x1="${x(d)}" x2="${x(d)}" y1="${TOP-6}" y2="${H}" class="grid"/><text x="${x(d)+3}" y="${TOP-12}">${md.toLocaleDateString(L.locale,{month:'short'}).replace('.','')}${md.getMonth()===0?' '+md.getFullYear():''}</text>`;}
  tl.rows.forEach((r,i)=>{const y=TOP+i*RH;
    const title=`${F.transitTitle(r.t.id,r.asp.id,r.n.id)}: ${u('exact')} ${r.passes.map(p=>fmtShort(new Date(tl.start.getTime()+p.ex*DAY))).join(', ')}`;
    s+=`<g class="row" data-tl="${i}"><title>${esc(title)}</title><rect class="bg" x="0" y="${y}" width="${W}" height="${RH}"/>`+
      `<text x="6" y="${y+RH/2}" dominant-baseline="central" class="gl" style="fill:var(--pink)">${r.t.g}</text><text x="26" y="${y+RH/2}" dominant-baseline="central" class="gl">${r.asp.g}</text>`+
      `<text x="46" y="${y+RH/2}" dominant-baseline="central" class="${r.n.id==='ASC'||r.n.id==='MC'?'':'gl'}">${r.n.g}</text>`+
      `<text x="70" y="${y+RH/2}" dominant-baseline="central">${esc((L.planets[r.n.id].short||nm(r.n)))} · ${u('hAbbr')}${homeHouse(r.n)}</text>`;
    r.passes.forEach(p=>{s+=`<rect x="${x(p.s)}" y="${y+7}" width="${Math.max(3,x(p.e+1)-x(p.s))}" height="10" rx="5" class="b-${r.asp.cls}" opacity=".85"/>`;
      if(p.min<.5)s+=`<circle cx="${x(p.ex+.5)}" cy="${y+12}" r="4" class="ex"/>`;});
    s+='</g>';});
  const today=(startOfDayNoon(new Date())-tl.start)/DAY,cur=(tDate-tl.start)/DAY;
  if(today>=0&&today<=tl.days)s+=`<line x1="${x(today)}" x2="${x(today)}" y1="${TOP-6}" y2="${H}" class="now"/>`;
  s+=`<line x1="${x(cur)}" x2="${x(cur)}" y1="${TOP-6}" y2="${H}" class="cur"/>`;
  s+='</svg>';
  $('#timeline').innerHTML=tl.rows.length?s+`<div class="legend"><span><i style="border-color:var(--ink)"></i>${u('selectedDate')}</span><span><i style="border-color:var(--pink);border-top-style:dashed"></i>${u('todayLow')}</span><span><i style="border-color:var(--teal)"></i>${u('flowing')}</span><span><i style="border-color:var(--pink)"></i>${u('challenging')}</span><span><i style="border-color:var(--earth)"></i>${aN('conj').toLowerCase()}</span></div>`:`<p class="note">${u('noSlow')}</p>`;
}
const natalKey=()=>JSON.stringify([profile.date,profile.time,profile.lat,profile.lon,profile.tz,profile.sys,profile.unknown]);

/* ---------- games ---------- */
const rnd=n=>Math.floor(Math.random()*n),pick=a=>a[rnd(a.length)];
const shuffle=a=>{a=[...a];for(let i=a.length-1;i>0;i--){const j=rnd(i+1);[a[i],a[j]]=[a[j],a[i]];}return a;};
const uniq=a=>[...new Set(a)];
const opts=(ans,pool,k=4)=>shuffle([ans,...shuffle(uniq(pool).filter(x=>x!==ans)).slice(0,k-1)]);
const TEN=PLANETS.slice(0,10);
const signDist=(a,b)=>{const d=Math.abs(Math.floor(a/30)-Math.floor(b/30));return Math.min(d,12-d);};
const Q=new Proxy({},{get:(_,k)=>(L.q[k]||EN.q[k])});
const GAMES={
  glyphs:{lvl:'beginner',i:'♓'+VS,gen(){
    if(Math.random()<.5){const p=pick(TEN);return {g:p.g,q:Q.whichPlanet(),ans:pN(p.id),options:opts(pN(p.id),TEN.map(x=>pN(x.id))),why:`${p.g} = ${pN(p.id)}: ${pKey(p.id)}.`};}
    const z=pick(SIGNS);return {g:z.g,q:Q.whichSign(),ans:sN(z.i),options:opts(sN(z.i),SIGNS.map(x=>sN(x.i))),why:`${z.g} = ${sN(z.i)}: ${sKey(z.i)}.`};}},
  rulers:{lvl:'beginner',i:'♆'+VS,gen(){
    const z=pick(SIGNS);return {g:z.g,q:Q.whoRules(z.i),ans:pN(z.rulers[0]),options:opts(pN(z.rulers[0]),TEN.map(x=>x.id).filter(x=>!z.rulers.slice(1).includes(x)).map(pN)),why:Q.whoRulesWhy(z.i,z.rulers)};}},
  elements:{lvl:'beginner',i:'△'+VS,gen(){
    const z=pick(SIGNS);
    if(Math.random()<.55)return {g:z.g,q:Q.whatElement(z.i),ans:L.el[z.el].n,options:['fire','earth','air','water'].map(e=>L.el[e].n),why:Q.elementWhy(z.i,z.el)};
    return {g:z.g,q:Q.whatMode(z.i),ans:L.mod[z.mod].n,options:['cardinal','fixed','mutable'].map(m=>L.mod[m].n),why:Q.modeWhy(z.i,z.mod)};}},
  houses:{lvl:'beginner',i:'⌂',gen(){
    const n=rnd(12)+1;
    if(Math.random()<.5)return {g:'',q:Q.whichHouseRules(n),ans:hl(n),options:opts(hl(n),L.houses.map((_,i)=>hl(i+1))),why:`${cap(hl(n))}: ${hKey(n)}.`};
    return {g:'',q:Q.houseAbout(n),ans:hShort(n),options:opts(hShort(n),L.houses.map(x=>x.short)),why:`${cap(hl(n))}: ${hKey(n)}.`};}},
  aspects:{lvl:'intermediate',i:'☍'+VS,gen(){
    const A5=ASPECTS.filter(a=>a.id!=='qx'),a=pick(A5),p1=pick(TEN),p2=pick(TEN.filter(x=>x!==p1));
    const l1=rnd(360),l2=norm(l1+(Math.random()<.5?1:-1)*a.a+(rnd(7)-3)),s=Math.round(sep(l1,l2));
    const f=(p,l)=>`${p.g} ${Math.floor(l%30)}° ${SIGNS[Math.floor(l/30)].g}`;
    return {g:'',q:`<span class="gl" style="font-size:2rem">${f(p1,l1)} &nbsp;·&nbsp; ${f(p2,l2)}</span><br>${pN(p1.id)} ${Math.floor(l1%30)}° ${sN(Math.floor(l1/30))}, ${pN(p2.id)} ${Math.floor(l2%30)}° ${sN(Math.floor(l2/30))}`,
      ans:aN(a.id),options:A5.map(x=>aN(x.id)),why:Q.spotWhy(s,a.id,a.a)};}},
  mine:{lvl:'intermediate',i:'☉'+VS,gen(){
    const ps=natal.pts.filter(p=>!['MC','Node','ASC','Chiron'].includes(p.id)),kind=pick(['sign','sign','house','rising','ruler']);
    if(kind==='rising'){const s=natal.byId.ASC.sign;return {g:'AC',q:Q.yourRising(),ans:sN(s),options:opts(sN(s),SIGNS.map(x=>sN(x.i))),why:Q.yourRisingWhy(fmtIn(natal.byId.ASC.lon),s)};}
    if(kind==='ruler'){const s=natal.byId.ASC.sign,r=natal.byId[SIGNS[s].rulers[0]];return {g:SIGNS[s].g,q:Q.chartRulerQ(s),ans:pN(r.id),options:opts(pN(r.id),TEN.map(x=>pN(x.id))),why:Q.chartRulerWhy(s,r.id,r.sign,r.house)};}
    const p=pick(ps);
    if(kind==='house')return {g:p.g,q:Q.yourHouseQ(p.id),ans:hl(p.house),options:opts(hl(p.house),L.houses.map((_,i)=>hl(i+1))),why:Q.yourHouseWhy(p.id,p.house)};
    return {g:p.g,q:Q.yourSignQ(p.id),ans:sN(p.sign),options:opts(sN(p.sign),SIGNS.map(x=>sN(x.i))),why:Q.yourSignWhy(p.id,fmtIn(p.lon),p.sign,p.retro)};}},
  timing:{lvl:'intermediate',i:'⌛',gen(){
    const k=pick(['sign','sign','longshort','applying','applying','cycle']);
    if(k==='sign'){const p=pick(TEN);return {g:p.g,q:Q.stayQ(p.id),ans:L.signTime[p.id],options:opts(L.signTime[p.id],Object.values(L.signTime)),why:Q.stayWhy(p.id)};}
    if(k==='cycle'){const p=pick(TEN.filter(x=>!['Mercury','Venus','Sun'].includes(x.id)));return {g:p.g,q:Q.cycleQ(p.id),ans:L.cycle[p.id],options:opts(L.cycle[p.id],['Moon','Mars','Jupiter','Saturn','Uranus','Neptune','Pluto'].map(x=>L.cycle[x])),why:Q.cycleWhy(p.id)};}
    if(k==='longshort'){const p=pick(TEN.filter(x=>x.id!=='Moon')),isL=LONG_IDS.includes(p.id);return {g:p.g,q:Q.longShortQ(p.id),ans:isL?u('optLong'):u('optShort'),options:[u('optLong'),u('optShort')],why:Q.longShortWhy(p.id,isL)};}
    const pl=pick(['Mercury','Venus','Mars','Jupiter','Saturn']),tg=pick(TEN),z=rnd(12),nd=6+rnd(18),before=Math.random()<.5,td=before?nd-1-rnd(4):nd+1+rnd(4),retro=Math.random()<.3,app=retro?!before:before;
    return {g:'',q:Q.applyingQ(pl,td,z,retro,tg.id,nd),ans:app?u('optApplying'):u('optSeparating'),options:[u('optApplying'),u('optSeparating')],why:Q.applyingWhy(pl,tg.id,before,retro,app)};}},
  degrees:{lvl:'hard',i:'°',gen(){
    const Lg=rnd(360),z=Math.floor(Lg/30),d=Lg%30;
    if(Math.random()<.5)return {g:'',q:Q.degSignQ(Lg),ans:sN(z),options:opts(sN(z),SIGNS.map(x=>sN(x.i))),why:Q.degSignWhy(Lg,d,z)};
    const wrong=uniq([Lg+30,Lg-30,Lg+60,Lg-60,Lg+90,Lg+120,Lg-120].map(norm)).filter(v=>v!==Lg).map(v=>v+'°');
    return {g:SIGNS[z].g,q:Q.degAbsQ(d,z),ans:Lg+'°',options:opts(Lg+'°',wrong),why:Q.degAbsWhy(d,z,Lg)};}},
  aspectpro:{lvl:'hard',i:'⚻'+VS,gen(){
    const p1=pick(TEN),p2=pick(TEN.filter(x=>x!==p1)),a=pick(ASPECTS),l1=rnd(360)+rnd(60)/60;
    const off=(Math.random()*2-1)*(a.orb+4),l2=norm(l1+(Math.random()<.5?1:-1)*(a.a+off)),d=sep(l1,l2),hit=aspectBetween(l1,l2,x=>x.orb);
    const ans=hit?aN(hit.asp.id):u('noAspect'),f=(p,l)=>`${p.g} ${fmtIn(l)} ${SIGNS[Math.floor(l/30)].g}`;
    return {g:'',q:`<span class="gl" style="font-size:1.6rem">${f(p1,l1)} &nbsp;·&nbsp; ${f(p2,l2)}</span><br>${pN(p1.id)} ${fmtIn(l1)} ${sN(Math.floor(l1/30))}, ${pN(p2.id)} ${fmtIn(l2)} ${sN(Math.floor(l2/30))}. ${Q.whichAspectIfAny()}`,
      ans,options:opts(ans,[...ASPECTS.map(x=>aN(x.id)),u('noAspect')],5),
      why:Q.aspectProWhy(d.toFixed(1),hit?hit.asp.id:null,hit?fmtOrb(hit.orb):'',hit?hit.asp.orb:0,hit&&signDist(l1,l2)!==hit.asp.a/30)};}},
  rulersmine:{lvl:'hard',i:'♄'+VS,gen(){
    const n=rnd(12)+1,s=Math.floor(natal.cusps[n-1]/30),r=natal.byId[SIGNS[s].rulers[0]];
    if(Math.random()<.5)return {g:SIGNS[s].g,q:Q.houseRulerQ(n,s),ans:pN(r.id),options:opts(pN(r.id),TEN.map(x=>pN(x.id))),why:Q.houseRulerWhy(n,s,r.id)};
    return {g:r.g,q:Q.rulerWhereQ(r.id,n),ans:hl(r.house),options:opts(hl(r.house),L.houses.map((_,i)=>hl(i+1))),why:Q.rulerWhereWhy(r.id,n,r.house)};}},
  combos:{lvl:'hard',i:'☿'+VS,gen(){
    const p=pick(TEN),others=shuffle(TEN.filter(x=>x!==p));
    if(Math.random()<.5){const n=rnd(12)+1,oh=shuffle([...Array(12).keys()].map(i=>i+1).filter(x=>x!==n));const ph=(pid,hh)=>Q.comboHouse(pid,hh);
      const ans=ph(p.id,n);return {g:p.g,q:Q.comboHouseQ(p.id,n),ans,options:opts(ans,[ph(p.id,oh[0]),ph(others[0].id,n),ph(others[1].id,oh[1]),ph(p.id,oh[2])]),why:Q.comboHouseWhy(p.id,n)};}
    const z=rnd(12),oz=shuffle([...Array(12).keys()].filter(x=>x!==z));const ps=(pid,zz)=>Q.comboSign(pid,zz);
    const ans=ps(p.id,z);return {g:p.g,q:Q.comboSignQ(p.id,z,SIGNS[z].g),ans,options:opts(ans,[ps(p.id,oz[0]),ps(others[0].id,z),ps(p.id,oz[1]),ps(others[1].id,oz[2])]),why:Q.comboSignWhy(p.id,z)};}},
  domains:{lvl:'beginner',i:'♂'+VS,gen(){
    if(Math.random()<.5){const p=pick(TEN),mine=SIGNS.filter(z=>z.rulers.includes(p.id)).map(z=>z.i),a=pick(mine);
      return {g:p.g,q:Q.planetSignQ(p.id),ans:sN(a),options:opts(sN(a),SIGNS.filter(z=>!mine.includes(z.i)).map(z=>sN(z.i))),why:Q.whoRulesWhy(a,SIGNS[a].rulers)};}
    const p=pick(TEN);return {g:'',q:Q.planetThemeQ(p.id),ans:pN(p.id),options:opts(pN(p.id),TEN.map(x=>pN(x.id))),why:Q.planetThemeWhy(p.id)};}},
  natural:{lvl:'intermediate',i:'↔',gen(){
    const k=pick(['houseSign','signHouse','housePlanet']),n=rnd(12)+1,s=n-1;
    if(k==='houseSign')return {g:'',q:Q.houseSignQ(n),ans:sN(s),options:opts(sN(s),SIGNS.map(x=>sN(x.i))),why:Q.houseSignWhy(n,s)};
    if(k==='signHouse')return {g:SIGNS[s].g,q:Q.signHouseQ(s),ans:hl(n),options:opts(hl(n),L.houses.map((_,i)=>hl(i+1))),why:Q.houseSignWhy(n,s)};
    const r=SIGNS[s].rulers[0];return {g:'',q:Q.housePlanetQ(n),ans:pN(r),options:opts(pN(r),TEN.map(x=>x.id).filter(x=>!SIGNS[s].rulers.slice(1).includes(x)).map(pN)),why:Q.housePlanetWhy(n,s,r)};}},
  whoswhere:{lvl:'intermediate',i:'☽'+VS,gen(){
    const ps=natal.pts.filter(p=>TEN.some(t=>t.id===p.id)),by={};ps.forEach(p=>(by[p.house]=by[p.house]||[]).push(p));
    const ones=Object.entries(by).filter(([,a])=>a.length===1);
    if(!ones.length){const p=pick(ps);return {g:p.g,q:Q.yourHouseQ(p.id),ans:hl(p.house),options:opts(hl(p.house),L.houses.map((_,i)=>hl(i+1))),why:Q.yourHouseWhy(p.id,p.house)};}
    const [h,[p]]=pick(ones);
    return {g:'',q:Q.whichPlanetInHouse(+h),ans:pN(p.id),options:opts(pN(p.id),TEN.map(x=>pN(x.id))),why:Q.yourHouseWhy(p.id,+h)};}},
  dignity:{lvl:'hard',i:'♔',gen(){
    const EXALT={Sun:0,Moon:1,Venus:11,Mars:9,Jupiter:3,Saturn:6},kind=pick(['home','home','detriment','detriment','exalt','fall']);
    const id=pick(kind==='exalt'||kind==='fall'?Object.keys(EXALT):['Sun','Moon','Mercury','Venus','Mars','Jupiter','Saturn']),pl=TEN.find(x=>x.id===id);
    const homes=SIGNS.filter(z=>z.rulers.includes(id)).map(z=>z.i);
    const good=kind==='home'?homes:kind==='detriment'?homes.map(i=>(i+6)%12):kind==='exalt'?[EXALT[id]]:[(EXALT[id]+6)%12],a=pick(good);
    return {g:pl.g,q:Q.dignityQ(id,kind),ans:sN(a),options:opts(sN(a),SIGNS.filter(z=>!good.includes(z.i)).map(z=>sN(z.i))),why:Q.dignityWhy(id,kind,good.map(sN).join(' / '))};}},
  exam:{lvl:'expert',i:'✦',total:15,timer:20,gen(){
    const k=pick(['aspects','timing','degrees','aspectpro','rulersmine','combos','mine','rulers','houses','elements','domains','natural','whoswhere','dignity']),q=GAMES[k].gen();q.from=L.games[k].t;return q;}}
};
let game=null,qTimer=null;
const LEVELS=['beginner','intermediate','hard','expert'];
const total=()=>GAMES[game.k].total||10;
function renderGames(){
  const best=store.get('tf.best',{});
  $('#games').innerHTML=LEVELS.map(l=>`<h3 class="lvl">${L.levels[l]}</h3><div class="games">${Object.entries(GAMES).filter(([,g])=>g.lvl===l).map(([k,g])=>`<button type="button" class="gcard" data-game="${k}"><span class="gi">${g.i}</span><h3>${L.games[k].t}</h3><p>${L.games[k].d}</p><span class="best">${best[k]!=null?F.best(best[k],g.total||10):u('notPlayed')}</span></button>`).join('')}</div>`).join('');
}
function startGame(k){game={k,i:0,score:0,res:[],streak:0,bestStreak:0};nextQ();$('#games-home').hidden=true;$('#quiz').hidden=false;window.scrollTo(0,0);}
function stopTimer(){if(qTimer){clearInterval(qTimer);qTimer=null;}}
function nextQ(){stopTimer();if(game.i>=total())return endGame();game.q=GAMES[game.k].gen();game.picked=null;
  const T=GAMES[game.k].timer;
  if(T){game.left=T;qTimer=setInterval(()=>{game.left--;const el=$('#q-timer');if(el)el.textContent=game.left+'s';
    if(game.left<=0){stopTimer();answerQ(-1);}},1000);}
  renderQ();}
function answerQ(idx){if(game.picked!=null)return;stopTimer();game.picked=idx;const ok=idx>=0&&game.q.options[idx]===game.q.ans;
  game.res[game.i]=ok;if(ok){game.score++;game.streak++;game.bestStreak=Math.max(game.bestStreak,game.streak);}else game.streak=0;
  try{navigator.vibrate&&navigator.vibrate(ok?12:[30,50,30]);}catch(e){}renderQ();}
function renderQ(){
  const q=game.q,G=GAMES[game.k],N=total();
  const dots=Array.from({length:N},(_,i)=>`<i class="${game.res[i]===true?'ok':game.res[i]===false?'no':i===game.i?'cur':''}"></i>`).join('');
  let h=`<div class="qhead"><div><div class="eyebrow">${L.games[game.k].t}${q.from?' · '+q.from:''}</div><div class="mono muted" style="font-size:.85rem">${F.qHead(game.i+1,N,game.score,game.streak)}${G.timer&&game.picked==null?` · <b id="q-timer" style="color:var(--pink)">${game.left}s</b>`:''}</div></div><div class="dots">${dots}</div></div>
  <div class="qprompt">${q.g?`<span class="qg">${q.g==='AC'?'<span class="mono" style="font-size:.6em">AC</span>':q.g}</span>`:''}<div class="qt">${q.q}</div></div>
  <div class="qopts">${q.options.map((o,i)=>{let c='';if(game.picked!=null){if(o===q.ans)c=' right';else if(i===game.picked)c=' wrong';}
    return `<button type="button" class="qopt${c}" data-opt="${i}"${game.picked!=null?' disabled':''}>${esc(cap(o))}</button>`;}).join('')}</div>`;
  if(game.picked!=null){const ok=game.picked>=0&&q.options[game.picked]===q.ans;
    h+=`<div class="qfb${ok?'':' no'}"><b>${ok?u('correct'):game.picked<0?F.timesUp(esc(q.ans)):F.notQuite(esc(q.ans))}</b> ${q.why}</div>
    <div class="form-actions"><button class="btn pri" type="button" id="q-next">${game.i>=N-1?u('seeScore'):u('nextQ')}</button><button class="btn" type="button" id="q-quit">${u('backGames')}</button></div>`;}
  else h+=`<div class="form-actions"><button class="btn" type="button" id="q-quit">${u('backGames')}</button></div>`;
  $('#quiz').innerHTML=h;
}
function endGame(){
  stopTimer();const N=total(),best=store.get('tf.best',{}),prev=best[game.k];if(prev==null||game.score>prev){best[game.k]=game.score;store.set('tf.best',best);}
  const pct=game.score/N,msg=pct>=.9?u('msgHigh'):pct>=.6?u('msgMid'):u('msgLow');
  $('#quiz').innerHTML=`<div class="score"><div class="eyebrow">${L.games[game.k].t}</div><div class="n">${game.score}<span style="font-size:.4em;color:var(--ink-soft)"> / ${N}</span></div><p class="it" style="font-size:1.2rem">${msg}</p>
  <p class="mono muted">${F.longestStreak(game.bestStreak,prev!=null&&game.score>prev)}</p>
  <div class="form-actions" style="justify-content:center"><button class="btn pri" type="button" id="q-again">${u('playAgain')}</button><button class="btn" type="button" id="q-quit">${u('backGames')}</button></div></div>`;
}
$('#quiz').addEventListener('click',e=>{
  const o=e.target.closest('[data-opt]');
  if(o&&game.picked==null){answerQ(+o.dataset.opt);return;}
  if(e.target.closest('#q-next')){game.i++;nextQ();}
  else if(e.target.closest('#q-again'))startGame(game.k);
  else if(e.target.closest('#q-quit')){stopTimer();$('#quiz').hidden=true;$('#games-home').hidden=false;renderGames();}
});
$('#games').addEventListener('click',e=>{const c=e.target.closest('[data-game]');if(c)startGame(c.dataset.game);});

/* ---------- interactions ---------- */
const isMobile=()=>window.matchMedia('(max-width:879px)').matches;
function pickNatal(p,fromSheet){
  selN=(!fromSheet&&!isMobile()&&selN===p.dataset.pick&&!p.classList.contains('aitem'))?null:p.dataset.pick;
  renderNatal();if(isMobile())openSheet($('#detail-natal').innerHTML);}
$('#tab-chart').addEventListener('click',e=>{const p=e.target.closest('[data-pick]');if(p)pickNatal(p);});
$('#tab-transits').addEventListener('click',e=>{
  const r=e.target.closest('[data-tl]');
  if(r){const row=tl.rows[+r.dataset.tl],cur=(tDate-tl.start)/DAY,p=row.passes.reduce((a,b)=>Math.abs(b.ex-cur)<Math.abs(a.ex-cur)?b:a);
    tDate=startOfDayNoon(new Date(tl.start.getTime()+p.ex*DAY));selT='ta:'+row.t.id+'|'+row.n.id+'|'+row.asp.id;renderTransits();
    if(isMobile())openSheet($('#detail-transit').innerHTML);else $('#detail-transit').scrollIntoView({behavior:'smooth',block:'nearest'});return;}
  const dc=e.target.closest('[data-day]');
  if(dc){stopPlay();const [y,m,d]=dc.dataset.day.split('-').map(Number);tDate=new Date(y,m-1,d,12);selT=null;renderTransits();return;}
  const cn=e.target.closest('[data-cal]');
  if(cn){stopPlay();const v=cn.dataset.cal;
    if(v==='today')tDate=startOfDayNoon(new Date());
    else{const y=tDate.getFullYear(),m=tDate.getMonth()+(+v),d=Math.min(tDate.getDate(),new Date(y,m+1,0).getDate());tDate=new Date(y,m,d,12);}
    selT=null;renderTransits();return;}
  const st=e.target.closest('[data-step]');
  if(st){stopPlay();const v=+st.dataset.step;tDate=v===0?startOfDayNoon(new Date()):new Date(tDate.getTime()+v*DAY);renderTransits();return;}
  const p=e.target.closest('[data-pick]');if(p)pickTransit(p);
});
function pickTransit(p,fromSheet){
  selT=(!fromSheet&&!isMobile()&&selT===p.dataset.pick&&!p.classList.contains('aitem'))?null:p.dataset.pick;
  renderTransits();if(isMobile())openSheet($('#detail-transit').innerHTML);}

/* ---------- bottom sheet ---------- */
function openSheet(html){$('#sheet-body').innerHTML=html;$('#sheet-body').scrollTop=0;$('#sheet').style.transform='';$('#sheet').classList.add('open');$('#scrim').hidden=false;document.body.classList.add('sheet-open');}
function closeSheet(){if(!$('#sheet').classList.contains('open'))return;$('#sheet').classList.remove('open');$('#sheet').style.transform='';$('#scrim').hidden=true;document.body.classList.remove('sheet-open');
  if(curTab==='chart'){selN=null;renderNatal();}else if(curTab==='transits'){selT=null;renderTransits();}}
$('#scrim').addEventListener('click',closeSheet);
$('#sheet-x').addEventListener('click',closeSheet);
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeSheet();});
$('#sheet-body').addEventListener('click',e=>{const p=e.target.closest('[data-pick]');if(!p)return;
  if(curTab==='chart')pickNatal(p,true);else if(curTab==='transits')pickTransit(p,true);});
(function(){let y0=null,dy=0;const g=$('#sheet-grab'),sh=$('#sheet');
  g.addEventListener('pointerdown',e=>{y0=e.clientY;dy=0;g.setPointerCapture(e.pointerId);});
  g.addEventListener('pointermove',e=>{if(y0===null)return;dy=Math.max(0,e.clientY-y0);sh.style.transform=`translateY(${dy}px)`;});
  g.addEventListener('pointerup',()=>{if(y0===null)return;y0=null;if(dy>90)closeSheet();else sh.style.transform='';});})();

(function(){let x0=null,y0=null;const w=$('#wheel-transit');
  w.addEventListener('touchstart',e=>{x0=e.touches[0].clientX;y0=e.touches[0].clientY;},{passive:true});
  w.addEventListener('touchend',e=>{if(x0===null)return;const dx=e.changedTouches[0].clientX-x0,dy=e.changedTouches[0].clientY-y0;x0=null;
    if(Math.abs(dx)>50&&Math.abs(dy)<45){e.preventDefault();stopPlay();tDate=new Date(tDate.getTime()+(dx<0?1:-1)*DAY);renderTransits();try{navigator.vibrate&&navigator.vibrate(8);}catch(err){}}});})();
$('#t-range').addEventListener('input',e=>{stopPlay();tDate=new Date(startOfDayNoon(new Date()).getTime()+(+e.target.value)*DAY);renderTransits();});
$('#t-date').addEventListener('change',e=>{if(!e.target.value)return;const [y,m,d]=e.target.value.split('-').map(Number);tDate=new Date(y,m-1,d,12);renderTransits();});
function stopPlay(){if(playTimer){clearInterval(playTimer);playTimer=null;}$('#t-play').textContent=u('play');}
$('#t-play').addEventListener('click',()=>{if(playTimer)return stopPlay();$('#t-play').textContent=u('pause');
  playTimer=setInterval(()=>{tDate=new Date(tDate.getTime()+DAY);renderTransits();},120);});


/* ---------- planets tab ---------- */
function retroTouches(lo,hi){
  const rank={0:0,180:1,90:2,120:3,60:4},out=[];
  natal.pts.forEach(n=>ASPECTS.filter(a=>a.id!=='qx').forEach(a=>(a.a===0||a.a===180?[a.a]:[a.a,-a.a]).forEach(sg=>{const t=norm(n.lon+sg);
    for(const k of [-360,0,360]){const x=t+k;if(x>=lo&&x<=hi){out.push({n,a,lon:t});break;}}})));
  out.sort((x,y)=>(rank[x.a.a]??9)-(rank[y.a.a]??9));return out.slice(0,6);
}
function retroDetail(id,lo,hi){
  const ruled=housesRuledBy(natal,id),hits=lo==null?[]:retroTouches(lo,hi);let h='<ul class="ctx">';
  if(ruled.length)h+=`<li><span>${u('retroRulesH')}</span>${ruled.map(n=>`${hl(n)} (${hShort(n)})`).join(', ')}</li>`;
  if(lo!=null)h+=`<li><span>${u('retroHitsH')}</span>${hits.length?hits.map(x=>`<div class="rt">${aN(x.a.id)} → ${glyph(x.n)} ${nm(x.n)} (${fmtIn(x.n.lon)} ${sN(x.n.sign)})</div>`).join('')+`<div class="rt note">${u('retroHitsNote')}</div>`:u('retroNoHits')}</li>`;
  return h+'</ul>';
}
function retroNatalAsp(id){
  const as=natal.aspects.filter(a=>a.p1.id===id||a.p2.id===id).slice(0,5);
  return as.length?`<ul class="ctx"><li><span>${u('retroNatalAspH')}</span>${as.map(a=>{const o=a.p1.id===id?a.p2:a.p1;return `<div class="rt">${aN(a.asp.id)} → ${glyph(o)} ${nm(o)} (${sN(o.sign)})</div>`;}).join('')}</li></ul>`:'';
}
let retroCal=null;
function renderRetroCal(){
  const t0=startOfDayNoon(new Date()),key=natal.date.getTime()+'|'+t0.getTime();
  if(!retroCal||retroCal.key!==key){const rows=[];
    for(const id of ['Mercury','Venus','Mars','Jupiter','Saturn','Chiron','Uranus','Neptune','Pluto']){
      let run=null;
      for(let i=-220;i<=730;i++){const d=new Date(t0.getTime()+i*DAY),r=speedOf(id,d)<0;
        if(r&&!run)run={id,s:d,lons:[]};
        if(r&&run){const l=eclLon(id,d),pv=run.lons.length?run.lons[run.lons.length-1]:l;let dd=l-pv;if(dd>180)dd-=360;if(dd<-180)dd+=360;run.lons.push(pv+dd);}
        if(run&&(!r||i===730)){const e=r?d:d,last=new Date(e.getTime()-(r?0:DAY)),l1=eclLon(id,run.s),l2=eclLon(id,last);
          if(e>=t0)rows.push({id,s:run.s,e,lo:Math.min(...run.lons),hi:Math.max(...run.lons),z1:Math.floor(l1/30),z2:Math.floor(l2/30),h1:houseOf(l1,natal.cusps),h2:houseOf(l2,natal.cusps),on:run.s<=t0});
          run=null;}}}
    rows.sort((a,b)=>a.s-b.s);retroCal={key,rows};}
}
let skyDate=null;
function renderSky(){
  const d=skyDate||new Date(),tr=computeTransits(natal,d);
  $('#sky-label').textContent=(skyDate?'':'● '+u('skyLive')+' · ')+d.toLocaleString(L.locale,{day:'numeric',month:'short',year:'numeric',hour:'2-digit',minute:'2-digit'});
  $('#sky-list').innerHTML=tr.pts.map(p=>`<div class="prow"><span>${glyph(p)}</span><span>${nm(p)}</span><span><span class="gl" style="color:var(--${SIGNS[p.sign].el})">${SIGNS[p.sign].g}</span> ${sIn(p.sign)}</span><span class="pd mono">${fmtIn(p.lon)}${p.retro?' ℞':''}</span><span class="ph mono">${hl(p.house)}</span></div>`).join('');
}
document.addEventListener('click',e=>{const b=e.target.closest&&e.target.closest('[data-sky]');if(!b)return;const n=+b.dataset.sky;
  skyDate=n===0?null:new Date((skyDate||new Date()).getTime()+n*DAY);renderSky();});
setInterval(()=>{if(curTab==='planets'&&!skyDate&&!document.hidden)renderSky();},30000);
let psegV=store.get('tf.pseg','signs'),rsegV=store.get('tf.rseg','now');
function setPseg(v){psegV=v;store.set('tf.pseg',v);document.querySelectorAll('[data-pseg]').forEach(b=>b.setAttribute('aria-pressed',b.dataset.pseg===v));document.querySelectorAll('[data-pp]').forEach(p=>p.hidden=p.dataset.pp!==v);}
function setRseg(v){rsegV=v;store.set('tf.rseg',v);renderRetroCards();}
function retroCard(p,badge,cls,dates,where,tag,body){
  return `<details class="rcard"><summary><div class="rh"><span>${glyph(p)} ${nm(p)} ℞</span>${badge?`<span class="badge ${cls}">${badge}</span>`:''}</div>${dates?`<div class="rd mono">${dates}</div>`:''}<div class="rd">${where}</div><div class="rtag">${tag}</div></summary><div class="rb">${body}</div></details>`;
}
function renderRetroCards(){
  document.querySelectorAll('[data-rseg]').forEach(b=>b.setAttribute('aria-pressed',b.dataset.rseg===rsegV));
  $('#rseg-note').textContent=u({now:'rNoteNow',soon:'rNoteSoon',birth:'rNoteBirth'}[rsegV]);
  const t0=startOfDayNoon(new Date()),tagOf=id=>((L.retroInfo[id]||'').split('. ')[0]).replace(/\.$/,'.');let h='';
  if(rsegV==='birth'){
    h=natal.pts.filter(p=>p.retro).map(p=>retroCard(p,u('badgeBirth'),'',null,`${sN(p.sign)} · ${hl(homeHouse(p))}`,tagOf(p.id),`<p>${F.retroNatal(p.id,p.sign,homeHouse(p))}</p>${retroDetail(p.id,null,null)}${retroNatalAsp(p.id)}`)).join('');
    if(!h)h=`<p class="note">${u('retroNone')}</p>`;
  }else{
    let rows=retroCal.rows.filter(r=>rsegV==='now'?r.on:!r.on);
    if(rsegV==='now')rows=[...rows].sort((a,b)=>a.e-b.e);
    h=rows.map(r=>{const p=PDEF[r.id],days=Math.max(1,Math.round(((r.on?r.e:r.s)-t0)/DAY));
      return retroCard(p,r.on?F.retroEnds(days):F.retroStarts(days),r.on?'':'soon',`${fmtShort(r.s)} → ${fmtShort(r.e)}`,`${sN(r.z1)}${r.z2!==r.z1?' → '+sN(r.z2):''} · ${hl(r.h1)}${r.h2!==r.h1?' → '+hl(r.h2):''}`,tagOf(r.id),`<p>${F.retroPeriod(r.id,r.h1,r.h2)}</p>${retroDetail(r.id,r.lo,r.hi)}`);}).join('');
    if(!h)h=`<p class="note">${u('retroNoneNow')}</p>`;
  }
  $('#retro-cards').innerHTML=h;
}
document.addEventListener('click',e=>{const a=e.target.closest&&e.target.closest('[data-pseg],[data-rseg]');if(!a)return;if(a.dataset.pseg)setPseg(a.dataset.pseg);else setRseg(a.dataset.rseg);});
function renderPlanets(){
  const pts=natal.pts.filter(p=>p.id!=='ASC'&&p.id!=='MC').concat(natal.pts.filter(p=>p.id==='ASC'||p.id==='MC'));
  $('#planet-list').innerHTML=pts.map(p=>`<button type="button" class="prow" data-pick="natal:${p.id}"><span>${glyph(p)}</span><span>${nm(p)}</span><span><span class="gl" style="color:var(--${SIGNS[p.sign].el})">${SIGNS[p.sign].g}</span> ${sIn(p.sign)}</span><span class="pd mono">${fmtIn(p.lon)}${p.retro?' ℞':''}</span><span class="ph mono">${hl(homeHouse(p))}</span></button>`).join('');
  renderSky();renderRetroCal();renderRetroCards();setPseg(psegV);
}
document.addEventListener('click',e=>{const r=e.target.closest&&e.target.closest('.prow[data-pick]');if(!r)return;showTab('chart');selN=r.dataset.pick;renderNatal();});

document.querySelectorAll('nav.tabs button').forEach(b=>b.addEventListener('click',()=>showTab(b.dataset.tab)));
function showTab(t){closeSheet();curTab=t;window.scrollTo(0,0);document.querySelectorAll('nav.tabs button').forEach(b=>b.setAttribute('aria-selected',b.dataset.tab===t));
  document.querySelectorAll('[data-panel]').forEach(s=>s.hidden=s.dataset.panel!==t);
  if(t!=='transits')stopPlay();
  if(t!=='learn')stopTimer();
  if(t==='planets')renderPlanets();if(t==='transits')renderTransits();if(t==='learn')renderGames();if(t==='me'){fillForm();renderLangs();}store.set('tf.tab',t);}

/* ---------- form & saved charts ---------- */
const fc=$('#f-city');
function renderCityOptions(){const v=fc.value;fc.innerHTML=CITIES.map(c=>`<option>${c[0]}</option>`).join('')+`<option value="">${esc(u('otherCity'))}</option>`;fc.value=v;}
fc.addEventListener('change',()=>{const c=CITIES.find(x=>x[0]===fc.value);if(c){$('#f-lat').value=c[1];$('#f-lon').value=c[2];$('#f-tz').value=c[3];}});
$('#f-unknown').addEventListener('change',e=>{$('#f-time').disabled=e.target.checked;});
function renderChartList(){
  $('#chart-list').innerHTML=charts.map((c,i)=>`<div class="citem${i===active?' on':''}">
    <button type="button" class="cmain" data-open="${i}"><span class="it">${esc(chartName(c,i))}</span><span class="mono muted">${c.date?fmtShort(new Date(c.date+'T12:00:00')):''} · ${c.unknown?u('timeUnknown'):esc(c.time)} · ${esc(c.city||(c.lat+', '+c.lon))}</span></button>
    ${i===active?`<span class="badge">${u('viewingBadge')}</span>`:''}
    <button class="btn sm" type="button" data-edit="${i}">${u('edit')}</button>
    ${charts.length>1?`<button class="btn sm${delArm===i?' danger':''}" type="button" data-del="${i}">${delArm===i?u('delConfirm'):u('del')}</button>`:''}</div>`).join('');
  const opt=charts.map((c,i)=>`<option value="${i}"${i===active?' selected':''}>${esc(chartName(c,i))}</option>`).join('');
  document.querySelectorAll('.chart-switch').forEach(x=>x.innerHTML=opt);
  document.querySelectorAll('[data-switch]').forEach(x=>x.hidden=charts.length<2);
}
function openChart(i){active=i;profile=charts[i];saveCharts();selN=null;selT=null;tl=null;cal=null;delArm=-1;boot();}
document.addEventListener('change',e=>{if(e.target.classList&&e.target.classList.contains('chart-switch'))openChart(+e.target.value);});
$('#tab-me').addEventListener('click',e=>{
  const lb=e.target.closest('[data-lang]');if(lb){setLang(lb.dataset.lang);return;}
  const o=e.target.closest('[data-open]'),ed=e.target.closest('[data-edit]'),dl=e.target.closest('[data-del]');
  if(o){openChart(+o.dataset.open);showTab('chart');return;}
  if(ed){const i=+ed.dataset.edit;delArm=-1;fillForm(charts[i],i);renderChartList();$('#form-panel').scrollIntoView({behavior:'smooth',block:'start'});return;}
  if(dl){const i=+dl.dataset.del;
    if(delArm!==i){delArm=i;renderChartList();return;}
    charts.splice(i,1);delArm=-1;
    if(active>=charts.length)active=charts.length-1;else if(i<active)active--;
    openChart(active);fillForm();return;}
  if(e.target.closest('#add-chart')){delArm=-1;renderChartList();fillForm({name:'',date:'',time:'',unknown:false,city:'Athens',lat:37.98,lon:23.73,tz:'Europe/Athens',sys:'placidus'},-1);
    $('#form-panel').scrollIntoView({behavior:'smooth',block:'start'});setTimeout(()=>$('#f-name').focus(),300);}
});
function fillForm(f,idx){if(idx===undefined){idx=active;f=profile;}
  editing=idx;$('#form-title').textContent=idx===-1?u('newChart'):u('editPrefix')+chartName(f,idx);$('#f-submit').textContent=idx===-1?u('addChartBtn'):u('save');
  $('#f-name').value=f.name||'';$('#f-date').value=f.date;$('#f-time').value=f.time||'';$('#f-unknown').checked=!!f.unknown;$('#f-time').disabled=!!f.unknown;
  fc.value=CITIES.some(c=>c[0]===f.city)?f.city:'';$('#f-lat').value=f.lat;$('#f-lon').value=f.lon;$('#f-tz').value=f.tz;$('#f-sys').value=f.sys;$('#f-err').textContent='';}
function openForm(){showTab('me');}
$('#edit-btn').addEventListener('click',openForm);
$('#banner-edit').addEventListener('click',openForm);
$('#f-cancel').addEventListener('click',()=>{fillForm();showTab('chart');});
$('#bform').addEventListener('submit',e=>{e.preventDefault();
  const np={name:$('#f-name').value.trim(),date:$('#f-date').value,time:$('#f-time').value||'12:00',unknown:$('#f-unknown').checked,
    city:fc.value,lat:parseFloat($('#f-lat').value),lon:parseFloat($('#f-lon').value),tz:$('#f-tz').value.trim(),sys:$('#f-sys').value,example:false};
  if(!np.date)return $('#f-err').textContent=u('errDate');
  if(!np.unknown&&!$('#f-time').value)return $('#f-err').textContent=u('errTime');
  if(isNaN(np.lat)||isNaN(np.lon))return $('#f-err').textContent=u('errLatLon');
  try{tzOffsetMin(np.tz,new Date());}catch(err){return $('#f-err').textContent=u('errTz');}
  if(np.unknown)np.time='12:00';
  if(editing===-1){charts.push(np);active=charts.length-1;}else{charts[editing]=np;active=editing;}
  profile=charts[active];saveCharts();selN=null;selT=null;tl=null;cal=null;boot();showTab('chart');
});

/* ---------- language switching ---------- */
function applyStatic(){
  document.documentElement.lang=LANG;
  document.querySelectorAll('[data-i18n]').forEach(el=>{el.textContent=u(el.dataset.i18n);});
  document.querySelectorAll('[data-i18n-html]').forEach(el=>{el.innerHTML=u(el.dataset.i18nHtml);});
  document.querySelectorAll('[data-i18n-aria]').forEach(el=>{el.setAttribute('aria-label',u(el.dataset.i18nAria));});
  $('#sheet').setAttribute('aria-label',u('details'));
  $('#lang-top').innerHTML=LANG_ORDER.map(c=>`<option value="${c}"${c===LANG?' selected':''}>${LANGS[c].short}</option>`).join('');
  renderCityOptions();
}
function renderLangs(){
  $('#langs').innerHTML=LANG_ORDER.map(c=>`<button type="button" class="lang-btn" data-lang="${c}" aria-pressed="${c===LANG}">${LANGS[c].label}</button>`).join('');
}
function setLang(c){
  if(!LANGS[c]||c===LANG)return;
  LANG=c;L=LANGS[c];store.set('tf.lang',c);
  applyStatic();renderLangs();renderInstall();
  boot();
  if(curTab==='planets')renderPlanets();
  if(curTab==='transits')renderTransits();
  if(curTab==='learn'){if(!$('#quiz').hidden&&game){stopTimer();$('#quiz').hidden=true;$('#games-home').hidden=false;}renderGames();}
  if(curTab==='me')fillForm();
}
$('#lang-top').addEventListener('change',e=>setLang(e.target.value));

/* ---------- roll over to the new day when the app comes back ---------- */
let lastToday=isoDate(new Date());
function checkNewDay(){
  const now=isoDate(new Date());if(now===lastToday)return;
  const wasToday=isoDate(tDate)===lastToday;lastToday=now;
  if(wasToday){tDate=startOfDayNoon(new Date());selT=null;}
  if(curTab==='transits')renderTransits();
}
document.addEventListener('visibilitychange',()=>{if(!document.hidden)checkNewDay();});
window.addEventListener('focus',checkNewDay);
setInterval(checkNewDay,60000);

/* ---------- install & offline ---------- */
let deferredInstall=null;
const standalone=window.matchMedia('(display-mode: standalone)').matches||navigator.standalone===true;
function renderInstall(){
  const card=$('#install-card');if(standalone){card.hidden=true;return;}
  card.hidden=false;
  const ios=/iphone|ipad|ipod/i.test(navigator.userAgent);
  $('#install-btn').hidden=!deferredInstall;
  $('#install-text').innerHTML=deferredInstall?u('installHtml'):ios?u('installIos'):u('installOther');
}
window.addEventListener('beforeinstallprompt',e=>{e.preventDefault();deferredInstall=e;renderInstall();});
$('#install-btn').addEventListener('click',async()=>{if(!deferredInstall)return;deferredInstall.prompt();await deferredInstall.userChoice;deferredInstall=null;renderInstall();});
if('serviceWorker' in navigator&&location.protocol==='https:')navigator.serviceWorker.register('sw.js').catch(()=>{});

/* ---------- boot ---------- */
function boot(){
  const when=localToUTC(profile.date,profile.time,profile.tz);
  natal=computeChart(when,profile.lat,profile.lon,profile.sys);
  renderHeader();renderNatal();
}
if(!window.Astronomy){document.querySelector('main').innerHTML=`<div class="panel"><h2>${u('libFailTitle')}</h2><p>${u('libFail')}</p></div>`;return;}
applyStatic();
boot();
renderInstall();
const h=(location.hash||'').slice(1),saved=store.get('tf.tab','transits');
showTab(['chart','transits','learn','me'].includes(h)?h:(saved==='me'?'transits':saved));
})();
