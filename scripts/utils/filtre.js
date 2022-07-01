function filtreIngredients(){
    const divIngredients =document.querySelector(".bleu")
    const divIngredientsHeader =document.querySelector(".ingredients_header_filtre")
    const divAppareilsHeader =document.querySelector(".appareils_header_filtre")
    const divUstensilesHeader =document.querySelector(".ustensiles_header_filtre")
    const divAppareils =document.querySelector(".vert")
    const divUstensiles =document.querySelector(".orange")
    const ingredientsChevronUp = document.querySelector(".bleu em")
    const appareilsChevronUp = document.querySelector(".vert em")
    const ustensilesChevronUp = document.querySelector(".orange em")
    const texteIngredients = document.querySelector(".bleu p")
    const texteAppareils = document.querySelector(".vert p")
    const texteUstensiles = document.querySelector(".orange p")
    const inputIngredients = document.getElementById("ingredients")
    const inputAppareils = document.getElementById("appareils")
    const inputUstensiles = document.getElementById("ustensiles")
    const divListeFiltre = document.createElement("div")
    let filterArrayIngredient= ""
    //afficher le menu filtre Ingredients au clic
    ingredientsChevronUp.addEventListener("click", ()=>{
        if(appareilsChevronUp.classList.value=="fa-solid fa-chevron-up"){
            appareilsChevronUp.click()
        }
        if(ustensilesChevronUp.classList.value=="fa-solid fa-chevron-up"){
            ustensilesChevronUp.click()
        }
        let arrayIngredient = [];
        const ingredientInput = document.querySelector("#ingredients")
        const researchInput = document.querySelector("#research")
        const ulFilterIngredients = document.createElement("ul")
        if(ingredientsChevronUp.classList.value == "fa-solid fa-chevron-down"){
            //creation de la liste des filtres
            function filtery(){
                ingredientsChevronUp.classList.remove("fa-chevron-down")
                ingredientsChevronUp.classList.add("fa-chevron-up")
                ingredientsChevronUp.style.marginTop ="30px"
                ingredientsChevronUp.style.marginRight ="20px"
                texteIngredients.style.display = "none"
                divIngredients.style.width ="50%"
                divIngredients.style.height ="397px"
                divIngredients.style.maxHeight ="397px"
                inputIngredients.style.display = "block"
                inputIngredients.style.marginTop ="30px"
                divIngredientsHeader.style.alignItems="start"
                divIngredients.appendChild(divListeFiltre)
                divListeFiltre.setAttribute("class","bleu_liste_filtre")
                //création de la liste de filtre en fonction de l'input research
                if(researchInput.value =="")
                    {
                    for(i=0; i<recipes.length; i++){
                        for(j=0; j<recipes[i].ingredients.length; j++){
                            arrayIngredient.push(`${recipes[i].ingredients[j].ingredient}`)
                        }
                    }
                    //retrait des doublons dans arrayingredient            
                    filterArrayIngredient= arrayIngredient.filter(function(ele,pos){
                        return arrayIngredient.indexOf(ele)==pos;
                    })
                    for(i= 0; i< filterArrayIngredient.length; i++){
                        divListeFiltre.appendChild(ulFilterIngredients)
                        ulFilterIngredients.innerHTML += `<li id=${filterArrayIngredient[i].replace(/ /g, "_")}>${filterArrayIngredient[i]}</li>`
                        ulFilterIngredients.setAttribute("class","ulFilterIngredients")
                        const li = document.querySelectorAll(".ulFilterIngredients li")
                        li.forEach((newLi)=>{
                            newLi.style.width = "33%"
                            newLi.setAttribute("onclick", "filterClick(this.id)")
                        })
                    }
                }
                else{
                    for(i=0; i<recipes.length; i++){
                        for(j=0; j<recipes[i].ingredients.length; j++){
                            if(recipes[i].ingredients[j].ingredient.toUpperCase().includes(researchInput.value.toUpperCase())){
                            arrayIngredient.push(`${recipes[i].ingredients[j].ingredient}`)
                            }
                        }
                    }
                    //retrait des doublons dans arrayingredient            
                    filterArrayIngredient= arrayIngredient.filter(function(ele,pos){
                        return arrayIngredient.indexOf(ele)==pos;
                    })
                    for(i= 0; i< filterArrayIngredient.length; i++){
                        divListeFiltre.appendChild(ulFilterIngredients)
                        ulFilterIngredients.innerHTML += `<li id=${filterArrayIngredient[i].replace(/ /g, "_")}>${filterArrayIngredient[i]}</li>`
                        ulFilterIngredients.setAttribute("class","ulFilterIngredients")
                        const li = document.querySelectorAll(".ulFilterIngredients li")
                        li.forEach((newLi)=>{
                            newLi.style.width = "33%"
                        })
                    }
                }
            }
            filtery()
            //moduler les listes selon les valeurs d'input
            ingredientInput.addEventListener("keyup",(e)=>{
                if(e.key !== "Backspace"){
                    let ingredientInputValue = `${ingredientInput.value}`
                    //dans le cas ou la valeur input = vide on efface la liste de base
                    if(ingredientInputValue !=="" && ingredientInputValue.length >= 3){
                        //vider la liste lié a l'input
                        const li = document.querySelectorAll(".ulFilterIngredients li")
                        ulFilterIngredients.innerHTML = ""
                        divIngredients.style.width ="223px"
                        divIngredients.style.height ="auto"
                        divIngredients.style.minHeight ="97px"
                        //compare la valeur d'input aux valeurs du tableau
                        console.log(filterArrayIngredient)
                        filterArrayIngredient.forEach((newFilterArrayIngredient)=>{
                            if(newFilterArrayIngredient.toUpperCase().includes(ingredientInputValue.toUpperCase())){
                                ingredientInput.style.marginLeft ="20px"
                                ulFilterIngredients.innerHTML += `<li onclick="filterClick(this.id)" id=${newFilterArrayIngredient.replace(/ /g, "_")}>${newFilterArrayIngredient}</li>`
                            }
                        })
                        //mise en forme de la zone filtre
                        ulFilterIngredients.style.flexDirection ="column"
                        ulFilterIngredients.style.width ="100%"
                        li.forEach((newLi)=>{
                            newLi.style.width = "100%"                            
                        })
                    } 
                }
                //gestion de raffraichissement en cas de backspace
                else{
                    let ingredientInputValue = ingredientInput.value
                    ingredientInputValue= ingredientInputValue.substring(0, ingredientInputValue.length)
                    //dans le cas ou la valeur input = vide on réaffiche la liste de base
                    if(ingredientInputValue ===""){
                        const li = document.querySelectorAll(".ulFilterIngredients li")
                        divIngredients.style.width ="50%"
                        divIngredients.style.minHeight ="69px"
                        ulFilterIngredients.style.flexDirection ="row"
                        li.forEach((newLi)=>{
                            newLi.style.width = "33%"
                        })
                        const ulBleu = document.querySelector(".bleu ul")
                        ulBleu.innerHTML=""
                        ulBleu.remove()
                        filtery()
                    }
                }
               
            })
        }
        else{
            const allLi = document.querySelectorAll(".bleu ul");
            ingredientsChevronUp.classList.remove("fa-chevron-up")
            ingredientsChevronUp.classList.add("fa-chevron-down")
            ingredientsChevronUp.style.marginTop ="0px"
            ingredientsChevronUp.style.marginRight ="0px"
            texteIngredients.style.display = "block";
            divIngredients.style.width ="170px"
            divIngredients.style.height ="69px"
            divIngredients.style.minHeight ="69px"
            inputIngredients.style.marginLeft ="20px";
            inputIngredients.style.display = "none"
            inputIngredients.value ="";
            divIngredientsHeader.style.alignItems="center"
            arrayIngredient = [];
            //détruit toutes les listes à puces à la fermeture
            allLi.forEach((newAllLi)=>{
                newAllLi.innerHTML=""
                newAllLi.remove();
            })
            divListeFiltre.remove();
        }
    })
    appareilsChevronUp.addEventListener("click", ()=>{
        if(ingredientsChevronUp.classList.value=="fa-solid fa-chevron-up"){
            ingredientsChevronUp.click()
        }
        if(ustensilesChevronUp.classList.value=="fa-solid fa-chevron-up"){
            ustensilesChevronUp.click()
        }
        let arrayAppareils = [];
        const appareilsInput = document.querySelector("#appareils")
        const researchInput = document.querySelector("#research")
        const ulFilterAppareils = document.createElement("ul")
        if(appareilsChevronUp.classList.value == "fa-solid fa-chevron-down"){
            //creation de la liste des filtres
            function filtery(){
                arrayAppareils=[];
                appareilsChevronUp.classList.remove("fa-chevron-down")
                appareilsChevronUp.classList.add("fa-chevron-up")
                appareilsChevronUp.style.marginTop ="30px"
                appareilsChevronUp.style.marginRight ="20px"
                texteAppareils.style.display = "none"
                divAppareils.style.width ="50%"
                divAppareils.style.height ="397px"
                divAppareils.style.maxHeight ="397px"
                inputAppareils.style.display = "block"
                inputAppareils.style.marginTop ="30px"
                divAppareilsHeader.style.alignItems="start"
                divAppareils.appendChild(divListeFiltre)
                divListeFiltre.setAttribute("class","vert_liste_filtre")
                //création de la liste de filtre en fonction de l'input research
                if(researchInput.value =="")
                    {
                    for(i=0; i<recipes.length; i++){
                            arrayAppareils.push(`${recipes[i].appliance}`)
                    }
                    
                    //retrait des doublons dans arrayAppareils          
                    arrayAppareils= arrayAppareils.filter(function(ele,pos){
                        return arrayAppareils.indexOf(ele)==pos;
                    })
                    for(i= 0; i< arrayAppareils.length; i++){
                        divListeFiltre.appendChild(ulFilterAppareils)
                        ulFilterAppareils.innerHTML += `<li id=${arrayAppareils[i].replace(/ /g, "_")}>${arrayAppareils[i]}</li>`
                        ulFilterAppareils.setAttribute("class","ulFilterAppareils")
                        const li = document.querySelectorAll(".ulFilterAppareils li")
                        li.forEach((newLi)=>{
                            newLi.style.width = "33%"
                            newLi.setAttribute("onclick", "filterClick(this.id)")
                        })
                    }
                }
                else{
                    for(i=0; i<recipes.length; i++){
                        for(j=0; j<recipes[i].appliance.length; j++){
                            if(recipes[i].appliance.toUpperCase().includes(researchInput.value.toUpperCase())){
                            arrayAppareils.push(`${recipes[i].appliance}`)
                            }
                        }
                    }
                    //retrait des doublons dans arrayAppareils          
                    arrayAppareils= arrayAppareils.filter(function(ele,pos){
                        return arrayAppareils.indexOf(ele)==pos;
                    })
                    for(i= 0; i< arrayAppareils.length; i++){
                        divListeFiltre.appendChild(ulFilterAppareils)
                        ulFilterAppareils.innerHTML += `<li id=${arrayAppareils[i].replace(/ /g, "_")}>${arrayAppareils[i]}</li>`
                        ulFilterAppareils.setAttribute("class","ulFilterAppareils")
                        const li = document.querySelectorAll(".ulFilterAppareils li")
                        li.forEach((newLi)=>{
                            newLi.style.width = "33%"
                        })
                    }
                }
            }
            filtery()
            //moduler les listes selon les valeurs d'input
            appareilsInput.addEventListener("keyup",(e)=>{
                if(e.key !== "Backspace"){
                    let appareilsInputValue = `${appareilsInput.value}`
                    //dans le cas ou la valeur input = vide on efface la liste de base
                    if(appareilsInputValue !=="" && appareilsInputValue.length >= 3){
                        //vider la liste lié a l'input
                        const li = document.querySelectorAll(".ulFilterAppareils li")
                        ulFilterAppareils.innerHTML = ""
                        divAppareils.style.width ="223px"
                        divAppareils.style.height ="auto"
                        divAppareils.style.minHeight ="97px"
                        //compare la valeur d'input aux valeurs du tableau
                        arrayAppareils.forEach((newArrayAppareils)=>{
                            if(newArrayAppareils.toUpperCase().includes(appareilsInputValue.toUpperCase())){
                                appareilsInput.style.marginLeft ="20px"
                                ulFilterAppareils.innerHTML += `<li onclick="filterClick(this.id)" id=${newArrayAppareils.replace(/ /g, "_")}>${newArrayAppareils}</li>`
                            }
                        })
                        //mise en forme de la zone filtre
                        ulFilterAppareils.style.flexDirection ="column"
                        ulFilterAppareils.style.width ="100%"
                        li.forEach((newLi)=>{
                            newLi.style.width = "100%"                            
                        })
                    } 
                }
                else{
                    let appareilsInputValue = appareilsInput.value
                    appareilsInputValue= appareilsInputValue.substring(0, appareilsInputValue.length)
                    console.log(typeof appareilsInputValue)
                    console.log(appareilsInputValue)
                    //dans le cas ou la valeur input = vide on réaffiche la liste de base
                    if(appareilsInputValue ===""){
                        const li = document.querySelectorAll(".ulFilterAppareils li")
                        divAppareils.style.width ="50%"
                        divAppareils.style.minHeight ="69px"
                        ulFilterAppareils.style.flexDirection ="row"
                        li.forEach((newLi)=>{
                            newLi.style.width = "33%"
                        })
                        const ulVert = document.querySelector(".vert ul")
                        ulVert.innerHTML=""
                        ulVert.remove()
                        filtery()
                    }
                }
               
            })
        }
        else{
            const ul = document.querySelectorAll(".rectangle ul");
            appareilsChevronUp.classList.remove("fa-chevron-up")
            appareilsChevronUp.classList.add("fa-chevron-down")
            appareilsChevronUp.style.marginTop ="0px"
            appareilsChevronUp.style.marginRight ="0px"
            texteAppareils.style.display = "block";
            divAppareils.style.width ="170px"
            divAppareils.style.height ="69px"
            divAppareils.style.minHeight ="69px"
            inputAppareils.style.marginLeft ="20px";
            inputAppareils.style.display = "none"
            inputAppareils.value ="";
            divAppareilsHeader.style.alignItems="center"
            arrayAppareils = []
            //détruit toutes les listes à puces à la fermeture
            for(i=0; i<ul.length; i++){
                ul[i].innerHTML=""
                ul[i].remove()
            }
            divListeFiltre.innerHTML=""
            divListeFiltre.remove()
        }
    })
    ustensilesChevronUp.addEventListener("click", ()=>{
        if(appareilsChevronUp.classList.value=="fa-solid fa-chevron-up"){
            appareilsChevronUp.click()
        }
        if(ingredientsChevronUp.classList.value=="fa-solid fa-chevron-up"){
            ingredientsChevronUp.click()
        }
        let arrayUstensiles = [];
        const ustensilesInput = document.querySelector("#ustensiles")
        const researchInput = document.querySelector("#research")
        const ulFilterUstensiles = document.createElement("ul")
        if(ustensilesChevronUp.classList.value == "fa-solid fa-chevron-down"){
            //creation de la liste des filtres
            function filtery(){
                ustensilesChevronUp.classList.remove("fa-chevron-down")
                ustensilesChevronUp.classList.add("fa-chevron-up")
                ustensilesChevronUp.style.marginTop ="30px"
                ustensilesChevronUp.style.marginRight ="20px"
                texteUstensiles.style.display = "none"
                divUstensiles.style.width ="50%"
                divUstensiles.style.height ="397px"
                divUstensiles.style.maxHeight ="397px"
                inputUstensiles.style.display = "block"
                inputUstensiles.style.marginTop ="30px"
                divUstensilesHeader.style.alignItems="start"
                divUstensiles.appendChild(divListeFiltre)
                divListeFiltre.setAttribute("class","orange_liste_filtre")
                //création de la liste de filtre en fonction de l'input research
                if(researchInput.value =="")
                    {
                    for(i=0; i<recipes.length; i++){
                        for(j=0; j<recipes[i].ustensils.length; j++){
                            arrayUstensiles.push(`${recipes[i].ustensils[j]}`)
                        }
                    }
                    //retrait des doublons dans arrayUstensiles        
                    arrayUstensiles= arrayUstensiles.filter(function(ele,pos){
                        return arrayUstensiles.indexOf(ele)==pos;
                    })
                    for(i= 0; i< arrayUstensiles.length; i++){
                        divListeFiltre.appendChild(ulFilterUstensiles)
                        ulFilterUstensiles.innerHTML += `<li id=${arrayUstensiles[i].replace(/ /g, "_")}>${arrayUstensiles[i]}</li>`
                        ulFilterUstensiles.setAttribute("class","ulFilterUstensiles")
                        const li = document.querySelectorAll(".ulFilterUstensiles li")
                        li.forEach((newLi)=>{
                            newLi.style.width = "33%"
                            newLi.setAttribute("onclick", "filterClick(this.id)")
                        })
                    }
                }
                else{
                    for(i=0; i<recipes.length; i++){
                        for(j=0; j<recipes[i].ustensils.length; j++){
                            if(recipes[i].ustensils[j].toUpperCase().includes(researchInput.value.toUpperCase())){
                                arrayUstensiles.push(`${recipes[i].ustensils[j]}`)
                            }
                        }
                    }
                    //retrait des doublons dans arrayingredient            
                    arrayUstensiles= arrayUstensiles.filter(function(ele,pos){
                        return arrayUstensiles.indexOf(ele)==pos;
                    })
                    for(i= 0; i< arrayUstensiles.length; i++){
                        divListeFiltre.appendChild(ulFilterUstensiles)
                        ulFilterUstensiles.innerHTML += `<li id=${arrayUstensiles[i].replace(/ /g, "_")}>${arrayUstensiles[i]}</li>`
                        ulFilterUstensiles.setAttribute("class","ulFilterUstensiles")
                        const li = document.querySelectorAll(".ulFilterUstensiles li")
                        li.forEach((newLi)=>{
                            newLi.style.width = "33%"
                        })
                    }
                }
            }
            filtery()
            //moduler les listes selon les valeurs d'input
            ustensilesInput.addEventListener("keyup",(e)=>{
                if(e.key !== "Backspace"){
                    let ustensilesInputValue = `${ustensilesInput.value}`
                    //dans le cas ou la valeur input = vide on efface la liste de base
                    if(ustensilesInputValue !=="" && ustensilesInputValue.length >= 3){
                        //vider la liste lié a l'input
                        const li = document.querySelectorAll(".ulFilterUstensiles li")
                        ulFilterUstensiles.innerHTML = ""
                        divUstensiles.style.width ="223px"
                        divUstensiles.style.height ="auto"
                        divUstensiles.style.minHeight ="97px"
                        //compare la valeur d'input aux valeurs du tableau
                        console.log(arrayUstensiles)
                        arrayUstensiles.forEach((newArrayUstensiles)=>{
                            if(newArrayUstensiles.toUpperCase().includes(ustensilesInputValue.toUpperCase())){
                                ustensilesInput.style.marginLeft ="20px"
                                ulFilterUstensiles.innerHTML += `<li onclick="filterClick(this.id)" id=${newArrayUstensiles.replace(/ /g, "_")}>${newArrayUstensiles}</li>`
                            }
                        })
                        //mise en forme de la zone filtre
                        ulFilterUstensiles.style.flexDirection ="column"
                        ulFilterUstensiles.style.width ="100%"
                        li.forEach((newLi)=>{
                            newLi.style.width = "100%"                            
                        })
                    } 
                }
                //gestion de raffraichissement en cas de backspace
                else{
                    let ustensilesInputValue = ustensilesInput.value
                    ustensilesInputValue= ustensilesInputValue.substring(0, ustensilesInputValue.length)
                    //dans le cas ou la valeur input = vide on réaffiche la liste de base
                    if(ustensilesInputValue ===""){
                        const li = document.querySelectorAll(".ulFilterUstensiles li")
                        divUstensiles.style.width ="50%"
                        divUstensiles.style.minHeight ="69px"
                        ulFilterUstensiles.style.flexDirection ="row"
                        li.forEach((newLi)=>{
                            newLi.style.width = "33%"
                        })
                        const ulOrange = document.querySelector(".orange ul")
                        ulOrange.innerHTML=""
                        ulOrange.remove()
                        filtery()
                    }
                }
               
            })
        }
        else{
            const allLi = document.querySelectorAll(".orange ul");
            ustensilesChevronUp.classList.remove("fa-chevron-up")
            ustensilesChevronUp.classList.add("fa-chevron-down")
            ustensilesChevronUp.style.marginTop ="0px"
            ustensilesChevronUp.style.marginRight ="0px"
            texteUstensiles.style.display = "block";
            divUstensiles.style.width ="170px"
            divUstensiles.style.height ="69px"
            divUstensiles.style.minHeight ="69px"
            inputUstensiles.style.marginLeft ="20px";
            inputUstensiles.style.display = "none"
            inputUstensiles.value ="";
            divUstensilesHeader.style.alignItems="center"
            arrayUstensiles = [];
            //détruit toutes les listes à puces à la fermeture
            allLi.forEach((newAllLi)=>{
                newAllLi.innerHTML=""
                newAllLi.remove();
            })
            divListeFiltre.remove();
        }
    })
}

filtreIngredients()
//fonction d'affichage des filtres actifs
function displayFilter(){
    const chevron = document.querySelectorAll("em")
    chevron.forEach((newChevron)=>{
        newChevron.addEventListener("click",()=>{
            let allFilters = document.querySelectorAll("li")   
            allFilters.forEach((newAllFilters)=>{
                const displayFilter = document.querySelector(".displayFilters")
                //empeche de remettre le onclick si le filtre est déjà actif
                if(displayFilter.textContent !== ""){
                    const filterActive = document.querySelectorAll(".filterActive")
                    newAllFilters.setAttribute("onclick", "filterClick(this.id)")
                    for(i=0; i<filterActive.length; i++){
                        //comparaison des valeurs des filtres actifs
                        if(newAllFilters.textContent.toUpperCase().includes(filterActive[i].textContent.toUpperCase())){
                            newAllFilters.removeAttribute("onclick")
                        }
                        else{
                            newAllFilters.setAttribute("onclick", "filterClick(this.id)")
                        }
                    }
                }
                //rajout du onclick en cas d'aucun filtre actif
                else{
                    newAllFilters.setAttribute("onclick", "filterClick(this.id)")
                }
            })
        })
    })
}

function filterClick(id){      
    const displayFilterSection = document.querySelector(".displayFilters")
    const activeFilter = document.createElement("div") 
    const activeFilterText = document.createElement("p") 
    const xMark = document.createElement("em") 
    const filterClicked = document.getElementById(`${id}`) 
    let filterArray = []
    let filteryRecipes = []
    let allFilteryRecipes = []
    let filterRecipesIngredient = []
    displayFilterSection.appendChild(activeFilter)
    activeFilter.appendChild(activeFilterText)
    id = id.replace(/_/g, " ")
    activeFilter.appendChild(xMark)
    xMark.setAttribute("class","fa-regular fa-circle-xmark")
    xMark.setAttribute("onclick","closeFilterActive(this.parentNode)")
    filterClicked.removeAttribute("onclick")
    activeFilterText.innerHTML=`${id}`
    //trier en fonction des filtres actifs
    for(i=0; i<recipes.length; i++){
        if(recipes[i].appliance.toUpperCase().includes(id.toUpperCase())){
            activeFilter.setAttribute("class","filterActive vert")
            filteryRecipes.push(recipes[i])
        }
        for(j=0; j<recipes[i].ingredients.length;j++){
            if(recipes[i].ingredients[j].ingredient.toUpperCase().includes(id.toUpperCase())){
                activeFilter.setAttribute("class","filterActive bleu")
                filteryRecipes.push(recipes[i])
            }
        }
        for(j=0; j<recipes[i].ustensils.length;j++){
            if(recipes[i].ustensils[j].toUpperCase().includes(id.toUpperCase())){
                activeFilter.setAttribute("class","filterActive orange")
                filteryRecipes.push(recipes[i])
            }
        }
    }   
    let filterActive = document.querySelectorAll(".filterActive")
    //recuperer le contenu des filtres pour les mettres dans un tableau
    filterActive.forEach((newFilterActive)=>{
        filterArray.push(newFilterActive.textContent)
    })
    //Prise en compte de plusieurs filtres
    if(filterArray != ""){
        for(i=0; i<filteryRecipes.length;i++){
            for(j=0; j<filteryRecipes[i].ingredients.length;j++){
                //Récuperation de tous les ingredients d'une recette pour la mettre dans un nouvel array
                filterRecipesIngredient.push(filteryRecipes[i].ingredients[j].ingredient)
            }
            for(k=0; k<filteryRecipes[i].ustensils.length;k++){
                filterRecipesIngredient.push(filteryRecipes[i].ustensils[k])
            }
            filterRecipesIngredient.push(filteryRecipes[i].appliance)
            //Verification que tous les filtres sont inclus dans les ingredients
            const containsAll = filterArray.every(element =>{
                return filterRecipesIngredient.includes(element)
            })
            //Si oui, push la recette dans le tableau final
            if(containsAll == true){
                allFilteryRecipes.push(filteryRecipes[i])
            }
            filterRecipesIngredient.length = 0
        }
        displayData(allFilteryRecipes)
        //remise en forme de la section recette selon le nombre de recettes sorties
        //verification si le nombre de recette est un multiple de 4
        let remainder = allFilteryRecipes.length % 4
        if(remainder != 0){
            const recipesSection = document.querySelector(".liste_recettes")
            const card = document.querySelectorAll(".card")
            console.log(card)
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
//fonction de suppression de filtre actif
function closeFilterActive(parentNode){
    let activeFilterTextValue = parentNode.firstChild.textContent
    let filterArray =[]
    let filterRecipesIngredient = []
    let allFilteryRecipes = []
    activeFilterTextValue = activeFilterTextValue.replace(/ /g, "_")
    const filterClicked = document.getElementById(`${activeFilterTextValue}`)
    if(filterClicked){
    filterClicked.setAttribute("onclick","filterClick(this.id)")
    }
    parentNode.remove()
    //doit déclarer après le retrait pour ne pas integrer le filtre supprimé dans les filtres actifs
    let filterActive = document.querySelectorAll(".filterActive")
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
        //remise en forme de la section recette selon le nombre de recettes sorties
        //verification si le nombre de recette est un multiple de 4
        let remainder = allFilteryRecipes.length % 4
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
    //si vide, réafficher recipes classique
    else{
        const recipesSection = document.querySelector(".liste_recettes")
        displayData(recipes)
        recipesSection.style.justifyContent ="space-between"
    }    
}
displayFilter()
