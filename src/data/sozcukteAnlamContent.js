// Sözcükte Anlam konusu için detaylı içerik
export const sozcukteAnlamContent = `
<div class="space-y-4">
  <div class="bg-gradient-to-r from-blue-50 to-purple-50 p-4 rounded-xl border-l-4 border-blue-600">
    <h3 class="text-2xl font-bold text-blue-900 mb-3">📚 Sözcükte Anlam Nedir?</h3>
    <p class="text-gray-800 leading-relaxed mb-3">
      Sözcükte anlam, kelimelerin sahip olduğu anlamları, bu anlamların nasıl oluştuğunu ve kullanıldığı yerlere göre nasıl değiştiğini inceleyen konudur. TYT'de 3-4 soru çıkar ve 7 farklı alt konu vardır.
    </p>
    <p class="text-gray-700 italic">
      <strong>Kapsam:</strong> Gerçek-Mecaz Anlam, Terim-Yan-Düz Anlam, Öznel-Nesnel Anlam, Somut-Soyut Anlam, Çağrışım, Ad Aktarması (Mecaz-ı Mürsel), İstiare (Eğretileme)
    </p>
  </div>

  <div class="bg-white border-2 border-indigo-200 rounded-xl p-4">
    <h4 class="font-bold text-xl mb-3 text-indigo-900 flex items-center gap-2">
      <span>📖</span> 1. Gerçek Anlam - Mecaz Anlam
    </h4>
    <div class="space-y-3">
      <div class="bg-indigo-50 p-3 rounded-lg">
        <p class="font-semibold text-indigo-900 mb-2">Gerçek Anlam:</p>
        <p class="text-gray-700">Kelimenin sözlükteki asıl, ilk anlamıdır. Herhangi bir benzetme, mecaz veya aktarma içermez.</p>
        <p class="text-sm text-indigo-600 mt-2">
          <strong>Örnek:</strong> <i>"Bahçede bir <strong>aslan</strong> heykeli var."</i> → Aslan kelimesi hayvan anlamında (gerçek anlam)
        </p>
      </div>
      
      <div class="bg-purple-50 p-3 rounded-lg">
        <p class="font-semibold text-purple-900 mb-2">Mecaz Anlam:</p>
        <p class="text-gray-700">Kelimenin benzetme, mecaz veya yan anlam yoluyla kazandığı yeni anlamdır. Gerçek anlamdan farklı, aktarılmış bir anlam taşır.</p>
        <p class="text-sm text-purple-600 mt-2">
          <strong>Örnek:</strong> <i>"Ahmet <strong>aslan</strong> gibi çocuk."</i> → Aslan kelimesi "cesur, güçlü, yiğit" anlamında (mecaz anlam)
        </p>
      </div>
    </div>
  </div>

  <div class="bg-white border-2 border-green-200 rounded-xl p-4">
    <h4 class="font-bold text-xl mb-3 text-green-900 flex items-center gap-2">
      <span>🔖</span> 2. Terim Anlam - Yan Anlam - Düz Anlam
    </h4>
    <div class="space-y-3">
      <div class="bg-green-50 p-3 rounded-lg">
        <p class="font-semibold text-green-900 mb-2">Terim Anlam:</p>
        <p class="text-gray-700">Kelimenin bilim, sanat, meslek dallarında kazandığı özel, teknik anlamdır.</p>
        <p class="text-sm text-green-600 mt-2">
          <strong>Örnek:</strong> "Masa" kelimesi geometride "düzlem" anlamında terim anlam kazanır.
        </p>
      </div>
      
      <div class="bg-teal-50 p-3 rounded-lg">
        <p class="font-semibold text-teal-900 mb-2">Yan Anlam:</p>
        <p class="text-gray-700">Kelimenin asıl anlamının yanında kazandığı ikincil, ek anlamlardır.</p>
        <p class="text-sm text-teal-600 mt-2">
          <strong>Örnek:</strong> "Kedi" kelimesinin asıl anlamı hayvandır, yan anlamı "sinsi, hilekâr kişi"dir.
        </p>
      </div>
      
      <div class="bg-emerald-50 p-3 rounded-lg">
        <p class="font-semibold text-emerald-900 mb-2">Düz Anlam:</p>
        <p class="text-gray-700">Kelimenin herhangi bir sanat endişesi güdülmeden kullanıldığı, sıradan günlük anlamıdır.</p>
        <p class="text-sm text-emerald-600 mt-2">
          <strong>Örnek:</strong> "Güneş doğdu." cümlesindeki "doğdu" kelimesi düz anlamdadır.
        </p>
      </div>
    </div>
  </div>

  <div class="bg-white border-2 border-blue-200 rounded-xl p-4">
    <h4 class="font-bold text-xl mb-3 text-blue-900 flex items-center gap-2">
      <span>👁️</span> 3. Öznel Anlam - Nesnel Anlam
    </h4>
    <div class="space-y-3">
      <div class="bg-blue-50 p-3 rounded-lg">
        <p class="font-semibold text-blue-900 mb-2">Öznel (Sübjektif) Anlam:</p>
        <p class="text-gray-700">Kelimenin kişiden kişiye değişen, duygu ve düşüncelere göre farklılaşan anlamıdır. Kişisel yorumlar içerir.</p>
        <p class="text-sm text-blue-600 mt-2">
          <strong>Örnek:</strong> "Bu çok güzel bir resim." → "Güzel" kelimesi kişiye göre değişir (öznel).
        </p>
      </div>
      
      <div class="bg-sky-50 p-3 rounded-lg">
        <p class="font-semibold text-sky-900 mb-2">Nesnel (Objektif) Anlam:</p>
        <p class="text-gray-700">Kelimenin herkesçe kabul edilen, değişmeyen, bilimsel gerçeklere dayanan anlamıdır.</p>
        <p class="text-sm text-sky-600 mt-2">
          <strong>Örnek:</strong> "Su 100°C'de kaynar." → Bilimsel gerçek, kişiye göre değişmez (nesnel).
        </p>
      </div>
    </div>
  </div>

  <div class="bg-white border-2 border-purple-200 rounded-xl p-4">
    <h4 class="font-bold text-xl mb-3 text-purple-900 flex items-center gap-2">
      <span>🎨</span> 4. Somut Anlam - Soyut Anlam
    </h4>
    <div class="space-y-3">
      <div class="bg-purple-50 p-3 rounded-lg">
        <p class="font-semibold text-purple-900 mb-2">Somut (Concrete) Anlam:</p>
        <p class="text-gray-700">Kelimenin beş duyuyla algılanabilen, elle tutulur, gözle görülür varlıkları karşılayan anlamıdır.</p>
        <p class="text-sm text-purple-600 mt-2">
          <strong>Örnek:</strong> Masa, sandalye, kalem, ağaç → Somut anlamlı kelimeler
        </p>
      </div>
      
      <div class="bg-fuchsia-50 p-3 rounded-lg">
        <p class="font-semibold text-fuchsia-900 mb-2">Soyut (Abstract) Anlam:</p>
        <p class="text-gray-700">Kelimenin beş duyuyla algılanamayan, sadece düşünce ve hayal gücüyle kavranabilen varlıkları karşılayan anlamıdır.</p>
        <p class="text-sm text-fuchsia-600 mt-2">
          <strong>Örnek:</strong> Sevgi, nefret, mutluluk, adalet → Soyut anlamlı kelimeler
        </p>
      </div>
    </div>
  </div>

  <div class="bg-white border-2 border-orange-200 rounded-xl p-4">
    <h4 class="font-bold text-xl mb-3 text-orange-900 flex items-center gap-2">
      <span>💭</span> 5. Çağrışım
    </h4>
    <div class="bg-orange-50 p-3 rounded-lg">
      <p class="text-gray-700 mb-3">
        Kelimenin zihnimizde uyandırdığı başka kelime, kavram, olay veya duyguların tümüdür.
      </p>
      <div class="space-y-2">
        <div class="bg-white p-2 rounded border-l-4 border-orange-500">
          <p class="text-sm">
            <strong>Örnek 1:</strong> "Bahar" → yeniden doğuş, tazelik, umut, çiçekler çağrıştırır.
          </p>
        </div>
        <div class="bg-white p-2 rounded border-l-4 border-orange-500">
          <p class="text-sm">
            <strong>Örnek 2:</strong> "Kış" → soğuk, karanlık, yalnızlık, ölüm çağrıştırır.
          </p>
        </div>
      </div>
    </div>
  </div>

  <div class="bg-white border-2 border-red-200 rounded-xl p-4">
    <h4 class="font-bold text-xl mb-3 text-red-900 flex items-center gap-2">
      <span>🔄</span> 6. Ad Aktarması (Mecaz-ı Mürsel)
    </h4>
    <div class="bg-red-50 p-3 rounded-lg">
      <p class="text-gray-700 mb-3">
        Bir kelime yerine, onunla ilişkili başka bir kelimenin kullanılmasıdır. Benzetme amacı YOKTUR.
      </p>
      <div class="space-y-2">
        <div class="bg-white p-2 rounded border-2 border-red-300">
          <p class="font-semibold text-red-900 text-sm">• Parça-Bütün:</p>
          <p class="text-xs text-gray-700"><i>"Düşman başı vurduk."</i> → Başı = Tamamı</p>
        </div>
        <div class="bg-white p-2 rounded border-2 border-red-300">
          <p class="font-semibold text-red-900 text-sm">• İçerik-Kap:</p>
          <p class="text-xs text-gray-700"><i>"Bir fincan kahve içtim."</i> → Fincan = Kahve</p>
        </div>
        <div class="bg-white p-2 rounded border-2 border-red-300">
          <p class="font-semibold text-red-900 text-sm">• Yer-Kişi:</p>
          <p class="text-xs text-gray-700"><i>"Ankara kararı onayladı."</i> → Ankara = Hükümet</p>
        </div>
      </div>
    </div>
  </div>

  <div class="bg-white border-2 border-pink-200 rounded-xl p-4">
    <h4 class="font-bold text-xl mb-3 text-pink-900 flex items-center gap-2">
      <span>✨</span> 7. İstiare (Eğretileme)
    </h4>
    <div class="bg-pink-50 p-3 rounded-lg">
      <p class="text-gray-700 mb-3">
        Aralarında benzerlik olan iki varlıktan birinin adının diğerine verilmesidir. Kapalı benzetmedir.
      </p>
      <div class="space-y-2">
        <div class="bg-white p-2 rounded border-2 border-pink-300">
          <p class="text-sm text-gray-700 mb-1">
            <strong>Örnek 1:</strong> "Aslan savaştı." → Asker = aslan (gizli benzetme)
          </p>
        </div>
        <div class="bg-white p-2 rounded border-2 border-pink-300">
          <p class="text-sm text-gray-700">
            <strong>Örnek 2:</strong> "Melek çok masumdu." → Kız = melek (gizli)
          </p>
        </div>
      </div>
      <p class="text-sm text-pink-700 mt-2 italic">
        💡 İstiare = Kapalı Benzetme. Mecaz-ı Mürsel'den farkı: İstiare'de benzetme vardır!
      </p>
    </div>
  </div>
</div>
`;
