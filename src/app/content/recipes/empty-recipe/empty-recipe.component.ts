import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { RecipeService } from 'src/app/shared/services/recipe-service';

@Component({
  selector: 'app-empty-recipe',
  templateUrl: './empty-recipe.component.html',
  styleUrls: ['./empty-recipe.component.css']
})
export class EmptyRecipeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
