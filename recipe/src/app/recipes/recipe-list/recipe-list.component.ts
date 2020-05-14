import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Recipe 1', 'This is only a test.', 'https://cafedelites.com/wp-content/uploads/2019/01/Cajun-Butter-Steak-Bites-Recipe-IMAGE-20.jpg'), new Recipe('Recipe 2', 'This is a test', 'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2018/10/22/0/FNK_INSTANT-POT-FUNFETTI-CAKE-H-s4x3.jpg.rend.hgtvcom.826.620.suffix/1540214000551.jpeg')
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
