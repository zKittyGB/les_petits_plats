function displayData(recipes){
    const recipesSection = document.querySelector(".liste_recettes")
    recipesSection.innerHTML=""
    recipes.forEach((newRecipes)=>{
        const liste_recipes = recipesFactory(newRecipes);
        recipesSection.appendChild(liste_recipes)
    })
}
displayData(recipes)
