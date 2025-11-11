// Cümle Bilgisi
export const cumleBilgisiContent = `<div class="space-y-4">
  <div class="bg-gradient-to-r from-slate-50 to-gray-50 p-4 rounded-xl border-l-4 border-slate-600">
    <h3 class="text-2xl font-bold text-slate-900 mb-3">🏛️ Cümle Bilgisi</h3>
    <p class="text-gray-800">Sözcük grupları, cümle ögeleri, cümle türleri, anlatım bozukluğu. TYT'de 1-2 soru çıkar.</p>
  </div>
  <div class="bg-white border-2 border-slate-200 rounded-xl p-4">
    <h4 class="font-bold text-xl mb-3 text-slate-900">🔗 1. Sözcük Grupları</h4>
    <div class="bg-slate-50 p-3 rounded-lg space-y-1">
      <p class="text-xs"><strong>İsim Tamlaması:</strong> Evin kapısı</p>
      <p class="text-xs"><strong>Sıfat Tamlaması:</strong> Güzel çocuk</p>
      <p class="text-xs"><strong>Sıfat-Fiil Grubu:</strong> Koşan çocuk</p>
      <p class="text-xs"><strong>İsim-Fiil Grubu:</strong> Kitap okumak</p>
    </div>
  </div>
  <div class="bg-white border-2 border-gray-200 rounded-xl p-4">
    <h4 class="font-bold text-xl mb-3 text-gray-900">📊 2. Cümlenin Ögeleri</h4>
    <div class="bg-gray-50 p-3 rounded-lg space-y-1">
      <p class="text-sm"><strong>Yüklem:</strong> Fiil/ek fiil (geldi, öğretmendir)</p>
      <p class="text-sm"><strong>Özne:</strong> Kim? Ne? (Ahmet geldi)</p>
      <p class="text-sm"><strong>Nesne:</strong> Neyi? (Kitabı okudu)</p>
      <p class="text-sm"><strong>Dolaylı Tümleç:</strong> Kime? Nerede? (Eve geldi)</p>
    </div>
  </div>
  <div class="bg-white border-2 border-zinc-200 rounded-xl p-4">
    <h4 class="font-bold text-xl mb-3 text-zinc-900">📝 3. Cümle Türleri</h4>
    <div class="bg-zinc-50 p-3 rounded-lg space-y-1">
      <p class="text-sm"><strong>Yüklemine göre:</strong> Fiil, İsim</p>
      <p class="text-sm"><strong>Anlamına göre:</strong> Olumlu, Olumsuz, Soru, Emir, İstek</p>
      <p class="text-sm"><strong>Yapısına göre:</strong> Basit, Birleşik, Sıralı, Bağlı</p>
    </div>
  </div>
  <div class="bg-white border-2 border-stone-200 rounded-xl p-4">
    <h4 class="font-bold text-xl mb-3 text-stone-900">⚠️ 4. Anlatım Bozukluğu</h4>
    <div class="bg-stone-50 p-3 rounded-lg">
      <p class="text-sm">Cümlede anlamı bozan yapısal hatalar:</p>
      <p class="text-xs mt-1">• Gereksiz kelime tekrarı</p>
      <p class="text-xs">• Özne-yüklem uyumsuzluğu</p>
      <p class="text-xs">• Zaman uyumsuzluğu</p>
    </div>
  </div>
</div>`;

export const cumleBilgisiExamples = [
  {
    question: "'Ahmet kitabı okudu' cümlesinde nesne hangisidir?",
    options: ["A) Ahmet", "B) kitabı", "C) okudu", "D) kitap", "E) oku"],
    answer: "B",
    explanation: "'kitabı' nesne (neyi okudu? → kitabı)."
  },
  {
    question: "'Güzel çocuk' hangi sözcük grubudur?",
    options: ["A) İsim tamlaması", "B) Sıfat tamlaması", "C) Sıfat-fiil grubu", "D) İsim-fiil grubu", "E) Edat grubu"],
    answer: "B",
    explanation: "Sıfat (güzel) + İsim (çocuk) = Sıfat tamlaması."
  },
  {
    question: "Aşağıdakilerden hangisinde anlatım bozukluğu vardır?",
    options: ["A) Kitap okudum.", "B) Eve gittim.", "C) Bugün dün geldi.", "D) Ahmet koştu.", "E) Çocuk oynadı."],
    answer: "C",
    explanation: "'Bugün dün geldi' zaman uyumsuzluğu var (bugün≠dün)."
  },
  {
    question: "'Ahmet öğretmendir' cümlesinin yüklemi hangi türdedir?",
    options: ["A) Fiil", "B) İsim", "C) Sıfat", "D) Zarf", "E) Bağlaç"],
    answer: "B",
    explanation: "'öğretmendir' isim+ek fiil = İsim cümlesi yüklemi."
  }
];

export const cumleBilgisiTips = [
  "Yüklemi bul, sonra özneyi (kim/ne?)",
  "Nesne 'neyi/ney' sorusuyla bulunur",
  "Sıfat tamlamasında tamlayan sıfattır",
  "Anlatım bozukluğunda mantık hatası arayın"
];
