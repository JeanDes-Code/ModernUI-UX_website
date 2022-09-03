import {
    people01,
    people02,
    people03,
    facebook,
    instagram,
    linkedin,
    twitter,
    airbnb,
    binance,
    coinbase,
    dropbox,
    send,
    shield,
    star,
} from '../assets'

export const navLinks = [
    {
        id: 'home',
        title: 'Accueil',
    },
    {
        id: 'features',
        title: 'Avantages',
    },
    {
        id: 'product',
        title: 'Produit',
    },
    {
        id: 'clients',
        title: 'Clients',
    },
]

export const features = [
    {
        id: 'feature-1',
        icon: star,
        title: 'Récompense',
        content:
            'Les meilleures cartes de crédit offrent de nombreuses promotions et réductions de prix.',
    },
    {
        id: 'feature-2',
        icon: shield,
        title: '100% Securisé',
        content:
            'Nous prenons des mesures proactives pour garantir la sécurité de vos informations et de vos transactions.',
    },
    {
        id: 'feature-3',
        icon: send,
        title: 'Transfert de Solde',
        content:
            "Une carte de crédit avec transfert de solde peut vous faire économiser beaucoup d'argent en frais d'intérêt.",
    },
]

export const feedback = [
    {
        id: 'feedback-1',
        content:
            "L'argent n'est qu'un outil. Il vous emmènera où vous le souhaitez, mais il ne vous remplacera pas en tant que décideur.",
        name: 'Herman Jensen',
        title: 'Fondateur et dirigeant',
        img: people01,
    },
    {
        id: 'feedback-2',
        content:
            "L'argent rend votre vie plus facile. Si vous avez la chance d'en avoir, vous avez de la chance.",
        name: 'Steve Mark',
        title: 'Fondateur et dirigeant',
        img: people02,
    },
    {
        id: 'feedback-3',
        content:
            "Ce sont généralement les personnes travaillant dans le domaine de l'argent, de la finance et du commerce international qui sont vraiment riches.",
        name: 'Kenn Gallagher',
        title: 'Fondateur et dirigeant',
        img: people03,
    },
]

export const stats = [
    {
        id: 'stats-1',
        title: 'Utilisateurs actifs',
        value: '3800+',
    },
    {
        id: 'stats-2',
        title: 'Entreprises partenaires',
        value: '230+',
    },
    {
        id: 'stats-3',
        title: 'Transaction',
        value: '+ 230M €',
    },
]

export const footerLinks = [
    {
        title: 'Liens Utiles',
        links: [
            {
                name: 'Contenu',
                link: 'https://www.hoobank.com/content/',
            },
            {
                name: 'Comment ça marche',
                link: 'https://www.hoobank.com/how-it-works/',
            },
            {
                name: 'Créer',
                link: 'https://www.hoobank.com/create/',
            },
            {
                name: 'Explorer',
                link: 'https://www.hoobank.com/explore/',
            },
            {
                name: "Conditions d'utilisation",
                link: 'https://www.hoobank.com/terms-and-services/',
            },
        ],
    },
    {
        title: 'Communauté',
        links: [
            {
                name: "Centre d'Aide",
                link: 'https://www.hoobank.com/help-center/',
            },
            {
                name: 'Partenaires',
                link: 'https://www.hoobank.com/partners/',
            },
            {
                name: 'Suggestions',
                link: 'https://www.hoobank.com/suggestions/',
            },
            {
                name: 'Blog',
                link: 'https://www.hoobank.com/blog/',
            },
            {
                name: 'Newsletters',
                link: 'https://www.hoobank.com/newsletters/',
            },
        ],
    },
    {
        title: 'Partenaires',
        links: [
            {
                name: 'Nos Partenaires',
                link: 'https://www.hoobank.com/our-partner/',
            },
            {
                name: 'Devenir un partenaire',
                link: 'https://www.hoobank.com/become-a-partner/',
            },
        ],
    },
]

export const socialMedia = [
    {
        id: 'social-media-1',
        icon: instagram,
        link: 'https://www.instagram.com/',
    },
    {
        id: 'social-media-2',
        icon: facebook,
        link: 'https://www.facebook.com/',
    },
    {
        id: 'social-media-3',
        icon: twitter,
        link: 'https://www.twitter.com/',
    },
    {
        id: 'social-media-4',
        icon: linkedin,
        link: 'https://www.linkedin.com/',
    },
]

export const clients = [
    {
        id: 'client-1',
        logo: airbnb,
    },
    {
        id: 'client-2',
        logo: binance,
    },
    {
        id: 'client-3',
        logo: coinbase,
    },
    {
        id: 'client-4',
        logo: dropbox,
    },
]
