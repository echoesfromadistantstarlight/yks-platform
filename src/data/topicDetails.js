// Detaylı konu anlatımları ve örnek sorular
import { improvedTopicDetails } from './improvedTopicDetails';

export const topicDetails = {
  // Improved HTML formatında içerik
  ...improvedTopicDetails,
  
  // Diğer konular buraya eklenecek
  "tyt-turkce-Sözcükte Anlam": {
    title: "Sözcükte Anlam",
    description: "TYT Türkçe'nin EN ÇOK SORU ÇIKAN bölümü. Test'in %55-60'ı sözcükte anlam sorularından oluşur.",
    importance: "2-2.5 soru",
    content: `
<div class="space-y-4">
  <div class="bg-gradient-to-r from-blue-50 to-purple-50 p-4 rounded-xl border-l-4 border-blue-600">
    <h3 class="text-2xl font-bold text-blue-900 mb-3">📚 Sözcükte Anlam Nedir?</h3>
    <p class="text-gray-800 leading-relaxed mb-3">
      Sözcükte anlam, kelimelerin sahip olduğu anlamları, bu anlamların nasıl oluştuğunu ve kullanıldığı yerlere göre nasıl değiştiğini inceleyen konudur. TYT'de genellikle kelimelerin gerçek-mecaz anlamları, eş-zıt anlamlı kelimeler ve deyimler üzerinden sorular sorulur.
    </p>
    <p class="text-gray-700 italic">
      <strong>Yapısı:</strong> Kelime + Anlam İlişkisi + Cümle İçindeki Kullanım şeklinde yapılandırılır.
    </p>
  </div>

  <div class="bg-white border-2 border-indigo-200 rounded-xl p-4">
    <h4 class="font-bold text-xl mb-3 text-indigo-900 flex items-center gap-2">
      <span>📖</span> 1. Gerçek ve Mecaz Anlam
    </h4>
    <div class="space-y-3">
      <div class="bg-indigo-50 p-3 rounded-lg">
        <p class="font-semibold text-indigo-900 mb-2">Gerçek Anlam:</p>
        <p class="text-gray-700">Kelimenin sözlükteki asıl, ilk anlamıdır. Herhangi bir benzetme veya mecaz içermez.</p>
        <p class="text-sm text-indigo-600 mt-2">Örnek: <i>"Bahçede bir <strong>aslan</strong> heykeli var."</i> → Aslan kelimesi gerçek anlamıyla kullanılmış.</p>
      </div>
      
      <div class="bg-purple-50 p-3 rounded-lg">
        <p class="font-semibold text-purple-900 mb-2">Mecaz Anlam:</p>
        <p class="text-gray-700">Kelimenin benzetme, mecaz veya yan anlam yoluyla kazandığı yeni anlamdır.</p>
        <p class="text-sm text-purple-600 mt-2">Örnek: <i>"Ahmet <strong>aslan</strong> gibi çocuk."</i> → Aslan kelimesi "cesur, güçlü" anlamında mecaz.</p>
      </div>
    </div>
  </div>

  <div class="bg-white border-2 border-green-200 rounded-xl p-4">
    <h4 class="font-bold text-xl mb-3 text-green-900 flex items-center gap-2">
      <span>🔄</span> 2. Eş Anlamlı Kelimeler (Sinonim)
    </h4>
    <p class="text-gray-700 mb-3">Farklı söylenişe sahip ancak aynı veya yakın anlama gelen kelimelerdir.</p>
    <div class="grid grid-cols-2 gap-2 bg-green-50 p-3 rounded-lg">
      <div><strong>Yüz</strong> = Çehre, Sima</div>
      <div><strong>Güzel</strong> = Hoş, Latif</div>
      <div><strong>Hızlı</strong> = Çabuk, Süratli</div>
      <div><strong>Mutlu</strong> = Mesut, Bahtiyar</div>
    </div>
    <p class="text-sm text-green-700 mt-2 italic">💡 İpucu: Eş anlamlı kelimeler birebir aynı anlama gelmeyebilir, bağlama göre değişiklik gösterir.</p>
  </div>

  <div class="bg-white border-2 border-red-200 rounded-xl p-4">
    <h4 class="font-bold text-xl mb-3 text-red-900 flex items-center gap-2">
      <span>↔️</span> 3. Zıt Anlamlı Kelimeler (Antonim)
    </h4>
    <p class="text-gray-700 mb-3">Birbirine tamamen karşıt, zıt anlam taşıyan kelimelerdir.</p>
    <div class="grid grid-cols-2 gap-2 bg-red-50 p-3 rounded-lg">
      <div><strong>Sıcak</strong> ↔ Soğuk</div>
      <div><strong>Uzun</strong> ↔ Kısa</div>
      <div><strong>Gündüz</strong> ↔ Gece</div>
      <div><strong>İyi</strong> ↔ Kötü</div>
    </div>
  </div>

  <div class="bg-white border-2 border-amber-200 rounded-xl p-4">
    <h4 class="font-bold text-xl mb-3 text-amber-900 flex items-center gap-2">
      <span>🎭</span> 4. Deyimler ve Atasözleri
    </h4>
    <div class="space-y-2">
      <div class="bg-amber-50 p-3 rounded-lg">
        <p class="font-semibold text-amber-900 mb-1">Deyim:</p>
        <p class="text-gray-700 text-sm">Genellikle gerçek anlamından uzaklaşmış, mecazî anlam kazanmış kalıplaşmış sözlerdir.</p>
        <p class="text-sm text-amber-700 mt-2">Örnek: <i>"Gözü arkada kalmak"</i> = Endişelenmek</p>
      </div>
      
      <div class="bg-orange-50 p-3 rounded-lg">
        <p class="font-semibold text-orange-900 mb-1">Atasözü:</p>
        <p class="text-gray-700 text-sm">Uzun deneyimler sonunda oluşmuş, öğüt veren kalıplaşmış sözlerdir.</p>
        <p class="text-sm text-orange-700 mt-2">Örnek: <i>"Damlaya damlaya göl olur."</i></p>
      </div>
    </div>
  </div>

  <div class="bg-gradient-to-r from-cyan-50 to-blue-50 p-4 rounded-xl border-2 border-cyan-300">
    <h4 class="font-bold text-xl mb-3 text-cyan-900 flex items-center gap-2">
      <span>🎯</span> 5. Sözcükte Anlam Soru Tipleri
    </h4>
    <ul class="space-y-2">
      <li class="flex items-start gap-2">
        <span class="text-cyan-600 font-bold">•</span>
        <span class="text-gray-700">Verilen cümledeki kelimenin anlamını bulma</span>
      </li>
      <li class="flex items-start gap-2">
        <span class="text-cyan-600 font-bold">•</span>
        <span class="text-gray-700">Gerçek veya mecaz anlam ayırt etme</span>
      </li>
      <li class="flex items-start gap-2">
        <span class="text-cyan-600 font-bold">•</span>
        <span class="text-gray-700">Eş veya zıt anlamlı kelime bulma</span>
      </li>
      <li class="flex items-start gap-2">
        <span class="text-cyan-600 font-bold">•</span>
        <span class="text-gray-700">Deyim ve atasözü anlamlarını bilme</span>
      </li>
      <li class="flex items-start gap-2">
        <span class="text-cyan-600 font-bold">•</span>
        <span class="text-gray-700">Kelimenin farklı cümlelerdeki anlamını karşılaştırma</span>
      </li>
    </ul>
  </div>
</div>
    `,
    examples: [
      {
        question: "Aşağıdaki cümlelerin hangisinde altı çizili sözcük gerçek anlamıyla kullanılmıştır?",
        options: [
          "A) Konuşmasıyla herkesi büyüledi.",
          "B) Çocuğun gözleri pırıl pırıl parlıyordu.",
          "C) Güneş doğuda doğar.",
          "D) Kalbim seninle çarpıyor.",
          "E) Sözleri yüreğimi dağladı."
        ],
        answer: "C",
        explanation: "C şıkkındaki 'doğar' kelimesi gerçek anlamıyla (güneşin ufuktan görünmesi) kullanılmıştır. Diğer şıklardaki ifadeler mecaz anlam içerir."
      },
      {
        question: "Aşağıdaki cümlelerin hangisinde altı çizili deyim yanlış kullanılmıştır?",
        options: [
          "A) Sınavda burnundan kıl aldırmadı.",
          "B) Arkadaşının zor durumda olmasına gözünü yumdu.",
          "C) Bu işi göze almak kolay değil.",
          "D) Babasının sözünden çıkmaz.",
          "E) Çocuğun eli ağır, herkesin malını kırar."
        ],
        answer: "E",
        explanation: "'Eli ağır olmak' deyimi cömert olmamak anlamına gelir, malları kırmakla ilgili değildir. O anlamda 'eli ayağına dolaşmak' deyimi kullanılır."
      },
      {
        question: "Aşağıdaki cümlelerin hangisinde 'baş' sözcüğü farklı anlamda kullanılmıştır?",
        options: [
          "A) Baş ağrısından öldü.",
          "B) Köyün başında bir çeşme var.",
          "C) İşin başına geçecek.",
          "D) Baş tacı ederiz.",
          "E) Sınıfın başı o."
        ],
        answer: "B",
        explanation: "B şıkkındaki 'baş' kelimesi 'giriş, ön taraf' anlamında kullanılmıştır. Diğer şıklarda 'lider, önder, önemli' gibi anlamlarda kullanılmıştır."
      }
    ],
    tips: [
      "Her gün 5-10 deyim ve atasözü ezberleyin",
      "Kelimeleri mutlaka cümle içinde değerlendirin",
      "Gerçek-mecaz anlam ayrımında 'benzetme' var mı diye bakın",
      "Eş anlamlı kelimelerin tam aynı olmayabileceğini unutmayın",
      "TYT'de en çok çıkan 100 deyimi mutlaka bilin",
      "Eski Türkçe kökenli kelimelerin anlamlarını öğrenin"
    ]
  },

  "tyt-turkce-Cümle Bilgisi": {
    title: "Cümle Bilgisi",
    description: "Cümle öğeleri ve türleri.",
    importance: "1-2 soru",
    content: `
<div class="space-y-4">
  <div class="bg-purple-50 p-4 rounded-lg">
    <h3 class="text-xl font-bold text-purple-900 mb-2">📐 Cümle Bilgisi</h3>
    <p class="text-gray-700">Cümle öğeleri ve çözümleme</p>
  </div>
</div>
    `,
    examples: [],
    tips: ["Önce yüklemi bul", "Özne 'kim/ne?' sorusuyla bulunur"]
  }
};

// Eksik konular için varsayılan içerik
export const getTopicDetail = (examType, subjectId, topicName) => {
  const key = `${examType}-${subjectId}-${topicName}`;
  return topicDetails[key] || {
    title: topicName,
    description: "Bu konu hakkında detaylı içerik hazırlanıyor...",
    content: `
<div class="bg-yellow-50 p-6 rounded-xl">
  <h3 class="text-2xl font-bold text-yellow-900 mb-3">🚧 İçerik Hazırlanıyor</h3>
  <p class="text-gray-700 text-lg">Bu konu için detaylı anlatım çok yakında eklenecek!</p>
</div>
    `,
    examples: [],
    tips: ["Bu konuyu mutlaka çalışın!", "Bol soru çözün!"]
  };
};
