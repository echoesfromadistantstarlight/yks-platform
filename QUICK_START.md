# ⚡ Hızlı Başlangıç Kılavuzu

## 🎯 En Hızlı Yöntem: GitHub'a Yükle ve Yayınla

### Adım 1: GitHub Repository Oluştur
1. [github.com](https://github.com) → Giriş yap
2. Sağ üstte **"+"** → **"New repository"**
3. İsim ver: `yks-platform`
4. **Public** seç
5. **Create repository**

### Adım 2: Projeyi Yükle

Terminal'de (yks-platform klasöründeyken):

```bash
git init
git add .
git commit -m "YKS Platformu ilk yükleme"
git branch -M main
git remote add origin https://github.com/SENIN_KULLANICI_ADIN/yks-platform.git
git push -u origin main
```

### Adım 3: GitHub Pages Aktifleştir

1. GitHub'da repository → **Settings** → **Pages**
2. Source: **GitHub Actions** seç
3. 2-3 dakika bekle

### ✅ Bitti!

Site hazır: `https://SENIN_KULLANICI_ADIN.github.io/yks-platform/`

---

## 🖥️ Yerel Geliştirme (Opsiyonel)

Sadece kod değişikliği yapacaksan:

```bash
# Bağımlılıkları yükle (bir kere)
npm install

# Geliştirme sunucusu başlat
npm run dev
```

Tarayıcı otomatik açılır: `http://localhost:3000`

---

## 🔄 Güncelleme Yapmak

Değişiklik yaptıktan sonra:

```bash
git add .
git commit -m "Güncelleme"
git push
```

2-3 dakika sonra site güncellenecek!

---

## ⚠️ Önemli Not

**Repository adınız farklıysa**, `vite.config.js` dosyasını düzenleyin:

```javascript
base: '/SENIN_REPO_ADIN/',
```

Örnek:
- Repo: `my-yks` → `base: '/my-yks/'`
- Repo: `yks-app` → `base: '/yks-app/'`

---

## 🆘 Sorun mu Var?

**Sayfa açılmıyor?**
- GitHub Pages Settings'te "GitHub Actions" seçili mi?
- Actions sekmesinde deployment başarılı mı? (yeşil tik)

**Stil yüklenmiyor?**
- `vite.config.js`'teki `base` değeri doğru mu?
- Browser cache'i temizle (Ctrl+Shift+Delete)

**Başka soru?**
- `GITHUB_PAGES_SETUP.md` dosyasına bak
- `DEPLOYMENT.md` dosyasına bak

---

## 📱 Platform Özellikleri

✅ **Backend yok** - Tüm veriler tarayıcıda
✅ **Ücretsiz** - GitHub Pages ücretsiz
✅ **Otomatik deployment** - Push yap, yayınlansın
✅ **Responsive** - Mobil uyumlu
✅ **Hızlı** - Vite ile optimize edilmiş

---

**Başarılar!** 🚀 YKS 2026'da başarılar dileriz!
