import { Component, OnInit,  } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})


export class AdminComponent implements OnInit{
  constructor(private router: Router){

  }
  ngOnInit(): void {
    
    if(!localStorage.getItem("admin")){
      this.router.navigate(['/forbidden']);
    }

    if (!localStorage.getItem('foo')) { 
      localStorage.setItem('foo', 'no reload') 
      location.reload() 
    } else {
      localStorage.removeItem('foo') 
    }

    if(!localStorage.getItem("review")){
      localStorage.setItem("review","[]")
    }  

    this.dataSource = JSON.parse(localStorage.getItem("review")|| '{}'); 

  }
  displayedColumns: string[] = ['id', 'title', 'location', 'image','rate','user','comment','action'];
  dataSource:any 
  review:any;
  update(value:any,id:any){

    
    this.review = JSON.parse(localStorage.getItem("review")|| '{}');  

    let index = this.review.findIndex((x: { id: string; }) => x.id === id);
if(value.target.value=="true"){
  this.review[index].display=true;
}
else{
  this.review[index].display=false;
}

    localStorage.setItem("review",JSON.stringify(this.review));

    
  }
}
