import { useState, useEffect } from 'react';
import { Home, BookOpen, TrendingUp, Calendar, Settings, GraduationCap, ChevronRight } from 'lucide-react';
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
      <div className="container mx-auto px-6 py-8">
        {/* Welcome Banner */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 mb-8 text-white">
          <h1 className="text-3xl font-bold mb-2">Merhaba! 👋</h1>
          <p className="text-blue-100 mb-4">
            Bugün hangi konulara çalışmayı planlıyorsun?
          </p>
          <div className="flex flex-wrap gap-4">
            <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg px-6 py-3">
              <div className="text-sm opacity-90">Toplam İlerleme</div>
              <div className="text-2xl font-bold">{Math.round((tytProgress + aytProgress) / 2)}%</div>
            </div>
            <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg px-6 py-3">
              <div className="text-sm opacity-90">Tamamlanan Konular</div>
              <div className="text-2xl font-bold">
                {Object.values(progress).filter(Boolean).length}
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex space-x-2 mb-6 overflow-x-auto">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-semibold transition-all whitespace-nowrap ${
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
            <div className="flex space-x-4 mb-6">
              <button
                onClick={() => setSelectedExam('tyt')}
                className={`flex-1 p-6 rounded-xl font-semibold transition-all ${
                  selectedExam === 'tyt'
                    ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-xl scale-105'
                    : 'bg-white text-gray-700 hover:shadow-lg'
                }`}
              >
                <div className="text-2xl font-bold mb-1">TYT</div>
                <div className={`text-sm ${selectedExam === 'tyt' ? 'text-blue-100' : 'text-gray-500'}`}>
                  Temel Yeterlilik Testi
                </div>
                <div className="mt-2">
                  <div className="h-2 bg-white bg-opacity-30 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-white rounded-full transition-all duration-500"
                      style={{ width: `${tytProgress}%` }}
                    />
                  </div>
                  <div className="text-sm font-bold mt-1">{tytProgress}% Tamamlandı</div>
                </div>
              </button>

              <button
                onClick={() => setSelectedExam('ayt')}
                className={`flex-1 p-6 rounded-xl font-semibold transition-all ${
                  selectedExam === 'ayt'
                    ? 'bg-gradient-to-r from-purple-600 to-purple-700 text-white shadow-xl scale-105'
                    : 'bg-white text-gray-700 hover:shadow-lg'
                }`}
              >
                <div className="text-2xl font-bold mb-1">AYT</div>
                <div className={`text-sm ${selectedExam === 'ayt' ? 'text-purple-100' : 'text-gray-500'}`}>
                  Alan Yeterlilik Testi
                </div>
                <div className="mt-2">
                  <div className="h-2 bg-white bg-opacity-30 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-white rounded-full transition-all duration-500"
                      style={{ width: `${aytProgress}%` }}
                    />
                  </div>
                  <div className="text-sm font-bold mt-1">{aytProgress}% Tamamlandı</div>
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
