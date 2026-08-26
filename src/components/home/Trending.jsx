export default function Trending() {
    const tags = [
        "#2026",
        "#spring",
        "#collection",
        "#fall",
        "#dress",
        "#autumncollection",
        "#openfashion",
    ]

    return (
        <section className="py-12 bg-menu">
            <div className="mb-8 text-center">
                <h2 className="font-tenor-sans text-2xl uppercase tracking-[0.25em] text-text-body">
                    @ Trending
                </h2>
            </div>

            <div className="mx-auto  flex max-w-md flex-wrap justify-evenly gap-3 px-5 lg:max-w-6xl lg:flex-nowrap lg:gap-4">    
                {tags.map(tag => (
                <a  href="https://x.com" target="_blank"
                    key={tag}
                    className="rounded-full bg-white/20  px-4 py-2 text-sm lg:text-xl text-text-body transition-colors duration-200 hover:bg-black hover:text-white lg:px-5 lg:py-2.5"
                >
                    {tag}
                </a>
            ))}
            </div>
        </section>
    )
}