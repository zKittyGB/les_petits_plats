function displayData(){
    const recipesSection = document.querySelector(".liste_recettes")
    recipes.forEach((newRecipes)=>{
        const liste_recipes = recipesFactory(newRecipes);
        recipesSection.appendChild(liste_recipes)
    })
}
displayData()
