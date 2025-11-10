// DÜZGÜNLEŞTİRİLMİŞ İÇERİK - HTML FORMAT

export const improvedTopicDetails = {
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
      <p class="font-semibold text-gray-900">Bu parçada aşağıdakilerden hangisi <strong>VURGULANMIŞTIR</strong>?</p>
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
      <p class="font-semibold text-gray-900">Bu parçanın konusu aşağıdakilerden hangisidir?</p>
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
      <p class="font-semibold text-gray-900">Yazar bu parçada aşağıdakilerden hangisini amaçlamıştır?</p>
      <p class="text-sm text-gray-600 mt-3">
        <strong>ÇÖZÜM:</strong> "Mutlaka sınırlandırmalıdır" ifadesi → UYARMA/İKNA ETME amacı.
        Amaç: <strong>Aileleri uyarmak, çocuklarının sosyal medya kullanımını kontrol etmeleri konusunda ikna etmek.</strong>
      </p>
    </div>
  </div>

  <!-- DİĞER TİPLER KISACA -->
  <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
    <div class="bg-gradient-to-br from-yellow-50 to-yellow-100 p-4 rounded-lg border-2 border-yellow-300">
      <h4 class="font-bold text-lg mb-2">4️⃣ VERİLEN BİLGİLER</h4>
      <p class="text-sm text-gray-700">Parçada açıkça söylenen/anlaşılan bilgiler. ELEME yöntemiyle çöz!</p>
    </div>

    <div class="bg-gradient-to-br from-pink-50 to-pink-100 p-4 rounded-lg border-2 border-pink-300">
      <h4 class="font-bold text-lg mb-2">5️⃣ ANLATIM BİÇİMLERİ</h4>
      <p class="text-sm text-gray-700">Öyküleme, Betimleme, Açıklama, Tartışma türlerini ayırt et!</p>
    </div>

    <div class="bg-gradient-to-br from-indigo-50 to-indigo-100 p-4 rounded-lg border-2 border-indigo-300">
      <h4 class="font-bold text-lg mb-2">6️⃣ BAĞDAŞIKLIK</h4>
      <p class="text-sm text-gray-700">Karışık cümleleri sırala. Bağlaçlara dikkat!</p>
    </div>

    <div class="bg-gradient-to-br from-teal-50 to-teal-100 p-4 rounded-lg border-2 border-teal-300">
      <h4 class="font-bold text-lg mb-2">7️⃣ CÜMLENİN YERİ</h4>
      <p class="text-sm text-gray-700">Boşluğun öncesi ve sonrasına bak!</p>
    </div>

    <div class="bg-gradient-to-br from-orange-50 to-orange-100 p-4 rounded-lg border-2 border-orange-300">
      <h4 class="font-bold text-lg mb-2">8️⃣ BOŞLUK DOLDURMA</h4>
      <p class="text-sm text-gray-700">Anlama uygun kelimeyi bul!</p>
    </div>

    <div class="bg-gradient-to-br from-purple-50 to-purple-100 p-4 rounded-lg border-2 border-purple-300">
      <h4 class="font-bold text-lg mb-2">9️⃣ ÇIKARIM</h4>
      <p class="text-sm text-gray-700">Parçadan mantıksal sonuç çıkar!</p>
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
        question: "Sanat, insanoğlunun varoluşundan bu yana en temel ihtiyaçlarından biri olmuştur. İlkel insanlar mağara duvarlarına yaptıkları resimlerle düşüncelerini aktarırken, modern insan teknoloji sayesinde sanatı dijital ortama taşımıştır. Ancak her dönemde sanatın temel amacı değişmemiştir: İnsanın iç dünyasını dışa vurmak ve toplumla bağ kurmak. Bu yüzden sanat, evrensel bir dil olarak kabul edilir.\n\nBu parçada aşağıdakilerden hangisi VURGULANMIŞTIR?",
        options: [
          "A) Sanatın tarihsel gelişim süreci",
          "B) Teknolojinin sanata katkısı",
          "C) Sanatın evrensel ve değişmez işlevi",
          "D) İlkel insanların sanat anlayışı",
          "E) Modern sanatın dijital boyutu"
        ],
        answer: "C",
        explanation: "Parçada sanatın tarihsel gelişimi anlatılsa da, ASIL VURGU son iki cümlede yapılıyor: 'Her dönemde sanatın temel amacı DEĞİŞMEMİŞTİR' ve 'Sanat, evrensel bir dil'. Bu ifadeler sanatın zamana ve yere bağlı olmayan, değişmeyen işlevini vurguluyor."
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
