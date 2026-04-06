import type {Category} from "../../data/types/category.ts";

type CategoryHeroProps = {
    category: Category
}

export const CategoryHero = ({category}: CategoryHeroProps) => {
    return (
        <section className="overflow-hidden rounded-[28px] bg-[#e8f5ee]">
            <div
                className="flex min-h-[220px] flex-col justify-between gap-6 px-6 py-6 md:min-h-[260px] md:flex-row md:items-center md:px-8 lg:px-10">
                <div className="max-w-[720px]">
                    <h1 className="text-[32px] font-semibold leading-tight text-[#20214f] md:text-[42px]">
                        {category.name}
                    </h1>

                    {category.description ? (
                        <p className="mt-4 max-w-[680px] text-[16px] leading-[1.6] text-[#2f3553] md:text-[17px]">
                            {category.description}
                        </p>
                    ) : null}
                </div>

                <div className="flex w-full justify-center md:w-[320px] lg:w-[380px]">
                    <div
                        className="flex h-[150px] w-full max-w-[320px] items-center justify-center rounded-[24px] border-2 border-dashed border-[#bfd8cc] bg-white/40 text-sm font-medium text-[#7e879a] md:h-[180px] lg:h-[200px]">
                        {/* ВСТАВЬ СЮДА БОЛЬШУЮ КАРТИНКУ КАТЕГОРИИ */}
                        CATEGORY IMAGE
                    </div>
                </div>
            </div>
        </section>
    )
}