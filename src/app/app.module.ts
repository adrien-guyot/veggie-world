import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing/app-routing.module';

import { RecipesService } from './services/recipes.service';

import { FormRecipePipe } from './pipes/form-recipe.pipe';
import { PublishDatePipe } from './pipes/publish-date.pipe';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RecipesListComponent } from './recipes-list/recipes-list.component';
import { SearchComponent } from './search/search.component';
import { RecipeAddFormComponent } from './recipe-add-form/recipe-add-form.component';
import { RecipeDetailsComponent } from './recipe-details/recipe-details.component';
import { NotFoundComponent } from './not-found/not-found.component';

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
    AppRoutingModule
  ],
  providers: [RecipesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
