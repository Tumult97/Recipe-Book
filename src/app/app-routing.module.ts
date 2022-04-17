import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmptyRecipeComponent } from './content/recipes/empty-recipe/empty-recipe.component';
import { RecipeDetailComponent } from './content/recipes/recipe-detail/recipe-detail.component';
import { RecipesComponent } from './content/recipes/recipes.component';
import { ShoppingListComponent } from './content/shopping-list/shopping-list.component';

const appRoutes: Routes = [
  {path: '', redirectTo: '/recipes', pathMatch: 'full'},  
  {
    path: 'shopping', 
    component: ShoppingListComponent,

  },  
  {
    path: 'recipes', 
    component: RecipesComponent,
    children: [
      {path: '', component: EmptyRecipeComponent},
      {path: ':index', component: RecipeDetailComponent}
    ]
  },  
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}