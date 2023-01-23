import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-guest',
  templateUrl: './guest.component.html',
  styleUrls: ['./guest.component.css']
})
export class GuestComponent implements OnInit {
  constructor(private router: Router) { }
  ngOnInit(): void {
    if(!localStorage.getItem("user")){
      localStorage.setItem("user","[]")
    }


  }

  public loginValid = true;
  public firstName = '';
  public lastName='';


  onSubmit(){
    localStorage.setItem("currentUser",JSON.stringify({
      "firstName":this.firstName,
      "lastName":this.lastName,
      "username":"guest",
      "password":"guest"
    }));
    this.router.navigate(['/review']);
  }
}
