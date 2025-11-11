import { AlertTriangle, CheckCircle2, Clock, Flame, Lightbulb, Target } from 'lucide-react';
import { studyTips } from '../data/yksData';

const StudyPlan = ({ progress, yksData }) => {
  const getPriorityTopics = () => {
    const allTopics = [];

    ['tyt', 'ayt'].forEach(examType => {
      const exam = yksData[examType];
      exam.subjects.forEach(subject => {
        subject.topics.forEach(topic => {
          const key = `${examType}-${subject.id}-${topic.name}`;
          if (!progress[key]) {
            allTopics.push({
              examType: examType.toUpperCase(),
              subject: subject.name,
              topic: topic.name,
              priority: topic.priority,
              questions: topic.questions,
              description: topic.description,
              color: subject.color
            });
          }
        });
      });
    });

    return allTopics.sort((a, b) => {
      const priorityOrder = { high: 0, medium: 1, low: 2 };
      return priorityOrder[a.priority] - priorityOrder[b.priority];
    });
  };

  const priorityTopics = getPriorityTopics();
  const highPriority = priorityTopics.filter(t => t.priority === 'high');
  const mediumPriority = priorityTopics.filter(t => t.priority === 'medium');
  const lowPriority = priorityTopics.filter(t => t.priority === 'low');

  const getPriorityIcon = (priority) => {
    switch(priority) {
      case 'high': return <Flame className="w-5 h-5 text-red-500" />;
      case 'medium': return <Clock className="w-5 h-5 text-yellow-500" />;
      case 'low': return <CheckCircle2 className="w-5 h-5 text-green-500" />;
      default: return null;
    }
  };

  const getPriorityBg = (priority) => {
    switch(priority) {
      case 'high': return 'bg-red-50 border-red-300';
      case 'medium': return 'bg-yellow-50 border-yellow-300';
      case 'low': return 'bg-green-50 border-green-300';
      default: return 'bg-gray-50 border-gray-300';
    }
  };

  return (
    <div className="space-y-6">
      {/* Study Tips */}
      <div className="card bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="flex items-center space-x-3 mb-4">
          <Lightbulb className="w-8 h-8" />
          <h2 className="text-2xl font-bold">Çalışma Stratejileri</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {studyTips.map((tip, index) => (
            <div key={index} className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg p-4">
              <div className="text-3xl mb-2">{tip.icon}</div>
              <h3 className="font-bold mb-1">{tip.title}</h3>
              <p className="text-sm text-blue-100">{tip.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Priority Summary */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="card bg-gradient-to-br from-red-50 to-red-100 border-2 border-red-200">
          <div className="flex items-center space-x-3 mb-2">
            <Flame className="w-6 h-6 text-red-600" />
            <h3 className="text-lg font-bold text-red-900">Yüksek Öncelik</h3>
          </div>
          <div className="text-4xl font-bold text-red-600">{highPriority.length}</div>
          <p className="text-sm text-red-700 mt-1">Bu ana ünitelere hemen başla!</p>
        </div>

        <div className="card bg-gradient-to-br from-yellow-50 to-yellow-100 border-2 border-yellow-200">
          <div className="flex items-center space-x-3 mb-2">
            <Clock className="w-6 h-6 text-yellow-600" />
            <h3 className="text-lg font-bold text-yellow-900">Orta Öncelik</h3>
          </div>
          <div className="text-4xl font-bold text-yellow-600">{mediumPriority.length}</div>
          <p className="text-sm text-yellow-700 mt-1">Bunları da ihmal etme</p>
        </div>

        <div className="card bg-gradient-to-br from-green-50 to-green-100 border-2 border-green-200">
          <div className="flex items-center space-x-3 mb-2">
            <CheckCircle2 className="w-6 h-6 text-green-600" />
            <h3 className="text-lg font-bold text-green-900">Düşük Öncelik</h3>
          </div>
          <div className="text-4xl font-bold text-green-600">{lowPriority.length}</div>
          <p className="text-sm text-green-700 mt-1">Zaman kalırsa bunlara bak</p>
        </div>
      </div>

      {/* High Priority Topics */}
      {highPriority.length > 0 && (
        <div className="card">
          <div className="flex items-center space-x-3 mb-6">
            <div className="bg-red-500 p-2 rounded-lg">
              <Flame className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900">🔥 Önce Bunlara Odaklan!</h2>
              <p className="text-gray-600">En çok soru çıkan ve önemli ana üniteler</p>
            </div>
          </div>
          <div className="space-y-3">
            {highPriority.slice(0, 10).map((topic, index) => (
              <div
                key={index}
                className={`p-4 rounded-lg border-2 ${getPriorityBg(topic.priority)} hover:shadow-md transition-shadow`}
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      {getPriorityIcon(topic.priority)}
                      <span className="font-semibold text-xs px-2 py-1 rounded" style={{ backgroundColor: topic.color, color: 'white' }}>
                        {topic.examType}
                      </span>
                      <span className="font-semibold text-gray-700">{topic.subject}</span>
                    </div>
                    <h4 className="font-bold text-lg text-gray-900 mb-1">{topic.topic}</h4>
                    <div className="flex flex-wrap gap-2">
                      <span className="text-xs px-2 py-1 bg-blue-100 text-blue-700 rounded">
                        {topic.questions} Soru
                      </span>
                      {topic.description && (
                        <span className="text-xs px-2 py-1 bg-red-100 text-red-700 rounded flex items-center space-x-1">
                          <AlertTriangle className="w-3 h-3" />
                          <span>{topic.description}</span>
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="text-2xl font-bold text-red-500">#{index + 1}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Medium Priority Topics */}
      {mediumPriority.length > 0 && (
        <div className="card">
          <div className="flex items-center space-x-3 mb-6">
            <div className="bg-yellow-500 p-2 rounded-lg">
              <Clock className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900">⚡ Bunları da Unutma!</h2>
              <p className="text-gray-600">Orta öncelikli ana üniteler</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {mediumPriority.slice(0, 8).map((topic, index) => (
              <div
                key={index}
                className={`p-3 rounded-lg border ${getPriorityBg(topic.priority)}`}
              >
                <div className="flex items-center space-x-2 mb-1">
                  <span className="text-xs font-semibold px-2 py-1 rounded" style={{ backgroundColor: topic.color, color: 'white' }}>
                    {topic.examType}
                  </span>
                  <span className="text-sm font-semibold text-gray-700">{topic.subject}</span>
                </div>
                <h4 className="font-bold text-gray-900">{topic.topic}</h4>
                <span className="text-xs px-2 py-1 bg-blue-100 text-blue-700 rounded inline-block mt-1">
                  {topic.questions} Soru
                </span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Completion Message */}
      {priorityTopics.length === 0 && (
        <div className="card bg-gradient-to-r from-green-500 to-green-600 text-white text-center py-12">
          <Target className="w-16 h-16 mx-auto mb-4" />
          <h2 className="text-3xl font-bold mb-2">🎉 Tebrikler!</h2>
          <p className="text-xl text-green-100">
            Tüm ana üniteleri tamamladın! Şimdi tekrar ve deneme sınavlarına odaklanabilirsin.
          </p>
        </div>
      )}
    </div>
  );
};

export default StudyPlan;
