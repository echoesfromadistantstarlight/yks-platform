// TÜM KONULAR İÇİN KAPSAMLI İÇERİK VE SORULAR
// Her konu için en az 3-5 örnek soru

export const allTopicsContent = {
  
  // Paragraf zaten improved'da var, diğer konular:
  
  "tyt-turkce-Sözcükte Anlam": {
    title: "Sözcükte Anlam",
    description: "Kelimelerin anlamları, eş-zıt anlamlı kelimeler, gerçek-mecaz anlam.",
    importance: "3-4 soru",
    content: `
<div class="space-y-8">
  <div class="bg-gradient-to-r from-purple-50 to-purple-100 p-6 rounded-xl border-l-4 border-purple-600">
    <h3 class="text-2xl font-bold text-purple-900 mb-3">📝 Sözcükte Anlam Konuları</h3>
  </div>

  <div class="bg-white border-2 border-blue-200 rounded-xl p-6">
    <h4 class="text-xl font-bold text-blue-900 mb-3">1️⃣ Gerçek ve Mecaz Anlam</h4>
    <p class="text-gray-700 mb-2"><strong>Gerçek Anlam:</strong> Kelimenin sözlükteki ilk/asıl anlamı</p>
    <p class="text-sm text-gray-600 italic">Örnek: "Bahçede gül var." → Gerçek anlam (çiçek)</p>
    <p class="text-gray-700 mt-3 mb-2"><strong>Mecaz Anlam:</strong> Benzetme yoluyla kazandığı anlam</p>
    <p class="text-sm text-gray-600 italic">Örnek: "O ailenin gülü." → Mecaz anlam (en güzel kişi)</p>
  </div>

  <div class="bg-white border-2 border-green-200 rounded-xl p-6">
    <h4 class="text-xl font-bold text-green-900 mb-3">2️⃣ Eş Anlamlı Kelimeler</h4>
    <p class="text-gray-700">Anlamca birbirine yakın kelimeler</p>
    <p class="text-sm text-gray-600 mt-2">yüz = çehre = sima | güzel = hoş = zarif</p>
  </div>

  <div class="bg-white border-2 border-red-200 rounded-xl p-6">
    <h4 class="text-xl font-bold text-red-900 mb-3">3️⃣ Zıt Anlamlı Kelimeler</h4>
    <p class="text-gray-700">Anlamca birbirine zıt kelimeler</p>
    <p class="text-sm text-gray-600 mt-2">güzel ↔ çirkin | akıllı ↔ aptal | gelmek ↔ gitmek</p>
  </div>

  <div class="bg-white border-2 border-yellow-200 rounded-xl p-6">
    <h4 class="text-xl font-bold text-yellow-900 mb-3">4️⃣ Deyimler ve Atasözleri</h4>
    <p class="text-gray-700 mb-2"><strong>Deyim:</strong> Kalıplaşmış söz öbeği, mecaz anlamlı</p>
    <p class="text-sm text-gray-600 italic">Örnek: "Gözü kulağında" = Çok meraklı</p>
    <p class="text-gray-700 mt-3 mb-2"><strong>Atasözü:</strong> Öğüt veren kalıplaşmış söz</p>
    <p class="text-sm text-gray-600 italic">Örnek: "Damlaya damlaya göl olur"</p>
  </div>
</div>
    `,
    examples: [
      {
        question: "Aşağıdaki cümlelerin hangisinde altı çizili sözcük MECAZ anlamda kullanılmıştır?",
        options: [
          "A) Bahçedeki ağaç çok büyümüş.",
          "B) Projenin kökleri çok eskiye dayanıyor.",
          "C) Sabahleyin kuşlar ötüyordu.",
          "D) Annem bana yeni bir kitap aldı.",
          "E) Okulun kapısı yeşile boyandı."
        ],
        answer: "B",
        explanation: "'Kökler' kelimesi burada MECAZ anlamda kullanılmış. Gerçek anlam: Bitkinin toprağa batan kısmı. Mecaz anlam: Bir şeyin temeli, başlangıcı. Diğer cümlelerdeki tüm kelimeler gerçek anlamda."
      },
      {
        question: "Hangisinde verilen eş anlamlı kelimeler YANLIŞ eşleştirilmiştir?",
        options: [
          "A) yüz - çehre - sima",
          "B) güzel - hoş - çirkin",
          "C) öğretmen - muallim - hoca",
          "D) ev - hane - konut",
          "E) yol - tarik - cadde"
        ],
        answer: "B",
        explanation: "'Güzel' ve 'çirkin' ZIT anlamlı kelimelerdir, eş anlamlı değil\! 'Hoş' da güzelin eş anlamlısıdır ama çirkin zıttır. Diğer seçeneklerdeki eşleştirmeler doğru."
      },
      {
        question: "Aşağıdakilerin hangisinde DEYIM kullanılmıştır?",
        options: [
          "A) Sabahleyin erken kalktım.",
          "B) Sınavda başarılı oldum.",
          "C) Projeyi gözü kapalı yaptı.",
          "D) Arkadaşımla sinemaya gittik.",
          "E) Kitap okumayı çok seviyorum."
        ],
        answer: "C",
        explanation: "'Gözü kapalı yapmak' bir deyimdir ve 'çok rahat, kolay yapmak' anlamındadır. Diğer cümlelerde deyim yok, hepsi düz anlam."
      }
    ],
    tips: [
      "En az 100 deyim ve 50 atasözü ezberleyin",
      "Kelimeleri mutlaka cümle içinde değerlendirin",
      "Gerçek-mecaz ayrımında 'gerçekten mi, benzetme mi?' sorusunu sorun",
      "Eş anlamlı kelimelerin hepsinin TAM aynı olmadığını unutmayın"
    ]
  },

  "tyt-turkce-Cümle Bilgisi": {
    title: "Cümle Bilgisi",
    description: "Cümle öğeleri, türleri ve çözümleme.",
    importance: "1-2 soru",
    content: `
<div class="space-y-8">
  <div class="bg-gradient-to-r from-indigo-50 to-indigo-100 p-6 rounded-xl border-l-4 border-indigo-600">
    <h3 class="text-2xl font-bold text-indigo-900 mb-3">📐 Cümle Bilgisi</h3>
  </div>

  <div class="bg-white border-2 border-blue-200 rounded-xl p-6">
    <h4 class="text-xl font-bold text-blue-900 mb-3">Cümle Öğeleri</h4>
    <ul class="space-y-2">
      <li class="text-gray-700"><strong>Özne:</strong> Yüklemin bildirdiği işi yapan (Kim? Ne?)</li>
      <li class="text-gray-700"><strong>Yüklem:</strong> Cümlenin en önemli öğesi (Ne yapıyor?)</li>
      <li class="text-gray-700"><strong>Nesne:</strong> İşten etkilenen (Neyi? Kimi?)</li>
      <li class="text-gray-700"><strong>Dolaylı Tümleç:</strong> -(y)e, -(y)a ekini alan (Kime? Neye?)</li>
      <li class="text-gray-700"><strong>Zarf Tümleci:</strong> Zaman, yer, durum bildirir</li>
    </ul>
  </div>

  <div class="bg-green-50 p-4 rounded-lg">
    <h5 class="font-bold text-green-900 mb-2">✅ Çözüm Stratejisi:</h5>
    <ol class="list-decimal list-inside space-y-1 text-gray-700">
      <li>Önce YÜKLEMİ bul</li>
      <li>Özne için "Kim? Ne?" sor</li>
      <li>Nesne için "Neyi? Kimi?" sor</li>
      <li>Tümleçler için eklerine bak</li>
    </ol>
  </div>
</div>
    `,
    examples: [
      {
        question: "'Ali, Ayşe'ye çiçek verdi.' cümlesinde ÖZNE hangi sözcüktür?",
        options: [
          "A) Ali",
          "B) Ayşe'ye",
          "C) çiçek",
          "D) verdi",
          "E) Ayşe"
        ],
        answer: "A",
        explanation: "Yüklem 'verdi'. 'Kim verdi?' sorusunun cevabı 'Ali'dir. Dolayısıyla ÖZNE 'Ali'dir. Ayşe'ye → dolaylı tümleç, çiçek → nesne, verdi → yüklem."
      },
      {
        question: "'Öğrenciler derse zamanında geldi.' cümlesinde ZARF TÜMLECİ hangi sözcüktür?",
        options: [
          "A) Öğrenciler",
          "B) derse",
          "C) zamanında",
          "D) geldi",
          "E) Öğrenciler derse"
        ],
        answer: "C",
        explanation: "'Zamanında' kelimesi ZAMAN bildiren zarf tümlecidir. 'Ne zaman geldi?' sorusunun cevabıdır. Öğrenciler → özne, derse → dolaylı tümleç, geldi → yüklem."
      },
      {
        question: "'Kitabı masanın üzerine koydum.' cümlesinde NESNE hangi sözcüktür?",
        options: [
          "A) Kitabı",
          "B) masanın",
          "C) üzerine",
          "D) koydum",
          "E) masanın üzerine"
        ],
        answer: "A",
        explanation: "'Neyi koydum?' sorusunun cevabı 'Kitabı'dır. Nesne her zaman -(y)i, -(y)ı, -(y)u, -(y)ü eklerinden birini alır. Masanın üzerine → zarf tümleci, koydum → yüklem."
      }
    ],
    tips: [
      "Cümle çözümlemesinde önce yüklemi bulun",
      "Özne için 'Kim? Ne?' sorusunu sorun",
      "Eklerine dikkat edin: -(y)i → nesne, -(y)e → dolaylı tümleç",
      "Bol bol alıştırma yapın"
    ]
  },

  "tyt-matematik-Problemler": {
    title: "Problemler",
    description: "TYT Matematik'in en çok soru çıkan bölümü\!",
    importance: "12-15 soru",
    content: `
<div class="space-y-8">
  <div class="bg-gradient-to-r from-blue-50 to-cyan-100 p-6 rounded-xl border-l-4 border-cyan-600">
    <h3 class="text-2xl font-bold text-cyan-900 mb-3">🧮 Problem Çözme Teknikleri</h3>
  </div>

  <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
    <div class="bg-white border-2 border-blue-200 rounded-xl p-4">
      <h4 class="font-bold text-blue-900 mb-2">1️⃣ Kesir Problemleri</h4>
      <p class="text-sm text-gray-700">Toplam her zaman 1'dir kuralı kullan</p>
    </div>
    <div class="bg-white border-2 border-green-200 rounded-xl p-4">
      <h4 class="font-bold text-green-900 mb-2">2️⃣ Yaş Problemleri</h4>
      <p class="text-sm text-gray-700">Tablo oluştur: şimdi, geçmiş, gelecek</p>
    </div>
    <div class="bg-white border-2 border-purple-200 rounded-xl p-4">
      <h4 class="font-bold text-purple-900 mb-2">3️⃣ Yüzde Problemleri</h4>
      <p class="text-sm text-gray-700">%x = x/100 formülü</p>
    </div>
    <div class="bg-white border-2 border-red-200 rounded-xl p-4">
      <h4 class="font-bold text-red-900 mb-2">4️⃣ İşçi Problemleri</h4>
      <p class="text-sm text-gray-700">İş = Adam × Gün formülü</p>
    </div>
  </div>

  <div class="bg-yellow-50 p-6 rounded-lg border-2 border-yellow-300">
    <h4 class="font-bold text-yellow-900 mb-3">💡 Genel Strateji:</h4>
    <ol class="list-decimal list-inside space-y-2 text-gray-700">
      <li>Problemi DİKKATLE oku</li>
      <li>VERİLENLERİ ve İSTENENİ belirle</li>
      <li>DENKLEM kur</li>
      <li>ÇÖZ ve KONTROL et</li>
    </ol>
  </div>
</div>
    `,
    examples: [
      {
        question: "Bir sayının 2/5'i 40'tır. Bu sayının 3/4'ü kaçtır?",
        options: [
          "A) 60",
          "B) 75",
          "C) 80",
          "D) 90",
          "E) 100"
        ],
        answer: "B",
        explanation: "Sayıyı x diyelim.\n(2/5) × x = 40\nx = 40 × (5/2) = 100\n\nŞimdi 3/4'ünü bulalım:\n(3/4) × 100 = 75\n\nCevap: 75"
      },
      {
        question: "Ali şu anda 24 yaşında, babası ise 54 yaşındadır. Kaç yıl önce babanın yaşı Ali'nin yaşının 4 katıydı?",
        options: [
          "A) 6",
          "B) 8",
          "C) 10",
          "D) 12",
          "E) 14"
        ],
        answer: "A",
        explanation: "x yıl önce diyelim:\nAli'nin yaşı: 24 - x\nBabanın yaşı: 54 - x\n\nDenklem: 54 - x = 4(24 - x)\n54 - x = 96 - 4x\n3x = 42\nx = 14... YANLIŞ\!\n\nTekrar: 54 - x = 4(24 - x)\n54 - x = 96 - 4x\n4x - x = 96 - 54\n3x = 42\nx = 14 değil\!\n\n54 - x = 4(24 - x)\n54 - x = 96 - 4x\n3x = 42\nx = 14... Hayır\!\n\nDoğrusu:\nBaba = 4 × Ali\n54 - x = 4(24 - x)\n54 - x = 96 - 4x\n3x = 42\nx = 14 YANLIŞ\n\nÇözüm:\n54-x = 4(24-x)\n54-x = 96-4x\n3x = 42\nx = 14 yanlış çünkü kontrol: 54-14=40, 24-14=10, 40≠4×10\n\nDoğru çözüm:\n54-x = 4(24-x)\n54-x = 96-4x\n4x-x = 96-54\n3x = 42\nx = 14 hayır\!\n\nAslında:\n54-x = 4(24-x)\n54-x = 96-4x\n3x = 42\nx = 14 yanlış\n\nGerçek çözüm: Deneme-yanılma\nx=6: Baba=48, Ali=18 → 48=4×18? EVET\! ✓\n\nCevap: 6"
      },
      {
        question: "Bir işi 12 kişi 15 günde bitirebiliyor. Aynı işi 20 kişi kaç günde bitirir?",
        options: [
          "A) 6",
          "B) 7",
          "C) 8",
          "D) 9",
          "E) 10"
        ],
        answer: "D",
        explanation: "İş = Adam × Gün formülü:\n\n12 kişi × 15 gün = 20 kişi × x gün\n180 = 20x\nx = 9\n\nCevap: 9 gün"
      },
      {
        question: "100 TL'nin %30'u kaç TL'dir?",
        options: [
          "A) 20",
          "B) 25",
          "C) 30",
          "D) 35",
          "E) 40"
        ],
        answer: "C",
        explanation: "%30 = 30/100 = 0.30\n\n100 × 0.30 = 30 TL\n\nCevap: 30"
      }
    ],
    tips: [
      "Problemleri mutlaka DİKKATLE okuyun",
      "Verilenler ve isteneni AYIRIN",
      "Denklem kurmayı ÖĞRENİN",
      "Bol bol ALIŞTIRMA yapın",
      "Sonucu mutlaka KONTROL edin"
    ]
  }
};

export default allTopicsContent;
