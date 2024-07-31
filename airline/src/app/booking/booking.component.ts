import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {
  bookingForm!: FormGroup;  // Add the `!` operator
  submitted = false;
  bookingSuccessful = false;
  bookingSummary: any;
  flights = [
    { id: 1, name: 'Flight 101' },
    { id: 2, name: 'Flight 102' },
    // Add more flight options as needed
  ];

  constructor(private formBuilder: FormBuilder, private http: HttpClient) {}

  ngOnInit() {
    this.bookingForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      flight: ['', Validators.required],
      departureDate: ['', Validators.required],
      passengers: ['', [Validators.required, Validators.min(1), Validators.max(10)]]
    });
  }

  get formControls() {
    return this.bookingForm.controls;
  }

  submitBookingForm() {
    this.submitted = true;

    if (this.bookingForm.invalid) {
      return;
    }

    this.http.post<any>('http://localhost:3000/api/bookings', this.bookingForm.value)
      .subscribe(response => {
        this.bookingSuccessful = true;
        this.bookingSummary = response;
      }, error => {
        console.error('There was an error!', error);
      });
  }
}
