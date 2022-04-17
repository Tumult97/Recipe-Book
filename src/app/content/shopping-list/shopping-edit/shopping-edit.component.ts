import {Component, ElementRef, ViewChild} from '@angular/core';
import {ShoppingListService} from "../../../shared/services/shopping-list.service";
import {Ingredient} from "../../../shared/models/ingredient.model";

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent {
  @ViewChild('nameInput', {static: true}) nameInput: ElementRef;
  @ViewChild('amountInput', {static: true}) amountInput: ElementRef;
  @ViewChild('typeInput', {static: true}) typeInput: ElementRef;

  constructor(private shoppingListService: ShoppingListService) { }

  onAddIngredient(){
    this.shoppingListService.addIngredient(new Ingredient(this.nameInput.nativeElement.value,this.amountInput.nativeElement.value,this.typeInput.nativeElement.value));
    this.clearInputs();
  }

  clearInputs(){
    this.nameInput.nativeElement.value = '';
    this.amountInput.nativeElement.value = '';
    this.typeInput.nativeElement.value = '';
  }

}
