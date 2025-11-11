// Ses Bilgisi
export const sesBilgisiContent = `<div class="space-y-4">
  <div class="bg-gradient-to-r from-teal-50 to-cyan-50 p-4 rounded-xl border-l-4 border-teal-600">
    <h3 class="text-2xl font-bold text-teal-900 mb-3">🔊 Ses Bilgisi</h3>
    <p class="text-gray-800">Ses olayları ve ünlü-ünsüz uyumları. TYT'de 1 soru çıkar.</p>
  </div>
  <div class="bg-white border-2 border-teal-200 rounded-xl p-4">
    <h4 class="font-bold text-xl mb-3 text-teal-900">🎵 1. Ses Olayları</h4>
    <div class="bg-teal-50 p-3 rounded-lg space-y-2">
      <p class="text-sm"><strong>Ünlü Düşmesi:</strong> "oğul → oğlum"</p>
      <p class="text-sm"><strong>Ünlü Daralması:</strong> "ne → napcak"</p>
      <p class="text-sm"><strong>Ünsüz Yumuşaması:</strong> "kitap → kitabı"</p>
      <p class="text-sm"><strong>Ünsüz Sertleşmesi:</strong> "renk → rengini"</p>
    </div>
  </div>
  <div class="bg-white border-2 border-cyan-200 rounded-xl p-4">
    <h4 class="font-bold text-xl mb-3 text-cyan-900">📐 2. Ünlü-Ünsüz Uyumları</h4>
    <div class="bg-cyan-50 p-3 rounded-lg space-y-2">
      <p class="text-sm"><strong>Büyük Ünlü Uyumu:</strong> a-ı-o-u / e-i-ö-ü</p>
      <p class="text-sm"><strong>Küçük Ünlü Uyumu:</strong> a-e / ı-i / o-ö / u-ü</p>
      <p class="text-sm"><strong>Ünsüz Uyumu:</strong> f,s,t,k,ç,ş,h,p → -yor eki alırken "y" gelir</p>
    </div>
  </div>
</div>`;

export const sesBilgisiExamples = [
  {
    question: "Aşağıdakilerden hangisinde ünsüz yumuşaması vardır?",
    options: ["A) ev", "B) kitabım", "C) masa", "D) kalem", "E) defter"],
    answer: "B",
    explanation: "'kitap' kelimesinde p → b yumuşaması olmuştur."
  },
  {
    question: "Büyük ünlü uyumuna uymayan kelime hangisidir?",
    options: ["A) kalem", "B) anne", "C) elma", "D) portakal", "E) masa"],
    answer: "D",
    explanation: "'portakal' büyük ünlü uyumuna uymaz (o-a-a-a)."
  }
];

export const sesBilgisiTips = [
  "Ses olaylarını örneklerle ezberleyin",
  "Büyük ünlü uyumu: aynı sıradan ünlüler",
  "Küçük ünlü uyumu: ince-ince / kalın-kalın"
];
