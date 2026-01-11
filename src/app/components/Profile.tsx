import { User, Heart, FileText, Share2, Settings, Bell, Moon, ZoomIn, ChevronRight, QrCode } from 'lucide-react';
import { useState } from 'react';

export function Profile() {
  const [seniorMode, setSeniorMode] = useState(false);
  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  const userInfo = {
    name: 'Jan Kowalski',
    age: 67,
    bloodType: 'A+',
    allergies: ['Penicylina', 'Aspiryna'],
    emergencyContact: '+48 123 456 789',
  };

  const menuItems = [
    {
      icon: Heart,
      label: 'Dane medyczne',
      description: 'Grupa krwi, alergie, choroby',
      color: 'text-red-500',
    },
    {
      icon: FileText,
      label: 'Historia leków',
      description: 'Wszystkie przyjęte leki',
      color: 'text-blue-500',
    },
    {
      icon: Share2,
      label: 'Udostępnij raport',
      description: 'PDF lub kod QR dla lekarza',
      color: 'text-green-500',
    },
    {
      icon: Bell,
      label: 'Przypomnienia',
      description: 'Zarządzaj powiadomieniami',
      color: 'text-purple-500',
    },
  ];

  return (
    <div className={`pb-24 pt-6 px-4 space-y-6 max-w-screen-md mx-auto ${seniorMode ? 'senior-mode' : ''}`}>
      {/* Header */}
      <div>
        <h1 className={seniorMode ? 'text-3xl font-semibold text-gray-900' : 'text-2xl font-semibold text-gray-900'}>
          Profil
        </h1>
        <p className={`text-gray-600 mt-1 ${seniorMode ? 'text-lg' : ''}`}>
          Twoje dane i ustawienia
        </p>
      </div>

      {/* User Card */}
      <div className="bg-gradient-to-br from-[#007AFF] to-[#0051D5] rounded-3xl p-6 text-white shadow-lg">
        <div className="flex items-start gap-4">
          <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
            <User className="w-8 h-8 text-white" />
          </div>
          <div className="flex-1">
            <h2 className={seniorMode ? 'text-2xl font-semibold mb-1' : 'text-xl font-semibold mb-1'}>
              {userInfo.name}
            </h2>
            <p className={`text-white/80 ${seniorMode ? 'text-lg' : 'text-sm'}`}>
              {userInfo.age} lat • Grupa krwi: {userInfo.bloodType}
            </p>
          </div>
        </div>

        <div className="mt-4 pt-4 border-t border-white/20">
          <div className="flex items-center justify-between">
            <span className={`text-white/80 ${seniorMode ? 'text-lg' : 'text-sm'}`}>
              Kontakt ICE
            </span>
            <span className={`font-medium ${seniorMode ? 'text-lg' : ''}`}>
              {userInfo.emergencyContact}
            </span>
          </div>
        </div>
      </div>

      {/* Senior Mode Toggle */}
      <div className="bg-gradient-to-br from-[#4ECDC4] to-[#44B3AC] rounded-3xl p-6 text-white shadow-lg">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
              <ZoomIn className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className={seniorMode ? 'text-xl font-semibold' : 'text-lg font-semibold'}>
                Tryb Seniora
              </h3>
              <p className={`text-white/80 ${seniorMode ? 'text-base' : 'text-sm'}`}>
                Większe elementy i tekst
              </p>
            </div>
          </div>
          <button
            onClick={() => setSeniorMode(!seniorMode)}
            className={`relative w-16 h-8 rounded-full transition-all ${
              seniorMode ? 'bg-white' : 'bg-white/30'
            }`}
          >
            <div
              className={`absolute top-1 w-6 h-6 rounded-full transition-all ${
                seniorMode
                  ? 'right-1 bg-[#4ECDC4]'
                  : 'left-1 bg-white'
              }`}
            />
          </button>
        </div>
        {seniorMode && (
          <div className="mt-3 p-3 bg-white/20 backdrop-blur-sm rounded-xl">
            <p className="text-sm text-white/90">
              ✓ Elementy powiększone o 30%<br />
              ✓ Wysoki kontrast aktywny<br />
              ✓ Uproszczony interfejs
            </p>
          </div>
        )}
      </div>

      {/* Medical Info */}
      <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100">
        <h3 className={`font-semibold text-gray-900 mb-4 ${seniorMode ? 'text-xl' : 'text-lg'}`}>
          Informacje medyczne
        </h3>
        <div className="space-y-3">
          <div>
            <label className={`text-gray-600 ${seniorMode ? 'text-base' : 'text-sm'}`}>
              Alergie
            </label>
            <div className="flex flex-wrap gap-2 mt-1">
              {userInfo.allergies.map((allergy, index) => (
                <span
                  key={index}
                  className={`bg-[#FF6B6B]/10 text-[#FF6B6B] px-3 py-1.5 rounded-xl font-medium ${seniorMode ? 'text-base' : 'text-sm'}`}
                >
                  {allergy}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Menu Items */}
      <div className="space-y-3">
        {menuItems.map((item, index) => {
          const Icon = item.icon;
          return (
            <button
              key={index}
              className={`w-full bg-white rounded-2xl p-4 shadow-sm border border-gray-100 hover:border-[#007AFF]/30 transition-all ${
                seniorMode ? 'p-6' : ''
              }`}
            >
              <div className="flex items-center gap-4">
                <div className={`${seniorMode ? 'w-14 h-14' : 'w-12 h-12'} rounded-xl bg-gray-50 flex items-center justify-center`}>
                  <Icon className={`${seniorMode ? 'w-7 h-7' : 'w-6 h-6'} ${item.color}`} />
                </div>
                <div className="flex-1 text-left">
                  <div className={`font-semibold text-gray-900 ${seniorMode ? 'text-xl' : 'text-base'}`}>
                    {item.label}
                  </div>
                  <div className={`text-gray-600 ${seniorMode ? 'text-base' : 'text-sm'}`}>
                    {item.description}
                  </div>
                </div>
                <ChevronRight className={`text-gray-400 ${seniorMode ? 'w-6 h-6' : 'w-5 h-5'}`} />
              </div>
            </button>
          );
        })}
      </div>

      {/* QR Code for Doctor */}
      <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100">
        <div className="text-center">
          <div className="w-32 h-32 mx-auto bg-gray-100 rounded-2xl flex items-center justify-center mb-4">
            <QrCode className="w-16 h-16 text-gray-400" />
          </div>
          <h3 className={`font-semibold text-gray-900 mb-1 ${seniorMode ? 'text-xl' : 'text-lg'}`}>
            Kod QR dla lekarza
          </h3>
          <p className={`text-gray-600 mb-4 ${seniorMode ? 'text-base' : 'text-sm'}`}>
            Udostępnij swoje dane medyczne
          </p>
          <button className={`w-full bg-[#007AFF] text-white py-3 rounded-2xl font-medium hover:bg-[#0051D5] transition-all ${seniorMode ? 'text-lg py-4' : ''}`}>
            Generuj kod QR
          </button>
        </div>
      </div>

      {/* Settings */}
      <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100">
        <h3 className={`font-semibold text-gray-900 mb-4 ${seniorMode ? 'text-xl' : 'text-lg'}`}>
          Ustawienia
        </h3>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Bell className={`text-gray-600 ${seniorMode ? 'w-6 h-6' : 'w-5 h-5'}`} />
              <span className={`text-gray-900 ${seniorMode ? 'text-lg' : ''}`}>
                Powiadomienia
              </span>
            </div>
            <button
              onClick={() => setNotifications(!notifications)}
              className={`relative w-12 h-6 rounded-full transition-all ${
                notifications ? 'bg-[#007AFF]' : 'bg-gray-300'
              }`}
            >
              <div
                className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-all ${
                  notifications ? 'right-1' : 'left-1'
                }`}
              />
            </button>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Moon className={`text-gray-600 ${seniorMode ? 'w-6 h-6' : 'w-5 h-5'}`} />
              <span className={`text-gray-900 ${seniorMode ? 'text-lg' : ''}`}>
                Tryb ciemny
              </span>
            </div>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`relative w-12 h-6 rounded-full transition-all ${
                darkMode ? 'bg-[#007AFF]' : 'bg-gray-300'
              }`}
            >
              <div
                className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-all ${
                  darkMode ? 'right-1' : 'left-1'
                }`}
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
