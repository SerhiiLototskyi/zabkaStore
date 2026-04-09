import {useEffect, useState} from 'react'
import {
    getCategoryBySlug,
    getProducts,
    type ProductSort,
} from '../data/api/mockCatalogApi.ts'
import type {Category} from "../data/types/category.ts";
import type {Product} from "../data/types/product.ts";
import {Breadcrumbs} from "../components/Catalog/Breadcrumbs.tsx";
import {CategoryHero} from "../components/Catalog/CategoryHero.tsx";
import {CategorySidebar} from "../components/Catalog/CategorySidebar.tsx";
import {CategoryToolbar} from "../components/Catalog/CategoryToolbar.tsx";
import {ProductGrid} from "../components/Catalog/ProductGrid.tsx";
import {useParams} from "react-router-dom";
import {CategoryHeroSkeleton} from "../components/Catalog/Skeletons/CategoryHeroSkeleton.tsx";
import {CategoryToolbarSkeleton} from "../components/Catalog/Skeletons/CategoryToolbarSkeleton.tsx";
import {ProductGridSkeleton} from "../components/Catalog/Skeletons/ProductGridSkeleton.tsx";

export const CategoryPage = () => {
    // Пока хардкодим slug, позже возьмем из router params
    const { slug } = useParams()
    const categorySlug = slug ?? 'warzywa-i-owoce'

    const [category, setCategory] = useState<Category | null>(null)
    const [products, setProducts] = useState<Product[]>([])
    const [total, setTotal] = useState(0)
    const [sort, setSort] = useState<ProductSort>('default')
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const loadPageData = async () => {
            setIsLoading(true)

            const categoryData = await getCategoryBySlug(categorySlug)
            const productsResponse = await getProducts({
                categorySlug,
                sort,
                page: 1,
                limit: 12,
            })

            setCategory(categoryData)
            setProducts(productsResponse.items)
            setTotal(productsResponse.total)

            setIsLoading(false)
        }

        loadPageData()
    }, [categorySlug, sort])

    if (isLoading) {
        return (
            <section className="bg-[#f3f3f3] py-8 md:py-10">
                <div className="mx-auto max-w-[1560px] px-4 md:px-6 xl:px-10">
                    <div className="mb-4 h-5 w-[260px] animate-pulse rounded bg-[#eef1f5]" />

                    <CategoryHeroSkeleton />

                    <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-[290px_minmax(0,1fr)]">
                        <div className="rounded-[24px] bg-white p-5 shadow-sm">
                            <div className="h-6 w-[120px] animate-pulse rounded bg-[#eef1f5]" />

                            <div className="mt-5 space-y-5">
                                {Array.from({ length: 4 }).map((_, index) => (
                                    <div key={index}>
                                        <div className="h-5 w-[140px] animate-pulse rounded bg-[#eef1f5]" />
                                        <div className="mt-3 space-y-2">
                                            <div className="h-4 w-[85%] animate-pulse rounded bg-[#f3f5f8]" />
                                            <div className="h-4 w-[70%] animate-pulse rounded bg-[#f3f5f8]" />
                                            <div className="h-4 w-[78%] animate-pulse rounded bg-[#f3f5f8]" />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="space-y-5">
                            <CategoryToolbarSkeleton />
                            <ProductGridSkeleton count={8} />
                        </div>
                    </div>
                </div>
            </section>
        )
    }

    if (!category) {
        return (
            <section className="bg-[#f3f3f3] py-8">
                <div className="mx-auto max-w-[1560px] px-4 md:px-6 xl:px-10">
                    <div className="rounded-[28px] bg-white p-10 text-[#d64545]">
                        Nie znaleziono kategorii.
                    </div>
                </div>
            </section>
        )
    }

    return (
        <section className="bg-[#f3f3f3] py-8 md:py-10">
            <div className="mx-auto max-w-[1560px] px-4 md:px-6 xl:px-10">
                <Breadcrumbs
                    items={[
                        {label: 'Strona główna', href: '/'},
                        {label: 'Kategorie', href: '/'},
                        {label: category.name},
                    ]}
                />

                <CategoryHero category={category}/>

                <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-[290px_minmax(0,1fr)]">
                    <CategorySidebar category={category}/>

                    <div className="space-y-5">
                        <CategoryToolbar total={total} sort={sort} onSortChange={setSort}/>
                        <ProductGrid products={products}/>
                    </div>
                </div>
            </div>
        </section>
    )
}