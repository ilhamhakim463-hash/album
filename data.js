/* ===== APP.JS — Navigation, Rendering, Lightbox, Wishlist ===== */

// ===== PAGE NAVIGATION =====
function showPage(name) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));

  const pg = document.getElementById('page-' + name);
  if (pg) pg.classList.add('active');

  const nb = document.getElementById('nav-' + name);
  if (nb) nb.classList.add('active');

  // On activate
  if (name === 'home') { renderAlbums(); renderHeroStats(); }
  if (name === 'wishlist') renderWishlist();
  if (name === 'admin') { refreshAdminView(); refreshPhotoAlbumSelect(); }

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function toggleMobileNav() {
  const mn = document.getElementById('mobile-nav');
  mn.classList.toggle('open');
}

// ===== HERO STATS =====
function renderHeroStats() {
  const data = DB.getData();
  const totalPhotos = data.albums.reduce((s, a) => s + a.photos.length, 0);
  document.getElementById('hero-stats').innerHTML = `
    <div class="stat-pill">📂 ${data.albums.length} Album</div>
    <div class="stat-pill">📷 ${totalPhotos} Foto</div>
    <div class="stat-pill">❤️ ${data.wishlist.length} Wishlist</div>`;
}

// ===== ALBUMS =====
let searchVal = '';
let sortVal = 'newest';

function filterAlbums() {
  searchVal = document.getElementById('search-input').value.toLowerCase();
  sortVal = document.getElementById('sort-select').value;
  const clearBtn = document.getElementById('search-clear');
  if (clearBtn) clearBtn.style.display = searchVal ? 'flex' : 'none';
  renderAlbums();
}

function clearSearch() {
  document.getElementById('search-input').value = '';
  searchVal = '';
  document.getElementById('search-clear').style.display = 'none';
  renderAlbums();
}

function renderAlbums() {
  const data = DB.getData();
  const grid = document.getElementById('albums-grid');
  const noEl = document.getElementById('no-albums');
  const totalEl = document.getElementById('album-total');
  if (!grid) return;

  let albums = [...data.albums];

  // Filter
  if (searchVal) {
    albums = albums.filter(a =>
      a.name.toLowerCase().includes(searchVal) ||
      (a.desc || '').toLowerCase().includes(searchVal)
    );
  }

  // Sort
  switch (sortVal) {
    case 'oldest': albums.sort((a, b) => a.createdAt - b.createdAt); break;
    case 'name': albums.sort((a, b) => a.name.localeCompare(b.name)); break;
    case 'photos': albums.sort((a, b) => b.photos.length - a.photos.length); break;
    default: albums.sort((a, b) => b.createdAt - a.createdAt);
  }

  if (totalEl) totalEl.textContent = albums.length + ' album';

  if (albums.length === 0) {
    grid.innerHTML = '';
    noEl.style.display = 'block';
    return;
  }
  noEl.style.display = 'none';

  grid.innerHTML = albums.map((a, i) => buildAlbumCard(a, data.wishlist, i)).join('');
}

function buildAlbumCard(a, wishlist, i) {
  const isWl = wishlist.includes(a.id);
  const isNew = (Date.now() - a.createdAt) < 86400000 * 2;
  const isHot = a.photos.length >= 5;

  const coverHTML = a.cover
    ? `<img src="${a.cover}" alt="${a.name}" loading="lazy"
         onerror="this.style.display='none';this.nextElementSibling.style.display='flex'">`
    : '';
  const phHTML = `<div class="album-cover-placeholder" style="${a.cover ? 'display:none' : ''}">${a.emoji}</div>`;

  return `<div class="album-card" style="animation-delay:${i * 0.06}s" onclick="openAlbum('${a.id}')">
    ${isNew ? '<div class="tag-new">✨ Baru</div>' : ''}
    ${isHot ? '<div class="tag-hot">🔥 Hot</div>' : ''}
    <div class="album-cover-wrap">
      ${coverHTML}${phHTML}
      <div class="album-overlay"><button class="overlay-btn" onclick="event.stopPropagation();openAlbum('${a.id}')">Lihat Album →</button></div>
    </div>
    <div class="album-body">
      <div class="album-name">${a.emoji} ${a.name}</div>
      <div class="album-desc">${a.desc || 'Klik untuk melihat foto'}</div>
      <div class="album-footer">
        <span class="photo-pill">📷 ${a.photos.length} foto</span>
        <button class="wl-btn ${isWl ? 'on' : ''}"
          onclick="event.stopPropagation();toggleWishlist('${a.id}',this)"
          title="${isWl ? 'Hapus dari Wishlist' : 'Tambah ke Wishlist'}">
          ${isWl ? '❤️' : '🤍'}
        </button>
      </div>
    </div>
  </div>`;
}

// ===== OPEN ALBUM =====
function openAlbum(albumId) {
  const data = DB.getData();
  const album = data.albums.find(a => a.id === albumId);
  if (!album) return;

  // Build header
  const ahc = document.getElementById('ahc');
  const ahi = document.getElementById('ahi');
  if (album.cover) {
    ahc.innerHTML = `<img class="album-hero-cover-img" src="${album.cover}" alt="${album.name}"
      onerror="this.outerHTML='<div class=album-hero-cover-ph>${album.emoji}</div>'">`;
  } else {
    ahc.innerHTML = `<div class="album-hero-cover-ph">${album.emoji}</div>`;
  }
  ahi.innerHTML = `
    <div class="ah-title">${album.emoji} ${album.name}</div>
    <div class="ah-desc">${album.desc || ''}</div>
    <div class="ah-meta">
      <span class="ah-tag">📷 ${album.photos.length} Foto</span>
      <span class="ah-tag">📅 ${new Date(album.createdAt).toLocaleDateString('id-ID',{day:'numeric',month:'long',year:'numeric'})}</span>
    </div>`;

  // Build photos
  const grid = document.getElementById('photos-grid');
  const noPhotos = document.getElementById('no-photos');
  currentLightboxPhotos = album.photos;

  if (!album.photos.length) {
    grid.innerHTML = '';
    noPhotos.style.display = 'block';
  } else {
    noPhotos.style.display = 'none';
    grid.innerHTML = album.photos.map((p, i) => `
      <div class="photo-card" style="animation-delay:${i * 0.05}s" onclick="openLightbox(${i})">
        <img src="${p.url}" alt="${p.desc || ''}" loading="lazy"
          onerror="this.style.display='none';this.nextElementSibling.style.display='flex'">
        <div class="photo-ph" style="display:none">🖼️</div>
        ${p.desc ? `<div class="photo-caption">${p.desc}</div>` : ''}
      </div>`).join('');
  }

  showPage('album');
}

// ===== LIGHTBOX =====
let currentLightboxPhotos = [];
let currentLightboxIdx = 0;

function openLightbox(idx) {
  currentLightboxIdx = idx;
  updateLightbox();
  document.getElementById('lightbox').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function updateLightbox() {
  const p = currentLightboxPhotos[currentLightboxIdx];
  if (!p) return;
  document.getElementById('lb-img').src = p.url;
  document.getElementById('lb-desc').textContent = p.desc || '';
  document.getElementById('lb-counter').textContent =
    (currentLightboxIdx + 1) + ' / ' + currentLightboxPhotos.length;
}

function lbNav(dir) {
  const len = currentLightboxPhotos.length;
  currentLightboxIdx = (currentLightboxIdx + dir + len) % len;
  // Animate swap
  const img = document.getElementById('lb-img');
  img.style.opacity = '0';
  img.style.transform = `translateX(${dir > 0 ? '30px' : '-30px'})`;
  setTimeout(() => {
    updateLightbox();
    img.style.transition = 'opacity 0.25s, transform 0.25s';
    img.style.opacity = '1';
    img.style.transform = 'translateX(0)';
    setTimeout(() => { img.style.transition = ''; }, 260);
  }, 150);
}

function closeLb() {
  document.getElementById('lightbox').classList.remove('open');
  document.body.style.overflow = '';
}

function lbClick(e) {
  if (e.target === document.getElementById('lightbox')) closeLb();
}

document.addEventListener('keydown', e => {
  const lb = document.getElementById('lightbox');
  if (!lb.classList.contains('open')) return;
  if (e.key === 'Escape') closeLb();
  if (e.key === 'ArrowRight') lbNav(1);
  if (e.key === 'ArrowLeft') lbNav(-1);
});

// ===== WISHLIST =====
function toggleWishlist(albumId, btn) {
  const data = DB.getData();
  const idx = data.wishlist.indexOf(albumId);
  if (idx === -1) {
    data.wishlist.push(albumId);
    btn.textContent = '❤️'; btn.classList.add('on');
    showToast('Ditambah ke Wishlist! ❤️');
    spawnHearts(btn);
  } else {
    data.wishlist.splice(idx, 1);
    btn.textContent = '🤍'; btn.classList.remove('on');
    showToast('Dihapus dari Wishlist');
  }
  DB.saveData(data);
  updateWlBadge(data.wishlist.length);
  renderHeroStats();
}

function updateWlBadge(count) {
  const badge = document.getElementById('wl-badge');
  if (badge) {
    badge.textContent = count;
    badge.classList.add('pop');
    setTimeout(() => badge.classList.remove('pop'), 350);
  }
}

function renderWishlist() {
  const data = DB.getData();
  const grid = document.getElementById('wishlist-grid');
  const empty = document.getElementById('wishlist-empty');
  const albums = data.albums.filter(a => data.wishlist.includes(a.id));
  if (!albums.length) { grid.innerHTML = ''; empty.style.display = 'block'; return; }
  empty.style.display = 'none';
  grid.innerHTML = albums.map((a, i) => buildAlbumCard(a, data.wishlist, i)).join('');
}

// ===== TOAST =====
let toastTimer;
function showToast(msg, type = '') {
  const t = document.getElementById('toast');
  clearTimeout(toastTimer);
  t.textContent = msg; t.className = 'toast show ' + type;
  toastTimer = setTimeout(() => t.classList.remove('show'), 2800);
}

// ===== HEART ANIMATION =====
function spawnHearts(el) {
  const rect = el.getBoundingClientRect();
  const emojis = ['❤️', '💕', '💖', '✨'];
  for (let i = 0; i < 4; i++) {
    setTimeout(() => {
      const h = document.createElement('div');
      h.className = 'heart-float';
      h.textContent = emojis[i % emojis.length];
      h.style.left = (rect.left + rect.width / 2 - 12 + (Math.random() - 0.5) * 40) + 'px';
      h.style.top = (rect.top + window.scrollY - 10) + 'px';
      h.style.animationDuration = (0.9 + Math.random() * 0.5) + 's';
      document.body.appendChild(h);
      setTimeout(() => h.remove(), 1500);
    }, i * 80);
  }
}

// ===== CONFIRM MODAL =====
let _confirmCb = null;
function showConfirm(title, msg, onConfirm) {
  document.getElementById('modal-title').textContent = title;
  document.getElementById('modal-msg').textContent = msg;
  _confirmCb = onConfirm;
  document.getElementById('confirm-modal').style.display = 'flex';
  document.getElementById('modal-confirm-btn').onclick = () => { closeModal(); onConfirm(); };
}
function closeModal() {
  document.getElementById('confirm-modal').style.display = 'none';
  _confirmCb = null;
}

// ===== INIT =====
document.addEventListener('DOMContentLoaded', () => {
  renderAlbums();
  renderHeroStats();
  const data = DB.getData();
  updateWlBadge(data.wishlist.length);

  // Drag/drop support for page
  ['dragenter','dragover','dragleave','drop'].forEach(ev => {
    document.body.addEventListener(ev, e => e.preventDefault());
  });

  // Stars background
  const starsEl = document.getElementById('stars');
  if (starsEl) {
    for (let i = 0; i < 40; i++) {
      const s = document.createElement('div');
      s.style.cssText = `position:absolute;width:${2+Math.random()*3}px;height:${2+Math.random()*3}px;
        background:rgba(255,255,255,${0.3+Math.random()*0.5});border-radius:50%;
        left:${Math.random()*100}%;top:${Math.random()*50}%;
        animation:starTwinkle ${2+Math.random()*4}s ease-in-out infinite;
        animation-delay:${Math.random()*4}s`;
      starsEl.appendChild(s);
    }
    const style = document.createElement('style');
    style.textContent = '@keyframes starTwinkle{0%,100%{opacity:0.3;transform:scale(1)}50%{opacity:1;transform:scale(1.4)}}';
    document.head.appendChild(style);
  }
});
