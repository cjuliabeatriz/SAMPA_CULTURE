const places = [
  {
    name: "Theatro Municipal de São Paulo",
    cat: "Teatro",
    region: "Centro",
    price: 20,
    priceText: "A partir de R$ 20",
    img: "https://images.unsplash.com/photo-1503095396549-807759245b35?auto=format&fit=crop&w=1200&q=85",
    age: "Livre",
    hidden: false,
    visit: "1h30",
    distance: "2,1 km",
    rating: "Livre",
    hours: "Consulte a programação",
    desc: "Uma experiência cultural autêntica de São Paulo, com programação e identidade local.",
    impact: "Apoie a cultura local",
    tags: ["Teatro", "Centro", "Acessível"],
    lat: -23.5453,
    lng: -46.6388,
    site: "https://theatromunicipal.org.br/"
  },
  {
    name: "MASP – Museu de Arte de São Paulo",
    cat: "Museus",
    region: "Bela Vista",
    price: 60,
    priceText: "Grátis às terças / R$ 60",
    img: "https://images.unsplash.com/photo-1561214115-f2f134cc4912?auto=format&fit=crop&w=1200&q=85",
    age: "Livre",
    hidden: false,
    visit: "2h",
    distance: "3,4 km",
    rating: "Livre",
    hours: "Terça a domingo",
    desc: "Um dos mais importantes museus de arte da América Latina, com exposições e acervo icônico.",
    impact: "Valorize a arte e a memória",
    tags: ["Museu", "Paulista", "Acessível"],
    lat: -23.5614,
    lng: -46.6559,
    site: "https://masp.org.br/"
  },
  {
    name: "Pinacoteca de São Paulo",
    cat: "Museus",
    region: "Centro",
    price: 30,
    priceText: "Grátis aos sábados / R$ 30",
    img: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?auto=format&fit=crop&w=1200&q=85",
    age: "Livre",
    hidden: true,
    visit: "2h",
    distance: "1,8 km",
    rating: "Livre",
    hours: "Quarta a segunda",
    desc: "Arte brasileira em um edifício histórico, com exposições que conectam diferentes épocas.",
    impact: "Descubra novos artistas",
    tags: ["Arte", "Centro", "Gema escondida"],
    lat: -23.5349,
    lng: -46.6339,
    site: "https://pinacoteca.org.br/"
  },
  {
    name: "Blue Note São Paulo",
    cat: "Shows",
    region: "Bela Vista",
    price: 50,
    priceText: "A partir de R$ 50",
    img: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?auto=format&fit=crop&w=1200&q=85",
    age: "18+",
    hidden: false,
    visit: "2h",
    distance: "3,2 km",
    rating: "Livre",
    hours: "Conforme programação",
    desc: "Casa de música com shows intimistas e noites dedicadas ao jazz e à música brasileira.",
    impact: "Fortaleça a cena musical",
    tags: ["Música", "Shows", "Paulista"],
    lat: -23.5631,
    lng: -46.6544,
    site: "https://bluenotesp.com/"
  },
  {
    name: "Beco do Batman",
    cat: "Passeios",
    region: "Vila Madalena",
    price: 0,
    priceText: "Grátis",
    img: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?auto=format&fit=crop&w=1200&q=85",
    age: "Livre",
    hidden: true,
    visit: "1h",
    distance: "5,5 km",
    rating: "Livre",
    hours: "Acesso livre",
    desc: "Galeria de arte urbana a céu aberto, com murais coloridos e intervenções de artistas.",
    impact: "A arte ocupa a cidade",
    tags: ["Arte urbana", "Vila Madalena", "Gratuito"],
    lat: -23.5552,
    lng: -46.6915,
    site: "https://www.google.com/maps/search/?api=1&query=Beco+do+Batman+SP"
  },
  {
    name: "Japan House São Paulo",
    cat: "Museus",
    region: "Bela Vista",
    price: 0,
    priceText: "Grátis",
    img: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1200&q=85",
    age: "Livre",
    hidden: true,
    visit: "1h",
    distance: "3,6 km",
    rating: "Livre",
    hours: "Terça a domingo",
    desc: "Espaço cultural que apresenta design, arquitetura, gastronomia e cultura japonesa contemporânea.",
    impact: "Conexões culturais",
    tags: ["Cultura", "Paulista", "Gratuito"],
    lat: -23.5692,
    lng: -46.65,
    site: "https://www.japanhousesp.com.br/"
  },
  {
    name: "Mercado Municipal de São Paulo",
    cat: "Gastronomia",
    region: "Centro",
    price: 0,
    priceText: "Entrada grátis",
    img: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=85",
    age: "Livre",
    hidden: false,
    visit: "1h30",
    distance: "1,2 km",
    rating: "Livre",
    hours: "Segunda a sábado",
    desc: "Um clássico paulistano para conhecer sabores, ingredientes e a arquitetura do Mercadão.",
    impact: "Prestigie comerciantes locais",
    tags: ["Gastronomia", "Centro", "Gratuito"],
    lat: -23.5417,
    lng: -46.6292,
    site: "https://www.mercadomunicipal.com.br/"
  },
  {
    name: "Cine Joia",
    cat: "Cinema",
    region: "Liberdade",
    price: 40,
    priceText: "A partir de R$ 40",
    img: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=1200&q=85",
    age: "Consultar",
    hidden: false,
    visit: "2h",
    distance: "1,5 km",
    rating: "Livre",
    hours: "Conforme programação",
    desc: "Espaço cultural na Liberdade com programação musical, festas e eventos especiais.",
    impact: "Apoie espaços independentes",
    tags: ["Cinema", "Liberdade", "Cultura"],
    lat: -23.5574,
    lng: -46.6358,
    site: "https://www.google.com/maps/search/?api=1&query=Cine+Joia+SP"
  },
  {
    name: "Museu Afro Brasil Emanoel Araujo",
    cat: "Museus",
    region: "Ibirapuera",
    price: 15,
    priceText: "A partir de R$ 15",
    img: "https://images.unsplash.com/photo-1577083552431-6e5fd01aa342?auto=format&fit=crop&w=1200&q=85",
    age: "Livre",
    hidden: false,
    visit: "2h",
    distance: "6 km",
    rating: "Livre",
    hours: "Terça a domingo",
    desc: "Museu dedicado à pesquisa, preservação e celebração da memória e das expressões afro-brasileiras.",
    impact: "Conheça histórias fundamentais",
    tags: ["Museu", "Ibirapuera", "História"],
    lat: -23.5875,
    lng: -46.6595,
    site: "https://museuafrobrasil.org.br/"
  }
];

const $ = (id) => document.getElementById(id);

let category = "Todos";
let quick = "";
let mapMode = false;
let selected = null;
let map = null;
let routeMap = null;

let favs = new Set(JSON.parse(localStorage.getItem("sampacult-favs") || "[]"));

const cats = [
  "Todos",
  "Teatro",
  "Cinema",
  "Shows",
  "Museus",
  "Gastronomia",
  "Passeios",
  "Exposições",
  "Música"
];

function renderCats() {
  const showAll = $("moreCats").dataset.open === "1";
  const visibleCats = showAll ? cats.length : 6;

  $("categories").innerHTML = cats
    .slice(0, visibleCats)
    .map(
      (c) =>
        `<button class="cat ${category === c ? "active" : ""}" data-cat="${c}">
          ${({
            Todos: "◎",
            Teatro: "♧",
            Cinema: "▣",
            Shows: "♫",
            Museus: "♜",
            Gastronomia: "♨",
            Passeios: "⌖",
            Exposições: "▧",
            Música: "♫"
          })[c]} &nbsp;${c}${category === c ? "　✓" : ""}
        </button>`
    )
    .join("");

  document.querySelectorAll(".cat").forEach((b) => {
    b.onclick = () => {
      category = b.dataset.cat;
      render();
    };
  });
}

function filtered() {
  const q = $("search").value.toLowerCase();
  const reg = $("region").value;
  const max = +$("price").value;

  return places.filter(
    (p) =>
      (category === "Todos" || p.cat === category) &&
      (!q || (p.name + " " + p.cat + " " + p.region).toLowerCase().includes(q)) &&
      (!reg || p.region.includes(reg)) &&
      p.price <= max &&
      (!$("hiddenOnly").checked || p.hidden) &&
      (!$("favoritesOnly").checked || favs.has(p.name)) &&
      (quick !== "free" || p.price === 0) &&
      (quick !== "hidden" || p.hidden)
  );
}

function render() {
  renderCats();

  const priceValue = +$("price").value;
  $("priceLabel").textContent = priceValue === 300 ? "R$ 300+" : `R$ ${priceValue}`;

  const list = filtered();
  $("count").textContent = list.length + " lugares";

  if (mapMode) {
    $("cards").innerHTML = '<div id="mainMap" class="map-view"></div>';
    setTimeout(() => initMap("mainMap", list), 50);
    return;
  }

  if (list.length) {
    $("cards").innerHTML = list
      .map(
        (p) =>
          `<article class="card" data-place="${p.name}">
            <div class="photo" style="background-image:url('${p.img}')">
              <span class="tag">${p.hidden ? "Gema escondida" : p.cat}</span>
              <button class="heart ${favs.has(p.name) ? "saved" : ""}" data-heart="${p.name}" aria-label="Favoritar">
                ${favs.has(p.name) ? "♥" : "♡"}
              </button>
            </div>
            <div class="card-body">
              <div class="card-title">
                <h3>${p.name}</h3>
                <span class="price">${p.priceText}</span>
              </div>
              <p class="meta">${p.cat} · ${p.region} · ${p.distance}</p>
              <div class="card-foot">
                <span>◷ &nbsp;${p.hours}</span>
                <span>Ver detalhes ↗</span>
              </div>
            </div>
          </article>`
      )
      .join("");
  } else {
    $("cards").innerHTML =
      '<div class="empty">Nenhum lugar encontrado. Tente mudar os filtros ✨</div>';
  }

  document.querySelectorAll(".card").forEach((c) => {
    c.onclick = () => openDetails(c.dataset.place);
  });

  document.querySelectorAll("[data-heart]").forEach((b) => {
    b.onclick = (e) => {
      e.stopPropagation();
      toggleFav(b.dataset.heart);
    };
  });
}

function toggleFav(name) {
  if (favs.has(name)) {
    favs.delete(name);
  } else {
    favs.add(name);
  }
  localStorage.setItem("sampacult-favs", JSON.stringify([...favs]));
  render();
}

function openDetails(name) {
  selected = places.find((p) => p.name === name);
  const p = selected;

  $("detailContent").innerHTML = `
    <div class="detail-image" style="background-image:url('${p.img}')"></div>
    <div class="detail-body">
      <div class="detail-top">
        <div>
          <span class="detail-cat">${p.cat.toUpperCase()}</span>
          <h2>${p.name}</h2>
          <p class="detail-location">⌖ &nbsp;${p.region}, São Paulo</p>
        </div>
        <span class="detail-price">${p.priceText}</span>
      </div>
      <div class="stats">
        <div>
          <b>◷</b>
          <span>${p.visit}<br>Visita média</span>
        </div>
        <div>
          <b>➤</b>
          <span>${p.distance}<br>Distância</span>
        </div>
        <div>
          <b>★</b>
          <span>${p.rating}<br>Classificação</span>
        </div>
        <div>
          <b>✓</b>
          <span>${p.hours}<br>Funcionamento</span>
        </div>
      </div>
      <p class="detail-desc">${p.desc}</p>
      <div class="impact">
        <b>♥ &nbsp;Impacto local</b>${p.impact}
      </div>
      <div class="tags">
        ${p.tags.map((t) => `<span>${t}</span>`).join("")}
      </div>
      <div class="detail-actions">
        <button class="primary" id="detailRoute">➤ Como chegar</button>
        <button class="secondary" id="officialSite">↗ &nbsp;Site oficial</button>
        <button class="save-btn ${favs.has(p.name) ? "saved" : ""}" id="detailSave">
          ${favs.has(p.name) ? "♥ Salvo" : "♧ Salvar"}
        </button>
      </div>
    </div>
  `;

  $("detailModal").classList.add("show");

  $("detailRoute").onclick = () => {
    closeModal("detailModal");
    openRoute(p);
  };

  $("detailSave").onclick = () => {
    toggleFav(p.name);
    $("detailSave").classList.toggle("saved", favs.has(p.name));
    $("detailSave").textContent = favs.has(p.name) ? "♥ Salvo" : "♧ Salvar";
  };

  $("officialSite").onclick = () => {
    window.open(p.site, "_blank", "noopener");
  };
}

function closeModal(id) {
  $(id).classList.remove("show");
}

function initMap(id, list) {
  if (!window.google || !window.google.maps) return;

  const target = $(id);
  if (!target) return;

  const m = new google.maps.Map(target, {
    center: { lat: -23.5558, lng: -46.6396 },
    zoom: 12
  });

  const bounds = new google.maps.LatLngBounds();

  list.forEach((p) => {
    const position = { lat: p.lat, lng: p.lng };
    const marker = new google.maps.Marker({
      position,
      map: m,
      title: p.name
    });

    const infowindow = new google.maps.InfoWindow({
      content: `<b>${p.name}</b><br>${p.priceText}`
    });

    marker.addListener("click", () => {
      infowindow.open(m, marker);
    });

    bounds.extend(position);
  });

  if (list.length) {
    m.fitBounds(bounds);
    google.maps.event.addListenerOnce(m, "bounds_changed", () => {
      m.setZoom(m.getZoom() - 1);
    });
  }

  return m;
}

window.showPlace = openDetails;

function openRoute(p) {
  selected = p;
  $("routeTitle").textContent = p.name;
  $("routeTo").textContent = "Destino — " + p.name;
  $("routeFrom").textContent = "Origem — Sua localização ou ponto de partida";
  $("routeModal").classList.add("show");

  setTimeout(() => {
    if (routeMap) {
      routeMap = null;
    }

    routeMap = new google.maps.Map(document.getElementById("routeMap"), {
      center: { lat: p.lat, lng: p.lng },
      zoom: 13
    });

    new google.maps.Marker({
      position: { lat: p.lat, lng: p.lng },
      map: routeMap,
      title: p.name
    });

    new google.maps.Circle({
      center: { lat: p.lat, lng: p.lng },
      radius: 650,
      fillColor: "#dcae37",
      fillOpacity: 0.08,
      strokeColor: "#dcae37",
      map: routeMap
    });

    google.maps.event.addListenerOnce(routeMap, "idle", () => {
      google.maps.event.trigger(routeMap, "resize");
    });
  }, 120);

  updateRoute();
}

function updateRoute() {
  const mode = $("transport").value;
  const opts = {
    walk: ["🚶 A pé", "2,1 km · 28 min"],
    bus: ["🚌 Ônibus", "2,1 km · 35 min"],
    car: ["🚗 Carro", "2,1 km · 12 min"],
    moto: ["🏍️ Moto", "2,1 km · 14 min"],
    bike: ["🚲 Bicicleta, skate e outros meios", "2,1 km · 11 min"]
  };

  const r = opts[mode];
  $("routeResult").innerHTML = `${r[0]}<small>${r[1]} · estimativa ilustrativa</small>`;
}

$("transport").onchange = updateRoute;

$("openMaps").onclick = () => {
  if (!selected) return;

  const mode = $("transport").value;
  let travel = mode === "walk" ? "walking" : mode === "bike" ? "bicycling" : "driving";

  window.open(
    `https://www.google.com/maps/dir/?api=1&destination=${selected.lat},${selected.lng}&travelmode=${travel}`,
    "_blank",
    "noopener"
  );
};

function openGeneric(type) {
  $("genericModal").classList.add("show");

  if (type === "ai") {
    $("genericContent").innerHTML = `
      <div class="eyebrow">SAMPA CULT • ROTEIRO PERSONALIZADO</div>
      <h2>Seu próximo rolê começa aqui.</h2>
      <p>Conte o que você quer fazer e vamos sugerir lugares para conhecer.</p>
      <select id="mood">
        <option>Arte e cultura</option>
        <option>Comida boa</option>
        <option>Música e shows</option>
        <option>Passeios ao ar livre</option>
      </select>
      <select id="budget">
        <option>Gratuito</option>
        <option>Até R$ 50</option>
        <option>Até R$ 100</option>
        <option>Sem limite definido</option>
      </select>
      <input id="when" placeholder="Quando? Ex.: sábado à tarde">
      <button class="primary" id="makePlan">Criar meu roteiro ✨</button>
    `;

    $("makePlan").onclick = () => {
      const mood = $("mood").value;
      const budget = $("budget").value;

      closeModal("genericModal");

      category =
        mood === "Música e shows"
          ? "Shows"
          : mood === "Arte e cultura"
            ? "Museus"
            : mood === "Comida boa"
              ? "Gastronomia"
              : "Passeios";

      $("price").value =
        budget === "Gratuito"
          ? 0
          : budget === "Até R$ 50"
            ? 50
            : budget === "Até R$ 100"
              ? 100
              : 300;

      render();
    };
  } else {
    $("genericContent").innerHTML = `
      <div class="eyebrow">SAMPA CULT</div>
      <h2>Entre na sua conta</h2>
      <p>Salve seus lugares favoritos neste dispositivo.</p>
      <input placeholder="Seu e-mail" type="email">
      <input placeholder="Sua senha" type="password">
      <button class="primary" id="login">Entrar</button>
    `;

    $("login").onclick = () =>
      alert(
        "Esta é uma demonstração: o cadastro/login ainda não está conectado a um servidor."
      );
  }
}

$("aiOpen").onclick = () => openGeneric("ai");
$("userOpen").onclick = () => openGeneric("user");
$("themeToggle").onclick = () => document.body.classList.toggle("dark");

document.querySelectorAll("[data-close]").forEach((b) => {
  b.onclick = () => closeModal(b.dataset.close);
});

document.querySelectorAll(".modal-backdrop").forEach((b) => {
  b.onclick = (e) => {
    if (e.target === b) closeModal(b.id);
  };
});

$("search").oninput = render;
$("region").onchange = render;
$("price").oninput = render;
$("hiddenOnly").onchange = render;
$("favoritesOnly").onchange = render;

$("clear").onclick = () => {
  $("search").value = "";
  $("region").value = "";
  $("price").value = 300;
  $("hiddenOnly").checked = false;
  $("favoritesOnly").checked = false;
  category = "Todos";
  quick = "";
  render();
};

$("moreCats").onclick = () => {
  const isOpen = $("moreCats").dataset.open === "1";
  $("moreCats").dataset.open = isOpen ? "0" : "1";
  $("moreCats").textContent = isOpen ? "＋ Ver Mais" : "− Ver menos";
  renderCats();
};

document.querySelectorAll("[data-quick]").forEach((b) => {
  b.onclick = () => {
    quick = quick === b.dataset.quick ? "" : b.dataset.quick;
    render();
  };
});

$("gridBtn").onclick = () => {
  mapMode = false;
  $("gridBtn").classList.add("active");
  $("mapBtn").classList.remove("active");
  render();
};

$("mapBtn").onclick = () => {
  mapMode = true;
  $("mapBtn").classList.add("active");
  $("gridBtn").classList.remove("active");
  render();
};

render();
