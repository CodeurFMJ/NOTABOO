
export interface ServiceDetail {
  title: string;
  items: string[];
}
export interface Service {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  cta: string;
  icon: 'camera' | 'video' | 'sound' | 'strategy';
  details: ServiceDetail[];
}

export interface WhyUsPoint {
  title: string;
  description: string;
}

export interface InMurosDetail {
    label: string;
    value?: string;
}

export interface InMurosTabContent {
    title: string;
    subtitle: string;
    details: InMurosDetail[];
    usageTitle: string;
    usageText?: string;
}

export interface NewsArticle {
    id: string;
    title: string;
    category: string;
    imageSeed: string;
}

export interface Content {
  services: Service[];
  whyUs: {
    points: WhyUsPoint[];
    clients: string[];
  };
  inMuros: Record<'plateau' | 'studio' | 'event', InMurosTabContent>;
  news: NewsArticle[];
}


export const defaultContent: Content = {
  services: [
    {
      id: "imagerie",
      number: "01",
      title: "Imagerie",
      subtitle: "Photographie éditoriale & publicitaire qui raconte plus qu'elle ne montre.",
      description: "Au-delà du clic, nous capturons ces intervalles de magie entre intention et émotion. Chaque shooting est pensé comme une narration visuelle où votre produit, votre équipe ou votre espace deviennent personnages d'une histoire mémorable.",
      cta: "VOIR LE PORTFOLIO PHOTO",
      icon: "camera",
      details: [
        { title: "Applications", items: ["Campagnes pub", "Reportage corporate", "Portraits institutionnels", "Lookbooks", "Couverture événementielle"] },
        { title: "Livrables", items: ["RAW + retouches premium", "Formats multi-supports (print/web/social)", "Direction artistique complète"] }
      ]
    },
    {
      id: "videographie",
      number: "02",
      title: "Vidéographie",
      subtitle: "Du brand content aux récits documentaires, une approche cinématographique du réel.",
      description: "Une vidéo réussie ne se mesure pas en vues, mais en ce qu'elle transforme chez votre audience. Nous maîtrisons tous les formats — du spot TV 30\" au mini-documentaire 8 minutes — avec la même exigence narrative et visuelle.",
      cta: "VOIR LA SHOWREEL",
      icon: "video",
      details: [
        { title: "Formats", items: ["Publicité TV & web", "Films institutionnels", "Vidéos produits", "Mini-documentaires", "Capsules réseaux sociaux", "Émissions & contenus longs"] }
      ]
    },
    {
      id: "sound-branding",
      number: "03",
      title: "Sound Branding",
      subtitle: "L'identité sonore au cœur des stratégies de marques.",
      description: "Qu'on se souvienne de vous parmi des milliers : c'est l'objectif premier de toute prise de parole. Le Sound Branding vous y fait arriver à travers une signature audio unique qui traverse tous vos points de contact.",
      cta: "ÉCOUTER NOS CRÉATIONS",
      icon: "sound",
      details: [
        { title: "Livrables", items: ["Logo sonore (3-5 secondes)", "Palette musicale de marque", "Habillage sonore (intro/outro/transition)", "Adaptation multi-formats"] },
        { title: "Durée de vie", items: ["5 à 10 ans minimum"] }
      ]
    },
    {
      id: "strategie",
      number: "04",
      title: "Stratégie de Contenu",
      subtitle: "Parce qu'une production sans vision reste une dépense.",
      description: "Nous ne livrons pas que des fichiers. Nous co-construisons votre stratégie éditoriale pour maximiser l'impact de chaque euro investi en production.",
      cta: "DEMANDER UN AUDIT GRATUIT",
      icon: "strategy",
      details: [
        { title: "Accompagnement", items: ["Audit de votre présence actuelle", "Définition ligne éditoriale", "Calendrier de production trimestriel", "KPIs & reporting"] }
      ]
    }
  ],
  whyUs: {
    points: [
      { title: "Double expertise média + studio", description: "Notre production éditoriale quotidienne aiguise notre œil créatif. Chaque projet client bénéficie de cette exigence narrative." },
      { title: "Ancrage culturel authentique", description: "Nous ne plaquons pas de folklore. Nous documentons les cultures urbaines africaines depuis 5 ans. Nous savons ce qui résonne vraiment." },
      { title: "Infrastructure premium", description: "Plateau modulable 120m², studio son isolé, parc matériel 4K, équipe permanente de 8 créatifs." },
      { title: "Processus éprouvé", description: "Brief → Concept → Validation → Production → Livraison → Amplification. Délais respectés, budgets maîtrisés." }
    ],
    clients: ["Orange Cameroun", "MTN", "Canal+", "Ministère de la Culture"]
  },
  inMuros: {
    plateau: {
      title: "Plateau de Tournage",
      subtitle: "Un espace modulable pour des productions mémorables.",
      details: [
        { label: "Configuration", value: "120m² transformables" },
        { label: "Hauteur", value: "4,5m (idéal pour grues)" },
        { label: "Fonds", value: "Cyclo blanc, noir, vert (chromakey)" },
        { label: "Équipements", value: "Éclairage LED, audio monitoring, fibre 500Mbps" },
      ],
      usageTitle: "Usages",
      usageText: "Tournages clips musicaux, Podcasts vidéo, Émissions TV/web, Vidéos corporate, Shootings produits, Sessions e-learning."
    },
    studio: {
      title: "Studio d'Enregistrement",
      subtitle: "Acoustique premium pour artistes exigeants.",
      details: [
        { label: "Isolation phonique", value: "40dB optimale" },
        { label: "Cabine de prise", value: "15m²" },
        { label: "Régie", value: "ProTools/Logic Pro" },
        { label: "Micros", value: "Neumann, AKG, Shure" },
      ],
      usageTitle: "Pour qui",
      usageText: "Artistes musiciens & chanteurs, Comédiens voix-off, Podcasteurs audio, Productions radio."
    },
    event: {
      title: "Espace Modulable",
      subtitle: "IN MUROS se transforme selon vos besoins événementiels et professionnels.",
      details: [
        { label: "Conférences de presse (capacité 50 personnes)" },
        { label: "Lancements de campagne / Kick-offs" },
        { label: "Espace de coworking créatif" },
        { label: "Concerts privés / Showcases (jauge 80 personnes)" },
        { label: "Masterclasses & formations" },
      ],
      usageTitle: "Configurations possibles",
    }
  },
  news: [
    { id: "news1", title: "Nouvelle technique de color grading", category: "Innovation", imageSeed: "news1"},
    { id: "news2", title: "Collaboration avec l'artiste Y", category: "Nos collaborations", imageSeed: "news2"},
    { id: "news3", title: "Recap culturel de Douala - Juin", category: "On y était", imageSeed: "news3"},
  ]
};
