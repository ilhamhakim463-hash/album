/* ===== RESET & BASE ===== */
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
html { scroll-behavior: smooth; }
body {
  font-family: 'Nunito', 'Segoe UI', sans-serif;
  background: #d4efff;
  min-height: 100vh;
  color: #1a3a50;
  overflow-x: hidden;
}

/* ===== CSS VARIABLES ===== */
:root {
  --sky: #87CEEB;
  --sky-mid: #5bb8e8;
  --sky-deep: #2196b0;
  --sky-dark: #0d6e8a;
  --sky-night: #083d54;
  --sky-pale: #e8f7ff;
  --sky-light: #c8ecff;
  --accent-pink: #FF6B9D;
  --accent-yellow: #FFD166;
  --accent-green: #06D6A0;
  --accent-purple: #a855f7;
  --white: #ffffff;
  --card: rgba(255,255,255,0.94);
  --shadow: 0 10px 40px rgba(13,110,138,0.15);
  --shadow-hover: 0 20px 60px rgba(13,110,138,0.25);
  --radius: 22px;
  --radius-sm: 14px;
  --radius-xs: 8px;
  --transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
}

/* ===== SKY BACKGROUND ===== */
.sky-bg {
  position: fixed; inset: 0; z-index: 0;
  background: linear-gradient(180deg, #a8deff 0%, #c8ecff 45%, #dff4ff 70%, #f0faff 100%);
  overflow: hidden;
}
.sun {
  position: absolute; top: 40px; right: 80px;
  width: 80px; height: 80px;
  background: radial-gradient(circle, #fff7aa, #FFD166);
  border-radius: 50%;
  box-shadow: 0 0 0 16px rgba(255,209,102,0.2), 0 0 0 32px rgba(255,209,102,0.1);
  animation: sunPulse 4s ease-in-out infinite;
}
@keyframes sunPulse {
  0%,100% { box-shadow: 0 0 0 16px rgba(255,209,102,0.2), 0 0 0 32px rgba(255,209,102,0.1); }
  50% { box-shadow: 0 0 0 22px rgba(255,209,102,0.25), 0 0 0 44px rgba(255,209,102,0.12); }
}
.cloud {
  position: absolute;
  background: rgba(255,255,255,0.82);
  border-radius: 60px;
  animation: cloudFloat linear infinite;
}
.cloud::before, .cloud::after {
  content: ''; position: absolute;
  background: rgba(255,255,255,0.82);
  border-radius: 50%;
}
.c1 { width:160px;height:50px;top:12%;left:-200px;animation-duration:40s; }
.c1::before { width:72px;height:72px;top:-36px;left:18px; }
.c1::after { width:56px;height:56px;top:-28px;left:68px; }
.c2 { width:120px;height:38px;top:28%;left:-160px;animation-duration:55s;animation-delay:-20s;opacity:0.7; }
.c2::before { width:55px;height:55px;top:-28px;left:12px; }
.c2::after { width:44px;height:44px;top:-22px;left:52px; }
.c3 { width:200px;height:60px;top:55%;left:-250px;animation-duration:48s;animation-delay:-10s;opacity:0.5; }
.c3::before { width:90px;height:90px;top:-44px;left:24px; }
.c3::after { width:70px;height:70px;top:-34px;left:88px; }
.c4 { width:100px;height:32px;top:72%;left:-130px;animation-duration:62s;animation-delay:-32s;opacity:0.45; }
.c4::before { width:46px;height:46px;top:-24px;left:10px; }
.c4::after { width:36px;height:36px;top:-18px;left:44px; }
@keyframes cloudFloat { from { transform:translateX(0); } to { transform:translateX(calc(100vw + 280px)); } }

.stars { position:absolute;inset:0;pointer-events:none; }

/* ===== HEADER ===== */
header {
  position: sticky; top: 0; z-index: 100;
  background: linear-gradient(135deg, var(--sky-dark) 0%, var(--sky-night) 100%);
  box-shadow: 0 4px 24px rgba(8,61,84,0.35);
}
.header-inner {
  max-width: 1200px; margin: 0 auto;
  display: flex; align-items: center; justify-content: space-between;
  padding: 0 2rem; height: 68px;
}
.logo {
  display: flex; align-items: center; gap: 10px;
  cursor: pointer; user-select: none;
  text-decoration: none;
}
.logo-icon {
  font-size: 1.8rem;
  animation: logoBounce 2.5s ease-in-out infinite;
  display: inline-block;
}
@keyframes logoBounce {
  0%,100% { transform: rotate(-8deg) scale(1); }
  50% { transform: rotate(8deg) scale(1.1); }
}
.logo-text {
  font-family: 'Pacifico', cursive;
  color: white; font-size: 1.55rem;
  text-shadow: 2px 3px 10px rgba(0,0,0,0.25);
}
nav { display: flex; gap: 8px; align-items: center; }
.nav-btn {
  display: flex; align-items: center; gap: 6px;
  background: rgba(255,255,255,0.12);
  color: white; border: 1.5px solid rgba(255,255,255,0.25);
  padding: 8px 18px; border-radius: 30px;
  font-family: 'Nunito', sans-serif; font-size: 0.88rem; font-weight: 700;
  cursor: pointer; transition: var(--transition);
  white-space: nowrap;
}
.nav-btn:hover { background: rgba(255,255,255,0.25); transform: translateY(-2px); }
.nav-btn.active { background: white; color: var(--sky-dark); box-shadow: 0 4px 12px rgba(0,0,0,0.15); }
.nav-admin-btn { background: var(--accent-pink); border-color: transparent; }
.nav-admin-btn:hover { background: #e85d8c; }
.nav-admin-btn.active { background: white; color: var(--accent-pink); }
.badge {
  background: var(--accent-pink); color: white;
  border-radius: 50%; width: 20px; height: 20px;
  display: inline-flex; align-items: center; justify-content: center;
  font-size: 0.7rem; font-weight: 900; margin-left: 2px;
  transition: transform 0.3s;
}
.badge.pop { animation: badgePop 0.3s ease; }
@keyframes badgePop { 0%,100% { transform: scale(1); } 50% { transform: scale(1.5); } }
.hamburger {
  display: none; background: none; border: none;
  color: white; font-size: 1.5rem; cursor: pointer;
  padding: 6px 10px;
}
.mobile-nav {
  display: none; background: var(--sky-night);
  flex-direction: column; padding: 1rem;
}
.mobile-nav button {
  background: none; color: white; border: none;
  padding: 12px 16px; text-align: left;
  font-family: 'Nunito', sans-serif; font-size: 1rem; font-weight: 700;
  cursor: pointer; border-radius: var(--radius-xs);
  transition: background 0.2s;
}
.mobile-nav button:hover { background: rgba(255,255,255,0.1); }
.mobile-nav.open { display: flex; }

/* ===== MAIN ===== */
main {
  position: relative; z-index: 5;
  max-width: 1200px; margin: 0 auto;
  padding: 0 1.5rem 4rem;
}
.page { display: none; animation: pageIn 0.4s ease; }
.page.active { display: block; }
@keyframes pageIn { from { opacity:0; transform:translateY(18px); } to { opacity:1; transform:translateY(0); } }
.page-inner { max-width: 100%; }

/* ===== HERO ===== */
.hero {
  text-align: center;
  padding: 3.5rem 1rem 2.5rem;
}
.hero-emoji-row { margin-bottom: 1.2rem; }
.float-emoji {
  display: inline-block;
  font-size: 1.8rem; margin: 0 8px;
  animation: floatUp 3s ease-in-out infinite;
  animation-delay: var(--d, 0s);
}
@keyframes floatUp {
  0%,100% { transform: translateY(0) scale(1); }
  50% { transform: translateY(-14px) scale(1.1); }
}
.hero-title {
  font-family: 'Pacifico', cursive;
  font-size: clamp(2rem, 5vw, 3.5rem);
  color: var(--sky-dark);
  text-shadow: 3px 4px 0 rgba(135,206,235,0.6), 0 0 40px rgba(13,110,138,0.1);
  margin-bottom: 0.6rem;
  line-height: 1.2;
}
.hero-subtitle {
  font-size: clamp(0.95rem, 2vw, 1.15rem);
  color: var(--sky-deep); font-weight: 600;
  margin-bottom: 1.5rem;
}
.hero-stats {
  display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap;
}
.stat-pill {
  background: white; border-radius: 30px; padding: 8px 20px;
  font-weight: 700; font-size: 0.88rem; color: var(--sky-dark);
  box-shadow: var(--shadow);
  display: flex; align-items: center; gap: 6px;
  transition: transform 0.2s;
}
.stat-pill:hover { transform: scale(1.05); }

/* ===== TOOLBAR ===== */
.home-body { padding: 0 0 2rem; }
.toolbar {
  display: flex; gap: 12px; margin-bottom: 1.5rem; align-items: center;
  flex-wrap: wrap;
}
.search-wrap {
  flex: 1; min-width: 240px;
  display: flex; align-items: center;
  background: white; border-radius: 40px; padding: 0 16px;
  box-shadow: var(--shadow); gap: 8px;
  border: 2px solid transparent;
  transition: border-color 0.2s;
}
.search-wrap:focus-within { border-color: var(--sky); }
.search-icon { font-size: 1.1rem; }
.search-wrap input {
  flex:1; border:none; outline:none; padding: 12px 0;
  font-family: 'Nunito', sans-serif; font-size: 0.95rem; color: var(--sky-dark);
  background: transparent;
}
.search-wrap input::placeholder { color: #99c4d4; }
.search-clear {
  background: #e0f4ff; color: var(--sky-deep); border: none;
  border-radius: 50%; width: 24px; height: 24px; cursor: pointer;
  font-size: 0.7rem; display: flex; align-items: center; justify-content: center;
  transition: background 0.2s;
}
.search-clear:hover { background: var(--sky-light); }
.sort-wrap select {
  background: white; border: 2px solid var(--sky-light);
  padding: 12px 16px; border-radius: 30px;
  font-family: 'Nunito', sans-serif; font-size: 0.88rem; font-weight: 700;
  color: var(--sky-dark); cursor: pointer; outline: none;
  box-shadow: var(--shadow);
}

/* ===== SECTION HEADER ===== */
.section-hdr {
  font-size: 1.3rem; font-weight: 900; color: var(--sky-dark);
  margin-bottom: 1.2rem; display: flex; align-items: center; gap: 8px;
}
.section-hdr span { font-size: 1.5rem; }
.album-total {
  margin-left: auto; font-size: 0.85rem; font-weight: 700;
  background: var(--sky-light); color: var(--sky-deep);
  padding: 4px 12px; border-radius: 20px;
}

/* ===== ALBUM CARDS ===== */
.albums-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(270px, 1fr));
  gap: 1.4rem;
}
.album-card {
  background: var(--card); border-radius: var(--radius);
  overflow: hidden; box-shadow: var(--shadow);
  cursor: pointer; position: relative;
  border: 2px solid rgba(135,206,235,0.25);
  transition: transform 0.35s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.3s;
  animation: cardIn 0.5s ease both;
}
@keyframes cardIn { from { opacity:0; transform:translateY(24px) scale(0.95); } to { opacity:1; transform:translateY(0) scale(1); } }
.album-card:hover { transform: translateY(-10px) rotate(-0.8deg); box-shadow: var(--shadow-hover); }
.album-cover-wrap { position: relative; overflow: hidden; height: 190px; }
.album-cover-wrap img { width:100%;height:190px;object-fit:cover;transition:transform 0.5s; }
.album-card:hover .album-cover-wrap img { transform: scale(1.08); }
.album-cover-placeholder {
  width:100%;height:190px;
  display:flex;align-items:center;justify-content:center;
  font-size:4.5rem;
  background:linear-gradient(135deg, var(--sky-light), var(--sky));
}
.album-overlay {
  position:absolute;inset:0;
  background:linear-gradient(to top, rgba(13,110,138,0.5) 0%, transparent 60%);
  opacity:0; transition:opacity 0.3s;
  display:flex;align-items:flex-end;justify-content:center;padding-bottom:12px;
}
.album-card:hover .album-overlay { opacity:1; }
.overlay-btn {
  background:white;color:var(--sky-dark);border:none;
  padding:8px 22px;border-radius:30px;font-family:'Nunito',sans-serif;
  font-size:0.85rem;font-weight:800;cursor:pointer;
  transform:translateY(10px);transition:transform 0.3s;
}
.album-card:hover .overlay-btn { transform:translateY(0); }

.album-body { padding: 1rem 1.2rem 1.1rem; }
.album-name { font-weight: 800; font-size: 1.05rem; margin-bottom: 5px; color: #1a3a50; }
.album-desc {
  font-size: 0.82rem; color: #6a8fa3; line-height: 1.5;
  margin-bottom: 10px;
  display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden;
}
.album-footer { display: flex; align-items: center; justify-content: space-between; }
.photo-pill {
  background: var(--sky-pale); color: var(--sky-dark);
  font-size: 0.75rem; font-weight: 800; padding: 4px 12px; border-radius: 20px;
  display:flex;gap:4px;align-items:center;
}
.wl-btn {
  background: none; border: none; cursor: pointer;
  font-size: 1.45rem; padding: 4px 6px; border-radius: 50%;
  transition: transform 0.25s cubic-bezier(0.34,1.56,0.64,1);
  line-height: 1;
}
.wl-btn:hover { transform: scale(1.35); }
.wl-btn.on { animation: heartPop 0.4s ease; }
@keyframes heartPop { 0%,100% { transform:scale(1); } 50% { transform:scale(1.5); } }

.tag-new {
  position:absolute;top:-6px;left:14px;
  background:var(--accent-pink);color:white;
  font-size:0.68rem;font-weight:900;padding:3px 10px;border-radius:20px;
  transform:rotate(-7deg);
  box-shadow:0 3px 10px rgba(255,107,157,0.45);
  animation:tagWiggle 2.5s ease-in-out infinite;
}
@keyframes tagWiggle { 0%,100% { transform:rotate(-7deg); } 50% { transform:rotate(-2deg); } }
.tag-hot {
  position:absolute;top:-6px;right:14px;
  background:var(--accent-yellow);color:#7a5200;
  font-size:0.68rem;font-weight:900;padding:3px 10px;border-radius:20px;
  box-shadow:0 3px 10px rgba(255,209,102,0.4);
}

/* ===== ALBUM DETAIL PAGE ===== */
.back-btn {
  display:inline-flex;align-items:center;gap:8px;
  background:white;color:var(--sky-dark);border:2px solid var(--sky-light);
  padding:10px 22px;border-radius:30px;
  font-family:'Nunito',sans-serif;font-size:0.9rem;font-weight:800;
  cursor:pointer;margin:1.5rem 0 1.2rem;
  transition:transform 0.25s, box-shadow 0.25s;
  box-shadow:var(--shadow);
}
.back-btn:hover { transform:translateX(-4px); box-shadow:var(--shadow-hover); }

.album-hero {
  display:grid;grid-template-columns:auto 1fr;gap:1.5rem;
  background:var(--card);border-radius:var(--radius);
  padding:1.5rem;margin-bottom:2rem;box-shadow:var(--shadow);
  border:2px solid rgba(135,206,235,0.2);
}
.album-hero-cover-img { width:200px;height:140px;border-radius:var(--radius-sm);object-fit:cover; }
.album-hero-cover-ph {
  width:200px;height:140px;border-radius:var(--radius-sm);
  background:linear-gradient(135deg,var(--sky-light),var(--sky));
  display:flex;align-items:center;justify-content:center;font-size:4rem;
}
.ah-title { font-size:1.9rem;font-weight:900;color:var(--sky-dark);margin-bottom:6px; }
.ah-desc { color:#6a8fa3;line-height:1.6;margin-bottom:12px; }
.ah-meta { display:flex;gap:10px;flex-wrap:wrap; }
.ah-tag {
  background:var(--sky-pale);color:var(--sky-dark);
  font-size:0.8rem;font-weight:700;padding:5px 14px;border-radius:20px;
}

.photos-masonry {
  display:grid;
  grid-template-columns:repeat(auto-fill,minmax(210px,1fr));
  gap:1.1rem;
}
.photo-card {
  background:var(--card);border-radius:var(--radius-sm);
  overflow:hidden;box-shadow:var(--shadow);
  cursor:pointer;transition:transform 0.3s,box-shadow 0.3s;
  animation:cardIn 0.4s ease both;
}
.photo-card:hover { transform:scale(1.04);box-shadow:var(--shadow-hover); }
.photo-card img { width:100%;height:170px;object-fit:cover;display:block;transition:transform 0.5s; }
.photo-card:hover img { transform:scale(1.07); }
.photo-ph { width:100%;height:170px;display:flex;align-items:center;justify-content:center;font-size:2.5rem;background:linear-gradient(135deg,var(--sky-light),var(--sky)); }
.photo-caption { padding:0.7rem 0.9rem;font-size:0.82rem;color:#6a8fa3;line-height:1.5; }

/* ===== LIGHTBOX ===== */
.lightbox {
  display:none;position:fixed;inset:0;z-index:1000;
  background:rgba(5,20,35,0.94);
  align-items:center;justify-content:center;padding:2rem;
}
.lightbox.open { display:flex;animation:fadeIn 0.3s ease; }
@keyframes fadeIn { from{opacity:0} to{opacity:1} }
.lb-inner {
  background:white;border-radius:var(--radius);
  max-width:780px;width:100%;overflow:hidden;
  box-shadow:0 40px 100px rgba(0,0,0,0.5);
  animation:lbPop 0.35s cubic-bezier(0.34,1.56,0.64,1);
}
@keyframes lbPop { from{transform:scale(0.75);opacity:0} to{transform:scale(1);opacity:1} }
.lb-img { width:100%;max-height:500px;object-fit:contain;background:#f0faff;display:block; }
.lb-footer { padding:1.2rem 1.5rem;display:flex;align-items:center;justify-content:space-between;gap:1rem; }
#lb-desc { font-size:0.95rem;color:#6a8fa3;flex:1; }
.lb-counter { font-size:0.8rem;font-weight:700;color:var(--sky-deep);background:var(--sky-pale);padding:4px 12px;border-radius:20px;white-space:nowrap; }
.lb-close {
  position:absolute;top:18px;right:18px;
  background:white;border:none;border-radius:50%;
  width:46px;height:46px;font-size:1.2rem;cursor:pointer;
  display:flex;align-items:center;justify-content:center;
  transition:transform 0.25s;box-shadow:0 4px 16px rgba(0,0,0,0.2);
}
.lb-close:hover { transform:rotate(90deg) scale(1.1); }
.lb-nav {
  position:absolute;top:50%;transform:translateY(-50%);
  background:rgba(255,255,255,0.9);border:none;border-radius:50%;
  width:52px;height:52px;font-size:1.6rem;cursor:pointer;
  display:flex;align-items:center;justify-content:center;
  transition:var(--transition);box-shadow:0 4px 16px rgba(0,0,0,0.2);
  color:var(--sky-dark);
}
.lb-nav:hover { background:white;transform:translateY(-50%) scale(1.1); }
.lb-prev { left:18px; }
.lb-next { right:18px; }

/* ===== WISHLIST ===== */
.page-inner { padding: 2rem 0 1rem; }

/* ===== EMPTY STATE ===== */
.empty-state {
  text-align:center;padding:4rem 2rem;color:#6a8fa3;
}
.empty-emoji {
  font-size:4rem;display:block;margin-bottom:1rem;
  animation:emptyWobble 2.5s ease-in-out infinite;
}
@keyframes emptyWobble { 0%,100% { transform:rotate(-8deg)scale(1); } 50% { transform:rotate(8deg)scale(1.05); } }
.wl-emoji { animation:emptyWobble 2.5s ease-in-out infinite, emptyPulse 1.5s ease-in-out infinite; }
@keyframes emptyPulse { 0%,100% { filter:drop-shadow(0 0 0 rgba(255,107,157,0)); } 50% { filter:drop-shadow(0 0 14px rgba(255,107,157,0.6)); } }
.empty-state h3 { font-size:1.2rem;font-weight:800;color:var(--sky-dark);margin-bottom:0.5rem; }
.empty-state p { margin-bottom:1.5rem; }
.btn-pill {
  display:inline-flex;align-items:center;gap:6px;
  background:linear-gradient(135deg,var(--sky-deep),var(--sky-dark));
  color:white;border:none;padding:12px 28px;border-radius:30px;
  font-family:'Nunito',sans-serif;font-size:0.95rem;font-weight:800;
  cursor:pointer;transition:var(--transition);
  box-shadow:0 6px 20px rgba(13,110,138,0.3);
}
.btn-pill:hover { transform:translateY(-3px);box-shadow:0 12px 30px rgba(13,110,138,0.4); }

/* ===== ADMIN GATE ===== */
.login-wrap {
  display:flex;align-items:center;justify-content:center;
  min-height:calc(100vh - 150px);padding:3rem 0;
}
.login-card {
  background:var(--card);border-radius:var(--radius);padding:2.8rem;
  box-shadow:var(--shadow);max-width:440px;width:100%;
  text-align:center;border:2px solid rgba(135,206,235,0.2);
  animation:cardIn 0.5s ease;
}
.login-icon { font-size:3.5rem;margin-bottom:1rem;animation:logoBounce 3s ease-in-out infinite; }
.login-card h2 { font-size:1.6rem;font-weight:900;color:var(--sky-dark);margin-bottom:6px; }
.login-card p { color:#6a8fa3;font-size:0.9rem;margin-bottom:1.5rem; }
.enc-badge {
  display:inline-flex;align-items:center;gap:6px;
  background:#e8f5e9;border:1.5px solid #a5d6a7;border-radius:30px;
  padding:7px 16px;font-size:0.8rem;color:#2e7d32;font-weight:700;
  margin-bottom:1.3rem;
}
.pass-wrap { position:relative; }
.pass-wrap input { padding-right:44px!important; }
.eye-btn {
  position:absolute;right:12px;top:50%;transform:translateY(-50%);
  background:none;border:none;cursor:pointer;font-size:1.1rem;padding:4px;
}
.hint-text { font-size:0.78rem;color:#99c4d4;margin-top:1rem; }
.hint-text code { background:var(--sky-pale);padding:2px 8px;border-radius:6px;font-weight:700; }

/* ===== ADMIN PANEL ===== */
.admin-topbar {
  display:flex;align-items:center;justify-content:space-between;
  padding:1.5rem 0 1rem;
}
.btn-logout {
  background:rgba(255,107,157,0.1);color:var(--accent-pink);
  border:2px solid rgba(255,107,157,0.3);padding:8px 18px;
  border-radius:30px;font-family:'Nunito',sans-serif;font-size:0.88rem;
  font-weight:800;cursor:pointer;transition:all 0.2s;
}
.btn-logout:hover { background:var(--accent-pink);color:white; }
.admin-tabs { display:flex;gap:8px;margin-bottom:1.5rem;flex-wrap:wrap; }
.atab {
  padding:10px 22px;border-radius:30px;
  font-family:'Nunito',sans-serif;font-size:0.88rem;font-weight:800;
  cursor:pointer;transition:all 0.2s;
  border:2px solid var(--sky-light);color:var(--sky-dark);background:white;
  box-shadow:0 2px 8px rgba(13,110,138,0.08);
}
.atab:hover { border-color:var(--sky);background:var(--sky-pale); }
.atab.active { background:var(--sky-dark);color:white;border-color:var(--sky-dark);box-shadow:0 6px 16px rgba(13,110,138,0.3); }
.tab-pane { display:none; }
.tab-pane.active { display:block;animation:pageIn 0.3s ease; }

/* ===== FORMS ===== */
.form-card {
  background:var(--card);border-radius:var(--radius);
  padding:2rem;box-shadow:var(--shadow);margin-bottom:1.5rem;
  border:2px solid rgba(135,206,235,0.2);
}
.form-card-danger { border-color:rgba(192,57,43,0.2); }
.form-title { font-size:1.1rem;font-weight:900;color:var(--sky-dark);margin-bottom:1.3rem; }
.form-row { display:grid;grid-template-columns:1fr auto;gap:1rem;align-items:start; }
.input-grp { margin-bottom:1rem; }
.input-grp label {
  display:block;font-size:0.82rem;font-weight:800;color:var(--sky-dark);
  margin-bottom:6px;text-transform:uppercase;letter-spacing:0.03em;
}
.req { color:var(--accent-pink); }
.input-grp input, .input-grp textarea, .input-grp select {
  width:100%;padding:11px 14px;
  border:2px solid var(--sky-light);border-radius:var(--radius-xs);
  font-family:'Nunito',sans-serif;font-size:0.95rem;color:var(--sky-dark);
  outline:none;transition:border-color 0.2s,box-shadow 0.2s;
  background:white;
}
.input-grp input:focus, .input-grp textarea:focus, .input-grp select:focus {
  border-color:var(--sky);box-shadow:0 0 0 4px rgba(135,206,235,0.18);
}
.input-grp textarea { resize:vertical; }


/* ===== UPLOAD BOX ===== */
.upload-box {
  border: 3px dashed var(--sky);
  border-radius: var(--radius-sm);
  background: var(--sky-pale);
  cursor: pointer;
  transition: all 0.25s;
  overflow: hidden;
  position: relative;
  min-height: 140px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.upload-box:hover,
.upload-box.drag-over {
  border-color: var(--sky-deep);
  background: var(--sky-light);
  transform: scale(1.005);
}
.upload-box.has-file { border-style: solid; border-color: var(--sky-deep); }
.upload-box-inner {
  display: flex; flex-direction: column; align-items: center;
  gap: 6px; padding: 1.8rem 1rem; text-align: center;
  pointer-events: none;
}
.upload-cloud { font-size: 2.8rem; animation: cloudBob 2.5s ease-in-out infinite; }
@keyframes cloudBob { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-8px); } }
.upload-title { font-weight: 800; font-size: 0.95rem; color: var(--sky-dark); }
.upload-sub { font-size: 0.76rem; color: #99c4d4; max-width: 280px; line-height: 1.4; }
.upload-cta {
  margin-top: 6px;
  background: var(--sky-deep); color: white;
  padding: 8px 22px; border-radius: 30px;
  font-size: 0.82rem; font-weight: 800;
  box-shadow: 0 4px 12px rgba(33,150,176,0.3);
  transition: background 0.2s;
}
.upload-box:hover .upload-cta { background: var(--sky-dark); }

/* Cover preview inside upload box */
.upload-preview-wrap {
  width: 100%; height: 220px; position: relative;
}
.upload-preview-wrap img {
  width: 100%; height: 100%; object-fit: cover; display: block;
}
.upload-preview-overlay {
  position: absolute; inset: 0;
  background: rgba(8,61,84,0.5);
  display: flex; align-items: center; justify-content: center; gap: 12px;
  opacity: 0; transition: opacity 0.25s;
}
.upload-box:hover .upload-preview-overlay { opacity: 1; }
.preview-change-btn, .preview-remove-btn {
  padding: 9px 18px; border-radius: 30px; border: 2px solid white;
  font-family: 'Nunito', sans-serif; font-size: 0.82rem; font-weight: 800;
  cursor: pointer; transition: all 0.2s; white-space: nowrap;
}
.preview-change-btn { background: white; color: var(--sky-dark); }
.preview-change-btn:hover { background: var(--sky-pale); }
.preview-remove-btn { background: transparent; color: white; }
.preview-remove-btn:hover { background: rgba(255,255,255,0.15); }

/* Multi upload */
.multi-upload { min-height: 120px; }
.multi-upload .upload-box-inner { padding: 1.4rem 1rem; }
.multi-upload .upload-cloud { font-size: 2.2rem; }

/* ===== PHOTO PREVIEW GRID ===== */
.previews-header {
  display: flex; align-items: center; justify-content: space-between;
  margin: 1rem 0 0.6rem;
  font-size: 0.85rem; font-weight: 800; color: var(--sky-dark);
}
.clear-all-btn {
  background: #fff0f0; color: #c0392b;
  border: 1.5px solid #ffd0d0; border-radius: 20px;
  padding: 5px 14px; font-family: 'Nunito', sans-serif;
  font-size: 0.78rem; font-weight: 700; cursor: pointer;
  transition: background 0.2s;
}
.clear-all-btn:hover { background: #ffe0e0; }
.photo-preview-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(130px, 1fr));
  gap: 10px;
}
.preview-item {
  position: relative; border-radius: var(--radius-xs);
  overflow: hidden; aspect-ratio: 1;
  background: var(--sky-pale); box-shadow: 0 2px 8px rgba(0,0,0,0.08);
  animation: cardIn 0.3s ease both;
}
.preview-item img { width: 100%; height: 100%; object-fit: cover; display: block; }
.preview-item .desc-overlay {
  position: absolute; bottom: 0; left: 0; right: 0;
  background: linear-gradient(to top, rgba(8,61,84,0.9) 0%, transparent 100%);
  padding: 20px 6px 6px;
}
.preview-item .desc-overlay input {
  width: 100%; background: transparent; border: none; outline: none;
  color: white; font-size: 0.72rem; font-family: 'Nunito', sans-serif;
  padding: 2px 0;
}
.preview-item .desc-overlay input::placeholder { color: rgba(255,255,255,0.55); }
.preview-remove {
  position: absolute; top: 5px; right: 5px;
  background: rgba(255,255,255,0.92); border: none; border-radius: 50%;
  width: 24px; height: 24px; font-size: 0.72rem; cursor: pointer;
  display: flex; align-items: center; justify-content: center;
  font-weight: 900; color: #c0392b;
  transition: background 0.2s, transform 0.15s;
  box-shadow: 0 2px 6px rgba(0,0,0,0.15);
}
.preview-remove:hover { background: white; transform: scale(1.1); }
.add-more-wrap { margin-top: 10px; text-align: center; }
.add-more-btn {
  background: var(--sky-pale); color: var(--sky-deep);
  border: 2px dashed var(--sky); border-radius: 30px;
  padding: 10px 22px; font-family: 'Nunito', sans-serif;
  font-size: 0.85rem; font-weight: 800; cursor: pointer;
  transition: all 0.2s; width: 100%;
}
.add-more-btn:hover { background: var(--sky-light); border-color: var(--sky-deep); }

/* Label hint */
.label-hint { font-weight: 400; font-size: 0.75rem; color: #99c4d4; text-transform: none; letter-spacing: 0; }

/* ===== EMOJI PICKER ===== */
.emoji-col { max-width: 110px; flex-shrink: 0; }
.emoji-picker-wrap { position: relative; }
.emoji-picker-wrap > input {
  text-align: center; font-size: 1.5rem !important;
  cursor: pointer; caret-color: transparent;
}
.emoji-picker {
  display: none;
  position: absolute; top: calc(100% + 8px); left: 50%; transform: translateX(-50%);
  background: white; border: 2px solid var(--sky-light);
  border-radius: var(--radius-sm); padding: 10px;
  box-shadow: 0 12px 40px rgba(13,110,138,0.2);
  z-index: 200; width: 240px;
}
.emoji-picker.open { display: block; animation: pageIn 0.2s ease; }
.emoji-grid {
  display: grid; grid-template-columns: repeat(6, 1fr); gap: 4px;
}
.ep-btn {
  background: none; border: none; font-size: 1.3rem; cursor: pointer;
  padding: 5px; border-radius: 8px; transition: background 0.15s;
  line-height: 1;
}
.ep-btn:hover { background: var(--sky-pale); transform: scale(1.2); }



/* ===== ADMIN ALBUM LIST ===== */
.admin-album-row {
  background:white;border-radius:var(--radius-sm);border:2px solid var(--sky-light);
  padding:1rem 1.2rem;margin-bottom:0.8rem;
  display:flex;align-items:center;gap:1rem;
  transition:border-color 0.2s,box-shadow 0.2s;
}
.admin-album-row:hover { border-color:var(--sky);box-shadow:var(--shadow); }
.admin-ath {
  width:64px;height:52px;border-radius:10px;object-fit:cover;
  background:linear-gradient(135deg,var(--sky-light),var(--sky));
  display:flex;align-items:center;justify-content:center;font-size:1.6rem;
  flex-shrink:0;overflow:hidden;
}
.admin-ath img { width:100%;height:100%;object-fit:cover; }
.admin-ath-info { flex:1;min-width:0; }
.admin-ath-name { font-weight:800;color:var(--sky-dark);white-space:nowrap;overflow:hidden;text-overflow:ellipsis; }
.admin-ath-sub { font-size:0.78rem;color:#99c4d4;margin-top:2px; }
.admin-ath-actions { display:flex;gap:8px;flex-shrink:0; }

/* ===== BUTTONS ===== */
.btn-primary {
  display:block;width:100%;
  background:linear-gradient(135deg,var(--sky-deep),var(--sky-dark));
  color:white;border:none;padding:13px 28px;border-radius:30px;
  font-family:'Nunito',sans-serif;font-size:1rem;font-weight:800;
  cursor:pointer;transition:var(--transition);margin-top:0.5rem;
  box-shadow:0 6px 20px rgba(13,110,138,0.3);
  letter-spacing:0.01em;
}
.btn-primary:hover { transform:translateY(-3px);box-shadow:0 12px 30px rgba(13,110,138,0.4); }
.btn-primary:active { transform:scale(0.98); }
.btn-secondary {
  background:white;color:var(--sky-dark);border:2px solid var(--sky-light);
  padding:10px 22px;border-radius:30px;
  font-family:'Nunito',sans-serif;font-size:0.9rem;font-weight:800;
  cursor:pointer;transition:all 0.2s;
}
.btn-secondary:hover { background:var(--sky-pale);border-color:var(--sky); }
.btn-danger {
  background:#fff0f0;color:#c0392b;border:2px solid #ffd0d0;
  padding:10px 22px;border-radius:30px;
  font-family:'Nunito',sans-serif;font-size:0.9rem;font-weight:800;
  cursor:pointer;transition:all 0.2s;
}
.btn-danger:hover { background:#ffe0e0;border-color:#f5a6a6; }
.btn-sm {
  padding:6px 14px!important;font-size:0.78rem!important;
}

/* ===== TOAST ===== */
.toast {
  position:fixed;bottom:28px;left:50%;transform:translateX(-50%) translateY(20px);
  background:linear-gradient(135deg,var(--sky-dark),var(--sky-night));
  color:white;padding:13px 28px;border-radius:40px;
  font-weight:700;font-size:0.92rem;z-index:9999;
  opacity:0;pointer-events:none;
  transition:opacity 0.3s,transform 0.3s;
  box-shadow:0 10px 30px rgba(0,0,0,0.25);
  white-space:nowrap;max-width:90vw;text-align:center;
}
.toast.show { opacity:1;transform:translateX(-50%) translateY(0); }

/* ===== MODAL ===== */
.modal-overlay {
  position:fixed;inset:0;z-index:2000;
  background:rgba(5,20,35,0.7);
  display:flex;align-items:center;justify-content:center;
  padding:2rem;
  animation:fadeIn 0.25s ease;
}
.modal-box {
  background:white;border-radius:var(--radius);padding:2.5rem;
  max-width:400px;width:100%;text-align:center;
  box-shadow:0 30px 80px rgba(0,0,0,0.3);
  animation:lbPop 0.3s cubic-bezier(0.34,1.56,0.64,1);
}
.modal-icon { font-size:3rem;margin-bottom:1rem; }
.modal-box h3 { font-size:1.3rem;font-weight:900;color:var(--sky-dark);margin-bottom:0.5rem; }
.modal-box p { color:#6a8fa3;margin-bottom:1.5rem; }
.modal-btns { display:flex;gap:12px;justify-content:center; }

/* ===== FLOATING HEARTS ===== */
.heart-float {
  position:fixed;pointer-events:none;z-index:999;
  font-size:1.6rem;animation:heartUp 1.3s ease forwards;
}
@keyframes heartUp {
  0% { opacity:1;transform:translateY(0) scale(1) rotate(0deg); }
  100% { opacity:0;transform:translateY(-90px) scale(1.5) rotate(15deg); }
}

/* ===== SAFE AREA (iPhone notch / Dynamic Island) ===== */
header {
  padding-top: env(safe-area-inset-top);
}
.header-inner {
  padding-left: max(1.2rem, env(safe-area-inset-left));
  padding-right: max(1.2rem, env(safe-area-inset-right));
}
main {
  padding-left: max(1.5rem, env(safe-area-inset-left));
  padding-right: max(1.5rem, env(safe-area-inset-right));
  padding-bottom: max(4rem, calc(env(safe-area-inset-bottom) + 2rem));
}
.toast {
  bottom: max(28px, calc(env(safe-area-inset-bottom) + 16px));
}
.mobile-nav {
  padding-left: max(1rem, env(safe-area-inset-left));
  padding-right: max(1rem, env(safe-area-inset-right));
}


   Breakpoints:
     xs  : < 360px  (small phones)
     sm  : < 480px  (phones)
     md  : < 768px  (large phones / small tablets)
     lg  : < 1024px (tablets / small laptops)
     xl  : ≥ 1200px (desktop, already handled above)
   =================================================== */

/* ---------- TABLET & LARGE PHONES (≤ 1024px) ---------- */
@media (max-width: 1024px) {
  main { padding: 0 1.4rem 3rem; }

  .albums-grid {
    grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
    gap: 1.2rem;
  }

  .photos-masonry {
    grid-template-columns: repeat(auto-fill, minmax(190px, 1fr));
    gap: 1rem;
  }

  .hero { padding: 2.5rem 1rem 2rem; }
  .hero-title { font-size: 2.8rem; }

  /* Lightbox slightly smaller on tablet */
  .lb-inner { max-width: 620px; }
  .lb-img { max-height: 420px; }

  /* Admin panel */
  .form-card { padding: 1.6rem; }
}

/* ---------- PHONES / SMALL TABLETS (≤ 768px) ---------- */
@media (max-width: 768px) {

  /* --- Header --- */
  nav { display: none; }
  .hamburger { display: block; }
  .header-inner { padding: 0 1.2rem; height: 60px; }
  .logo-text { font-size: 1.4rem; }
  .logo-icon { font-size: 1.5rem; }

  /* --- Main --- */
  main { padding: 0 1rem 3.5rem; }
  .page-inner { padding: 1rem 0 0; }

  /* --- Hero --- */
  .hero { padding: 2rem 0.5rem 1.5rem; }
  .hero-title { font-size: 2rem; line-height: 1.25; }
  .hero-subtitle { font-size: 0.9rem; }
  .float-emoji { font-size: 1.4rem; margin: 0 5px; }
  .hero-stats { gap: 0.6rem; }
  .stat-pill { font-size: 0.8rem; padding: 6px 14px; }

  /* --- Toolbar --- */
  .toolbar { flex-direction: column; gap: 10px; }
  .search-wrap { width: 100%; min-width: unset; }
  .sort-wrap select { width: 100%; }

  /* --- Albums grid --- */
  .albums-grid {
    grid-template-columns: repeat(auto-fill, minmax(155px, 1fr));
    gap: 0.9rem;
  }
  .album-cover-wrap, .album-cover-placeholder { height: 150px; }
  .album-cover-wrap img { height: 150px; }
  .album-body { padding: 0.8rem 0.9rem 0.85rem; }
  .album-name { font-size: 0.95rem; }
  .album-desc { font-size: 0.76rem; -webkit-line-clamp: 1; }
  .photo-pill { font-size: 0.7rem; padding: 3px 9px; }
  .wl-btn { font-size: 1.25rem; }
  .tag-new, .tag-hot { font-size: 0.62rem; padding: 2px 8px; }

  /* --- Album detail page --- */
  .back-btn { padding: 9px 18px; font-size: 0.85rem; margin: 1rem 0 0.8rem; }

  .album-hero {
    grid-template-columns: 1fr;
    gap: 1rem;
    padding: 1.2rem;
  }
  .album-hero-cover-img {
    width: 100%; height: 180px;
    border-radius: var(--radius-sm);
  }
  .album-hero-cover-ph {
    width: 100%; height: 140px;
    font-size: 3.5rem;
  }
  .ah-title { font-size: 1.4rem; }
  .ah-desc { font-size: 0.88rem; }
  .ah-tag { font-size: 0.75rem; padding: 4px 11px; }

  /* --- Photos masonry --- */
  .photos-masonry {
    grid-template-columns: repeat(3, 1fr);
    gap: 0.7rem;
  }
  .photo-card img { height: 120px; }
  .photo-ph { height: 120px; }
  .photo-caption { font-size: 0.75rem; padding: 0.5rem 0.7rem; }

  /* --- Lightbox --- */
  .lightbox { padding: 0; }
  .lb-inner {
    max-width: 100vw;
    border-radius: 0;
    max-height: 100dvh;
    display: flex;
    flex-direction: column;
  }
  .lb-img {
    max-height: 60dvh;
    border-radius: 0;
  }
  .lb-footer {
    padding: 0.9rem 1rem;
    flex-direction: column;
    align-items: flex-start;
    gap: 6px;
  }
  .lb-close {
    top: 12px; right: 12px;
    width: 38px; height: 38px; font-size: 1rem;
  }
  .lb-nav {
    width: 38px; height: 38px; font-size: 1.3rem;
    top: 38%;
  }
  .lb-prev { left: 10px; }
  .lb-next { right: 10px; }

  /* --- Admin --- */
  .admin-topbar { padding: 1rem 0 0.8rem; flex-wrap: wrap; gap: 8px; }
  .admin-tabs { flex-wrap: wrap; gap: 6px; }
  .atab { padding: 8px 16px; font-size: 0.82rem; }
  .form-card { padding: 1.3rem; }
  .form-row { grid-template-columns: 1fr; }
  .cover-pick-row { flex-direction: column; }
  .cover-pick-btn { flex: unset; width: 100%; text-align: center; padding: 10px; }
  .drop-zone { padding: 1.5rem 0.8rem; }
  .drop-icon { font-size: 2rem; }
  .drop-text { font-size: 0.88rem; }
  .photo-preview-grid {
    grid-template-columns: repeat(3, 1fr);
    gap: 8px;
  }
  .admin-album-row {
    flex-wrap: wrap;
    gap: 0.8rem;
    padding: 0.9rem 1rem;
  }
  .admin-ath-actions { width: 100%; justify-content: flex-end; }

  /* --- Login card --- */
  .login-wrap { padding: 1.5rem 0; min-height: calc(100vh - 120px); }
  .login-card { padding: 2rem 1.5rem; max-width: 100%; }

  /* --- Section header --- */
  .section-hdr { font-size: 1.1rem; }

  /* --- Toast --- */
  .toast { font-size: 0.85rem; padding: 11px 22px; bottom: 20px; }

  /* --- Modal --- */
  .modal-overlay { padding: 1rem; }
  .modal-box { padding: 2rem 1.5rem; }

  /* --- Empty state --- */
  .empty-state { padding: 2.5rem 1rem; }
  .empty-emoji { font-size: 3rem; }
}

/* ---------- SMALL PHONES (≤ 480px) ---------- */
@media (max-width: 480px) {

  /* --- Header --- */
  .header-inner { padding: 0 1rem; height: 56px; }
  .logo-text { font-size: 1.2rem; }
  .logo-icon { font-size: 1.3rem; }

  /* --- Hero --- */
  .hero-title { font-size: 1.75rem; }
  .float-emoji { font-size: 1.2rem; margin: 0 3px; }

  /* --- Albums grid: 2 columns fixed --- */
  .albums-grid {
    grid-template-columns: 1fr 1fr;
    gap: 0.7rem;
  }
  .album-cover-wrap, .album-cover-placeholder { height: 130px; }
  .album-cover-wrap img { height: 130px; }

  /* --- Photos: 2 columns on very small phones --- */
  .photos-masonry {
    grid-template-columns: repeat(2, 1fr);
    gap: 0.6rem;
  }
  .photo-card img { height: 110px; }
  .photo-ph { height: 110px; }

  /* --- Upload box --- */
  .upload-preview-wrap { height: 170px; }
  .photo-preview-grid { grid-template-columns: repeat(3, 1fr); gap: 8px; }
  .emoji-col { max-width: 100%; }
  .emoji-picker { left: 0; transform: none; }


  /* --- Admin tabs: scroll horizontally --- */
  .admin-tabs { flex-wrap: nowrap; overflow-x: auto; padding-bottom: 4px; }
  .admin-tabs::-webkit-scrollbar { height: 3px; }
  .admin-tabs::-webkit-scrollbar-thumb { background: var(--sky-light); border-radius: 4px; }
  .atab { white-space: nowrap; flex-shrink: 0; font-size: 0.78rem; padding: 7px 13px; }

  /* --- Buttons full width on small screens --- */
  .btn-secondary, .btn-danger { width: 100%; text-align: center; }
  .modal-btns { flex-direction: column; }
  .modal-btns .btn-secondary,
  .modal-btns .btn-danger { width: 100%; }

  /* --- Form inputs bigger tap targets --- */
  .input-grp input,
  .input-grp textarea,
  .input-grp select { padding: 12px 13px; font-size: 16px; /* prevent iOS zoom */ }

  /* --- Lightbox footer compact --- */
  #lb-desc { font-size: 0.82rem; }
  .lb-counter { font-size: 0.72rem; }
}

/* ---------- EXTRA SMALL (≤ 360px) ---------- */
@media (max-width: 360px) {
  .logo-text { font-size: 1.05rem; }
  .hero-title { font-size: 1.5rem; }
  .hero-subtitle { font-size: 0.82rem; }
  .hero-stats { flex-direction: column; align-items: center; gap: 6px; }
  .stat-pill { font-size: 0.75rem; }

  .albums-grid { gap: 0.6rem; }
  .album-body { padding: 0.6rem 0.7rem; }
  .album-name { font-size: 0.85rem; }

  .form-card { padding: 1rem; }
  .login-card { padding: 1.5rem 1rem; }
  .enc-badge { font-size: 0.72rem; padding: 5px 12px; }
}

/* ---------- LANDSCAPE PHONES ---------- */
@media (max-width: 768px) and (orientation: landscape) {
  .hero { padding: 1rem 0.5rem; }
  .hero-emoji-row { display: none; }
  .hero-title { font-size: 1.6rem; margin-bottom: 0.3rem; }
  .hero-subtitle { font-size: 0.82rem; margin-bottom: 0.8rem; }

  /* Lightbox uses full viewport height in landscape */
  .lb-img { max-height: 80dvh; }
  .lb-footer { padding: 0.5rem 1rem; }
}

/* ---------- LARGE DESKTOP (≥ 1400px) ---------- */
@media (min-width: 1400px) {
  main { max-width: 1360px; }
  .albums-grid { grid-template-columns: repeat(auto-fill, minmax(290px, 1fr)); }
  .photos-masonry { grid-template-columns: repeat(auto-fill, minmax(240px, 1fr)); }
  .hero-title { font-size: 4rem; }
}

/* ---------- TOUCH DEVICE IMPROVEMENTS ---------- */
@media (hover: none) and (pointer: coarse) {
  /* Disable hover-only effects on touch — they can get "stuck" */
  .album-card:hover { transform: none; box-shadow: var(--shadow); }
  .album-card:active { transform: scale(0.97); }
  .album-overlay { display: none; } /* hide hover overlay on touch */

  .photo-card:hover { transform: none; }
  .photo-card:active { transform: scale(0.97); }

  .nav-btn:hover { transform: none; }
  .btn-primary:hover { transform: none; }
  .btn-pill:hover { transform: none; }

  /* Bigger tap targets */
  .wl-btn { padding: 8px; font-size: 1.5rem; }
  .lb-nav { width: 46px; height: 46px; }
  .lb-close { width: 44px; height: 44px; }
}
