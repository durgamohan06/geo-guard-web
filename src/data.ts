
import { Alert, AuditLog, Tourist } from "./types";


export const tourists: Tourist[] = [
  {
    id: 'T001',
    name: 'John Doe',
    age: 34,
    emergencyContacts: ['+1-555-1234', '+1-555-5678'],
  },
  {
    id: 'T002',
    name: 'Jane Smith',
    age: 28,
    emergencyContacts: ['+44-20-7946-0958'],
  },
];

export const alerts: Alert[] = [
  {
    id: 'A001',
    tourist: tourists[0],
    location: { lat: 12.9716, lng: 77.5946 },
    timestamp: new Date().toISOString(),
    status: 'Pending',
  },
  {
    id: 'A002',
    tourist: tourists[1],
    location: { lat: 13.0827, lng: 80.2707 },
    timestamp: new Date().toISOString(),
    status: 'Pending',
  },
];

export const auditLogs: AuditLog[] = [
  {
    id: 'L001',
    timestamp: new Date().toISOString(),
    authority: 'Bangalore Police',
    action: 'Trigger Dispatch',
    details: 'Dispatched unit to location [12.9716, 77.5946]',
  },
  {
    id: 'L002',
    timestamp: new Date().toISOString(),
    authority: 'Tourism Dept.',
    action: 'Viewed Tourist Profile',
    details: 'Viewed profile for tourist T002',
  },
  {
    id: 'L003',
    timestamp: new Date().toISOString(),
    authority: 'Chennai Police',
    action: 'File E-FIR',
    details: 'E-FIR filed for alert A002',
  },
];

export const heatmapData = [
  { lat: 12.9716, lng: 77.5946, intensity: 0.8 },
  { lat: 12.9720, lng: 77.5950, intensity: 0.5 },
  { lat: 13.0827, lng: 80.2707, intensity: 0.9 },
  { lat: 13.0830, lng: 80.2710, intensity: 0.6 },
  { lat: 28.6139, lng: 77.2090, intensity: 0.7 }, // Delhi
  { lat: 19.0760, lng: 72.8777, intensity: 0.9 }, // Mumbai
];
