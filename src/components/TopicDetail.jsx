import { useState } from 'react';
import { ArrowLeft, BookOpen, CheckCircle2, Lightbulb, FileQuestion, Trophy } from 'lucide-react';
import { getTopicDetail } from '../data/topicDetails';

const TopicDetail = ({ examType, subjectId, topicName, subjectColor, onBack, onComplete, isCompleted }) => {
  const [showAnswer, setShowAnswer] = useState({});
  const [selectedOptions, setSelectedOptions] = useState({});
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const topicData = getTopicDetail(examType, subjectId, topicName);

  const toggleAnswer = (index) => {
    setShowAnswer(prev => ({ ...prev, [index]: !prev[index] }));
  };

  const selectOption = (questionIndex, option) => {
    setSelectedOptions(prev => ({
      ...prev,
      [questionIndex]: option
    }));
    // Şık seçilince otomatik olarak cevabı göster
    setShowAnswer(prev => ({
      ...prev,
      [questionIndex]: true
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 p-3 xs:p-4 sm:p-5 md:p-6 lg:p-8 xl:p-10">
      {/* Header */}
      <div className="bg-white shadow-lg sticky top-0 z-10">
        <div className="max-w-7xl mx-auto">
          <div className="px-3 xs:px-4 sm:px-5 md:px-6 lg:px-8 py-3 sm:py-4">
            <div className="flex items-center justify-between">
              <button
                onClick={onBack}
                className="flex items-center space-x-1 xs:space-x-2 px-3 xs:px-4 sm:px-5 py-2 sm:py-2.5 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors text-sm sm:text-base"
              >
                <ArrowLeft className="w-4 h-4 xs:w-5 xs:h-5" />
                <span className="hidden xs:inline">Geri</span>
                <span className="xs:hidden">←</span>
              </button>
              
              <button
                onClick={onComplete}
                className={`flex items-center space-x-1 xs:space-x-2 px-3 xs:px-4 sm:px-6 py-2 sm:py-2.5 rounded-lg text-sm sm:text-base font-semibold transition-all ${
                  isCompleted
                    ? 'bg-green-500 text-white'
                    : 'bg-blue-500 hover:bg-blue-600 text-white'
                }`}
              >
                <CheckCircle2 className="w-4 h-4 xs:w-5 xs:h-5" />
                <span className="hidden xs:inline">{isCompleted ? 'Tamamlandı ✓' : 'Tamamla'}</span>
                <span className="xs:hidden">{isCompleted ? '✓' : '✓?'}</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-3 xs:px-4 sm:px-5 md:px-6 lg:px-8 py-4 sm:py-6 md:py-8">
        {/* Title Section */}
        <div className="bg-white rounded-lg sm:rounded-xl lg:rounded-2xl shadow-md sm:shadow-lg p-4 xs:p-5 sm:p-6 md:p-7 lg:p-8 mb-4 xs:mb-5 sm:mb-6 md:mb-8 bg-gradient-to-r from-blue-50 to-purple-50 border-2" style={{ borderColor: subjectColor }}>
          <div className="flex flex-col sm:flex-row items-start gap-3 xs:gap-4 sm:gap-5 md:gap-6">
            <div className="p-2.5 xs:p-3 sm:p-3.5 md:p-4 lg:p-5 rounded-lg sm:rounded-xl" style={{ backgroundColor: subjectColor, color: 'white' }}>
              <BookOpen className="w-7 h-7 xs:w-8 xs:h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 lg:w-12 lg:h-12" />
            </div>
            <div className="flex-1">
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                <h1 className="text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 leading-tight">{topicData.title}</h1>
                <span className="px-2.5 xs:px-3 py-0.5 xs:py-1 bg-red-500 text-white text-xs xs:text-sm font-bold rounded-full inline-block">
                  {topicData.importance}
                </span>
              </div>
              <p className="text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl text-gray-700 mb-2 sm:mb-3 leading-relaxed">{topicData.description}</p>
              <div className="flex items-center gap-2 text-xs xs:text-sm">
                <span className="px-2.5 xs:px-3 py-0.5 xs:py-1 bg-white rounded-full font-semibold" style={{ color: subjectColor }}>
                  {examType.toUpperCase()}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="bg-white rounded-lg sm:rounded-xl lg:rounded-2xl shadow-md sm:shadow-lg p-4 xs:p-5 sm:p-6 md:p-7 lg:p-8 mb-4 xs:mb-5 sm:mb-6 md:mb-8">
          <div className="flex items-center space-x-3 mb-6">
            <div className="p-2 bg-blue-500 rounded-lg">
              <BookOpen className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">Konu Anlatımı</h2>
          </div>
          <div className="prose prose-lg max-w-none">
            <div 
              className="text-gray-700 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: topicData.content }}
            />
          </div>
        </div>

        {/* Examples Section */}
        {topicData.examples && topicData.examples.length > 0 && (
          <div className="bg-white rounded-lg sm:rounded-xl lg:rounded-2xl shadow-md sm:shadow-lg p-4 xs:p-5 sm:p-6 md:p-7 lg:p-8 mb-4 xs:mb-5 sm:mb-6 md:mb-8">
            <div className="flex items-center gap-2 xs:gap-2.5 sm:gap-3 mb-3 xs:mb-4 sm:mb-5 md:mb-6">
              <div className="p-1.5 xs:p-2 sm:p-2.5 bg-purple-500 rounded-md sm:rounded-lg">
                <FileQuestion className="w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-white" />
              </div>
              <h2 className="text-base xs:text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-900">Örnek Sorular</h2>
            </div>
            
            {/* Question Navigation */}
            <div className="flex items-center justify-between mb-3 xs:mb-4 sm:mb-5 md:mb-6 gap-1.5 xs:gap-2 sm:gap-3">
              <button
                onClick={() => setCurrentQuestionIndex(Math.max(0, currentQuestionIndex - 1))}
                disabled={currentQuestionIndex === 0}
                className="flex-shrink-0 px-2.5 xs:px-3 sm:px-4 md:px-5 lg:px-6 py-2 sm:py-2.5 md:py-3 bg-gray-200 hover:bg-gray-300 active:bg-gray-400 disabled:bg-gray-100 disabled:text-gray-400 rounded-md sm:rounded-lg text-xs xs:text-sm sm:text-base font-semibold transition-all shadow-sm hover:shadow min-w-[44px] min-h-[44px] flex items-center justify-center"
              >
                <span className="hidden md:inline">← Önceki</span>
                <span className="hidden sm:inline md:hidden">←</span>
                <span className="sm:hidden">←</span>
              </button>
              <div className="flex-1 flex justify-center">
                <span className="text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl text-gray-700 font-bold whitespace-nowrap bg-gray-100 px-3 xs:px-4 sm:px-5 py-1.5 xs:py-2 rounded-full">
                  {currentQuestionIndex + 1} / {topicData.examples.length}
                </span>
              </div>
              <button
                onClick={() => setCurrentQuestionIndex(Math.min(topicData.examples.length - 1, currentQuestionIndex + 1))}
                disabled={currentQuestionIndex === topicData.examples.length - 1}
                className="flex-shrink-0 px-2.5 xs:px-3 sm:px-4 md:px-5 lg:px-6 py-2 sm:py-2.5 md:py-3 bg-gray-200 hover:bg-gray-300 active:bg-gray-400 disabled:bg-gray-100 disabled:text-gray-400 rounded-md sm:rounded-lg text-xs xs:text-sm sm:text-base font-semibold transition-all shadow-sm hover:shadow min-w-[44px] min-h-[44px] flex items-center justify-center"
              >
                <span className="hidden md:inline">Sonraki →</span>
                <span className="hidden sm:inline md:hidden">→</span>
                <span className="sm:hidden">→</span>
              </button>
            </div>

            {/* Current Question */}
            <div className="space-y-6">
              {topicData.examples.filter((_, index) => index === currentQuestionIndex).map((example, index) => {
                const actualIndex = currentQuestionIndex;
                return (
                  <div key={actualIndex} className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg sm:rounded-xl lg:rounded-2xl p-3 xs:p-4 sm:p-5 md:p-6 lg:p-8 border border-gray-200 sm:border-2 shadow-sm">
                    <div className="flex items-center gap-2 xs:gap-2.5 sm:gap-3 mb-3 xs:mb-4">
                      <div className="bg-purple-500 text-white font-bold w-7 h-7 xs:w-8 xs:h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-full flex items-center justify-center text-xs xs:text-sm sm:text-base md:text-lg">
                        {actualIndex + 1}
                      </div>
                      <h3 className="text-sm xs:text-base sm:text-lg md:text-xl font-bold text-gray-900">Örnek Soru</h3>
                    </div>
                  
                  <div className="bg-white rounded-md sm:rounded-lg lg:rounded-xl p-3 xs:p-4 sm:p-5 md:p-6 mb-3 xs:mb-4 shadow-sm">
                    <p className="text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl text-gray-800 leading-relaxed whitespace-pre-line mb-3 xs:mb-4">
                      {example.question}
                    </p>
                    
                    <div className="space-y-1.5 xs:space-y-2 sm:space-y-2.5">
                      {example.options.map((option, optIndex) => {
                        const optionLetter = option.charAt(0);
                        const isSelected = selectedOptions[actualIndex] === optionLetter;
                        const isCorrect = showAnswer[actualIndex] && option.startsWith(example.answer + ')');
                        const isWrong = showAnswer[actualIndex] && isSelected && !isCorrect;
                        
                        return (
                          <button
                            key={optIndex}
                            onClick={() => selectOption(actualIndex, optionLetter)}
                            className={`w-full text-left p-2.5 xs:p-3 sm:p-3.5 md:p-4 rounded-md sm:rounded-lg border-2 transition-all text-xs xs:text-sm sm:text-base md:text-lg min-h-[44px] flex items-center active:scale-[0.98] ${
                              isCorrect
                                ? 'bg-green-100 border-green-500 font-semibold'
                                : isWrong
                                ? 'bg-red-100 border-red-500'
                                : isSelected
                                ? 'bg-blue-100 border-blue-500'
                                : 'bg-gray-50 border-gray-200 hover:border-blue-400 hover:bg-blue-50'
                            }`}
                          >
                            {option}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                    <button
                      onClick={() => toggleAnswer(actualIndex)}
                      className="w-full py-2.5 xs:py-3 sm:py-3.5 md:py-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white text-xs xs:text-sm sm:text-base md:text-lg font-semibold rounded-md sm:rounded-lg hover:from-purple-600 hover:to-blue-600 transition-all shadow-md hover:shadow-lg active:scale-[0.98] min-h-[44px]"
                    >
                      {showAnswer[actualIndex] ? '🔒 Çözümü Gizle' : '🔓 Çözümü Göster'}
                    </button>

                    {showAnswer[actualIndex] && (
                    <div className="mt-3 xs:mt-4 bg-green-50 border border-green-300 sm:border-2 rounded-md sm:rounded-lg lg:rounded-xl p-3 xs:p-4 sm:p-5 md:p-6">
                      <div className="flex items-center gap-2 xs:gap-2.5 sm:gap-3 mb-2 xs:mb-3">
                        <Trophy className="w-5 h-5 xs:w-6 xs:h-6 sm:w-7 sm:h-7 text-green-600" />
                        <h4 className="text-sm xs:text-base sm:text-lg md:text-xl font-bold text-green-800">Doğru Cevap: {example.answer}</h4>
                      </div>
                      <div className="text-xs xs:text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed whitespace-pre-line">
                        {example.explanation}
                      </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Tips Section */}
        {topicData.tips && topicData.tips.length > 0 && (
          <div className="card bg-gradient-to-br from-yellow-50 to-orange-50 border-2 border-orange-200">
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-2 bg-orange-500 rounded-lg">
                <Lightbulb className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">💡 Çalışma İpuçları</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {topicData.tips.map((tip, index) => (
                <div key={index} className="flex items-start space-x-3 bg-white rounded-lg p-4 shadow-sm">
                  <div className="bg-orange-500 text-white font-bold w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    {index + 1}
                  </div>
                  <p className="text-gray-700">{tip}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Complete Button (Bottom) */}
        <div className="mt-8 card bg-gradient-to-r from-green-50 to-blue-50 border-2 border-green-300">
          <div className="text-center">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              {isCompleted ? '✅ Bu konuyu tamamladınız!' : 'Konuyu bitirdiniz mi?'}
            </h3>
            <button
              onClick={onComplete}
              className={`px-8 py-4 text-lg font-bold rounded-xl transition-all shadow-lg ${
                isCompleted
                  ? 'bg-green-500 hover:bg-green-600 text-white'
                  : 'bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white'
              }`}
            >
              {isCompleted ? 'Tamamlandı Olarak İşaretle ✓' : 'Konuyu Tamamla 🎯'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopicDetail;
