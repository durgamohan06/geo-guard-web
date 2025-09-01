
import React from 'react';
import { FiGrid, FiAlertTriangle, FiFileText } from 'react-icons/fi';

interface SidebarProps {
  onNavigate: (view: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ onNavigate }) => {
  return (
    <aside className="w-64 bg-gray-800 text-white p-4">
      <h2 className="text-2xl font-bold mb-8">Navigation</h2>
      <nav>
        <ul>
          <li className="mb-4">
            <button onClick={() => onNavigate('dashboard')} className="flex items-center w-full text-left hover:bg-gray-700 p-2 rounded">
              <FiGrid className="mr-3" />
              Dashboard
            </button>
          </li>
          <li className="mb-4">
            <button onClick={() => onNavigate('alerts')} className="flex items-center w-full text-left hover:bg-gray-700 p-2 rounded">
              <FiAlertTriangle className="mr-3" />
              Alerts
            </button>
          </li>
          <li>
            <button onClick={() => onNavigate('audit')} className="flex items-center w-full text-left hover:bg-gray-700 p-2 rounded">
              <FiFileText className="mr-3" />
              Audit Trail
            </button>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
