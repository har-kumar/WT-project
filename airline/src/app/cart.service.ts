import { Injectable } from '@angular/core';
import { Flight } from './models/flight.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private flightsInCart: Flight[] = [];

  addToCart(flight: Flight) {
    this.flightsInCart.push(flight);
  }

  getFlightsInCart(): Flight[] {
    return this.flightsInCart;
  }

  removeFromCart(flight: Flight) {
    this.flightsInCart = this.flightsInCart.filter(f => f.id !== flight.id);
  }

  clearCart() {
    this.flightsInCart = [];
  }
}
