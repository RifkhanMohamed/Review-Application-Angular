import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'srta';

  constructor(private router: Router){

  }
  navigateHome(){
    this.router.navigate(['home']);
  }
}
