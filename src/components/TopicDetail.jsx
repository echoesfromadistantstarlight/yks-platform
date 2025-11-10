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
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <div className="bg-white shadow-lg sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <button
              onClick={onBack}
              className="flex items-center space-x-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Geri Dön</span>
            </button>
            
            <button
              onClick={onComplete}
              className={`flex items-center space-x-2 px-6 py-2 rounded-lg font-semibold transition-all ${
                isCompleted
                  ? 'bg-green-500 text-white'
                  : 'bg-blue-500 hover:bg-blue-600 text-white'
              }`}
            >
              <CheckCircle2 className="w-5 h-5" />
              <span>{isCompleted ? 'Tamamlandı ✓' : 'Tamamla'}</span>
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Title Section */}
        <div className="card mb-8 bg-gradient-to-r from-blue-50 to-purple-50 border-2" style={{ borderColor: subjectColor }}>
          <div className="flex items-start space-x-4">
            <div className="p-4 rounded-xl" style={{ backgroundColor: subjectColor, color: 'white' }}>
              <BookOpen className="w-10 h-10" />
            </div>
            <div className="flex-1">
              <div className="flex items-center space-x-3 mb-2">
                <h1 className="text-3xl font-bold text-gray-900">{topicData.title}</h1>
                <span className="px-3 py-1 bg-red-500 text-white text-sm font-bold rounded-full">
                  {topicData.importance}
                </span>
              </div>
              <p className="text-lg text-gray-700 mb-2">{topicData.description}</p>
              <div className="flex items-center space-x-2 text-sm">
                <span className="px-3 py-1 bg-white rounded-full font-semibold" style={{ color: subjectColor }}>
                  {examType.toUpperCase()}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="card mb-8">
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
          <div className="card mb-8">
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-2 bg-purple-500 rounded-lg">
                <FileQuestion className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Örnek Sorular</h2>
            </div>
            
            {/* Question Navigation */}
            <div className="flex items-center justify-between mb-6">
              <button
                onClick={() => setCurrentQuestionIndex(Math.max(0, currentQuestionIndex - 1))}
                disabled={currentQuestionIndex === 0}
                className="px-4 py-2 bg-gray-200 hover:bg-gray-300 disabled:bg-gray-100 disabled:text-gray-400 rounded-lg font-semibold transition"
              >
                ← Önceki Soru
              </button>
              <span className="text-gray-700 font-semibold">
                Soru {currentQuestionIndex + 1} / {topicData.examples.length}
              </span>
              <button
                onClick={() => setCurrentQuestionIndex(Math.min(topicData.examples.length - 1, currentQuestionIndex + 1))}
                disabled={currentQuestionIndex === topicData.examples.length - 1}
                className="px-4 py-2 bg-gray-200 hover:bg-gray-300 disabled:bg-gray-100 disabled:text-gray-400 rounded-lg font-semibold transition"
              >
                Sonraki Soru →
              </button>
            </div>

            {/* Current Question */}
            <div className="space-y-6">
              {topicData.examples.filter((_, index) => index === currentQuestionIndex).map((example, index) => {
                const actualIndex = currentQuestionIndex;
                return (
                  <div key={actualIndex} className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-6 border-2 border-gray-200">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="bg-purple-500 text-white font-bold w-8 h-8 rounded-full flex items-center justify-center">
                        {actualIndex + 1}
                      </div>
                      <h3 className="text-lg font-bold text-gray-900">Örnek Soru</h3>
                    </div>
                  
                  <div className="bg-white rounded-lg p-5 mb-4 shadow-sm">
                    <p className="text-gray-800 leading-relaxed whitespace-pre-line mb-4">
                      {example.question}
                    </p>
                    
                    <div className="space-y-2">
                      {example.options.map((option, optIndex) => {
                        const optionLetter = option.charAt(0);
                        const isSelected = selectedOptions[actualIndex] === optionLetter;
                        const isCorrect = showAnswer[actualIndex] && option.startsWith(example.answer + ')');
                        const isWrong = showAnswer[actualIndex] && isSelected && !isCorrect;
                        
                        return (
                          <button
                            key={optIndex}
                            onClick={() => selectOption(actualIndex, optionLetter)}
                            className={`w-full text-left p-3 rounded-lg border-2 transition-all ${
                              isCorrect
                                ? 'bg-green-100 border-green-500 font-semibold'
                                : isWrong
                                ? 'bg-red-100 border-red-500'
                                : isSelected
                                ? 'bg-blue-100 border-blue-500'
                                : 'bg-gray-50 border-gray-200 hover:border-blue-300'
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
                      className="w-full py-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-blue-600 transition-all shadow-md hover:shadow-lg"
                    >
                      {showAnswer[actualIndex] ? '🔒 Çözümü Gizle' : '🔓 Çözümü Göster'}
                    </button>

                    {showAnswer[actualIndex] && (
                    <div className="mt-4 bg-green-50 border-2 border-green-300 rounded-lg p-5">
                      <div className="flex items-center space-x-2 mb-3">
                        <Trophy className="w-6 h-6 text-green-600" />
                        <h4 className="text-lg font-bold text-green-800">Doğru Cevap: {example.answer}</h4>
                      </div>
                      <div className="text-gray-700 leading-relaxed whitespace-pre-line">
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
