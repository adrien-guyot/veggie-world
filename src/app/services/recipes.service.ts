import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()

export class RecipesService {

  constructor(private http: Http) { }

  getRecipes() {
    return this.http.get('data/recipes.json')
                    .map(res => res.json())
  }

}
