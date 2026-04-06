import type {Product} from "../types/product.ts";
import {products} from "../products.ts";
import type {Category} from "../types/category.ts";
import {categories} from "../categories.ts";

export type ProductSort =
    | 'default'
    | 'price-asc'
    | 'price-desc'
    | 'name-asc'
    | 'name-desc'

export type GetProductsParams = {
    categorySlug?: string
    subcategorySlug?: string
    groupSlug?: string

    minPrice?: number
    maxPrice?: number

    sort?: ProductSort

    page?: number
    limit?: number
}

export type PaginatedProductsResponse = {
    items: Product[]
    total: number
    page: number
    limit: number
    totalPages: number
    hasNextPage: boolean
}
const wait = (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms))
const sortProducts = (items: Product[], sort: ProductSort = 'default') => {
    const sorted = [...items]

    switch (sort) {
        case 'price-asc':
            return sorted.sort((a, b) => a.price - b.price)

        case 'price-desc':
            return sorted.sort((a, b) => b.price - a.price)

        case 'name-asc':
            return sorted.sort((a, b) => a.name.localeCompare(b.name))

        case 'name-desc':
            return sorted.sort((a, b) => b.name.localeCompare(a.name))

        case 'default':
        default:
            return sorted
    }
}
export const getProducts = async (params: GetProductsParams = {}): Promise<PaginatedProductsResponse> => {
    await wait(600)
    const {
        categorySlug,
        subcategorySlug,
        groupSlug,
        minPrice,
        maxPrice,
        sort = 'default',
        page = 1,
        limit = 10,
    } = params

    let filtered = [...products]

    if (categorySlug) {
        filtered = filtered.filter(
            (product) => product.categorySlug === categorySlug
        )
    }
    if (subcategorySlug) {
        filtered = filtered.filter(
            (product) => product.subcategorySlug === subcategorySlug
        )
    }

    if (groupSlug) {
        filtered = filtered.filter((product) => product.groupSlug === groupSlug)
    }

    if (minPrice !== undefined) {
        filtered = filtered.filter((product) => product.price >= minPrice)
    }

    if (maxPrice !== undefined) {
        filtered = filtered.filter((product) => product.price <= maxPrice)
    }

    filtered = sortProducts(filtered, sort)

    const total = filtered.length
    const totalPages = Math.ceil(total / limit) || 1
    const safePage = Math.min(page, totalPages)

    const startIndex = (safePage - 1) * limit
    const endIndex = startIndex + limit

    const paginatedItems = filtered.slice(startIndex, endIndex)

    return {
        items: paginatedItems,
        total,
        page: safePage,
        limit,
        totalPages,
        hasNextPage: safePage < totalPages,
    }
}
export const getCategories = async (): Promise<Category[]> => {
    await wait(400)
    return categories
}

export const getCategoryBySlug = async (categorySlug: string): Promise<Category | null> => {
    await wait(400)
    const category =
        categories.find((item) => item.slug === categorySlug) ?? null
    return category
}
export const getProductBySlug = async (productSlug: string): Promise<Product | null> => {
    await wait(400)

    const product =
        products.find((item) => item.slug === productSlug) ?? null

    return product
}