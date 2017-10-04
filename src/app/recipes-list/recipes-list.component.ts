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

  constructor(private _recipesService: RecipesService) { }  // injection du service Recipes

  ngOnInit() {
    this._recipesService.getRecipes()                  // appel de la méthode de l'observable getRecipes
                        .subscribe(                    // l'observer s'abonne à l'observable et attend le push de données
                        data => this.recipes = data,   // 1) success
                        error => {                     // 2) error
                          console.error(error);
                          this.error = error;
                                                       // 3) complete : cet état n'est pas indiqué ici car on est toujours à l'écoute
                          }
                        )
  }

}
