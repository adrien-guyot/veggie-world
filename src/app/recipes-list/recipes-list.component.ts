import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-vw-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {

recipes = [];

  constructor(private http: Http) { }

  ngOnInit() {
    this.http.get('data/recipes.json')
             .map(res => {
               console.log(res.json());
               this.recipes = res.json();
              })
             .subscribe();
  }

}
