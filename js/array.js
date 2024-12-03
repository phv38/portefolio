const produits = [
    { titre: "Produit A", prix: 19.99, description: "Un excellent produit pour commencer." },
    { titre: "Produit B", prix: 29.99, description: "Un produit de qualité pour les amateurs." },
    { titre: "Produit C", prix: 39.99, description: "Idéal pour les professionnels." },
    { titre: "Produit D", prix: 49.99, description: "Un produit haut de gamme pour les connaisseurs." },
    { titre: "Produit E", prix: 59.99, description: "Le top du top pour les experts." }
  ];

  const listedupanier = document.getElementById("listedupanier");
  produits.forEach(produit => {
    // Crée une div de type "card" pour chaque produit
    const cardHTML = `
            <div class="col-lg-4 mb-2">
            <div class="blog__item latest__item">
                <h4>What Makes Users Want to Share a Video on Social Media?</h4>
                <ul>
                    <li>Jan 03, 2020</li>
                    <li>05 Comment</li>
                </ul>
                <p>We recently launched a new website for a Vital client and wanted to share some of the
                    cool features we were able...</p>
                <a href="#">Read more <span class="arrow_right"></span></a>
            </div>
            </div>
 `;


  // Ajoute la carte dans le conteneur "listedupanier"
  listedupanier.insertAdjacentHTML("beforeend", cardHTML);
});







  