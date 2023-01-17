import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit{
place:any;
rating:any;
comments:any;
review:any;
// commentsForDisplay:any;
  constructor(private router: Router,private _snackBar: MatSnackBar){}
  ngOnInit(): void {
    if (!localStorage.getItem('foo')) { 
      localStorage.setItem('foo', 'no reload') 
      location.reload() 
    } else {
      localStorage.removeItem('foo') 
    }

    if(!localStorage.getItem("review")){
      localStorage.setItem("review","[]")
    }   
    this.place= JSON.parse(localStorage.getItem("place")|| '{}')
  }

  onSubmit(){ 
    let id; 
    this.review = JSON.parse(localStorage.getItem("review")|| '{}');  
    if(this.review.length!=0){
      id=this.review.id+1;
    }
    else{
      id=1;
    }
    this.review.push({
      "id":id,
      "rate":this.rating,
      "place":this.place,
      "comments":this.comments,
      "user":JSON.parse(localStorage.getItem("currentUser")|| '{}'),
      "display":false
    });
    localStorage.setItem("review",JSON.stringify(this.review));
    this._snackBar.open('Thank you for your review. After admin allow your review will be display.', 'Success!', {
      horizontalPosition: 'right',
      verticalPosition: 'top',
      duration:2000
    });
    this.rating=null;
    this.comments="";
  }

}
