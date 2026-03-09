// Import des logos et images
import metaLogo from "../images/meta-logo.svg";
import ciscoLogo from "../images/cisco-logo.svg";
import alisonLogo from "../images/alison-logo.svg";
import hpLifeLogo from "../images/hp-life.svg";
import ciscoNetworkingAcademyLogo from "../images/cisco-networking-academy.svg";
import introHtmlImg from "../images/intro html.jpg";
import ciscoImg from "../images/cisco.png";
import mpnImg from "../images/mpn.png";
import hpBusinessImg from "../images/hp-starting-small-business.png";
import ciscoCybersecurityImg from "../images/cisco-introduction-cybersecurity.png";

export const certifications = [
  {
    id: 1,
    title: "Certification Technique : Architecture et Langage HTML",
    issuer: "Meta",
    date: "24 mars 2025",
    logo: metaLogo,
    image: introHtmlImg, // Placeholder/Representative image
    summary:
      "Récemment certifié en Introduction à HTML par la plateforme Sololearn, j'ai consolidé mes bases en développement web en maîtrisant la structure fondamentale des sites internet. Ce parcours m'a permis d'acquérir une compréhension théorique et pratique de l'architecture des pages web, de la gestion des balises sémantiques aux formulaires complexes. Cette étape marque mon engagement à concevoir des interfaces web solides et conformes aux standards actuels du numérique.",
    link: "#",
    details: {
      skills: [
        "Développement Core : HTML5 & CSS3 Avancé (sémantique, accessibilité, responsive design).",
        "Outils & Design : Versioning via Git, principes fondamentaux d'UX/UI Design.",
        "UX/UI Design Principles",
        "HTML5 & CSS3 Advanced",
      ],
      projects: [
        {
          title: "Little Lemon Restaurant App",
          description:
            "Développement d'une application complète de réservation. Mise en œuvre d'une gestion d'état robuste et de validations de formulaires complexes pour garantir une expérience utilisateur fluide.",
        },
        {
          title: "Portfolio Personnel",
          description:
            "Conception, design et déploiement d'un site vitrine entièrement responsive, servant de vitrine à mes réalisations techniques.",
        },
      ],
    },
  },
  {
    id: 2,
    title:
      "Certificat de fin de formation délivré par Cisco Networking Academy",
    issuer: "Cisco Networking Academy",
    date: "2023",
    logo: ciscoLogo,
    image: ciscoImg, // AWS CP Badge
    summary:
      "Cette Certificat de fin de formation délivré par Cisco Networking Academy attestant de la réussite du cours CCNA : Introduction to Networks. Cette formation couvre les bases essentielles des réseaux informatiques, incluant le fonctionnement des réseaux locaux et distants, les protocoles, l’adressage IP et les bonnes pratiques de sécurité. Délivré le 30 avril 2025.",
    link: "#",
    details: {
      skills: [
        "Configuration de switches et d’équipements terminaux pour l’accès aux ressources réseau locales et distantes",
        "Compréhension des protocoles des couches physique et liaison de données (Ethernet)",
        "Configuration de routeurs pour assurer la connectivité entre réseaux distants",
        "Mise en place et vérification de l’adressage IPv4 et IPv6",
        "Compréhension du modèle OSI et du rôle des couches supérieures dans les applications réseau ",
        "Application des bonnes pratiques de sécurité dans un petit réseau",
        "Diagnostic et dépannage des problèmes de connectivité réseau",
      ],
      projects: [
        {
          title: "LAN",
          description:
            "Configuration de réseaux locaux (LAN) avec switches et routeurs.",
        },
        {
          title: "IPv4 et IPv6",
          description:
            "Mise en place et schémas vérification de l’adressage IPv4 et IPv6.",
        },
        {
          title: "Tests de connectivité entre différents équipements réseau",
          description:
            "Réalisation de tests visant à vérifier la communication entre plusieurs équipements réseau (PC, switches, routeurs) à l’aide d’outils et de commandes réseau. Ces tests permettent de s’assurer du bon fonctionnement des configurations IP, du routage et de l’accès aux ressources réseau.",
        },
        {
          title:
            "Simulations et résolution de pannes réseau dans un environnement contrôlé",
          description:
            "Mise en situation de pannes réseau simulées afin d’identifier les causes des dysfonctionnements et d’appliquer des solutions adaptées. Cette activité développe les compétences en diagnostic, dépannage et maintenance de réseaux dans un environnement sécurisé et pédagogique.",
        },
      ],
    },
  },
  {
    id: 3,
    title: "Digital Product Management en cours",
    issuer: "Alison",
    date: "2025",
    logo: alisonLogo,
    image: mpnImg, // Placeholder/Representative image
    summary:
      "Certification attestant des compétences fondamentales en gestion de produits digitaux, couvrant le cycle de vie produit, la stratégie, la collaboration avec les parties prenantes et l’orientation utilisateur.",
    link: "#",
    details: {
      skills: [
        "Product Lifecycle Management",
        "Digital Product Strategy",
        "User-Centered Design",
        "Market & Requirement Analysis",
        "Stakeholder Collaboration",
        "Product Planning & Prioritization",
      ],
      projects: [
        {
          title: "Digital Product Concept Development",
          description:
            "Analyse des besoins utilisateurs et définition des fonctionnalités clés d’un produit digital.",
        },
        {
          title: "Product Strategy Simulation",
          description:
            "Élaboration d’une feuille de route produit incluant objectifs, priorités et indicateurs de performance.",
        },
      ],
    },
  },
  {
    id: 4,
    title: "Création d'une Petite Entreprise",
    issuer: "HP LIFE / HP Foundation",
    date: "2025",
    logo: hpLifeLogo,
    image: hpBusinessImg, // Image représentative du certificat
    summary:
      "Certification attestant de l’acquisition des compétences fondamentales en entrepreneuriat, notamment la création d’une entreprise, l’élaboration d’un business plan et le développement d’indicateurs pour mesurer la performance et le succès d’un projet entrepreneurial.",
    link: "#",
    details: {
      skills: [
        "Esprit entrepreneurial",
        "Création de petite entreprise",
        "Élaboration de business plan",
        "Indicateurs de performance (KPI)",
        "Planification stratégique",
        "Fondamentaux de la gestion d’entreprise",
      ],
      projects: [
        {
          title: "Développement d’une idée de business",
          description:
            "Utilisation de la pensée entrepreneuriale pour identifier une opportunité de marché et définir une proposition de valeur claire.",
        },
        {
          title: "Création d’un business plan",
          description:
            "Conception d’un business plan structuré intégrant objectifs, stratégie, ressources et indicateurs de réussite.",
        },
      ],
    },
  },
  {
    id: 5,
    title: "Introduction à la Cybersécurité",
    issuer: "Cisco Networking Academy",
    date: "2025",
    logo: ciscoNetworkingAcademyLogo,
    image: ciscoCybersecurityImg, // Image représentative du certificat
    summary:
      "Certification attestant de la compréhension des concepts fondamentaux de la cybersécurité, incluant la sécurité en ligne, les menaces et attaques courantes, ainsi que les bonnes pratiques de protection des systèmes et des données.",
    link: "#",
    details: {
      skills: [
        "Fondamentaux de la cybersécurité",
        "Sécurité en ligne et protection des données",
        "Identification des menaces et vulnérabilités",
        "Sensibilisation aux cyberattaques",
        "Protection des systèmes et des utilisateurs",
        "Découverte des métiers de la cybersécurité",
      ],
      projects: [
        {
          title: "Analyse des menaces cyber courantes",
          description:
            "Identification et compréhension des principales menaces, attaques et vulnérabilités affectant les utilisateurs et les organisations.",
        },
        {
          title: "Bonnes pratiques de sécurité en ligne",
          description:
            "Application de mesures de protection pour sécuriser les activités en ligne et réduire les risques liés aux cyberattaques.",
        },
      ],
    },
  },
];
