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
    <div className="space-y-3 xs:space-y-3.5 sm:space-y-4 md:space-y-5">
      {exam.subjects.map(subject => {
        const subjectProgress = getSubjectProgress(subject);
        const isExpanded = expandedSubjects[subject.id];

        return (
          <div key={subject.id} className="bg-white rounded-lg sm:rounded-xl lg:rounded-2xl shadow-md sm:shadow-lg p-4 xs:p-4.5 sm:p-5 md:p-6 hover:shadow-xl transition-all">
            <button
              onClick={() => toggleSubject(subject.id)}
              className="w-full flex items-center justify-between"
            >
              <div className="flex items-center gap-2.5 xs:gap-3 sm:gap-4 md:gap-5">
                <div 
                  className="w-11 h-11 xs:w-12 xs:h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 rounded-lg sm:rounded-xl flex items-center justify-center text-white font-bold text-base xs:text-lg sm:text-xl md:text-2xl lg:text-3xl shadow-md"
                  style={{ backgroundColor: subject.color }}
                >
                  {subject.questions}
                </div>
                <div className="text-left flex-1 min-w-0">
                  <h3 className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-gray-900 truncate">{subject.name}</h3>
                  <p className="text-xs xs:text-sm sm:text-base text-gray-500">
                    {subject.questions} Soru • {subjectProgress.completed}/{subjectProgress.total} Konu
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2 xs:gap-2.5 sm:gap-3 md:gap-4">
                <div className="text-right">
                  <div className="text-lg xs:text-xl sm:text-2xl md:text-3xl font-bold" style={{ color: subject.color }}>
                    {subjectProgress.percentage}%
                  </div>
                  <div className="text-[10px] xs:text-xs sm:text-sm text-gray-500 hidden xs:block">İlerleme</div>
                </div>
                {isExpanded ? (
                  <ChevronUp className="w-5 h-5 xs:w-6 xs:h-6 sm:w-7 sm:h-7 text-gray-400" />
                ) : (
                  <ChevronDown className="w-5 h-5 xs:w-6 xs:h-6 sm:w-7 sm:h-7 text-gray-400" />
                )}
              </div>
            </button>

            {/* Progress Bar */}
            <div className="mt-3 xs:mt-4">
              <div className="flex items-center justify-between mb-1.5 xs:mb-2 text-xs xs:text-sm text-gray-600">
                <span>Tamamlanan: {subjectProgress.completed}/{subjectProgress.total}</span>
                <span className="font-semibold">{subjectProgress.percentage}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5 xs:h-3 sm:h-3.5 overflow-hidden shadow-inner">
                <div
                  className="h-full transition-all duration-500 rounded-full"
                  style={{ 
                    width: `${subjectProgress.percentage}%`,
                    backgroundColor: subject.color
                  }}
                />
              </div>
            </div>

            {/* Topics List */}
            {isExpanded && (
              <div className="mt-4 xs:mt-5 sm:mt-6 space-y-2 xs:space-y-2.5 sm:space-y-3 animate-fade-in">
                {subject.topics.map((topic, index) => {
                  const isCompleted = progress[`${examType}-${subject.id}-${topic.name}`];
                  const priorityColor = getPriorityColor(topic.priority);
                  const priorityLabel = getPriorityLabel(topic.priority);

                  return (
                    <div
                      key={index}
                      onClick={() => onTopicClick(examType, subject.id, topic.name, subject.color)}
                      className={`p-2 xs:p-2.5 sm:p-3 md:p-4 rounded-md sm:rounded-lg border-2 transition-all cursor-pointer active:scale-[0.99] shadow-sm hover:shadow-md ${
                        isCompleted
                          ? 'bg-green-50 border-green-300 hover:border-green-400'
                          : 'bg-gray-50 border-gray-200 hover:border-blue-400 hover:bg-blue-50'
                      }`}
                    >
                      <div className="flex items-center gap-2 xs:gap-2.5">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            onToggleTopic(examType, subject.id, topic.name);
                          }}
                          className={`flex-shrink-0 flex items-center justify-center w-5 h-5 xs:w-5.5 xs:h-5.5 sm:w-6 sm:h-6 rounded border-2 transition-all ${
                            isCompleted
                              ? 'bg-green-500 border-green-500'
                              : 'border-gray-300 hover:border-blue-500'
                          }`}
                        >
                          {isCompleted && <Check className="w-3 h-3 xs:w-3.5 xs:h-3.5 sm:w-4 sm:h-4 text-white" />}
                        </button>
                        
                        <div className="flex-1 min-w-0 flex items-center justify-between gap-2">
                          <h4 className="font-semibold text-xs xs:text-sm sm:text-base text-gray-900">{topic.name}</h4>
                          
                          <div className="flex items-center gap-1.5 xs:gap-2 flex-shrink-0">
                            <span className="text-[10px] xs:text-xs font-bold whitespace-nowrap" style={{ color: subject.color }}>
                              {topic.questions} Soru
                            </span>
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
