import { useState } from 'react';
import { BottomNav } from './components/BottomNav';
import { Dashboard } from './components/Dashboard';
import { AIAssistant } from './components/AIAssistant';
import { MedicationSchedule } from './components/MedicationSchedule';
import { HealthMetrics } from './components/HealthMetrics';
import { Profile } from './components/Profile';

export default function App() {
  const [activeTab, setActiveTab] = useState('home');

  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return <Dashboard />;
      case 'assistant':
        return <AIAssistant />;
      case 'meds':
        return <MedicationSchedule />;
      case 'health':
        return <HealthMetrics />;
      case 'profile':
        return <Profile />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="min-h-screen bg-[#F8F9FA] font-['Inter',sans-serif]">
      {renderContent()}
      <BottomNav activeTab={activeTab} onTabChange={setActiveTab} />
    </div>
  );
}
