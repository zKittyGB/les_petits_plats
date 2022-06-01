function filtreIngredients(){
    const divIngredients =document.querySelector(".bleu")
    const divIngredientsHeader =document.querySelector(".bleu .header_filtre")
    console.log(divIngredientsHeader)
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
    ingredientsChevronUp.addEventListener("click", ()=>{
        if(ingredientsChevronUp.classList.value == "fa-solid fa-chevron-down"){
            ingredientsChevronUp.classList.remove("fa-chevron-down")
            ingredientsChevronUp.classList.add("fa-chevron-up")
            ingredientsChevronUp.style.marginTop ="30px"
            texteIngredients.style.display = "none"
            divIngredients.style.width ="50%"
            divIngredients.style.height ="397px"
            inputIngredients.style.display = "block"
            inputIngredients.style.marginTop ="30px"
            divIngredientsHeader.style.alignItems="start"
            divIngredients.appendChild(divListeFiltre)
            divListeFiltre.setAttribute("class","liste_filtre")
        }
        else{
            ingredientsChevronUp.classList.remove("fa-chevron-up")
            ingredientsChevronUp.classList.add("fa-chevron-down")
            ingredientsChevronUp.style.marginTop ="0px"
            texteIngredients.style.display = "block";
            divIngredients.style.width ="170px"
            divIngredients.style.height ="69px"
            inputIngredients.style.display = "none"
            divIngredientsHeader.style.alignItems="center"
        }
    })
}

filtreIngredients()