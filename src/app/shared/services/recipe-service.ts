import {Recipe} from "../models/recipe.model";
import {EventEmitter, Injectable} from "@angular/core";
import {ShoppingListService} from "./shopping-list.service";
import {Ingredient} from "../models/ingredient.model";

@Injectable()
export class RecipeService {
  private recipeSelected: EventEmitter<Recipe> = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe(
      'Benis Soup',
      'This is the best soup',
      'https://www.kindpng.com/picc/m/103-1035183_spurdo-benis-clipart-png-download-haha-beniz-transparent.png',
      [
        new Ingredient('Water', 250, 'ml'),
        new Ingredient('Benis', 500, 'g'),
        new Ingredient('Tomato', 2, ''),
        new Ingredient('Meme Extract', 5, 'tsp'),
      ]
    ),
    new Recipe(
      'Benis Burger',
      'This is the best burger',
      'https://i1.sndcdn.com/avatars-000500816757-p0me2f-t240x240.jpg',
      [
        new Ingredient('Buns', 2, ''),
        new Ingredient('Benis-Ground', 500, 'g'),
        new Ingredient('Tomato', 1, ' slice'),
        new Ingredient('Lettuce - shredded', 1, ' handful'),
      ]
    ),
  ];

  constructor(private shoppingListService: ShoppingListService) {}

  getRecipeSelectedEmitter(){
    return this.recipeSelected;
  }

  getRecipes(){
    return this.recipes.slice();
  }

  sendIngredientsToShoppingList(ingredients: Ingredient[]){
    this.shoppingListService.addRecipeIngredients(ingredients);
  }

}
