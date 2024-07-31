// flight.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FlightService {

  constructor(private http: HttpClient) { }

  // Example method to fetch flights data from backend API
  getFlights(): Observable<any[]> {
    return this.http.get<any[]>('https://api.yourbackend.com/flights');
    // Replace 'https://api.yourbackend.com/flights' with your actual API endpoint
  }
}
