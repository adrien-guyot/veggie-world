import { Component, OnInit } from '@angular/core';
import { RecipesService } from './../services/recipes.service';

@Component({
  selector: 'app-vw-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {

  recipes = [];
  error = '';

  constructor(private _recipesService: RecipesService) { }

  ngOnInit() {
    this._recipesService.getRecipes()
                        .subscribe(
                        data => this.recipes = data,
                        error => {
                          console.error(error);
                          this.error = error;
                          }
                        )
  }

}
