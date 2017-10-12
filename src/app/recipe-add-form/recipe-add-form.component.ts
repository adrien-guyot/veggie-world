import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';    // c'est grâce au formBuilder que l'on créé les formGroup
import { FormRecipePipe } from './../pipes/form-recipe.pipe';

@Component({
  selector: 'app-vw-recipe-add-form',
  templateUrl: './recipe-add-form.component.html',
  styleUrls: ['./recipe-add-form.component.css']
})
export class RecipeAddFormComponent implements OnInit {

  /*************** REACTIVE FORM ***************/
  recipeForm: FormGroup;

  ingredientsForm: FormGroup;

  ingredientsList = [];

  mealTypes = [
    { id: 1, name: 'Entrée', value: 'starter' },
    { id: 2, name: 'Plat', value: 'main-course' },
    { id: 3, name: 'Dessert', value: 'dessert' },
    { id: 4, name: 'Fromage', value: 'cheese' }
  ];

  diffLevels = [
    { id: 1, name: 'Facile', value: 'easy' },
    { id: 2, name: 'Moyen', value: 'medium' },
    { id: 3, name: 'Difficile', value: 'hard' },
    { id: 3, name: 'Expert', value: 'chief' }
  ];

  ingOptions = [
    { id: 1, name: 'coulis' },
    { id: 2, name: 'jus ' },
    { id: 3, name: 'pulpe' },
    { id: 4, name: 'purée' }
  ];

  ingSpec = [
    { id: 1, name: '3 couleurs' },
    { id: 2, name: 'au blé dur' },
    { id: 3, name: 'blanc(s)' },
    { id: 4, name: 'blanche(s)' },
    { id: 5, name: 'complet(s)' },
    { id: 6, name: 'complète(s)' },
    { id: 7, name: 'confit(es)' },
    { id: 8, name: 'demi complet(s)' },
    { id: 9, name: 'demi complète(s)' },
    { id: 10, name: 'deshydraté(es)' },
    { id: 11, name: 'pelé(es)' },
    { id: 12, name: 'rapé(es)' },
    { id: 13, name: 'seché(es)' }
  ];

  unitsOfMeasure = [
    { id: 1, name: 'milligramme(s)', value: 'mg' },
    { id: 2, name: 'gramme(s)', value: 'g' },
    { id: 3, name: 'kilogramme(s)', value: 'kg' },
    { id: 4, name: 'tasse(s)', value: 'tasse(s)' },
    { id: 5, name: 'millilitre(s)', value: 'ml' },
    { id: 6, name: 'centilitre(s)', value: 'cl' },
    { id: 7, name: 'décilitre(s)', value: 'dl' },
    { id: 8, name: 'litre(s)', value: 'l' },
    { id: 9, name: 'cuillère(s) à café', value: 'cuillère(s) à café' },
    { id: 10, name: 'cuillère(s) à soupe', value: 'cuillère(s) à soupe' }
  ];

  constructor(private formBuilder: FormBuilder) { }  // Injection du formBuilder


  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.recipeForm = this.formBuilder.group({  // <-- Parent FormGroup : Récup de ce que créé le formBuilder ac sa méthode group
      id: -1,
      title: ['', Validators.required],
      publishDate: new Date(),
      mealType: '',
      diffLevel: '',
      prepDurationHour: '',
      prepDurationMin: '',
      cookDurationHour: '',
      cookDurationMin: '',
      standingTimeHour: '',
      standingTimeMin: '',
      servings: '',
      author: '',
      ingredient: this.formBuilder.group({      // <-- Child FormGroup
        quantity: '',
        unit: '',
        option: '',
        name: '',
        spec: '',
      }),
      directions: '',
    });
  }

  createRecipe() {
    console.log(this.recipeForm.value);
  }

  addIngredientToIngredientsList() {
    // for(let i = 1; i <= 4; i++) {
    //   (<FormArray>this.ingredientsForm.get('properties')).push(new FormControl());
    // }
  }

}
