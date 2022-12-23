import { Component, Input } from '@angular/core';
import { cardData } from "./../model/card-model";

@Component({
  selector: 'app-places',
  templateUrl: './places.component.html',
  styleUrls: ['./places.component.css']
})
export class PlacesComponent {
 post: cardData[]=[
  {
    mainImageUrl:'./../../../assets/images/audley.png',
    subImageUrl:'./../../../assets/images/audley1.jpeg',
    title:'Audley',
    location:'Stoke-on-Trent',
    description:'Audley is a large village in Staffordshire, England. It is the centre of Audley Rural parish, approximately four miles (6 km) north west of Newcastle under Lyme and 3 miles (5 km) from Alsager near the Staffordshire Cheshire border.',
    reviews:'200'
  }
 ];


}
