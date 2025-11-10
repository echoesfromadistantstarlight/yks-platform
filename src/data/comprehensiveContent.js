// TÜM KONULAR İÇİN KAPSAMLI İÇERİK

export const comprehensiveTopicContent = {
  // ============ TYT TÜRKÇE ============
  
  "tyt-turkce-Paragraf": {
    title: "Paragraf",
    description: "TYT Türkçe'nin EN ÇOK SORU ÇIKAN bölümü. Test'in %55-60'ı paragraftan oluşur.",
    importance: "22-25 soru",
    content: `
### 📖 Paragraf Nedir?

Paragraf, bir düşünceyi veya konuyu işleyen, girintili ve mantıklı bir bütün oluşturan cümleler topluluğudur.

**Paragrafın Yapısı:**
- **Ana Fikir:** Paragrafta anlatılmak istenen asıl düşünce
- **Yardımcı Fikirler:** Ana fikri destekleyen, açıklayan düşünceler
- **Konu:** Paragrafta sözü edilen varlık, olay veya durum
- **Amaç:** Paragrafın yazılma nedeni

### 📚 Paragraf Soru Tipleri:

#### 1. Ana Fikir/Ana Düşünce (EN ÇOK ÇIKAN!)
- Paragrafın tamamında anlatılmak istenen düşünce
- Genellikle ilk veya son cümlede bulunur
- Soru: "Bu parçada aşağıdakilerden hangisi vurgulanmıştır?"

#### 2. Konunun Belirlenmesi
- Paragrafta sözü edilen varlık, olay veya durum
- Bir kelime veya kelime grubuyla ifade edilir
- Soru: "Bu parçanın konusu aşağıdakilerden hangisidir?"

#### 3. Paragrafın Amacı
- Paragrafın niçin yazıldığı
- Bilgilendirme, ikna etme, eleştirme, övme vb.
- Soru: "Yazar bu parçada aşağıdakilerden hangisini amaçlamıştır?"

#### 4. Paragrafta Verilen Bilgiler
- Parçada açıkça söylenen veya anlaşılan bilgiler
- Soru: "Bu parçadan aşağıdakilerden hangisi anlaşılmaktadır?"

#### 5. Anlatım Biçimleri
- **Öyküleme:** Olay anlatımı
- **Betimleme:** Tasvir, canlandırma
- **Açıklama:** Bilgi verme
- **Tartışma:** Fikir ileri sürme

#### 6. Anlatım Özellikleri
- Nesnel/Öznel anlatım
- Gerçekçi/Abartılı anlatım
- Ayrıntılı/Yüzeysel anlatım

#### 7. Bağdaşıklık (Cümle Sıralaması)
- Karışık verilen cümleleri doğru sıraya koyma
- Mantıksal akışa dikkat!

#### 8. Cümlenin Yeri
- Paragraftaki boşluğa uygun cümle bulma
- Öncesi ve sonrası ile uyum önemli

#### 9. Boşluk Doldurma
- Paragraftaki boşluğa uygun kelime/kelime grubu bulma

### ✅ Çözüm Stratejileri:

**1. Soru Önce Stratejisi:**
- Önce soruyu okuyun
- Ne sorulduğunu anlayın
- Sonra paragrafı okuyun

**2. Anahtar Kelimeler:**
- İlk ve son cümlelere DİKKAT!
- Tekrar eden kavramları işaretleyin
- Zıtlık bildiren kelimelere dikkat

**3. Bağlaçlar:**
- **Sebep-Sonuç:** çünkü, dolayısıyla, bu nedenle
- **Karşıtlık:** ancak, fakat, oysa, buna karşın
- **Ekleme:** ayrıca, bunun yanında, hem de
- **Açıklama:** yani, başka bir deyişle

**4. Eleme Yöntemi:**
- Kesinlikle yanlış olan seçenekleri eleyin
- Kalan seçenekler arasında en uygununu seçin

**5. Zaman Yönetimi:**
- Paragraf başına 1.5-2 dakika
- Uzun paragraflar için daha fazla süre ayırın
    `,
    examples: [
      {
        question: "Sanat, insanoğlunun varoluşundan bu yana en temel ihtiyaçlarından biri olmuştur. İlkel insanlar mağara duvarlarına yaptıkları resimlerle düşüncelerini aktarırken, modern insan teknoloji sayesinde sanatı dijital ortama taşımıştır. Ancak her dönemde sanatın temel amacı değişmemiştir: İnsanın iç dünyasını dışa vurmak ve toplumla bağ kurmak. Bu yüzden sanat, evrensel bir dil olarak kabul edilir ve kültürler arası iletişimin en güçlü araçlarından biridir.\n\nBu parçada aşağıdakilerden hangisi VURGULANMIŞTIR?",
        options: [
          "A) Sanatın tarihsel gelişim süreci",
          "B) Teknolojinin sanata katkısı",  
          "C) Sanatın evrensel ve değişmez işlevi",
          "D) İlkel insanların sanat anlayışı",
          "E) Modern sanatın dijital boyutu"
        ],
        answer: "C",
        explanation: "Parçada sanatın tarihsel gelişimi anlatılsa da, ASIL VURGU son iki cümlede yapılıyor:\n\n1. 'Her dönemde sanatın temel amacı DEĞİŞMEMİŞTİR'\n2. 'Sanat, evrensel bir dil'\n3. 'Kültürler arası iletişimin en güçlü araçlarından biri'\n\nBu ifadeler sanatın zamana ve yere bağlı olmayan, değişmeyen işlevini vurguluyor. Diğer seçeneklerde geçen kavramlar parçada bahsedilse de, ANA FİKİR değil, YARDIMCI FİKİR olarak kullanılmış."
      },
      {
        question: "Okuma alışkanlığı, sadece bilgi edinme aracı değil, aynı zamanda empati kurma, farklı bakış açılarını anlama ve eleştirel düşünme becerilerini geliştirme aracıdır. Düzenli kitap okuyan bireylerin söz dağarcığı daha geniş, ifade yetenekleri daha güçlüdür. Ayrıca okuma, beyni aktif tutar ve bilişsel yeteneklerin gelişimine katkı sağlar. Günümüzde ekran karşısında geçirilen sürenin artması, okuma alışkanlığını olumsuz etkilese de kitap okuma, insanın kendini geliştirmesinin en temel yollarından biri olmaya devam etmektedir.\n\nBu parçada aşağıdakilerden hangisine değinilmemiştir?",
        options: [
          "A) Okumanın bilişsel gelişime katkısı",
          "B) Okumanın dil becerilerine etkisi",
          "C) Dijital araçların okuma alışkanlığına etkisi",
          "D) Kitap okuma oranlarının yıllara göre değişimi",
          "E) Okumanın empati kurma becerisine katkısı"
        ],
        answer: "D",
        explanation: "Parçada DEĞİNİLENLER:\n✅ A) 'Beyni aktif tutar ve bilişsel yeteneklerin gelişimine katkı'\n✅ B) 'Söz dağarcığı daha geniş, ifade yetenekleri daha güçlü'\n✅ C) 'Ekran karşısında geçirilen sürenin artması, okuma alışkanlığını olumsuz etkiler'\n✅ E) 'Empati kurma... becerilerini geliştirme aracı'\n\n❌ D) Kitap okuma oranlarının YILLARA GÖRE DEĞİŞİMİ hakkında herhangi bir bilgi verilmemiş."
      },
      {
        question: "Modern toplumda stres, neredeyse herkesin yaşadığı bir sorundur. (I) İş yoğunluğu, sosyal baskılar ve ekonomik kaygılar insanları sürekli gergin tutar. (II) Stresin kısa süreli etkileri arasında baş ağrısı, uykusuzluk ve konsantrasyon bozukluğu sayılabilir. (III) Ancak uzun süreli stres, kalp hastalıkları, depresyon ve bağışıklık sisteminin zayıflaması gibi ciddi sağlık sorunlarına yol açabilir. (IV) Bu nedenle stres yönetimi teknikleri öğrenmek ve düzenli olarak uygulamak oldukça önemlidir. (V)\n\n'Yoga, meditasyon ve düzenli egzersiz, stresin azaltılmasında etkili yöntemlerdir.' cümlesi parçaya numaralanmış yerlerden hangisine getirilmelidir?",
        options: [
          "A) I",
          "B) II",
          "C) III",
          "D) IV",
          "E) V"
        ],
        answer: "E",
        explanation: "Cümle akışı:\n\n(IV) 'Stres yönetimi teknikleri öğrenmek önemlidir' \n↓\n(V) 'Yoga, meditasyon ve egzersiz etkili yöntemlerdir' ← BURAYA!\n\nMantık:\n- IV numaralı cümlede 'stres yönetimi TEKNİKLERİ' nden bahsediliyor\n- Verilecek cümle bu tekniklerin ÖRNEKLERINI veriyor (yoga, meditasyon, egzersiz)\n- Bu yüzden IV'ten SONRA gelmelidir\n\nNeden diğerleri değil?\n- I: Henüz stresin etkileri anlatılmamış\n- II-III: Stresin zararlı etkileri anlatılırken örnek vermek uygunsuz\n- IV: Cümle IV'ten ÖNCE gelirse, sonrasındaki 'Bu nedenle' bağlacı anlamsız kalır"
      }
    ],
    tips: [
      "Her gün 20-30 paragraf çözün ve analizini yapın",
      "Yanlış cevapladığınız soruları tekrar okuyun ve hatanızı anlayın",
      "Farklı metin türlerini okuyun: makale, deneme, öykü, şiir",
      "Süre tutarak çözün: Paragraf başına 1.5-2 dakika hedefleyin",
      "İlk ve son cümleleri MUTLAKA dikkatle okuyun",
      "Bağlaçlara (çünkü, ancak, dolayısıyla) özel dikkat gösterin",
      "Seçenekleri okurken eleme yöntemi kullanın",
      "Parçada geçmeyen bilgilere dikkat edin (değinilmemiştir soruları için)"
    ]
  },

  "tyt-turkce-Sözcükte Anlam": {
    title: "Sözcükte Anlam",
    description: "Kelimelerin anlamları, eş-zıt anlamlı kelimeler ve gerçek-mecaz anlam.",
    importance: "3-4 soru",
    content: `
### 📝 Sözcükte Anlam Konuları:

#### 1. Gerçek ve Mecaz Anlam
**Gerçek Anlam:** Kelimenin sözlükteki ilk anlamı
- Örnek: "Bahçede elma ağacı var." (gerçek anlam)

**Mecaz Anlam:** Kelimenin benzetme, aktarma yoluyla kazandığı anlam
- Örnek: "O, ailesinin göz bebeği." (mecaz anlam - en değerli kişi)

#### 2. Yan Anlam ve Çağrışım
**Yan Anlam:** Kelimenin zaman içinde kazandığı ek anlamlar
- Örnek: "Tilki" → hem hayvan, hem de "kurnaz insan"

**Çağrışım:** Kelimenin zihnimizde uyandırdığı duygular
- "Beyaz" → saflık, temizlik
- "Kara" → kötülük, üzüntü

#### 3. Eş Anlamlı Kelimeler (Sinonim)
Anlamları birbirine çok yakın veya aynı olan kelimeler
- yüz = çehre = sima
- güzel = hoş = şirin
- öğretmen = muallim

**DİKKAT:** TAM eş anlamlı yoktur, her kelime farklı bağlamda kullanılır!

#### 4. Zıt Anlamlı Kelimeler (Antonim)
Anlamları birbirine zıt olan kelimeler
- güzel ↔ çirkin
- akıllı ↔ aptal
- gelmek ↔ gitmek

#### 5. Terim Anlam
Bir bilim veya sanat dalına özgü özel anlam
- "Basınç" → Fizik terimi
- "Özne" → Dil bilgisi terimi
- "Perde" → Müzik terimi

#### 6. Özel İsim - Cins İsim
**Özel İsim:** Bir varlığa verilen özel ad (Büyük harfle başlar)
- Ankara, Mehmet, Türkiye

**Cins İsim:** Aynı cinsten varlıklara verilen genel ad
- şehir, insan, ülke

#### 7. Deyim ve Atasözleri
**Deyim:** Genellikle gerçek anlamından uzaklaşmış söz öbeği
- "Gözüm tutmadı" = Beğenmedim
- "Ağzı kulaklarında" = Çok mutlu

**Atasözü:** Halk arasında söylenmiş, öğüt veren kalıplaşmış söz
- "Damlaya damlaya göl olur"
- "Mart kapıdan baktırır, kazma kürek yaktırır"
    `,
    examples: [
      {
        question: "Aşağıdaki cümlelerin hangisinde altı çizili sözcük mecaz anlamda kullanılmıştır?",
        options: [
          "A) Bahçedeki çiçekler çok güzel kokuyordu.",
          "B) Projenin başarısı için elimden geleni yaptım.",
          "C) Sabahleyin kuşların sesi beni uyandırdı.",
          "D) Annem bana yeni bir kitap aldı.",
          "E) Okulun kapısı yeşil renge boyandı."
        ],
        answer: "B",
        explanation: "'Elimden geleni yapmak' deyimidir ve MECAZ anlamdadır.\n\n- Gerçek anlam: Fiziksek olarak elimizle bir şey yapmak\n- Mecaz anlam: Gücümüz yettiğince çaba göstermek\n\nDiğer seçeneklerdeki tüm kelimeler GERÇEK anlamda kullanılmış:\n- Çiçekler gerçekten kokuyor\n- Kuşlar gerçekten ses çıkarıyor\n- Kitap gerçek bir nesne\n- Kapı gerçekten boyanmış"
      }
    ],
    tips: [
      "Deyimleri ve atasözlerini ezberleyin (en az 100 deyim!)",
      "Kelimeleri cümle içinde değerlendirin, tek başına değil",
      "Gerçek-mecaz anlam ayırımında 'gerçekten mi, benzetme mi?' sorusunu sorun",
      "Eş anlamlı kelimelerin hepsinin TAM aynı olmadığını unutmayın"
    ]
  },

  // ... Diğer konular için de benzer şekilde detaylı içerik eklenecek
  // Şimdi sadece örnek olarak birkaç konu daha ekliyorum
};

export default comprehensiveTopicContent;
