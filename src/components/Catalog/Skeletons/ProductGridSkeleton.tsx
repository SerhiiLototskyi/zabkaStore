type ProductGridSkeletonProps = {
    count?: number
}

export const ProductGridSkeleton = ({
                                        count = 8,
                                    }: ProductGridSkeletonProps) => {
    return (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
            {Array.from({ length: count }).map((_, index) => (
                    <article
                        key={index}
                className="flex min-h-[360px] animate-pulse flex-col rounded-[20px] border border-[#dfe3ea] bg-white p-5"
                >
                <div className="relative flex h-[170px] items-center justify-center">
                <div className="absolute right-0 top-0 h-11 w-11 rounded-full bg-[#eef1f5]" />
                <div className="h-[120px] w-[120px] rounded-[20px] bg-[#f3f5f8]" />
                    </div>

                    <div className="mt-4 flex flex-1 flex-col">
                <div className="h-6 w-[75%] rounded bg-[#eef1f5]" />
                <div className="mt-2 h-6 w-[55%] rounded bg-[#eef1f5]" />

                <div className="mt-3 h-4 w-[30%] rounded bg-[#f1f3f6]" />

                <div className="mt-auto pt-5">
                <div className="h-6 w-[40%] rounded bg-[#e7f5ee]" />
                <div className="mt-3 h-7 w-[60px] rounded-full bg-[#e7f5ee]" />
                    </div>
                    </div>
                    </article>
    ))}
    </div>
)
}