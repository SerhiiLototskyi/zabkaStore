type BreadcrumbItem = {
    label: string
    href?: string
}

type BreadcrumbsProps = {
    items: BreadcrumbItem[]
}

export const Breadcrumbs = ({ items }: BreadcrumbsProps) => {
    return (
        <nav aria-label="Breadcrumb" className="mb-4">
            <ol className="flex flex-wrap items-center gap-2 text-sm text-[#6f7488]">
                {items.map((item, index) => {
                    const isLast = index === items.length - 1

                    return (
                        <li key={`${item.label}-${index}`} className="flex items-center gap-2">
                            {item.href && !isLast ? (
                                <a href={item.href} className="transition hover:text-[#20214f]">
                                    {item.label}
                                </a>
                            ) : (
                                <span className={isLast ? 'text-[#20214f]' : ''}>{item.label}</span>
                            )}

                            {!isLast && <span className="text-[#a0a4b8]">/</span>}
                        </li>
                    )
                })}
            </ol>
        </nav>
    )
}