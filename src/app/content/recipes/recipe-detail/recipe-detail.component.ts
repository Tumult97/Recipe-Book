import {Component, OnInit} from '@angular/core';
import { ActivatedRoute, Data, Params } from '@angular/router';
import {Recipe} from "../../../shared/models/recipe.model";
import {RecipeService} from "../../../shared/services/recipe-service";

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe;
  index: number;

  constructor(private recipeService: RecipeService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.index = this.route.snapshot.params['index'];
    this.recipe = this.recipeService.getRecipe(this.index);
    this.route.params.subscribe(
      (params: Params) => {
        this.index = +params['index'];
        this.recipe = this.recipeService.getRecipe(this.index);
      }
    );
  }

  sendIngredientsToShoppingList(){
    this.recipeService.sendIngredientsToShoppingList(this.recipe.ingredients);
  }
}


