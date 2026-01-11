import { Calendar, Clock, Pill, Check, X, Image } from 'lucide-react';
import { useState } from 'react';

interface Medication {
  id: string;
  name: string;
  dosage: string;
  time: string;
  taken: boolean;
  image?: string;
}

export function MedicationSchedule() {
  const [selectedDay, setSelectedDay] = useState(11);
  
  const daysOfWeek = ['Pn', 'Wt', 'Śr', 'Cz', 'Pt', 'So', 'Nd'];
  const currentWeek = [6, 7, 8, 9, 10, 11, 12];

  const medications: Medication[] = [
    {
      id: '1',
      name: 'Amlodipina',
      dosage: '5mg',
      time: '08:00',
      taken: true,
    },
    {
      id: '2',
      name: 'Metformina',
      dosage: '500mg',
      time: '08:30',
      taken: true,
    },
    {
      id: '3',
      name: 'Atorwastatyna',
      dosage: '20mg',
      time: '14:30',
      taken: false,
    },
    {
      id: '4',
      name: 'Aspiryna',
      dosage: '75mg',
      time: '20:00',
      taken: false,
    },
  ];

  const getStatusForDay = (day: number) => {
    if (day < selectedDay) {
      return { color: 'bg-[#4ECDC4]', label: 'Ukończone' };
    } else if (day === selectedDay) {
      return { color: 'bg-[#007AFF]', label: 'Dziś' };
    }
    return { color: 'bg-gray-200', label: 'Nadchodzące' };
  };

  return (
    <div className="pb-24 pt-6 px-4 space-y-6 max-w-screen-md mx-auto">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-semibold text-gray-900">Harmonogram</h1>
        <p className="text-gray-600 mt-1">Zarządzaj swoimi lekami</p>
      </div>

      {/* Calendar Week View */}
      <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-900">Styczeń 2026</h3>
          <button className="p-2 rounded-xl hover:bg-gray-100">
            <Calendar className="w-5 h-5 text-gray-600" />
          </button>
        </div>

        <div className="grid grid-cols-7 gap-2">
          {currentWeek.map((day, index) => {
            const status = getStatusForDay(day);
            const isSelected = day === selectedDay;

            return (
              <button
                key={day}
                onClick={() => setSelectedDay(day)}
                className={`flex flex-col items-center gap-1 p-3 rounded-2xl transition-all ${
                  isSelected
                    ? 'bg-[#007AFF] text-white'
                    : 'bg-gray-50 text-gray-600 hover:bg-gray-100'
                }`}
              >
                <span className="text-xs">{daysOfWeek[index]}</span>
                <span className="text-lg font-semibold">{day}</span>
                <div
                  className={`w-1.5 h-1.5 rounded-full mt-1 ${
                    isSelected ? 'bg-white' : status.color
                  }`}
                />
              </button>
            );
          })}
        </div>
      </div>

      {/* Medications List */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-gray-900">Dzisiejsze leki</h3>
          <span className="text-sm text-gray-600">4 leki</span>
        </div>

        {medications.map((med) => (
          <div
            key={med.id}
            className={`bg-white rounded-2xl p-4 shadow-sm border transition-all ${
              med.taken
                ? 'border-[#4ECDC4]/30 bg-[#4ECDC4]/5'
                : 'border-gray-200 hover:border-[#007AFF]/30'
            }`}
          >
            <div className="flex items-start gap-4">
              {/* Medication Icon/Image */}
              <div
                className={`w-14 h-14 rounded-2xl flex items-center justify-center ${
                  med.taken ? 'bg-[#4ECDC4]/10' : 'bg-gray-100'
                }`}
              >
                {med.image ? (
                  <Image className="w-6 h-6 text-gray-400" />
                ) : (
                  <Pill
                    className={`w-6 h-6 ${med.taken ? 'text-[#4ECDC4]' : 'text-gray-400'}`}
                  />
                )}
              </div>

              {/* Medication Details */}
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between mb-1">
                  <div>
                    <h4 className="font-semibold text-gray-900">{med.name}</h4>
                    <p className="text-sm text-gray-600">{med.dosage}</p>
                  </div>
                  {med.taken && (
                    <div className="flex items-center gap-1 bg-[#4ECDC4] text-white px-2 py-1 rounded-lg text-xs font-medium">
                      <Check className="w-3 h-3" />
                      Przyjęto
                    </div>
                  )}
                </div>

                <div className="flex items-center gap-2 mt-2 text-sm text-gray-600">
                  <Clock className="w-4 h-4" />
                  <span>{med.time}</span>
                </div>

                {!med.taken && (
                  <div className="flex gap-2 mt-3">
                    <button className="flex-1 bg-[#007AFF] text-white py-2 rounded-xl text-sm font-medium hover:bg-[#0051D5] transition-all">
                      Przyjąłem
                    </button>
                    <button className="px-4 py-2 rounded-xl border border-gray-200 text-gray-600 hover:bg-gray-50 transition-all">
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Add Medication Button */}
      <button className="w-full bg-[#007AFF] text-white py-4 rounded-2xl font-medium hover:bg-[#0051D5] transition-all shadow-sm">
        + Dodaj nowy lek
      </button>
    </div>
  );
}
