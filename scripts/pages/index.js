function displayData(recipes){
    const recipesSection = document.querySelector(".liste_recettes")
    recipesSection.innerHTML=""
    recipes.forEach((newRecipes)=>{
        const liste_recipes = recipesFactory(newRecipes);
        recipesSection.appendChild(liste_recipes)
    })
     //verification si le nombre de recette est un multiple de 4
     let remainder = recipes.length % 4
     if(remainder != 0){
         const recipesSection = document.querySelector(".liste_recettes")
         const card = document.querySelectorAll(".card")
         recipesSection.style.justifyContent ="start"
         card.forEach((newCard)=>{
             newCard.style.marginRight = "45px"
         })            
     }
     else{
         const recipesSection = document.querySelector(".liste_recettes")
         recipesSection.style.justifyContent ="space-between"
     }
}
displayData(recipes)
