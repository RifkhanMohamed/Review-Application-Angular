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
    this.router.navigate(['places'],{queryParams:{title:value}});
  }

}
