import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A test recipe', 'This is simply a test', 'https://get.pxhere.com/photo/dish-meal-food-salad-green-red-produce-vegetable-plate-recipe-eat-lunch-cuisine-cheese-cook-nutrition-tomatoes-olives-frisch-kohlrabi-hunger-au-gratin-gratin-1323649.jpg'),
    new Recipe('A test recipe', 'This is simply a test', 'https://get.pxhere.com/photo/dish-meal-food-salad-green-red-produce-vegetable-plate-recipe-eat-lunch-cuisine-cheese-cook-nutrition-tomatoes-olives-frisch-kohlrabi-hunger-au-gratin-gratin-1323649.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
