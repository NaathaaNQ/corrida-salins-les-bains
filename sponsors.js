/* =====================================================================
   PARTENAIRES DE LA CORRIDA NOCTURNE DE SALINS-LES-BAINS

   C'est le seul endroit à modifier pour gérer les partenaires : la
   section « Partenaires » et la bande du pied de page se construisent
   automatiquement à partir de cette liste, dans cet ordre.

   Ajouter un partenaire :
     1. déposer son logo dans le dossier images/sponsors/
     2. copier un bloc { ... } ci-dessous et remplir ses champs
   Retirer un partenaire : supprimer son bloc.

   Les champs :
     nom      nom du partenaire, affiché sous le logo
     de       fin de la phrase lue aux lecteurs d'écran :
              « Visiter le site » + de  (ex. « de Décathlon »)
     url      adresse du site, ouverte dans un nouvel onglet
     logo     chemin du fichier logo
     largeur  largeur du fichier logo, en pixels
     hauteur  hauteur du fichier logo, en pixels
     fond     couleur de fond du logo, reprise par sa vignette
   ===================================================================== */
window.SPONSORS = [
  {
    nom: "Thermes de Salins",
    de: "des Thermes de Salins",
    url: "https://www.thermes-salins.com",
    logo: "images/sponsors/thermes-salins.webp",
    largeur: 480, hauteur: 147,
    fond: "#ffffff"
  },
  {
    nom: "Cap Seuil",
    de: "de Cap Seuil",
    url: "https://www.instagram.com/capseuil/",
    logo: "images/sponsors/cap-seuil.webp",
    largeur: 329, hauteur: 171,
    fond: "#000000"
  },
  {
    nom: "Marguerite Social Ads",
    de: "de Marguerite Social Ads",
    url: "https://www.margueritesocialads.com",
    logo: "images/sponsors/marguerite-social-ads.webp",
    largeur: 262, hauteur: 256,
    fond: "#ffffff"
  },
  {
    nom: "Mairie de Salins-les-Bains",
    de: "de la Mairie de Salins-les-Bains",
    url: "https://www.mairie-salinslesbains.fr",
    logo: "images/sponsors/mairie-salins-les-bains.webp",
    largeur: 420, hauteur: 480,
    fond: "#ffffff"
  },
  {
    nom: "Décathlon",
    de: "de Décathlon",
    url: "https://www.decathlon.fr",
    logo: "images/sponsors/decathlon.webp",
    largeur: 480, hauteur: 79,
    fond: "#000000"
  },
  {
    nom: "Charmabris",
    de: "de Charmabris",
    url: "https://www.charmabris.fr",
    logo: "images/sponsors/charmabris.webp",
    largeur: 313, hauteur: 188,
    fond: "#ffffff"
  },
  {
    nom: "Le Sensso",
    de: "du Sensso",
    url: "https://www.le-sensso.fr",
    logo: "images/sponsors/le-sensso.webp",
    largeur: 480, hauteur: 357,
    fond: "#000000"
  }
];
