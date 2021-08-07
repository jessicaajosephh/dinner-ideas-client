class Recipe {

    constructor(id, title, ingredients, prep_time, cook_time, directions, likes, comments){
        this.id = id
        this.title = title
        this.ingredients = ingredients 
        this.prep_time = prep_time
        this.cook_time = cook_time 
        this.directions = directions 
        this.likes = likes
        this.comments = [...comments]
    }

    static fetchRecipes(){
        fetch("http://localhost:3000/recipes")
        .then(resp => resp.json())
        .then(json => Recipe.renderRecipes(json))
    }

    static renderRecipes(recipeInfo){
        recipeInfo.forEach(recipe => {
            
        })
    }

}