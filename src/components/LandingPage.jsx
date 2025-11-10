import { GraduationCap, BookOpen, Target, TrendingUp, Clock, CheckCircle2, Sparkles, Award, BarChart3, Calendar } from 'lucide-react';

const LandingPage = ({ onStart }) => {
  const scrollToFeatures = () => {
    const featuresSection = document.getElementById('features');
    if (featuresSection) {
      featuresSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        
        <nav className="container mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-lg">
                <GraduationCap className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  YKS Hazırlık
                </h1>
                <p className="text-xs text-gray-500">2026 Platform</p>
              </div>
            </div>
            <button 
              onClick={onStart}
              className="btn-primary"
            >
              Hemen Başla
            </button>
          </div>
        </nav>

        <div className="container mx-auto px-6 py-20">
          <div className="text-center max-w-4xl mx-auto animate-fade-in">
            <div className="inline-block mb-4">
              <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold">
                🎯 2026 YKS'ye Hazırlanıyorsun!
              </span>
            </div>
            
            <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Hedefine Ulaşmanın
              </span>
              <br />
              <span className="text-gray-900">En Akıllı Yolu</span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-2xl mx-auto">
              YKS 2026 sınavına hazırlanırken hangi konuya ne kadar zaman ayırman gerektiğini 
              öğren, ilerlemeyi takip et ve hedefine emin adımlarla ilerle.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button 
                onClick={onStart}
                className="btn-primary flex items-center space-x-2 text-lg px-8 py-4 group"
              >
                <span>Hemen Başla</span>
                <Sparkles className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              </button>
              <button
                onClick={scrollToFeatures}
                className="btn-secondary flex items-center space-x-2 text-lg px-8 py-4"
              >
                <span>Özellikleri Keşfet</span>
                <TrendingUp className="w-5 h-5" />
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
              {stats.map((stat, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow animate-slide-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="text-blue-600 mb-2 flex justify-center">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-1">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-600">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div id="features" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Neden Bu Platform?
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              YKS'ye hazırlanırken ihtiyacın olan her şey bir arada
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="card group hover:scale-105 transition-transform"
              >
                <div className="text-blue-600 mb-4 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
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
