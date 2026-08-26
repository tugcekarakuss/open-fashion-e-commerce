import { justForYouProducts } from "../../data/new_arrival"

export default function JustForYou() {
    return (
        <section className="py-16 lg:py-24">
            <div className="mx-auto max-w-7xl px-5 lg:px-8">

                {/* Heading */}
                <div className="mb-8 flex flex-col items-center">

                    <h2 className="font-tenor-sans text-lg uppercase tracking-[0.3em] lg:text-2xl">
                        Just For You
                    </h2>

                    <div className="relative mt-4 w-32 border-t border-placeholder">
                        <span className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rotate-45 border border-placeholder bg-white" />
                    </div>

                </div>

                {/* Products */}
                <div className="flex gap-3 overflow-x-auto pb-4 scrollbar-hide lg:grid lg:grid-cols-4 lg:gap-6 lg:overflow-visible">

                    {justForYouProducts.map(product => (

                        <article
                            key={product.id}
                            className="w-[75%] shrink-0 sm:w-[45%] lg:w-auto"
                        >

                            <div className="aspect-4/5 overflow-hidden bg-placeholder/10">

                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                                />

                            </div>

                            <div className="mt-3 text-center">

                                <h3 className="font-tenor-sans text-sm leading-6 lg:text-base">
                                    {product.name}
                                </h3>

                                <p className="mt-1 text-sm text-primary">
                                    ${product.price}
                                </p>

                            </div>
                        </article>

                    ))}

                </div>

                {/* Dots */}
                <div className="mt-7 flex justify-center gap-2 lg:hidden">
                    <span className="h-2 w-2 rotate-45 bg-placeholder" />
                    <span className="h-2 w-2 rotate-45 border border-placeholder" />
                    <span className="h-2 w-2 rotate-45 border border-placeholder" />
                </div>

            </div>
        </section>
    )
}