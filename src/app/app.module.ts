import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { HeaderComponent } from './content/shared/header/header.component';

import { RecipesComponent } from './content/recipes/recipes.component';
import { RecipeListComponent } from './content/recipes/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './content/recipes/recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './content/recipes/recipe-item/recipe-item.component';

import { ShoppingListComponent } from './content/shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './content/shopping-list/shopping-edit/shopping-edit.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { DropdownDirective } from './shared/directives/dropdown.directive';
import {ShoppingListService} from "./shared/services/shopping-list.service";
import { AppRoutingModule } from './app-routing.module';
import { EmptyRecipeComponent } from './content/recipes/empty-recipe/empty-recipe.component';
import { RecipeEditComponent } from './content/recipes/recipe-edit/recipe-edit.component';
import { RecipeService } from './shared/services/recipe-service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    DropdownDirective,
    EmptyRecipeComponent,
    RecipeEditComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [ShoppingListService, RecipeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
