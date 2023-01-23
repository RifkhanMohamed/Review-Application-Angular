import { Component, Input, OnInit } from '@angular/core';
import { cardData } from "./../model/card-model";
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-places',
  templateUrl: './places.component.html',
  styleUrls: ['./places.component.css']
})
export class PlacesComponent implements OnInit{
  value: string | null | undefined;
  post: cardData[]=[];
  title="";
  isSearch="0";
  searchValue="";


  constructor(private activatedRoute: ActivatedRoute,private router: Router){

  }
  ngOnInit(): void {
     this.activatedRoute.queryParams.subscribe(params => {
      this.value=params['title'];
      this.isSearch=params['forSearch'];
      this.searchValue=params['value'];
    });
    if(this.value=='location'&&this.isSearch=="0"&&this.searchValue=="forCategory"){
      this.post.push(
        {
          id:1,
          mainImageUrl:'./../../../assets/images/audley.png',
          subImageUrl:'./../../../assets/images/audley1.jpeg',
          title:'Audley',
          location:'Stoke-on-Trent',
          description:'Audley is a large village in Staffordshire. It is the centre of Audley Rural parish, approximately four miles north west of Newcastle under Lyme and 3 miles from Alsager near the Staffordshire Cheshire border. It has football and cricket clubs within the village.',
          reviews:'50',
          rating:3
        },
        {
          id:2,
          mainImageUrl:'./../../../assets/images/burslem.jpg',
          subImageUrl:'./../../../assets/images/burslem1.jpeg',
          title:'Burslem',
          location:'Stoke-on-Trent',
          description:'Burslem is on the eastern ridge of the Fowlea Valley, the Fowlea being one of the main early tributaries of the River Trent. Burslem embraces the areas of Middleport, Dalehall, Longport, Westport, Trubshaw Cross, and Brownhills.',
          reviews:'150',
          rating:2
        },
        {
          id:3,
          mainImageUrl:'./../../../assets/images/cannock.jpg',
          subImageUrl:'./../../../assets/images/cannock1.jpeg',
          title:'Cannock',
          location:'Staffordshire',
          description:'Cannock was a small rural community until mining increased heavily during the mid-to-late 19th century. The area then continued to grow rapidly with many industries coming to the area because of its proximity to the Black Country and its coal reserves',
          reviews:'89',
          rating:3
        }
      )
      this.title="Locations";
    }
    if(this.value=='location'&&this.isSearch=="1"){
      if(this.searchValue=='Audley'){
        this.post.push(
          {
            id:1,
            mainImageUrl:'./../../../assets/images/audley.png',
            subImageUrl:'./../../../assets/images/audley1.jpeg',
            title:'Audley',
            location:'Stoke-on-Trent',
            description:'Audley is a large village in Staffordshire. It is the centre of Audley Rural parish, approximately four miles north west of Newcastle under Lyme and 3 miles from Alsager near the Staffordshire Cheshire border. It has football and cricket clubs within the village.',
            reviews:'50',
            rating:3
          }
          )
         
      }
      if(this.searchValue=='Burslem'){
        this.post.push(
          {
            id:2,
            mainImageUrl:'./../../../assets/images/burslem.jpg',
            subImageUrl:'./../../../assets/images/burslem1.jpeg',
            title:'Burslem',
            location:'Stoke-on-Trent',
            description:'Burslem is on the eastern ridge of the Fowlea Valley, the Fowlea being one of the main early tributaries of the River Trent. Burslem embraces the areas of Middleport, Dalehall, Longport, Westport, Trubshaw Cross, and Brownhills.',
            reviews:'150',
            rating:2
          })
         
        }
          if(this.searchValue=='Cannock'){
            this.post.push(
              {
                id:3,
                mainImageUrl:'./../../../assets/images/cannock.jpg',
                subImageUrl:'./../../../assets/images/cannock1.jpeg',
                title:'Cannock',
                location:'Staffordshire',
                description:'Cannock was a small rural community until mining increased heavily during the mid-to-late 19th century. The area then continued to grow rapidly with many industries coming to the area because of its proximity to the Black Country and its coal reserves',
                reviews:'89',
                rating:3
              })
              
            }
            this.title="Locations";
    }
    if(this.value=='attraction'&&this.isSearch=="0"&&this.searchValue=="forCategory"){
      this.post.push(
        {
          id:4,
          mainImageUrl:'./../../../assets/images/audley.png',
          subImageUrl:'./../../../assets/images/audley1.jpeg',
          title:'Alton Towers',
          location:'Stoke-on-Trent',
          description:'Audley is a large village in Staffordshire, England. It is the centre of Audley Rural parish, approximately four miles (6 km) north west of Newcastle under Lyme and 3 miles (5 km) from Alsager near the Staffordshire Cheshire border.',
          reviews:'200',
          rating:3
        },
        {
          id:5,
          mainImageUrl:'./../../../assets/images/audley.png',
          subImageUrl:'./../../../assets/images/audley1.jpeg',
          title:'Trentham Estate',
          location:'Stoke-on-Trent',
          description:'Audley is a large village in Staffordshire, England. It is the centre of Audley Rural parish, approximately four miles (6 km) north west of Newcastle under Lyme and 3 miles (5 km) from Alsager near the Staffordshire Cheshire border.',
          reviews:'200',
          rating:3
        },
        {
          id:6,
          mainImageUrl:'./../../../assets/images/audley.png',
          subImageUrl:'./../../../assets/images/audley1.jpeg',
          title:'SnowDome',
          location:'Stoke-on-Trent',
          description:'Audley is a large village in Staffordshire, England. It is the centre of Audley Rural parish, approximately four miles (6 km) north west of Newcastle under Lyme and 3 miles (5 km) from Alsager near the Staffordshire Cheshire border.',
          reviews:'200',
          rating:3
        }
      )
      this.title="Attractions";
    }
    if(this.value=='attraction'&&this.isSearch=="1"){
      if(this.searchValue=='Alton Towers'){
        this.post.push(
          {
            id:4,
            mainImageUrl:'./../../../assets/images/audley.png',
            subImageUrl:'./../../../assets/images/audley1.jpeg',
            title:'Alton Towers',
            location:'Stoke-on-Trent',
            description:'Audley is a large village in Staffordshire, England. It is the centre of Audley Rural parish, approximately four miles (6 km) north west of Newcastle under Lyme and 3 miles (5 km) from Alsager near the Staffordshire Cheshire border.',
            reviews:'200',
            rating:3
          }
          )
          
      }
      if(this.searchValue=='Trentham Estate'){
        this.post.push(
          {
            id:5,
            mainImageUrl:'./../../../assets/images/audley.png',
            subImageUrl:'./../../../assets/images/audley1.jpeg',
            title:'Trentham Estate',
            location:'Stoke-on-Trent',
            description:'Audley is a large village in Staffordshire, England. It is the centre of Audley Rural parish, approximately four miles (6 km) north west of Newcastle under Lyme and 3 miles (5 km) from Alsager near the Staffordshire Cheshire border.',
            reviews:'200',
            rating:3
          })
          
        }
          if(this.searchValue=='SnowDome'){
            this.post.push(
              {
                id:6,
                mainImageUrl:'./../../../assets/images/audley.png',
                subImageUrl:'./../../../assets/images/audley1.jpeg',
                title:'SnowDome',
                location:'Stoke-on-Trent',
                description:'Audley is a large village in Staffordshire, England. It is the centre of Audley Rural parish, approximately four miles (6 km) north west of Newcastle under Lyme and 3 miles (5 km) from Alsager near the Staffordshire Cheshire border.',
                reviews:'200',
                rating:3
              })
              
            }
            this.title="Attractions";
    }
    if(this.value=='accomodation'&&this.isSearch=="0"&&this.searchValue=="forCategory"){
      this.post.push(
        {
          id:7,
          mainImageUrl:'./../../../assets/images/audley.png',
          subImageUrl:'./../../../assets/images/audley1.jpeg',
          title:'Hilton Garden Inn',
          location:'Stoke-on-Trent',
          description:'Audley is a large village in Staffordshire, England. It is the centre of Audley Rural parish, approximately four miles (6 km) north west of Newcastle under Lyme and 3 miles (5 km) from Alsager near the Staffordshire Cheshire border.',
          reviews:'200',
          rating:3
        },
        {
          id:8,
          mainImageUrl:'./../../../assets/images/audley.png',
          subImageUrl:'./../../../assets/images/audley1.jpeg',
          title:'Q Studios',
          location:'Stoke-on-Trent',
          description:'Audley is a large village in Staffordshire, England. It is the centre of Audley Rural parish, approximately four miles (6 km) north west of Newcastle under Lyme and 3 miles (5 km) from Alsager near the Staffordshire Cheshire border.',
          reviews:'200',
          rating:3
        },
        {
          id:9,
          mainImageUrl:'./../../../assets/images/audley.png',
          subImageUrl:'./../../../assets/images/audley1.jpeg',
          title:'Premier Inn Uttoxeter',
          location:'Stoke-on-Trent',
          description:'Audley is a large village in Staffordshire, England. It is the centre of Audley Rural parish, approximately four miles (6 km) north west of Newcastle under Lyme and 3 miles (5 km) from Alsager near the Staffordshire Cheshire border.',
          reviews:'200',
          rating:3
        }
      )
      this.title="Accomodation";
    }
    if(this.value=='accomodation'&&this.isSearch=="1"){
      if(this.searchValue=='Hilton Garden Inn'){
        this.post.push(
          {
            id:7,
            mainImageUrl:'./../../../assets/images/audley.png',
            subImageUrl:'./../../../assets/images/audley1.jpeg',
            title:'Hilton Garden Inn',
            location:'Stoke-on-Trent',
            description:'Audley is a large village in Staffordshire, England. It is the centre of Audley Rural parish, approximately four miles (6 km) north west of Newcastle under Lyme and 3 miles (5 km) from Alsager near the Staffordshire Cheshire border.',
            reviews:'200',
            rating:3
          }
          )
      
      }
      if(this.searchValue=='Q Studios'){
        this.post.push(
          {
            id:8,
            mainImageUrl:'./../../../assets/images/audley.png',
            subImageUrl:'./../../../assets/images/audley1.jpeg',
            title:'Q Studios',
            location:'Stoke-on-Trent',
            description:'Audley is a large village in Staffordshire, England. It is the centre of Audley Rural parish, approximately four miles (6 km) north west of Newcastle under Lyme and 3 miles (5 km) from Alsager near the Staffordshire Cheshire border.',
            reviews:'200',
            rating:3
          }
        )
       
      }
      if(this.searchValue=='Premier Inn Uttoxeter'){
        this.post.push(
          {
            id:9,
            mainImageUrl:'./../../../assets/images/audley.png',
            subImageUrl:'./../../../assets/images/audley1.jpeg',
            title:'Premier Inn Uttoxeter',
            location:'Stoke-on-Trent',
            description:'Audley is a large village in Staffordshire, England. It is the centre of Audley Rural parish, approximately four miles (6 km) north west of Newcastle under Lyme and 3 miles (5 km) from Alsager near the Staffordshire Cheshire border.',
            reviews:'200',
            rating:3
          }
        )
        
      }
      this.title="Accomodation";
    }
    if(this.value=='restaurant'&&this.isSearch=="0"&&this.searchValue=="forCategory"){
      this.post.push(
        {
          id:10,
          mainImageUrl:'./../../../assets/images/audley.png',
          subImageUrl:'./../../../assets/images/audley1.jpeg',
          title:'Woodlands Restaurent',
          location:'Stoke-on-Trent',
          description:'Audley is a large village in Staffordshire, England. It is the centre of Audley Rural parish, approximately four miles (6 km) north west of Newcastle under Lyme and 3 miles (5 km) from Alsager near the Staffordshire Cheshire border.',
          reviews:'200',
          rating:3
        },
        {
          id:11,
          mainImageUrl:'./../../../assets/images/audley.png',
          subImageUrl:'./../../../assets/images/audley1.jpeg',
          title:'Nando\'s',
          location:'Stoke-on-Trent',
          description:'Audley is a large village in Staffordshire, England. It is the centre of Audley Rural parish, approximately four miles (6 km) north west of Newcastle under Lyme and 3 miles (5 km) from Alsager near the Staffordshire Cheshire border.',
          reviews:'200',
          rating:3
        },
        {
          id:12,
          mainImageUrl:'./../../../assets/images/audley.png',
          subImageUrl:'./../../../assets/images/audley1.jpeg',
          title:'The Granary Grill',
          location:'Stoke-on-Trent',
          description:'Audley is a large village in Staffordshire, England. It is the centre of Audley Rural parish, approximately four miles (6 km) north west of Newcastle under Lyme and 3 miles (5 km) from Alsager near the Staffordshire Cheshire border.',
          reviews:'200',
          rating:3
        }
      )
      this.title="Restaurant";
    }
    if(this.value=='restaurant'&&this.isSearch=="1"){
      if(this.searchValue=="Woodlands Restaurent"){
        this.post.push(
          {
            id:10,
            mainImageUrl:'./../../../assets/images/audley.png',
            subImageUrl:'./../../../assets/images/audley1.jpeg',
            title:'Woodlands Restaurent',
            location:'Stoke-on-Trent',
            description:'Audley is a large village in Staffordshire, England. It is the centre of Audley Rural parish, approximately four miles (6 km) north west of Newcastle under Lyme and 3 miles (5 km) from Alsager near the Staffordshire Cheshire border.',
            reviews:'200',
            rating:3
          }
        )
      }
      if(this.searchValue=="Nando\'s"){
        this.post.push(
          {
            id:11,
            mainImageUrl:'./../../../assets/images/audley.png',
            subImageUrl:'./../../../assets/images/audley1.jpeg',
            title:'Nando\'s',
            location:'Stoke-on-Trent',
            description:'Audley is a large village in Staffordshire, England. It is the centre of Audley Rural parish, approximately four miles (6 km) north west of Newcastle under Lyme and 3 miles (5 km) from Alsager near the Staffordshire Cheshire border.',
            reviews:'200',
            rating:3
          }
          )
      }
      if(this.searchValue=="The Granary Grill"){
        this.post.push(
          {
            id:12,
            mainImageUrl:'./../../../assets/images/audley.png',
            subImageUrl:'./../../../assets/images/audley1.jpeg',
            title:'The Granary Grill',
            location:'Stoke-on-Trent',
            description:'Audley is a large village in Staffordshire, England. It is the centre of Audley Rural parish, approximately four miles (6 km) north west of Newcastle under Lyme and 3 miles (5 km) from Alsager near the Staffordshire Cheshire border.',
            reviews:'200',
            rating:3
          }
          )
      }
      this.title="Restaurant";
    }
    if(this.value=='events'&&this.isSearch=="0"&&this.searchValue=="forCategory"){
      this.post.push(
        {
          id:13,
          mainImageUrl:'./../../../assets/images/audley.png',
          subImageUrl:'./../../../assets/images/audley1.jpeg',
          title:'Camp Bestival Shropshire',
          location:'Stoke-on-Trent',
          description:'Audley is a large village in Staffordshire, England. It is the centre of Audley Rural parish, approximately four miles (6 km) north west of Newcastle under Lyme and 3 miles (5 km) from Alsager near the Staffordshire Cheshire border.',
          reviews:'200',
          rating:3
        },
        {
          id:14,
          mainImageUrl:'./../../../assets/images/audley.png',
          subImageUrl:'./../../../assets/images/audley1.jpeg',
          title:'Illuminated Arboretum',
          location:'Stoke-on-Trent',
          description:'Audley is a large village in Staffordshire, England. It is the centre of Audley Rural parish, approximately four miles (6 km) north west of Newcastle under Lyme and 3 miles (5 km) from Alsager near the Staffordshire Cheshire border.',
          reviews:'200',
          rating:3
        },
        {
          id:15,
          mainImageUrl:'./../../../assets/images/audley.png',
          subImageUrl:'./../../../assets/images/audley1.jpeg',
          title:'National Forest Walking Festival',
          location:'Stoke-on-Trent',
          description:'Audley is a large village in Staffordshire, England. It is the centre of Audley Rural parish, approximately four miles (6 km) north west of Newcastle under Lyme and 3 miles (5 km) from Alsager near the Staffordshire Cheshire border.',
          reviews:'200',
          rating:3
        }
      )
      this.title="Events";
    }
    if(this.value=='events'&&this.isSearch=="1"){
      if(this.searchValue=="Camp Bestival Shropshire"){
        this.post.push(
          {
            id:13,
            mainImageUrl:'./../../../assets/images/audley.png',
            subImageUrl:'./../../../assets/images/audley1.jpeg',
            title:'Camp Bestival Shropshire',
            location:'Stoke-on-Trent',
            description:'Audley is a large village in Staffordshire, England. It is the centre of Audley Rural parish, approximately four miles (6 km) north west of Newcastle under Lyme and 3 miles (5 km) from Alsager near the Staffordshire Cheshire border.',
            reviews:'200',
            rating:3
          }
        )
      }
      if(this.searchValue=="Illuminated Arboretum"){
        this.post.push(
          {
            id:14,
            mainImageUrl:'./../../../assets/images/audley.png',
            subImageUrl:'./../../../assets/images/audley1.jpeg',
            title:'Illuminated Arboretum',
            location:'Stoke-on-Trent',
            description:'Audley is a large village in Staffordshire, England. It is the centre of Audley Rural parish, approximately four miles (6 km) north west of Newcastle under Lyme and 3 miles (5 km) from Alsager near the Staffordshire Cheshire border.',
            reviews:'200',
            rating:3
          }
        )
      }
      if(this.searchValue=="National Forest Walking Festival"){
        this.post.push(
          {
            id:15,
            mainImageUrl:'./../../../assets/images/audley.png',
            subImageUrl:'./../../../assets/images/audley1.jpeg',
            title:'National Forest Walking Festival',
            location:'Stoke-on-Trent',
            description:'Audley is a large village in Staffordshire, England. It is the centre of Audley Rural parish, approximately four miles (6 km) north west of Newcastle under Lyme and 3 miles (5 km) from Alsager near the Staffordshire Cheshire border.',
            reviews:'200',
            rating:3
          }
        )
      }
      this.title="Events";
    }
    
  }

  navigate(value: any){
    if(!localStorage.getItem("currentUser")&&!localStorage.getItem("admin")){
      localStorage.setItem("place",JSON.stringify(value))
      this.router.navigate(['login']);
    }
    else{
      localStorage.setItem("place",JSON.stringify(value))
      this.router.navigate(['review']);
    }

  }

  navigateView(value:any){
    localStorage.setItem("place",JSON.stringify(value))
    this.router.navigate(['review']);
  }
}
