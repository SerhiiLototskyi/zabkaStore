import {Heart, Mail, SquarePlay} from "lucide-react";
import logo from "../../icons/logotyp-naglowek-jush.svg";

type FooterLinkGroup = {
    title: string
    links: string[]
}

const footerGroups: FooterLinkGroup[] = [
    {
        title: 'O delio',
        links: [
            'O nas',
            'Poznaj Żabka Jush',
            'Szeroki asortyment',
            'Dostawa nocna',
            'Zostań naszym kurierem',
        ],
    },
    {
        title: 'Informacje i pomoc',
        links: [
            'FAQ',
            'Skontaktuj się z nami',
            'Regulaminy',
            'Regulamin sprzedaży napojów alkoholowych',
            'Polityka Prywatności',
            'Ustawienia plików cookies',
        ],
    },
]

export const Footer = () => {
    return (
        <footer className="bg-[#004f4a] text-white">
            <div className="mx-auto w-full max-w-[1560px] px-4 py-12 md:px-6 md:py-14 xl:px-10">
                <div className="grid grid-cols-1 gap-10 md:grid-cols-2 xl:grid-cols-[1.2fr_1.1fr_1fr_1.2fr] xl:gap-14">
                    {/* COLUMN 1 */}
                    <div className="max-w-[280px]">
                        <div
                            className="mb-6 flex h-[72px] w-[150px] items-center justify-center rounded-[12px] text-center text-sm font-medium text-white/70">
                            <img src={logo} alt=""/>
                        </div>

                        <p className="text-[18px] leading-[1.5] text-white/95">
                            Zakupy online z dostawą nawet tego samego dnia
                        </p>
                    </div>

                    {/* COLUMN 2 */}
                    <div>
                        <h3 className="text-[24px] font-semibold leading-tight text-white">
                            Kontakt
                        </h3>

                        <a
                            href="mailto:hello@delio.com.pl"
                            className="mt-6 flex items-center gap-4 text-[18px] font-medium text-white/95 transition hover:text-white"
                        >
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20">
                <Mail className="h-5 w-5"/>
              </span>
                            hello@delio.com.pl
                        </a>

                        <div className="mt-6 flex items-center gap-4">
                            <a
                                href="/"
                                aria-label="Facebook"
                                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white/90 transition hover:bg-white/15 hover:text-white"
                            >
                                <Heart className="h-5 w-5"/>
                            </a>

                            <a
                                href="/"
                                aria-label="Youtube"
                                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white/90 transition hover:bg-white/15 hover:text-white"
                            >
                                <SquarePlay className="h-5 w-5"/>
                            </a>
                        </div>

                        <div className="mt-10">
                            <h4 className="text-[24px] font-semibold leading-tight text-white">
                                Godziny otwarcia
                            </h4>

                            <p className="mt-6 text-[18px] leading-[1.55] text-white/95">
                                Poniedziałek - Niedziela
                                <br/>
                                <span className="font-semibold">7:00 - 23:00</span>
                            </p>
                        </div>
                    </div>

                    {/* COLUMN 3 + 4 */}
                    {footerGroups.map((group) => (
                        <div key={group.title}>
                            <h3 className="text-[24px] font-semibold leading-tight text-white">
                                {group.title}
                            </h3>

                            <ul className="mt-6 space-y-5">
                                {group.links.map((link) => (
                                    <li key={link}>
                                        <a
                                            href="/"
                                            className="text-[18px] font-medium leading-[1.45] text-white/95 transition hover:text-white"
                                        >
                                            {link}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* BOTTOM BORDER */}
                <div className="mt-12 border-t border-white/10 pt-1"/>
            </div>
        </footer>
    )
}