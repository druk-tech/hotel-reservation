import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/Shared/shared.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  users;
  userDetail;

  constructor(private userService:SharedService) { }

  ngOnInit() {
    this.getUsers();
    this.userDetail = JSON.parse(localStorage.getItem('token'));
  }

  getUsers(){
    this.userService.getUsers()
    .subscribe((res:Array<any>)=>{
      this.users = res
    });
  }
  getUserName(id){
    let user = this.users.filter(data=>data.id == id)
    return user[0].username
    
  }
  getUserContact(id){
    let user = this.users.filter(data=>data.id == id)
    return user[0].contact 
  }
  getUserEmail(id){
    let user = this.users.filter(data=>data.id == id)
    return user[0].email
  }

}
