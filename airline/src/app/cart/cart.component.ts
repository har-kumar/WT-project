// cart.component.ts

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Flight } from '../models/flight.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  flights: Flight[] = [];

  constructor(private router: Router) {
    this.flights = [
      {
        id: 1,
        name: 'Flight 1',
        imageUrl: 'https://i.pinimg.com/originals/45/b9/9d/45b99d3310e94ed1faa3107b1ab9cc9e.jpg',
        price: 3000,
        departureDate: '2024-07-01',
        passengers: 2,
        departure: 'Delhi',
        destination: 'Chennai',
        departureTime: '10:00 AM',
        airline: 'Air India'
      },
      {
        id: 2,
        name: 'Flight 2',
        imageUrl: 'https://i.pinimg.com/564x/32/c8/7a/32c87ae07503ee6691ab99acf92e4e18.jpg',
        price: 4500,
        departureDate: '2024-08-15',
        passengers: 1,
        departure: 'Coimbatore',
        destination: 'Trichy',
        departureTime: '12:00 PM',
        airline: 'IndiGo'
      },
      // Add more flights here
    ];
  }

  ngOnInit(): void {}

  bookFlight(flight: Flight): void {
    this.router.navigate(['/booking'], { state: { flight } });
  }

  removeFlight(flight: Flight): void {
    this.flights = this.flights.filter(f => f.id !== flight.id);
  }

  goToPayment(): void {
    this.router.navigate(['/payment']);
  }
}
