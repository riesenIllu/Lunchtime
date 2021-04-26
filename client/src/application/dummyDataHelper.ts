function randomNumber(min, max){
    return Math.min((Math.random() * max) + min,max);
}

function randomName(){
    var names = ["Pizza", "Döner", "DönerPizza", "Salat", "PizzaSalat", "DönerSalat", "Chicken Chicken", "Chicken Attaaaack", "Ramen", "RamenPizza"]
    return names[Math.floor(randomNumber(0,9))];
}

function randomIngredient(){
    var ingredients = ["breadcrumbs","ginger","white chocolate","ricotta cheese", "okra", "tomato sauce", "honey", "pig's feet", "avocados", "mussels", "seagulls"]
    return ingredients[Math.floor(randomNumber(0,10))];
}

function randomIngredients(count){
    var result: any = [];
    for (let i = 0; i < count; i++) {
        result[i] = randomIngredient();
    }
    return result;
}

function randomType(){
    return Math.floor(randomNumber(0,3));
}

export function createDishes() {
    var dishes: {}[] = [];
    for (let i = 0; i < 100; i++) {
        dishes[i] = {
            id: i,
            name: randomName(),
            price: randomNumber(3,25).toFixed(2),
            type: randomType(),
            indgredients: randomIngredients(randomNumber(2,7))
        }
    }

    return dishes;
}