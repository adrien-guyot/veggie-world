export class Recipe {
    id = 0;
    title = '';
    publishDate = '';
    mealType = '';
    diffLevel = '';
    prepDurationHour = '';
    prepDurationMin = '';
    cookDurationHour = '';
    cookDurationMin = '';
    standingTimeHour = '';
    standingTimeMin = '';
    servings = '';
    author = '';
    ingredients: Ingredient[];
    directions = '';
}

export class Ingredient {
    quantity = '';
    unit = '';
    option = '';
    name = '';
    spec = '';
}

