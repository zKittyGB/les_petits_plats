//fonction gérant la responsivité
function mediaQuery(){
    const filtres = document.querySelector(".menu_filtres")
    const rectangle =document.querySelectorAll(".rectangle")
    const divIngredients =document.querySelector(".bleu")
    const divAppareils =document.querySelector(".vert")
    const divUstensiles =document.querySelector(".orange")
    const ingredientsChevronUp = document.querySelector(".bleu em")
    const appareilsChevronUp = document.querySelector(".vert em")
    const ustensilesChevronUp = document.querySelector(".orange em")
    const card = document.querySelectorAll(".card")
    const loop = document.querySelector(".search_glass")
    //action au resize de la fenetre
    function resize(){
        if(window.matchMedia("(min-width:711px)").matches){
            filtres.style.flexDirection ="row"
            rectangle.forEach((newRectangle)=>{
                newRectangle.style.marginBottom = "0px"
            })
        }      
        //Responsivité taille + de 1300px en fonction des ingredients open
        if(window.matchMedia("(min-width:1300px)").matches && ingredientsChevronUp.classList.value == "fa-solid fa-chevron-up"){
            divIngredients.style.minWidth = "50%"
            divAppareils.style.display ="block"
            divAppareils.style.minWidth ="170px"
            divUstensiles.style.display ="block"
            divUstensiles.style.minWidth ="170px"
        }
        //Responsivité taille - de 1300px en fonction des ingredients open
        if(window.matchMedia("(max-width:1300px)").matches && ingredientsChevronUp.classList.value == "fa-solid fa-chevron-up"){
            divIngredients.style.minWidth = "100%"
            divAppareils.style.display ="none"
            divUstensiles.style.display ="none"
        }
        //Responsivité taille - de 700px en fonction des ingredients open
        if(window.matchMedia("(max-width:700px)").matches && ingredientsChevronUp.classList.value == "fa-solid fa-chevron-up"){
            //divIngredients.style.minWidth = "700px"
            divAppareils.style.display ="none"
            divUstensiles.style.display ="none"
        }
        //Responsivité taille + de 1300px en fonction des appareils open
        if(window.matchMedia("(min-width:1300px)").matches && appareilsChevronUp.classList.value == "fa-solid fa-chevron-up"){
            divAppareils.style.minWidth = "50%"
            divIngredients.style.display ="block"
            divIngredients.style.minWidth ="170px"
            divUstensiles.style.display ="block"
            divUstensiles.style.minWidth ="170px"
        }
        //Responsivité taille - de 1300px en fonction des appareils open
        if(window.matchMedia("(max-width:1300px)").matches && appareilsChevronUp.classList.value == "fa-solid fa-chevron-up"){
            divIngredients.style.display = "none"
            divAppareils.style.minWidth = "100%"
            divUstensiles.style.display ="none"
        }
        //Responsivité taille - de 700px en fonction des appareils open
        if(window.matchMedia("(max-width:700px)").matches && appareilsChevronUp.classList.value == "fa-solid fa-chevron-up"){
            divIngredients.style.display ="none"
            divUstensiles.style.display ="none"
        }
        //Responsivité taille + de 1300px en fonction des ustensiles open
        if(window.matchMedia("(min-width:1300px)").matches && ustensilesChevronUp.classList.value == "fa-solid fa-chevron-up"){
            divUstensiles.style.minWidth = "50%"
            divIngredients.style.display ="block"
            divIngredients.style.minWidth ="170px"
            divAppareils.style.display ="block"
            divAppareils.style.minWidth ="170px"
        }
        //Responsivité taille - de 1300px en fonction des ustensiles open
        if(window.matchMedia("(max-width:1300px)").matches && ustensilesChevronUp.classList.value == "fa-solid fa-chevron-up"){
            divUstensiles.style.minWidth = "100%"
            divIngredients.style.display ="none"
            divAppareils.style.display ="none"
        }
        //Responsivité taille - de 700px en fonction des ustensiles open
        if(window.matchMedia("(max-width:700px)").matches && ustensilesChevronUp.classList.value == "fa-solid fa-chevron-up"){
            //divUstensiles.style.minWidth = "700px"
            divIngredients.style.display ="none"
            divAppareils.style.display ="none"
        }
        //Responsivité taille + de 700px et all filtre close
        if(window.matchMedia("(min-width:711px)").matches && ustensilesChevronUp.classList.value == "fa-solid fa-chevron-down" && appareilsChevronUp.classList.value == "fa-solid fa-chevron-down" && ingredientsChevronUp.classList.value == "fa-solid fa-chevron-down")
        {
            divUstensiles.style.minWidth = "170px"
            divUstensiles.style.display ="block"
            divIngredients.style.minWidth = "170px"
            divIngredients.style.display ="block "
            divAppareils.style.minWidth = "170px"
            divAppareils.style.display ="block "
        }
        //Responsivité taille - de 700px et all filtre close
        if(window.matchMedia("(max-width:710px)").matches &&  ustensilesChevronUp.classList.value == "fa-solid fa-chevron-down" && appareilsChevronUp.classList.value == "fa-solid fa-chevron-down" && ingredientsChevronUp.classList.value == "fa-solid fa-chevron-down"){
            filtres.style.flexDirection ="column"
            rectangle.forEach((newRectangle)=>{
                newRectangle.style.marginBottom = "20px"
                newRectangle.style.minWidth = "100%"
            })
        }
        //Responsivité taille - de 700px
        if(window.matchMedia("(max-width:710px)").matches){
            card.forEach((newCard)=>{
                newCard.style.width ="100%"
                newCard.style.marginRight="0px"
            })
        }
        //Responsivité taille + de 700px
        if(window.matchMedia("(min-width:711px)").matches){
            const body = document.querySelector("body")
            body.style.marginRight ="80px"
            body.style.marginLeft ="80px"
            card.forEach((newCard)=>{
                newCard.style.width ="380px"
                newCard.style.marginRight="45px"
            })
            if(ustensilesChevronUp.classList.value == "fa-solid fa-chevron-up" || appareilsChevronUp.classList.value == "fa-solid fa-chevron-up" || ingredientsChevronUp.classList.value == "fa-solid fa-chevron-up"){
                const ul = document.querySelector(".rectangle ul")
                const li = document.querySelectorAll(".rectangle ul li")
                li.forEach((newLi)=>{
                    newLi.style.width="33%"
                })
                if(ul){
                    ul.setAttribute("flex-direction","row")
                    ul.style.overflow = "hidden"
                }
            }
            loop.style.right="90px"
        }
        //Gestion de la barre de defillement entre 710 et 711px
        if(window.matchMedia("(min-width:710px)").matches ){
            if(ustensilesChevronUp.classList.value == "fa-solid fa-chevron-up" || appareilsChevronUp.classList.value == "fa-solid fa-chevron-up" || ingredientsChevronUp.classList.value == "fa-solid fa-chevron-up"){
                const ul = document.querySelector(".rectangle ul")
                if(ul){
                    ul.scrollTop="0px"
                }
            }
        }
        //Responsivité taille - de 710px
        if(window.matchMedia("(max-width:710px)").matches){
            const body = document.querySelector("body")
            const logo = document.querySelector(".logo")
            const ul = document.querySelector(".rectangle ul")
            const li = document.querySelectorAll(".rectangle ul li")
            body.style.marginLeft = "10px"
            body.style.marginRight = "10px"
            logo.style.maxWidth = "100%"
            logo.style.minWidth = "340px"
            if(ustensilesChevronUp.classList.value == "fa-solid fa-chevron-up" || appareilsChevronUp.classList.value == "fa-solid fa-chevron-up" || ingredientsChevronUp.classList.value == "fa-solid fa-chevron-up"){
                li.forEach((newLi)=>{
                    newLi.style.width="100%"
                })
                if(ul){
                ul.setAttribute("flex-direction","column")
                ul.style.overflow = "auto"
                ul.style.height="320px"
                }
            }
            loop.style.right="40px"
        }
        //Responsivité taille - de 710px et all filtres closes
        if(window.matchMedia("(max-width:710px)").matches &&  ustensilesChevronUp.classList.value == "fa-solid fa-chevron-down" && appareilsChevronUp.classList.value == "fa-solid fa-chevron-down" && ingredientsChevronUp.classList.value == "fa-solid fa-chevron-down"){
            divAppareils.style.display ="block"
            divUstensiles.style.display ="block"
            divIngredients.style.display ="block"
        }
    }
    //déclencheurs d'event
    window.addEventListener("resize",()=>{resize()})
    ustensilesChevronUp.addEventListener("click",()=>{resize()})
    ingredientsChevronUp.addEventListener("click",()=>{resize()})
    appareilsChevronUp.addEventListener("click",()=>{resize()})
}

mediaQuery()