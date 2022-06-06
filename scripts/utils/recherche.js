function research(){
    const inputResearch = document.querySelector("#research")
    const buttonResearch = document.querySelector(".fa-magnifying-glass")
    buttonResearch.addEventListener("click",(e)=>{
        e.preventDefault();
        console.log(inputResearch.value)
        let filteryRecipes = []
        for(i=0; i < recipes.length; i++){
            if(recipes[i].name.toUpperCase().includes(inputResearch.value.toUpperCase()) || recipes[i].description.toUpperCase().includes(inputResearch.value.toUpperCase()))
            {
                filteryRecipes.push(recipes[i])
            }
            else{
                for(j=0; j <recipes[i].ingredients.length; j++){
                    //empecher d'afficher deux fois la meme recette
                    if(recipes[i].ingredients[j].ingredient.toUpperCase().includes(inputResearch.value.toUpperCase())){
                        filteryRecipes.push(recipes[i])
                    }
                }
            }
        }  
        displayData(filteryRecipes)
    })
}
research()
