
import React, { useState, useEffect } from 'react';
import { Alert } from './types';
import { alerts as initialAlerts } from './data';

interface AlertQueueProps {
  alerts: Alert[];
  onUpdateAlert: (alert: Alert) => void;
}

const AlertQueue: React.FC<AlertQueueProps> = ({ alerts, onUpdateAlert }) => {
  const handleAcknowledge = (alert: Alert) => {
    let newStatus: Alert['status'] = 'In-progress';
    if (alert.status === 'In-progress') {
      newStatus = 'Resolved';
    } else if (alert.status === 'Resolved') {
      newStatus = 'Pending';
    }
    onUpdateAlert({ ...alert, status: newStatus });
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-4 h-full overflow-y-auto">
      <h2 className="text-xl font-bold mb-4">Alert Queue</h2>
      <div>
        {alerts.map(alert => (
          <div key={alert.id} className={`p-4 rounded-lg mb-4 ${alert.status === 'Pending' ? 'bg-red-100' : alert.status === 'In-progress' ? 'bg-yellow-100' : 'bg-green-100'}`}>
            <p className="font-semibold">Received an emergency alert from {alert.tourist.name}.</p>
            <p>Last known location: [{alert.location.lat}, {alert.location.lng}].</p>
            <p>Emergency Contacts: {alert.tourist.emergencyContacts.join(', ')}</p>
            <div className="flex justify-between items-center mt-2">
              <span className={`font-bold text-sm ${alert.status === 'Pending' ? 'text-red-700' : alert.status === 'In-progress' ? 'text-yellow-700' : 'text-green-700'}`}>
                {alert.status}
              </span>
              <button 
                onClick={() => handleAcknowledge(alert)}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Acknowledge & Dispatch
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AlertQueue;
