import { EventEmitter } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";

export class ShoppingListService{
    ingredientsChanged = new EventEmitter<Ingredient []>();
    ingredients: Ingredient[] = [
        new Ingredient('Tomotos',10),
        new Ingredient('Apple',100)
      ]; 

    getIngredients() {
        return this.ingredients.slice();
    }

    addIngredient(ingredient : Ingredient) {
        this.ingredients.push(ingredient);
        this.ingredientsChanged.emit(this.ingredients.slice())
    }

    addIngredients(ingredient : Ingredient[]) {
        this.ingredients.push(...ingredient);
        this.ingredientsChanged.emit(this.ingredients.slice())
    }
} 