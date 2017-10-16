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
import { PublishDatePipe } from './pipes/publish-date.pipe';
import { RecipeDetailsComponent } from './recipe-details/recipe-details.component';
import { NotFoundComponent } from './not-found/not-found.component';


const routes = [
  {path: '', component: HomeComponent },
  {path: 'recettes/vegetariennes', component: RecipesListComponent },
  {path: 'recettes/vegan', component: RecipesListComponent },
  {path: 'proposer-une-recette', component: RecipeAddFormComponent },
  {path: 'recettes/:id', component: RecipeDetailsComponent },
  {path: '404', component: NotFoundComponent},
  {path: '**', redirectTo: '/404'}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RecipesListComponent,
    SearchComponent,
    RecipeAddFormComponent,
    FormRecipePipe,
    PublishDatePipe,
    RecipeDetailsComponent,
    NotFoundComponent
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
