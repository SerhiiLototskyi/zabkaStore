export type ProductCarousel = {
    id: string
    name: string
    price: number
    oldPrice?: number
    discountPercent?: number
    image: string
}
import masloImg from './productsImg/maslo.avif'
import kiwiImg from './productsImg/kiwi.avif'
import avocadoImg from './productsImg/avokado.avif'
import milkImg from './productsImg/mleko.avif'
import tomatoesImg from './productsImg/pomidor.avif'
import mandarinsImg from './productsImg/mandarynka.avif'
import pomaranczeImg from './productsImg/pomarancze.avif'
import tomatoesMalinaImg from './productsImg/pomidory-malinowe.avif'
import Parówki  from './productsImg/Parówki.avif'
import Kinder   from './productsImg/Kinder.avif'
import Skyr   from './productsImg/Skyr.avif'
import Piątnica   from './productsImg/Piątnica.avif'

export const favoriteProducts: ProductCarousel[] = [
    {
        id: '1',
        name: 'Masło Polskie extra',
        price: 5.69,
        oldPrice: 5.89,
        discountPercent: 3,
        image: masloImg,
    },
    {
        id: '2',
        name: 'Kiwi',
        price: 2.19,
        image: kiwiImg,
    },
    {
        id: '3',
        name: 'Awokado dojrzałe',
        price: 6.19,
        oldPrice: 6.39,
        discountPercent: 3,
        image: avocadoImg,
    },
    {
        id: '4',
        name: 'Piątnica mleko ekologiczne 3,9%',
        price: 6.49,
        oldPrice: 7.29,
        discountPercent: 10,
        image: milkImg,
    },
    {
        id: '5',
        name: 'Pomidorki daktylowe "shake"',
        price: 6.79,
        oldPrice: 7.99,
        discountPercent: 15,
        image: tomatoesImg,
    },
    {
        id: '6',
        name: 'Mandarynka',
        price: 5.99,
        image: mandarinsImg,
    },
    {
        id: '7',
        name: 'Pomarańcze deserowe',
        price: 8.49,
        image: pomaranczeImg,
    },
    {
        id: '8',
        name: 'Pomidory malinowe krajowe',
        price: 8.99,
        oldPrice: 9.99,
        discountPercent: 10,
        image: tomatoesMalinaImg,
    },
]
export const chiperProducts: ProductCarousel[] = [
    {
        id: '1',
        name: 'Parówki Berlinki',
        price: 4.39,
        oldPrice: 4.49,
        discountPercent: 10,
        image: Parówki,
    },
    {
        id: '2',
        name: 'Kinder Maxi King wafel mleczny',
        price: 3.59,
        image: Kinder,
    },
    {
        id: '3',
        name: 'Piątnica Skyr jogurt typu islandzkiego waniliowy',
        price: 2.89,
        oldPrice: 3.29,
        discountPercent: 3,
        image: avocadoImg,
    },
    {
        id: '4',
        name: 'Piątnica mleko ekologiczne 3,9%',
        price: 6.49,
        oldPrice: 7.29,
        discountPercent: 10,
        image: Skyr,
    },
    {
        id: '5',
        name: 'Piątnica serek wiejski',
        price: 2.49,
        oldPrice: 2.79,
        discountPercent: 5,
        image: Piątnica,
    },
    {
        id: '6',
        name: 'Mandarynka',
        price: 5.99,
        image: mandarinsImg,
    },
    {
        id: '7',
        name: 'Pomarańcze deserowe',
        price: 8.49,
        image: pomaranczeImg,
    },
    {
        id: '8',
        name: 'Pomidory malinowe krajowe',
        price: 8.99,
        oldPrice: 9.99,
        discountPercent: 10,
        image: tomatoesMalinaImg,
    },
]