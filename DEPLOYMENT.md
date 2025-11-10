# 🚀 GitHub Pages Deployment Rehberi

Bu proje GitHub Pages'ta yayınlanmak üzere yapılandırılmıştır.

## 📋 Gereksinimler

- GitHub hesabı
- Git kurulu olmalı
- Node.js ve npm kurulu olmalı (geliştirme için)

## 🔧 Deployment Adımları

### 1. GitHub Repository Oluştur

```bash
# Projeyi git ile başlat
cd yks-platform
git init
git add .
git commit -m "Initial commit: YKS Hazırlık Platformu"

# GitHub'da yeni bir repository oluştur (yks-platform)
# Sonra aşağıdaki komutları çalıştır:
git branch -M main
git remote add origin https://github.com/KULLANICI_ADINIZ/yks-platform.git
git push -u origin main
```

### 2. GitHub Pages Ayarları

1. GitHub repository sayfanıza gidin
2. **Settings** → **Pages** sekmesine tıklayın
3. **Source** bölümünde **GitHub Actions** seçeneğini seçin

### 3. Otomatik Deployment

Artık her `main` branch'ine push yaptığınızda:
- GitHub Actions otomatik olarak çalışır
- Projeyi build eder
- GitHub Pages'a deploy eder

Site URL'niz: `https://KULLANICI_ADINIZ.github.io/yks-platform/`

## 🎯 Vite Config Ayarı

`vite.config.js` dosyasındaki `base` değerini repository adınıza göre güncelleyin:

```javascript
export default defineConfig({
  base: '/yks-platform/', // Repository adınız
  // ...
})
```

Eğer repository adınız farklıysa (örn: `yks-calisma-platformu`), şöyle olmalı:

```javascript
base: '/yks-calisma-platformu/'
```

## 🔄 Manuel Deployment (Alternatif)

GitHub Actions kullanmak istemiyorsanız, manuel deploy edebilirsiniz:

```bash
# gh-pages package'ı yükleyin
npm install --save-dev gh-pages

# Deploy edin
npm run deploy
```

## 🛠️ Yerel Test

Deployment öncesi yerel olarak test etmek için:

```bash
# Geliştirme sunucusu
npm run dev

# Production build'i test et
npm run build
npm run preview
```

## 📱 Özel Domain (Opsiyonel)

Kendi domain'inizi kullanmak isterseniz:

1. Repository'nizde `public/CNAME` dosyası oluşturun
2. İçine domain'inizi yazın: `ykshazirlik.com`
3. Domain DNS ayarlarında GitHub Pages'ı gösterin

## 🐛 Sorun Giderme

### Build Hatası
- `npm install` komutunu tekrar çalıştırın
- `node_modules` ve `package-lock.json` dosyalarını silin, tekrar yükleyin

### 404 Hatası
- `vite.config.js` dosyasındaki `base` path'ini kontrol edin
- GitHub Pages ayarlarında doğru branch'in seçildiğinden emin olun

### CSS/JS Yüklenmiyor
- Browser cache'ini temizleyin
- Hard refresh yapın (Ctrl+Shift+R veya Cmd+Shift+R)

## 📊 Deployment Durumu

Deployment durumunu kontrol etmek için:
- Repository → **Actions** sekmesine gidin
- Son workflow run'ın durumunu görün

## 🎉 Tamamlandı!

Site hazır! Artık herkes `https://KULLANICI_ADINIZ.github.io/yks-platform/` adresinden erişebilir.

---

**Not**: İlk deployment 2-3 dakika sürebilir. Sabırlı olun! 🚀
