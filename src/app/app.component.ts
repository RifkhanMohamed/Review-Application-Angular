import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './login/service/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'srta';
  showLogout=false;
  constructor(private router: Router){
    if(localStorage.getItem("currentUser")||localStorage.getItem("admin")){
      this.showLogout=true;
    }
    else{
      this.showLogout=false;
    }
  }
  navigateHome(){
    this.router.navigate(['home']);
  }

  logout(){
    if(localStorage.getItem("admin")){
      localStorage.removeItem('admin');
    }
    else{
      localStorage.removeItem('currentUser');
    }
    this.showLogout=false;
    this.router.navigate(['/login']);
  }
}
