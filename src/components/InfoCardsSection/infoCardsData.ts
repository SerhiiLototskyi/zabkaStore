export type InfoCard = {
    id: string
    title: string
    description: string
    image?: string
    imageAlt: string
}
export type AppPromo = {
    title: string
    description: string
    phoneImage?: string
    phoneImageAlt: string
    googlePlayImage?: string
    appStoreImage?: string
}
// Примеры:
 import convenientImg from './infoSectionImg/Wygodnie.avif'
import saveImg from './infoSectionImg/Oszcednie.avif'
import fastImg from './infoSectionImg/szybko.avif'
import phonePromoImg from './infoSectionImg/mobile-app-image.avif'
import googlePlayBadge from './infoSectionImg/googleplay.png'
import appStoreBadge from './infoSectionImg/aplestore.png'

export const infoCards: InfoCard[] = [
    {
        id: '1',
        title: 'Wygodnie',
        description: 'Rób zakupy na stronie albo w aplikacji Żabka Jush',
        image: convenientImg,
        imageAlt: 'Wygodne zakupy',
    },
    {
        id: '2',
        title: 'Oszczędnie',
        description: 'Oszczędzaj z codziennymi promocjami i kuponami',
        image: saveImg,
        imageAlt: 'Oszczędzanie z promocjami',
    },
    {
        id: '3',
        title: 'Szybko',
        description: 'Dowozimy przez cały tydzień, między 7 a 23',
        image: fastImg,
        imageAlt: 'Szybka dostawa',
    },
]

export const appPromo: AppPromo = {
    title: 'Rób wygodne zakupy z delio w aplikacji Żabka Jush!!',
    description:
        'Pobierz ją teraz i zamawiaj codzienne produkty z dostawą tego samego dnia.',
    phoneImage: phonePromoImg,
    phoneImageAlt: 'Aplikacja Żabka Jush i delio',
     googlePlayImage: googlePlayBadge,
     appStoreImage: appStoreBadge,
}