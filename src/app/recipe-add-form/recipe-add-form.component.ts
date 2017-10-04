import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';    // c'est grâce au formBuilder que l'on créé les formGroup

@Component({
  selector: 'app-vw-recipe-add-form',
  templateUrl: './recipe-add-form.component.html',
  styleUrls: ['./recipe-add-form.component.css']
})
export class RecipeAddFormComponent implements OnInit {

  /*************** REACTIVE FORM ***************/
  form: FormGroup;

  constructor(private formBuilder: FormBuilder) { }  // Injection du formBuilder

  ngOnInit() {
    this.form = this.formBuilder.group({             // Récupération de ce que créé le formBuilder à l'aide de sa méthode group
      id: -1,
      title: '',
      publishdate: new Date(),
      mealType: '',
      prepduration: '',
      cookduration: '',
      servings: '',
      author: '',
      ingredients: '',
      directions: '',
      rating: ''
    });
  }



}
