import {Component, OnInit} from '@angular/core';
import { ActivatedRoute, Data, Params, Router } from '@angular/router';
import { reduce } from 'rxjs';
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

  constructor(private recipeService: RecipeService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.index = this.route.snapshot.params['index'];
    this.recipe = this.recipeService.getRecipe(this.index);
    if(this.recipe == undefined){
      this.router.navigate(['']);
      return;
    }
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

  onEditRecipe(){
    this.router.navigate(['edit'], {relativeTo: this.route});
    // this.router.navigate(['../', this.index, 'edit'], {relativeTo: this.route});
  }
}


