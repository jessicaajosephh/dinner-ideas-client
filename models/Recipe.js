class Recipe {

    constructor(id, title, ingredients, prep_time, cook_time, directions, likes, comments){
        this.id = id
        this.title = title
        this.ingredients = ingredients 
        this.prep_time = prep_time
        this.cook_time = cook_time 
        this.directions = directions 
        this.likes = likes
        this.comment = [...comments]
    }
}