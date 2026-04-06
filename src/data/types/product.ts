export type Product = {
    id: string
    slug: string
    name: string
    image: string
    imageAlt: string

    unitLabel: string
    price: number
    oldPrice?: number
    discountPercent?: number
    badge?: string

    inStock: boolean

    categorySlug: string
    subcategorySlug: string
    groupSlug: string
}