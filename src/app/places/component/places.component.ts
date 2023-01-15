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


  constructor(private activatedRoute: ActivatedRoute,private router: Router){

  }
  ngOnInit(): void {
     this.activatedRoute.queryParams.subscribe(params => {
      this.value=params['title'];
    });
    if(this.value=='location'){
      this.post.push(
        {
          mainImageUrl:'./../../../assets/images/audley.png',
          subImageUrl:'./../../../assets/images/audley1.jpeg',
          title:'Audley',
          location:'Stoke-on-Trent',
          description:'Audley is a large village in Staffordshire. It is the centre of Audley Rural parish, approximately four miles north west of Newcastle under Lyme and 3 miles from Alsager near the Staffordshire Cheshire border. It has football and cricket clubs within the village.',
          reviews:'50',
          rating:3
        },
        {
          mainImageUrl:'./../../../assets/images/burslem.jpg',
          subImageUrl:'./../../../assets/images/burslem1.jpeg',
          title:'Burslem',
          location:'Stoke-on-Trent',
          description:'Burslem is on the eastern ridge of the Fowlea Valley, the Fowlea being one of the main early tributaries of the River Trent. Burslem embraces the areas of Middleport, Dalehall, Longport, Westport, Trubshaw Cross, and Brownhills.',
          reviews:'150',
          rating:2
        },
        {
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
    if(this.value=='attraction'){
      this.post.push(
        {
          mainImageUrl:'./../../../assets/images/audley.png',
          subImageUrl:'./../../../assets/images/audley1.jpeg',
          title:'Rifkhan',
          location:'Stoke-on-Trent',
          description:'Audley is a large village in Staffordshire, England. It is the centre of Audley Rural parish, approximately four miles (6 km) north west of Newcastle under Lyme and 3 miles (5 km) from Alsager near the Staffordshire Cheshire border.',
          reviews:'200',
          rating:3
        },
        {
          mainImageUrl:'./../../../assets/images/audley.png',
          subImageUrl:'./../../../assets/images/audley1.jpeg',
          title:'Audley',
          location:'Stoke-on-Trent',
          description:'Audley is a large village in Staffordshire, England. It is the centre of Audley Rural parish, approximately four miles (6 km) north west of Newcastle under Lyme and 3 miles (5 km) from Alsager near the Staffordshire Cheshire border.',
          reviews:'200',
          rating:3
        },
        {
          mainImageUrl:'./../../../assets/images/audley.png',
          subImageUrl:'./../../../assets/images/audley1.jpeg',
          title:'Audley',
          location:'Stoke-on-Trent',
          description:'Audley is a large village in Staffordshire, England. It is the centre of Audley Rural parish, approximately four miles (6 km) north west of Newcastle under Lyme and 3 miles (5 km) from Alsager near the Staffordshire Cheshire border.',
          reviews:'200',
          rating:3
        }
      )
      this.title="Attractions";
    }
    if(this.value=='accomodation'){
      this.post.push(
        {
          mainImageUrl:'./../../../assets/images/audley.png',
          subImageUrl:'./../../../assets/images/audley1.jpeg',
          title:'Rifkhan',
          location:'Stoke-on-Trent',
          description:'Audley is a large village in Staffordshire, England. It is the centre of Audley Rural parish, approximately four miles (6 km) north west of Newcastle under Lyme and 3 miles (5 km) from Alsager near the Staffordshire Cheshire border.',
          reviews:'200',
          rating:3
        },
        {
          mainImageUrl:'./../../../assets/images/audley.png',
          subImageUrl:'./../../../assets/images/audley1.jpeg',
          title:'Audley',
          location:'Stoke-on-Trent',
          description:'Audley is a large village in Staffordshire, England. It is the centre of Audley Rural parish, approximately four miles (6 km) north west of Newcastle under Lyme and 3 miles (5 km) from Alsager near the Staffordshire Cheshire border.',
          reviews:'200',
          rating:3
        },
        {
          mainImageUrl:'./../../../assets/images/audley.png',
          subImageUrl:'./../../../assets/images/audley1.jpeg',
          title:'Audley',
          location:'Stoke-on-Trent',
          description:'Audley is a large village in Staffordshire, England. It is the centre of Audley Rural parish, approximately four miles (6 km) north west of Newcastle under Lyme and 3 miles (5 km) from Alsager near the Staffordshire Cheshire border.',
          reviews:'200',
          rating:3
        }
      )
      this.title="Accomodation";
    }
    if(this.value=='restaurant'){
      this.post.push(
        {
          mainImageUrl:'./../../../assets/images/audley.png',
          subImageUrl:'./../../../assets/images/audley1.jpeg',
          title:'Rifkhan',
          location:'Stoke-on-Trent',
          description:'Audley is a large village in Staffordshire, England. It is the centre of Audley Rural parish, approximately four miles (6 km) north west of Newcastle under Lyme and 3 miles (5 km) from Alsager near the Staffordshire Cheshire border.',
          reviews:'200',
          rating:3
        },
        {
          mainImageUrl:'./../../../assets/images/audley.png',
          subImageUrl:'./../../../assets/images/audley1.jpeg',
          title:'Audley',
          location:'Stoke-on-Trent',
          description:'Audley is a large village in Staffordshire, England. It is the centre of Audley Rural parish, approximately four miles (6 km) north west of Newcastle under Lyme and 3 miles (5 km) from Alsager near the Staffordshire Cheshire border.',
          reviews:'200',
          rating:3
        },
        {
          mainImageUrl:'./../../../assets/images/audley.png',
          subImageUrl:'./../../../assets/images/audley1.jpeg',
          title:'Audley',
          location:'Stoke-on-Trent',
          description:'Audley is a large village in Staffordshire, England. It is the centre of Audley Rural parish, approximately four miles (6 km) north west of Newcastle under Lyme and 3 miles (5 km) from Alsager near the Staffordshire Cheshire border.',
          reviews:'200',
          rating:3
        }
      )
      this.title="Restaurant";
    }
    if(this.value=='events'){
      this.post.push(
        {
          mainImageUrl:'./../../../assets/images/audley.png',
          subImageUrl:'./../../../assets/images/audley1.jpeg',
          title:'Rifkhan',
          location:'Stoke-on-Trent',
          description:'Audley is a large village in Staffordshire, England. It is the centre of Audley Rural parish, approximately four miles (6 km) north west of Newcastle under Lyme and 3 miles (5 km) from Alsager near the Staffordshire Cheshire border.',
          reviews:'200',
          rating:3
        },
        {
          mainImageUrl:'./../../../assets/images/audley.png',
          subImageUrl:'./../../../assets/images/audley1.jpeg',
          title:'Audley',
          location:'Stoke-on-Trent',
          description:'Audley is a large village in Staffordshire, England. It is the centre of Audley Rural parish, approximately four miles (6 km) north west of Newcastle under Lyme and 3 miles (5 km) from Alsager near the Staffordshire Cheshire border.',
          reviews:'200',
          rating:3
        },
        {
          mainImageUrl:'./../../../assets/images/audley.png',
          subImageUrl:'./../../../assets/images/audley1.jpeg',
          title:'Audley',
          location:'Stoke-on-Trent',
          description:'Audley is a large village in Staffordshire, England. It is the centre of Audley Rural parish, approximately four miles (6 km) north west of Newcastle under Lyme and 3 miles (5 km) from Alsager near the Staffordshire Cheshire border.',
          reviews:'200',
          rating:3
        }
      )
      this.title="Events";
    }
    
  }

  navigate(value: any){
    console.log(value);
    
    this.router.navigate(['login'],{queryParams:{data:value}});
  }
}
