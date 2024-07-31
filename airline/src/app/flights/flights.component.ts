import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-flights',
  templateUrl: './flights.component.html',
  styleUrls: ['./flights.component.css']
})
export class FlightsComponent {
  flights: any[] = []; // Placeholder for flights data, assuming it's fetched from a service

  constructor(private router: Router, private cartService: CartService) {
    // Simulate fetching flights data from a service
    this.flights = this.getFlightsWithImages();
  }

  addToCart(flight: any) {
    // Add the selected flight to the cart
    this.cartService.addToCart(flight);
    
    // Navigate to the cart route
    this.router.navigate(['/cart']);
  }

  bookNow(flight: any) {
    // Navigate to the booking page (assuming '/booking' is the route for booking)
    // Pass the flight details as state data
    this.router.navigate(['/booking'], { state: { flight } });
  }

  // Placeholder method to simulate fetching flights data with images
  private getFlightsWithImages(): any[] {
    return [
      { 
        id: 1, 
        name: 'Flight 1', 
        departure: 'Delhi', 
        destination: 'Chennai', 
        price: 5000, 
        duration: '2h 30m', 
        departureTime: '10:00 AM', 
        airline: 'Air India',
        image: 'https://i.pinimg.com/originals/45/b9/9d/45b99d3310e94ed1faa3107b1ab9cc9e.jpg' // Add image URL for Flight 1
      },
      { 
        id: 2, 
        name: 'Flight 2', 
        departure: 'Coimbatore', 
        destination: 'Trichy', 
        price: 3000, 
        duration: '1h 15m', 
        departureTime: '12:00 PM', 
        airline: 'IndiGo',
        image: 'https://i.pinimg.com/564x/32/c8/7a/32c87ae07503ee6691ab99acf92e4e18.jpg' // Add image URL for Flight 2
      },
      { 
        id: 3, 
        name: 'Flight 3', 
        departure: 'Bangalore', 
        destination: 'Mumbai', 
        price: 4000, 
        duration: '1h 45m', 
        departureTime: '02:00 PM', 
        airline: 'SpiceJet',
        image: 'https://i.pinimg.com/236x/2f/b2/01/2fb201fa54aefca560be8c3ee2d5e1cf.jpg' // Add image URL for Flight 3
      },
      { 
        id: 4, 
        name: 'Flight 4', 
        departure: 'Mysore', 
        destination: 'Pune', 
        price: 4500, 
        duration: '1h 30m', 
        departureTime: '04:00 PM', 
        airline: 'GoAir',
        image: 'https://i.pinimg.com/170x/b2/73/4a/b2734a3f902a63d826f8a3d1fa45d487.jpg' // Add image URL for Flight 4
      },
      { 
        id: 5, 
        name: 'Flight 5', 
        departure: 'Ahmedabad', 
        destination: 'Cochin', 
        price: 6000, 
        duration: '2h 0m', 
        departureTime: '06:00 PM', 
        airline: 'Vistara',
        image: 'https://i.pinimg.com/736x/be/e3/a2/bee3a21dd443d4c9e99ddfdf0b05b0c6.jpg' // Add image URL for Flight 5
      },
      { 
        id: 6, 
        name: 'Flight 6', 
        departure: 'Kolkata', 
        destination: 'Jaipur', 
        price: 5500, 
        duration: '2h 15m', 
        departureTime: '08:30 AM', 
        airline: 'AirAsia',
        image: 'https://img.freepik.com/premium-photo/photo-airplane-sunset-beautiful-photography_131346-1018.jpg' // Add image URL for Flight 6
      },
      { 
        id: 7, 
        name: 'Flight 7', 
        departure: 'Hyderabad', 
        destination: 'Lucknow', 
        price: 4800, 
        duration: '1h 45m', 
        departureTime: '11:30 AM', 
        airline: 'GoAir',
        image: 'https://img.freepik.com/premium-photo/airplane-landing-sunset-generative-ai_896686-2780.jpg' // Add image URL for Flight 7
      },
      { 
        id: 8, 
        name: 'Flight 8', 
        departure: 'Chandigarh', 
        destination: 'Nagpur', 
        price: 5200, 
        duration: '2h 30m', 
        departureTime: '03:45 PM', 
        airline: 'SpiceJet',
        image: 'https://i.pinimg.com/736x/82/2f/e5/822fe57adc2f54d697c6f774c9c1f72d.jpg' // Add image URL for Flight 8
      },
      { 
        id: 9, 
        name: 'Flight 9', 
        departure: 'Guwahati', 
        destination: 'Patna', 
        price: 3700, 
        duration: '1h 0m', 
        departureTime: '05:00 PM', 
        airline: 'IndiGo',
        image: 'https://i.pinimg.com/564x/cd/56/1a/cd561a2c7598af100fc98d7ba1acdbdc.jpg' // Add image URL for Flight 9
      },
      { 
        id: 10, 
        name: 'Flight 10', 
        departure: 'Vijayawada', 
        destination: 'Visakhapatnam', 
        price: 3200, 
        duration: '1h 30m', 
        departureTime: '07:15 PM', 
        airline: 'Air India',
        image: 'https://i.pinimg.com/originals/d8/ae/16/d8ae16c7a4f8d7f9f1ec5d401664a628.jpg' // Add image URL for Flight 10
      }
    ];
  }
}
