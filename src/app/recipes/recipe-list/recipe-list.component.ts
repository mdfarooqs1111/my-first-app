import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';


@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  

  recipes : Recipe[] ;

  constructor(private recipeServie:RecipeService) { }

  ngOnInit(): void {
    this.recipes = this.recipeServie.getRecipes();
  }


}
