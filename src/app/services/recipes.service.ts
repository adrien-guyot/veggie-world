import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Subject } from 'rxjs/Rx';  // Subject est à la fois un observable et un observer dc capable de pousser de nouvelles données

@Injectable()

export class RecipesService {

recipes = [];
recipesSubject = new Subject;

  constructor(private http: Http) { }

  getRecipes() {
    return this.http.get('data/recipes.json') // 1) interroge le fichier recipes
                    .map(res => res.json());  // 2) l'observable push en retour le map du fichier
  }

  addRecipe(recipeData){
    recipeData.id = Date.now();
    return this.recipesSubject.next(recipeData);
  }

}
