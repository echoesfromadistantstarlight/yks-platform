# 📦 GitHub Pages Kurulum Rehberi

## Adım Adım GitHub'a Yükleme ve Yayınlama

### 1️⃣ GitHub'da Repository Oluştur

1. [GitHub](https://github.com) hesabınıza giriş yapın
2. Sağ üst köşeden **"+"** → **"New repository"** tıklayın
3. Repository bilgilerini doldurun:
   - **Repository name**: `yks-platform` (veya istediğiniz isim)
   - **Description**: "YKS 2026 Hazırlık Platformu - Konu takibi ve çalışma planı"
   - **Public** seçin (GitHub Pages için gerekli)
   - **"Create repository"** butonuna tıklayın

### 2️⃣ Projeyi GitHub'a Yükle

Terminal veya komut satırında projenizin bulunduğu klasöre gidin:

```bash
cd /home/mek/Desktop/YKS/yks-platform
```

Aşağıdaki komutları sırayla çalıştırın:

```bash
# Git'i başlat
git init

# Tüm dosyaları ekle
git add .

# İlk commit
git commit -m "🎉 İlk commit: YKS Hazırlık Platformu"

# Ana branch'i main yap
git branch -M main

# GitHub repository'nizi ekleyin (KULLANICI_ADINIZ'ı değiştirin!)
git remote add origin https://github.com/KULLANICI_ADINIZ/yks-platform.git

# GitHub'a yükle
git push -u origin main
```

### 3️⃣ GitHub Pages'ı Aktifleştir

1. GitHub'daki repository sayfanıza gidin
2. **Settings** (Ayarlar) sekmesine tıklayın
3. Sol menüden **Pages** seçeneğine tıklayın
4. **Source** bölümünde:
   - **"GitHub Actions"** seçeneğini seçin
5. Sayfayı yenileyin, üstte yeşil bir kutuda sitenizin URL'i görünecek:
   ```
   Your site is live at https://KULLANICI_ADINIZ.github.io/yks-platform/
   ```

### 4️⃣ Deployment'ı İzle

1. Repository ana sayfasına dönün
2. **Actions** sekmesine tıklayın
3. İlk workflow'un çalıştığını göreceksiniz
4. ✅ Yeşil tik geldiğinde site hazır!

### 5️⃣ Site Hazır! 🎉

Site artık yayında: `https://KULLANICI_ADINIZ.github.io/yks-platform/`

## 🔄 Güncelleme Yapmak

Herhangi bir değişiklik yaptığınızda:

```bash
# Değişiklikleri ekle
git add .

# Commit yap
git commit -m "Güncelleme açıklaması"

# GitHub'a gönder
git push
```

GitHub Actions otomatik olarak yeni versiyonu deploy edecek (2-3 dakika sürer).

## ⚙️ Vite Config Düzenleme

**ÖNEMLİ**: Eğer repository adınız `yks-platform` değilse, `vite.config.js` dosyasını düzenleyin:

```javascript
export default defineConfig({
  base: '/REPOSITORY_ADINIZ/', // Buraya kendi repository adınızı yazın
  // ...
})
```

Örnek:
- Repository adı: `yks-calisma` → `base: '/yks-calisma/'`
- Repository adı: `my-yks-app` → `base: '/my-yks-app/'`

## 🐛 Sorun mu Yaşıyorsunuz?

### Sayfa 404 Hatası Veriyor
- `vite.config.js` dosyasındaki `base` değerini kontrol edin
- GitHub Pages Settings → Pages'ta "GitHub Actions" seçili olduğundan emin olun

### CSS/JavaScript Yüklenmiyor
- Browser cache'ini temizleyin (Ctrl+Shift+Delete)
- Hard refresh yapın (Ctrl+F5 veya Cmd+Shift+R)

### Deployment Başarısız Oluyor
- Actions sekmesinde hata loglarını kontrol edin
- `package.json` dosyasının düzgün olduğundan emin olun

## 📊 İstatistikler ve İzleme

GitHub Pages otomatik olarak site trafiğini gösterir:
- Repository → **Insights** → **Traffic**

## 🎨 Özelleştirme

### Favicon Eklemek
`public` klasörüne `favicon.ico` dosyası ekleyin.

### Meta Etiketleri
`index.html` dosyasını düzenleyerek SEO iyileştirin.

### Özel Domain
1. `public` klasörüne `CNAME` dosyası oluşturun
2. İçine domain'inizi yazın: `ykshazirlik.com`
3. Domain DNS ayarlarını GitHub'ı gösterecek şekilde yapın

## ✅ Checklist

- [ ] GitHub hesabı oluşturuldu
- [ ] Repository oluşturuldu (Public)
- [ ] Kod GitHub'a yüklendi
- [ ] GitHub Pages aktifleştirildi (GitHub Actions seçili)
- [ ] Actions sekmesinde deployment başarılı oldu
- [ ] Site linki çalışıyor

## 🎓 Ek Kaynaklar

- [GitHub Pages Dökümantasyonu](https://docs.github.com/en/pages)
- [Vite GitHub Pages Rehberi](https://vitejs.dev/guide/static-deploy.html#github-pages)
- [GitHub Actions](https://docs.github.com/en/actions)

---

**Başarılar!** Site şimdi tüm dünyaya açık! 🚀
