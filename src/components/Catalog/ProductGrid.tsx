import { Plus } from 'lucide-react'
import type {Product} from "../../data/types/product.ts";

type ProductGridProps = {
    products: Product[]
}

const formatPrice = (value: number) => `${value.toFixed(2).replace('.', ',')} zł`

export const ProductGrid = ({ products }: ProductGridProps) => {
    return (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
            {products.map((product) => (
                <article
                    key={product.id}
                    className="flex min-h-[360px] flex-col rounded-[20px] border border-[#dfe3ea] bg-white p-5"
                >
                    <div className="relative flex h-[170px] items-center justify-center">
                        {product.badge ? (
                            <span className="absolute left-0 top-0 rounded-full bg-[#dff1e7] px-3 py-1 text-xs font-semibold uppercase text-[#28945f]">
                {product.badge}
              </span>
                        ) : null}

                        <button
                            type="button"
                            className="absolute right-0 top-0 flex h-11 w-11 items-center justify-center rounded-full bg-white text-[#20214f] shadow-[0_4px_12px_rgba(0,0,0,0.12)]"
                            aria-label={`Add ${product.name}`}
                            disabled={!product.inStock}
                        >
                            <Plus className="h-6 w-6" strokeWidth={1.8} />
                        </button>

                        <div className="flex h-[120px] w-[120px] items-center justify-center rounded-[20px] bg-[#f6f7f9] text-center text-xs text-[#8a8ea3]">
                            {/* ВСТАВЬ СЮДА КАРТИНКУ ТОВАРА */}
                            PRODUCT IMAGE
                        </div>
                    </div>

                    <div className="mt-4 flex flex-1 flex-col">
                        <h3 className="min-h-[52px] text-[18px] font-semibold leading-[1.25] text-[#35374d]">
                            {product.name}
                        </h3>

                        <p className="mt-2 text-[14px] text-[#73778c]">{product.unitLabel}</p>

                        <div className="mt-auto pt-5">
                            {product.oldPrice ? (
                                <>
                                    <div className="flex items-end gap-2">
                    <span className="text-[18px] font-semibold text-[#1a9c69]">
                      {formatPrice(product.price)}
                    </span>

                                        <span className="text-[14px] text-[#8a8ea3] line-through">
                      {formatPrice(product.oldPrice)}
                    </span>
                                    </div>

                                    {product.discountPercent ? (
                                        <div className="mt-3 inline-flex rounded-full bg-[#28a36a] px-3 py-1 text-[13px] font-semibold text-white">
                                            -{product.discountPercent}%
                                        </div>
                                    ) : null}
                                </>
                            ) : (
                                <div className="text-[18px] font-semibold text-[#20214f]">
                                    {formatPrice(product.price)}
                                </div>
                            )}

                            {!product.inStock ? (
                                <p className="mt-3 text-[13px] font-medium text-[#d64545]">
                                    Produkt chwilowo niedostępny
                                </p>
                            ) : null}
                        </div>
                    </div>
                </article>
            ))}
        </div>
    )
}