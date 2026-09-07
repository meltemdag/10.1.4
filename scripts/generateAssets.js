import fs from 'fs';
import path from 'path';

const portraitsDir = path.resolve('public/assets/portraits');
const sourcesDir = path.resolve('public/assets/sources');
const iconsDir = path.resolve('public/assets/icons');
const texturesDir = path.resolve('public/assets/textures');

[portraitsDir, sourcesDir, iconsDir, texturesDir].forEach(dir => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
});

// 9 Figures Data for Portrait SVGs
const figures = [
  {
    id: 'yesevi',
    name: 'Hoca Ahmed Yesevi',
    title: 'Pîr-i Türkistan (?-1166)',
    iconText: '📖',
    accentColor: '#1b4332',
    goldColor: '#d4af37',
    symbol: 'Dîvân-ı Hikmet'
  },
  {
    id: 'kashgarli',
    name: 'Kâşgarlı Mahmud',
    title: 'İlk Sözlük & Harita (XI. yy)',
    iconText: '🗺️',
    accentColor: '#1e3a8a',
    goldColor: '#38bdf8',
    symbol: 'Dîvânü Lugâti\'t-Türk'
  },
  {
    id: 'hayyam',
    name: 'Ömer Hayyam',
    title: 'Astronom & Riyaziyatçı (1039-1123)',
    iconText: '🔭',
    accentColor: '#78350f',
    goldColor: '#f59e0b',
    symbol: 'Zîc-i Melikşahî & Cebir'
  },
  {
    id: 'cezeri',
    name: 'Cezeri (Ebû\'l-İzz)',
    title: 'Mühendislik & Otomat (1136-1206)',
    iconText: '⚙️',
    accentColor: '#831843',
    goldColor: '#f472b6',
    symbol: 'Kitâbü\'l-Hiyel'
  },
  {
    id: 'ibnularabi',
    name: 'Muhyiddin İbnülarabi',
    title: 'Şeyhü\'l-Ekber (1165-1240)',
    iconText: '✨',
    accentColor: '#1e293b',
    goldColor: '#e2e8f0',
    symbol: 'Füsûsu\'l-Hikem'
  },
  {
    id: 'mevlana',
    name: 'Mevlana Celaleddin Rumi',
    title: 'Evrensel Hoşgörü (1207-1273)',
    iconText: '🕊️',
    accentColor: '#14532d',
    goldColor: '#4ade80',
    symbol: 'Mesnevi & Pergel'
  },
  {
    id: 'hacibektas',
    name: 'Hacı Bektaş Veli',
    title: 'Gönüller Sultanı (1209-1271)',
    iconText: '🕯️',
    accentColor: '#7c2d12',
    goldColor: '#fb923c',
    symbol: 'Makâlât & İlim Yolu'
  },
  {
    id: 'yunusemre',
    name: 'Yunus Emre',
    title: 'Türkçe Şiirin Sesi (1241-1321)',
    iconText: '🌿',
    accentColor: '#0f766e',
    goldColor: '#2dd4bf',
    symbol: 'Risâletü\'n-Nushiyye'
  },
  {
    id: 'ibnibibi',
    name: 'İbni Bibi',
    title: 'Selçuklu Tarihçisi (XIII. yy)',
    iconText: '📜',
    accentColor: '#701a75',
    goldColor: '#e879f9',
    symbol: 'el-Evâmirü\'l-Alâiyye'
  }
];

figures.forEach(fig => {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 500" width="100%" height="100%">
  <defs>
    <linearGradient id="bg_${fig.id}" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#182234"/>
      <stop offset="60%" stop-color="${fig.accentColor}"/>
      <stop offset="100%" stop-color="#0b1120"/>
    </linearGradient>
    <radialGradient id="halo_${fig.id}" cx="50%" cy="40%" r="50%">
      <stop offset="0%" stop-color="${fig.goldColor}" stop-opacity="0.3"/>
      <stop offset="100%" stop-color="${fig.goldColor}" stop-opacity="0"/>
    </radialGradient>
    <pattern id="seljuk_${fig.id}" width="40" height="40" patternUnits="userSpaceOnUse">
      <path d="M 20 0 L 40 20 L 20 40 L 0 20 Z" fill="none" stroke="${fig.goldColor}" stroke-width="0.75" stroke-opacity="0.12"/>
    </pattern>
  </defs>

  <!-- Background -->
  <rect width="400" height="500" rx="16" fill="url(#bg_${fig.id})"/>
  <rect width="400" height="500" rx="16" fill="url(#seljuk_${fig.id})"/>
  <circle cx="200" cy="180" r="140" fill="url(#halo_${fig.id})"/>

  <!-- Outer Illuminated Border -->
  <rect x="16" y="16" width="368" height="468" rx="12" fill="none" stroke="${fig.goldColor}" stroke-width="2" stroke-opacity="0.7"/>
  <rect x="24" y="24" width="352" height="452" rx="8" fill="none" stroke="${fig.goldColor}" stroke-width="0.75" stroke-opacity="0.35" stroke-dasharray="6,4"/>

  <!-- Corner Jewels -->
  <circle cx="16" cy="16" r="5" fill="${fig.goldColor}"/>
  <circle cx="384" cy="16" r="5" fill="${fig.goldColor}"/>
  <circle cx="16" cy="484" r="5" fill="${fig.goldColor}"/>
  <circle cx="384" cy="484" r="5" fill="${fig.goldColor}"/>

  <!-- Central Medallion Frame -->
  <circle cx="200" cy="180" r="90" fill="#0f172a" stroke="${fig.goldColor}" stroke-width="3" stroke-opacity="0.9"/>
  <circle cx="200" cy="180" r="82" fill="none" stroke="${fig.goldColor}" stroke-width="1" stroke-dasharray="4,4" stroke-opacity="0.6"/>

  <!-- 8-Pointed Seljuk Star around medallion -->
  <g transform="translate(200, 180)">
    <rect x="-65" y="-65" width="130" height="130" fill="none" stroke="${fig.goldColor}" stroke-width="1.2" stroke-opacity="0.4" transform="rotate(0)"/>
    <rect x="-65" y="-65" width="130" height="130" fill="none" stroke="${fig.goldColor}" stroke-width="1.2" stroke-opacity="0.4" transform="rotate(45)"/>
  </g>

  <!-- Large Icon Representation -->
  <text x="200" y="205" text-anchor="middle" font-size="70">${fig.iconText}</text>

  <!-- Name Ribbon & Text -->
  <g transform="translate(200, 320)">
    <rect x="-160" y="0" width="320" height="42" rx="21" fill="#0f172a" stroke="${fig.goldColor}" stroke-width="1.5" stroke-opacity="0.8"/>
    <text x="0" y="26" text-anchor="middle" fill="#ffffff" font-size="17" font-weight="bold" font-family="'Cinzel Decorative', 'Cinzel', serif" letter-spacing="0.5">${fig.name}</text>
  </g>

  <!-- Title & Era -->
  <text x="200" y="390" text-anchor="middle" fill="${fig.goldColor}" font-size="13" font-family="'Plus Jakarta Sans', sans-serif" font-weight="600">${fig.title}</text>

  <!-- Key Work Tag -->
  <g transform="translate(200, 425)">
    <rect x="-130" y="0" width="260" height="28" rx="14" fill="${fig.accentColor}" stroke="${fig.goldColor}" stroke-width="1" stroke-opacity="0.5"/>
    <text x="0" y="18" text-anchor="middle" fill="#f1f5f9" font-size="12" font-family="'Plus Jakarta Sans', sans-serif">⚜️ ${fig.symbol}</text>
  </g>
</svg>`;
  fs.writeFileSync(path.join(portraitsDir, `${fig.id}.svg`), svg, 'utf8');
});

// 4 Sources Data for Evidence SVGs
const sources = [
  {
    id: 'kaynak-d-bacon',
    code: 'Kaynak D',
    title: 'Roger Bacon & Optik',
    sub: 'Deneysel Bilim ve Kilise Yargılaması (1214-1294)',
    accent: '#1e3a8a',
    gold: '#60a5fa',
    icon: '🔬',
    desc: 'Oxford Franciscan ekolü, İbnülheysem esinlenmesi, teleskop önerisi ve sansür.'
  },
  {
    id: 'kaynak-e-f-biruni',
    code: 'Kaynak E & F',
    title: 'Biruni & Ay Tutulması',
    sub: 'Kitâbü\'t-Tefhîm & Selçuklu/Gazneli Saray Himayesi',
    accent: '#78350f',
    gold: '#fbbf24',
    icon: '🌘',
    desc: 'Ebü\'l-Vefa ile eş zamanlı gözlem, çok disiplinli bilim üretimi ve himaye.'
  },
  {
    id: 'kaynak-g-ronan',
    code: 'Kaynak G',
    title: 'Colin A. Ronan Tahlili',
    sub: 'İslam Biliminin Özgün Kuramsal Katkıları',
    accent: '#064e3b',
    gold: '#34d399',
    icon: '⚖️',
    desc: 'İslam bilimi pasif aktarma deposu değildir; eleştiren ve kuram üreten öncüdür.'
  },
  {
    id: 'kaynak-g-ibnnefis',
    code: 'Kaynak Ğ',
    title: 'İbn Nefis & Küçük Dolaşım',
    sub: 'Galen Hatalarının Düzeltilmesi & Anatomi Devrimi',
    accent: '#831843',
    gold: '#f472b6',
    icon: '❤️',
    desc: 'Kalpteki delik yanılgısını çürüterek akciğer kan dolaşımını keşfetti.'
  }
];

sources.forEach(src => {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 400" width="100%" height="100%">
  <defs>
    <linearGradient id="sbg_${src.id}" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0f172a"/>
      <stop offset="50%" stop-color="${src.accent}"/>
      <stop offset="100%" stop-color="#020617"/>
    </linearGradient>
  </defs>
  <rect width="600" height="400" rx="16" fill="url(#sbg_${src.id})"/>
  <rect x="16" y="16" width="568" height="368" rx="12" fill="none" stroke="${src.gold}" stroke-width="2" stroke-opacity="0.6"/>
  <rect x="24" y="24" width="552" height="352" rx="8" fill="none" stroke="${src.gold}" stroke-width="0.75" stroke-opacity="0.25" stroke-dasharray="6,4"/>
  
  <g transform="translate(300, 60)">
    <rect x="-100" y="-18" width="200" height="36" rx="18" fill="#0f172a" stroke="${src.gold}" stroke-width="1.5"/>
    <text x="0" y="6" text-anchor="middle" fill="${src.gold}" font-size="16" font-weight="bold" font-family="'Cinzel Decorative', serif">${src.code}</text>
  </g>

  <circle cx="300" cy="180" r="65" fill="#020617" stroke="${src.gold}" stroke-width="2" stroke-opacity="0.8"/>
  <text x="300" y="198" text-anchor="middle" font-size="52">${src.icon}</text>

  <text x="300" y="280" text-anchor="middle" fill="#ffffff" font-size="20" font-weight="bold" font-family="'Plus Jakarta Sans', sans-serif">${src.title}</text>
  <text x="300" y="306" text-anchor="middle" fill="${src.gold}" font-size="13" font-family="'Plus Jakarta Sans', sans-serif">${src.sub}</text>
  <text x="300" y="340" text-anchor="middle" fill="#94a3b8" font-size="12" font-family="'Plus Jakarta Sans', sans-serif">${src.desc}</text>
</svg>`;
  fs.writeFileSync(path.join(sourcesDir, `${src.id}.svg`), svg, 'utf8');
});

console.log('Successfully generated all portrait and source SVG assets!');
