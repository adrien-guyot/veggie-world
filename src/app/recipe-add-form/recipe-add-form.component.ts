import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';    // c'est grâce au formBuilder que l'on créé les formGroup
import { FormRecipePipe } from './../pipes/form-recipe.pipe';

@Component({
  selector: 'app-vw-recipe-add-form',
  templateUrl: './recipe-add-form.component.html',
  styleUrls: ['./recipe-add-form.component.css']
})
export class RecipeAddFormComponent implements OnInit {

  /*************** REACTIVE FORM ***************/
  form: FormGroup;

  ingredientsForm: FormGroup;

  ingredientsList = [];

  mealTypes = [
    {id: 1, name: 'Entrée', value: 'starter'},
    {id: 2, name: 'Plat', value: 'main-course'},
    {id: 3, name: 'Dessert', value: 'dessert'},
    {id: 4, name: 'Fromage', value: 'cheese'}
  ];

  diffLevels = [
    {id: 1, name: 'Facile', value: 'easy'},
    {id: 2, name: 'Moyen', value: 'medium'},
    {id: 3, name: 'Difficile', value: 'hard'},
    {id: 3, name: 'Expert', value: 'chief'}
  ];

  constructor(private formBuilder: FormBuilder) { }  // Injection du formBuilder

  ngOnInit() {
    this.form = this.formBuilder.group({             // Récupération de ce que créé le formBuilder à l'aide de sa méthode group
      id: -1,
      title: '',
      publishdate: new Date(),
      mealType: '',
      diffLevel: '',
      prepdurationhour: '',
      prepdurationmin: '',
      cookdurationhour: '',
      cookdurationmin: '',
      standindTimehour: '',
      standindTimenmin: '',
      servings: '',
      author: '',
      ingredients: '',
      directions: '',
    });
  }

  createRecipe(){
    console.log(this.form.value);
  }

  // onAddProperty() {
  //   for(let i = 1; i <= 4; i++) {
  //     (<FormArray>this.ingredientsForm.get('properties')).push(new FormControl());
  //   }
  // }

}
