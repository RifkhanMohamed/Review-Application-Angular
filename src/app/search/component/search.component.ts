import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { map, Observable, startWith } from 'rxjs';
import { Router } from '@angular/router'
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit{
  myControl = new FormControl('');
  options: string[] = 
  ['Alton Towers','Audley','Burslem','Camp Bestival Shropshire','Cannock',
  'Hilton Garden Inn','Illuminated Arboretum','Nando\'s','National Forest Walking Festival',
  'Premier Inn Uttoxeter','Q Studios','SnowDome','The Granary Grill',
  'Trentham Estate','Woodlands Restaurent'];
  filteredOptions: Observable<string[]> | undefined;

  constructor(private router: Router){

  }

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || '')),
    );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }

  navigate(value: any){
    this.router.navigate(['places'],{queryParams:{title:value,forSearch:'0',value:'forCategory'}});
  }

  onChange(value:any){
    if(value=='Audley'||value=='Burslem'||value=='Cannock'){
      this.router.navigate(['places'],{queryParams:{title:'location',forSearch:'1',value:value}})
    }
    else if(value=='Alton Towers'||value=='Trentham Estate'||value=='SnowDome'){
      this.router.navigate(['places'],{queryParams:{title:'attraction',forSearch:'1',value:value}})
    }
    else if(value=='Hilton Garden Inn'||value=='Q Studios'||value=='Premier Inn Uttoxeter'){
      this.router.navigate(['places'],{queryParams:{title:'accomodation',forSearch:'1',value:value}})
    }
    else if(value=='Woodlands Restaurent'||value=='Nando\'s'||value=='The Granary Grill'){
      this.router.navigate(['places'],{queryParams:{title:'restaurant',forSearch:'1',value:value}})
    }    
    else if(value=='Camp Bestival Shropshire'||value=='Illuminated Arboretum'||value=='National Forest Walking Festival'){
      this.router.navigate(['places'],{queryParams:{title:'events',forSearch:'1',value:value}})
    }
  }

}
