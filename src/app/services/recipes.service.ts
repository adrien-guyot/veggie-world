import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()

export class RecipesService {

  constructor(private http: Http) { }

  getRecipes() {
    return this.http.get('data/recipes.json') // 1) interroge le fichier recipes
                    .map(res => res.json())   // 2) l'observable push en retour le map du fichier
  }

}
