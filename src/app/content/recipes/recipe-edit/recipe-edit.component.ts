import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
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

	constructor(private recipeService: RecipeService, private route: ActivatedRoute) { }

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
						'name': new FormControl(ingredient.name),
						'amount': new FormControl(ingredient.amount),
						'type': new FormControl(ingredient.type)
					}));
				});
			}
		}

		this.recipeForm = new FormGroup({
			'name': new FormControl(recipeName),
			'imagePath': new FormControl(recipeImagePath),
			'description': new FormControl(recipeDescription),
			'ingredients': recipeIngredients
		});
	}

	onSubmit(){
		console.log(this.recipeForm);
	}

	onAddIngredient(){
		(<FormArray>this.recipeForm.get('ingredients')).push(new FormGroup({
			'name': new FormControl(),
			'amount': new FormControl(),
			'type': new FormControl()
		}));
	}

	get controls() { // a getter!
		return (<FormArray>this.recipeForm.get('ingredients')).controls;
	}
}
