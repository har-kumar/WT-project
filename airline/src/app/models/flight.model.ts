// src/app/models/flight.model.ts
export interface Flight {
  id: number;
  name: string;
  imageUrl: string;
  price: number;
  departureDate: string;
  passengers: number;
  departure: string;
  destination: string;
  departureTime: string;
  airline: string;
}
