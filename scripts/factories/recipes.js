function recipesFactory(data){
    const{ id, name, servings, ingredients, time, description, ustensils } = data
    const card = document.createElement("div")
    const card_photo = document.createElement("div")
    const card_info = document.createElement("div")
    const card_titre = document.createElement("div")
    const card_nom = document.createElement("div")
    const card_duree = document.createElement("div")
    const card_recette = document.createElement("div")
    const card_ingredients = document.createElement("div")
    const card_instructions = document.createElement("div")
    const em = document.createElement("em")
    const p = document.createElement("p")
    const pDuree = document.createElement("p")
    const ul = document.createElement("ul")
    card.setAttribute("class","card")
    card_photo.setAttribute("class","card_photo")
    card_info.setAttribute("class","info")
    card_titre.setAttribute("class","card_titre")
    card_nom.setAttribute("class","card_nom")
    card_duree.setAttribute("class","card_duree")
    card_recette.setAttribute("class","card_recette")
    card_ingredients.setAttribute("class","card_ingredients")
    card_instructions.setAttribute("class","card_instructions")
    card.appendChild(card_photo)
    card.appendChild(card_info)
    card_info.appendChild(card_titre)
    card_titre.appendChild(card_nom)
    card_nom.textContent =`${name}`
    card_titre.appendChild(card_duree)
    card_duree.appendChild(em)
    em.setAttribute("class","fa-regular fa-clock")
    card_duree.appendChild(pDuree)
    pDuree.textContent =`${time} min`
    card_info.appendChild(card_recette)
    card_recette.appendChild(card_ingredients)
    card_ingredients.appendChild(ul)
    for(i=0; i<ingredients.length; i++){
        ul.innerHTML += `<li>${ingredients[i].ingredient}</li>`
    }
    card_recette.appendChild(card_instructions)
    card_instructions.appendChild(p)
    p.textContent =`${description}`
    return (card)
}
