export type FaqItem = {
    id: string
    question: string
    answer: string
}
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { ChevronDown } from 'lucide-react'

type FaqSectionProps = {
    title: string
    items: FaqItem[]
}

export const FaqSection = ({ title, items }: FaqSectionProps) => {
    return (
        <section className="bg-[#f3f3f3] py-10 md:py-8">
            <div className="mx-auto w-full max-w-[1560px] px-4 md:px-6 xl:px-10">
                <div className="mx-auto max-w-[1040px]">
                    {/* Заголовок секции */}
                    <h2 className="text-[32px] font-semibold leading-tight text-[#20214f] md:text-[25px]">
                        {title}
                    </h2>

                    {/* Список FAQ */}
                    <div className="mt-1 divide-y divide-[#dfe3ea] border-t border-b border-[#dfe3ea]">
                        {items.map((item, index) => (
                            <Disclosure key={item.id} defaultOpen={index === 1}>
                                {({ open }) => (
                                    <div className="py-1">
                                        <DisclosureButton className="flex w-full items-center justify-between gap-6 py-2 text-left">
                      <span className="text-[20px] font-semibold leading-[1.35] text-[#20214f] md:text-[16px]">
                        {item.question}
                      </span>

                                            <ChevronDown
                                                className={`h-6 w-6 shrink-0 text-[#8a8ea3] transition-transform duration-200 ${
                                                    open ? 'rotate-180' : ''
                                                }`}
                                            />
                                        </DisclosureButton>

                                        <DisclosurePanel className="pb-6 pr-12 text-[18px] leading-[1.6] text-[#2f3553] md:text-[15px]">
                                            {item.answer}
                                        </DisclosurePanel>
                                    </div>
                                )}
                            </Disclosure>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}