import { GraduationCap, BookOpen, Target, TrendingUp, Clock, CheckCircle2, Sparkles, Award, BarChart3, Calendar } from 'lucide-react';

const LandingPage = ({ onStart }) => {
  const scrollToFeatures = () => {
    console.log('Özellikleri Keşfet tıklandı!');
    const featuresSection = document.getElementById('features');
    if (featuresSection) {
      featuresSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleStartClick = () => {
    console.log('LandingPage: Hemen Başla butonu tıklandı');
    if (onStart && typeof onStart === 'function') {
      onStart();
    } else {
      console.error('onStart fonksiyonu tanımlı değil!');
    }
  };

  const features = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "Konu Takip Sistemi",
      description: "TYT ve AYT'deki tüm konuları izleyin, ilerlemenizi takip edin"
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Soru Dağılımları",
      description: "Hangi konudan kaç soru çıkacağını öğrenin ve ona göre planlayın"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "İlerleme Grafikleri",
      description: "Gelişiminizi görsel grafiklerle takip edin"
    },
    {
      icon: <Calendar className="w-8 h-8" />,
      title: "Çalışma Planı",
      description: "Öncelikli konulara göre otomatik çalışma planı oluşturun"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Öncelik Sistemi",
      description: "Hangi konulara yoğunlaşmanız gerektiğini keşfedin"
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Modern Arayüz",
      description: "Kullanımı kolay, göz yormayan modern tasarım"
    }
  ];

  const stats = [
    { number: "120", label: "TYT Soru", icon: <BookOpen /> },
    { number: "80", label: "AYT Soru", icon: <BookOpen /> },
    { number: "300+", label: "Konu Başlığı", icon: <Target /> },
    { number: "100%", label: "Ücretsiz", icon: <CheckCircle2 /> }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 overflow-x-hidden">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none"></div>
        
        <nav className="container mx-auto px-3 xs:px-4 sm:px-5 md:px-6 lg:px-8 py-3 xs:py-4 sm:py-5 md:py-6 relative z-10">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 xs:gap-2.5 sm:gap-3">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-1.5 xs:p-2 sm:p-2.5 rounded-md sm:rounded-lg">
                <GraduationCap className="w-6 h-6 xs:w-7 xs:h-7 sm:w-8 sm:h-8 text-white" />
              </div>
              <div>
                <h1 className="text-lg xs:text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  YKS Hazırlık
                </h1>
                <p className="text-[10px] xs:text-xs text-gray-500">2026 Platform</p>
              </div>
            </div>
            <button 
              onClick={handleStartClick}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 xs:px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 rounded-md sm:rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 active:scale-[0.98] transition-all shadow-lg hover:shadow-xl text-xs xs:text-sm sm:text-base min-h-[44px] flex items-center"
              type="button"
            >
              <span className="hidden xs:inline">Hemen Başla</span>
              <span className="xs:hidden">Başla</span>
            </button>
          </div>
        </nav>

        <div className="container mx-auto px-3 xs:px-4 sm:px-5 md:px-6 lg:px-8 py-8 xs:py-12 sm:py-16 md:py-20 relative z-10">
          <div className="text-center max-w-4xl mx-auto animate-fade-in">
            <div className="inline-block mb-3 xs:mb-4">
              <span className="bg-blue-100 text-blue-700 px-3 xs:px-4 py-1.5 xs:py-2 rounded-full text-xs xs:text-sm font-semibold">
                🎯 2026 YKS'ye Hazırlanıyorsun!
              </span>
            </div>
            
            <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-4 xs:mb-5 sm:mb-6 leading-tight">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Hedefine Ulaşmanın
              </span>
              <br />
              <span className="text-gray-900">En Akıllı Yolu</span>
            </h1>
            
            <p className="text-sm xs:text-base sm:text-lg md:text-xl text-gray-600 mb-6 xs:mb-7 sm:mb-8 leading-relaxed max-w-2xl mx-auto px-2">
              YKS 2026 sınavına hazırlanırken hangi konuya ne kadar zaman ayırman gerektiğini 
              öğren, ilerlemeyi takip et ve hedefine emin adımlarla ilerle.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 xs:gap-4 justify-center items-stretch sm:items-center">
              <button 
                onClick={handleStartClick}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white flex items-center justify-center gap-2 text-sm xs:text-base sm:text-lg px-5 xs:px-6 sm:px-8 py-3 xs:py-3.5 sm:py-4 rounded-lg sm:rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 active:scale-[0.98] transition-all shadow-xl hover:shadow-2xl group min-h-[48px]"
                type="button"
              >
                <span>Hemen Başla</span>
                <Sparkles className="w-4 h-4 xs:w-5 xs:h-5 group-hover:rotate-12 transition-transform" />
              </button>
              <button
                onClick={scrollToFeatures}
                className="bg-white text-gray-700 border-2 border-gray-200 flex items-center justify-center gap-2 text-sm xs:text-base sm:text-lg px-5 xs:px-6 sm:px-8 py-3 xs:py-3.5 sm:py-4 rounded-lg sm:rounded-xl font-semibold hover:border-blue-400 hover:bg-blue-50 active:scale-[0.98] transition-all shadow-lg hover:shadow-xl min-h-[48px]"
                type="button"
              >
                <span>Özellikleri Keşfet</span>
                <TrendingUp className="w-4 h-4 xs:w-5 xs:h-5" />
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 xs:gap-4 sm:gap-5 md:gap-6 mt-8 xs:mt-10 sm:mt-12 md:mt-16">
              {stats.map((stat, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-lg xs:rounded-xl sm:rounded-2xl p-3 xs:p-4 sm:p-5 md:p-6 shadow-md sm:shadow-lg hover:shadow-xl transition-all active:scale-[0.98] animate-slide-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="text-blue-600 mb-1.5 xs:mb-2 flex justify-center">
                    <div className="w-6 h-6 xs:w-7 xs:h-7 sm:w-8 sm:h-8">{stat.icon}</div>
                  </div>
                  <div className="text-xl xs:text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-0.5 xs:mb-1">
                    {stat.number}
                  </div>
                  <div className="text-xs xs:text-sm sm:text-base text-gray-600">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div id="features" className="py-10 xs:py-12 sm:py-16 md:py-20 bg-white">
        <div className="container mx-auto px-3 xs:px-4 sm:px-5 md:px-6 lg:px-8">
          <div className="text-center mb-8 xs:mb-10 sm:mb-12 md:mb-16">
            <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 xs:mb-4">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Neden Bu Platform?
              </span>
            </h2>
            <p className="text-sm xs:text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto px-2">
              YKS'ye hazırlanırken ihtiyacın olan her şey bir arada
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 xs:gap-5 sm:gap-6 md:gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="bg-white rounded-lg sm:rounded-xl lg:rounded-2xl shadow-md sm:shadow-lg p-4 xs:p-5 sm:p-6 md:p-7 lg:p-8 group hover:scale-105 hover:shadow-xl active:scale-100 transition-all"
              >
                <div className="text-blue-600 mb-3 xs:mb-4 group-hover:scale-110 transition-transform">
                  <div className="w-7 h-7 xs:w-8 xs:h-8 sm:w-9 sm:h-9 md:w-10 md:h-10">{feature.icon}</div>
                </div>
                <h3 className="text-base xs:text-lg sm:text-xl md:text-2xl font-bold mb-2 text-gray-900">
                  {feature.title}
                </h3>
                <p className="text-xs xs:text-sm sm:text-base text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Sana Neler Kazandırıyoruz?
              </span>
            </h2>

            <div className="space-y-6">
              <div className="flex items-start space-x-4 bg-white p-6 rounded-xl shadow-lg">
                <div className="bg-green-100 p-3 rounded-lg">
                  <CheckCircle2 className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Zaman Tasarrufu</h3>
                  <p className="text-gray-600">
                    Hangi konuya ne kadar zaman ayırman gerektiğini bilirsin, gereksiz konularda zaman kaybetmezsin
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 bg-white p-6 rounded-xl shadow-lg">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <Target className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Odaklanmış Çalışma</h3>
                  <p className="text-gray-600">
                    En çok soru çıkan konulara odaklan, net sayını maksimize et
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 bg-white p-6 rounded-xl shadow-lg">
                <div className="bg-purple-100 p-3 rounded-lg">
                  <TrendingUp className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Sürekli Gelişim</h3>
                  <p className="text-gray-600">
                    İlerleme grafikleriyle motivasyonunu yüksek tut, her gün biraz daha ilerle
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 bg-white p-6 rounded-xl shadow-lg">
                <div className="bg-orange-100 p-3 rounded-lg">
                  <Clock className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Akıllı Planlama</h3>
                  <p className="text-gray-600">
                    Sınava kalan süreyi en verimli şekilde kullan, strateji oluştur
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Başarıya Giden Yolculuk Burada Başlıyor
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Binlerce öğrenci gibi sen de hedefine ulaşmak için doğru adımları at
          </p>
          <button 
            onClick={onStart}
            className="bg-white text-blue-600 px-12 py-4 rounded-lg font-bold text-lg hover:bg-blue-50 transition-colors shadow-2xl hover:scale-105 transform duration-200"
          >
            Hemen Ücretsiz Başla 🚀
          </button>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <GraduationCap className="w-8 h-8" />
              <div>
                <div className="font-bold">YKS Hazırlık Platformu</div>
                <div className="text-sm text-gray-400">2026 YKS'ye Hazırlan</div>
              </div>
            </div>
            <div className="text-center md:text-right">
              <p className="text-gray-400">
                © 2024 - Tüm hakları saklıdır
              </p>
              <p className="text-sm text-gray-500 mt-1">
                ÖSYM verilerine dayalı hazırlanmıştır
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
