import { Component, OnInit, ViewEncapsulation } from '@angular/core';
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
forReview:any;
forDisplayReview:any;
forShowSubmit=false;
// commentsForDisplay:any;
  constructor(private router: Router,private _snackBar: MatSnackBar){}
  ngOnInit(): void {
    if (!localStorage.getItem('foo')) { 
      localStorage.setItem('foo', 'no reload') 
      location.reload() 
    } else {
      localStorage.removeItem('foo') 
    }

    if(!localStorage.getItem('currentUser')&&!localStorage.getItem('admin')){
      this.forShowSubmit=false;
    }
    else{
      this.forShowSubmit=true;
    }

    this.place= JSON.parse(localStorage.getItem("place")|| '{}')
    if(!localStorage.getItem("review")){
      localStorage.setItem("review","[]")
    }
    else{
      this.forReview=JSON.parse(localStorage.getItem("review")||'{}')
      this.forDisplayReview=this.forReview.filter((e: {
        place: any; id: string;  display:boolean
})=>(e.place.id===this.place.id)&&(e.display===true));
    }   
    
console.log(this.forDisplayReview,"forDisplay");


  }

  onSubmit(){ 
    let id; 
    this.review = JSON.parse(localStorage.getItem("review")|| '{}');  
    if(this.review.length!=0){
      console.log(this.review);
      
      id=this.review[this.review.length-1].id+1;
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
