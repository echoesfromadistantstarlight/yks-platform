import { useState } from 'react';
import { ChevronDown, ChevronUp, Check, AlertCircle, Clock } from 'lucide-react';
import { getPriorityColor, getPriorityLabel } from '../data/yksData';

const SubjectList = ({ exam, examType, progress, onToggleTopic, onTopicClick }) => {
  const [expandedSubjects, setExpandedSubjects] = useState({});

  const toggleSubject = (subjectId) => {
    setExpandedSubjects(prev => ({
      ...prev,
      [subjectId]: !prev[subjectId]
    }));
  };

  const getSubjectProgress = (subject) => {
    const total = subject.topics.length;
    const completed = subject.topics.filter(topic => 
      progress[`${examType}-${subject.id}-${topic.name}`]
    ).length;
    return { completed, total, percentage: Math.round((completed / total) * 100) };
  };

  return (
    <div className="space-y-4">
      {exam.subjects.map(subject => {
        const subjectProgress = getSubjectProgress(subject);
        const isExpanded = expandedSubjects[subject.id];

        return (
          <div key={subject.id} className="card">
            <button
              onClick={() => toggleSubject(subject.id)}
              className="w-full flex items-center justify-between"
            >
              <div className="flex items-center space-x-4">
                <div 
                  className="w-16 h-16 rounded-xl flex items-center justify-center text-white font-bold text-xl"
                  style={{ backgroundColor: subject.color }}
                >
                  {subject.questions}
                </div>
                <div className="text-left">
                  <h3 className="text-xl font-bold text-gray-900">{subject.name}</h3>
                  <p className="text-sm text-gray-500">
                    {subject.questions} Soru • {subjectProgress.completed}/{subjectProgress.total} Konu Tamamlandı
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="text-right">
                  <div className="text-2xl font-bold" style={{ color: subject.color }}>
                    {subjectProgress.percentage}%
                  </div>
                  <div className="text-xs text-gray-500">İlerleme</div>
                </div>
                {isExpanded ? (
                  <ChevronUp className="w-6 h-6 text-gray-400" />
                ) : (
                  <ChevronDown className="w-6 h-6 text-gray-400" />
                )}
              </div>
            </button>

            {/* Progress Bar */}
            <div className="mt-4 h-2 bg-gray-200 rounded-full overflow-hidden">
              <div
                className="h-full transition-all duration-500 rounded-full"
                style={{ 
                  width: `${subjectProgress.percentage}%`,
                  backgroundColor: subject.color
                }}
              />
            </div>

            {/* Topics List */}
            {isExpanded && (
              <div className="mt-6 space-y-3 animate-fade-in">
                {subject.topics.map((topic, index) => {
                  const isCompleted = progress[`${examType}-${subject.id}-${topic.name}`];
                  const priorityColor = getPriorityColor(topic.priority);
                  const priorityLabel = getPriorityLabel(topic.priority);

                  return (
                    <div
                      key={index}
                      className={`p-4 rounded-lg border-2 transition-all ${
                        isCompleted
                          ? 'bg-green-50 border-green-300'
                          : 'bg-gray-50 border-gray-200 hover:border-blue-300'
                      }`}
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            <button
                              onClick={() => onToggleTopic(examType, subject.id, topic.name)}
                              className={`flex items-center justify-center w-6 h-6 rounded border-2 transition-all ${
                                isCompleted
                                  ? 'bg-green-500 border-green-500'
                                  : 'border-gray-300 hover:border-blue-500'
                              }`}
                            >
                              {isCompleted && <Check className="w-4 h-4 text-white" />}
                            </button>
                            <button
                              onClick={() => onTopicClick(examType, subject.id, topic.name, subject.color)}
                              className={`font-semibold hover:text-blue-600 transition-colors text-left ${
                                isCompleted ? 'text-gray-500 line-through' : 'text-gray-900'
                              }`}
                            >
                              {topic.name}
                            </button>
                          </div>

                          <div className="flex flex-wrap gap-2 ml-8">
                            <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${priorityColor}`}>
                              {priorityLabel}
                            </span>
                            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-blue-100 text-blue-700 border border-blue-300">
                              {topic.questions} Soru
                            </span>
                            {topic.description && (
                              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-red-100 text-red-700 border border-red-300 flex items-center space-x-1">
                                <AlertCircle className="w-3 h-3" />
                                <span>{topic.description}</span>
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default SubjectList;
