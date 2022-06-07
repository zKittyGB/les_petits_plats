function filtreIngredients(){
    const divIngredients =document.querySelector(".bleu")
    const divIngredientsHeader =document.querySelector(".bleu .header_filtre")
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
    //afficher le menu filtre au clic
    ingredientsChevronUp.addEventListener("click", ()=>{
        if(ingredientsChevronUp.classList.value == "fa-solid fa-chevron-down"){
            let arrayIngredient = [];
            const ingredientInput = document.querySelector("#ingredients")
            const ulGauche = document.createElement("ul")
            const ulMilieu = document.createElement("ul")
            const ulDroit = document.createElement("ul")
            const ulPressKey = document.createElement("ul")
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
            divListeFiltre.setAttribute("class","liste_filtre")
            for(i=0; i<recipes.length; i++){
                for(j=0; j<recipes[i].ingredients.length; j++){
                    arrayIngredient.push(`${recipes[i].ingredients[j].ingredient}`)
                }
            }
            //retrait des doublons dans arrayingredient            
            const filterArrayIngredient= arrayIngredient.filter(function(ele,pos){
                return arrayIngredient.indexOf(ele)==pos;
            })
            //affichage des 3 listes à puces
            for(i= 0; i<10; i++){
                divListeFiltre.appendChild(ulGauche)
                ulGauche.innerHTML += `<li id=${filterArrayIngredient[i].replace(/ /g, "_")}>${filterArrayIngredient[i]}</li>`
                ulGauche.setAttribute("class","ulGauche")
            }
            for(i= 11; i<21; i++){
                divListeFiltre.appendChild(ulMilieu)
                ulMilieu.innerHTML += `<li id=${filterArrayIngredient[i].replace(/ /g, "_")}>${filterArrayIngredient[i]}</li>`
                ulMilieu.setAttribute("class","ulMilieu")
            }
            for(i= 22; i<32; i++){
                divListeFiltre.appendChild(ulDroit)
                ulDroit.innerHTML += `<li id=${filterArrayIngredient[i].replace(/ /g, "_")}>${filterArrayIngredient[i]}</li>`
                ulDroit.setAttribute("class","ulDroit")
            }
            //moduler les listes selon les valeurs d'input
            divListeFiltre.appendChild(ulPressKey)
            ulPressKey.style.display="none"
            ingredientInput.addEventListener("keyup",(e)=>{
                const allLi = document.querySelectorAll(".bleu ul");
                if(e.key !== "Backspace"){
                    let ingredientInputValue = `${ingredientInput.value}`
                    //dans le cas ou la valeur input = vide on efface la liste de base
                    if(ingredientInputValue !=="" && ingredientInputValue.length >= "3"){
                        allLi.forEach((newAllLi)=>{
                            newAllLi.style.display="none"
                        })
                        //vider la liste lié a l'input
                        ulPressKey.innerHTML = ""
                        ulPressKey.setAttribute("class","ulPressKey")
                        ulPressKey.style.display="block"
                        divIngredients.style.width ="223px"
                        divIngredients.style.height ="auto"
                        divIngredients.style.minHeight ="97px"
                        //compare la valeur d'input aux valeurs du tableau
                        filterArrayIngredient.forEach((newFilterArrayIngredient)=>{
                            if(newFilterArrayIngredient.toUpperCase().includes(ingredientInputValue.toUpperCase())){
                                ingredientInput.style.marginLeft ="20px"
                                ulPressKey.innerHTML += `<li>${newFilterArrayIngredient}</li>`
                            }
                        })
                    } 
                }
                else{
                    let ingredientInputValue = ingredientInput.value
                    ingredientInputValue= ingredientInputValue.substring(0, ingredientInputValue.length -1)
                    //dans le cas ou la valeur input = vide on réaffiche la liste de base
                    if(ingredientInputValue ===""){
                        allLi.forEach((newAllLi)=>{
                            newAllLi.style.display="block"
                        })
                        divIngredients.style.width ="50%"
                        divIngredients.style.minHeight ="69px"
                        ulPressKey.style.display="none"
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
                newAllFilters.setAttribute("onclick", "filterClick(this.id)")
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
    displayFilterSection.appendChild(activeFilter)
    activeFilter.appendChild(activeFilterText)
    activeFilter.setAttribute("class","filterActive bleu")
    activeFilterText.innerHTML=`${id.replace(/_/g, " ")}`
    activeFilter.appendChild(xMark)
    xMark.setAttribute("class","fa-regular fa-circle-xmark")
    xMark.setAttribute("onclick","closeFilterActive(this.parentNode)")
    filterClicked.removeAttribute("onclick")
}
//fonction de suppression de filtre actif
function closeFilterActive(parentNode){
    let activeFilterTextValue = parentNode.firstChild.textContent
    activeFilterTextValue = activeFilterTextValue.replace(/ /g, "_")
    const filterClicked = document.getElementById(`${activeFilterTextValue}`)
    console.log(activeFilterTextValue)
    filterClicked.setAttribute("onclick","filterClick(this.id)")
    parentNode.remove();
}
displayFilter()

