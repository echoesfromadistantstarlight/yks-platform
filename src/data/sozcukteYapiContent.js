// Sözcükte Yapı
export const sozcukteYapiContent = `<div class="space-y-4">
  <div class="bg-gradient-to-r from-emerald-50 to-green-50 p-4 rounded-xl border-l-4 border-emerald-600">
    <h3 class="text-2xl font-bold text-emerald-900 mb-3">🏗️ Sözcükte Yapı</h3>
    <p class="text-gray-800">Yapım ve çekim ekleri. TYT'de 1-2 soru çıkar.</p>
  </div>
  <div class="bg-white border-2 border-emerald-200 rounded-xl p-4">
    <h4 class="font-bold text-xl mb-3 text-emerald-900">⚙️ 1. Yapım Ekleri</h4>
    <div class="bg-emerald-50 p-3 rounded-lg space-y-1">
      <p class="text-sm"><strong>İsimden İsim:</strong> -lık/-lik, -cı/-ci</p>
      <p class="text-sm"><strong>İsimden Fiil:</strong> -la/-le, -laş/-leş</p>
      <p class="text-sm"><strong>Fiilden İsim:</strong> -ma/-me, -ış/-iş</p>
      <p class="text-sm"><strong>Fiilden Fiil:</strong> -t, -r, -n</p>
    </div>
  </div>
  <div class="bg-white border-2 border-green-200 rounded-xl p-4">
    <h4 class="font-bold text-xl mb-3 text-green-900">📊 2. Çekim Ekleri</h4>
    <div class="bg-green-50 p-3 rounded-lg space-y-1">
      <p class="text-sm"><strong>İsim Çekim:</strong> Hal, İyelik, Çoğul</p>
      <p class="text-sm"><strong>Fiil Çekim:</strong> Kip, Kişi, Zaman</p>
    </div>
  </div>
  <div class="bg-white border-2 border-lime-200 rounded-xl p-4">
    <h4 class="font-bold text-xl mb-3 text-lime-900">🔗 3. Ek Fiil</h4>
    <div class="bg-lime-50 p-3 rounded-lg">
      <p class="text-sm">i- yardımcı fiili: -dır/-dir (bildirme)</p>
      <p class="text-sm text-xs mt-1">Örnek: "O öğretmendir."</p>
    </div>
  </div>
</div>`;

export const sozcukteYapiExamples = [
  {
    question: "Aşağıdakilerden hangisinde yapım eki vardır?",
    options: ["A) evler", "B) geldi", "C) masada", "D) güzellik", "E) kitabım"],
    answer: "D",
    explanation: "'güzellik' kelimesinde -lik yapım eki var. Diğerleri çekim eki."
  },
  {
    question: "'Okul-laş-tır-ma' kelimesinde kaç yapım eki vardır?",
    options: ["A) 1", "B) 2", "C) 3", "D) 4", "E) 0"],
    answer: "C",
    explanation: "-laş, -tır, -ma → 3 yapım eki var."
  },
  {
    question: "Ek fiil hangisinde kullanılmıştır?",
    options: ["A) Geldi.", "B) O öğretmendir.", "C) Koşuyor.", "D) Okudum.", "E) Gitti."],
    answer: "B",
    explanation: "'-dir' ek fiilidir (bildirme)."
  }
];

export const sozcukteYapiTips = [
  "Yapım eki=yeni kelime oluşturur, Çekim eki=kelimeyi görevlendirir",
  "Ek fiil 'i-' yardımcı fiilinden gelir",
  "Yapım ekleri kökten sonra, çekim eklerinden önce gelir"
];
