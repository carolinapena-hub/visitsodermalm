// --- Hjälpfunktioner ---
const $ = (sel, par=document) => par.querySelector(sel);
const $$ = (sel, par=document) => Array.from(par.querySelectorAll(sel));

// Mobilmeny
$('#menuToggle')?.addEventListener('click', ()=> $('#navLinks').classList.toggle('open'));

// År i footer
$('#year').textContent = new Date().getFullYear();

// Bild-zoom modal
const modal = $('#modal'), modalImg = $('#modalImg'), modalClose = $('#modalClose');
$$('.zoomable').forEach(img => img.addEventListener('click', ()=>{
  modalImg.src = img.src; modal.classList.add('open'); modal.setAttribute('aria-hidden','false');
}));
modalClose?.addEventListener('click', ()=>{ modal.classList.remove('open'); modal.setAttribute('aria-hidden','true'); });
modal?.addEventListener('click', (e)=>{ if(e.target===modal) modalClose.click(); });
document.addEventListener('keydown', (e)=>{ if(e.key==='Escape' && modal.classList.contains('open')) modalClose.click(); });

// Boka (demo)
$$('.book-btn').forEach(btn => btn.addEventListener('click', ()=>{
  const tour = btn.dataset.tour || 'Tur';
  alert(`Tack! Förfrågan registrerad för: ${tour}. Vi återkommer via e-post.`);
}));

// --- Flerspråkigt ---
const translations = {
  sv:{
    "nav.about":"Om Söder","nav.tours":"Turer","nav.sights":"Sevärdheter","nav.food":"Mat & Service","nav.events":"Aktuellt","nav.map":"Karta","nav.gallery":"Galleri","nav.planner":"Planerare",
    "hero.title":"Upptäck Södermalm","hero.text":"Historiska gränder, kreativa kvarter och Stockholms bästa vyer.","hero.cta":"Boka en tur",
    "about.title":"Om Södermalm","about.text":"Södermalm – ”Söder” – är Stockholms mest levande stadsdel. Kullerstensgränder, lokala designerbutiker, parker som Tantolunden och utsikter från Monteliusvägen.",
    "about.point1":"Shopping & fika i SoFo kring Nytorget","about.point2":"Utsikter från Monteliusvägen & Fjällgatan","about.point3":"Bad och picknick längs Årstaviken",
    "about.facts":"Snabba fakta","about.cityLbl":"Stad","about.bestLbl":"Bäst tid","about.bestVal":"Maj–September","about.vibeLbl":"Stämning","about.vibeVal":"Kreativ & urban",
    "tours.title":"Guidade turer",
    "tours.t1.title":"Historiska Söder – kvällsvandring","tours.t1.meta":"2 timmar · Svenska/Engelska","tours.t1.desc":"Katarina kyrka, Mosebacke och Monteliusvägen – full av historier och fotochanser.",
    "tours.t2.title":"SoFo smakrunda","tours.t2.meta":"2,5 timmar · Smakprov ingår","tours.t2.desc":"Kaféer och street food runt Nytorget & Skånegatan.",
    "tours.t3.title":"Panorama & parker","tours.t3.meta":"1,5 timmar · Lugn takt","tours.t3.desc":"Skinnarviksberget, Tantolunden och Fjällgatan.",
    "sights.title":"Sevärdheter","sights.montelius":"Solnedgångsvy över Riddarfjärden och Stadshuset.","sights.fjallgatan":"Trähus och vida vyer mot Saltsjön & Djurgården.","sights.tanto":"Kolonilotter, minigolf och bad längs Årstaviken.","sights.fotografiska":"Världsledande fotomuseum med restaurang & bar.",
    "food.title":"Restauranger & service","food.cat.all":"Alla","food.cat.restaurant":"Restaurang","food.cat.cafe":"Kafé","food.cat.bar":"Bar","food.cat.veg":"Veg/Vegansk","food.cat.service":"Service",
    "food.item1":"SoFo-favorit med frukost & uteservering.","food.item2":"Rustik italiensk mat nära Mariatorget.","food.item3":"Lokalt mikrobryggeri med säsongsöl.","food.item4":"Plantbaserat kök med nordiska smaker.","food.item5":"Centralt apotek med generösa öppettider.",
    "events.title":"Aktuellt på Södermalm","events.loading":"Hämtar aktuella evenemang…",
    "map.title":"Karta & ta sig runt","map.desc":"Se Södermalm på kartan, beräkna ungefärlig gångtid mellan platser och se närmaste tunnelbanestationer.","map.open":"Öppna större karta",
    "map.walkHeader":"Beräkna gångtid","map.from":"Från","map.to":"Till","map.speed":"Gånghastighet","map.calc":"Beräkna",
    "map.transitHeader":"Kollektivtrafik i närheten","map.transitNote":"Använd SL-appen för realtidsavgångar.",
    "gallery.title":"Galleri",
    "planner.title":"Planera din dag","planner.choose":"Välj aktivitet","planner.add":"Lägg till","planner.clear":"Rensa","planner.download":"Ladda ner plan"
  },
  en:{
    "nav.about":"About","nav.tours":"Tours","nav.sights":"Attractions","nav.food":"Food & Services","nav.events":"What’s On","nav.map":"Map","nav.gallery":"Gallery","nav.planner":"Planner",
    "hero.title":"Discover Södermalm","hero.text":"Historic alleys, creative neighborhoods and Stockholm’s best views.","hero.cta":"Book a tour",
    "about.title":"About Södermalm","about.text":"Södermalm—“Söder”—is Stockholm’s most vibrant district: cobblestone lanes, indie design shops, parks like Tantolunden and views from Monteliusvägen.",
    "about.point1":"Shopping & coffee in SoFo around Nytorget","about.point2":"Views from Monteliusvägen & Fjällgatan","about.point3":"Swimming & picnics along Årstaviken",
    "about.facts":"Quick facts","about.cityLbl":"City","about.bestLbl":"Best season","about.bestVal":"May–September","about.vibeLbl":"Vibe","about.vibeVal":"Creative & urban",
    "tours.title":"Guided Tours",
    "tours.t1.title":"Historic Söder – Evening Walk","tours.t1.meta":"2 hours · Swedish/English","tours.t1.desc":"Katarina Church, Mosebacke and Monteliusvägen—stories and photo spots.",
    "tours.t2.title":"SoFo Food Crawl","tours.t2.meta":"2.5 hours · Tastes included","tours.t2.desc":"Cafés and street food around Nytorget & Skånegatan.",
    "tours.t3.title":"Panoramas & Parks","tours.t3.meta":"1.5 hours · Easy pace","tours.t3.desc":"Skinnarviksberget, Tantolunden and Fjällgatan.",
    "sights.title":"Attractions","sights.montelius":"Sunset views over Riddarfjärden and City Hall.","sights.fjallgatan":"Wooden houses and wide vistas over the inlet.","sights.tanto":"Allotment gardens, mini-golf and swimming along Årstaviken.","sights.fotografiska":"World-class photo museum with restaurant & bar.",
    "food.title":"Restaurants & Services","food.cat.all":"All","food.cat.restaurant":"Restaurant","food.cat.cafe":"Café","food.cat.bar":"Bar","food.cat.veg":"Veg/Vegan","food.cat.service":"Service",
    "food.item1":"SoFo favorite for breakfast & outdoor seating.","food.item2":"Rustic Italian by Mariatorget.","food.item3":"Local microbrewery with seasonal beers.","food.item4":"Plant-based Nordic flavors.","food.item5":"Central pharmacy with long hours.",
    "events.title":"What’s on in Södermalm","events.loading":"Fetching current events…",
    "map.title":"Map & Getting Around","map.desc":"See Södermalm on the map, estimate walking times between spots and check nearby metro stations.","map.open":"Open larger map",
    "map.walkHeader":"Estimate walking time","map.from":"From","map.to":"To","map.speed":"Walking speed","map.calc":"Calculate",
    "map.transitHeader":"Nearby public transport","map.transitNote":"Use the SL app for live departures.",
    "gallery.title":"Gallery",
    "planner.title":"Plan your day","planner.choose":"Choose activity","planner.add":"Add","planner.clear":"Clear","planner.download":"Download plan"
  }
};

const langSelect = $('#langSelect');
function updateLanguage(lang='sv'){
  document.querySelectorAll('[data-i18n]').forEach(el=>{
    const key = el.dataset.i18n;
    if(translations[lang] && translations[lang][key]) el.textContent = translations[lang][key];
  });
}
langSelect?.addEventListener('change', e=> updateLanguage(e.target.value));
updateLanguage('sv');

// --- Filter i Mat/Service ---
const searchInput = $('#searchInput');
const categoryFilter = $('#categoryFilter');
function applyFilters(){
  const term = (searchInput?.value || '').toLowerCase().trim();
  const cat = categoryFilter?.value || 'alla';
  $$('.item', $('#listing')).forEach(card=>{
    const name = (card.dataset.name || '').toLowerCase();
    const cats = (card.dataset.cat || '');
    const matchText = !term || name.includes(term);
    const matchCat = (cat==='alla') || cats.split(' ').includes(cat);
    card.style.display = (matchText && matchCat) ? '' : 'none';
  });
}
searchInput?.addEventListener('input', applyFilters);
categoryFilter?.addEventListener('change', applyFilters);

// --- Aktuella event (redigera här för live-innehåll) ---
const eventList = $('#eventList');
const events = [
  {date:"2025-08-30", title:"Jazz i Vitabergsparken", info:"Gratis konsert med lokala & internationella artister."},
  {date:"2025-09-05", title:"SoFo Street Food Market", info:"Nytorget – smaker från hela världen."},
  {date:"2025-09-12", title:"Utställning på Fotografiska", info:"Tema: Stadsliv och identitet."}
];
function renderEvents(){
  eventList.innerHTML = '';
  if(!events.length){
    const li = document.createElement('li');
    li.textContent = (langSelect.value==='en') ? 'No events right now.' : 'Inga evenemang just nu.';
    eventList.appendChild(li); return;
  }
  events.forEach(e=>{
    const li = document.createElement('li');
    li.innerHTML = `<strong>${e.date}</strong> – ${e.title}<br><span class="muted">${e.info}</span>`;
    eventList.appendChild(li);
  });
}
renderEvents();

// --- Gångtidsberäkning mellan POI ---
const pois = {
  montelius: {name:'Monteliusvägen', lat:59.3212, lon:18.0557},
  fjallgatan: {name:'Fjällgatan', lat:59.3193, lon:18.0947},
  tantolunden: {name:'Tantolunden', lat:59.3125, lon:18.0390},
  fotografiska: {name:'Fotografiska', lat:59.3171, lon:18.0846},
  mariatorget: {name:'Mariatorget', lat:59.3176, lon:18.0623},
  nytorg: {name:'Nytorget', lat:59.3139, lon:18.0810}
};
const fromPoi = $('#fromPoi'), toPoi = $('#toPoi'), walkSpeed = $('#walkSpeed'), calcWalk = $('#calcWalk'), walkResult = $('#walkResult');

function fillPoiSelects(){
  Object.entries(pois).forEach(([key, val])=>{
    const o1 = document.createElement('option'); o1.value = key; o1.textContent = val.name; fromPoi.appendChild(o1);
    const o2 = document.createElement('option'); o2.value = key; o2.textContent = val.name; toPoi.appendChild(o2);
  });
  fromPoi.value = 'montelius';
  toPoi.value = 'fotografiska';
}
fillPoiSelects();

function haversine(lat1, lon1, lat2, lon2){
  const R = 6371; // km
  const dLat = (lat2-lat1) * Math.PI/180;
  const dLon = (lon2-lon1) * Math.PI/180;
  const a = Math.sin(dLat/2)**2 + Math.cos(lat1*Math.PI/180)*Math.cos(lat2*Math.PI/180)*Math.sin(dLon/2)**2;
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
  return R * c; // km
}
calcWalk?.addEventListener('click', ()=>{
  const a = pois[fromPoi.value], b = pois[toPoi.value];
  if(!a || !b) return;
  const distKm = haversine(a.lat, a.lon, b.lat, b.lon);
  const speed = parseFloat(walkSpeed.value); // km/h
  const minutes = Math.round((distKm / speed) * 60);
  const txt_sv = `Cirka ${minutes} min (${distKm.toFixed(2)} km) till fots mellan ${a.name} och ${b.name}.`;
  const txt_en = `Approx. ${minutes} min (${distKm.toFixed(2)} km) on foot between ${a.name} and ${b.name}.`;
  walkResult.textContent = (langSelect.value==='en') ? txt_en : txt_sv;
});

// --- Planerare ---
const addBtn = $('#addPlan'), clearBtn = $('#clearPlan'), select = $('#plannerSelect'), planList = $('#planList'), downloadLink = $('#downloadPlan');
function updateDownload(){
  const items = $$('#planList li').map(li=> li.firstChild.textContent.trim());
  if(items.length){
    const blob = new Blob([`Plan – Södermalm:\n\n- ${items.join('\n- ')}`], {type:'text/plain'});
    const url = URL.createObjectURL(blob);
    downloadLink.href = url; downloadLink.style.display = 'inline-block';
  } else downloadLink.style.display = 'none';
}
addBtn?.addEventListener('click', ()=>{
  const li = document.createElement('li');
  li.appendChild(document.createTextNode(select.value));
  const del = document.createElement('button');
  del.textContent = 'Ta bort'; del.className = 'btn btn-ghost'; del.style.marginLeft='8px';
  del.addEventListener('click', ()=>{ li.remove(); updateDownload(); });
  li.appendChild(del);
  planList.appendChild(li); updateDownload();
});
clearBtn?.addEventListener('click', ()=>{ planList.innerHTML=''; updateDownload(); });

// Språkbyte ska också uppdatera vissa live-texter
langSelect?.addEventListener('change', ()=>{
  // uppdatera events-lista text vid behov
  if(!eventList.children.length) renderEvents();
  // nollställ gångtidsresultat (byggs varje gång)
  walkResult.textContent = '';
});
