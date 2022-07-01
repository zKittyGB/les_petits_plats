const inputResearch = document.querySelector("#research")
//fonction de recuperation du tableau filtré
function recipesFilter(){
    let filterActive = document.querySelectorAll(".filterActive")
    let filteryRecipes = []
    let filterArray =[]
    let filterRecipesIngredient = []
    let allFilteryRecipes = []
    //update de la liste des recettes en fonctions des filtres restants
    //recuperer le contenu des filtres pour les mettres dans un tableau
    filterActive.forEach((newFilterActive)=>{
        filterArray.push(newFilterActive.textContent)
    })
    if(filterArray != ""){
        for(i=0; i<recipes.length;i++){
            for(j=0; j<recipes[i].ingredients.length;j++){
                //Récuperation de tous les ingredients d'une recette pour la mettre dans un nouvel array
                filterRecipesIngredient.push(recipes[i].ingredients[j].ingredient)
            }
            for(k=0; k<recipes[i].ustensils.length;k++){
                filterRecipesIngredient.push(recipes[i].ustensils[k])
            }
            filterRecipesIngredient.push(recipes[i].appliance)
            //Verification que tous les filtres sont inclus dans les ingredients
            const containsAll = filterArray.every(element =>{
                return filterRecipesIngredient.includes(element)
            })
            //Si oui, push la recette dans le tableau final
            if(containsAll == true){
                allFilteryRecipes.push(recipes[i])
            }
            filterRecipesIngredient.length = 0
        }
        //affichage des recettes filtrés en fonction du texte dans la zone de recherche
        for(i=0; i < allFilteryRecipes.length; i++){
            if(allFilteryRecipes[i].name.toUpperCase().includes(inputResearch.value.toUpperCase()) || recipes[i].description.toUpperCase().includes(inputResearch.value.toUpperCase()))
            {
                filteryRecipes.push(allFilteryRecipes[i])
            }
            else{
                for(j=0; j <allFilteryRecipes[i].ingredients.length; j++){
                    //verifier la liste des ingredients
                    if(allFilteryRecipes[i].ingredients[j].ingredient.toUpperCase().includes(inputResearch.value.toUpperCase())){
                        filteryRecipes.push(allFilteryRecipes[i])
                    }
                }
            }
        }
    }
    else{
        for(i=0; i < recipes.length; i++){
            if(recipes[i].name.toUpperCase().includes(inputResearch.value.toUpperCase()) || recipes[i].description.toUpperCase().includes(inputResearch.value.toUpperCase()))
            {
                filteryRecipes.push(recipes[i])
            }
            else{
                for(j=0; j <recipes[i].ingredients.length; j++){
                    //verifier la liste des ingredients
                    if(recipes[i].ingredients[j].ingredient.toUpperCase().includes(inputResearch.value.toUpperCase())){
                        filteryRecipes.push(recipes[i])
                    }
                }
            }
        }
    }
    return filteryRecipes  
}
//fonction d'affichage des recettes filtrées
function displayDataFilter(){
    const filteryRecipes = recipesFilter()
    displayData(filteryRecipes)
    //mise en forme des recette si elles ne sont pas un multiple de 4
    let remainder = filteryRecipes.length % 4
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

function research(){
    const buttonResearch = document.querySelector(".fa-magnifying-glass")
    const form = document.querySelector("form")
    form.addEventListener("submit",(e)=>{
        e.preventDefault()
    })
    buttonResearch.addEventListener("click",(e)=>{
        e.preventDefault();
        displayDataFilter()    
    })
    inputResearch.addEventListener("keyup",(e)=>{
        let researchInputValue = `${inputResearch.value}`
        e.preventDefault();
        //dans le cas ou la valeur input = vide on efface la liste de base
        if(e.key !== "Backspace"){
            if(researchInputValue.length >= 3){
                displayDataFilter()
            }
        }
        else{
            researchInputValue= researchInputValue.substring(0, researchInputValue.length)
            //dans le cas ou la valeur input = vide on réaffiche la liste de base
            if(researchInputValue ===""){
                let filterActive = document.querySelectorAll(".filterActive")
                let filterArray =[]
                let filterRecipesIngredient = []
                let allFilteryRecipes = []
                //update de la liste des recettes en fonctions des filtres restants
                //recuperer le contenu des filtres pour les mettres dans un tableau
                filterActive.forEach((newFilterActive)=>{
                    filterArray.push(newFilterActive.textContent)
                })
                //Prise en compte de plusieurs filtres
                if(filterArray != ""){
                    for(i=0; i<recipes.length;i++){
                        for(j=0; j<recipes[i].ingredients.length;j++){
                            //Récuperation de tous les ingredients d'une recette pour la mettre dans un nouvel array
                            filterRecipesIngredient.push(recipes[i].ingredients[j].ingredient)
                        }
                        for(k=0; k<recipes[i].ustensils.length;k++){
                            filterRecipesIngredient.push(recipes[i].ustensils[k])
                        }
                        filterRecipesIngredient.push(recipes[i].appliance)
                        //Verification que tous les filtres sont inclus dans les ingredients
                        const containsAll = filterArray.every(element =>{
                            return filterRecipesIngredient.includes(element)
                        })
                        //Si oui, push la recette dans le tableau final
                        if(containsAll == true){
                            allFilteryRecipes.push(recipes[i])
                        }
                        filterRecipesIngredient.length = 0
                    }
                    displayData(allFilteryRecipes)

                }
                else{
                    displayData(recipes)
                }
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
        }
    })
}


research()
