import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vw-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    let w = window;
    let d = document;
    let e = d.documentElement;
    let g = d.getElementsByTagName('body')[0];
    let x = w.innerWidth || e.clientWidth || g.clientWidth;
    let y = w.innerHeight|| e.clientHeight|| g.clientHeight;
    
  }

  searchRecipe(){

  }

}
