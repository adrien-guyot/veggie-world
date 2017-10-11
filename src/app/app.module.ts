import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';  
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { RecipesService } from './services/recipes.service';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RecipesListComponent } from './recipes-list/recipes-list.component';
import { SearchComponent } from './search/search.component';
import { RecipeAddFormComponent } from './recipe-add-form/recipe-add-form.component';
import { FormRecipePipe } from './pipes/form-recipe.pipe';


const routes = [
  {path: '', component: HomeComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RecipesListComponent,
    SearchComponent,
    RecipeAddFormComponent,
    FormRecipePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [RecipesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
