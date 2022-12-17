import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Recipe } from './recipe.model';

@Injectable()
export class RecipeService {

  constructor( private slService : ShoppingListService){

  }
  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'Simply test',
      'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=768,574',
      [new Ingredient('Meat', 10), new Ingredient('Chicken', 20)]
    ),
    new Recipe(
      'AB Test Recipe',
      'Simply test',
      'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=768,574',
      [new Ingredient('Meat -B', 10), new Ingredient('Chicken-B', 20)]
    ),
    new Recipe(
      'ABC Test Recipe',
      'Simply test',
      'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=768,574',
      [new Ingredient('Meat-c', 10), new Ingredient('Chicken-C', 20)]
    ),
  ];

  getRecipes(): Recipe[] {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients :Ingredient[]) {
this.slService.addIngredients(ingredients)
  }
}
