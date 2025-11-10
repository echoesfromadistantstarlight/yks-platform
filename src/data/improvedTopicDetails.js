// DÜZGÜNLEŞTİRİLMİŞ İÇERİK - HTML FORMAT
import allTopicsContent from './allTopicsContent';

export const improvedTopicDetails = {
  // Yeni içeriği merge et
  ...allTopicsContent,
  "tyt-turkce-Paragraf": {
    title: "Paragraf",
    description: "TYT Türkçe'nin EN ÇOK SORU ÇIKAN bölümü. Test'in %55-60'ı paragraftan oluşur.",
    importance: "22-25 soru",
    content: `
<div class="space-y-8">

  <!-- Paragraf Nedir -->
  <div class="bg-gradient-to-r from-blue-50 to-blue-100 p-6 rounded-xl border-l-4 border-blue-600 shadow-sm">
    <h3 class="text-2xl font-bold text-blue-900 mb-3 flex items-center">
      <span class="mr-2">📖</span> Paragraf Nedir?
    </h3>
    <p class="text-gray-800 text-lg leading-relaxed mb-2">
      Paragraf, bir düşünceyi veya konuyu işleyen, girintili ve mantıklı bir bütün oluşturan cümleler topluluğudur.
    </p>
    <p class="text-gray-700">
      <strong>Yapısı:</strong> Ana fikir + Yardımcı fikirler şeklinde yapılandırılır.
    </p>
  </div>

  <!-- Ana Başlık -->
  <h2 class="text-3xl font-bold text-gray-900 border-b-4 border-purple-500 pb-2 mt-12">
    📚 9 Paragraf Soru Tipi (Detaylı Anlatım)
  </h2>

  <!-- 1. ANA FİKİR -->
  <div class="bg-white border-2 border-red-200 rounded-xl p-6 shadow-lg">
    <div class="bg-red-500 text-white px-4 py-2 rounded-lg inline-block mb-4">
      <h3 class="text-xl font-bold">1️⃣ ANA FİKİR / ANA DÜŞÜNCE 🔥 (EN ÇOK ÇIKAN!)</h3>
    </div>
    
    <div class="mb-4">
      <h4 class="font-bold text-lg text-red-800 mb-2">✏️ Tanım:</h4>
      <p class="text-gray-700 text-lg">
        Paragrafta anlatılmak istenen <strong>asıl düşünce</strong>, yazarın <strong>iletmek istediği esas mesaj</strong>.
      </p>
    </div>

    <div class="mb-4">
      <h4 class="font-bold text-lg text-red-800 mb-2">📋 Özellikler:</h4>
      <ul class="list-disc list-inside space-y-1 text-gray-700">
        <li>Paragrafın <strong>TÜMÜNDE</strong> hakimdir</li>
        <li>Genellikle <strong>ilk</strong> veya <strong>son</strong> cümlede bulunur</li>
        <li>Yardımcı fikirler ana fikri DESTEKLER</li>
        <li>Tek cümle ile ifade edilir</li>
      </ul>
    </div>

    <div class="mb-4 bg-yellow-50 p-4 rounded-lg">
      <h4 class="font-bold text-lg text-yellow-900 mb-2">📝 Soru Örnekleri:</h4>
      <ul class="list-disc list-inside space-y-1 text-gray-700">
        <li>"Bu parçada aşağıdakilerden hangisi <strong>VURGULANMIŞTIR</strong>?"</li>
        <li>"Parçanın ana düşüncesi aşağıdakilerden hangisidir?"</li>
        <li>"Yazar bu parçada neyi anlatmak istemiştir?"</li>
      </ul>
    </div>

    <div class="mb-4">
      <h4 class="font-bold text-lg text-green-800 mb-2">✅ Çözüm Stratejisi:</h4>
      <ol class="list-decimal list-inside space-y-2 text-gray-700">
        <li><strong>İlk cümleyi OKU</strong> - Genelde buradadır</li>
        <li><strong>Son cümleyi OKU</strong> - Burada da olabilir</li>
        <li><strong>Tekrar eden kelimelere DİKKAT</strong></li>
        <li>"Ama, ancak, fakat" gibi <strong>zıtlık bağlaçlarından SONRAKI kısım ÖNEMLİ</strong></li>
        <li>Seçenekleri okurken: <em>"Bu parçanın TÜMÜNÜ karşılıyor mu?"</em> sorusunu sor</li>
      </ol>
    </div>

    <div class="bg-red-50 p-4 rounded-lg">
      <h4 class="font-bold text-lg text-red-800 mb-2">❌ Sık Yapılan Hatalar:</h4>
      <ul class="space-y-1 text-gray-700">
        <li>❌ Yardımcı fikri ana fikir sanmak</li>
        <li>❌ Parçada GEÇEN ama asıl mesaj olmayan bilgileri seçmek</li>
        <li>❌ Sadece bir cümleyi okuyup karar vermek</li>
      </ul>
    </div>

    <div class="mt-6 bg-gray-100 p-4 rounded-lg">
      <h4 class="font-bold text-lg text-gray-900 mb-3">📌 Gerçek Örnek Soru:</h4>
      <p class="text-gray-800 leading-relaxed mb-3 italic bg-white p-4 rounded border-l-4 border-gray-400">
        "Çevre kirliliği, yalnızca bugünün değil, gelecek nesillerin de en büyük sorunlarından biridir. 
        Sanayi devrimi sonrası artan fabrika atıkları, fosil yakıt kullanımı ve ormanların yok edilmesi doğal dengeyi bozmuştur. 
        Bu durum küresel ısınma, hava ve su kirliliğine yol açarak canlı yaşamını tehdit etmektedir. 
        <strong>Ancak bireysel farkındalık ve toplumsal sorumluluk ile bu sorun çözülebilir.</strong> 
        Geri dönüşüm, yenilenebilir enerji kaynaklarının kullanımı ve çevre dostu politikalar yaygınlaştırılmalıdır."
      </p>
      <p class="font-semibold text-gray-900 mb-3">Bu parçada aşağıdakilerden hangisi <strong>VURGULANMIŞTIR</strong>?</p>
      <div class="bg-white p-4 rounded-lg border space-y-2">
        <p class="text-gray-700"><strong>A)</strong> Sanayi devriminin zararları</p>
        <p class="text-gray-700"><strong>B)</strong> Fosil yakıt kullanımının artması</p>
        <p class="text-gray-700 bg-green-100 p-2 rounded font-semibold"><strong>C) ✓</strong> Çevre kirliliğinin bireysel ve toplumsal önlemlerle çözülebileceği</p>
        <p class="text-gray-700"><strong>D)</strong> Ormanların yok edilmesi</p>
        <p class="text-gray-700"><strong>E)</strong> Küresel ısınmanın etkileri</p>
      </div>
      <p class="text-sm text-gray-600 mt-3">
        <strong>ÇÖZÜM:</strong> Son cümlelere dikkat! "Ancak" zıtlık bağlacından sonra ASIL MESAJ geliyor: 
        "Sorun çözülebilir" vurgusu yapılıyor. Ana fikir: <strong>Çevre kirliliği ciddi bir sorundur ancak 
        bireysel ve toplumsal önlemlerle çözülebilir.</strong>
      </p>
    </div>
  </div>

  <!-- 2. KONUNUN BELİRLENMESİ -->
  <div class="bg-white border-2 border-blue-200 rounded-xl p-6 shadow-lg">
    <div class="bg-blue-500 text-white px-4 py-2 rounded-lg inline-block mb-4">
      <h3 class="text-xl font-bold">2️⃣ KONUNUN BELİRLENMESİ</h3>
    </div>
    
    <div class="mb-4">
      <h4 class="font-bold text-lg text-blue-800 mb-2">✏️ Tanım:</h4>
      <p class="text-gray-700 text-lg">
        Paragrafta <strong>sözü edilen varlık, olay veya durum</strong>. Bir kelime veya kelime grubuyla ifade edilir.
      </p>
    </div>

    <div class="mb-4 bg-purple-50 p-4 rounded-lg">
      <h4 class="font-bold text-lg text-purple-800 mb-2">🔍 Ana Fikir vs Konu Farkı:</h4>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div class="bg-white p-3 rounded border-l-4 border-purple-500">
          <p class="font-bold text-purple-900">KONU:</p>
          <p class="text-gray-700">NEDİR? (1-2 kelime)</p>
          <p class="text-sm text-gray-600 italic mt-1">Örnek: "Kitap okuma"</p>
        </div>
        <div class="bg-white p-3 rounded border-l-4 border-pink-500">
          <p class="font-bold text-pink-900">ANA FİKİR:</p>
          <p class="text-gray-700">NE SÖYLENİYOR? (Cümle)</p>
          <p class="text-sm text-gray-600 italic mt-1">Örnek: "Kitap okumanın önemi"</p>
        </div>
      </div>
    </div>

    <div class="mb-4">
      <h4 class="font-bold text-lg text-green-800 mb-2">✅ Çözüm:</h4>
      <ul class="list-disc list-inside space-y-1 text-gray-700">
        <li>Parçada <strong>EN ÇOK TEKRAR EDEN</strong> kelime/kavram</li>
        <li>Başlıkta geçebilecek kelime</li>
        <li>Kısa ve öz olmalı</li>
      </ul>
    </div>

    <div class="mt-6 bg-gray-100 p-4 rounded-lg">
      <h4 class="font-bold text-lg text-gray-900 mb-3">📌 Gerçek Örnek Soru:</h4>
      <p class="text-gray-800 leading-relaxed mb-3 italic bg-white p-4 rounded border-l-4 border-gray-400">
        "Yapay zeka teknolojileri, son yıllarda hayatımızın her alanında etkisini göstermektedir. 
        Sağlıktan eğitime, ulaşımdan finansa kadar pek çok sektörde yapay zeka uygulamaları kullanılmaktadır. 
        Özellikle makine öğrenmesi ve derin öğrenme gibi yapay zeka dalları hızla gelişmektedir. 
        Ancak yapay zeka kullanımının etik boyutları da tartışılmaktadır."
      </p>
      <p class="font-semibold text-gray-900 mb-3">Bu parçanın konusu aşağıdakilerden hangisidir?</p>
      <div class="bg-white p-4 rounded-lg border space-y-2">
        <p class="text-gray-700 bg-green-100 p-2 rounded font-semibold"><strong>A) ✓</strong> Yapay zeka</p>
        <p class="text-gray-700"><strong>B)</strong> Teknolojinin gelişimi</p>
        <p class="text-gray-700"><strong>C)</strong> Makine öğrenmesi</p>
        <p class="text-gray-700"><strong>D)</strong> Etik sorunlar</p>
        <p class="text-gray-700"><strong>E)</strong> Sağlık sektörü</p>
      </div>
      <p class="text-sm text-gray-600 mt-3">
        <strong>ÇÖZÜM:</strong> Parçada EN ÇOK tekrar eden kavram "yapay zeka"dır. 
        Konu: <strong>Yapay zeka</strong> (2 kelime, kısa ve öz)
      </p>
    </div>
  </div>

  <!-- 3. PARAGRAFIN AMACI -->
  <div class="bg-white border-2 border-green-200 rounded-xl p-6 shadow-lg">
    <div class="bg-green-500 text-white px-4 py-2 rounded-lg inline-block mb-4">
      <h3 class="text-xl font-bold">3️⃣ PARAGRAFIN AMACI</h3>
    </div>
    
    <div class="mb-4">
      <h4 class="font-bold text-lg text-green-800 mb-2">✏️ Tanım:</h4>
      <p class="text-gray-700 text-lg">
        Yazarın bu paragrafı <strong>NİYE yazdığı</strong>, okuyucuyu <strong>neye ikna etmek</strong> istediği.
      </p>
    </div>

    <div class="mb-4 grid grid-cols-2 md:grid-cols-3 gap-3">
      <div class="bg-blue-50 p-3 rounded text-center border">
        <p class="font-bold text-blue-900">🎯 BİLGİLENDİRME</p>
        <p class="text-sm text-gray-600">Bilgi aktarmak</p>
      </div>
      <div class="bg-purple-50 p-3 rounded text-center border">
        <p class="font-bold text-purple-900">🎯 İKNA ETME</p>
        <p class="text-sm text-gray-600">İnandırmak</p>
      </div>
      <div class="bg-red-50 p-3 rounded text-center border">
        <p class="font-bold text-red-900">🎯 ELEŞTİRME</p>
        <p class="text-sm text-gray-600">Eleştirmek</p>
      </div>
      <div class="bg-yellow-50 p-3 rounded text-center border">
        <p class="font-bold text-yellow-900">🎯 ÖVME</p>
        <p class="text-sm text-gray-600">Methetmek</p>
      </div>
      <div class="bg-orange-50 p-3 rounded text-center border">
        <p class="font-bold text-orange-900">🎯 UYARMA</p>
        <p class="text-sm text-gray-600">Dikkat çekmek</p>
      </div>
      <div class="bg-pink-50 p-3 rounded text-center border">
        <p class="font-bold text-pink-900">🎯 EĞLENDİRME</p>
        <p class="text-sm text-gray-600">Mizah yapmak</p>
      </div>
    </div>

    <div class="mt-6 bg-gray-100 p-4 rounded-lg">
      <h4 class="font-bold text-lg text-gray-900 mb-3">📌 Gerçek Örnek Soru:</h4>
      <p class="text-gray-800 leading-relaxed mb-3 italic bg-white p-4 rounded border-l-4 border-gray-400">
        "Günümüzde gençler, sosyal medyada geçirdikleri süreyi kontrol edemez hale gelmiştir. 
        Saatlerce ekran başında vakit harcayan gençlerin sosyal ilişkileri zayıflamakta, 
        okul başarıları düşmektedir. Aileler bu duruma duyarsız kalmayıp, 
        çocuklarının teknoloji kullanımını <strong>mutlaka sınırlandırmalıdır</strong>."
      </p>
      <p class="font-semibold text-gray-900 mb-3">Yazar bu parçada aşağıdakilerden hangisini amaçlamıştır?</p>
      <div class="bg-white p-4 rounded-lg border space-y-2">
        <p class="text-gray-700"><strong>A)</strong> Sosyal medyanın faydalarını anlatmak</p>
        <p class="text-gray-700 bg-green-100 p-2 rounded font-semibold"><strong>B) ✓</strong> Aileleri uyarmak ve ikna etmek</p>
        <p class="text-gray-700"><strong>C)</strong> Gençlerin durumunu eleştirmek</p>
        <p class="text-gray-700"><strong>D)</strong> Teknolojinin gelişimini övmek</p>
        <p class="text-gray-700"><strong>E)</strong> Eğitim sistemini sorgulamak</p>
      </div>
      <p class="text-sm text-gray-600 mt-3">
        <strong>ÇÖZÜM:</strong> "Mutlaka sınırlandırmalıdır" ifadesi → UYARMA/İKNA ETME amacı.
        Amaç: <strong>Aileleri uyarmak, çocuklarının sosyal medya kullanımını kontrol etmeleri konusunda ikna etmek.</strong>
      </p>
    </div>
  </div>

  <!-- 4. VERİLEN BİLGİLER - DETAYLI -->
  <div class="bg-white border-2 border-yellow-200 rounded-xl p-6 shadow-lg">
    <div class="bg-yellow-500 text-white px-4 py-2 rounded-lg inline-block mb-4">
      <h3 class="text-xl font-bold">4️⃣ PARAGRAFTA VERİLEN BİLGİLER</h3>
    </div>
    
    <div class="mb-4">
      <h4 class="font-bold text-lg text-yellow-800 mb-2">✏️ Tanım:</h4>
      <p class="text-gray-700 text-lg">
        Parçada <strong>açıkça söylenen</strong> veya <strong>anlaşılan</strong> bilgiler.
      </p>
    </div>

    <div class="mb-4 bg-yellow-50 p-4 rounded-lg">
      <h4 class="font-bold text-lg text-yellow-900 mb-2">📝 Soru Örnekleri:</h4>
      <ul class="list-disc list-inside space-y-1 text-gray-700">
        <li>"Bu parçadan aşağıdakilerden hangisi <strong>ANLAŞILIR</strong>?"</li>
        <li>"Parçaya göre..."</li>
        <li>"Parçada aşağıdakilerden hangisine <strong>DEĞİNİLMEMİŞTİR</strong>?"</li>
      </ul>
    </div>

    <div class="mb-4">
      <h4 class="font-bold text-lg text-green-800 mb-2">✅ Çözüm:</h4>
      <ul class="list-disc list-inside space-y-1 text-gray-700">
        <li><strong>ELEME yöntemi</strong> kullan</li>
        <li>Seçenekleri parçayla <strong>EŞLEŞTIR</strong></li>
        <li>Parçada <strong>GEÇEN</strong> ifadeleri bul</li>
        <li>"Değinilmemiştir" sorularında: Parçada <strong>OLMAYANI</strong> bul</li>
      </ul>
    </div>

    <div class="bg-red-50 p-4 rounded-lg">
      <h4 class="font-bold text-lg text-red-800 mb-2">⚠️ DİKKAT:</h4>
      <p class="text-gray-700">
        Seçenekte <strong>farklı kelimelerle</strong> ifade edilebilir!<br>
        <span class="text-sm italic">Örnek: Parçada "zengin" geçiyorsa, seçenekte "varlıklı" yazabilir</span>
      </p>
    </div>

    <div class="mt-6 bg-gray-100 p-4 rounded-lg">
      <h4 class="font-bold text-lg text-gray-900 mb-3">📌 Gerçek Örnek Soru:</h4>
      <p class="text-gray-800 leading-relaxed mb-3 italic bg-white p-4 rounded border-l-4 border-gray-400">
        "Düzenli uyku, insan sağlığı için son derece önemlidir. Uyku sırasında vücut kendini onarır, bağışıklık sistemi güçlenir. 
        Ayrıca yeterli uyku, hafıza ve öğrenme kapasitesini artırır. Uzmanlar, yetişkinlerin günde 7-8 saat uyuması gerektiğini belirtmektedir."
      </p>
      <p class="font-semibold text-gray-900">Bu parçadan aşağıdakilerden hangisi ANLAŞILIR?</p>
      <p class="text-sm text-gray-600 mt-3">
        <strong>A)</strong> Düzensiz uyku ciddi hastalıklara neden olur<br>
        <strong>B)</strong> Uyku sırasında bağışıklık sistemi güçlenir ✓<br>
        <strong>C)</strong> Her insan 7-8 saat uyumalıdır<br>
        <strong>D)</strong> Uyku ilacı kullanmak zararlıdır<br>
        <strong>E)</strong> Çocuklar daha az uyumalıdır
      </p>
      <p class="text-sm text-gray-600 mt-3">
        <strong>ÇÖZÜM:</strong> Parçada "Uyku sırasında vücut kendini onarır, bağışıklık sistemi güçlenir" 
        cümlesi AÇIKÇA var. B şıkkı parçada GEÇİYOR. Diğerleri ya parçada yok, ya da aşırı genelleme.
      </p>
    </div>
  </div>

  <!-- 5. ANLATIM BİÇİMLERİ - DETAYLI -->
  <div class="bg-white border-2 border-pink-200 rounded-xl p-6 shadow-lg">
    <div class="bg-pink-500 text-white px-4 py-2 rounded-lg inline-block mb-4">
      <h3 class="text-xl font-bold">5️⃣ ANLATIM BİÇİMLERİ</h3>
    </div>
    
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div class="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
        <h5 class="font-bold text-blue-900 mb-2">📖 ÖYKÜLEME</h5>
        <ul class="text-sm text-gray-700 space-y-1">
          <li>• Olay anlatımı</li>
          <li>• Zaman sıralı akış</li>
          <li>• Kişiler, olay, yer, zaman var</li>
        </ul>
      </div>

      <div class="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
        <h5 class="font-bold text-green-900 mb-2">🎨 BETİMLEME</h5>
        <ul class="text-sm text-gray-700 space-y-1">
          <li>• Tasvir, canlandırma</li>
          <li>• Duyulara hitap eden ifadeler</li>
          <li>• "...gibi", "sanki" kelimeleri</li>
        </ul>
      </div>

      <div class="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
        <h5 class="font-bold text-purple-900 mb-2">📚 AÇIKLAMA</h5>
        <ul class="text-sm text-gray-700 space-y-1">
          <li>• Bilgi verme</li>
          <li>• Objektif anlatım</li>
          <li>• Tanım, örnek, karşılaştırma</li>
        </ul>
      </div>

      <div class="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
        <h5 class="font-bold text-red-900 mb-2">💭 TARTIŞMA</h5>
        <ul class="text-sm text-gray-700 space-y-1">
          <li>• Fikir ileri sürme</li>
          <li>• Kanıtlama, eleştirme</li>
          <li>• "...meli", "...malı" cümleleri</li>
        </ul>
      </div>
    </div>

    <div class="mt-6 bg-gray-100 p-4 rounded-lg">
      <h4 class="font-bold text-lg text-gray-900 mb-3">📌 Gerçek Örnek Soru:</h4>
      <p class="text-gray-800 leading-relaxed mb-3 italic bg-white p-4 rounded border-l-4 border-gray-400">
        "Geçen yaz köyde geçirdiğimiz o unutulmaz günleri hiç unutmuyorum. Sabahları taze çiçek kokularıyla uyanır, 
        kuş sesleriyle güne başlardık. Büyükannemin bahçesinde koşuşturur, ağaçlardan meyve toplardık..."
      </p>
      <p class="font-semibold text-gray-900">Bu parçada hangi anlatım biçimi AĞIRLIKLIDIR?</p>
      <p class="text-sm text-gray-600 mt-3">
        <strong>A)</strong> Betimleme<br>
        <strong>B)</strong> Öyküleme ✓<br>
        <strong>C)</strong> Açıklama<br>
        <strong>D)</strong> Tartışma<br>
        <strong>E)</strong> Tanıtma
      </p>
      <p class="text-sm text-gray-600 mt-3">
        <strong>ÇÖZÜM:</strong> Parçada OLAY anlatılıyor (köyde geçirilen günler), zaman var (geçen yaz, sabahları), 
        kişiler var (ben, büyükannem). Bu ÖYKÜLEME'nin özelliğidir.
      </p>
    </div>
  </div>

  <!-- 6. BAĞDAŞIKLIK - DETAYLI -->
  <div class="bg-white border-2 border-indigo-200 rounded-xl p-6 shadow-lg">
    <div class="bg-indigo-500 text-white px-4 py-2 rounded-lg inline-block mb-4">
      <h3 class="text-xl font-bold">6️⃣ BAĞDAŞIKLIK (CÜMLE SIRALAMASI)</h3>
    </div>
    
    <div class="mb-4">
      <h4 class="font-bold text-lg text-indigo-800 mb-2">✏️ Tanım:</h4>
      <p class="text-gray-700 text-lg">
        Karışık verilen cümleleri <strong>MANTIĞI SIRAYA</strong> koymak.
      </p>
    </div>

    <div class="bg-indigo-50 p-4 rounded-lg">
      <h4 class="font-bold text-lg text-indigo-900 mb-3">✅ Çözüm Stratejisi:</h4>
      <ol class="list-decimal list-inside space-y-2 text-gray-700">
        <li><strong>GİRİŞ cümlesini</strong> bul (genellikle en genel ifade)</li>
        <li><strong>SONUÇ cümlesini</strong> bul ("bu nedenle", "sonuçta")</li>
        <li><strong>BAĞLAÇLARA</strong> dikkat:
          <ul class="list-disc list-inside ml-6 mt-1 text-sm">
            <li>"Bu", "Bu nedenle" → Öncesine atıfta bulunur</li>
            <li>"Ancak", "Fakat" → Zıtlık bildirir</li>
            <li>"Ayrıca" → Ekleme yapar</li>
          </ul>
        </li>
        <li><strong>ZAMANLARA</strong> dikkat (geçmiş → şimdi)</li>
        <li><strong>SEBEP-SONUÇ</strong> ilişkisi kur</li>
      </ol>
    </div>

    <div class="mt-6 bg-gray-100 p-4 rounded-lg">
      <h4 class="font-bold text-lg text-gray-900 mb-3">📌 Gerçek Örnek Soru:</h4>
      <p class="text-gray-800 leading-relaxed mb-3 bg-white p-4 rounded border-l-4 border-gray-400">
        <strong>I.</strong> Bu nedenle kitap okuma alışkanlığı kazanmak önemlidir.<br>
        <strong>II.</strong> Kitaplar, insanın hayal gücünü geliştirir.<br>
        <strong>III.</strong> Ayrıca dil becerilerini de artırır.<br>
        <strong>IV.</strong> Okuma, bilgi edinmenin en temel yollarından biridir.
      </p>
      <p class="font-semibold text-gray-900">Yukarıdaki cümlelerin anlamlı sıralaması hangisidir?</p>
      <p class="text-sm text-gray-600 mt-3">
        <strong>A)</strong> IV-II-III-I ✓<br>
        <strong>B)</strong> I-II-III-IV<br>
        <strong>C)</strong> II-III-IV-I<br>
        <strong>D)</strong> IV-I-II-III<br>
        <strong>E)</strong> II-IV-III-I
      </p>
      <p class="text-sm text-gray-600 mt-3">
        <strong>ÇÖZÜM:</strong> <br>
        • IV ile başla (en genel ifade: "Okuma bilgi edinmenin yolu")<br>
        • II ve III devam (okumayı hayal gücünü geliştirir, dil becerilerini artırır)<br>
        • I ile bitir ("Bu nedenle" bağlacı SONUÇ cümlesi, öncesine atıfta bulunuyor)
      </p>
    </div>
  </div>

  <!-- 7. CÜMLENİN YERİ - DETAYLI -->
  <div class="bg-white border-2 border-teal-200 rounded-xl p-6 shadow-lg">
    <div class="bg-teal-500 text-white px-4 py-2 rounded-lg inline-block mb-4">
      <h3 class="text-xl font-bold">7️⃣ CÜMLENİN YERİ</h3>
    </div>
    
    <div class="mb-4">
      <h4 class="font-bold text-lg text-teal-800 mb-2">✏️ Tanım:</h4>
      <p class="text-gray-700 text-lg">
        Verilen cümlenin paragraftaki <strong>BOŞLUĞA</strong> uygun olup olmadığı.
      </p>
    </div>

    <div class="bg-teal-50 p-4 rounded-lg">
      <h4 class="font-bold text-lg text-teal-900 mb-2">✅ Çözüm:</h4>
      <ul class="list-disc list-inside space-y-1 text-gray-700">
        <li>Boşluktan <strong>ÖNCESİNE</strong> bak</li>
        <li>Boşluktan <strong>SONRASINA</strong> bak</li>
        <li><strong>ANLAM BÜTÜNLÜĞÜNÜ</strong> kontrol et</li>
        <li><strong>BAĞLAÇLAR</strong> uyumlu olmalı</li>
      </ul>
    </div>

    <div class="mt-6 bg-gray-100 p-4 rounded-lg">
      <h4 class="font-bold text-lg text-gray-900 mb-3">📌 Gerçek Örnek Soru:</h4>
      <p class="text-gray-800 leading-relaxed mb-3 italic bg-white p-4 rounded border-l-4 border-gray-400">
        "Teknoloji hızla gelişiyor. <strong>(____)</strong> Bu durum toplumsal değişimleri de beraberinde getiriyor."
      </p>
      <p class="font-semibold text-gray-900">Parçadaki boşluğa aşağıdakilerden hangisi getirilmelidir?</p>
      <p class="text-sm text-gray-600 mt-3">
        <strong>A)</strong> Ancak insanlar buna ayak uyduramıyor<br>
        <strong>B)</strong> Yapay zeka önem kazanıyor ✓<br>
        <strong>C)</strong> Gelecekte ne olacağı belirsiz<br>
        <strong>D)</strong> Bu yüzden eğitim önemli<br>
        <strong>E)</strong> Geçmişte daha iyiydi
      </p>
      <p class="text-sm text-gray-600 mt-3">
        <strong>ÇÖZÜM:</strong> Öncesinde "Teknoloji gelişiyor", sonrasında "Bu durum toplumsal değişim getiriyor". 
        B şıkkı (Yapay zeka) teknolojinin GELİŞMESİNE örnek veriyor ve sonrasıyla uyumlu. "Bu durum" ifadesi 
        boşluktaki cümleyi kastediyor.
      </p>
    </div>
  </div>

  <!-- 8. BOŞLUK DOLDURMA - DETAYLI -->
  <div class="bg-white border-2 border-orange-200 rounded-xl p-6 shadow-lg">
    <div class="bg-orange-500 text-white px-4 py-2 rounded-lg inline-block mb-4">
      <h3 class="text-xl font-bold">8️⃣ BOŞLUK DOLDURMA</h3>
    </div>
    
    <div class="mb-4">
      <h4 class="font-bold text-lg text-orange-800 mb-2">✏️ Tanım:</h4>
      <p class="text-gray-700 text-lg">
        Boşaltılmış <strong>kelime/kelime grubunu</strong> bulma.
      </p>
    </div>

    <div class="bg-orange-50 p-4 rounded-lg">
      <h4 class="font-bold text-lg text-orange-900 mb-2">✅ Çözüm:</h4>
      <ul class="list-disc list-inside space-y-1 text-gray-700">
        <li>Boşluktan <strong>önce ve sonraki kelimelere BAK</strong></li>
        <li><strong>ANLAMI</strong> tamamlayan kelimeyi bul</li>
        <li><strong>DİLBILGİSİ</strong> uyumuna dikkat</li>
      </ul>
    </div>

    <div class="mt-6 bg-gray-100 p-4 rounded-lg">
      <h4 class="font-bold text-lg text-gray-900 mb-3">📌 Gerçek Örnek Soru:</h4>
      <p class="text-gray-800 leading-relaxed mb-3 italic bg-white p-4 rounded border-l-4 border-gray-400">
        "Spor yapmak, hem fiziksel hem de ruhsal sağlık için <strong>________</strong>."
      </p>
      <p class="font-semibold text-gray-900">Boşluğa aşağıdakilerden hangisi getirilmelidir?</p>
      <p class="text-sm text-gray-600 mt-3">
        <strong>A)</strong> zararlıdır<br>
        <strong>B)</strong> önemsizdir<br>
        <strong>C)</strong> gereklidir ✓<br>
        <strong>D)</strong> pahalıdır<br>
        <strong>E)</strong> gereksizdir
      </p>
      <p class="text-sm text-gray-600 mt-3">
        <strong>ÇÖZÜM:</strong> "Spor yapmak sağlık için..." cümlesinin ANLAMI olumlu olmalı. 
        Dilbilgisi: "-dır" eki var, sıfat/isim gerekli. C şıkkı hem anlamca hem dilbilgisi olarak uygun.
      </p>
    </div>
  </div>

  <!-- 9. ÇIKARIM - DETAYLI -->
  <div class="bg-white border-2 border-purple-200 rounded-xl p-6 shadow-lg">
    <div class="bg-purple-500 text-white px-4 py-2 rounded-lg inline-block mb-4">
      <h3 class="text-xl font-bold">9️⃣ PARÇADAN ÇIKARILACAK BİLGİLER</h3>
    </div>
    
    <div class="mb-4">
      <h4 class="font-bold text-lg text-purple-800 mb-2">✏️ Tanım:</h4>
      <p class="text-gray-700 text-lg">
        Parçadan <strong>YORUM</strong> yaparak ulaşılan bilgiler.
      </p>
    </div>

    <div class="bg-purple-50 p-4 rounded-lg">
      <h4 class="font-bold text-lg text-purple-900 mb-2">✅ Çözüm:</h4>
      <ul class="list-disc list-inside space-y-1 text-gray-700">
        <li>Direk yazılmamış ama <strong>ANLATILIYOR</strong></li>
        <li>Mantıksal <strong>ÇIKARIM</strong> yap</li>
        <li>Abartılı seçeneklerden <strong>KAÇIN</strong></li>
      </ul>
    </div>

    <div class="mt-6 bg-gray-100 p-4 rounded-lg">
      <h4 class="font-bold text-lg text-gray-900 mb-3">📌 Gerçek Örnek Soru:</h4>
      <p class="text-gray-800 leading-relaxed mb-3 italic bg-white p-4 rounded border-l-4 border-gray-400">
        "Yazarın tüm romanları çok satmıştır. Son kitabı da kısa sürede tükendi. 
        Okuyucular yeni kitabını merakla bekliyor."
      </p>
      <p class="font-semibold text-gray-900">Bu parçadan aşağıdakilerden hangisi ÇIKARILIR?</p>
      <p class="text-sm text-gray-600 mt-3">
        <strong>A)</strong> Yazar çok zengindir<br>
        <strong>B)</strong> Yazar popüler bir yazardır ✓<br>
        <strong>C)</strong> Yazar en iyi yazardır<br>
        <strong>D)</strong> Yazar başka kitap yazmayacak<br>
        <strong>E)</strong> Yazar hiç ödül almamıştır
      </p>
      <p class="text-sm text-gray-600 mt-3">
        <strong>ÇÖZÜM:</strong> Parçada "tüm romanları çok sattı", "son kitabı tükendi", "okuyucular bekliyor" 
        ifadeleri var. Bunlardan YORUM yaparsak: Yazar POPÜLER. A aşırı genelleme, C abartı, D parçada yok.
      </p>
    </div>
  </div>

  <!-- GENEL İPUÇLARI -->
  <div class="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-xl border-2 border-green-400 mt-8">
    <h3 class="text-2xl font-bold text-green-900 mb-4">💡 Genel Paragraf Çözme İpuçları:</h3>
    <ul class="space-y-2 text-gray-800">
      <li class="flex items-start">
        <span class="text-green-600 mr-2">✅</span>
        <span><strong>Her gün 20-30 paragraf</strong> çöz ve analizini yap</span>
      </li>
      <li class="flex items-start">
        <span class="text-green-600 mr-2">✅</span>
        <span><strong>İlk ve son cümleleri</strong> mutlaka dikkatle oku</span>
      </li>
      <li class="flex items-start">
        <span class="text-green-600 mr-2">✅</span>
        <span><strong>Bağlaçlara</strong> (çünkü, ancak, dolayısıyla) özel dikkat göster</span>
      </li>
      <li class="flex items-start">
        <span class="text-green-600 mr-2">✅</span>
        <span><strong>Süre tut:</strong> Paragraf başına 1.5-2 dakika hedefle</span>
      </li>
      <li class="flex items-start">
        <span class="text-green-600 mr-2">✅</span>
        <span><strong>Eleme yöntemi</strong> kullan: kesinlikle yanlış olanları çıkar</span>
      </li>
    </ul>
  </div>

</div>
    `,
    examples: [
      {
        question: "1️⃣ ANA FİKİR SORUSU:\n\nSanat, insanoğlunun varoluşundan bu yana en temel ihtiyaçlarından biri olmuştur. İlkel insanlar mağara duvarlarına yaptıkları resimlerle düşüncelerini aktarırken, modern insan teknoloji sayesinde sanatı dijital ortama taşımıştır. Ancak her dönemde sanatın temel amacı değişmemiştir: İnsanın iç dünyasını dışa vurmak ve toplumla bağ kurmak. Bu yüzden sanat, evrensel bir dil olarak kabul edilir.\n\nBu parçada aşağıdakilerden hangisi VURGULANMIŞTIR?",
        options: [
          "A) Sanatın tarihsel gelişimi",
          "B) Teknolojinin sanata etkisi",
          "C) Sanatın evrensel ve değişmez işlevi",
          "D) İlkel insanların sanat anlayışı",
          "E) Modern sanatın dijital boyutu"
        ],
        answer: "C",
        explanation: "Parçada sanatın tarihsel gelişimi anlatılsa da, ASIL VURGU son iki cümlede yapılıyor: 'Her dönemde sanatın temel amacı DEĞİŞMEMİŞTİR' ve 'Sanat, evrensel bir dil'. Bu ifadeler sanatın zamana ve yere bağlı olmayan, değişmeyen işlevini vurguluyor."
      },
      {
        question: "2️⃣ KONU BELİRLEME SORUSU:\n\nYapay zeka teknolojileri, son yıllarda hayatımızın her alanında etkisini göstermektedir. Sağlıktan eğitime, ulaşımdan finansa kadar pek çok sektörde yapay zeka uygulamaları kullanılmaktadır. Özellikle makine öğrenmesi ve derin öğrenme gibi yapay zeka dalları hızla gelişmektedir. Ancak yapay zeka kullanımının etik boyutları da tartışılmaktadır.\n\nBu parçanın konusu aşağıdakilerden hangisidir?",
        options: [
          "A) Yapay zeka",
          "B) Teknolojinin gelişimi",
          "C) Makine öğrenmesi",
          "D) Etik sorunlar",
          "E) Sağlık sektörü"
        ],
        answer: "A",
        explanation: "Parçada EN ÇOK TEKRAR EDEN kavram 'yapay zeka'dır. Konu: Yapay zeka (2 kelime, kısa ve öz). Diğerleri ya alt başlık ya da yardımcı fikir."
      },
      {
        question: "3️⃣ AMAÇ SORUSU:\n\nGünümüzde gençler, sosyal medyada geçirdikleri süreyi kontrol edemez hale gelmiştir. Saatlerce ekran başında vakit harcayan gençlerin sosyal ilişkileri zayıflamakta, okul başarıları düşmektedir. Aileler bu duruma duyarsız kalmayıp, çocuklarının teknoloji kullanımını mutlaka sınırlandırmalıdır.\n\nYazar bu parçada aşağıdakilerden hangisini amaçlamıştır?",
        options: [
          "A) Sosyal medyanın faydalarını anlatmak",
          "B) Aileleri uyarmak ve ikna etmek",
          "C) Gençlerin durumunu eleştirmek",
          "D) Teknolojinin gelişimini övmek",
          "E) Eğitim sistemini sorgulamak"
        ],
        answer: "B",
        explanation: "'Mutlaka sınırlandırmalıdır' ifadesi UYARMA/İKNA ETME amacı gösterir. Yazar aileleri uyarıp, çocuklarının sosyal medya kullanımını kontrol etmeleri konusunda ikna etmeye çalışıyor."
      },
      {
        question: "4️⃣ VERİLEN BİLGİLER SORUSU:\n\nDüzenli uyku, insan sağlığı için son derece önemlidir. Uyku sırasında vücut kendini onarır, bağışıklık sistemi güçlenir. Ayrıca yeterli uyku, hafıza ve öğrenme kapasitesini artırır. Uzmanlar, yetişkinlerin günde 7-8 saat uyuması gerektiğini belirtmektedir.\n\nBu parçadan aşağıdakilerden hangisi ANLAŞILIR?",
        options: [
          "A) Düzensiz uyku ciddi hastalıklara neden olur",
          "B) Uyku sırasında bağışıklık sistemi güçlenir",
          "C) Her insan 7-8 saat uyumalıdır",
          "D) Uyku ilacı kullanmak zararlıdır",
          "E) Çocuklar daha az uyumalıdır"
        ],
        answer: "B",
        explanation: "Parçada 'Uyku sırasında vücut kendini onarır, bağışıklık sistemi güçlenir' cümlesi AÇIKÇA var. B şıkkı parçada GEÇİYOR. Diğerleri ya parçada yok, ya da aşırı genelleme."
      },
      {
        question: "5️⃣ ANLATIM BİÇİMLERİ SORUSU:\n\nGeçen yaz köyde geçirdiğimiz o unutulmaz günleri hiç unutmuyorum. Sabahları taze çiçek kokularıyla uyanır, kuş sesleriyle güne başlardık. Büyükannemin bahçesinde koşuşturur, ağaçlardan meyve toplardık. Akşamları ise tüm aile bir araya gelir, uzun uzun sohbet ederdik.\n\nBu parçada hangi anlatım biçimi AĞIRLIKLIDIR?",
        options: [
          "A) Betimleme",
          "B) Öyküleme",
          "C) Açıklama",
          "D) Tartışma",
          "E) Tanıtma"
        ],
        answer: "B",
        explanation: "Parçada OLAY anlatılıyor (köyde geçirilen günler), zaman var (geçen yaz, sabahları, akşamları), kişiler var (ben, büyükanne, aile). Bu ÖYKÜLEME'nin özelliğidir."
      },
      {
        question: "6️⃣ BAĞDAŞIKLIK SORUSU:\n\nI. Bu nedenle kitap okuma alışkanlığı kazanmak önemlidir.\nII. Kitaplar, insanın hayal gücünü geliştirir.\nIII. Ayrıca dil becerilerini de artırır.\nIV. Okuma, bilgi edinmenin en temel yollarından biridir.\n\nYukarıdaki cümlelerin anlamlı sıralaması hangisidir?",
        options: [
          "A) IV-II-III-I",
          "B) I-II-III-IV",
          "C) II-III-IV-I",
          "D) IV-I-II-III",
          "E) II-IV-III-I"
        ],
        answer: "A",
        explanation: "IV ile başla (en genel ifade: 'Okuma bilgi edinmenin yolu'). II ve III devam (hayal gücü, dil becerileri). I ile bitir ('Bu nedenle' bağlacı SONUÇ cümlesi, öncesine atıfta bulunuyor)."
      },
      {
        question: "7️⃣ CÜMLENİN YERİ SORUSU:\n\nTeknoloji hızla gelişiyor. (____) Bu durum toplumsal değişimleri de beraberinde getiriyor. İnsanlar yeni teknolojilere adapte olmaya çalışıyor.\n\nParçadaki boşluğa aşağıdakilerden hangisi getirilmelidir?",
        options: [
          "A) Ancak insanlar buna ayak uyduramıyor",
          "B) Yapay zeka önem kazanıyor",
          "C) Gelecekte ne olacağı belirsiz",
          "D) Bu yüzden eğitim önemli",
          "E) Geçmişte daha iyiydi"
        ],
        answer: "B",
        explanation: "Öncesinde 'Teknoloji gelişiyor', sonrasında 'Bu durum toplumsal değişim getiriyor'. B şıkkı (Yapay zeka) teknolojinin GELİŞMESİNE örnek veriyor. 'Bu durum' ifadesi boşluktaki cümleyi kastediyor."
      },
      {
        question: "8️⃣ BOŞLUK DOLDURMA SORUSU:\n\nSpor yapmak, hem fiziksel hem de ruhsal sağlık için ________ .\n\nBoşluğa aşağıdakilerden hangisi getirilmelidir?",
        options: [
          "A) zararlıdır",
          "B) önemsizdir",
          "C) gereklidir",
          "D) pahalıdır",
          "E) gereksizdir"
        ],
        answer: "C",
        explanation: "'Spor yapmak sağlık için...' cümlesinin ANLAMI olumlu olmalı. Dilbilgisi: '-dır' eki var, sıfat/isim gerekli. C şıkkı hem anlamca hem dilbilgisi olarak uygun."
      },
      {
        question: "9️⃣ ÇIKARIM SORUSU:\n\nYazarın tüm romanları çok satmıştır. Son kitabı da kısa sürede tükendi. Okuyucular yeni kitabını merakla bekliyor. İmza günleri her zaman kalabalık geçiyor.\n\nBu parçadan aşağıdakilerden hangisi ÇIKARILIR?",
        options: [
          "A) Yazar çok zengindir",
          "B) Yazar popüler bir yazardır",
          "C) Yazar en iyi yazardır",
          "D) Yazar başka kitap yazmayacak",
          "E) Yazar hiç ödül almamıştır"
        ],
        answer: "B",
        explanation: "Parçada 'tüm romanları çok sattı', 'kitabı tükendi', 'okuyucular bekliyor', 'imza günleri kalabalık' ifadeleri var. Bunlardan YORUM yaparsak: Yazar POPÜLER. A aşırı genelleme, C abartı, D ve E parçada yok."
      }
    ],
    tips: [
      "Günde 20-30 paragraf çözün ve analizini yapın",
      "İlk ve son cümlelere MUTLAKA dikkatle okuyun",
      "Bağlaçlara (çünkü, ancak, dolayısıyla) özel dikkat gösterin",
      "Süre tutarak çözün: Paragraf başına 1.5-2 dakika"
    ]
  }
};

export default improvedTopicDetails;
