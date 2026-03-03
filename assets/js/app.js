/* assets/js/app.js - FULL VERSION (WOW + Reveal + Panel JSON fallback-safe) */

const $ = (q) => document.querySelector(q);
const $$ = (q) => Array.from(document.querySelectorAll(q));

/* =========================
   I18N (ES/FR/EN)
========================= */
const I18N = {
  es: {
    "topbar.ship": "España · Atención rápida",
    "nav.home": "Inicio",
    "nav.armarios": "Armarios",
    "nav.sedari": "Sedari",
    "nav.salon": "Salón",
    "cta.call": "Llamar",
    "cta.whatsapp": "WhatsApp",
    "cta.viewCatalog": "Ver productos",

    "hero.badge": "Calidad · Diseño · Precio",
    "hero.title": "Muebles & descanso para tu hogar",
    "hero.subtitle": "Armarios, sedari, canapés, colchones y sofás. Pide por WhatsApp en 1 minuto.",
    "hero.cta1": "Ver Armarios",
    "hero.cta2": "Pedir por WhatsApp",
    "hero.productline": "Entrega rápida · Varios colores · Medidas disponibles",

    "trust.t1": "Asesoramiento rápido",
    "trust.d1": "Te ayudamos con medidas y color",
    "trust.t2": "Acabados premium",
    "trust.d2": "Look moderno y elegante",
    "trust.t3": "Precios claros",
    "trust.d3": "Pide presupuesto por WhatsApp",

    "home.featured": "Destacados",
    "home.featuredHint": "Actualizado desde el panel",
    "home.categories": "Categorías",
    "home.categoriesSub": "Armarios, sedari y salón — estilo moderno con toque “future”.",
    "home.armariosDesc": "2, 3, 4 puertas · colores & medidas",
    "home.sedariDesc": "Confort + tejido premium · varios tonos",
    "home.salonDesc": "Sofás, chaise longue, mesas",

    "home.why": "¿Por qué Sueño Hogar?",
    "home.whySub": "Servicio rápido, estilo moderno, y asesoramiento en medidas.",
    "home.why1t": "Entrega & montaje",
    "home.why1d": "Pregunta disponibilidad por WhatsApp.",
    "home.why2t": "Colores y medidas",
    "home.why2d": "Te guiamos según tu espacio.",
    "home.why3t": "Look premium",
    "home.why3d": "Diseño limpio y elegante, “future luxury”.",

    "home.ctaTitle": "¿Listo para pedir?",
    "home.ctaDesc": "Envíanos foto/medidas y te respondemos rápido.",

    "filter.search": "Buscar...",
    "filter.allColors": "Todos los colores"
  },

  fr: {
    "topbar.ship": "Espagne · Réponse rapide",
    "nav.home": "Accueil",
    "nav.armarios": "Armoires",
    "nav.sedari": "Sedari",
    "nav.salon": "Salon",
    "cta.call": "Appeler",
    "cta.whatsapp": "WhatsApp",
    "cta.viewCatalog": "Voir produits",

    "hero.badge": "Qualité · Design · Prix",
    "hero.title": "Meubles & confort pour votre maison",
    "hero.subtitle": "Armoires, sedari, coffres-lits, matelas et canapés. Commande WhatsApp en 1 minute.",
    "hero.cta1": "Voir Armoires",
    "hero.cta2": "Commander WhatsApp",
    "hero.productline": "Livraison rapide · Couleurs · Tailles disponibles",

    "trust.t1": "Conseil rapide",
    "trust.d1": "On vous aide avec tailles & couleur",
    "trust.t2": "Finition premium",
    "trust.d2": "Look moderne & élégant",
    "trust.t3": "Prix clairs",
    "trust.d3": "Devis via WhatsApp",

    "home.featured": "Sélection",
    "home.featuredHint": "Mis à jour via admin",
    "home.categories": "Catégories",
    "home.categoriesSub": "Armoires, sedari et salon — style moderne “future”.",
    "home.armariosDesc": "2, 3, 4 portes · couleurs & tailles",
    "home.sedariDesc": "Confort + tissu premium",
    "home.salonDesc": "Canapés, chaise longue, tables",

    "home.why": "Pourquoi Sueño Hogar ?",
    "home.whySub": "Service rapide, style moderne, conseil en dimensions.",
    "home.why1t": "Livraison & montage",
    "home.why1d": "Demandez disponibilité sur WhatsApp.",
    "home.why2t": "Couleurs & dimensions",
    "home.why2d": "On vous guide selon votre espace.",
    "home.why3t": "Look premium",
    "home.why3d": "Design propre, “future luxury”.",

    "home.ctaTitle": "Prêt à commander ?",
    "home.ctaDesc": "Envoyez photo/dimensions et on répond vite.",

    "filter.search": "Rechercher...",
    "filter.allColors": "Toutes les couleurs"
  },

  en: {
    "topbar.ship": "Spain · Fast support",
    "nav.home": "Home",
    "nav.armarios": "Wardrobes",
    "nav.sedari": "Sedari",
    "nav.salon": "Living room",
    "cta.call": "Call",
    "cta.whatsapp": "WhatsApp",
    "cta.viewCatalog": "View products",

    "hero.badge": "Quality · Design · Price",
    "hero.title": "Furniture & comfort for your home",
    "hero.subtitle": "Wardrobes, sedari, ottoman beds, mattresses & sofas. Order on WhatsApp in 1 minute.",
    "hero.cta1": "View Wardrobes",
    "hero.cta2": "Order on WhatsApp",
    "hero.productline": "Fast delivery · Colors · Sizes available",

    "trust.t1": "Fast advice",
    "trust.d1": "We help with sizes & colors",
    "trust.t2": "Premium finish",
    "trust.d2": "Modern & elegant look",
    "trust.t3": "Clear pricing",
    "trust.d3": "Ask on WhatsApp",

    "home.featured": "Featured",
    "home.featuredHint": "Updated from admin",
    "home.categories": "Categories",
    "home.categoriesSub": "Wardrobes, sedari and living room — modern “future” style.",
    "home.armariosDesc": "2, 3, 4 doors · colors & sizes",
    "home.sedariDesc": "Comfort + premium fabric",
    "home.salonDesc": "Sofas, chaise longue, tables",

    "home.why": "Why Sueño Hogar?",
    "home.whySub": "Fast service, modern style, size guidance.",
    "home.why1t": "Delivery & setup",
    "home.why1d": "Ask availability on WhatsApp.",
    "home.why2t": "Colors & sizes",
    "home.why2d": "We guide you for your space.",
    "home.why3t": "Premium look",
    "home.why3d": "Clean design, “future luxury”.",

    "home.ctaTitle": "Ready to order?",
    "home.ctaDesc": "Send photo/sizes and we reply fast.",

    "filter.search": "Search...",
    "filter.allColors": "All colors"
  }
};

/* =========================
   Language helpers
========================= */
function getLang() {
  return localStorage.getItem("lang") || "es";
}
function setLang(lang) {
  localStorage.setItem("lang", lang);
  applyI18n();
  highlightLang();
  // re-render dynamic sections if needed
  renderDynamicIfNeeded().catch(console.error);
}
function applyI18n() {
  const lang = getLang();
  $$("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    const val = I18N[lang]?.[key];
    if (val) el.textContent = val;
  });
  // placeholders
  const search = $("#search");
  if (search) search.placeholder = I18N[lang]["filter.search"] || "Buscar...";
}
function highlightLang() {
  const lang = getLang();
  $$(".lang__btn").forEach((b) => b.classList.toggle("active", b.dataset.lang === lang));
}

/* =========================
   Fetch helpers (safe)
========================= */
async function loadJSON(path) {
  const res = await fetch(path, { cache: "no-store" });
  if (!res.ok) throw new Error(`${path} -> HTTP ${res.status}`);
  return await res.json();
}

/* =========================
   WA link
========================= */
function waLink(phone, message) {
  const clean = (phone || "").replace(/\s/g, "").replace("+", "");
  const txt = encodeURIComponent(message || "Hola! Quiero información.");
  return `https://wa.me/${clean}?text=${txt}`;
}

/* =========================
   Scroll reveal (WOW)
========================= */
function setupReveal() {
  // add reveal to children inside .stagger and set delay
  $$(".stagger").forEach((group) => {
    Array.from(group.children).forEach((child, i) => {
      child.style.setProperty("--d", `${i * 90}ms`);
      if (!child.classList.contains("reveal")) child.classList.add("reveal");
    });
  });

  const items = $$(".reveal");
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("is-in");
          io.unobserve(e.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  items.forEach((el) => io.observe(el));
}

/* =========================
   Hero parallax (subtle)
========================= */
function setupParallax() {
  const bg = $("#heroBg");
  if (!bg) return;
  window.addEventListener(
    "scroll",
    () => {
      const y = window.scrollY || 0;
      bg.style.transform = `scale(1.06) translateY(${y * 0.08}px)`;
    },
    { passive: true }
  );
}

/* =========================
   Floating dock (WA + TikTok)
========================= */
function setupDock(site) {
  const toggle = $("#dockToggle");
  const wa = $("#waFloat");
  const tt = $("#ttFloat");
  if (!toggle || !wa || !tt) return;

  wa.href = waLink(site.phone, "Hola! Quiero información y precios.");
  tt.href = site.tiktok;

  let open = true; // start open (wow)
  const apply = () => {
    wa.classList.toggle("open", open);
    tt.classList.toggle("open", open);
  };
  apply();

  toggle.addEventListener("click", () => {
    open = !open;
    apply();
  });
}

/* =========================
   Site globals
========================= */
function setGlobals(site) {
  const callHref = `tel:${site.phone}`;
  const wa = waLink(site.phone, "Hola! Quiero información y precios.");

  $("#year") && ($("#year").textContent = new Date().getFullYear());

  $("#tiktokLink") && ($("#tiktokLink").href = site.tiktok);
  $("#waTop") && ($("#waTop").href = wa);
  $("#waHero") && ($("#waHero").href = wa);
  $("#waBottom") && ($("#waBottom").href = wa);

  $("#callBtn") && ($("#callBtn").href = callHref);
  $("#footerCall") && ($("#footerCall").href = callHref);

  $("#brandTitle") && ($("#brandTitle").textContent = site.brandTitle || "Sueño Hogar");
  $("#brandSub") && ($("#brandSub").textContent = site.brandSub || "by Paco Deconforty");
  $("#footerBrand") &&
    ($("#footerBrand").textContent = `${site.brandTitle || "Sueño Hogar"} ${site.brandSub || ""}`.trim());

  if ($("#logoImg") && site.logo) $("#logoImg").src = site.logo;
}

/* =========================
   Hero slideshow
========================= */
function normalizeAssetPath(p){
  if(!p) return "";
  // إذا رابط كامل http/https خليه
  if(/^https?:\/\//i.test(p)) return p;
  // إذا بدا بـ / راه OK
  if(p.startsWith("/")) return p;
  // إلا جا من CMS بحال uploads/xxx.jpg نخليه root
  return "/" + p;
}

function setHero(site){
  const hero = document.getElementById("heroBg");
  if(!hero) return;

  const imgs = (site.heroImages || [])
    .map(x => typeof x === "string" ? x : x.image)
    .filter(Boolean)
    .map(normalizeAssetPath);

  if(!imgs.length) return;

  let i = 0;
  const apply = () => {
    hero.style.backgroundImage = `url('${imgs[i % imgs.length]}')`;
    i++;
  };

  apply();
  if(imgs.length > 1) setInterval(apply, 4800);

  // ✅ نفس صور الهيرو نخليهم يعبّيو Tiles ديال Categories
  document.querySelectorAll(".tileHero").forEach(el=>{
    const n = parseInt(el.getAttribute("data-hero") || "1", 10) - 1;
    const url = imgs[(n + imgs.length) % imgs.length];
    if(url) el.style.backgroundImage = `url('${url}')`;
  });
}

/* =========================
   Featured rendering (Home)
========================= */
function cardTemplateFeatured(p, lang, site) {
  const name = p.name?.[lang] || p.name?.es || "Producto";
  const desc = p.desc?.[lang] || p.desc?.es || "";
  const price = p.price || "";
  const img = p.image || "";
  const msg = `${name}\n\nPrecio: ${price}\n\nQuiero pedir este producto.`;
  const wa = waLink(site.phone, msg);

  return `
    <article class="proof reveal">
      <div style="font-weight:1000; margin-bottom:6px">${name}</div>
      <div class="muted" style="font-size:13px; margin-bottom:10px">${desc}</div>
      <div style="display:flex; gap:10px; flex-wrap:wrap">
        <a class="btn btn--wa" target="_blank" rel="noopener" href="${wa}">WhatsApp</a>
        ${img ? `<a class="btn btn--ghost" target="_blank" rel="noopener" href="${img}">Foto</a>` : ""}
      </div>
    </article>
  `;
}

function renderFeatured(products, site) {
  const lang = getLang();
  const grid = $("#featuredGrid");
  if (!grid) return;

  const ids = site.featuredIds || [];
  const featured = ids
    .map((id) => products.find((p) => p.id === id))
    .filter(Boolean)
    .slice(0, 4);

  // fallback if no ids
  const list = featured.length ? featured : products.slice(0, 4);

  grid.innerHTML = list.map((p) => cardTemplateFeatured(p, lang, site)).join("");
}

/* =========================
   Products grid for pages (armarios/sedari/salon)
   - Works if those pages have:
     #productGrid, #search, #colorFilter
     and set window.PAGE_CATEGORY = "armarios" etc
========================= */
function populateColors(products) {
  const select = $("#colorFilter");
  if (!select) return;

  const colors = new Set();
  products.forEach((p) => (p.colors || []).forEach((c) => colors.add(c)));

  const lang = getLang();
  const first = `<option value="">${I18N[lang]["filter.allColors"] || "All colors"}</option>`;
  const opts = Array.from(colors)
    .sort()
    .map((c) => `<option value="${c}">${c}</option>`)
    .join("");

  select.innerHTML = first + opts;
}

function cardTemplateProduct(p, lang, site) {
  const name = p.name?.[lang] || p.name?.es || "Producto";
  const desc = p.desc?.[lang] || p.desc?.es || "";
  const price = p.price || "Consultar";
  const img = p.image || "";
  const colors = (p.colors || []).join(", ");
  const sizes = (p.sizes || []).join(" · ");

  const msg = `${name}\n\nPrecio: ${price}\nColores: ${colors}\nMedidas/Tallas: ${sizes}\n\nQuiero pedir este producto.`;
  const wa = waLink(site.phone, msg);

  return `
  <article class="productCard reveal">
    <div class="productCard__img" style="background-image:url('${img}')"></div>
    <div class="productCard__body">
      <div class="productCard__top">
        <div class="productCard__name">${name}</div>
        <div class="productCard__price">${price}</div>
      </div>
      <div class="productCard__desc">${desc}</div>

      <div class="tags">
        ${(p.colors && p.colors.length) ? `<span class="tag">🎨 ${colors}</span>` : ""}
        ${(p.sizes && p.sizes.length) ? `<span class="tag">📏 ${sizes}</span>` : ""}
      </div>

      <div class="productCard__actions">
        <a class="btn btn--wa" target="_blank" rel="noopener" href="${wa}">WhatsApp</a>
        <a class="btn btn--ghost" target="_blank" rel="noopener" href="${site.tiktok}">TikTok</a>
      </div>
    </div>
  </article>`;
}

function renderGrid(pageProducts, site) {
  const grid = $("#productGrid");
  if (!grid) return;

  const lang = getLang();
  const q = ($("#search")?.value || "").trim().toLowerCase();
  const color = $("#colorFilter")?.value || "";

  const filtered = pageProducts.filter((p) => {
    const name = (p.name?.[lang] || p.name?.es || "").toLowerCase();
    const desc = (p.desc?.[lang] || p.desc?.es || "").toLowerCase();
    const okSearch = !q || name.includes(q) || desc.includes(q);
    const okColor = !color || (p.colors || []).includes(color);
    return okSearch && okColor;
  });

  grid.innerHTML = filtered.map((p) => cardTemplateProduct(p, lang, site)).join("");

  // new elements need reveal observer
  setupReveal();
}

/* =========================
   Caches
========================= */
let SITE_CACHE = null;
let PRODUCTS_CACHE = null;

/* =========================
   Render dynamic sections (safe)
========================= */
async function renderDynamicIfNeeded() {
  // site.json (safe)
  if (!SITE_CACHE) {
    try {
      SITE_CACHE = await loadJSON("assets/data/site.json");
    } catch (e) {
      console.error("site.json missing / error:", e);
      SITE_CACHE = {
        brandTitle: "Sueño Hogar",
        brandSub: "by Paco Deconforty",
        phone: "+34513926076",
        tiktok: "https://www.tiktok.com/@fernandi356?_r=1&_t=ZS-94Fhb0f4Ghx",
        logo: "assets/img/logo.png",
        heroImages: ["assets/img/hero/hero-1.jpg"],
        featuredIds: []
      };
    }
  }

  // products.json (safe)
  if (!PRODUCTS_CACHE) {
    try {
      const raw = await loadJSON("assets/data/products.json");
      PRODUCTS_CACHE = raw.items || raw;
      if (!Array.isArray(PRODUCTS_CACHE)) PRODUCTS_CACHE = [];
    } catch (e) {
      console.error("products.json missing / error:", e);
      PRODUCTS_CACHE = [];
    }
  }

  const site = SITE_CACHE;
  const products = PRODUCTS_CACHE;

  setGlobals(site);
  setHero(site);
  renderFeatured(products, site);

  // If on category pages
  if (window.PAGE_CATEGORY) {
    const pageProducts = products.filter((p) => p.category === window.PAGE_CATEGORY);
    populateColors(pageProducts);
    renderGrid(pageProducts, site);

    $("#search")?.addEventListener("input", () => renderGrid(pageProducts, site));
    $("#colorFilter")?.addEventListener("change", () => renderGrid(pageProducts, site));
  }

  setupDock(site);
}

/* =========================
   Init
========================= */
(function init() {
  // IMPORTANT: only hide reveals when JS running (needs .js in CSS)
  document.documentElement.classList.add("js");

  applyI18n();
  highlightLang();

  $$(".lang__btn").forEach((b) => b.addEventListener("click", () => setLang(b.dataset.lang)));

  // Reveal / parallax should always run
  setupReveal();
  setupParallax();

  // Dynamic data (safe)
  renderDynamicIfNeeded().catch(console.error);
})();
