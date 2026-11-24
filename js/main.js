/* XƏMSƏ — main script */
(() => {
  const $ = (s, c = document) => c.querySelector(s);
  const $$ = (s, c = document) => [...c.querySelectorAll(s)];
  let lang = localStorage.getItem("xemse-lang") || "az";
  const t = (key) => (I18N[key] && I18N[key][lang]) || key;
  const L = (obj) => (obj && (obj[lang] || obj.az)) || "";

  /* ---------------- PRELOADER ---------------- */
  window.addEventListener("load", () => {
    setTimeout(() => {
      $("#preloader").classList.add("done");
      document.body.classList.remove("is-loading");
      splitTitle();
      startSeeds();
    }, 1700);
  });

  function splitTitle() {
    const el = $("#heroTitle");
    const txt = el.textContent;
    el.innerHTML = [...txt].map((c, i) => `<span class="ch" style="animation-delay:${i * 0.09}s">${c}</span>`).join("");
  }

  /* ---------------- I18N ---------------- */
  function applyLang() {
    document.documentElement.lang = lang;
    $$("[data-i18n]").forEach((el) => { el.textContent = t(el.dataset.i18n); });
    $$("#lang button").forEach((b) => b.classList.toggle("active", b.dataset.lang === lang));
    renderAll();
  }
  $$("#lang button").forEach((b) => b.addEventListener("click", () => {
    lang = b.dataset.lang;
    localStorage.setItem("xemse-lang", lang);
    document.body.animate([{ opacity: 0.4 }, { opacity: 1 }], { duration: 500, easing: "ease-out" });
    applyLang();
  }));

  /* ---------------- RENDER ---------------- */
  const money = (n) => `${n.toLocaleString("en-US").replace(/,/g, " ")} ${SITE.currency}`;

  function renderAll() {
    renderShowcase();
    renderRooms();
    renderMenu();
    renderTeam();
    renderTickets();
    renderInvest();
    renderReviews();
    renderFaq();
    renderContacts();
    fillRoomSelect();
    calcBooking();
    observeReveal();
  }

  // ---- showcase (5 buildings)
  let scIndex = 0, scTimer = null;
  function renderShowcase() {
    $("#showcaseList").innerHTML = BUILDINGS.map((b, i) => `
      <li class="sc-item ${i === scIndex ? "active" : ""}" data-i="${i}" style="--c:${b.color}">
        <span class="sc-item__num">0${i + 1}</span>
        <h4>${L(b.name)}</h4>
        <p>${L(b.tag)}</p>
        <span class="sc-item__bar"><i></i></span>
      </li>`).join("");
    $("#showcaseStage").innerHTML = BUILDINGS.map((b, i) => `
      <div class="slide ${i === scIndex ? "active" : ""}">
        <div class="slide__img"><img src="${b.img}" alt="${L(b.name)}" /></div>
        <div class="slide__body">
          <div class="slide__tag">${L(b.tag)}</div>
          <h3>${L(b.name)}</h3>
          <p>${L(b.short)}</p>
          <div class="slide__cap">👥 ${L(b.capacity)}</div>
          <button class="btn btn--outline btn--sm" data-open="${i}">${t("btn.more")}</button>
        </div>
      </div>`).join("");
    $$(".sc-item").forEach((el) => el.addEventListener("click", () => goSlide(+el.dataset.i)));
    $$("[data-open]").forEach((el) => el.addEventListener("click", () => openBuilding(+el.dataset.open)));
    restartTimer();
  }
  function goSlide(i) {
    scIndex = (i + BUILDINGS.length) % BUILDINGS.length;
    $$(".sc-item").forEach((el, k) => el.classList.toggle("active", k === scIndex));
    $$(".slide").forEach((el, k) => el.classList.toggle("active", k === scIndex));
    // restart progress bar animation
    const bar = $(".sc-item.active .sc-item__bar i");
    if (bar) { bar.style.animation = "none"; bar.offsetWidth; bar.style.animation = ""; }
    // on phones the tab list scrolls horizontally: keep the active tab visible
    const list = $("#showcaseList"), act = $(".sc-item.active");
    if (act && list.scrollWidth > list.clientWidth) list.scrollTo({ left: act.offsetLeft - 16, behavior: "smooth" });
    restartTimer();
  }

  /* swipe helper for touch screens */
  function onSwipe(el, cb) {
    let x0 = null, y0 = null;
    el.addEventListener("touchstart", (e) => { x0 = e.touches[0].clientX; y0 = e.touches[0].clientY; }, { passive: true });
    el.addEventListener("touchend", (e) => {
      if (x0 === null) return;
      const dx = e.changedTouches[0].clientX - x0, dy = e.changedTouches[0].clientY - y0;
      if (Math.abs(dx) > 45 && Math.abs(dx) > Math.abs(dy) * 1.3) cb(dx < 0 ? 1 : -1);
      x0 = null;
    }, { passive: true });
  }
  onSwipe($("#showcaseStage"), (d) => goSlide(scIndex + d));
  function restartTimer() {
    clearInterval(scTimer);
    scTimer = setInterval(() => { if (!$("#showcase").classList.contains("paused")) goSlide(scIndex + 1); }, 7000);
  }
  $("#showcase").addEventListener("mouseenter", () => $("#showcase").classList.add("paused"));
  $("#showcase").addEventListener("mouseleave", () => $("#showcase").classList.remove("paused"));

  function openBuilding(i) {
    const b = BUILDINGS[i];
    $("#bModalBody").innerHTML = `
      <div class="bmodal__img"><img src="${b.img}" alt="" /></div>
      <div class="bmodal__body" style="--c:${b.color}">
        <p class="kicker">0${i + 1} / 05</p>
        <h3>${L(b.name)}</h3>
        <div class="slide__cap">👥 ${L(b.capacity)}</div>
        <p>${L(b.long)}</p>
        <ul class="bmodal__feat">${L(b.features).map((f) => `<li>${f}</li>`).join("")}</ul>
        ${b.id === "hotel" ? `<button class="btn btn--gold btn--sm js-book" style="margin-top:28px">${t("btn.book")}</button>` : ""}
      </div>`;
    const bk = $("#bModalBody .js-book");
    if (bk) bk.addEventListener("click", () => { closeModal($("#bModal")); openBooking(); });
    openModal($("#bModal"));
  }

  // ---- rooms
  function renderRooms() {
    $("#roomList").innerHTML = `<div class="room-note reveal">⚖️ ${t("rooms.single")}</div>` + ROOMS.map((r) => `
      <article class="room reveal">
        ${r.img ? `<div class="room__img"><img src="${r.img}" alt="" loading="lazy" /></div>` : ""}
        <div>
          <h3>${L(r.name)}</h3>
          <div class="room__meta"><span>${r.size} m²</span><span>·</span><span>${r.guests} ${t("rooms.guests")}</span></div>
          <p class="room__desc">${L(r.desc)}</p>
          <div class="room__amen">${r.amen.map((a) => `<span>${AMENITIES[a].icon} ${L(AMENITIES[a])}</span>`).join("")}</div>
        </div>
        <div class="room__side">
          <div class="price">${r.price.low}–${money(r.price.high)}<small>${t("rooms.night")}</small>
            <span class="price__season">${money(r.price.low)} · ${t("rooms.low")}<br>${money(r.price.high)} · ${t("rooms.high")}</span></div>
          <button class="btn btn--outline btn--sm" data-room="${r.id}">${t("btn.choose")}</button>
        </div>
      </article>`).join("");
    $$("[data-room]").forEach((b) => b.addEventListener("click", () => openBooking(b.dataset.room)));
    $$(".room").forEach((el) => el.addEventListener("mousemove", (e) => {
      const r = el.getBoundingClientRect();
      el.style.setProperty("--mx", `${e.clientX - r.left}px`);
      el.style.setProperty("--my", `${e.clientY - r.top}px`);
    }));
  }

  // ---- menu
  function renderMenu() {
    $("#menuList").innerHTML = MENU.map((m) => `
      <li class="reveal"><div class="menu__row"><b>${L(m.name)}</b><i></i><em>${money(m.price)}</em></div><small>${L(m.desc)}</small></li>`).join("");
  }

  // ---- team
  function renderTeam() {
    $("#teamGrid").innerHTML = TEAM.map((m, i) => {
      const b = BUILDINGS.find((x) => x.id === m.building) || BUILDINGS[i];
      return `
      <div class="member reveal" style="--c:${b.color};transition-delay:${i * 80}ms">
        <div class="member__ava"><img src="img/team/${b.id}.jpg" alt="${L(b.name)}" loading="lazy" /></div>
        <div class="member__num">0${i + 1}</div>
        <h4>${m.name}</h4>
        <p>${t("team.author")}</p>
        <span class="member__b">${L(b.name)}</span>
      </div>`;
    }).join("");
  }

  // ---- tickets + Khamsa Pass
  function renderTickets() {
    $("#passPrice").innerHTML = `${KHAMSA_PASS.from}–${money(KHAMSA_PASS.to)}`;
    $("#tkList").innerHTML = TICKETS.map((x, i) => {
      const b = BUILDINGS.find((y) => y.id === x.building);
      return `
      <li class="tk reveal" style="--c:${b.color};transition-delay:${i * 80}ms">
        <img src="img/team/${b.id}.jpg" alt="" loading="lazy" />
        <div class="tk__txt"><b>${L(b.name)}</b><span>${L(x.label)}</span></div>
        <em>${x.from}–${money(x.to)}</em>
      </li>`;
    }).join("");
  }

  // ---- investment figures (animated counters)
  function renderInvest() {
    $("#invGrid").innerHTML = INVEST.map((x, i) => `
      <div class="inv reveal" style="transition-delay:${(i % 3) * 80}ms">
        <b><span data-num="${x.value}" data-dec="${x.decimals || 0}">0</span>${L(x.suffix)}${x.unit ? ` <small>${x.unit}</small>` : ""}</b>
        <p>${L(x.label)}</p>
      </div>`).join("");
    $$("#invGrid [data-num]").forEach((el) => numIO.observe(el));
  }

  // ---- reviews slider
  let rvIndex = 0, rvTimer;
  function renderReviews() {
    $("#sliderTrack").innerHTML = REVIEWS.map((r) => `
      <div class="review">
        <div class="review__stars">${"★".repeat(r.stars)}${"☆".repeat(5 - r.stars)}</div>
        <blockquote>${L(r.text)}</blockquote>
        <cite>${r.name} <span>· ${L(r.from)}</span></cite>
      </div>`).join("");
    $("#sliderDots").innerHTML = REVIEWS.map((_, i) => `<button data-i="${i}" aria-label="${i + 1}"></button>`).join("");
    $$("#sliderDots button").forEach((b) => b.addEventListener("click", () => goReview(+b.dataset.i)));
    goReview(rvIndex);
  }
  function goReview(i) {
    rvIndex = (i + REVIEWS.length) % REVIEWS.length;
    $("#sliderTrack").style.transform = `translateX(-${rvIndex * 100}%)`;
    $$("#sliderDots button").forEach((b, k) => b.classList.toggle("active", k === rvIndex));
    clearInterval(rvTimer);
    rvTimer = setInterval(() => goReview(rvIndex + 1), 6500);
  }
  $("#prevRev").addEventListener("click", () => goReview(rvIndex - 1));
  $("#nextRev").addEventListener("click", () => goReview(rvIndex + 1));
  onSwipe($("#slider"), (d) => goReview(rvIndex + d));

  // ---- faq
  function renderFaq() {
    $("#faqList").innerHTML = FAQ.map((f, i) => `
      <div class="acc reveal ${i === 0 ? "open" : ""}">
        <button class="acc__q">${L(f.q)}<i></i></button>
        <div class="acc__a"><div><p>${L(f.a)}</p></div></div>
      </div>`).join("");
    $$(".acc__q").forEach((q) => q.addEventListener("click", () => {
      const acc = q.parentElement, was = acc.classList.contains("open");
      $$(".acc").forEach((a) => a.classList.remove("open"));
      if (!was) acc.classList.add("open");
    }));
  }

  // ---- contacts
  const ICONS = {
    instagram: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor"/></svg>',
    facebook: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M14 8h3V4h-3c-2.8 0-4 1.8-4 4.3V10H7v4h3v8h4v-8h3l1-4h-4V8.6c0-.4.3-.6 1-.6z"/></svg>',
    tiktok: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M16.5 3c.3 2.2 1.7 3.8 4 4v3.3c-1.5 0-2.9-.4-4-1.1v6.3c0 3.4-2.6 5.5-5.5 5.5S5.5 18.8 5.5 15.6c0-3.4 2.9-5.7 6.3-5.3v3.4c-1.4-.4-2.9.5-2.9 2 0 1.2 1 2.1 2.2 2.1 1.4 0 2.2-.9 2.2-2.4V3h3.2z"/></svg>',
    youtube: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M22 8.2c-.2-1.5-1-2.5-2.5-2.7C17.3 5.2 12 5.2 12 5.2s-5.3 0-7.5.3C3 5.7 2.2 6.7 2 8.2 1.8 9.6 1.8 12 1.8 12s0 2.4.2 3.8c.2 1.5 1 2.5 2.5 2.7 2.2.3 7.5.3 7.5.3s5.3 0 7.5-.3c1.5-.2 2.3-1.2 2.5-2.7.2-1.4.2-3.8.2-3.8s0-2.4-.2-3.8zM10 15V9l5.2 3L10 15z"/></svg>'
  };
  function renderContacts() {
    $("#cAddress").textContent = L(SITE.address);
    $("#cPhone").textContent = SITE.phone;
    $("#cPhone").href = "tel:" + SITE.phone.replace(/\s/g, "");
    $("#cEmail").textContent = SITE.email;
    $("#cEmail").href = "mailto:" + SITE.email;
    $$(".js-wa").forEach((a) => a.href = `https://wa.me/${SITE.whatsapp}`);
    $("#socials").innerHTML = Object.entries(SITE.socials).map(([k, v]) => `<a href="${v}" aria-label="${k}" target="_blank" rel="noopener">${ICONS[k] || k}</a>`).join("");
    const map = $("#map");
    const src = `https://www.google.com/maps?q=${encodeURIComponent(SITE.mapQuery)}&hl=${lang}&z=12&output=embed`;
    if (map.src !== src) map.src = src;
  }

  /* ---------------- HEADER / NAV ---------------- */
  const header = $("#header"), progress = $("#scrollProgress"), toTop = $("#toTop");
  const heroBg = $(".hero__bg");
  // Layout is measured once (and on resize / content change), DOM writes happen once per frame.
  const sections = $$("section[id]"), navLinks = $$(".nav a");
  let secTops = [], docH = 1, ticking = false, lastCur = null;
  function measure() {
    secTops = sections.map((s) => [s.id, s.getBoundingClientRect().top + scrollY]);
    docH = Math.max(1, document.documentElement.scrollHeight - innerHeight);
  }
  function update() {
    ticking = false;
    const y = scrollY;
    header.classList.toggle("scrolled", y > 40);
    progress.style.transform = `scaleX(${Math.min(1, y / docH)})`;
    toTop.classList.toggle("show", y > 800);
    if (y < innerHeight * 1.2) heroBg.style.transform = `translate3d(0,${(y * 0.3).toFixed(1)}px,0)`;
    let cur = "";
    for (const [id, top] of secTops) if (y + 140 >= top) cur = id;
    if (cur !== lastCur) { lastCur = cur; navLinks.forEach((a) => a.classList.toggle("active", a.getAttribute("href") === "#" + cur)); }
  }
  function onScroll() { if (!ticking) { ticking = true; requestAnimationFrame(update); } }
  addEventListener("scroll", onScroll, { passive: true });
  addEventListener("resize", () => { measure(); onScroll(); });
  addEventListener("load", () => { measure(); onScroll(); });
  toTop.addEventListener("click", () => scrollTo({ top: 0, behavior: "smooth" }));

  const burger = $("#burger"), nav = $("#nav");
  $$(".nav a").forEach((a, i) => a.style.setProperty("--i", i));
  burger.addEventListener("click", () => {
    burger.classList.toggle("open"); nav.classList.toggle("open");
    document.body.classList.toggle("modal-open", nav.classList.contains("open"));
  });
  $$(".nav a").forEach((a) => a.addEventListener("click", () => {
    burger.classList.remove("open"); nav.classList.remove("open"); document.body.classList.remove("modal-open");
  }));

  /* ---------------- REVEAL + COUNTERS ---------------- */
  const io = new IntersectionObserver((entries) => entries.forEach((e) => {
    if (e.isIntersecting) {
      const el = e.target; el.classList.add("in"); io.unobserve(el);
      if (el.style.transitionDelay) setTimeout(() => { el.style.transitionDelay = ""; }, 1400);
    }
  }), { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
  function observeReveal() {
    $$(".reveal:not(.in)").forEach((el) => io.observe(el));
    requestAnimationFrame(() => { measure(); onScroll(); });
  }

  const cio = new IntersectionObserver((entries) => entries.forEach((e) => {
    if (!e.isIntersecting) return;
    const el = e.target, end = +el.dataset.count, t0 = performance.now(), dur = 1800;
    const step = (now) => {
      const p = Math.min((now - t0) / dur, 1), v = Math.round(end * (1 - Math.pow(1 - p, 4)));
      el.textContent = v; if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step); cio.unobserve(el);
  }), { threshold: 0.6 });
  $$("[data-count]").forEach((el) => cio.observe(el));

  const numIO = new IntersectionObserver((entries) => entries.forEach((e) => {
    if (!e.isIntersecting) return;
    const el = e.target, end = +el.dataset.num, dec = +el.dataset.dec, t0 = performance.now();
    const fmt = (v) => v.toFixed(dec).replace(".", lang === "en" ? "." : ",");
    const step = (now) => {
      const p = Math.min((now - t0) / 2000, 1);
      el.textContent = fmt(end * (1 - Math.pow(1 - p, 4)));
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step); numIO.unobserve(el);
  }), { threshold: 0.5 });

  /* ---------------- HERO SLIDESHOW (5 buildings) ---------------- */
  const heroImgs = $$("#heroBg img");
  let heroI = 0;
  setInterval(() => {
    heroImgs[heroI].classList.remove("active");
    heroI = (heroI + 1) % heroImgs.length;
    heroImgs[heroI].classList.add("active");
  }, 6000);

  /* ---------------- HERO SEEDS (canvas particles) ---------------- */
  function startSeeds() {
    const cv = $("#seeds"); if (!cv) return;
    const ctx = cv.getContext("2d");
    let W, H, seeds = [];
    const colors = ["#c0283a", "#e2475a", "#d9a441", "#f3d48a"];
    const resize = () => { W = cv.width = cv.offsetWidth * devicePixelRatio; H = cv.height = cv.offsetHeight * devicePixelRatio; };
    resize(); addEventListener("resize", resize);
    const mk = () => ({
      x: Math.random() * W, y: H + Math.random() * H * 0.5,
      r: (Math.random() * 2.6 + 1) * devicePixelRatio, vy: (Math.random() * 0.5 + 0.2) * devicePixelRatio,
      vx: (Math.random() - 0.5) * 0.3, a: Math.random() * Math.PI * 2, c: colors[(Math.random() * colors.length) | 0],
      o: Math.random() * 0.5 + 0.3
    });
    for (let i = 0; i < 70; i++) { const s = mk(); s.y = Math.random() * H; seeds.push(s); }
    (function loop() {
      ctx.clearRect(0, 0, W, H);
      seeds.forEach((s) => {
        s.y -= s.vy; s.a += 0.01; s.x += s.vx + Math.sin(s.a) * 0.3;
        if (s.y < -20) Object.assign(s, mk());
        ctx.save(); ctx.translate(s.x, s.y); ctx.rotate(s.a);
        ctx.globalAlpha = s.o * Math.min(1, s.y / (H * 0.4));
        ctx.fillStyle = s.c; ctx.shadowBlur = 12; ctx.shadowColor = s.c;
        ctx.beginPath(); ctx.ellipse(0, 0, s.r, s.r * 1.45, 0, 0, Math.PI * 2); ctx.fill();
        ctx.restore();
      });
      requestAnimationFrame(loop);
    })();
  }

  /* ---------------- MODALS ---------------- */
  function openModal(m) { m.classList.add("open"); m.setAttribute("aria-hidden", "false"); document.body.classList.add("modal-open"); }
  function closeModal(m) { m.classList.remove("open"); m.setAttribute("aria-hidden", "true"); document.body.classList.remove("modal-open"); }
  $$(".modal").forEach((m) => m.addEventListener("click", (e) => { if (e.target.closest("[data-close]")) closeModal(m); }));
  addEventListener("keydown", (e) => {
    if (e.key === "Escape") { $$(".modal.open").forEach(closeModal); closeLb(); }
    if ($("#lightbox").classList.contains("open")) {
      if (e.key === "ArrowRight") lbGo(1);
      if (e.key === "ArrowLeft") lbGo(-1);
    }
  });

  /* ---------------- BOOKING ---------------- */
  const iso = (d) => new Date(d.getTime() - d.getTimezoneOffset() * 60000).toISOString().slice(0, 10);
  const today = new Date(), tomorrow = new Date(Date.now() + 864e5), after = new Date(Date.now() + 3 * 864e5);
  ["#qIn", "#bIn"].forEach((s) => { $(s).min = iso(today); $(s).value = iso(tomorrow); });
  ["#qOut", "#bOut"].forEach((s) => { $(s).min = iso(tomorrow); $(s).value = iso(after); });

  function fillRoomSelect() {
    const sel = $("#bRoom"), cur = sel.value;
    sel.innerHTML = ROOMS.map((r) => `<option value="${r.id}">${L(r.name)} — ${r.price.low}–${money(r.price.high)} ${t("rooms.night")}</option>`).join("");
    if (cur) sel.value = cur;
  }
  function nights() {
    const a = new Date($("#bIn").value), b = new Date($("#bOut").value);
    return Math.round((b - a) / 864e5);
  }
  function calcBooking() {
    const room = ROOMS.find((r) => r.id === $("#bRoom").value) || ROOMS[0];
    const n = Math.max(0, nights() || 0);
    let total = 0;
    const d = new Date($("#bIn").value);
    for (let k = 0; k < n; k++) {
      const m = new Date(d.getTime() + k * 864e5).getMonth() + 1;
      total += HIGH_SEASON_MONTHS.includes(m) ? room.price.high : room.price.low;
    }
    total += $("#bTransfer").checked ? 40 : 0;
    $("#sNights").textContent = n;
    $("#sTotal").textContent = money(total);
  }
  ["#bRoom", "#bIn", "#bOut", "#bTransfer", "#bAdults", "#bKids"].forEach((s) => $(s).addEventListener("input", () => {
    if (s === "#bIn") { $("#bOut").min = $("#bIn").value; }
    calcBooking();
  }));

  function openBooking(roomId, opts = {}) {
    $("#bkForm").hidden = false; $("#bkOk").hidden = true; $("#bErr").textContent = "";
    if (roomId) $("#bRoom").value = roomId;
    if (opts.in) $("#bIn").value = opts.in;
    if (opts.out) $("#bOut").value = opts.out;
    if (opts.guests) $("#bAdults").value = opts.guests;
    calcBooking();
    openModal($("#bookModal"));
  }
  document.addEventListener("click", (e) => {
    const b = e.target.closest(".js-book");
    if (b && !b.closest("#bModalBody")) openBooking();
  });
  $("#quickForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const g = +$("#qGuests").value;
    const room = ROOMS.find((r) => r.guests >= g) || ROOMS[0];
    openBooking(room.id, { in: $("#qIn").value, out: $("#qOut").value, guests: g });
  });

  $("#bookForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const err = $("#bErr");
    $$("#bookForm .f").forEach((f) => f.classList.remove("invalid"));
    const req = ["#bIn", "#bOut", "#bName", "#bPhone"].filter((s) => !$(s).value.trim());
    if (req.length) { req.forEach((s) => $(s).closest(".f").classList.add("invalid")); err.textContent = t("bk.err.req"); shake(); return; }
    if (nights() <= 0) { $("#bOut").closest(".f").classList.add("invalid"); err.textContent = t("bk.err.dates"); shake(); return; }
    const room = ROOMS.find((r) => r.id === $("#bRoom").value);
    if (+$("#bAdults").value + +$("#bKids").value > room.guests + 1) { err.textContent = t("bk.err.guests"); shake(); return; }

    const num = "XM-" + Math.random().toString(36).slice(2, 7).toUpperCase();
    const booking = {
      num, room: room.id, checkIn: $("#bIn").value, checkOut: $("#bOut").value,
      adults: +$("#bAdults").value, kids: +$("#bKids").value, name: $("#bName").value.trim(),
      phone: $("#bPhone").value.trim(), email: $("#bEmail").value.trim(), comment: $("#bComment").value.trim(),
      transfer: $("#bTransfer").checked, total: $("#sTotal").textContent, created: new Date().toISOString()
    };
    // demo mode: the booking is saved in the browser (localStorage)
    const all = JSON.parse(localStorage.getItem("xemse-bookings") || "[]");
    all.push(booking); localStorage.setItem("xemse-bookings", JSON.stringify(all));
    console.log("XƏMSƏ booking:", booking);

    $("#okNum").textContent = num;
    $("#bkForm").hidden = true; $("#bkOk").hidden = false;
    // re-trigger check animation
    $$("#bkOk .ok__icon *").forEach((el) => { el.style.animation = "none"; el.getBBox && el.getBBox(); el.style.animation = ""; });
    $("#bookForm").reset();
    ["#bIn"].forEach((s) => $(s).value = iso(tomorrow)); $("#bOut").value = iso(after);
    calcBooking();
  });
  function shake() {
    $("#bookModal .modal__box").animate(
      [{ transform: "translateX(0)" }, { transform: "translateX(-10px)" }, { transform: "translateX(10px)" }, { transform: "translateX(-6px)" }, { transform: "translateX(0)" }],
      { duration: 400 });
  }

  /* ---------------- LIGHTBOX ---------------- */
  const lb = $("#lightbox"), lbImg = $("#lbImg");
  const items = $$("#masonry .m-item");
  let lbI = 0;
  items.forEach((a, i) => a.addEventListener("click", (e) => { e.preventDefault(); lbI = i; lbShow(); lb.classList.add("open"); }));
  function lbShow() { lbImg.src = items[lbI].getAttribute("href"); }
  function lbGo(d) { lbI = (lbI + d + items.length) % items.length; lbShow(); }
  function closeLb() { lb.classList.remove("open"); }
  $(".lightbox__close").addEventListener("click", closeLb);
  $(".lightbox__prev").addEventListener("click", () => lbGo(-1));
  $(".lightbox__next").addEventListener("click", () => lbGo(1));
  lb.addEventListener("click", (e) => { if (e.target === lb) closeLb(); });
  onSwipe(lb, (d) => lbGo(d));

  /* ---------------- INIT ---------------- */
  $("#year").textContent = new Date().getFullYear();
  applyLang();
  onScroll();
})();
