const inputResearch = document.querySelector("#research")
//fonction de recuperation des recettes filtrées
function recipesFilter(){
    let filteryRecipes = []
    for(i=0; i < recipes.length; i++){
        //variable de verification d'inputeResearchValue
        let testInclude ="false"
        let inputResearchValue = inputResearch.value
        for(j=0; j<recipes[i].name.length;j++){
            //Si une lettre correspond à la première lettre d'inputeResearchValue
            if(recipes[i].name.charAt(j).toUpperCase() == inputResearchValue.charAt(0).toUpperCase()){
                for(k=0; k<inputResearchValue.length; k++){
                    //On retest si chaque lettre d'inputeResearchValue se suivent dans la recette
                    if(recipes[i].name.charAt(j+k).toUpperCase() == inputResearchValue.charAt(k).toUpperCase()){
                        testInclude = "true"
                    }
                    else{
                        testInclude = "false"
                        break
                    }                 
                }
                if(testInclude == "true"){
                    filteryRecipes.push(recipes[i])
                    break
                } 
            }
        }
        if(testInclude == "false"){
            for(k=0; k<recipes[i].ingredients.length;k++){
                for(l=0; l<recipes[i].ingredients[k].ingredient.length;l++){
                //Si une lettre correspond à la première lettre d'inputeResearchValue
                if(recipes[i].ingredients[k].ingredient.charAt(l).toUpperCase() == inputResearchValue.charAt(0).toUpperCase()){
                        for(m=0; m< inputResearchValue.length; m++){
                        //On retest si chaque lettre d'inputeResearchValue se suivent dans la recette
                            if(recipes[i].ingredients[k].ingredient.charAt(l+m).toUpperCase() == inputResearchValue.charAt(m).toUpperCase()){
                                testInclude ="true"
                            }
                            else{
                                testInclude="false"
                                break
                            }
                        }   
                        if(testInclude =="true"){
                            filteryRecipes.push(recipes[i])
                            break
                        }          
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
        for(i=0; i < card.length;i++){
            card[i].style.marginRight = "45px"
        }           
    }
    else{
        const recipesSection = document.querySelector(".liste_recettes")
        recipesSection.style.justifyContent ="space-between"
    }
}

//fonction de recherche
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
                displayData(recipes)
                //verification si le nombre de recette est un multiple de 4
                let remainder = recipes.length % 4
                if(remainder != 0){
                    const recipesSection = document.querySelector(".liste_recettes")
                    const card = document.querySelectorAll(".card")
                    recipesSection.style.justifyContent ="start"
                    for(i=0; i < card.length;i++){
                        card[i].style.marginRight = "45px"
                    }            
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
