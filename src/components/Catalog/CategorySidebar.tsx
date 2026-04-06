import type {Category} from "../../data/types/category.ts";

type CategorySidebarProps = {
    category: Category
    activeSubcategorySlug?: string
}

export const CategorySidebar = ({
                                    category,
                                    activeSubcategorySlug,
                                }: CategorySidebarProps) => {
    return (
        <aside className="rounded-[24px] bg-white p-5 shadow-sm">
            <h2 className="text-[20px] font-semibold text-[#20214f]">Kategorie</h2>

            <div className="mt-5 space-y-5">
                {category.subcategories.map((subcategory) => {
                    const isActive = subcategory.slug === activeSubcategorySlug

                    return (
                        <div key={subcategory.id}>
                            <a
                                href="/"
                                className={`text-[16px] font-semibold transition ${
                                    isActive ? 'text-[#17a34a]' : 'text-[#20214f] hover:text-[#17a34a]'
                                }`}
                            >
                                {subcategory.name}
                            </a>

                            <ul className="mt-3 space-y-2">
                                {subcategory.groups.map((group) => (
                                    <li key={group.id}>
                                        <a
                                            href="/"
                                            className="text-[14px] text-[#5f657a] transition hover:text-[#20214f]"
                                        >
                                            {group.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )
                })}
            </div>
        </aside>
    )
}