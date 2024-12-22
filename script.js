const parfums = [
    { name: "Parfums originaux", image: "./assets/images/original.avif" },
    { name: "Extraits de parfum ", image: "./assets/images/extrait.avif" },
    { name: "Produits cosmétiques", image: "./assets/images/cosme.avif" },
    { name: "Coffrets cadeaux personnalisables", image: "./assets/images/cadeaux.avif" },
    { name: "Bouteilles de parfum vides", image: "./assets/images/vide.avif" },
  
  ];
  
  const catalogueGrid = document.querySelector(".catalogue-grid");
  
  parfums.forEach((parfum) => {
    const parfumDiv = document.createElement("div");
    parfumDiv.classList.add("catalogue-item");
    parfumDiv.innerHTML = `
      <img src="${parfum.image}" alt="${parfum.name}">
      <h3>${parfum.name}</h3>
    `;
    catalogueGrid.appendChild(parfumDiv);
  });

// Récupérer les éléments nécessaires
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav');
const navLinks = document.querySelectorAll('.nav-links a');

// Ajouter un événement au clic sur le bouton burger
menuToggle.addEventListener('click', () => {
  nav.classList.toggle('active'); // Ouvre/ferme le menu en ajoutant/supprimant la classe 'active'
});

// Ajouter un événement de fermeture du menu quand un lien est cliqué
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('active'); // Ferme le menu lorsqu'un lien est cliqué
  });
});

// Ajouter un événement de fermeture du menu si l'on clique en dehors de celui-ci
document.addEventListener('click', (e) => {
  if (!nav.contains(e.target) && !menuToggle.contains(e.target)) {
    nav.classList.remove('active'); // Ferme le menu si l'utilisateur clique en dehors
  }
});

  
