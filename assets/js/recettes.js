//Nous allons cibler les contenus de la recette
const container = document.querySelector(".recette-grid");



//Boucle pour injecter les recettes dans le container 

// tableau d’objets recettes
const recettes = [
    {
      id: 1,
      titre: "Tarte aux pommes",
      description: "Une délicieuse tarte faite maison.",
      image: "assets/image/tarte-aux-pommes.jpg",
      alt: "Tarte aux pommes",
      date: new Date().toLocaleString(),
    },
    {
      id: 2,
      titre: "Gratin dauphinois",
      description: "Un classique de la cuisine française.",
      image: "assets/image/tarte-aux-pommes.jpg",
      alt: "Gratin dauphinois",
      date: new Date().toLocaleString(),
    },
    {
      id: 3,
      titre: "Crêpes sucrées",
      description: "Des crêpes légères et savoureuses.",
      image: "assets/image/tarte-aux-pommes.jpg",
      alt: "Crêpes sucrées",
      date: new Date().toLocaleString(),
    },
    {
      id: 4,
      titre: "Soupe à l'oignon",
      description: "Une soupe traditionnelle gratinée au four.",
      image: "assets/image/tarte-aux-pommes.jpg",
      alt: "Soupe à l'oignon",
      date: new Date().toLocaleString(),
    },
    {
      id: 5,
      titre: "Boeuf bourguignon",
      description: "Un plat mijoté plein de saveurs.",
      image: "assets/image/tarte-aux-pommes.jpg",
      alt: "Boeuf bourguignon",
      date: new Date().toLocaleString(),
    },
    {
      id: 6,
      titre: "Ratatouille",
      description: "Des légumes du soleil cuits à la perfection.",
      image: "assets/image/tarte-aux-pommes.jpg",
      alt: "Ratatouille",
      date: new Date().toLocaleString(),
    },
    {
      id: 7,
      titre: "Tarte au citron",
      description: "Une tarte acidulée avec une meringue légère.",
      image: "assets/image/tarte-aux-pommes.jpg",
      alt: "Tarte au citron",
      date: new Date().toLocaleString(),
    },
    {
      id: 8,
      titre: "Mousse au chocolat",
      description: "Une mousse onctueuse au chocolat noir.",
      image: "assets/image/tarte-aux-pommes.jpg",
      alt: "Mousse au chocolat",
      date: new Date().toLocaleString(),
    },
    {
      id: 9,
      titre: "Quiche lorraine",
      description: "Une quiche classique au lard et fromage.",
      image: "assets/image/tarte-aux-pommes.jpg",
      alt: "Quiche lorraine",
      date: new Date().toLocaleString(),
    },
    {
      id: 10,
      titre: "Salade niçoise",
      description: "Une salade fraîche avec des légumes du sud.",
      image: "assets/image/tarte-aux-pommes.jpg",
      alt: "Salade niçoise",
      date: new Date().toLocaleString(),
    },
    {
      id: 11,
      titre: "Poulet basquaise",
      description: "Un plat aux saveurs du Pays basque.",
      image: "assets/image/tarte-aux-pommes.jpg",
      alt: "Poulet basquaise",
      date: new Date().toLocaleString(),
    },
    {
      id: 12,
      titre: "Tajine de poulet",
      description: "Un plat marocain aux épices douces.",
      image: "assets/image/tarte-aux-pommes.jpg",
      alt: "Tajine de poulet",
      date: new Date().toLocaleString(),
    },

]
recettes.forEach(recette=> {
  const carte = document.createElement("div");
  carte.classList.add("carte");
  carte.innerHTML = `
    <img src="${recette.image}" alt="${recette.alt}" />
    <h4>${recette.titre}</h4>
    <p> ${recette.description.slice(0,60)}...</p>
    <p>${recette.date}</p>
  `;
  container.appendChild(carte);
});