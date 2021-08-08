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
            let div = document.createEelement("div")
            let h2 = document.createElement("h2")
            let p = document.createElement("p")
            let h4 = document.createElement("h4")
            let h4 = document.createElement("h4")
            let p = document.createElement("p")
            let likeButton = document.createElement("button")

            div.id = recipe.id 
            h2.innerText = recipe.title 
            p.innerText = recipe.ingredients 
            h4.innerText = recipe.prep_time 
            h4.innerText = recipe.cook_time 
            p.innerText = recipe.directions
            likeButton.innerText = "♥"
        })
    }

}