/* ===== UPLOAD.JS — Upload-only, no URL mode ===== */

window._coverDataUrl = null;

const MAX_COVER_MB = 5;
const MAX_PHOTO_MB = 10;

// ===== COVER UPLOAD =====
function handleCoverUpload(event) {
  const file = event.target.files[0];
  if (file) handleCoverFile(file);
}

function handleCoverFile(file) {
  if (!file.type.startsWith('image/')) {
    showToast('File harus berupa gambar! ⚠️'); return;
  }
  if (file.size > MAX_COVER_MB * 1024 * 1024) {
    showToast(`Gambar sampul maksimal ${MAX_COVER_MB}MB! ⚠️`); return;
  }

  // Show loading state
  const empty = document.getElementById('cover-empty-state');
  const box = document.getElementById('cover-dropzone');
  if (empty) empty.innerHTML = '<div class="upload-cloud">⏳</div><div class="upload-title">Memproses gambar...</div>';

  const reader = new FileReader();
  reader.onload = e => {
    resizeImage(e.target.result, 900, 560, 0.85, compressed => {
      window._coverDataUrl = compressed;
      showCoverPreview(compressed);
      showToast('Gambar sampul siap! ✅');
    });
  };
  reader.readAsDataURL(file);
}

function showCoverPreview(dataUrl) {
  const box = document.getElementById('cover-dropzone');
  const empty = document.getElementById('cover-empty-state');
  const prevWrap = document.getElementById('cover-preview-wrap');
  const prevImg = document.getElementById('cover-preview-img');

  prevImg.src = dataUrl;
  if (empty) empty.style.display = 'none';
  if (prevWrap) prevWrap.style.display = 'block';
  box.classList.add('has-file');
}

function removeCoverPreview() {
  window._coverDataUrl = null;
  const box = document.getElementById('cover-dropzone');
  const empty = document.getElementById('cover-empty-state');
  const prevWrap = document.getElementById('cover-preview-wrap');
  const fileInp = document.getElementById('cover-file-input');

  // Reset empty state content
  if (empty) {
    empty.innerHTML = `
      <div class="upload-cloud">☁️</div>
      <div class="upload-title">Klik atau drag &amp; drop gambar sampul</div>
      <div class="upload-sub">JPG · PNG · WEBP · HEIC — maks 5 MB</div>
      <div class="upload-cta">Pilih Gambar</div>`;
    empty.style.display = 'flex';
  }
  if (prevWrap) prevWrap.style.display = 'none';
  if (box) box.classList.remove('has-file');
  if (fileInp) fileInp.value = '';
}

// ===== PHOTO UPLOAD (multi) =====
function handlePhotoUpload(event) {
  const files = Array.from(event.target.files);
  handlePhotoFiles(files);
  // Reset input so same files can be re-selected if needed
  event.target.value = '';
}

function handlePhotoFiles(files) {
  const valid = files.filter(f => {
    if (!f.type.startsWith('image/')) {
      showToast(`"${f.name}" bukan gambar, dilewati.`); return false;
    }
    if (f.size > MAX_PHOTO_MB * 1024 * 1024) {
      showToast(`"${f.name}" terlalu besar (maks ${MAX_PHOTO_MB}MB).`); return false;
    }
    return true;
  });

  if (!valid.length) return;

  // Show preview area immediately
  const prevWrap = document.getElementById('photo-previews-wrap');
  const emptyState = document.getElementById('photo-empty-state');
  if (prevWrap) prevWrap.style.display = 'block';
  if (emptyState) emptyState.style.display = 'none';

  let done = 0;
  valid.forEach(file => {
    const reader = new FileReader();
    reader.onload = e => {
      resizeImage(e.target.result, 1280, 960, 0.82, compressed => {
        addPhotoPreviewItem(compressed, file.name);
        done++;
        updatePhotoCount();
        if (done === valid.length) {
          showToast(done + ' foto siap! Tambahkan deskripsi lalu klik Simpan. 📸');
        }
      });
    };
    reader.readAsDataURL(file);
  });
}

function addPhotoPreviewItem(dataUrl, filename) {
  const container = document.getElementById('photo-previews');
  if (!container) return;

  const guessedDesc = filename
    .replace(/\.[^/.]+$/, '')
    .replace(/[-_]/g, ' ')
    .replace(/\b\w/g, l => l.toUpperCase())
    .substring(0, 60);

  const item = document.createElement('div');
  item.className = 'preview-item';
  item.dataset.dataurl = dataUrl;
  item.innerHTML = `
    <img src="${dataUrl}" alt="preview" loading="lazy">
    <button class="preview-remove" onclick="removePreviewItem(this)" title="Hapus foto ini">✕</button>
    <div class="desc-overlay">
      <input type="text" placeholder="✏️ Tulis deskripsi..." value="${guessedDesc}" maxlength="120">
    </div>`;
  container.appendChild(item);
}

function removePreviewItem(btn) {
  btn.closest('.preview-item').remove();
  updatePhotoCount();
}

// ===== IMAGE RESIZER =====
function resizeImage(dataUrl, maxW, maxH, quality, callback) {
  const img = new Image();
  img.onload = () => {
    let { width, height } = img;
    if (width > maxW || height > maxH) {
      const ratio = Math.min(maxW / width, maxH / height);
      width = Math.round(width * ratio);
      height = Math.round(height * ratio);
    }
    const canvas = document.createElement('canvas');
    canvas.width = width; canvas.height = height;
    canvas.getContext('2d').drawImage(img, 0, 0, width, height);
    callback(canvas.toDataURL('image/jpeg', quality));
  };
  img.onerror = () => callback(dataUrl);
  img.src = dataUrl;
}
