import type {AppPromo, InfoCard} from "./infoCardsData.ts";

type InfoCardsSectionProps = {
    title: string
    cards: InfoCard[]
    appPromo: AppPromo
}

export const InfoCardsSection = ({
                                     title,
                                     cards,
                                     appPromo,
                                 }: InfoCardsSectionProps) => {
    return (
        <section className="bg-[#f3f3f3] pt-8 md:pt-1">
            <div className="mx-auto w-full max-w-[1560px] px-4 md:px-6 xl:px-10">
                {/* Верхняя компактная зона */}
                <div className="rounded-none bg-[#edf6f2] px-4 py-8 md:px-8 md:py-10 xl:px-12">
                    {/* Заголовок */}
                    <div className="mb-6 flex items-center justify-between md:mb-8">
                        <h2 className="text-[28px] font-semibold leading-tight text-[#20214f] md:text-[40px]">
                            {title}
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-5">
                        {cards.map((card) => (
                            <article
                                key={card.id}
                                className="flex min-h-[168px] items-center justify-between rounded-[28px] border border-[#e3ebe7] bg-white px-5 py-5 md:min-h-[180px] md:px-6"
                            >
                                {/* Текст */}
                                <div className="max-w-[58%]">
                                    <h3 className="text-[22px] font-semibold text-[#20214f]">
                                        {card.title}
                                    </h3>

                                    <p className="mt-3 text-[16px] leading-[1.45] text-[#20214f]">
                                        {card.description}
                                    </p>
                                </div>

                                {/* Картинка */}
                                <div className="flex h-[110px] w-[110px] shrink-0 items-center justify-center overflow-hidden rounded-full bg-[#f4f7f5]">
                                    {card.image ? (
                                        <img
                                            src={card.image}
                                            alt={card.imageAlt}
                                            className="h-full w-full object-contain"
                                        />
                                    ) : (
                                        <div className="flex h-full w-full items-center justify-center text-center text-xs font-medium text-[#8a8ea3]">
                                            {/* ВСТАВЬ КАРТИНКУ СЮДА */}
                                            CARD IMAGE
                                        </div>
                                    )}
                                </div>
                            </article>
                        ))}
                    </div>

                </div>

                {/* Нижний блок с app promo */}
                <div className="bg-[#dfeee8] px-4 py-8 md:px-8 md:py-10 xl:px-12">
                    <div className="flex flex-col items-center gap-8 lg:flex-row lg:items-end lg:justify-between">
                        {/* Левая часть: телефон / баннер */}
                        <div className="flex w-full justify-center lg:w-[30%] lg:justify-start">
                            <div className="relative flex h-[180px] w-[260px] items-end justify-center md:h-[200px] md:w-[300px]">
                                {appPromo.phoneImage ? (
                                    <img
                                        src={appPromo.phoneImage}
                                        alt={appPromo.phoneImageAlt}
                                        className="h-full w-full object-contain"
                                    />
                                ) : (
                                    <div className="flex h-full w-full items-center justify-center rounded-[24px] border-2 border-dashed border-[#b7c7c0] bg-[#edf6f2] text-center text-sm font-medium text-[#8a8ea3]">
                                        {/* ВСТАВЬ КАРТИНКУ ТЕЛЕФОНА / APP PROMO СЮДА */}
                                        APP PROMO IMAGE
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Центр: текст */}
                        <div className="w-full text-center lg:w-[42%] lg:text-left">
                            <h3 className="max-w-[520px] text-[28px] font-semibold leading-[1.2] text-[#20214f] md:text-[32px]">
                                {appPromo.title}
                            </h3>

                            <p className="mt-4 max-w-[620px] text-[18px] leading-[1.5] text-[#20214f]">
                                {appPromo.description}
                            </p>
                        </div>

                        {/* Правая часть: кнопки сторов */}
                        <div className="flex w-full flex-col items-center gap-3 sm:flex-row sm:justify-center lg:w-[28%] lg:justify-end">
                            {appPromo.googlePlayImage ? (
                                <img
                                    src={appPromo.googlePlayImage}
                                    alt="Google Play"
                                    className="h-[80px] w-auto object-contain cursor-pointer"
                                />
                            ) : (
                                <div className="flex h-[48px] w-[150px] items-center justify-center rounded-[10px] bg-black text-sm font-semibold text-white">
                                    {/* ВСТАВЬ GOOGLE PLAY BADGE */}
                                    Google Play
                                </div>
                            )}

                            {appPromo.appStoreImage ? (
                                <img
                                    src={appPromo.appStoreImage}
                                    alt="App Store"
                                    className="h-[55px] w-auto object-contain cursor-pointer"
                                />
                            ) : (
                                <div className="flex h-[48px] w-[150px] items-center justify-center rounded-[10px] bg-black text-sm font-semibold text-white">
                                    {/* ВСТАВЬ APP STORE BADGE */}
                                    App Store
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}