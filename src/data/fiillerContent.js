// Fiiller
export const fiillerContent = `<div class="space-y-4">
  <div class="bg-gradient-to-r from-sky-50 to-blue-50 p-4 rounded-xl border-l-4 border-sky-600">
    <h3 class="text-2xl font-bold text-sky-900 mb-3">⚡ Fiiller</h3>
    <p class="text-gray-800">Fiilde anlam, fiilimsi, çatı. TYT'de 1-2 soru çıkar.</p>
  </div>
  <div class="bg-white border-2 border-sky-200 rounded-xl p-4">
    <h4 class="font-bold text-xl mb-3 text-sky-900">🎯 1. Fiilde Anlam (Kip-Kişi-Yapı)</h4>
    <div class="bg-sky-50 p-3 rounded-lg space-y-1">
      <p class="text-sm"><strong>Kip:</strong> Şimdiki, Gelecek, Görülen Geçmiş, Öğrenilen Geçmiş, İstek, Gereklilik, Emir</p>
      <p class="text-sm"><strong>Kişi:</strong> 1., 2., 3. tekil/çoğul</p>
      <p class="text-sm"><strong>Yapı:</strong> Basit-Birleşik, Olumlu-Olumsuz</p>
    </div>
  </div>
  <div class="bg-white border-2 border-blue-200 rounded-xl p-4">
    <h4 class="font-bold text-xl mb-3 text-blue-900">🔄 2. Fiilimsi (İsim-fiil, Sıfat-fiil, Zarf-fiil)</h4>
    <div class="bg-blue-50 p-3 rounded-lg space-y-1">
      <p class="text-xs"><strong>İsim-fiil:</strong> -ma/-me, -mak/-mek (Koşmak güzel)</p>
      <p class="text-xs"><strong>Sıfat-fiil:</strong> -an/-en, -dık/-dik (Koşan çocuk)</p>
      <p class="text-xs"><strong>Zarf-fiil:</strong> -arak/-erek, -ınca/-ince (Koşarak geldi)</p>
    </div>
  </div>
  <div class="bg-white border-2 border-indigo-200 rounded-xl p-4">
    <h4 class="font-bold text-xl mb-3 text-indigo-900">🎭 3. Fiilde Çatı</h4>
    <div class="bg-indigo-50 p-3 rounded-lg space-y-1">
      <p class="text-sm"><strong>Etken:</strong> Özne yapar (Ahmet okudu)</p>
      <p class="text-sm"><strong>Edilgen:</strong> İş özneye yapılır (Kitap okundu)</p>
      <p class="text-sm"><strong>Dönüşlü:</strong> İş özneye döner (Yıkandı)</p>
      <p class="text-sm"><strong>İşteş:</strong> Karşılıklı iş (Dövüştüler)</p>
    </div>
  </div>
</div>`;

export const fiillerExamples = [
  {
    question: "'Kitap okundu' cümlesindeki fiil hangi çatıdadır?",
    options: ["A) Etken", "B) Edilgen", "C) Dönüşlü", "D) İşteş", "E) Olumsuz"],
    answer: "B",
    explanation: "'okundu' fiili edilgen çatıdadır (-n eki)."
  },
  {
    question: "'Koşan çocuk' tamlamasında 'koşan' hangi fiilimsidır?",
    options: ["A) İsim-fiil", "B) Sıfat-fiil", "C) Zarf-fiil", "D) Mastar", "E) Emir"],
    answer: "B",
    explanation: "'-an' eki sıfat-fiil yapar, ismi niteler."
  },
  {
    question: "'Gelecek, gitti, geliyor' fiillerinde kaç farklı kip vardır?",
    options: ["A) 1", "B) 2", "C) 3", "D) 4", "E) 0"],
    answer: "C",
    explanation: "Gelecek zaman, görülen geçmiş, şimdiki zaman → 3 kip."
  }
];

export const fiillerTips = [
  "Edilgen çatıda -n, -l, -ıl ekler kullanılır",
  "Sıfat-fiil ismi niteler, zarf-fiil fiili niteler",
  "Kip=zaman ve anlam bilgisi verir"
];
