import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Ingredient } from 'src/app/shared/models/ingredient.model';
import { Recipe } from 'src/app/shared/models/recipe.model';
import { RecipeService } from 'src/app/shared/services/recipe-service';

@Component({
	selector: 'app-recipe-edit',
	templateUrl: './recipe-edit.component.html',
	styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
	id: number;
	editMode: boolean = false;
	recipeForm: FormGroup;

	constructor(private recipeService: RecipeService, private route: ActivatedRoute, private router: Router) { }

	ngOnInit() {
		this.route.params.subscribe(
			(params: Params) => {
				this.id = +params['index'];
				this.editMode = params['index'] != null;
				this.initForm();
			}
		);
	}

	initForm() {
		let recipeName = '';
		let recipeImagePath = '';
		let recipeDescription = '';
		let recipeIngredients = new FormArray([]);

		if(this.editMode){
			const recipe = this.recipeService.getRecipe(this.id);
			recipeName = recipe.name;
			recipeImagePath = recipe.imagePath;
			recipeDescription = recipe.description;
			if(recipe.ingredients){
				recipe.ingredients.forEach(ingredient => {
					recipeIngredients.push(new FormGroup({
						'name': new FormControl(ingredient.name, Validators.required),
						'amount': new FormControl(ingredient.amount, [Validators.required, Validators.pattern(/^[0-9]+[0-9]*$/)]),
						'type': new FormControl(ingredient.type)
					}));
				});
			}
		}

		this.recipeForm = new FormGroup({
			'name': new FormControl(recipeName, Validators.required),
			'imagePath': new FormControl(recipeImagePath, Validators.required),
			'description': new FormControl(recipeDescription),
			'ingredients': recipeIngredients
		});
	}

	onSubmit(){

		//teh value is setup exactly like the saved recipe model
		//can sub in instead of const 
		const recipe: Recipe  = this.recipeForm.value;

		if(this.editMode)
			this.recipeService.updateRecipe(this.id, recipe);
		else
			this.recipeService.addRecipe(recipe);

		this.navigateBackToDetails();
	}

	onAddIngredient(){
		(<FormArray>this.recipeForm.get('ingredients')).push(new FormGroup({
			'name': new FormControl(null, Validators.required),
			'amount': new FormControl(null, [Validators.required, Validators.pattern(/^[0-9]+[0-9]*$/)]),
			'type': new FormControl(null)
		}));
	}

	onDeleteIngredient(index: number){
		(<FormArray>this.recipeForm.get('ingredients')).removeAt(index);
	}

	navigateBackToDetails(){
		this.router.navigate(['../'], {relativeTo: this.route});
	}

	get controls() { // a getter!
		return (<FormArray>this.recipeForm.get('ingredients')).controls;
	}
}
