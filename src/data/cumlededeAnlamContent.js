// Cümlede Anlam konusu
export const cumlededeAnlamContent = `
<div class="space-y-4">
  <div class="bg-gradient-to-r from-indigo-50 to-blue-50 p-4 rounded-xl border-l-4 border-indigo-600">
    <h3 class="text-2xl font-bold text-indigo-900 mb-3">📝 Cümlede Anlam</h3>
    <p class="text-gray-800 leading-relaxed">
      Cümledeki kelimelerin bir araya gelerek oluşturduğu anlamları inceler. TYT'de 2-3 soru çıkar.
    </p>
  </div>

  <div class="bg-white border-2 border-indigo-200 rounded-xl p-4">
    <h4 class="font-bold text-xl mb-3 text-indigo-900">🔗 1. Deyimleşmiş Birleşik Fiiller</h4>
    <div class="bg-indigo-50 p-3 rounded-lg">
      <p class="text-gray-700 mb-2">Bir isim veya sıfatla bir yardımcı fiilin birleşmesiyle oluşur.</p>
      <div class="space-y-1">
        <p class="text-sm">• <strong>Yardım etmek:</strong> yardım (isim) + et (yardımcı fiil)</p>
        <p class="text-sm">• <strong>Kavga etmek, namaz kılmak, borç vermek</strong></p>
      </div>
    </div>
  </div>

  <div class="bg-white border-2 border-purple-200 rounded-xl p-4">
    <h4 class="font-bold text-xl mb-3 text-purple-900">🤝 2. Anlamca Kaynaşmış Söz Öbekleri</h4>
    <div class="bg-purple-50 p-3 rounded-lg">
      <p class="text-gray-700 mb-2">İki kelime birleşip tek kavram ifade eder.</p>
      <p class="text-sm">• Kara haber, beyaz eşya, sarı basın, yeşil alan</p>
    </div>
  </div>

  <div class="bg-white border-2 border-pink-200 rounded-xl p-4">
    <h4 class="font-bold text-xl mb-3 text-pink-900">🎨 3. Cümlenin Gerçek ve Mecaz Anlamları</h4>
    <div class="bg-pink-50 p-3 rounded-lg">
      <p class="text-gray-700 mb-2"><strong>Gerçek:</strong> "Güneş doğdu."</p>
      <p class="text-gray-700"><strong>Mecaz:</strong> "Umutlar doğdu."</p>
    </div>
  </div>

  <div class="bg-white border-2 border-orange-200 rounded-xl p-4">
    <h4 class="font-bold text-xl mb-3 text-orange-900">✨ 4. Söz Sanatları</h4>
    <div class="bg-orange-50 p-3 rounded-lg space-y-2">
      <p class="text-sm"><strong>Benzetme:</strong> "Aslan gibi cesur"</p>
      <p class="text-sm"><strong>Abartma:</strong> "Ac ından ölüyorum"</p>
      <p class="text-sm"><strong>Kişileştirme:</strong> "Doğa uyanıyor"</p>
    </div>
  </div>
</div>
`;

export const cumlededeAnlamExamples = [
  {
    question: "Aşağıdakilerden hangisi deyimleşmiş birleşik fiildir?",
    options: ["A) Koşmak", "B) Yardım etmek", "C) Gelmek", "D) Okumak", "E) Yazmak"],
    answer: "B",
    explanation: "'Yardım etmek' isim + yardımcı fiil yapısındadır."
  },
  {
    question: "'Kara haber' ifadesi neyi gösterir?",
    options: ["A) Siyah renk", "B) Kötü haber", "C) Gece haberi", "D) Karanlık", "E) Yazı"],
    answer: "B",
    explanation: "Anlamca kaynaşmış: kara=kötü, haber=bilgi"
  }
];

export const cumlededeAnlamTips = [
  "Deyimleşmiş fiillerde isim+fiil yapısını bulun",
  "Kaynaşmış öbeklerde tek kavram oluşur",
  "Mecaz cümlede benzetme/aktarma vardır",
  "Söz sanatları dili güzelleştirir"
];
