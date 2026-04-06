export type CategoryGroup = {
    id: string
    slug: string
    name: string
}

export type Subcategory = {
    id: string
    slug: string
    name: string
    icon?: string
    groups: CategoryGroup[]
}

export type Category = {
    id: string
    slug: string
    name: string
    image?: string
    description?: string
    subcategories: Subcategory[]
}