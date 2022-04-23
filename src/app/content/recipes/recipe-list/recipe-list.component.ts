import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Recipe } from "../../../shared/models/recipe.model";
import { RecipeService } from "../../../shared/services/recipe-service";

@Component({
	selector: 'app-recipe-list',
	templateUrl: './recipe-list.component.html',
	styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit, OnDestroy {
	selectedIndex: number = 0;
	recipes: Recipe[];
	recipeChangedSubscription: Subscription;

	constructor(private recipeService: RecipeService, private router: Router, private route: ActivatedRoute) { }

	ngOnInit(): void {
		this.recipes = this.recipeService.getRecipes();
		this.recipeChangedSubscription = this.recipeService.getRecipeChangedSubject().subscribe(
			() => {
				this.recipes = this.recipeService.getRecipes();
			}
		);
	}

	onNewRecipe() {
		return this.router.navigate(['new'], { relativeTo: this.route });
	}

	ngOnDestroy(): void {
		this.recipeChangedSubscription.unsubscribe();
	}
}
