import type {Category} from "./types/category.ts";

export const categories: Category[] = [
    {
        id: 'cat-1',
        slug: 'warzywa-i-owoce',
        name: 'Warzywa i owoce',
        image: '/images/categories/warzywa-i-owoce-banner.png',
        description:
            'W supermarkecie online delio znajdziesz świeże warzywa i owoce w towarzystwie grzybów oraz kiszonek.',
        subcategories: [
            {
                id: 'sub-1',
                slug: 'owoce',
                name: 'Owoce',
                groups: [
                    {id: 'group-1', slug: 'cytrusy', name: 'Cytrusy'},
                    {id: 'group-2', slug: 'banany-i-owoce-egzotyczne', name: 'Banany i owoce egzotyczne'},
                    {id: 'group-3', slug: 'jablka-gruszki-sliwki', name: 'Jabłka, gruszki, śliwki'},
                    {id: 'group-4', slug: 'truskawki-maliny-borowki', name: 'Truskawki, maliny, borówki'},
                    {id: 'group-5', slug: 'winogrona-arbuzy-melony', name: 'Winogrona, arbuzy, melony'},
                ],
            },
            {
                id: 'sub-2',
                slug: 'warzywa',
                name: 'Warzywa',
                groups: [
                    {id: 'group-6', slug: 'pomidory-ogorki-papryki', name: 'Pomidory, ogórki, papryki'},
                    {id: 'group-7', slug: 'ziemniaki-buraki-dynie', name: 'Ziemniaki, buraki, dynie'},
                    {id: 'group-8', slug: 'marchew-pietruszka-seler', name: 'Marchew, pietruszka, seler'},
                    {id: 'group-9', slug: 'salaty-kapusty-brukselki', name: 'Sałaty, kapusty, brukselki'},
                ],
            },
            {
                id: 'sub-3',
                slug: 'gotowe-do-zjedzenia',
                name: 'Gotowe do zjedzenia',
                groups: [
                    {id: 'group-10', slug: 'mixy-salat', name: 'Mixy sałat'},
                    {id: 'group-11', slug: 'owoce-krojone', name: 'Owoce krojone'},
                    {id: 'group-12', slug: 'warzywa-krojone', name: 'Warzywa krojone'},
                ],
            },
            {
                id: 'sub-4',
                slug: 'ziola-kielki-przyprawy',
                name: 'Zioła, kiełki, przyprawy',
                groups: [
                    {id: 'group-13', slug: 'swieze-ziola', name: 'Świeże zioła'},
                    {id: 'group-14', slug: 'kielki', name: 'Kiełki'},
                    {id: 'group-15', slug: 'przyprawy-swieze', name: 'Przyprawy świeże'},
                ],
            },
            {
                id: 'sub-5',
                slug: 'grzyby',
                name: 'Grzyby',
                groups: [
                    {id: 'group-16', slug: 'pieczarki', name: 'Pieczarki'},
                    {id: 'group-17', slug: 'grzyby-lesne', name: 'Grzyby leśne'},
                ],
            },
        ],
    },
    {
        id: 'cat-2',
        slug: 'piekarnia',
        name: 'Piekarnia',
        image: '/images/categories/piekarnia-banner.png',
        description: 'Pieczywo, bułki, chleby i słodkie wypieki na każdą porę dnia.',
        subcategories: [
            {
                id: 'sub-6',
                slug: 'pieczywo',
                name: 'Pieczywo',
                groups: [
                    {id: 'group-18', slug: 'chleb', name: 'Chleb'},
                    {id: 'group-19', slug: 'bulki', name: 'Bułki'},
                    {id: 'group-20', slug: 'bagietki', name: 'Bagietki'},
                ],
            },
            {
                id: 'sub-7',
                slug: 'wypieki-slodkie',
                name: 'Wypieki słodkie',
                groups: [
                    {id: 'group-21', slug: 'drozdzowki', name: 'Drożdżówki'},
                    {id: 'group-22', slug: 'ciastka', name: 'Ciastka'},
                    {id: 'group-23', slug: 'croissanty', name: 'Croissanty'},
                ],
            },
        ],
    },
    {
        id: 'cat-3',
        slug: 'nabial',
        name: 'Nabiał',
        image: '/images/categories/nabial-banner.png',
        description: 'Mleko, jogurty, sery i inne produkty nabiałowe.',
        subcategories: [
            {
                id: 'sub-8',
                slug: 'mleko-i-smietana',
                name: 'Mleko i śmietana',
                groups: [
                    {id: 'group-24', slug: 'mleko', name: 'Mleko'},
                    {id: 'group-25', slug: 'smietana', name: 'Śmietana'},
                    {id: 'group-26', slug: 'napoje-mleczne', name: 'Napoje mleczne'},
                ],
            },
            {
                id: 'sub-9',
                slug: 'jogurty-i-desery',
                name: 'Jogurty i desery',
                groups: [
                    {id: 'group-27', slug: 'jogurty', name: 'Jogurty'},
                    {id: 'group-28', slug: 'desery-mleczne', name: 'Desery mleczne'},
                ],
            },
            {
                id: 'sub-10',
                slug: 'sery',
                name: 'Sery',
                groups: [
                    {id: 'group-29', slug: 'sery-zolte', name: 'Sery żółte'},
                    {id: 'group-30', slug: 'sery-biale', name: 'Sery białe'},
                    {id: 'group-31', slug: 'sery-plesniowe', name: 'Sery pleśniowe'},
                ],
            },
            {
                id: 'sub-11',
                slug: 'jaja',
                name: 'Jaja',
                groups: [
                    {id: 'group-32', slug: 'jajka', name: 'Jajka'},
                ],
            },
        ],
    },
    {
        id: 'cat-4',
        slug: 'mieso-wedliny-i-ryby',
        name: 'Mięso, wędliny i ryby',
        image: '/images/categories/mieso-banner.png',
        description: 'Świeże mięso, wędliny oraz ryby do codziennych posiłków.',
        subcategories: [
            {
                id: 'sub-12',
                slug: 'mieso',
                name: 'Mięso',
                groups: [
                    {id: 'group-33', slug: 'drob', name: 'Drób'},
                    {id: 'group-34', slug: 'wolowina', name: 'Wołowina'},
                    {id: 'group-35', slug: 'wieprzowina', name: 'Wieprzowina'},
                ],
            },
            {
                id: 'sub-13',
                slug: 'wedliny',
                name: 'Wędliny',
                groups: [
                    {id: 'group-36', slug: 'szynki', name: 'Szynki'},
                    {id: 'group-37', slug: 'kielbasy', name: 'Kiełbasy'},
                    {id: 'group-38', slug: 'parowki', name: 'Parówki'},
                ],
            },
            {
                id: 'sub-14',
                slug: 'ryby',
                name: 'Ryby',
                groups: [
                    {id: 'group-39', slug: 'ryby-swieze', name: 'Ryby świeże'},
                    {id: 'group-40', slug: 'ryby-wedzone', name: 'Ryby wędzone'},
                ],
            },
        ],
    },
    {
        id: 'cat-5',
        slug: 'dania-gotowe',
        name: 'Dania gotowe',
        image: '/images/categories/dania-gotowe-banner.png',
        description: 'Gotowe dania, które szybko przygotujesz lub zjesz od razu.',
        subcategories: [
            {
                id: 'sub-15',
                slug: 'obiady',
                name: 'Obiady',
                groups: [
                    {id: 'group-41', slug: 'dania-miesne', name: 'Dania mięsne'},
                    {id: 'group-42', slug: 'dania-wege', name: 'Dania vege'},
                ],
            },
            {
                id: 'sub-16',
                slug: 'przekaski-gotowe',
                name: 'Przekąski gotowe',
                groups: [
                    {id: 'group-43', slug: 'kanapki', name: 'Kanapki'},
                    {id: 'group-44', slug: 'wrapy', name: 'Wrapy'},
                    {id: 'group-45', slug: 'salatki', name: 'Sałatki'},
                ],
            },
        ],
    },
    {
        id: 'cat-6',
        slug: 'spizarnia',
        name: 'Spiżarnia',
        image: '/images/categories/spizarnia-banner.png',
        description: 'Produkty suche, konserwy, makarony i dodatki do gotowania.',
        subcategories: [
            {
                id: 'sub-17',
                slug: 'makarony-ryz-kasze',
                name: 'Makarony, ryż, kasze',
                groups: [
                    {id: 'group-46', slug: 'makarony', name: 'Makarony'},
                    {id: 'group-47', slug: 'ryz', name: 'Ryż'},
                    {id: 'group-48', slug: 'kasze', name: 'Kasze'},
                ],
            },
            {
                id: 'sub-18',
                slug: 'konserwy-i-sloiki',
                name: 'Konserwy i słoiki',
                groups: [
                    {id: 'group-49', slug: 'warzywa-w-sloikach', name: 'Warzywa w słoikach'},
                    {id: 'group-50', slug: 'konserwy-miesne', name: 'Konserwy mięsne'},
                ],
            },
            {
                id: 'sub-19',
                slug: 'oleje-i-oliwy',
                name: 'Oleje i oliwy',
                groups: [
                    {id: 'group-51', slug: 'olej', name: 'Olej'},
                    {id: 'group-52', slug: 'oliwa', name: 'Oliwa'},
                ],
            },
        ],
    },
    {
        id: 'cat-7',
        slug: 'kawa-i-herbata',
        name: 'Kawa i herbata',
        image: '/images/categories/kawa-i-herbata-banner.png',
        description: 'Kawy, herbaty i dodatki do codziennych napojów.',
        subcategories: [
            {
                id: 'sub-20',
                slug: 'kawa',
                name: 'Kawa',
                groups: [
                    {id: 'group-53', slug: 'kawa-mielona', name: 'Kawa mielona'},
                    {id: 'group-54', slug: 'kawa-ziarnista', name: 'Kawa ziarnista'},
                    {id: 'group-55', slug: 'kapsulki', name: 'Kapsułki'},
                ],
            },
            {
                id: 'sub-21',
                slug: 'herbata',
                name: 'Herbata',
                groups: [
                    {id: 'group-56', slug: 'herbata-czarna', name: 'Herbata czarna'},
                    {id: 'group-57', slug: 'herbata-zielona', name: 'Herbata zielona'},
                    {id: 'group-58', slug: 'herbaty-ziolowe', name: 'Herbaty ziołowe'},
                ],
            },
        ],
    },
    {
        id: 'cat-8',
        slug: 'woda-i-napoje',
        name: 'Woda i napoje',
        image: '/images/categories/woda-i-napoje-banner.png',
        description: 'Wody, soki, napoje gazowane i niegazowane.',
        subcategories: [
            {
                id: 'sub-22',
                slug: 'woda',
                name: 'Woda',
                groups: [
                    {id: 'group-59', slug: 'woda-niegazowana', name: 'Woda niegazowana'},
                    {id: 'group-60', slug: 'woda-gazowana', name: 'Woda gazowana'},
                ],
            },
            {
                id: 'sub-23',
                slug: 'soki-i-nektary',
                name: 'Soki i nektary',
                groups: [
                    {id: 'group-61', slug: 'soki-owocowe', name: 'Soki owocowe'},
                    {id: 'group-62', slug: 'soki-warzywne', name: 'Soki warzywne'},
                ],
            },
            {
                id: 'sub-24',
                slug: 'napoje',
                name: 'Napoje',
                groups: [
                    {id: 'group-63', slug: 'napoje-gazowane', name: 'Napoje gazowane'},
                    {id: 'group-64', slug: 'napoje-niegazowane', name: 'Napoje niegazowane'},
                    {id: 'group-65', slug: 'izotoniki', name: 'Izotoniki'},
                ],
            },
        ],
    },
]