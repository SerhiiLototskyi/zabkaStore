import {useCallback, useEffect, useRef, useState} from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import {ChevronLeft, ChevronRight, Plus} from 'lucide-react'
import type {ProductCarousel} from './products.ts'

type ProductCarouselProps = {
    title: string
    products: ProductCarousel[]
}

const formatPrice = (value: number) => `${value.toFixed(2).replace('.', ',')} zł`

export const ProductCarousel = ({title, products}: ProductCarouselProps) => {
    const autoplay = useRef(
        Autoplay({
            delay: 4500,
            stopOnInteraction: false,
            stopOnMouseEnter: true,
        })
    )

    const [emblaRef, emblaApi] = useEmblaCarousel(
        {
            loop: false,
            align: 'start',
            dragFree: false,
            slidesToScroll: 1,
            containScroll: 'trimSnaps',
        },
        [autoplay.current]
    )

    const [canScrollPrev, setCanScrollPrev] = useState(false)
    const [canScrollNext, setCanScrollNext] = useState(false)

    const updateButtons = useCallback(() => {
        if (!emblaApi) return
        setCanScrollPrev(emblaApi.canScrollPrev())
        setCanScrollNext(emblaApi.canScrollNext())
    }, [emblaApi])

    const scrollPrev = useCallback(() => {
        if (!emblaApi) return
        emblaApi.scrollPrev()
    }, [emblaApi])

    const scrollNext = useCallback(() => {
        if (!emblaApi) return
        emblaApi.scrollNext()
    }, [emblaApi])

    useEffect(() => {
        if (!emblaApi) return

        updateButtons()
        emblaApi.on('select', updateButtons)
        emblaApi.on('reInit', updateButtons)

        return () => {
            emblaApi.off('select', updateButtons)
            emblaApi.off('reInit', updateButtons)
        }
    }, [emblaApi, updateButtons])

    return (
        <section className="bg-[#f3f3f3] py-8">
            <div className="mx-auto w-full max-w-[1560px] px-4 md:px-6 xl:px-10">
                <div className="mb-6 flex items-center justify-between">
                    <h2 className="text-[28px] font-semibold leading-tight text-[#20214f] md:text-[34px]">
                        {title}
                    </h2>

                    <div className="flex items-center gap-3">
                        <button
                            type="button"
                            onClick={scrollPrev}
                            disabled={!canScrollPrev}
                            className="flex h-12 w-12 items-center justify-center rounded-full bg-[#eef7f2] text-[#6f7488] transition enabled:hover:bg-[#dff1e7] disabled:cursor-not-allowed disabled:opacity-50"
                            aria-label="Previous products"
                        >
                            <ChevronLeft className="h-5 w-5"/>
                        </button>

                        <button
                            type="button"
                            onClick={scrollNext}
                            disabled={!canScrollNext}
                            className="flex h-12 w-12 items-center justify-center rounded-full bg-[#dff1e7] text-[#1b7f4a] transition enabled:hover:bg-[#cfead9] disabled:cursor-not-allowed disabled:opacity-50"
                            aria-label="Next products"
                        >
                            <ChevronRight className="h-5 w-5"/>
                        </button>
                    </div>
                </div>

                <div className="overflow-hidden" ref={emblaRef}>
                    <div className="flex">
                        {products.map((product) => (
                            <div
                                key={product.id}
                                className="
                  min-w-0 flex-[0_0_88%] pl-0 pr-4
                  sm:flex-[0_0_50%]
                  md:flex-[0_0_33.333%]
                  lg:flex-[0_0_25%]
                  xl:flex-[0_0_16.666%]
                "
                            >
                                <article
                                    className="flex h-full min-h-[100px] flex-col rounded-[20px] border border-[#dfe3ea] bg-white p-5">
                                    <div className="relative flex h-[100px] items-center justify-center">
                                        <button
                                            type="button"
                                            className="absolute right-0 top-0 flex h-12 w-12 items-center justify-center rounded-full bg-white text-[#2e3147] shadow-[0_4px_12px_rgba(0,0,0,0.12)] transition hover:scale-[1.03]"
                                            aria-label={`Add ${product.name}`}
                                        >
                                            <Plus className="h-7 w-7" strokeWidth={1.8}/>
                                        </button>

                                        <img
                                            src={product.image}
                                            className="max-h-[100px] w-auto object-contain"
                                        />
                                    </div>

                                    <div className="mt-4 flex flex-1 flex-col">
                                        <h3 className="min-h-[62px] text-[19px] font-semibold leading-[1.2] text-[#35374d]">
                                            {product.name}
                                        </h3>
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

                                                    <p className="mt-1 text-[13px] text-[#8a8ea3]">
                                                        *najniższa cena
                                                    </p>
                                                </>
                                            ) : (
                                                <div className="text-[18px] font-semibold text-[#1f2d3d]">
                                                    {formatPrice(product.price)}
                                                </div>
                                            )}

                                            {product.discountPercent ? (
                                                <div
                                                    className="mt-3 inline-flex rounded-full bg-[#28a36a] px-3 py-1 text-[14px] font-semibold text-white">
                                                    -{product.discountPercent}%
                                                </div>
                                            ) : null}
                                        </div>
                                    </div>
                                </article>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}