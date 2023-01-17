import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from '../../service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private activatedRoute:ActivatedRoute,private router: Router,private _snackBar: MatSnackBar,private loginService:LoginService) { }
  ngOnInit(): void {
    if(!localStorage.getItem("user")){
      localStorage.setItem("user","[]")
    }
    this.activatedRoute.queryParams.subscribe(params => {
      this.data=params['data'];
      console.log(this.data,"data");
    });

    
  }
  data:any;
  loginValid = true;
  username = '';
  password = '';
  adminUsername='';
  adminPassword='';
  user:any;
  async onSubmit(){
    this.user = JSON.parse(localStorage.getItem("user")|| '{}'); 
    let res=this.user.find((e: { username: string; })=>e.username===this.username);
    if(res===undefined){
      if(this.username=="admin123"&&this.password=="admin123"){
        localStorage.setItem("admin",JSON.stringify({
          "username":"admin123",
          "password":"admin123"
        }));
        this.router.navigate(['/admin']);
      }else {
        localStorage.setItem("user",JSON.stringify(this.user));
        this._snackBar.open('No user with this username... please register...', 'Warning!', {
          horizontalPosition: 'right',
          verticalPosition: 'top',
          duration:1000
        });
      }
    }
    else{
      if(res.username==this.username&&res.password==this.password&&localStorage.getItem("place")){
        localStorage.setItem("currentUser",JSON.stringify(res));
        this.router.navigate(['/review']);
      }
      else if(res.username==this.username&&res.password==this.password&&!localStorage.getItem("place")){
        localStorage.setItem("currentUser",JSON.stringify(res));
        this.router.navigate(['/search']);
      }
      else{
        this._snackBar.open('Please check your user credentials...', 'Error', {
          horizontalPosition: 'right',
          verticalPosition: 'top',
          duration:1000
        });
      }

    }
  }
}
