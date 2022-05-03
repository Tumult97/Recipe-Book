import {Ingredient} from "../models/ingredient.model";
import { Subject } from "rxjs";

export class ShoppingListService{
  private ingredientsChangedEmitter: Subject<void> = new Subject<void>();
  private ingredientSelected: Subject<number> = new Subject<number>();
  private shoppingList: Ingredient[] = [
    new Ingredient('Cultured benis',2),
    new Ingredient('Yeeted Tomato',6),
    new Ingredient('Scrupper Lake Extract',7, 'ml'),
  ];

  getIngredients(){
    return this.shoppingList.slice();
  }

  getIngredient(index: number){
    return this.shoppingList.slice()[index];
  }

  addIngredient(ingredient: Ingredient){
    this.shoppingList.push(ingredient);
    this.ingredientsChangedEmitter.next();
  }

  editIngredient(index: number, ingredient: Ingredient){
    this.shoppingList[index] = ingredient;
    this.ingredientsChangedEmitter.next();
  }

  deleteIngredient(index: number){
    this.shoppingList.splice(index, 1);
    this.ingredientsChangedEmitter.next();
  }

  addIngredientList(ingredients: Ingredient[]){
    this.shoppingList = this.shoppingList.concat(ingredients);
  }

  addRecipeIngredients(ingredients: Ingredient[]){
    this.shoppingList.push(...ingredients);
    this.ingredientsChangedEmitter.next();
  }

  getIngredientAddedEmitter(){
    return this.ingredientsChangedEmitter;
  }

  emitIngredientAdded(){
    this.ingredientsChangedEmitter.next();
  }

  getIngredientSelectedEmitter(){
    return this.ingredientSelected;
  }

  emitIngredientSelected(id: number){
    this.ingredientSelected.next(id);
  }
}
