import { Heart, Activity, Droplet, Scale, Plus, TrendingUp, TrendingDown } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, CartesianGrid } from 'recharts';

interface MoodOption {
  emoji: string;
  label: string;
  value: number;
}

export function HealthMetrics() {
  const bloodPressureData = [
    { day: 'Pn', systolic: 125, diastolic: 82 },
    { day: 'Wt', systolic: 128, diastolic: 84 },
    { day: 'Śr', systolic: 122, diastolic: 80 },
    { day: 'Cz', systolic: 126, diastolic: 83 },
    { day: 'Pt', systolic: 124, diastolic: 81 },
    { day: 'So', systolic: 123, diastolic: 79 },
    { day: 'Nd', systolic: 127, diastolic: 82 },
  ];

  const moodOptions: MoodOption[] = [
    { emoji: '😊', label: 'Świetnie', value: 5 },
    { emoji: '🙂', label: 'Dobrze', value: 4 },
    { emoji: '😐', label: 'Średnio', value: 3 },
    { emoji: '😕', label: 'Słabo', value: 2 },
    { emoji: '😞', label: 'Źle', value: 1 },
  ];

  const metrics = [
    {
      icon: Heart,
      label: 'Ciśnienie',
      value: '125/82',
      unit: 'mmHg',
      status: 'normal',
      color: 'bg-red-500',
      trend: 'down',
    },
    {
      icon: Droplet,
      label: 'Glukoza',
      value: '98',
      unit: 'mg/dL',
      status: 'normal',
      color: 'bg-blue-500',
      trend: 'up',
    },
    {
      icon: Scale,
      label: 'Waga',
      value: '72.5',
      unit: 'kg',
      status: 'normal',
      color: 'bg-purple-500',
      trend: 'down',
    },
    {
      icon: Activity,
      label: 'Tętno',
      value: '72',
      unit: 'bpm',
      status: 'normal',
      color: 'bg-pink-500',
      trend: 'stable',
    },
  ];

  return (
    <div className="pb-24 pt-6 px-4 space-y-6 max-w-screen-md mx-auto">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-semibold text-gray-900">Pomiary Zdrowia</h1>
        <p className="text-gray-600 mt-1">Monitoruj swoje parametry</p>
      </div>

      {/* Quick Metrics Grid */}
      <div className="grid grid-cols-2 gap-3">
        {metrics.map((metric, index) => {
          const Icon = metric.icon;
          const TrendIcon = metric.trend === 'up' ? TrendingUp : metric.trend === 'down' ? TrendingDown : Activity;

          return (
            <div
              key={index}
              className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 hover:border-[#007AFF]/30 transition-all cursor-pointer"
            >
              <div className="flex items-start justify-between mb-3">
                <div className={`w-10 h-10 rounded-xl ${metric.color} bg-opacity-10 flex items-center justify-center`}>
                  <Icon className={`w-5 h-5 ${metric.color.replace('bg-', 'text-')}`} />
                </div>
                <div className={`flex items-center gap-1 text-xs ${
                  metric.trend === 'up' ? 'text-[#FF6B6B]' : 
                  metric.trend === 'down' ? 'text-[#4ECDC4]' : 
                  'text-gray-400'
                }`}>
                  <TrendIcon className="w-3 h-3" />
                </div>
              </div>
              <div className="text-2xl font-bold text-gray-900">{metric.value}</div>
              <div className="text-xs text-gray-600 mt-1">
                {metric.label} <span className="text-gray-400">({metric.unit})</span>
              </div>
              {metric.status === 'normal' && (
                <div className="mt-2 text-xs text-[#4ECDC4] font-medium">W normie</div>
              )}
            </div>
          );
        })}
      </div>

      {/* Blood Pressure Chart */}
      <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="text-lg font-semibold text-gray-900">Ciśnienie krwi</h3>
            <p className="text-sm text-gray-600">Ostatnie 7 dni</p>
          </div>
          <button className="text-[#007AFF] text-sm font-medium">Zobacz więcej</button>
        </div>

        <div className="h-48">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={bloodPressureData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="day" stroke="#9ca3af" style={{ fontSize: '12px' }} />
              <YAxis stroke="#9ca3af" style={{ fontSize: '12px' }} />
              <Line
                type="monotone"
                dataKey="systolic"
                stroke="#007AFF"
                strokeWidth={2}
                dot={{ fill: '#007AFF', r: 4 }}
              />
              <Line
                type="monotone"
                dataKey="diastolic"
                stroke="#4ECDC4"
                strokeWidth={2}
                dot={{ fill: '#4ECDC4', r: 4 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="flex items-center justify-center gap-6 mt-4 pt-4 border-t border-gray-100">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-[#007AFF]" />
            <span className="text-sm text-gray-600">Skurczowe</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-[#4ECDC4]" />
            <span className="text-sm text-gray-600">Rozkurczowe</span>
          </div>
        </div>
      </div>

      {/* Mood Tracker */}
      <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Jak się dzisiaj czujesz?</h3>
        <div className="flex justify-between gap-2">
          {moodOptions.map((mood, index) => (
            <button
              key={index}
              className="flex flex-col items-center gap-2 p-3 rounded-2xl hover:bg-gray-50 transition-all"
            >
              <div className="text-3xl">{mood.emoji}</div>
              <span className="text-xs text-gray-600">{mood.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Add Measurement Button */}
      <button className="w-full bg-[#007AFF] text-white py-4 rounded-2xl font-medium hover:bg-[#0051D5] transition-all shadow-sm flex items-center justify-center gap-2">
        <Plus className="w-5 h-5" />
        Dodaj pomiar
      </button>
    </div>
  );
}
