import { Component, Input, OnInit } from '@angular/core';
import { cardData } from "./../model/card-model";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-places',
  templateUrl: './places.component.html',
  styleUrls: ['./places.component.css']
})
export class PlacesComponent implements OnInit{
  value: string | null | undefined;
  post: cardData[]=[];
  title="";
  constructor(private activatedRoute: ActivatedRoute){}
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
          description:'Audley is a large village in Staffordshire, England. It is the centre of Audley Rural parish, approximately four miles (6 km) north west of Newcastle under Lyme and 3 miles (5 km) from Alsager near the Staffordshire Cheshire border.',
          reviews:'200'
        },
        {
          mainImageUrl:'./../../../assets/images/burslem.jpeg',
          subImageUrl:'./../../../assets/images/burslem1.jpeg',
          title:'Burslem',
          location:'Stoke-on-Trent',
          description:'Burslem is on the eastern ridge of the Fowlea Valley, the Fowlea being one of the main early tributaries of the River Trent. Burslem embraces the areas of Middleport, Dalehall, Longport, Westport, Trubshaw Cross, and Brownhills.',
          reviews:'200'
        },
        {
          mainImageUrl:'./../../../assets/images/audley.png',
          subImageUrl:'./../../../assets/images/audley1.jpeg',
          title:'Audley',
          location:'Stoke-on-Trent',
          description:'Audley is a large village in Staffordshire, England. It is the centre of Audley Rural parish, approximately four miles (6 km) north west of Newcastle under Lyme and 3 miles (5 km) from Alsager near the Staffordshire Cheshire border.',
          reviews:'200'
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
          reviews:'200'
        },
        {
          mainImageUrl:'./../../../assets/images/audley.png',
          subImageUrl:'./../../../assets/images/audley1.jpeg',
          title:'Audley',
          location:'Stoke-on-Trent',
          description:'Audley is a large village in Staffordshire, England. It is the centre of Audley Rural parish, approximately four miles (6 km) north west of Newcastle under Lyme and 3 miles (5 km) from Alsager near the Staffordshire Cheshire border.',
          reviews:'200'
        },
        {
          mainImageUrl:'./../../../assets/images/audley.png',
          subImageUrl:'./../../../assets/images/audley1.jpeg',
          title:'Audley',
          location:'Stoke-on-Trent',
          description:'Audley is a large village in Staffordshire, England. It is the centre of Audley Rural parish, approximately four miles (6 km) north west of Newcastle under Lyme and 3 miles (5 km) from Alsager near the Staffordshire Cheshire border.',
          reviews:'200'
        }
      )
      this.title="Attractions";
    }
    
  }
}
