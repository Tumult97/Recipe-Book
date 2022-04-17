import {Component, Input, OnInit} from '@angular/core';
import {Recipe} from "../../../shared/models/recipe.model";
import {RecipeService} from "../../../shared/services/recipe-service";

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipe: Recipe;

  constructor(private recipeService: RecipeService) { }

  ngOnInit(): void {
  }

  sendIngredientsToShoppingList(){
    this.recipeService.sendIngredientsToShoppingList(this.recipe.ingredients);
  }
}


