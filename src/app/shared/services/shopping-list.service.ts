import {Ingredient} from "../models/ingredient.model";
import { Subject } from "rxjs";

export class ShoppingListService{
  private ingredientAddedEmitter: Subject<void> = new Subject<void>();
  private shoppingList: Ingredient[] = [
    new Ingredient('Cultured benis',2),
    new Ingredient('Yeeted Tomato',6),
    new Ingredient('Scrupper Lake Extract',7, 'ml'),
  ];

  getIngredients(){
    return this.shoppingList.slice();
  }

  addIngredient(ingredient: Ingredient){
    this.shoppingList.push(ingredient);
    this.ingredientAddedEmitter.next();
  }

  addIngredientList(ingredients: Ingredient[]){
    this.shoppingList = this.shoppingList.concat(ingredients);
  }

  addRecipeIngredients(ingredients: Ingredient[]){
    this.shoppingList.push(...ingredients);
    this.ingredientAddedEmitter.next();
  }

  getIngredientAddedEmitter(){
    return this.ingredientAddedEmitter;
  }

  emitIngredientAdded(){
    this.ingredientAddedEmitter.next();
  }
}
