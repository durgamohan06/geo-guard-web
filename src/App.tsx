import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Dashboard from './Dashboard';
import AlertQueue from './AlertQueue';
import AuditTrail from './AuditTrail';
import { alerts as initialAlerts, tourists } from './data';
import { Alert } from './types';

const App: React.FC = () => {
  const [view, setView] = useState('dashboard');
  const [alerts, setAlerts] = useState<Alert[]>(initialAlerts);

  useEffect(() => {
    const interval = setInterval(() => {
      const newAlert: Alert = {
        id: `A00${alerts.length + 1}`,
        tourist: tourists[Math.floor(Math.random() * tourists.length)],
        location: {
          lat: 12.9716 + (Math.random() - 0.5) * 0.1,
          lng: 77.5946 + (Math.random() - 0.5) * 0.1,
        },
        timestamp: new Date().toISOString(),
        status: 'Pending',
      };
      setAlerts(prevAlerts => [newAlert, ...prevAlerts]);
    }, 10000); // Add a new alert every 10 seconds

    return () => clearInterval(interval);
  }, [alerts]);

  const handleUpdateAlert = (updatedAlert: Alert) => {
    setAlerts(alerts.map(alert => (alert.id === updatedAlert.id ? updatedAlert : alert)));
  };

  const renderView = () => {
    switch (view) {
      case 'dashboard':
        return <Dashboard alerts={alerts} onUpdateAlert={handleUpdateAlert} />;
      case 'alerts':
        return <div className="p-4"><AlertQueue alerts={alerts} onUpdateAlert={handleUpdateAlert} /></div>;
      case 'audit':
        return <div className="p-4"><AuditTrail /></div>;
      default:
        return <Dashboard alerts={alerts} onUpdateAlert={handleUpdateAlert} />;
    }
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar onNavigate={setView} />
      <div className="flex-1 flex flex-col">
        <Navbar />
        <main className="flex-1 overflow-y-auto">
          {renderView()}
        </main>
      </div>
    </div>
  );
};

export default App;