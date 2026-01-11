import { Clock, Check, Bell, Camera, TrendingUp } from 'lucide-react';
import { useState } from 'react';

export function Dashboard() {
  const [medicationTaken, setMedicationTaken] = useState(false);
  
  const nextMedication = {
    name: 'Amlodipina',
    dosage: '5mg',
    time: '14:30',
    minutesUntil: 45,
  };

  const todayProgress = {
    taken: 6,
    total: 8,
    percentage: 75,
  };

  const handleMedicationTaken = () => {
    setMedicationTaken(true);
    setTimeout(() => setMedicationTaken(false), 3000);
  };

  return (
    <div className="pb-24 pt-6 px-4 space-y-6 max-w-screen-md mx-auto">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-2xl font-semibold text-gray-900">Mój Dzień</h1>
        <p className="text-gray-600">Niedziela, 11 stycznia 2026</p>
      </div>

      {/* Następna Dawka Widget */}
      <div className="bg-gradient-to-br from-[#007AFF] to-[#0051D5] rounded-3xl p-6 text-white shadow-lg">
        <div className="flex items-start justify-between mb-4">
          <div>
            <p className="text-white/80 text-sm mb-1">Następna dawka</p>
            <h2 className="text-2xl font-semibold">{nextMedication.name}</h2>
            <p className="text-white/90">{nextMedication.dosage}</p>
          </div>
          <div className="bg-white/20 rounded-2xl px-3 py-2 backdrop-blur-sm">
            <Clock className="w-5 h-5" />
          </div>
        </div>

        <div className="flex items-center gap-2 mb-6">
          <div className="text-3xl font-bold">{nextMedication.time}</div>
          <div className="text-white/80">({nextMedication.minutesUntil} min)</div>
        </div>

        <div className="flex gap-3">
          <button
            onClick={handleMedicationTaken}
            disabled={medicationTaken}
            className="flex-1 bg-white text-[#007AFF] py-3 rounded-2xl font-medium hover:bg-white/90 transition-all disabled:bg-[#4ECDC4] disabled:text-white flex items-center justify-center gap-2"
          >
            {medicationTaken ? (
              <>
                <Check className="w-5 h-5" />
                Przyjęto!
              </>
            ) : (
              'Przyjąłem'
            )}
          </button>
          <button className="bg-white/20 text-white p-3 rounded-2xl hover:bg-white/30 transition-all backdrop-blur-sm">
            <Bell className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Podsumowanie Dnia */}
      <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-900">Dzisiejszy postęp</h3>
          <div className="flex items-center gap-2 text-[#4ECDC4]">
            <TrendingUp className="w-5 h-5" />
            <span className="font-semibold">{todayProgress.percentage}%</span>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mb-4">
          <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-[#4ECDC4] to-[#44B3AC] rounded-full transition-all duration-500"
              style={{ width: `${todayProgress.percentage}%` }}
            />
          </div>
          <p className="text-sm text-gray-600 mt-2">
            {todayProgress.taken} z {todayProgress.total} leków przyjętych
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-3 gap-4 pt-4 border-t border-gray-100">
          <div className="text-center">
            <div className="text-2xl font-bold text-[#007AFF]">{todayProgress.taken}</div>
            <div className="text-xs text-gray-600 mt-1">Przyjęte</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-gray-400">{todayProgress.total - todayProgress.taken}</div>
            <div className="text-xs text-gray-600 mt-1">Pozostałe</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-[#4ECDC4]">0</div>
            <div className="text-xs text-gray-600 mt-1">Pominięte</div>
          </div>
        </div>
      </div>

      {/* Szybkie Akcje */}
      <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Szybkie akcje</h3>
        <div className="grid grid-cols-2 gap-3">
          <button className="flex items-center gap-3 p-4 rounded-2xl bg-[#F8F9FA] hover:bg-gray-100 transition-all">
            <div className="w-10 h-10 rounded-xl bg-[#007AFF]/10 flex items-center justify-center">
              <Camera className="w-5 h-5 text-[#007AFF]" />
            </div>
            <span className="text-sm font-medium text-gray-700">Skanuj lek</span>
          </button>
          <button className="flex items-center gap-3 p-4 rounded-2xl bg-[#F8F9FA] hover:bg-gray-100 transition-all">
            <div className="w-10 h-10 rounded-xl bg-[#4ECDC4]/10 flex items-center justify-center">
              <Bell className="w-5 h-5 text-[#4ECDC4]" />
            </div>
            <span className="text-sm font-medium text-gray-700">Przypomnienia</span>
          </button>
        </div>
      </div>
    </div>
  );
}
