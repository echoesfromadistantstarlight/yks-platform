// Detaylı konu anlatımları ve örnek sorular
import { improvedTopicDetails } from './improvedTopicDetails';
import { sozcukteAnlamContent } from './sozcukteAnlamContent';

export const topicDetails = {
  // Improved HTML formatında içerik
  ...improvedTopicDetails,
  
  // Diğer konular buraya eklenecek
  "tyt-turkce-Sözcükte Anlam": {
    title: "Sözcükte Anlam",
    description: "TYT Türkçe'de 3-4 soru gelir. Gerçek-mecaz anlam, terim-yan-düz anlam, öznel-nesnel, somut-soyut, çağrışım, mecaz-ı mürsel ve istiare konularını kapsar.",
    importance: "3-4 soru",
    content: sozcukteAnlamContent,
    examples: [
      {
        question: "I. Güneş batıda batıyor.\nII. Ahmet aslan gibi cesur bir çocuk.\nIII. Kedi miyavlıyordu.\n\nYukarıdaki cümlelerin hangilerinde mecaz anlam vardır?",
        options: [
          "A) Yalnız I",
          "B) Yalnız II",
          "C) Yalnız III",
          "D) I ve II",
          "E) II ve III"
        ],
        answer: "B",
        explanation: "I. cümlede 'batıyor' kelimesi gerçek anlamda. II. cümlede 'aslan gibi' benzetmesi mecaz anlam oluşturur. III. cümlede 'miyavlıyordu' gerçek anlamda. Doğru cevap B şıkkıdır."
      },
      {
        question: "Aşağıdaki cümlelerin hangisinde 'masa' kelimesi terim anlam kazanmıştır?",
        options: [
          "A) Masayı salonun ortasına koyduk.",
          "B) Geometride masa bir düzlemdir.",
          "C) Masanın üstünde birçok kitap vardı.",
          "D) Yemek masası çok güzeldi.",
          "E) Masa takımını yeni aldık."
        ],
        answer: "B",
        explanation: "B şıkkında 'masa' kelimesi geometri bilim dalında 'düzlem' anlamında terim anlam kazanmıştır. Diğer şıklarda gerçek anlamıyla (mobilya) kullanılmıştır."
      },
      {
        question: "I. Bu çok güzel bir manzara.\nII. Güneş bir yıldızdır.\nIII. O çok akıllı birisi.\n\nYukarıdaki cümlelerin hangilerinde öznel anlam vardır?",
        options: [
          "A) Yalnız I",
          "B) Yalnız II",
          "C) I ve II",
          "D) I ve III",
          "E) I, II ve III"
        ],
        answer: "D",
        explanation: "I ve III. cümlelerde 'güzel' ve 'akıllı' kelimeleri kişiye göre değişen öznel anlamlardır. II. cümledeki 'Güneş bir yıldızdır' bilimsel gerçek olup nesnel anlamdadır."
      },
      {
        question: "Aşağıdaki kelimelerden hangisi soyut anlamlıdır?",
        options: [
          "A) Masa",
          "B) Kalem",
          "C) Sevgi",
          "D) Ağaç",
          "E) Sandalye"
        ],
        answer: "C",
        explanation: "'Sevgi' kelimesi beş duyuyla algılanamayan, soyut bir kavramdır. Diğer seçeneklerdeki kelimeler somut varlıklardır."
      },
      {
        question: "'Bahar' kelimesinin aşağıdakilerden hangisini çağrıştırması en az olasıdır?",
        options: [
          "A) Yeniden doğuş",
          "B) Karanlık",
          "C) Tazelik",
          "D) Umut",
          "E) Çiçekler"
        ],
        answer: "B",
        explanation: "'Bahar' kelimesi genellikle yeniden doğuş, tazelik, umut, çiçekler gibi olumlu kavramları çağrıştırır. 'Karanlık' daha çok kış mevsimini çağrıştıran bir kavramdır."
      },
      {
        question: "Aşağıdaki cümlelerin hangisinde mecaz-ı mürsel (ad aktarması) vardır?",
        options: [
          "A) Çiçekler açmış bahçede.",
          "B) Düşman başını vurduk.",
          "C) Güneş doğudan doğar.",
          "D) Kuşlar gökyüzünde uçuyor.",
          "E) Deniz çok derin."
        ],
        answer: "B",
        explanation: "B şıkkında 'başını' kelimesi parça-bütün ilişkisiyle 'düşmanın tamamı' anlamında kullanılmıştır (mecaz-ı mürsel). Diğer cümlelerde mecaz-ı mürsel yoktur."
      },
      {
        question: "Aşağıdaki cümlelerin hangisinde istiare (eğretileme) vardır?",
        options: [
          "A) Asker aslan gibi savaştı.",
          "B) Aslan savaştı.",
          "C) Aslan çok güçlü bir hayvandır.",
          "D) Aslan ormanda dolaşıyor.",
          "E) Aslanlar avlanıyor."
        ],
        answer: "B",
        explanation: "B şıkkında 'Aslan' kelimesi 'asker' yerine kullanılmıştır (kapalı benzetme). A şıkkında açık benzetme vardır. C, D ve E şıklarında gerçek anlam vardır."
      }
    ],
    tips: [
      "Gerçek-mecaz anlam ayrımında benzetme var mı kontrol edin",
      "Terim anlam bilim dalına özgü teknik anlamdır, yan anlam ikincil anlamdır",
      "Öznel=kişiye göre değişir, Nesnel=bilimsel gerçek değişmez",
      "Somut=5 duyuyla algılanır, Soyut=düşünce ile kavranır",
      "Çağrışım kişiden kişiye değişebilir, şiirde sıkça kullanılır",
      "Mecaz-ı Mürsel'de benzetme YOK, sadece ilişki vardır (parça-bütün, kap-içerik vb.)",
      "İstiare=kapalı benzetme, benzeyen gizli benzetilen açık (Aslan savaştı)"
    ]
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
