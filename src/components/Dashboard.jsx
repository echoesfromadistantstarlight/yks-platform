import { useState, useEffect } from 'react';
import { Home, BookOpen, TrendingUp, Calendar, Settings, GraduationCap, ChevronRight, Share2 } from 'lucide-react';
import SubjectList from './SubjectList';
import ProgressChart from './ProgressChart';
import StudyPlan from './StudyPlan';
import TopicDetail from './TopicDetail';
import { yksData } from '../data/yksData';

const Dashboard = ({ onBackToHome }) => {
  const [selectedExam, setSelectedExam] = useState('tyt');
  const [progress, setProgress] = useState(() => {
    const saved = localStorage.getItem('yks-progress');
    return saved ? JSON.parse(saved) : {};
  });
  const [activeTab, setActiveTab] = useState('subjects');
  const [selectedTopic, setSelectedTopic] = useState(null);

  useEffect(() => {
    localStorage.setItem('yks-progress', JSON.stringify(progress));
  }, [progress]);

  const toggleTopic = (examType, subjectId, topicName) => {
    const key = `${examType}-${subjectId}-${topicName}`;
    setProgress(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const openTopicDetail = (examType, subjectId, topicName, subjectColor) => {
    setSelectedTopic({ examType, subjectId, topicName, subjectColor });
  };

  const closeTopicDetail = () => {
    setSelectedTopic(null);
  };

  const isTopicCompleted = (examType, subjectId, topicName) => {
    const key = `${examType}-${subjectId}-${topicName}`;
    return progress[key] || false;
  };

  const calculateProgress = (examType) => {
    const exam = yksData[examType];
    let totalTopics = 0;
    let completedTopics = 0;

    exam.subjects.forEach(subject => {
      subject.topics.forEach(topic => {
        totalTopics++;
        const key = `${examType}-${subject.id}-${topic.name}`;
        if (progress[key]) completedTopics++;
      });
    });

    return totalTopics > 0 ? Math.round((completedTopics / totalTopics) * 100) : 0;
  };

  const tytProgress = calculateProgress('tyt');
  const aytProgress = calculateProgress('ayt');

  // WhatsApp paylaşma fonksiyonu
  const shareProgressToWhatsApp = () => {
    // Toplam ve tamamlanan konu sayılarını hesapla
    let totalTopics = 0;
    let completedTopics = 0;
    const completedBySubject = {};
    
    // Sayısal öğrenci için sadece gerekli dersler
    const sayisalSubjects = ['turkce', 'matematik', 'fen', 'sosyal', 'ayt-matematik', 'ayt-fizik', 'ayt-kimya', 'ayt-biyoloji'];
    
    ['tyt', 'ayt'].forEach(examType => {
      const exam = yksData[examType];
      exam.subjects.forEach(subject => {
        // Sayısal öğrenci için filtreleme: TDE, Tarih, Coğrafya HARİÇ
        if (examType === 'ayt' && !['ayt-matematik', 'ayt-fizik', 'ayt-kimya', 'ayt-biyoloji'].includes(subject.id)) {
          return; // TDE, Tarih, Coğrafya'yı atla
        }
        
        const subjectKey = `${examType.toUpperCase()} - ${subject.name}`;
        completedBySubject[subjectKey] = { completed: 0, total: subject.topics.length };
        
        subject.topics.forEach(topic => {
          totalTopics++;
          const key = `${examType}-${subject.id}-${topic.name}`;
          if (progress[key]) {
            completedTopics++;
            completedBySubject[subjectKey].completed++;
          }
        });
      });
    });

    const overallProgress = totalTopics > 0 ? Math.round((completedTopics / totalTopics) * 100) : 0;

    // WhatsApp mesajını oluştur
    let message = `📚 *YKS 2026 İLERLEYİŞ RAPORU* 📚\n\n`;
    message += `👤 *Öğrenci İlerleyiş Özeti*\n`;
    message += `━━━━━━━━━━━━━━━━━━━━\n\n`;
    
    message += `📊 *GENEL DURUM*\n`;
    message += `✅ Tamamlanan Konu: *${completedTopics}/${totalTopics}*\n`;
    message += `📈 Genel İlerleme: *%${overallProgress}*\n`;
    message += `🎯 TYT İlerleme: *%${tytProgress}*\n`;
    message += `🎯 AYT İlerleme: *%${aytProgress}*\n\n`;
    
    message += `📚 *DERS BAZLI İLERLEME*\n`;
    message += `━━━━━━━━━━━━━━━━━━━━\n\n`;
    
    Object.entries(completedBySubject).forEach(([subject, data]) => {
      const percentage = data.total > 0 ? Math.round((data.completed / data.total) * 100) : 0;
      const bar = '█'.repeat(Math.floor(percentage / 10)) + '░'.repeat(10 - Math.floor(percentage / 10));
      message += `*${subject}*\n`;
      message += `${bar} %${percentage}\n`;
      message += `${data.completed}/${data.total} konu tamamlandı\n\n`;
    });
    
    message += `━━━━━━━━━━━━━━━━━━━━\n`;
    message += `📅 Tarih: ${new Date().toLocaleDateString('tr-TR')}\n`;
    message += `🚀 Platform: YKS Konu Takip Sistemi`;

    // WhatsApp URL'i oluştur - Direkt öğretmene gönder
    const phoneNumber = '905525237453'; // Türkiye +90 ile
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    
    // Yeni sekmede aç
    window.open(whatsappUrl, '_blank');
  };

  const tabs = [
    { id: 'subjects', label: 'Konular', icon: <BookOpen className="w-5 h-5" /> },
    { id: 'progress', label: 'İlerleme', icon: <TrendingUp className="w-5 h-5" /> },
    { id: 'plan', label: 'Çalışma Planı', icon: <Calendar className="w-5 h-5" /> }
  ];

  // Eğer konu detayı seçiliyse, onu göster
  if (selectedTopic) {
    return (
      <TopicDetail
        examType={selectedTopic.examType}
        subjectId={selectedTopic.subjectId}
        topicName={selectedTopic.topicName}
        subjectColor={selectedTopic.subjectColor}
        onBack={closeTopicDetail}
        onComplete={() => {
          toggleTopic(selectedTopic.examType, selectedTopic.subjectId, selectedTopic.topicName);
        }}
        isCompleted={isTopicCompleted(selectedTopic.examType, selectedTopic.subjectId, selectedTopic.topicName)}
      />
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-3 xs:px-4 sm:px-5 md:px-6 lg:px-8 py-3 xs:py-4">
          <div className="flex items-center justify-between gap-2 xs:gap-3">
            <div className="flex items-center gap-2 xs:gap-2.5 sm:gap-3 min-w-0 flex-1">
              <GraduationCap className="w-7 h-7 xs:w-8 xs:h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-blue-600 flex-shrink-0" />
              <div className="min-w-0">
                <h1 className="text-sm xs:text-base sm:text-lg md:text-2xl lg:text-3xl font-bold text-gray-900 leading-tight truncate">YKS Konu Takip</h1>
                <p className="text-[10px] xs:text-xs sm:text-sm text-gray-600 hidden xs:block">2026 Sınav Dönemi</p>
              </div>
            </div>
            <button
              onClick={onBackToHome}
              className="flex items-center justify-center gap-1.5 px-2.5 xs:px-3 sm:px-4 md:px-5 py-2 sm:py-2.5 bg-gradient-to-r from-red-500 to-pink-500 text-white rounded-lg hover:from-red-600 hover:to-pink-600 active:scale-[0.98] transition-all shadow-lg hover:shadow-xl min-h-[44px] min-w-[44px] flex-shrink-0"
            >
              <Home className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="font-semibold text-xs sm:text-sm hidden sm:inline">Ana Sayfa</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto px-3 xs:px-4 sm:px-5 md:px-6 py-3 xs:py-4 sm:py-6 md:py-8">
        {/* Welcome Banner */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg sm:rounded-xl md:rounded-2xl p-3 xs:p-4 sm:p-5 md:p-6 lg:p-8 mb-3 xs:mb-4 sm:mb-6 md:mb-8 text-white">
          <h1 className="text-lg xs:text-xl sm:text-2xl md:text-3xl font-bold mb-1 xs:mb-1.5 sm:mb-2">Merhaba! 👋</h1>
          <p className="text-xs xs:text-sm sm:text-base text-blue-100 mb-2 xs:mb-3 sm:mb-4 hidden xs:block">
            Bugün hangi konulara çalışmayı planlıyorsun?
          </p>
          <div className="flex flex-wrap gap-2 xs:gap-2.5 sm:gap-3 md:gap-4 mb-3 xs:mb-4">
            <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-md sm:rounded-lg px-2.5 xs:px-3 sm:px-4 md:px-6 py-1.5 xs:py-2 sm:py-2.5 md:py-3">
              <div className="text-[10px] xs:text-xs sm:text-sm opacity-90">Toplam İlerleme</div>
              <div className="text-lg xs:text-xl sm:text-2xl font-bold">{Math.round((tytProgress + aytProgress) / 2)}%</div>
            </div>
            <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-md sm:rounded-lg px-2.5 xs:px-3 sm:px-4 md:px-6 py-1.5 xs:py-2 sm:py-2.5 md:py-3">
              <div className="text-[10px] xs:text-xs sm:text-sm opacity-90">Tamamlanan Konular</div>
              <div className="text-lg xs:text-xl sm:text-2xl font-bold">
                {Object.values(progress).filter(Boolean).length}/{(() => {
                  let total = 0;
                  yksData.tyt.subjects.forEach(subject => total += subject.topics.length);
                  yksData.ayt.subjects.forEach(subject => total += subject.topics.length);
                  return total;
                })()}
              </div>
            </div>
          </div>
          
          {/* WhatsApp Paylaşma Butonu */}
          <button
            onClick={shareProgressToWhatsApp}
            className="w-full flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 active:scale-[0.98] text-white font-bold py-2.5 xs:py-3 sm:py-3.5 px-4 rounded-lg sm:rounded-xl transition-all shadow-lg hover:shadow-xl"
          >
            <Share2 className="w-4 h-4 xs:w-5 xs:h-5" />
            <span className="text-xs xs:text-sm sm:text-base">İlerleyişimi WhatsApp'ta Paylaş</span>
          </button>
        </div>

        {/* Tabs */}
        <div className="flex gap-1.5 xs:gap-2 mb-3 xs:mb-4 sm:mb-5 md:mb-6 overflow-x-auto pb-2">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-1.5 xs:gap-2 px-3 xs:px-4 sm:px-5 md:px-6 py-2 xs:py-2.5 sm:py-3 rounded-md sm:rounded-lg text-xs xs:text-sm sm:text-base font-semibold transition-all whitespace-nowrap ${
                activeTab === tab.id
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-gray-50'
              }`}
            >
              {tab.icon}
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Tab Content */}
        {activeTab === 'subjects' && (
          <div>
            {/* Exam Type Selector */}
            <div className="flex gap-2 xs:gap-2.5 sm:gap-3 md:gap-4 mb-3 xs:mb-4 sm:mb-5 md:mb-6">
              <button
                onClick={() => setSelectedExam('tyt')}
                className={`flex-1 p-2.5 xs:p-3 sm:p-4 md:p-5 lg:p-6 rounded-lg sm:rounded-xl font-semibold transition-all ${
                  selectedExam === 'tyt'
                    ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg sm:shadow-xl sm:scale-105'
                    : 'bg-white text-gray-700 hover:shadow-md sm:hover:shadow-lg'
                }`}
              >
                <div className="text-base xs:text-lg sm:text-xl md:text-2xl font-bold mb-0.5 xs:mb-1">TYT</div>
                <div className={`text-[10px] xs:text-xs sm:text-sm hidden xs:block ${selectedExam === 'tyt' ? 'text-blue-100' : 'text-gray-500'}`}>
                  Temel Yeterlilik Testi
                </div>
                <div className="mt-1.5 xs:mt-2">
                  <div className="h-1.5 xs:h-2 bg-white bg-opacity-30 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-white rounded-full transition-all duration-500"
                      style={{ width: `${tytProgress}%` }}
                    />
                  </div>
                  <div className="text-[10px] xs:text-xs sm:text-sm font-bold mt-0.5 xs:mt-1">{tytProgress}%</div>
                </div>
              </button>

              <button
                onClick={() => setSelectedExam('ayt')}
                className={`flex-1 p-2.5 xs:p-3 sm:p-4 md:p-5 lg:p-6 rounded-lg sm:rounded-xl font-semibold transition-all ${
                  selectedExam === 'ayt'
                    ? 'bg-gradient-to-r from-purple-600 to-purple-700 text-white shadow-lg sm:shadow-xl sm:scale-105'
                    : 'bg-white text-gray-700 hover:shadow-md sm:hover:shadow-lg'
                }`}
              >
                <div className="text-base xs:text-lg sm:text-xl md:text-2xl font-bold mb-0.5 xs:mb-1">AYT</div>
                <div className={`text-[10px] xs:text-xs sm:text-sm hidden xs:block ${selectedExam === 'ayt' ? 'text-purple-100' : 'text-gray-500'}`}>
                  Alan Yeterlilik Testi
                </div>
                <div className="mt-1.5 xs:mt-2">
                  <div className="h-1.5 xs:h-2 bg-white bg-opacity-30 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-white rounded-full transition-all duration-500"
                      style={{ width: `${aytProgress}%` }}
                    />
                  </div>
                  <div className="text-[10px] xs:text-xs sm:text-sm font-bold mt-0.5 xs:mt-1">{aytProgress}%</div>
                </div>
              </button>
            </div>

            {/* Subject List */}
            <SubjectList
              exam={yksData[selectedExam]}
              examType={selectedExam}
              progress={progress}
              onToggleTopic={toggleTopic}
              onTopicClick={openTopicDetail}
            />
          </div>
        )}

        {activeTab === 'progress' && (
          <ProgressChart 
            tytProgress={tytProgress} 
            aytProgress={aytProgress}
            progress={progress}
            yksData={yksData}
          />
        )}

        {activeTab === 'plan' && (
          <StudyPlan 
            progress={progress}
            yksData={yksData}
          />
        )}
      </div>
    </div>
  );
};

export default Dashboard;
