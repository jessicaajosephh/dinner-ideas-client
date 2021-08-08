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
            let recipeComments = recipe.comments.map(comment => {
                let li = document.createElement("div")
                let div = document.createElement("div")
                let commentContent = document.createElement("p")
                let commentLikes = document.createElement("p")
                let likeButton = document.createElement("button")
                commentContent.innerText = comment.content 
                commentLikes.innerText = comment.likes
                likeButton.innerText = "♥"
                div.appendChild(commentContent)
                div.appendChild(commentLikes)
                div.appendChild(likeButton)
                li.appendChild(div)
                return li 
            })

            div.id = recipe.id 
            h2.innerText = recipe.title 
            p.innerText = recipe.ingredients 
            h4.innerText = recipe.prep_time 
            h4.innerText = recipe.cook_time 
            p.innerText = recipe.directions
            likeButton.innerText = "♥"
            likeButton.addEventListener("click", likeRecipe.bind(recipe))

        })
    }

}