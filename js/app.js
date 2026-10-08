function headerHTML(active) {
  const item = (href, labelKey, key) =>
    `<li><a class="${active === key ? "active" : ""}" href="${href}" data-i18n="${labelKey}">${t(labelKey)}</a></li>`;
  const user = currentUser();
  return `
  <header class="header">
    <div class="container nav" id="nav">
      <a class="brand" href="index.html">
        <div class="logo-mark">उवि</div>
        <div>
          <strong data-i18n="brand">${t("brand")}</strong>
          <span data-i18n="brandSub">${t("brandSub")}</span>
        </div>
      </a>
      <ul class="nav-links">
        ${item("index.html", "navHome", "home")}
        ${item("browse.html", "navSearch", "browse")}
        ${item("stories.html", "navStories", "stories")}
        ${item("membership.html", "navMembership", "membership")}
        ${item("communities.html", "navCastes", "castes")}
        ${item("contact.html", "navContact", "contact")}
      </ul>
      <div class="nav-cta">
        <div class="lang-switch" role="group" aria-label="Language">
          <button type="button" class="lang-btn" data-lang="hi">हिन्दी</button>
          <button type="button" class="lang-btn" data-lang="en">EN</button>
        </div>
        ${user ? `
          <div class="user-menu" id="userMenu">
            <button type="button" class="user-menu-btn" id="userMenuBtn">
              <img src="${user.photo || ""}" alt="">
              <span>${user.name.split(" ")[0]}</span>
              <small>▾</small>
            </button>
            <div class="user-drop">
              <a href="account.html" data-i18n="myProfile">${t("myProfile")}</a>
              <a href="my-matches.html" data-i18n="myMatches">${t("myMatches")}</a>
              <button type="button" id="logoutBtn" data-i18n="logout">${t("logout")}</button>
            </div>
          </div>
        ` : `
           <a class="btn btn-ghost" href="login.html" data-i18n="login">${t("login")}</a>
           <a class="btn btn-primary hide-sm" href="register.html" data-i18n="registerFree">${t("registerFree")}</a>
        `}
        <button class="menu-toggle" id="menuBtn" aria-label="Menu">☰</button>
      </div>
    </div>
  </header>`;
}

function footerHTML() {
  return `
  <footer class="footer">
    <div class="container footer-grid">
      <div>
        <h4 data-i18n="brand">${t("brand")}</h4>
        <p data-i18n="footerAbout">${t("footerAbout")}</p>
      </div>
      <div>
        <h4 data-i18n="lists">${t("lists")}</h4>
        <a href="browse.html?community=brahmin&gender=groom" data-i18n="brahminBoys">${t("brahminBoys")}</a>
        <a href="browse.html?community=brahmin&gender=bride" data-i18n="brahminGirls">${t("brahminGirls")}</a>
        <a href="browse.html?community=rajput&gender=groom" data-i18n="rajputBoys">${t("rajputBoys")}</a>
        <a href="browse.html?community=rajput&gender=bride" data-i18n="rajputGirls">${t("rajputGirls")}</a>
        <a href="browse.html?community=other" data-i18n="otherCommunity">${t("otherCommunity")}</a>
        <a href="communities.html" data-i18n="ukCastes">${t("ukCastes")}</a>
      </div>
      <div>
        <h4 data-i18n="info">${t("info")}</h4>
        <a href="membership.html" data-i18n="membershipRules">${t("membershipRules")}</a>
        <a href="stories.html" data-i18n="successPairs">${t("successPairs")}</a>
        <a href="terms.html" data-i18n="terms">${t("terms")}</a>
        <a href="contact.html" data-i18n="contactUs">${t("contactUs")}</a>
      </div>
      <div>
        <h4 data-i18n="address">${t("address")}</h4>
        <p data-i18n="footerAddress" data-i18n-html>${t("footerAddress")}</p>
      </div>
    </div>
    <div class="container copy" data-i18n="footerCopy">${t("footerCopy")}</div>
  </footer>`;
}

function profileCard(p) {
  return `
  <a class="profile-card" href="profile.html?id=${p.id}">
    <div class="profile-photo" style="${photoStyle(p.photo)}">
      <div>
        <span class="badge gold">${p.id}</span>
        <h3>${p.name}</h3>
      </div>
    </div>
    <div class="profile-body">
      <ul class="card-facts">
        <li><b>${t("manglik")}</b> ${p.manglik}</li>
        <li><b>${t("dob")}</b> ${p.dob}</li>
        <li><b>${t("job")}</b> ${p.job}</li>
        <li><b>${t("salary")}</b> ${p.salary}</li>
      </ul>
    </div>
  </a>`;
}

function storyCard(s, extraClass) {
  const loc = extraClass ? s.place : `${s.place} · ${t("uk")}`;
  const quote = s.quote ? `<p class="story-quote">${s.quote}</p>` : "";
  const photo = s.photo
    ? `<div class="story-photo" style="background-image:url('${s.photo}')"></div>`
    : "";
  return `
    <article class="story-card">
      ${photo}
      ${quote}
      <h3>${s.names}</h3>
      <p class="story-loc">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M12 21s-7-5.4-7-11a7 7 0 1 1 14 0c0 5.6-7 11-7 11z"/><circle cx="12" cy="10" r="2.5"/></svg>
        <span>${loc}</span>
      </p>
    </article>`;
}

function popularRow(p) {
  return `
    <a class="pop-card" href="profile.html?id=${p.id}">
      <img src="${p.photo}" alt="">
      <div>
        <b>${p.name}</b>
        <span>${p.age} ${t("years")} | ${communityLabel(p.community)} | ${p.city}</span>
      </div>
      <span class="pop-heart" aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 20s-7-4.4-7-10a4 4 0 0 1 7-2 4 4 0 0 1 7 2c0 5.6-7 10-7 10z"/></svg>
      </span>
    </a>`;
}

document.addEventListener("DOMContentLoaded", () => {
  const shell = document.getElementById("app-header");
  const foot = document.getElementById("app-footer");
  if (shell) shell.innerHTML = headerHTML(document.body.dataset.page);
  if (foot) foot.innerHTML = footerHTML();
  const nav = document.getElementById("nav");
  const btn = document.getElementById("menuBtn");
  if (btn && nav) btn.addEventListener("click", () => nav.classList.toggle("open"));
  document.querySelectorAll(".lang-btn").forEach((b) => {
    b.addEventListener("click", () => setLang(b.dataset.lang));
  });
  const userMenu = document.getElementById("userMenu");
  const userMenuBtn = document.getElementById("userMenuBtn");
  if (userMenuBtn && userMenu) {
    userMenuBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      userMenu.classList.toggle("open");
    });
    document.addEventListener("click", () => userMenu.classList.remove("open"));
  }
  const logoutBtn = document.getElementById("logoutBtn");
  if (logoutBtn) {
    logoutBtn.addEventListener("click", () => {
      logoutUser();
      location.href = "index.html";
    });
  }
  const logged = !!currentUser();
  document.querySelectorAll(".guest-only").forEach((el) => { el.style.display = logged ? "none" : ""; });
  document.querySelectorAll(".user-only").forEach((el) => { el.style.display = logged ? "" : "none"; });
  applyLang();
});
