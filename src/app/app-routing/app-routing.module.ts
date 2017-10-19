import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './../home/home.component';
import { RecipesListComponent } from './../recipes-list/recipes-list.component';
import { SearchComponent } from './../search/search.component';
import { RecipeAddFormComponent } from './../recipe-add-form/recipe-add-form.component';
import { RecipeDetailsComponent } from './../recipe-details/recipe-details.component';
import { NotFoundComponent } from './../not-found/not-found.component';

// pathBg pour changer le background et slideMode pour savoir
// si la div parent doit occuper la totalité de la hauteur de la fenêtre
const routes = [
  {
    path: '', component: HomeComponent,
    data: { pathBg: '/assets/images/background.png', slideMode: true }
  },
  { path: 'rechercher', redirectTo: '' },
  {
    path: 'recettes/vegetariennes', component: RecipesListComponent,
    data: { pathBg: '/assets/images/background.png', slideMode: false }
  },
  {
    path: 'recettes/vegan', component: RecipesListComponent,
    data: { pathBg: '/assets/images/background.png', slideMode: false }
  },
  {
    path: 'proposer-une-recette', component: RecipeAddFormComponent,
    data: { pathBg: '/assets/images/background - recipe-form.png', slideMode: false }
  },
  {
    path: 'recettes/:id', component: RecipeDetailsComponent,
    data: { pathBg: '/assets/images/background.png', slideMode: false }
  },
  {
    path: '404', component: NotFoundComponent,
    data: { pathBg: '/assets/images/404.jpg', slideMode: true }
  },
  { path: '**', redirectTo: '/404' }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
