import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookingService {
  private apiUrl = 'http://localhost:3000/bookings';

  constructor(private http: HttpClient) {}

  createBooking(booking: any): Observable<any> {
    console.log('sending data to the backend', )
    return this.http.post(this.apiUrl, booking);
  }

  getBookings(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  updateBooking(id: string, booking: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, booking);
  }

  deleteBooking(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
