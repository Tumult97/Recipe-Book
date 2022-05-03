import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ShoppingListService } from 'src/app/shared/services/data/shopping-list.service';
import {Ingredient} from "../../shared/models/ingredient.model";

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Ingredient[];
  private subscription: Subscription;
  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit(): void {
    this.refreshList();
    this.subscription = this.shoppingListService.getIngredientAddedEmitter().subscribe(
      () => this.refreshList()
    );
  }

  refreshList(){
    this.ingredients = this.shoppingListService.getIngredients();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  onEditItem(id: number) {
    this.shoppingListService.emitIngredientSelected(id);
  }
}
