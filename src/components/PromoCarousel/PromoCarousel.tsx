import {useCallback, useEffect, useRef, useState} from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import {ChevronLeft, ChevronRight} from 'lucide-react'
import slide01 from '../../icons/wielkanoc-carousel.avif'
import slide02 from '../../icons/chrup-carousel.avif'
import slide03 from '../../icons/oshee-carousel.avif'
import slide04 from '../../icons/gotowanie-carousel.avif'
import slide05 from '../../icons/sery-carousel.avif'
import slide06 from '../../icons/shampoo-carousel.avif'

type Slide = {
    id: number
    image?: string
    alt: string
}

const slides: Slide[] = [
    { id: 1, image: slide01, alt: 'Promo slide 1' },
    { id: 2, image: slide02, alt: 'Promo slide 2' },
    { id: 3, image: slide03, alt: 'Promo slide 3' },
    { id: 4, image: slide04, alt: 'Promo slide 4' },
    { id: 5, image: slide05, alt: 'Promo slide 5' },
    { id: 6, image: slide06, alt: 'Promo slide 6' },
]

export const PromoCarousel = () => {
    const autoplay = useRef(
        Autoplay({
            delay: 4000,
            stopOnInteraction: false,
            stopOnMouseEnter: true,
        })
    )

    const [emblaRef, emblaApi] = useEmblaCarousel(
        {
            loop: true,
            align: 'start',
        },
        [autoplay.current]
    )

    const [selectedIndex, setSelectedIndex] = useState(0)

    const scrollPrev = useCallback(() => {
        if (!emblaApi) return
        emblaApi.scrollPrev()
    }, [emblaApi])

    const scrollNext = useCallback(() => {
        if (!emblaApi) return
        emblaApi.scrollNext()
    }, [emblaApi])

    const scrollTo = useCallback(
        (index: number) => {
            if (!emblaApi) return
            emblaApi.scrollTo(index)
        },
        [emblaApi]
    )

    useEffect(() => {
        if (!emblaApi) return

        const onSelect = () => {
            setSelectedIndex(emblaApi.selectedScrollSnap())
        }

        onSelect()
        emblaApi.on('select', onSelect)
        emblaApi.on('reInit', onSelect)

        return () => {
            emblaApi.off('select', onSelect)
            emblaApi.off('reInit', onSelect)
        }
    }, [emblaApi])

    return (
        <section className="bg-[#f3f3f3] py-3 sm:py-4 md:py-5">
            <div className="mx-auto w-full max-w-[1560px] px-3 sm:px-4 md:px-6 xl:px-8">
                <div className="relative mx-auto max-w-[1360px]">
                    {/* LEFT ARROW */}
                    <button
                        type="button"
                        onClick={scrollPrev}
                        aria-label="Previous slide"
                        className="
              absolute left-2 top-1/2 z-20 flex h-9 w-9 -translate-y-1/2
              items-center justify-center rounded-full bg-white/95 shadow-md
              transition hover:bg-white
              sm:h-10 sm:w-10
              md:left-0 md:h-11 md:w-11
            "
                    >
                        <ChevronLeft className="h-4 w-4 text-gray-700 sm:h-5 sm:w-5"/>
                    </button>

                    {/* RIGHT ARROW */}
                    <button
                        type="button"
                        onClick={scrollNext}
                        aria-label="Next slide"
                        className="
              absolute right-2 top-1/2 z-20 flex h-9 w-9 -translate-y-1/2
              items-center justify-center rounded-full bg-white/95 shadow-md
              transition hover:bg-white
              sm:h-10 sm:w-10
              md:right-0 md:h-11 md:w-11
            "
                    >
                        <ChevronRight className="h-4 w-4 text-gray-700 sm:h-5 sm:w-5"/>
                    </button>

                    {/* EMBLA VIEWPORT */}
                    <div className="overflow-hidden" ref={emblaRef}>
                        <div className="flex">
                            {slides.map((slide, index) => (
                                <div key={slide.id} className="min-w-0 flex-[0_0_100%]">
                                    <div
                                        className="relative overflow-hidden rounded-[20px] bg-white shadow-sm sm:rounded-[24px] md:rounded-[26px]">
                                        <div
                                            className="
                        relative h-[135px]
                        sm:h-[180px]
                        md:h-[220px]
                        lg:h-[245px]
                      "
                                        >
                                            {slide.image ? (
                                                <img
                                                    src={slide.image}
                                                    alt={slide.alt}
                                                    className="h-full w-full object-cover"
                                                />
                                            ) : (
                                                <div
                                                    className="
                            flex h-full w-full items-center justify-center
                            bg-gradient-to-r from-gray-100 to-gray-200
                            text-center text-sm font-medium text-gray-500
                            sm:text-base
                            md:text-lg
                          "
                                                >
                                                    {/* ВСТАВЬ СЮДА КАРТИНКУ ДЛЯ СЛАЙДА */}
                                                    FULL SLIDE IMAGE {index + 1}
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* DOTS */}
                    <div className="mt-2.5 flex items-center justify-center gap-1.5 sm:mt-3">
                        {slides.map((slide, index) => (
                            <button
                                key={slide.id}
                                type="button"
                                onClick={() => scrollTo(index)}
                                aria-label={`Go to slide ${index + 1}`}
                                className={`h-2 rounded-full transition-all ${
                                    selectedIndex === index ? 'w-5 bg-green-500' : 'w-2 bg-gray-300'
                                }`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}