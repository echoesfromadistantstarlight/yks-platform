// Detaylı konu anlatımları ve örnek sorular
export const topicDetails = {
  // ============ TYT TÜRKÇE ============
  
  "tyt-turkce-Paragraf": {
    title: "Paragraf",
    description: "TYT Türkçe'nin EN ÇOK SORU ÇIKAN bölümü. Test'in %55-60'ı paragraftan oluşur.",
    importance: "22-25 soru",
    content: `
### Paragraf Nedir?
- Paragraf, bir düşünceyi veya konuyu işleyen, girintili ve mantıklı bir bütün oluşturan cümleler topluluğudur.
- Ana fikir + Yardımcı fikirler şeklinde yapılandırılır.

### Paragraf Soru Tipleri:
1. **Ana Fikir/Ana Düşünce** (En çok çıkan!)
2. **Konuun Belirlenmesi**
3. **Paragrafın Amacı**
4. **Paragrafta Verilen Bilgiler**
5. **Anlatım Biçimleri**
6. **Anlatım Özellikleri**
7. **Bağdaşıklık (Cümle Sıralaması)**
8. **Cümlenin Yeri**
9. **Boşluk Doldurma**

### Çözüm Stratejileri:
✅ İlk ve son cümlelere özellikle dikkat edin
✅ Tekrar eden kavramları belirleyin
✅ Bağlaçlara dikkat edin (çünkü, ancak, fakat, dolayısıyla)
✅ Soruy önce okuyun, sonra paragrafı okuyun
✅ Seçenekleri elemeyle çözün
    `,
    examples: [
      {
        question: "Sanat, insanoğlunun varoluşundan bu yana en temel ihtiyaçlarından biri olmuştur. İlkel insanlar mağara duvarlarına yaptıkları resimlerle düşüncelerini aktarırken, modern insan teknoloji sayesinde sanatı dijital ortama taşımıştır. Ancak her dönemde sanatın temel amacı değişmemiştir: İnsanın iç dünyasını dışa vurmak ve toplumla bağ kurmak. Bu yüzden sanat, evrensel bir dil olarak kabul edilir.\n\nBu parçada aşağıdakilerden hangisi VURGULANMIŞTIR?",
        options: [
          "A) Sanatın tarihsel gelişimi",
          "B) Teknolojinin sanata etkisi",  
          "C) Sanatın evrensel ve değişmez işlevi",
          "D) İlkel insanların sanat anlayışı",
          "E) Modern sanatın dijital boyutu"
        ],
        answer: "C",
        explanation: "Paragrafta sanatın tarihsel gelişimi anlatılsa da, ana vurgu son cümledeki 'sanatın temel amacı değişmemiştir' ve 'evrensel bir dil' ifadelerindedir."
      }
    ],
    tips: [
      "Günde 20-30 paragraf çözün",
      "Yanlış yaptığınız soruları tekrar edin",
      "Farklı metin türlerini (makale, deneme, öykü) çözün",
      "Süre tutarak çözüm yapın (paragraf başına 1.5-2 dakika)"
    ]
  },

  "tyt-turkce-Sözcükte Anlam": {
    title: "Sözcükte Anlam",
    description: "Kelimelerin anlamları, eş-zıt anlamlı kelimeler, gerçek-mecaz anlam konuları.",
    importance: "3-4 soru",
    content: `
### Sözcükte Anlam Konuları:

#### 1. Gerçek ve Mecaz Anlam
- **Gerçek Anlam:** Kelimenin sözlükteki ilk/asıl anlamı
- **Mecaz Anlam:** Benzetme, aktarma yoluyla kazandığı anlam

#### 2. Eş Anlamlı Kelimeler
Anlamca birbirine yakın kelimeler: güzel=hoş=zarif

#### 3. Zıt Anlamlı Kelimeler  
Birbirine zıt anlamlı kelimeler: güzel↔çirkin, iyi↔kötü

#### 4. Deyimler
Kalıplaşmış söz grupları: "göz kulak olmak", "ağzı kulaklarında"
    `,
    examples: [],
    tips: [
      "En az 100 deyim ezberleyin",
      "Kelimeleri mutlaka cümle içinde değerlendirin",
      "Gerçek-mecaz ayrımında 'benzetme var mı?' sorusunu sorun"
    ]
  },

  "tyt-turkce-Cümle Bilgisi": {
    title: "Cümle Bilgisi",
    description: "Cümle türleri, öğeleri ve cümle çözümleme.",
    importance: "1-2 soru",
    content: `
### Cümle Öğeleri:
- **Özne:** Yüklemin bildirdiği işi yapan
- **Yüklem:** Cümlenin en önemli öğesi
- **Nesne:** Yüklemin bildirdiği işten etkilenen
- **Dolaylı Tümleç:** "-(y)e, -(y)a" ekini alan
- **Zarf Tümleci:** Zaman, yer, durum bildiren
    `,
    examples: [],
    tips: ["Cümle çözümlemesi yaparken önce yüklemi bulun", "Özne 'kim/ne?' sorusuyla bulunur"]
  },

  // ============ TYT MATEMATİK ============
  
  "tyt-matematik-Problemler": {
    title: "Problemler",
    description: "TYT Matematik'in omurgası! En çok soru çıkan bölüm.",
    importance: "12-15 soru",
    content: `
### Problem Çözme Teknikleri:

#### 1. Kesir Problemleri
- Oran-orant kullanın
- Toplam her zaman 1'dir kuralı
- Kesrin bütünü bulma: Payda kadar böl, pay kadar çarp

#### 2. Yaş Problemleri  
- x yıl önce: Yaştan çıkar
- x yıl sonra: Yaşa ekle
- Denklem kurma şart!

#### 3. Yüzde Problemleri
- %x artış = (100+x)/100 ile çarp
- %x azalış = (100-x)/100 ile çarp
- Ard arda indirim/zam: Çarpanları çarp

#### 4. İşçi-Havuz Problemleri
- İş = İşçi sayısı × Süre × Verimlilik
- Birlikte çalışma: Hızlar toplanır

#### 5. Hareket Problemleri
- Yol = Hız × Zaman
- Karşılaşma: Hızlar toplanır  
- Kovalam: Hızlar çıkarılır
    `,
    examples: [
      {
        question: "Bir işi A tek başına 12 günde, B tek başına 18 günde bitirebilmektedir. Bu iki işçi birlikte çalışarak bu işi kaç günde bitirirler?",
        options: [
          "A) 5",
          "B) 6",
          "C) 7,2",
          "D) 8",
          "E) 9"
        ],
        answer: "C",
        explanation: "A'nın günlük işi: 1/12\nB'nin günlük işi: 1/18\nBirlikte günlük: 1/12 + 1/18 = 3/36 + 2/36 = 5/36\nToplam süre: 36/5 = 7,2 gün"
      },
      {
        question: "Bir sayının %40'ı 60'tır. Bu sayının %25'i kaçtır?",
        options: [
          "A) 30",
          "B) 37,5",
          "C) 40",
          "D) 45",
          "E) 50"
        ],
        answer: "B",
        explanation: "Sayı = 60 / 0,40 = 150\n%25'i = 150 × 0,25 = 37,5"
      }
    ],
    tips: [
      "Önce ne sorulduğunu tam anlayın",
      "Denklem kurmayı öğrenin",
      "Hızlı işlem yapın (çarpım tablosu ezber!)",
      "Tahmini sonuç yaparak kontrol edin"
    ]
  },

  // AYT MATEMATİK
  "ayt-matematik-Limit-Türev-İntegral": {
    title: "Limit, Türev ve İntegral",
    description: "AYT Matematik'in KALBİ! En çok soru çıkan üniteler.",
    importance: "10-14 soru (Matematik'in %25-35'i)",
    content: `
### LİMİT:

#### Temel Limit Kuralları:
- lim(x→a) [f(x) + g(x)] = lim f(x) + lim g(x)
- lim(x→a) [c·f(x)] = c · lim f(x)
- lim(x→a) [f(x)·g(x)] = lim f(x) · lim g(x)

#### Belirsizlik Durumları:
- 0/0 → Sadeleştir veya çarpanlarına ayır
- ∞/∞ → Pay ve paydayı en yüksek dereceye böl
- ∞ - ∞ → Ortak paranteze al

### TÜREV:

#### Temel Türev Kuralları:
- (x^n)' = n·x^(n-1)
- (sin x)' = cos x
- (cos x)' = -sin x
- (e^x)' = e^x
- (ln x)' = 1/x

#### Çarpım Kuralı:
(f·g)' = f'·g + f·g'

#### Bölüm Kuralı:
(f/g)' = (f'·g - f·g') / g²

#### Zincir Kuralı:
[f(g(x))]' = f'(g(x))·g'(x)

### İNTEGRAL:

#### Temel İntegral Formülleri:
- ∫x^n dx = x^(n+1)/(n+1) + C
- ∫sin x dx = -cos x + C
- ∫cos x dx = sin x + C
- ∫e^x dx = e^x + C

#### Belirli İntegral:
∫[a,b] f(x)dx = F(b) - F(a)
    `,
    examples: [
      {
        question: "lim(x→2) [(x²-4)/(x-2)] limitinin değeri kaçtır?",
        options: [
          "A) 0",
          "B) 2",
          "C) 4",
          "D) 8",
          "E) Limit yoktur"
        ],
        answer: "C",
        explanation: "0/0 belirsizliği var.\nPayı çarpanlarına ayırıyoruz:\n(x²-4)/(x-2) = (x-2)(x+2)/(x-2) = x+2\nlim(x→2) (x+2) = 2+2 = 4"
      },
      {
        question: "f(x) = 3x² - 4x + 1 fonksiyonunun türevi f'(x) aşağıdakilerden hangisidir?",
        options: [
          "A) 3x - 4",
          "B) 6x - 4",
          "C) 6x + 4",
          "D) 3x² - 4",
          "E) 6x² - 4x"
        ],
        answer: "B",
        explanation: "f'(x) = (3x²)' - (4x)' + (1)'\n= 3·2x - 4·1 + 0\n= 6x - 4"
      }
    ],
    tips: [
      "Türev ve integral formüllerini EZBERLEYİN!",
      "Çok soru çözün (günde 10+ soru)",
      "Grafik yorumlama becerisi kazanın",
      "Özel durumları (0/0, ∞/∞) iyi öğrenin"
    ]
  },

  // AYT FİZİK
  "ayt-fizik-Elektrik ve Manyetizma": {
    title: "Elektrik ve Manyetizma",
    description: "AYT Fizik'in EN AĞIR bölümü ve en çok soru çıkan ünitesi!",
    importance: "4-5 soru (Fizik'in %30-35'i)",
    content: `
### ELEKTROSTATİK:

#### Coulomb Kanunu:
F = k·(q₁·q₂)/r²
- k = 9×10⁹ N·m²/C²
- Aynı işaretli yükler iterler
- Zıt işaretli yükler çekerler

#### Elektrik Alan:
E = F/q = k·Q/r²
- Birim: N/C veya V/m
- Yönü: + yükten uzaklaşır, - yüke yaklaşır

#### Elektrik Potansiyel:
V = k·Q/r
- Birim: Volt (V)
- Potansiyel farkı (gerilim): ΔV = V₁ - V₂

### ELEKTRİK AKIMI:

#### Ohm Kanunu:
V = I·R
- V: Gerilim (Volt)
- I: Akım (Amper)
- R: Direnç (Ohm)

#### Güç:
P = V·I = I²·R = V²/R
- Birim: Watt (W)

#### Seri-Paralel Bağlama:
**Seri:** R_top = R₁ + R₂ + R₃
**Paralel:** 1/R_top = 1/R₁ + 1/R₂ + 1/R₃

### MANYETİZMA:

#### Manyetik Kuvvet:
F = q·v·B·sinθ
- q: Yük
- v: Hız
- B: Manyetik alan
- θ: Açı

#### İletken Teldeki Kuvvet:
F = B·I·L·sinθ
    `,
    examples: [
      {
        question: "12V gerilim altında 3A akım çeken bir elektrik devresinin direnci kaç ohm'dur?",
        options: [
          "A) 2",
          "B) 4",
          "C) 6",
          "D) 9",
          "E) 36"
        ],
        answer: "B",
        explanation: "Ohm Kanunu: V = I·R\n12 = 3·R\nR = 12/3 = 4 Ω"
      }
    ],
    tips: [
      "Formülleri birim boyutuyla birlikte öğrenin",
      "Devre şemaları çizmeyi öğrenin",
      "Sağ el kuralını uygulayın (manyetizma)",
      "Seri-paralel bağlamayı iyice kavrayın"
    ]
  }
};

// Eksik konular için varsayılan içerik
export const getTopicDetail = (examType, subjectId, topicName) => {
  const key = `${examType}-${subjectId}-${topicName}`;
  return topicDetails[key] || {
    title: topicName,
    description: "Bu konu hakkında detaylı içerik hazırlanıyor...",
    content: "Çok yakında detaylı konu anlatımı, örnek sorular ve çözüm stratejileri eklenecek!",
    examples: [],
    tips: ["Bu konuyu mutlaka çalışın!", "Bol soru çözün!", "Düzenli tekrar yapın!"]
  };
};
