/* ===== DATA.JS — Storage, Encryption, Sample Data ===== */

const DB_KEY = 'memoriesbox_v2';

// Simple encryption helpers
const enc = s => btoa(unescape(encodeURIComponent(s)));
const dec = s => { try { return decodeURIComponent(escape(atob(s))); } catch(e) { return s; } };

function getData() {
  try {
    const raw = localStorage.getItem(DB_KEY);
    if (!raw) return seedData();
    const parsed = JSON.parse(dec(raw));
    // migrate older formats
    if (!parsed.password) parsed.password = enc('admin123');
    if (!parsed.wishlist) parsed.wishlist = [];
    return parsed;
  } catch(e) {
    console.warn('Data parse error, resetting:', e);
    return seedData();
  }
}

function saveData(data) {
  try {
    localStorage.setItem(DB_KEY, enc(JSON.stringify(data)));
    return true;
  } catch(e) {
    console.error('Save error:', e);
    return false;
  }
}

function seedData() {
  const data = {
    albums: [
      {
        id: 'seed_1', name: 'Pantai Bali', emoji: '🏖️',
        desc: 'Kenangan indah liburan di pantai Bali bersama keluarga. Tambahkan foto-fotomu dari sini!',
        cover: '', coverType: 'none', photos: [], createdAt: Date.now() - 86400000 * 3
      },
      {
        id: 'seed_2', name: 'Momen Keluarga', emoji: '👨‍👩‍👧‍👦',
        desc: 'Kumpulan momen spesial bersama orang-orang tersayang.',
        cover: '', coverType: 'none', photos: [], createdAt: Date.now() - 86400000
      },
      {
        id: 'seed_3', name: 'Perjalanan Seru', emoji: '✈️',
        desc: 'Cerita perjalanan dari berbagai tempat yang pernah dikunjungi.',
        cover: '', coverType: 'none', photos: [], createdAt: Date.now() - 3600000
      }
    ],
    wishlist: [],
    password: enc('admin123')
  };
  saveData(data);
  return data;
}

// Utility: generate unique ID
function uid() {
  return 'id_' + Date.now().toString(36) + '_' + Math.random().toString(36).slice(2, 6);
}

// Expose
window.DB = { getData, saveData, enc, dec, uid };
