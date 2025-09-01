// src/types.ts

export interface Tourist {
  id: string;
  name: string;
  age: number;
  emergencyContacts: string[];
}

export interface Alert {
  id: string;
  tourist: Tourist;
  location: {
    lat: number;
    lng: number;
  };
  timestamp: string;
  status: "Pending" | "In-progress" | "Resolved";
}

export interface AuditLog {
  id: string;
  timestamp: string;
  authority: string;
  action: string;
  details: string;
}
