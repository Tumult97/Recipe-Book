import {Component} from '@angular/core';
import {ShoppingListService} from "../../../shared/services/shopping-list.service";
import {Ingredient} from "../../../shared/models/ingredient.model";
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent {

  constructor(private shoppingListService: ShoppingListService) { }

  onAddIngredient(form: NgForm){
    const value = form.value;
    const newIngredient = new Ingredient(value.name, value.amount, value.type);
    this.shoppingListService.addIngredient(newIngredient);
  }

}
