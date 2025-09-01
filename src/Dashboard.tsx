
import React from 'react';
import MapView from './MapView';
import AlertQueue from './AlertQueue';
import AuditTrail from './AuditTrail';
import type { Alert } from './types';

interface DashboardProps {
  alerts: Alert[];
  onUpdateAlert: (alert: Alert) => void;
}

const Dashboard: React.FC<DashboardProps> = ({ alerts, onUpdateAlert }) => {
  return (
    <div className="p-4 bg-gray-100 h-full">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 h-full">
        <div className="lg:col-span-2 h-[60vh] lg:h-full">
          <MapView />
        </div>
        <div className="h-[40vh] lg:h-full">
          <AlertQueue alerts={alerts} onUpdateAlert={onUpdateAlert} />
        </div>
      </div>
      <div className="mt-4">
        <AuditTrail />
      </div>
       <div className="mt-4 flex space-x-4">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Trigger Dispatch
        </button>
        <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
          File E-FIR
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
