import { useState } from 'react';
import { ArrowLeft, BookOpen, CheckCircle2, Lightbulb, FileQuestion, Trophy } from 'lucide-react';
import { getTopicDetail } from '../data/topicDetails';

const TopicDetail = ({ examType, subjectId, topicName, subjectColor, onBack, onComplete, isCompleted }) => {
  const [showAnswer, setShowAnswer] = useState({});
  const [selectedOptions, setSelectedOptions] = useState({});
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [score, setScore] = useState({ correct: 0, total: 0 });
  const topicData = getTopicDetail(examType, subjectId, topicName);

  const toggleAnswer = (index) => {
    setShowAnswer(prev => ({ ...prev, [index]: !prev[index] }));
  };

  const selectOption = (questionIndex, option) => {
    // Eğer bu soru zaten cevaplandıysa, tekrar seçim yapılmasın
    if (selectedOptions[questionIndex]) return;

    setSelectedOptions(prev => ({
      ...prev,
      [questionIndex]: option
    }));
    
    // Şık seçilince otomatik olarak cevabı göster
    setShowAnswer(prev => ({
      ...prev,
      [questionIndex]: true
    }));

    // Doğru cevabı kontrol et
    const currentExample = topicData.examples[questionIndex];
    const isCorrect = option === currentExample.answer;
    
    // Skoru güncelle
    setScore(prev => ({
      correct: prev.correct + (isCorrect ? 1 : 0),
      total: prev.total + 1
    }));

    // 1.5 saniye sonra bir sonraki soruya geç veya sonucu göster
    setTimeout(() => {
      if (questionIndex < topicData.examples.length - 1) {
        setCurrentQuestionIndex(questionIndex + 1);
      } else {
        // Tüm sorular bitti, skoru göster
        setQuizCompleted(true);
      }
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 px-0 xs:px-2 sm:px-4 md:px-6 lg:px-8 py-0">
      {/* Header */}
      <div className="bg-white shadow-lg sticky top-0 z-10">
        <div className="max-w-7xl mx-auto">
          <div className="px-2 xs:px-3 sm:px-4 md:px-6 lg:px-8 py-3 sm:py-4">
            <div className="flex items-center justify-between">
              <button
                onClick={onBack}
                className="flex items-center justify-center gap-1.5 xs:gap-2 px-2.5 xs:px-3 sm:px-4 py-2 sm:py-2.5 bg-gray-100 hover:bg-gray-200 active:scale-95 rounded-lg transition-all min-h-[44px] min-w-[44px]"
              >
                <ArrowLeft className="w-4 h-4 xs:w-5 xs:h-5" />
                <span className="text-sm xs:text-base font-medium hidden xs:inline">Geri</span>
              </button>
              
              <button
                onClick={onComplete}
                className={`flex items-center justify-center gap-1.5 xs:gap-2 px-2.5 xs:px-3 sm:px-5 py-2 sm:py-2.5 rounded-lg font-semibold transition-all min-h-[44px] min-w-[44px] active:scale-95 ${
                  isCompleted
                    ? 'bg-green-500 hover:bg-green-600 text-white'
                    : 'bg-blue-500 hover:bg-blue-600 text-white'
                }`}
              >
                <CheckCircle2 className="w-5 h-5 xs:w-5 xs:h-5" />
                <span className="text-xs xs:text-sm sm:text-base hidden sm:inline">{isCompleted ? 'Tamamlandı' : 'Tamamla'}</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-2 xs:px-3 sm:px-4 md:px-6 lg:px-8 py-2 xs:py-3 sm:py-4 md:py-6">
        {/* Title Section */}
        <div className="bg-white rounded-none xs:rounded-lg sm:rounded-xl lg:rounded-2xl shadow-md sm:shadow-lg p-2 xs:p-2.5 sm:p-3 md:p-4 lg:p-5 mb-1.5 xs:mb-2 sm:mb-3 md:mb-4 bg-gradient-to-r from-blue-50 to-purple-50 border-2" style={{ borderColor: subjectColor }}>
          <div className="flex flex-col sm:flex-row items-start gap-2 xs:gap-2.5 sm:gap-3 md:gap-4">
            <div className="p-1.5 xs:p-2 sm:p-2.5 md:p-3 lg:p-4 rounded-md sm:rounded-lg" style={{ backgroundColor: subjectColor, color: 'white' }}>
              <BookOpen className="w-5 h-5 xs:w-6 xs:h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-10 lg:h-10" />
            </div>
            <div className="flex-1">
              <div className="flex flex-col sm:flex-row sm:items-center gap-1 xs:gap-1.5 sm:gap-2 mb-1 xs:mb-1.5 sm:mb-2">
                <h1 className="text-base xs:text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 leading-tight">{topicData.title}</h1>
                <span className="px-2 xs:px-2.5 py-0.5 bg-red-500 text-white text-[10px] xs:text-xs font-bold rounded-full inline-block">
                  {topicData.importance}
                </span>
              </div>
              <p className="text-[11px] xs:text-xs sm:text-sm md:text-base text-gray-700 mb-1 xs:mb-1.5 sm:mb-2 leading-snug">{topicData.description}</p>
              <div className="flex items-center gap-1.5 text-[10px] xs:text-xs">
                <span className="px-2 xs:px-2.5 py-0.5 bg-white rounded-full font-semibold" style={{ color: subjectColor }}>
                  {examType.toUpperCase()}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="bg-white rounded-none xs:rounded-lg sm:rounded-xl lg:rounded-2xl shadow-md sm:shadow-lg p-2 xs:p-2.5 sm:p-3 md:p-4 lg:p-5 mb-1.5 xs:mb-2 sm:mb-3 md:mb-4">
          <div className="flex items-center gap-1.5 xs:gap-2 sm:gap-2.5 mb-2 xs:mb-3 sm:mb-4">
            <div className="p-1 xs:p-1.5 sm:p-2 bg-blue-500 rounded-md sm:rounded-lg">
              <BookOpen className="w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6 text-white" />
            </div>
            <h2 className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-gray-900">Konu Anlatımı</h2>
          </div>
          <div className="prose prose-sm xs:prose sm:prose-lg max-w-none">
            <div 
              className="text-[11px] xs:text-xs sm:text-sm md:text-base text-gray-700 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: topicData.content }}
            />
          </div>
        </div>

        {/* Examples Section */}
        {topicData.examples && topicData.examples.length > 0 && (
          <div className="bg-white rounded-none xs:rounded-lg sm:rounded-xl lg:rounded-2xl shadow-md sm:shadow-lg p-2 xs:p-2.5 sm:p-3 md:p-4 lg:p-5 mb-1.5 xs:mb-2 sm:mb-3 md:mb-4">
            <div className="flex items-center gap-1.5 xs:gap-2 sm:gap-2.5 mb-2 xs:mb-3 sm:mb-4">
              <div className="p-1 xs:p-1.5 sm:p-2 bg-purple-500 rounded-md sm:rounded-lg">
                <FileQuestion className="w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <h2 className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-gray-900">Örnek Sorular</h2>
            </div>
            
            {/* Quiz Completed - Score Display */}
            {quizCompleted ? (
              <div className="text-center py-6 xs:py-8 sm:py-10 md:py-12">
                <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-xl sm:rounded-2xl p-4 xs:p-5 sm:p-6 md:p-8 border-2 border-yellow-300 shadow-xl mx-auto max-w-md">
                  <div className="flex justify-center mb-4 xs:mb-5 sm:mb-6">
                    <Trophy className="w-12 h-12 xs:w-16 xs:h-16 sm:w-20 sm:h-20 text-yellow-500" />
                  </div>
                  <h3 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 xs:mb-4">
                    Tebrikler! 🎉
                  </h3>
                  <p className="text-sm xs:text-base sm:text-lg text-gray-700 mb-4 xs:mb-5 sm:mb-6">
                    Tüm soruları tamamladınız!
                  </p>
                  <div className="bg-white rounded-lg sm:rounded-xl p-4 xs:p-5 sm:p-6 mb-4 xs:mb-5 sm:mb-6 shadow-lg">
                    <div className="text-4xl xs:text-5xl sm:text-6xl font-bold mb-2">
                      <span className="text-green-600">{score.correct}</span>
                      <span className="text-gray-400 mx-2">/</span>
                      <span className="text-gray-600">{score.total}</span>
                    </div>
                    <p className="text-xs xs:text-sm sm:text-base text-gray-600 font-semibold">
                      Doğru Cevap
                    </p>
                    <div className="mt-3 xs:mt-4">
                      <div className="text-2xl xs:text-3xl sm:text-4xl font-bold text-blue-600">
                        %{score.total > 0 ? Math.round((score.correct / score.total) * 100) : 0}
                      </div>
                      <p className="text-xs xs:text-sm text-gray-500">Başarı Oranı</p>
                    </div>
                  </div>
                  <button
                    onClick={() => {
                      setQuizCompleted(false);
                      setCurrentQuestionIndex(0);
                      setSelectedOptions({});
                      setShowAnswer({});
                      setScore({ correct: 0, total: 0 });
                    }}
                    className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 xs:px-5 sm:px-6 py-2.5 xs:py-3 sm:py-3.5 rounded-lg sm:rounded-xl font-semibold hover:from-blue-600 hover:to-purple-600 active:scale-95 transition-all shadow-lg text-sm xs:text-base sm:text-lg min-h-[44px]"
                  >
                    🔄 Tekrar Dene
                  </button>
                </div>
              </div>
            ) : (
              <>
            {/* Question Navigation */}
            <div className="flex items-center justify-between mb-2 xs:mb-2.5 sm:mb-3 md:mb-4 gap-1 xs:gap-1.5 sm:gap-2">
              <button
                onClick={() => setCurrentQuestionIndex(Math.max(0, currentQuestionIndex - 1))}
                disabled={currentQuestionIndex === 0 || selectedOptions[currentQuestionIndex]}
                className="flex-shrink-0 px-2.5 xs:px-3 sm:px-4 md:px-5 lg:px-6 py-2 sm:py-2.5 md:py-3 bg-gray-200 hover:bg-gray-300 active:bg-gray-400 disabled:bg-gray-100 disabled:text-gray-400 rounded-md sm:rounded-lg text-xs xs:text-sm sm:text-base font-semibold transition-all shadow-sm hover:shadow min-w-[44px] min-h-[44px] flex items-center justify-center disabled:cursor-not-allowed"
              >
                <span className="hidden md:inline">← Önceki</span>
                <span className="hidden sm:inline md:hidden">←</span>
                <span className="sm:hidden">←</span>
              </button>
              <div className="flex-1 flex justify-center">
                <span className="text-[10px] xs:text-xs sm:text-sm md:text-base text-gray-700 font-bold whitespace-nowrap bg-gray-100 px-2 xs:px-2.5 sm:px-3 py-1 xs:py-1.5 rounded-full">
                  {currentQuestionIndex + 1} / {topicData.examples.length}
                </span>
              </div>
              <button
                onClick={() => setCurrentQuestionIndex(Math.min(topicData.examples.length - 1, currentQuestionIndex + 1))}
                disabled={currentQuestionIndex === topicData.examples.length - 1 || selectedOptions[currentQuestionIndex]}
                className="flex-shrink-0 px-2.5 xs:px-3 sm:px-4 md:px-5 lg:px-6 py-2 sm:py-2.5 md:py-3 bg-gray-200 hover:bg-gray-300 active:bg-gray-400 disabled:bg-gray-100 disabled:text-gray-400 rounded-md sm:rounded-lg text-xs xs:text-sm sm:text-base font-semibold transition-all shadow-sm hover:shadow min-w-[44px] min-h-[44px] flex items-center justify-center disabled:cursor-not-allowed"
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
                  <div key={actualIndex} className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-md xs:rounded-lg sm:rounded-xl p-2 xs:p-2.5 sm:p-3 md:p-4 border border-gray-200 shadow-sm">
                    <div className="flex items-center gap-1.5 xs:gap-2 mb-2 xs:mb-2.5">
                      <div className="bg-purple-500 text-white font-bold w-6 h-6 xs:w-7 xs:h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-[10px] xs:text-xs sm:text-sm">
                        {actualIndex + 1}
                      </div>
                      <h3 className="text-xs xs:text-sm sm:text-base font-bold text-gray-900">Örnek Soru</h3>
                    </div>
                  
                  <div className="bg-white rounded-md sm:rounded-lg p-2 xs:p-2.5 sm:p-3 mb-2 xs:mb-2.5 shadow-sm">
                    <p className="text-[11px] xs:text-xs sm:text-sm md:text-base text-gray-800 leading-snug whitespace-pre-line mb-2 xs:mb-2.5">
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
                            className={`w-full text-left p-2 xs:p-2.5 sm:p-3 md:p-3.5 rounded-md sm:rounded-lg border-2 transition-all text-[11px] xs:text-xs sm:text-sm md:text-base min-h-[44px] flex items-center active:scale-[0.98] ${
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
                      className="w-full py-2 xs:py-2.5 sm:py-3 md:py-3.5 bg-gradient-to-r from-purple-500 to-blue-500 text-white text-[11px] xs:text-xs sm:text-sm md:text-base font-semibold rounded-md sm:rounded-lg hover:from-purple-600 hover:to-blue-600 transition-all shadow-md hover:shadow-lg active:scale-[0.98] min-h-[44px]"
                    >
                      {showAnswer[actualIndex] ? '🔒 Çözümü Gizle' : '🔓 Çözümü Göster'}
                    </button>

                    {showAnswer[actualIndex] && (
                    <div className="mt-2 xs:mt-2.5 sm:mt-3 bg-green-50 border border-green-300 sm:border-2 rounded-md sm:rounded-lg p-2 xs:p-2.5 sm:p-3 md:p-4">
                      <div className="flex items-center gap-1.5 xs:gap-2 mb-1.5 xs:mb-2">
                        <Trophy className="w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6 text-green-600" />
                        <h4 className="text-xs xs:text-sm sm:text-base md:text-lg font-bold text-green-800">Doğru Cevap: {example.answer}</h4>
                      </div>
                      <div className="text-[11px] xs:text-xs sm:text-sm md:text-base text-gray-700 leading-snug whitespace-pre-line">
                        {example.explanation}
                      </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
            </>
            )}
          </div>
        )}

        {/* Tips Section */}
        {topicData.tips && topicData.tips.length > 0 && (
          <div className="bg-white rounded-none xs:rounded-lg sm:rounded-xl lg:rounded-2xl shadow-md sm:shadow-lg p-2 xs:p-2.5 sm:p-3 md:p-4 lg:p-5 mb-1.5 xs:mb-2 sm:mb-3 md:mb-4 bg-gradient-to-br from-yellow-50 to-orange-50 border-2 border-orange-200">
            <div className="flex items-center gap-1.5 xs:gap-2 sm:gap-2.5 mb-2 xs:mb-3 sm:mb-4">
              <div className="p-1 xs:p-1.5 sm:p-2 bg-orange-500 rounded-md sm:rounded-lg">
                <Lightbulb className="w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <h2 className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-gray-900">💡 Çalışma İpuçları</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 xs:gap-2.5 sm:gap-3 md:gap-4">
              {topicData.tips.map((tip, index) => (
                <div key={index} className="flex items-start gap-2 xs:gap-2.5 bg-white rounded-md sm:rounded-lg p-2 xs:p-2.5 sm:p-3 shadow-sm">
                  <div className="bg-orange-500 text-white font-bold w-5 h-5 xs:w-6 xs:h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 text-[10px] xs:text-xs">
                    {index + 1}
                  </div>
                  <p className="text-[11px] xs:text-xs sm:text-sm md:text-base text-gray-700">{tip}</p>
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
