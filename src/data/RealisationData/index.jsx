import ccca from '../../assets/realisation/chambre.jpg' // Chambre de Commerce Canada-Afrique
import ifpf from '../../assets/realisation/centre.jpg' // Institut de Formation Professionnelle Franchise
import fp from '../../assets/realisation/fp.jpg' // Faro Passo - Salon de coiffure
import impulsion from '../../assets/realisation/impulsion.jpg' // Impulsion - Institut de Massothérapie
import ngk from '../../assets/realisation/ngk.jpg' // NGK Service Pro
import fab from '../../assets/realisation/fab.jpg' // Institut Africain de Bioéthique

export const projets = [
  {
    id: 1,
    titre: "Chambre de Commerce Canada-Afrique",
    description:
      "Le Conseil Canadien pour l’Afrique (CCAfrique) est une organisation pancanadienne qui promeut les relations économiques durables entre le Canada et l’Afrique à travers le commerce, l’investissement et la collaboration institutionnelle.",
    image: ccca,
    type: "Institution",
    lien: "http://cc-ca.ca/",
  },
  {
    id: 2,
    titre: "Institut de Formation Franchise (IFPF)",
    description:
      "L'Institut de Formation Professionnelle Franchise propose des formations adaptées aux besoins du marché, visant à renforcer l’employabilité et à soutenir l’initiative entrepreneuriale locale.",
    image: ifpf,
    type: "Éducation",
    lien: "https://ifpfranchise.com",
  },
  {
    id: 3,
    titre: "Faro Passo",
    description:
      "Faro Passo est un salon de coiffure moderne qui offre des prestations haut de gamme en coiffure et soins capillaires, avec un accent particulier sur le style, l’expertise et le confort.",
    image: fp,
    type: "Beauté",
    lien: "https://salonfaropasso.ca",
  },
  {
    id: 4,
    titre: "Impulsion",
    description:
      "Impulsion est un institut de massothérapie spécialisé dans le bien-être corporel et mental à travers des techniques professionnelles de relaxation et de soin thérapeutique.",
    image: impulsion,
    type: "Santé & Bien-être",
    lien: "",
  },
  {
    id: 5,
    titre: "NGK Service Pro",
    description:
      "NGK Service Pro accompagne les entreprises dans leurs projets d’expansion à l’international grâce à des services d’ingénierie d’affaires et de représentation stratégique.",
    image: ngk,
    type: "Services aux entreprises",
    lien: "https://NGK-entreprise.com",
  },
  {
    id: 6,
    titre: "Institut Africain de Bioéthique (IAB)",
    description:
      "L'IAB est un centre de recherche et de formation dédié à la bioéthique en Afrique, visant à intégrer les valeurs éthiques dans les pratiques médicales, la recherche scientifique et les politiques de santé.",
    image: fab,
    type: "Recherche",
    lien: "https://iab-aib.org",
  },
];
