import { Component, OnInit } from '@angular/core';
import { BookingService } from './booking.service';


@Component({
  selector: 'app-booking-details',
  templateUrl: './booking-details.component.html',
  styleUrls: ['./booking-details.component.css']
})
export class BookingDetailsComponent implements OnInit {

  bookingDetail;

  constructor(
    private bookingService:BookingService

    ) { }

  ngOnInit() {

  }

  getBookings(){
    this.bookingService.getBookings()
    .subscribe((res:Array<any>)=>{
      let bookings =res;
      this.bookingDetail=bookings.filter((data=>data.bookings.id==(this.bookingDetail) && !(!!data.status)));
    });  
  }
  
}
