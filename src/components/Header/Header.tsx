import logo from '../../icons/logotyp-naglowek-jush.svg'

import {Menu, MenuButton, MenuItem, MenuItems} from '@headlessui/react'
import {
    MapPin,
    Search,
    User,
    ShoppingCart,
    ChevronDown,
} from 'lucide-react'

export const Header = () => {
    return (
        <header className="w-full border-b border-gray-200 bg-white">
            <div className="mx-auto flex h-[88px] max-w-[1560px] items-center justify-between px-6 xl:px-10">
                <div className="flex items-center gap-6 xl:gap-8">
                    <a href="/" className="flex shrink-0 flex-col leading-none">
                        <img src={logo} alt="Logo" className="h-15 w-auto"/>
                    </a>
                    <Menu as="div" className="relative">
                        <MenuButton
                            className="flex items-center gap-3 rounded-full border border-gray-200 bg-white px-3 py-2 transition hover:bg-gray-50 focus:outline-none">
                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100">
                                <MapPin className="h-5 w-5 text-emerald-600"/>
                            </div>

                            <div className="text-left leading-tight">
                                <div className="text-sm font-semibold text-emerald-700">
                                    Podaj adres dostawy
                                </div>
                                <div className="text-xs text-gray-500">
                                    i rozpocznij zakupy
                                </div>
                            </div>

                            <ChevronDown className="h-4 w-4 text-gray-500"/>
                        </MenuButton>

                        <MenuItems
                            className="absolute left-0 top-[calc(100%+10px)] z-50 w-72 rounded-2xl border border-gray-200 bg-white p-2 shadow-lg focus:outline-none">
                            <MenuItem>
                                {({focus}) => (
                                    <button
                                        className={`flex w-full items-start gap-3 rounded-xl px-3 py-3 text-left ${
                                            focus ? 'bg-gray-50' : ''
                                        }`}
                                    >
                                        <MapPin className="mt-0.5 h-5 w-5 text-emerald-600"/>
                                        <div>
                                            <div className="text-sm font-medium text-gray-900">
                                                Ustaw adres dostawy
                                            </div>
                                            <div className="text-xs text-gray-500">
                                                Wybierz lokalizację, aby rozpocząć zakupy
                                            </div>
                                        </div>
                                    </button>
                                )}
                            </MenuItem>

                            <MenuItem>
                                {({focus}) => (
                                    <button
                                        className={`flex w-full items-start gap-3 rounded-xl px-3 py-3 text-left ${
                                            focus ? 'bg-gray-50' : ''
                                        }`}
                                    >
                                        <MapPin className="mt-0.5 h-5 w-5 text-gray-500"/>
                                        <div>
                                            <div className="text-sm font-medium text-gray-900">
                                                Warszawa, Centrum
                                            </div>
                                            <div className="text-xs text-gray-500">
                                                Ostatnio używany adress
                                            </div>
                                        </div>
                                    </button>
                                )}
                            </MenuItem>
                        </MenuItems>
                    </Menu>
                </div>

                <div className="mx-4 hidden max-w-[860px] flex-1 lg:flex">
                    <form className="flex w-full overflow-hidden rounded-xl border border-gray-200 bg-gray-50">
                        <input
                            type="text"
                            placeholder="Szukaj produktów"
                            className="w-full bg-transparent px-5 py-3 text-[15px] text-gray-900 outline-none placeholder:text-gray-500"
                        />
                        <button
                            type="submit"
                            className="flex w-14 items-center justify-center bg-emerald-600 text-white transition hover:bg-emerald-700"
                        >
                            <Search className="h-5 w-5"/>
                        </button>
                    </form>
                </div>

                <div className="flex items-center gap-6 xl:gap-10">
                    <button className="flex flex-col items-center text-gray-900 transition hover:text-emerald-700">
                        <User className="mb-1 h-6 w-6"/>
                        <span className="text-sm font-medium">Zaloguj się</span>
                    </button>

                    <button
                        className="relative flex flex-col items-center text-gray-900 transition hover:text-emerald-700">
                        <ShoppingCart className="mb-1 h-6 w-6"/>
                        <span className="text-sm font-medium">Twój koszyk</span>

                        <span
                            className="absolute -right-2 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-emerald-600 px-1 text-[11px] font-semibold text-white">
              2
            </span>
                    </button>
                </div>
            </div>

            <div className="border-t border-gray-100 px-4 py-3 lg:hidden">
                <form className="flex w-full overflow-hidden rounded-xl border border-gray-200 bg-gray-50">
                    <input
                        type="text"
                        placeholder="Szukaj produktów"
                        className="w-full bg-transparent px-4 py-3 text-sm outline-none placeholder:text-gray-500"
                    />
                    <button
                        type="submit"
                        className="flex w-12 items-center justify-center bg-emerald-600 text-white"
                    >
                        <Search className="h-5 w-5"/>
                    </button>
                </form>
            </div>
        </header>
    )
}