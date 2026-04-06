import type {ProductSort} from "../../data/api/mockCatalogApi.ts";

type CategoryToolbarProps = {
    total: number
    sort: ProductSort
    onSortChange: (value: ProductSort) => void
}

export const CategoryToolbar = ({
                                    total,
                                    sort,
                                    onSortChange,
                                }: CategoryToolbarProps) => {
    return (
        <div className="flex flex-col gap-4 rounded-[20px] bg-white px-5 py-4 shadow-sm sm:flex-row sm:items-center sm:justify-between">
            <p className="text-[15px] text-[#5f657a]">
                Liczba produktów: <span className="font-semibold text-[#20214f]">{total}</span>
            </p>

            <div className="flex items-center gap-3">
                <label htmlFor="sort" className="text-[15px] text-[#5f657a]">
                    Sortuj:
                </label>

                <select
                    id="sort"
                    value={sort}
                    onChange={(e) => onSortChange(e.target.value as ProductSort)}
                    className="rounded-[14px] border border-[#dfe3ea] bg-white px-4 py-2 text-[15px] text-[#20214f] outline-none"
                >
                    <option value="default">Domyślnie</option>
                    <option value="price-asc">Cena rosnąco</option>
                    <option value="price-desc">Cena malejąco</option>
                    <option value="name-asc">Nazwa A-Z</option>
                    <option value="name-desc">Nazwa Z-A</option>
                </select>
            </div>
        </div>
    )
}