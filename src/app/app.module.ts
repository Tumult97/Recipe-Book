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
import {FormsModule} from "@angular/forms";
import { DropdownDirective } from './shared/directives/dropdown.directive';
import {ShoppingListService} from "./shared/services/shopping-list.service";

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
    DropdownDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [ShoppingListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
