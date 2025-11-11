// Yazım Kuralları ve Noktalama
export const yazimKurallariContent = `<div class="space-y-4">
  <div class="bg-gradient-to-r from-rose-50 to-pink-50 p-4 rounded-xl border-l-4 border-rose-600">
    <h3 class="text-2xl font-bold text-rose-900 mb-3">✍️ Yazım Kuralları ve Noktalama</h3>
    <p class="text-gray-800">Doğru yazım ve noktalama. TYT'de 1-2 soru çıkar.</p>
  </div>
  <div class="bg-white border-2 border-rose-200 rounded-xl p-4">
    <h4 class="font-bold text-xl mb-3 text-rose-900">🔤 1. Büyük-Küçük Harf & Bitişik-Ayrı Yazım</h4>
    <div class="bg-rose-50 p-3 rounded-lg space-y-2">
      <p class="text-sm"><strong>Büyük:</strong> Özel isimler (Ankara, Türkçe)</p>
      <p class="text-sm"><strong>Bitişik:</strong> bugün, yarın, belki</p>
      <p class="text-sm"><strong>Ayrı:</strong> bir arada, hiç değil, pek çok</p>
    </div>
  </div>
  <div class="bg-white border-2 border-pink-200 rounded-xl p-4">
    <h4 class="font-bold text-xl mb-3 text-pink-900">.,\!? 2. Noktalama İşaretleri</h4>
    <div class="bg-pink-50 p-3 rounded-lg space-y-1">
      <p class="text-xs"><strong>Nokta (.):</strong> Cümle sonu</p>
      <p class="text-xs"><strong>Virgül (,):</strong> Ayırma, sıralama</p>
      <p class="text-xs"><strong>Noktalı virgül (;):</strong> Uzun cümlelerde ayırma</p>
      <p class="text-xs"><strong>İki nokta (:):</strong> Açıklama, sıralama</p>
      <p class="text-xs"><strong>Soru işareti (?):</strong> Soru cümlesi</p>
      <p class="text-xs"><strong>Ünlem (\!):</strong> Duygu, emir</p>
    </div>
  </div>
</div>`;

export const yazimKurallariExamples = [
  {
    question: "Aşağıdakilerden hangisi bitişik yazılır?",
    options: ["A) hiç bir", "B) pek çok", "C) bugün", "D) bir arada", "E) çok güzel"],
    answer: "C",
    explanation: "'bugün' bitişik yazılır, diğerleri ayrı."
  },
  {
    question: "Virgül (,) hangi durumda kullanılmaz?",
    options: ["A) Sıralama", "B) Seslenme", "C) Cümle sonu", "D) Ara cümle", "E) Bağlaç yerine"],
    answer: "C",
    explanation: "Cümle sonunda nokta (.) kullanılır, virgül değil."
  }
];

export const yazimKurallariTips = [
  "Özel isimler büyük harfle başlar",
  "Zaman zarfları genellikle bitişik (bugün, yarın)",
  "Virgül=kısa durak, noktalı virgül=uzun durak"
];
