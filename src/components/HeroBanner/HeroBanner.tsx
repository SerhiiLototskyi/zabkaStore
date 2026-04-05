import {MapPin} from 'lucide-react'
import banner from './img/banner4.avif'

export const HeroBanner = () => {
    return (
        <section className="w-full overflow-hidden bg-[#63cdcd]">
            <div className="mx-auto flex h-[250px] max-w-[1260px] items-center justify-between px-8 xl:px-12">
                {/* LEFT */}
                <div className="max-w-[620px] pl-8 xl:pl-12">
                    <h1 className="max-w-[560px] text-[40px] font-bold leading-[1.08] tracking-[-0.5px] text-[#20214f] xl:text-[30px]">
                        Nawet <span className="text-[58px] xl:text-[50px]">240 zł</span> zniżki na start!
                    </h1>

                    <p className="mt-3 text-[18px] font-normal text-[#20214f]">
                        Załóż konto i zobacz ile możesz zaoszczędzić
                    </p>

                    {/* INPUT + BUTTON */}
                    <div className="mt-8 flex items-center gap-3">
                        <div
                            className="flex h-[46px] w-[320px] items-center justify-between rounded-[16px] bg-white px-5 shadow-[0_2px_6px_rgba(0,0,0,0.06)] xl:h-[50px] xl:w-[350px]">
                            <input
                                type="text"
                                placeholder="np. Wiejska 1, Warszawa"
                                className="w-full bg-transparent text-[15px] text-gray-700 outline-none placeholder:text-[#a2a0b4]"
                            />
                            <MapPin className="h-[18px] w-[18px] shrink-0 text-[#6f7488]"/>
                        </div>

                        <button
                            className="h-[46px] rounded-[16px] bg-[#14a83b] px-8 text-[15px] font-semibold text-white transition hover:bg-[#129636] xl:h-[50px]">
                            Podaj adres
                        </button>
                    </div>

                    <p className="mt-8 text-[15px] text-[#20214f]">
                        Masz już konto?{' '}
                        <a href="/" className="font-semibold underline">
                            Zaloguj się
                        </a>
                    </p>
                </div>

                {/* RIGHT */}
                <div className="relative hidden h-full flex-1 lg:block">
                    {/* big pale circle */}
                    <div className="absolute right-[60px] top-[12px] h-[320px] w-[520px] rounded-[50%] bg-[#efe08a]"/>

                    <div className="absolute bottom-[-6px] right-[-1px] h-[210px] w-[210px] rounded-full bg-[#e6c900]"/>

                    <div className="absolute bottom-0 right-[40px] h-[250px] w-[400px] overflow-hidden">
                        <img src={banner} alt=""/>
                    </div>
                </div>
            </div>
        </section>
    )
}