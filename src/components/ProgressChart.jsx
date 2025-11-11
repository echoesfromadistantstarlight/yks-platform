import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip, BarChart, Bar, XAxis, YAxis, CartesianGrid } from 'recharts';
import { TrendingUp, Award, Target, Zap } from 'lucide-react';

const ProgressChart = ({ tytProgress, aytProgress, progress, yksData }) => {
  const pieData = [
    { name: 'TYT Tamamlanan', value: tytProgress, color: '#3b82f6' },
    { name: 'TYT Kalan', value: 100 - tytProgress, color: '#e5e7eb' },
  ];

  const aytPieData = [
    { name: 'AYT Tamamlanan', value: aytProgress, color: '#8b5cf6' },
    { name: 'AYT Kalan', value: 100 - aytProgress, color: '#e5e7eb' },
  ];

  const getSubjectProgress = (exam, examType) => {
    return exam.subjects.map(subject => {
      const total = subject.topics.length;
      const completed = subject.topics.filter(topic =>
        progress[`${examType}-${subject.id}-${topic.name}`]
      ).length;
      return {
        name: subject.name,
        tamamlanan: completed,
        kalan: total - completed,
        color: subject.color
      };
    });
  };

  const tytSubjectData = getSubjectProgress(yksData.tyt, 'tyt');
  const aytSubjectData = getSubjectProgress(yksData.ayt, 'ayt');

  const totalCompleted = Object.values(progress).filter(Boolean).length;
  const totalTopics = [...yksData.tyt.subjects, ...yksData.ayt.subjects]
    .reduce((sum, subject) => sum + subject.topics.length, 0);

  const motivationalMessages = [
    { icon: <Award className="w-6 h-6" />, text: "Harika gidiyorsun!", condition: totalCompleted > 50 },
    { icon: <Zap className="w-6 h-6" />, text: "Her gün biraz daha ilerliyorsun", condition: totalCompleted > 20 },
    { icon: <Target className="w-6 h-6" />, text: "Hedefine emin adımlarla ilerliyorsun", condition: totalCompleted > 10 },
    { icon: <TrendingUp className="w-6 h-6" />, text: "Başlamak başarının yarısıdır!", condition: true }
  ];

  const currentMessage = motivationalMessages.find(m => m.condition) || motivationalMessages[motivationalMessages.length - 1];

  return (
    <div className="space-y-6">
      {/* Overall Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="card bg-gradient-to-br from-blue-500 to-blue-600 text-white">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold">TYT İlerleme</h3>
            <TrendingUp className="w-6 h-6" />
          </div>
          <div className="text-4xl font-bold mb-2">{tytProgress}%</div>
          <div className="h-2 bg-white bg-opacity-30 rounded-full overflow-hidden">
            <div className="h-full bg-white rounded-full" style={{ width: `${tytProgress}%` }} />
          </div>
        </div>

        <div className="card bg-gradient-to-br from-purple-500 to-purple-600 text-white">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold">AYT İlerleme</h3>
            <TrendingUp className="w-6 h-6" />
          </div>
          <div className="text-4xl font-bold mb-2">{aytProgress}%</div>
          <div className="h-2 bg-white bg-opacity-30 rounded-full overflow-hidden">
            <div className="h-full bg-white rounded-full" style={{ width: `${aytProgress}%` }} />
          </div>
        </div>

        <div className="card bg-gradient-to-br from-green-500 to-green-600 text-white">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold">Toplam Konu</h3>
            <Award className="w-6 h-6" />
          </div>
          <div className="text-4xl font-bold mb-2">{totalCompleted}</div>
          <div className="text-sm opacity-90">/ {totalTopics} ana ünite tamamlandı</div>
        </div>
      </div>

      {/* Motivational Message */}
      <div className="card bg-gradient-to-r from-orange-50 to-yellow-50 border-2 border-orange-200">
        <div className="flex items-center space-x-4">
          <div className="bg-orange-500 text-white p-3 rounded-full">
            {currentMessage.icon}
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-900">{currentMessage.text}</h3>
            <p className="text-gray-600">Başarıya giden yolda emin adımlarla ilerliyorsun 🚀</p>
          </div>
        </div>
      </div>

      {/* Pie Charts */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="card">
          <h3 className="text-xl font-bold mb-4 text-center">TYT Dağılımı</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={pieData}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={100}
                paddingAngle={5}
                dataKey="value"
              >
                {pieData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className="card">
          <h3 className="text-xl font-bold mb-4 text-center">AYT Dağılımı</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={aytPieData}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={100}
                paddingAngle={5}
                dataKey="value"
              >
                {aytPieData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Subject Progress Bars */}
      <div className="card">
        <h3 className="text-2xl font-bold mb-6">TYT Ders Bazlı İlerleme</h3>
        <ResponsiveContainer width="100%" height={400}>
          <BarChart data={tytSubjectData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" angle={-45} textAnchor="end" height={100} />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="tamamlanan" stackId="a" fill="#10b981" name="Tamamlanan" />
            <Bar dataKey="kalan" stackId="a" fill="#e5e7eb" name="Kalan" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="card">
        <h3 className="text-2xl font-bold mb-6">AYT Ders Bazlı İlerleme</h3>
        <ResponsiveContainer width="100%" height={400}>
          <BarChart data={aytSubjectData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" angle={-45} textAnchor="end" height={100} />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="tamamlanan" stackId="a" fill="#8b5cf6" name="Tamamlanan" />
            <Bar dataKey="kalan" stackId="a" fill="#e5e7eb" name="Kalan" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ProgressChart;
