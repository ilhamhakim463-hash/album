/* ===== ADMIN.JS — Upload-only version ===== */

let isAdmin = false;

// ===== AUTH =====
function loginAdmin() {
  const data = DB.getData();
  const entered = document.getElementById('admin-pass').value;
  const saved = DB.dec(data.password);
  if (entered === saved) {
    isAdmin = true;
    document.getElementById('admin-gate').style.display = 'none';
    document.getElementById('admin-panel').style.display = 'block';
    refreshAdminView();
    refreshPhotoAlbumSelect();
    showToast('Selamat datang, Admin! 👋');
  } else {
    const inp = document.getElementById('admin-pass');
    inp.style.borderColor = '#e74c3c';
    inp.style.animation = 'shake 0.4s ease';
    showToast('Password salah! ❌');
    setTimeout(() => { inp.style.borderColor = ''; inp.style.animation = ''; }, 1500);
  }
}

function logoutAdmin() {
  isAdmin = false;
  document.getElementById('admin-gate').style.display = 'block';
  document.getElementById('admin-panel').style.display = 'none';
  document.getElementById('admin-pass').value = '';
  showToast('Berhasil keluar. Sampai jumpa! 👋');
}

function togglePassVis() {
  const inp = document.getElementById('admin-pass');
  const btn = document.getElementById('eye-btn');
  if (inp.type === 'password') { inp.type = 'text'; btn.textContent = '🙈'; }
  else { inp.type = 'password'; btn.textContent = '👁️'; }
}

// shake keyframe
(function() {
  const s = document.createElement('style');
  s.textContent = '@keyframes shake{0%,100%{transform:translateX(0)}20%,60%{transform:translateX(-6px)}40%,80%{transform:translateX(6px)}}';
  document.head.appendChild(s);
})();

// ===== TABS =====
function switchTab(btn, tabId) {
  document.querySelectorAll('.atab').forEach(b => b.classList.remove('active'));
  document.querySelectorAll('.tab-pane').forEach(p => p.classList.remove('active'));
  btn.classList.add('active');
  const pane = document.getElementById(tabId);
  if (pane) pane.classList.add('active');
}

// ===== EMOJI PICKER =====
const EMOJIS = [
  '📸','🏖️','🌸','🌃','🍜','🎉','🐾','🌍','🎵','⚽',
  '🏔️','🌺','🎂','🦋','🌊','🚗','🏡','🎓','💍','🌈',
  '🦁','🐬','🌙','⭐','🍕','🎸','📚','✈️','🎨','🌻',
  '🐶','🐱','🦊','🐼','🐨','🦄','🐉','🦋','🍓','🍑',
  '🌴','🏕️','🗺️','🧳','🎭','🏆','💪','🎪','🧩','🎠'
];

function initEmojiPicker() {
  const grid = document.getElementById('emoji-grid');
  if (!grid) return;
  grid.innerHTML = EMOJIS.map(e =>
    `<button class="ep-btn" onclick="selectEmoji('${e}')">${e}</button>`
  ).join('');
}

function toggleEmojiPicker() {
  const picker = document.getElementById('emoji-picker');
  if (!picker) return;
  picker.classList.toggle('open');
  if (picker.classList.contains('open')) {
    // Close on outside click
    setTimeout(() => {
      document.addEventListener('click', closeEmojiPickerOutside, { once: true });
    }, 50);
  }
}

function closeEmojiPickerOutside(e) {
  const picker = document.getElementById('emoji-picker');
  const inp = document.getElementById('f-album-emoji');
  if (picker && !picker.contains(e.target) && e.target !== inp) {
    picker.classList.remove('open');
  }
}

function selectEmoji(emoji) {
  const inp = document.getElementById('f-album-emoji');
  if (inp) inp.value = emoji;
  const picker = document.getElementById('emoji-picker');
  if (picker) picker.classList.remove('open');
}

// ===== ADD ALBUM =====
function addAlbum() {
  const name = document.getElementById('f-album-name').value.trim();
  const emoji = document.getElementById('f-album-emoji').value.trim() || '📸';
  const desc = document.getElementById('f-album-desc').value.trim();

  if (!name) { showToast('Nama album harus diisi! ⚠️'); return; }
  if (!window._coverDataUrl) { showToast('Pilih gambar sampul dulu! 🖼️'); return; }

  const data = DB.getData();
  const album = {
    id: DB.uid(), name, emoji, desc,
    cover: window._coverDataUrl,
    coverType: 'base64',
    photos: [],
    createdAt: Date.now()
  };
  data.albums.unshift(album);
  DB.saveData(data);

  // Reset form
  document.getElementById('f-album-name').value = '';
  document.getElementById('f-album-desc').value = '';
  document.getElementById('f-album-emoji').value = '📸';
  removeCoverPreview();

  refreshAdminView();
  refreshPhotoAlbumSelect();
  renderAlbums();
  renderHeroStats();
  showToast('Album "' + name + '" berhasil dibuat! 🎉');
}

// ===== DELETE ALBUM =====
function deleteAlbum(albumId) {
  const data = DB.getData();
  const album = data.albums.find(a => a.id === albumId);
  if (!album) return;
  showConfirm(
    'Hapus Album?',
    `Album "${album.name}" dan semua ${album.photos.length} fotonya akan dihapus permanen.`,
    () => {
      const d = DB.getData();
      d.albums = d.albums.filter(a => a.id !== albumId);
      d.wishlist = d.wishlist.filter(id => id !== albumId);
      DB.saveData(d);
      refreshAdminView();
      refreshPhotoAlbumSelect();
      renderAlbums();
      renderHeroStats();
      showToast('Album berhasil dihapus! 🗑️');
    }
  );
}

// ===== REFRESH ADMIN LIST =====
function refreshAdminView() {
  if (!isAdmin) return;
  const data = DB.getData();
  const list = document.getElementById('admin-album-list');
  const countEl = document.getElementById('admin-album-count');
  if (!list) return;
  if (countEl) countEl.textContent = data.albums.length;

  if (!data.albums.length) {
    list.innerHTML = '<div class="empty-state" style="padding:2rem"><div class="empty-emoji">📭</div><p>Belum ada album</p></div>';
    return;
  }

  list.innerHTML = data.albums.map(a => {
    const imgEl = a.cover
      ? `<img src="${a.cover}" style="width:100%;height:100%;object-fit:cover;border-radius:10px" onerror="this.style.display='none'">`
      : a.emoji;
    return `<div class="admin-album-row">
      <div class="admin-ath">${imgEl}</div>
      <div class="admin-ath-info">
        <div class="admin-ath-name">${a.emoji} ${a.name}</div>
        <div class="admin-ath-sub">${a.photos.length} foto · ${new Date(a.createdAt).toLocaleDateString('id-ID',{day:'numeric',month:'short',year:'numeric'})}</div>
      </div>
      <div class="admin-ath-actions">
        <button class="btn-secondary btn-sm" onclick="openAlbum('${a.id}')">👁️ Lihat</button>
        <button class="btn-danger btn-sm" onclick="deleteAlbum('${a.id}')">🗑️ Hapus</button>
      </div>
    </div>`;
  }).join('');
}

// ===== PHOTO ALBUM SELECT =====
function refreshPhotoAlbumSelect() {
  const sel = document.getElementById('f-photo-album');
  if (!sel) return;
  const data = DB.getData();
  sel.innerHTML = data.albums.length
    ? data.albums.map(a => `<option value="${a.id}">${a.emoji} ${a.name}</option>`).join('')
    : '<option value="">— Buat album dulu —</option>';
}

// ===== ADD PHOTOS =====
function addPhotos() {
  const albumId = document.getElementById('f-photo-album').value;
  if (!albumId) { showToast('Pilih album dulu! ⚠️'); return; }

  const items = document.querySelectorAll('#photo-previews .preview-item[data-dataurl]');
  if (!items.length) { showToast('Upload foto dulu! 📸'); return; }

  const data = DB.getData();
  const album = data.albums.find(a => a.id === albumId);
  if (!album) return;

  let added = 0;
  items.forEach(item => {
    const url = item.dataset.dataurl;
    const descInput = item.querySelector('input[type="text"]');
    const desc = descInput ? descInput.value.trim() : '';
    album.photos.push({ id: DB.uid(), url, desc, addedAt: Date.now() });
    added++;
  });

  DB.saveData(data);
  clearAllPhotoPreviews();
  refreshAdminView();
  renderHeroStats();
  showToast(added + ' foto berhasil disimpan ke album! ✅');
}

// ===== CLEAR PHOTOS =====
function clearAllPhotoPreviews() {
  document.getElementById('photo-previews').innerHTML = '';
  document.getElementById('photo-previews-wrap').style.display = 'none';
  document.getElementById('photo-empty-state').style.display = 'flex';
  document.getElementById('photo-file-input').value = '';
  updatePhotoCount();
}

function updatePhotoCount() {
  const items = document.querySelectorAll('#photo-previews .preview-item');
  const label = document.getElementById('photo-count-label');
  if (label) label.textContent = items.length + ' foto dipilih';
  const wrap = document.getElementById('photo-previews-wrap');
  if (wrap) wrap.style.display = items.length ? 'block' : 'none';
  const emptyState = document.getElementById('photo-empty-state');
  if (emptyState) emptyState.style.display = items.length ? 'none' : 'flex';
}

// ===== PASSWORD =====
function changePassword() {
  const data = DB.getData();
  const oldVal = document.getElementById('s-old').value;
  const newVal = document.getElementById('s-new').value;
  const conf = document.getElementById('s-conf').value;
  if (oldVal !== DB.dec(data.password)) { showToast('Password lama salah! ❌'); return; }
  if (newVal.length < 6) { showToast('Password baru min. 6 karakter! ⚠️'); return; }
  if (newVal !== conf) { showToast('Konfirmasi password tidak cocok! ❌'); return; }
  data.password = DB.enc(newVal);
  DB.saveData(data);
  document.getElementById('s-old').value = '';
  document.getElementById('s-new').value = '';
  document.getElementById('s-conf').value = '';
  showToast('Password berhasil diubah! 🔐✅');
}

function resetData() {
  showConfirm(
    'Reset Semua Data?',
    'Semua album, foto, dan wishlist akan dihapus. Tidak dapat dibatalkan!',
    () => { localStorage.removeItem('memoriesbox_v2'); window.location.reload(); }
  );
}

// ===== INIT =====
document.addEventListener('DOMContentLoaded', () => {
  initEmojiPicker();

  // Drag & drop cover
  const cdz = document.getElementById('cover-dropzone');
  if (cdz) {
    cdz.addEventListener('dragover', e => { e.preventDefault(); cdz.classList.add('drag-over'); });
    cdz.addEventListener('dragleave', e => { if (!cdz.contains(e.relatedTarget)) cdz.classList.remove('drag-over'); });
    cdz.addEventListener('drop', e => {
      e.preventDefault(); cdz.classList.remove('drag-over');
      const file = e.dataTransfer.files[0];
      if (file && file.type.startsWith('image/')) handleCoverFile(file);
    });
  }

  // Drag & drop photos
  const pdz = document.getElementById('photo-dropzone');
  if (pdz) {
    pdz.addEventListener('dragover', e => { e.preventDefault(); pdz.classList.add('drag-over'); });
    pdz.addEventListener('dragleave', e => { if (!pdz.contains(e.relatedTarget)) pdz.classList.remove('drag-over'); });
    pdz.addEventListener('drop', e => {
      e.preventDefault(); pdz.classList.remove('drag-over');
      const files = Array.from(e.dataTransfer.files).filter(f => f.type.startsWith('image/'));
      if (files.length) handlePhotoFiles(files);
    });
  }
});
