// Sözcük Türleri
export const sozcukTurleriContent = `<div class="space-y-4">
  <div class="bg-gradient-to-r from-violet-50 to-purple-50 p-4 rounded-xl border-l-4 border-violet-600">
    <h3 class="text-2xl font-bold text-violet-900 mb-3">📚 Sözcük Türleri</h3>
    <p class="text-gray-800">İsim, zamdir, sıfat, zarf, edat, bağlaç, ünlem. TYT'de 1-2 soru çıkar.</p>
  </div>
  <div class="bg-white border-2 border-violet-200 rounded-xl p-4">
    <h4 class="font-bold text-xl mb-3 text-violet-900">📦 1. İsimler-Zamirler-Sıfatlar-Zarflar</h4>
    <div class="bg-violet-50 p-3 rounded-lg space-y-1">
      <p class="text-xs"><strong>İsim:</strong> Varlık, kavram adı (masa, sevgi)</p>
      <p class="text-xs"><strong>Zamir:</strong> İsim yerine (ben, sen, o)</p>
      <p class="text-xs"><strong>Sıfat:</strong> İsmi niteler (güzel, büyük)</p>
      <p class="text-xs"><strong>Zarf:</strong> Fiili niteler (hızlı, çok)</p>
    </div>
  </div>
  <div class="bg-white border-2 border-purple-200 rounded-xl p-4">
    <h4 class="font-bold text-xl mb-3 text-purple-900">🔗 2. Edat</h4>
    <div class="bg-purple-50 p-3 rounded-lg">
      <p class="text-sm">Kelimeler arası ilişki: ile, gibi, kadar, için</p>
    </div>
  </div>
  <div class="bg-white border-2 border-fuchsia-200 rounded-xl p-4">
    <h4 class="font-bold text-xl mb-3 text-fuchsia-900">➕ 3. Bağlaç & Ünlem</h4>
    <div class="bg-fuchsia-50 p-3 rounded-lg space-y-1">
      <p class="text-sm"><strong>Bağlaç:</strong> ve, ama, veya, çünkü</p>
      <p class="text-sm"><strong>Ünlem:</strong> ah, of, hey, vay</p>
    </div>
  </div>
</div>`;

export const sozcukTurleriExamples = [
  {
    question: "'çok güzel ev' tamlamasında kelime türleri sırasıyla nedir?",
    options: ["A) sıfat-sıfat-isim", "B) zarf-sıfat-isim", "C) zarf-zarf-isim", "D) isim-sıfat-isim", "E) sıfat-isim-sıfat"],
    answer: "B",
    explanation: "'çok' zarf (fiili/sıfatı niteler), 'güzel' sıfat, 'ev' isim."
  },
  {
    question: "Aşağıdakilerden hangisi edattır?",
    options: ["A) ve", "B) ama", "C) gibi", "D) ah", "E) çünkü"],
    answer: "C",
    explanation: "'gibi' edattır. 've, ama, çünkü' bağlaç, 'ah' ünlemdir."
  },
  {
    question: "'ben, sen, o' kelimeleri hangi sözcük türündedir?",
    options: ["A) İsim", "B) Sıfat", "C) Zamir", "D) Zarf", "E) Bağlaç"],
    answer: "C",
    explanation: "Zamirler isim yerine kullanılır."
  }
];

export const sozcukTurleriTips = [
  "Sıfat ismi niteler, zarf fiili/sıfatı/zarfı niteler",
  "Edat ilişki kurar (gibi, ile, kadar)",
  "Bağlaç cümle/kelime bağlar (ve, ama)"
];
