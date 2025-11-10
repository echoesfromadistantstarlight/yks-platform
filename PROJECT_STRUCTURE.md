# 📁 Proje Yapısı

## Dizin Ağacı

```
yks-platform/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions deployment workflow
├── public/
│   ├── .nojekyll              # GitHub Pages için gerekli
│   └── robots.txt             # SEO için robots.txt
├── src/
│   ├── components/            # React bileşenleri
│   │   ├── Dashboard.jsx     # Ana dashboard sayfası
│   │   ├── LandingPage.jsx   # Tanıtım sayfası
│   │   ├── SubjectList.jsx   # Ders ve konu listesi
│   │   ├── ProgressChart.jsx # İlerleme grafikleri
│   │   └── StudyPlan.jsx     # Çalışma planı
│   ├── data/
│   │   └── yksData.js        # Tüm YKS verileri (TYT, AYT)
│   ├── App.jsx               # Ana uygulama
│   ├── main.jsx              # React giriş noktası
│   └── index.css             # Global stiller (TailwindCSS)
├── index.html                # HTML template
├── vite.config.js           # Vite yapılandırması
├── tailwind.config.js       # TailwindCSS yapılandırması
├── postcss.config.js        # PostCSS yapılandırması
├── package.json             # NPM bağımlılıkları ve scriptler
├── README.md                # Ana dökümantasyon
├── DEPLOYMENT.md            # Deployment rehberi
├── GITHUB_PAGES_SETUP.md    # GitHub Pages kurulum
├── QUICK_START.md           # Hızlı başlangıç
└── .gitignore              # Git ignore kuralları
```

## 🎨 Bileşenler

### LandingPage.jsx
- **Hero Section**: Başlık, açıklama, CTA butonları
- **Features**: Platform özellikleri kartları
- **Stats**: İstatistik göstergeleri (120 TYT soru, 80 AYT soru vb.)
- **Benefits**: Platforma gelen faydalar
- **CTA Section**: Son çağrı bölümü
- **Footer**: Alt bilgi

### Dashboard.jsx
- **Header**: Logo, navigation, ilerleme göstergeleri
- **Welcome Banner**: Hoşgeldin mesajı ve genel istatistikler
- **Tab Navigation**: Konular, İlerleme, Plan sekmeleri
- **Exam Selector**: TYT/AYT seçici
- State yönetimi (progress tracking)

### SubjectList.jsx
- **Subject Cards**: Her ders için kart
- **Progress Bars**: Ders bazlı ilerleme çubukları
- **Topic Checkboxes**: Konu işaretleme sistemi
- **Priority Badges**: Yüksek/Orta/Düşük öncelik etiketleri
- **Question Count**: Konu başına soru sayısı

### ProgressChart.jsx
- **Pie Charts**: TYT ve AYT pasta grafikleri (Recharts)
- **Bar Charts**: Ders bazlı ilerleme grafikleri
- **Stats Cards**: İlerleme yüzdeleri
- **Motivational Messages**: Motive edici mesajlar

### StudyPlan.jsx
- **Study Tips**: Çalışma stratejileri
- **Priority Summary**: Öncelik özeti (Yüksek/Orta/Düşük)
- **High Priority Topics**: Acil konular listesi
- **Medium Priority Topics**: Orta öncelikli konular
- **Completion Message**: Tüm konular tamamlandıysa kutlama

## 📊 Veri Yapısı (yksData.js)

```javascript
{
  tyt: {
    name: "TYT",
    totalQuestions: 120,
    duration: 165,
    subjects: [
      {
        id: "turkce",
        name: "Türkçe",
        questions: 40,
        color: "#3b82f6",
        topics: [
          {
            name: "Paragraf",
            questions: "22-25",
            priority: "high",
            description: "EN ÇOK SORU ÇIKAN BÖLÜM"
          },
          // ... diğer konular
        ]
      },
      // ... diğer dersler
    ]
  },
  ayt: { ... }
}
```

## 🎨 Tasarım Sistemi

### Renkler
- **Primary**: Blue (#3b82f6)
- **Secondary**: Purple (#8b5cf6)
- **Success**: Green (#10b981)
- **Warning**: Yellow (#f59e0b)
- **Danger**: Red (#ef4444)

### Priorite Renkleri
- **High**: Red (bg-red-100, text-red-700)
- **Medium**: Yellow (bg-yellow-100, text-yellow-700)
- **Low**: Green (bg-green-100, text-green-700)

### Ders Renkleri
- Türkçe: #3b82f6 (Blue)
- Matematik: #10b981 (Green)
- Fizik: #f59e0b (Orange)
- Kimya: #8b5cf6 (Purple)
- Biyoloji: #14b8a6 (Teal)
- Tarih: #ef4444 (Red)
- Coğrafya: #06b6d4 (Cyan)
- Felsefe: #a855f7 (Purple)
- Din: #ec4899 (Pink)

## 💾 Veri Saklama

- **LocalStorage** kullanılır
- Key: `yks-progress`
- Format: `{ "tyt-turkce-Paragraf": true, ... }`
- Otomatik kaydetme (her değişiklikte)

## 🔧 Yapılandırma Dosyaları

### vite.config.js
- Base path: `/yks-platform/` (GitHub Pages için)
- Port: 3000
- Build directory: `dist`

### tailwind.config.js
- Custom colors: primary shades
- Custom animations: fade-in, slide-up, bounce-slow
- Content paths: HTML ve JSX dosyaları

### .github/workflows/deploy.yml
- Trigger: Push to main branch
- Node version: 20
- Deploy to: GitHub Pages
- Build command: `npm ci && npm run build`

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

TailwindCSS breakpoints:
- `sm:` 640px
- `md:` 768px
- `lg:` 1024px
- `xl:` 1280px

## 🚀 Build ve Deployment

### Development
```bash
npm run dev  # Port 3000'de çalışır
```

### Production Build
```bash
npm run build  # dist/ klasörüne build eder
npm run preview  # Build'i test eder
```

### GitHub Pages Deploy
```bash
git push origin main  # Otomatik deploy
```

## 🎯 Özellikler

1. **No Backend**: Tamamen frontend, LocalStorage ile veri saklama
2. **Offline First**: İnternet olmadan çalışabilir (PWA değil ama cache edilir)
3. **SEO Friendly**: Meta tags, robots.txt
4. **Accessible**: Semantic HTML, ARIA labels
5. **Performance**: Lazy loading, code splitting (Vite)

## 📦 Bağımlılıklar

### Dependencies
- `react` ^18.2.0
- `react-dom` ^18.2.0
- `lucide-react` ^0.294.0 (Icons)
- `recharts` ^2.10.3 (Charts)

### Dev Dependencies
- `vite` ^5.0.8
- `@vitejs/plugin-react` ^4.2.1
- `tailwindcss` ^3.3.6
- `autoprefixer` ^10.4.16
- `postcss` ^8.4.32

## 🔐 Güvenlik

- No API keys
- No sensitive data
- Client-side only
- HTTPS (GitHub Pages default)

## 📈 Gelecek Geliştirmeler (Opsiyonel)

- [ ] PWA desteği (offline çalışma)
- [ ] Dark mode
- [ ] PDF export (çalışma planı)
- [ ] Zamanlayıcı/Pomodoro
- [ ] Deneme sınavı takibi
- [ ] Çoklu kullanıcı (login sistemi)
- [ ] Yedekleme/Geri yükleme

---

**Not**: Bu yapı production-ready bir React uygulamasıdır. 🚀
