export const yksData = {
  tyt: {
    name: "TYT",
    fullName: "Temel Yeterlilik Testi",
    totalQuestions: 120,
    duration: 165,
    subjects: [
      {
        id: "turkce",
        name: "Türkçe",
        questions: 40,
        color: "#3b82f6",
        topics: [
          { name: "Paragraf", questions: "22-25", priority: "high", description: "EN ÇOK SORU ÇIKAN BÖLÜM" },
          { name: "Sözcükte Anlam", questions: "3-4", priority: "medium" },
          { name: "Söz Yorumu", questions: "2-3", priority: "medium" },
          { name: "Cümlede Anlam", questions: "2-3", priority: "medium" },
          { name: "Ses Bilgisi", questions: "1", priority: "low" },
          { name: "Yazım Kuralları", questions: "1-2", priority: "low" },
          { name: "Sözcük Yapısı", questions: "1-2", priority: "low" },
          { name: "Sözcük Türleri", questions: "1-2", priority: "low" },
          { name: "Fiiller", questions: "1-2", priority: "low" },
          { name: "Cümle Bilgisi", questions: "1-2", priority: "low" }
        ]
      },
      {
        id: "matematik",
        name: "Matematik",
        questions: 40,
        color: "#10b981",
        topics: [
          { name: "Problemler", questions: "12-15", priority: "high", description: "EN ÇOK SORU ÇIKAN BÖLÜM" },
          { name: "Geometri", questions: "8-9", priority: "high", description: "ÇOK ÖNEMLİ" },
          { name: "Fonksiyonlar", questions: "2-3", priority: "medium" },
          { name: "Temel Kavramlar", questions: "3-4", priority: "medium" },
          { name: "Üslü ve Köklü Sayılar", questions: "2-3", priority: "medium" },
          { name: "Permütasyon-Kombinasyon", questions: "1-2", priority: "medium" },
          { name: "Olasılık", questions: "1-2", priority: "medium" },
          { name: "Veri-İstatistik", questions: "1-2", priority: "low" }
        ]
      },
      {
        id: "fizik",
        name: "Fizik",
        questions: 7,
        color: "#f59e0b",
        topics: [
          { name: "Hareket ve Kuvvet", questions: "1-2", priority: "high" },
          { name: "Enerji", questions: "1", priority: "medium" },
          { name: "Elektrik ve Manyetizma", questions: "1", priority: "medium" },
          { name: "Optik", questions: "1", priority: "medium" },
          { name: "Dalgalar", questions: "1", priority: "low" },
          { name: "Basınç", questions: "1", priority: "low" }
        ]
      },
      {
        id: "kimya",
        name: "Kimya",
        questions: 7,
        color: "#8b5cf6",
        topics: [
          { name: "Atom ve Periyodik Sistem", questions: "1-2", priority: "high" },
          { name: "Kimyasal Bağlar", questions: "1-2", priority: "high", description: "ÇOK ÇIKAN" },
          { name: "Mol Kavramı", questions: "1-2", priority: "high", description: "ÇOK ÇIKAN" },
          { name: "Kimya Bilimi", questions: "1", priority: "medium" },
          { name: "Maddenin Halleri", questions: "1", priority: "low" }
        ]
      },
      {
        id: "biyoloji",
        name: "Biyoloji",
        questions: 6,
        color: "#14b8a6",
        topics: [
          { name: "Hücre ve Organeller", questions: "1-2", priority: "high", description: "ÇOK ÇIKAN" },
          { name: "Hücre Bölünmeleri", questions: "1", priority: "medium" },
          { name: "Sistemler", questions: "1", priority: "medium" },
          { name: "Ekoloji", questions: "1", priority: "medium" }
        ]
      },
      {
        id: "tarih",
        name: "Tarih",
        questions: 5,
        color: "#ef4444",
        topics: [
          { name: "Osmanlı Tarihi", questions: "2", priority: "high" },
          { name: "Türk-İslam Devletleri", questions: "1", priority: "medium" },
          { name: "Cumhuriyet Dönemi", questions: "1-2", priority: "medium" }
        ]
      },
      {
        id: "cografya",
        name: "Coğrafya",
        questions: 5,
        color: "#06b6d4",
        topics: [
          { name: "Fiziki Coğrafya", questions: "2", priority: "high" },
          { name: "Beşeri Coğrafya", questions: "2", priority: "medium" },
          { name: "Türkiye Coğrafyası", questions: "1", priority: "medium" }
        ]
      },
      {
        id: "felsefe",
        name: "Felsefe",
        questions: 5,
        color: "#a855f7",
        topics: [
          { name: "Mantık", questions: "2", priority: "high" },
          { name: "Felsefe Tarihi", questions: "2", priority: "medium" },
          { name: "Bilgi Felsefesi", questions: "1", priority: "medium" }
        ]
      },
      {
        id: "din",
        name: "Din Kültürü",
        questions: 5,
        color: "#ec4899",
        topics: [
          { name: "İslam Dini", questions: "3", priority: "high" },
          { name: "İbadetler", questions: "1", priority: "medium" },
          { name: "Dinler Tarihi", questions: "1", priority: "low" }
        ]
      }
    ]
  },
  ayt: {
    name: "AYT",
    fullName: "Alan Yeterlilik Testi",
    totalQuestions: 80,
    duration: 180,
    subjects: [
      {
        id: "matematik",
        name: "Matematik",
        questions: 40,
        color: "#10b981",
        topics: [
          { name: "Limit-Türev-İntegral", questions: "10-14", priority: "high", description: "EN ÇOK SORU ÇIKAN BÖLÜM" },
          { name: "Fonksiyonlar", questions: "4-5", priority: "high", description: "ÖNEMLİ" },
          { name: "Trigonometri", questions: "3-4", priority: "high", description: "ÖNEMLİ" },
          { name: "Polinomlar", questions: "2-3", priority: "medium" },
          { name: "Permütasyon-Kombinasyon", questions: "2-3", priority: "medium" },
          { name: "Olasılık", questions: "2", priority: "medium" },
          { name: "Geometri", questions: "3-4", priority: "medium" }
        ]
      },
      {
        id: "fizik",
        name: "Fizik",
        questions: 14,
        color: "#f59e0b",
        topics: [
          { name: "Elektrik ve Manyetizma", questions: "4-5", priority: "high", description: "EN ÇOK SORU ÇIKAN BÖLÜM" },
          { name: "Kuvvet ve Hareket", questions: "3-4", priority: "high", description: "ÇOK ÖNEMLİ" },
          { name: "Modern Fizik", questions: "2-3", priority: "high", description: "ÖNEMLİ" },
          { name: "Dalgalar", questions: "2", priority: "medium" },
          { name: "Optik", questions: "1-2", priority: "medium" }
        ]
      },
      {
        id: "kimya",
        name: "Kimya",
        questions: 13,
        color: "#8b5cf6",
        topics: [
          { name: "Organik Kimya", questions: "3-4", priority: "high", description: "EN ÇOK SORU ÇIKAN BÖLÜM" },
          { name: "Elektrokimya", questions: "2-3", priority: "high", description: "ÇOK ÖNEMLİ" },
          { name: "Asit-Baz Dengesi", questions: "1-2", priority: "high", description: "ÇOK ÇIKAN" },
          { name: "Çözeltiler", questions: "2", priority: "medium" },
          { name: "Kimyasal Denge", questions: "1-2", priority: "medium" }
        ]
      },
      {
        id: "biyoloji",
        name: "Biyoloji",
        questions: 13,
        color: "#14b8a6",
        topics: [
          { name: "Sistemler Fizyolojisi", questions: "4-5", priority: "high", description: "ÇOK ÖNEMLİ" },
          { name: "Genetik ve DNA", questions: "3-4", priority: "high", description: "EN ÇOK SORU ÇIKAN BÖLÜM" },
          { name: "Bitki Biyolojisi", questions: "1-2", priority: "medium" },
          { name: "Enerji İlişkileri", questions: "1-2", priority: "medium" },
          { name: "Ekoloji", questions: "1-2", priority: "medium" }
        ]
      },
      {
        id: "edebiyat",
        name: "Türk Dili ve Edebiyatı",
        questions: 24,
        color: "#3b82f6",
        topics: [
          { name: "Cumhuriyet Dönemi", questions: "6-8", priority: "high", description: "EN ÇOK SORU ÇIKAN DÖNEM" },
          { name: "Metin Bilgisi", questions: "4-5", priority: "high" },
          { name: "Tanzimat Dönemi", questions: "3-4", priority: "high", description: "ÇOK ÇIKAN" },
          { name: "Divan Edebiyatı", questions: "1-2", priority: "medium" },
          { name: "Servet-i Fünun", questions: "2-3", priority: "medium" }
        ]
      },
      {
        id: "tarih",
        name: "Tarih-1",
        questions: 10,
        color: "#ef4444",
        topics: [
          { name: "Osmanlı Tarihi", questions: "4-5", priority: "high" },
          { name: "Türk-İslam Devletleri", questions: "3", priority: "medium" },
          { name: "Cumhuriyet Dönemi", questions: "2-3", priority: "medium" }
        ]
      },
      {
        id: "cografya",
        name: "Coğrafya-1",
        questions: 6,
        color: "#06b6d4",
        topics: [
          { name: "Beşeri Coğrafya", questions: "3", priority: "high" },
          { name: "Türkiye Coğrafyası", questions: "2", priority: "medium" },
          { name: "Fiziki Coğrafya", questions: "1", priority: "medium" }
        ]
      }
    ]
  }
};

export const studyTips = [
  {
    title: "YÜKSEK ÖNCELİKLİ Konular",
    description: "'EN ÇOK SORU ÇIKAN BÖLÜM' veya 'ÇOK ÖNEMLİ' işaretli konulara öncelik verin",
    icon: "⚡"
  },
  {
    title: "Paragraf Çalışması",
    description: "Günde en az 30 dakika paragraf çözün (TYT Türkçe'nin %60'ı)",
    icon: "📖"
  },
  {
    title: "Matematik Problemler",
    description: "Çok çeşitli problem tipleri çözün (TYT'nin %30-40'ı)",
    icon: "🔢"
  },
  {
    title: "AYT Limit-Türev-İntegral",
    description: "AYT Matematik'in %25-35'i bu konulardan çıkıyor",
    icon: "📈"
  },
  {
    title: "Düzenli Tekrar",
    description: "Her konuyu en az 3 kez tekrar edin ve not tutun",
    icon: "🔄"
  },
  {
    title: "Deneme Sınavları",
    description: "Haftada en az 1 tam deneme çözün ve analizini yapın",
    icon: "📝"
  }
];

export const getPriorityColor = (priority) => {
  switch(priority) {
    case 'high': return 'bg-red-100 text-red-700 border-red-300';
    case 'medium': return 'bg-yellow-100 text-yellow-700 border-yellow-300';
    case 'low': return 'bg-green-100 text-green-700 border-green-300';
    default: return 'bg-gray-100 text-gray-700 border-gray-300';
  }
};

export const getPriorityLabel = (priority) => {
  switch(priority) {
    case 'high': return 'Yüksek Öncelik';
    case 'medium': return 'Orta Öncelik';
    case 'low': return 'Düşük Öncelik';
    default: return 'Normal';
  }
};
