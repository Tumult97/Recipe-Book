import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {ShoppingListService} from "../../../shared/services/shopping-list.service";
import {Ingredient} from "../../../shared/models/ingredient.model";
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { ThisReceiver } from '@angular/compiler';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  @ViewChild('f', {static: false}) shoppingListForm: NgForm;
  ingredientSelectedSub: Subscription;
  editMode = false;
  editedIndex: number;
  editedItem: Ingredient;
  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
    this.ingredientSelectedSub = this.shoppingListService.getIngredientSelectedEmitter().subscribe(
      (index: number) => {
        this.editedIndex = index;
        this.editMode = true;
        this.editedItem = this.shoppingListService.getIngredient(index);
        this.shoppingListForm.setValue({
          'name': this.editedItem.name,
          'amount': this.editedItem.amount,
          'type': this.editedItem.type ? this.editedItem.type : ''
        });
      }
    );
  }

  onSubmit(form: NgForm){
    const value = form.value;
    const newIngredient = new Ingredient(value.name, value.amount, value.type);

    if(this.editMode) 
      this.shoppingListService.editIngredient(this.editedIndex, newIngredient);
    else
      this.shoppingListService.addIngredient(newIngredient);

    this.clearForm();
  }

  clearForm(){
    this.editMode = false;
    this.editedIndex = null;
    this.editedItem = null;
    this.shoppingListForm.reset();
  }

  deleteItem(){
    this.shoppingListService.deleteIngredient(this.editedIndex);
    this.clearForm();
  }

  ngOnDestroy(): void {
    this.ingredientSelectedSub.unsubscribe();
  }
}
