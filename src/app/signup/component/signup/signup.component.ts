import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { User } from '../../model/user';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit{
  constructor(private _snackBar: MatSnackBar,private router: Router){}
  ngOnInit(): void {
    if(!localStorage.getItem("user")){
      localStorage.setItem("user","[]")
    }   
  }

  public loginValid = true;
  public username = '';
  public password = '';
  public firstName='';
  public lastName='';
  user:any=[];
  localUser:any=[];

  onSignup(){
    this.user = JSON.parse(localStorage.getItem("user")|| '{}');    
    if(this.user.length==0||this.user.length==undefined){
      this.user.push({
        "firstName":this.firstName,
        "lastName":this.lastName,
        "username":this.username,
        "password":this.password
      });
      localStorage.setItem("user",JSON.stringify(this.user));
      this._snackBar.open('Welcome to SRTA', 'Success', {
        horizontalPosition: 'right',
        verticalPosition: 'top',
        duration:1000
      });
      this.router.navigate(['/login']);
    }
    else{
      let res=this.user.find((e: { username: string; })=>e.username===this.username);
      if(res===undefined){
        this.user.push({
          "firstName":this.firstName,
          "lastName":this.lastName,
          "username":this.username,
          "password":this.password
        });
        localStorage.setItem("user",JSON.stringify(this.user));
        this._snackBar.open('Welcome to SRTA', 'Success', {
          horizontalPosition: 'right',
          verticalPosition: 'top',
          duration:1000
        });
        this.router.navigate(['/login']);
      }
      else{
        this._snackBar.open('This user already exists.. Please change the username', 'Error', {
          horizontalPosition: 'right',
          verticalPosition: 'top',
          duration:1000
        });
      }
    }

  }
}
