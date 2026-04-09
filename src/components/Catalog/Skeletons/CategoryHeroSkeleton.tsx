export const CategoryHeroSkeleton = () => {
    return (
        <section className="overflow-hidden rounded-[28px] bg-[#e8f5ee]">
            <div className="flex min-h-[220px] flex-col justify-between gap-6 px-6 py-6 md:min-h-[260px] md:flex-row md:items-center md:px-8 lg:px-10">
                <div className="max-w-[720px] flex-1 animate-pulse">
                    <div className="h-10 w-[320px] rounded-[12px] bg-white/70 md:h-12 md:w-[420px]" />
                    <div className="mt-4 h-4 w-full max-w-[620px] rounded bg-white/60" />
                    <div className="mt-3 h-4 w-full max-w-[560px] rounded bg-white/60" />
                    <div className="mt-3 h-4 w-full max-w-[480px] rounded bg-white/60" />
                </div>

                <div className="flex w-full justify-center md:w-[320px] lg:w-[380px]">
                    <div className="h-[150px] w-full max-w-[320px] animate-pulse rounded-[24px] bg-white/50 md:h-[180px] lg:h-[200px]" />
                </div>
            </div>
        </section>
    )
}