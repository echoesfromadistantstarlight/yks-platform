// Detaylı konu anlatımları ve örnek sorular
import { improvedTopicDetails } from './improvedTopicDetails';

export const topicDetails = {
  // Improved HTML formatında içerik
  ...improvedTopicDetails,
  
  // Diğer konular buraya eklenecek
  "tyt-turkce-Sözcükte Anlam": {
    title: "Sözcükte Anlam",
    description: "Kelimelerin anlamları, eş-zıt anlamlı kelimeler, gerçek-mecaz anlam.",
    importance: "3-4 soru",
    content: `
<div class="space-y-6">
  <div class="bg-blue-50 p-4 rounded-lg">
    <h3 class="text-xl font-bold text-blue-900 mb-2">📝 Sözcükte Anlam</h3>
    <p class="text-gray-700">Kelimelerin anlamları ve kullan ımları üzerine sorular.</p>
  </div>
  
  <div class="bg-white border-2 border-blue-200 rounded-xl p-4">
    <h4 class="font-bold text-lg mb-2">Gerçek ve Mecaz Anlam</h4>
    <p class="text-gray-700">Kelimelerin sözlükteki anlamı vs benzetmeyle kazandığı anlam</p>
  </div>
  
  <div class="bg-white border-2 border-green-200 rounded-xl p-4">
    <h4 class="font-bold text-lg mb-2">Eş ve Zıt Anlamlı Kelimeler</h4>
    <p class="text-gray-700">Anlamca yakın veya zıt kelimeler</p>
  </div>
</div>
    `,
    examples: [],
    tips: ["100 deyim ezberle", "Kelimeleri cümle içinde değerlendir"]
  },

  "tyt-turkce-Cümle Bilgisi": {
    title: "Cümle Bilgisi",
    description: "Cümle öğeleri ve türleri.",
    importance: "1-2 soru",
    content: `
<div class="space-y-4">
  <div class="bg-purple-50 p-4 rounded-lg">
    <h3 class="text-xl font-bold text-purple-900 mb-2">📐 Cümle Bilgisi</h3>
    <p class="text-gray-700">Cümle öğeleri ve çözümleme</p>
  </div>
</div>
    `,
    examples: [],
    tips: ["Önce yüklemi bul", "Özne 'kim/ne?' sorusuyla bulunur"]
  }
};

// Eksik konular için varsayılan içerik
export const getTopicDetail = (examType, subjectId, topicName) => {
  const key = `${examType}-${subjectId}-${topicName}`;
  return topicDetails[key] || {
    title: topicName,
    description: "Bu konu hakkında detaylı içerik hazırlanıyor...",
    content: `
<div class="bg-yellow-50 p-6 rounded-xl">
  <h3 class="text-2xl font-bold text-yellow-900 mb-3">🚧 İçerik Hazırlanıyor</h3>
  <p class="text-gray-700 text-lg">Bu konu için detaylı anlatım çok yakında eklenecek!</p>
</div>
    `,
    examples: [],
    tips: ["Bu konuyu mutlaka çalışın!", "Bol soru çözün!"]
  };
};
