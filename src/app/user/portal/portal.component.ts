import { Component, OnInit } from '@angular/core';
import { HotelService } from 'src/app/Shared/hotel.service';
import { Hotel } from 'src/app/admin/portal/hotel/hotel.model';

@Component({
  selector: 'app-portal',
  templateUrl: './portal.component.html',
  styleUrls: ['./portal.component.css']
})
export class PortalComponent implements OnInit {

  constructor(private hotelService:HotelService) { }

  allHotels;

  ngOnInit() { 
    this.getAllHotels();
   }


  getAllHotels(){
    this.hotelService.getAllHotels()
    .subscribe((res:Array<any>)=>{
      this.allHotels=res
    });
  }
  // getUsers(){
  //   this.userService.getUsers()
  //   .subscribe((res:Array<any>)=>{
  //     this.users=res
  //   });
  // }

}
