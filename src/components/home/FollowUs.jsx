import Instagram from "../../assets/icons/Instagram-line.svg";

import Mia from "../../assets/images/home/follow-us/mia.svg";
import Jihyun from "../../assets/images/home/follow-us/jihyn.svg";
import MiaTwo from "../../assets/images/home/follow-us/emily.svg";
import JihyunTwo from "../../assets/images/home/follow-us/james.svg";

const posts = [
    {
        image: Mia,
        username: "@mia",
    },
    {
        image: Jihyun,
        username: "@_jihyun",
    },
    {
        image: MiaTwo,
        username: "@mia",
    },
    {
        image: JihyunTwo,
        username: "@_jihyun",
    },
];

export default function FollowUs() {
    return (
        <section className="w-full  px-5 py-12 sm:px-8 lg:py-20 bg-menu">
            <div className="mx-auto max-w-6xl">

                {/* Heading */}
                <div className="flex flex-col items-center">
                    <h2 className="font-tenor-sans text-text-body text-2xl tracking-[0.25em]">
                        FOLLOW US
                    </h2>

                    <img
                        src={Instagram}
                        alt="Instagram"
                        className="mt-4 h-5 w-5"
                    />
                </div>

                {/* Instagram Posts */}
                <div className="mt-8 grid grid-cols-2 gap-3 sm:gap-4 lg:mt-10 lg:grid-cols-4 lg:gap-5">
                    {posts.map((post, index) => (
                        <div
                            key={`${post.username}-${index}`}
                            className="relative aspect-square overflow-hidden"
                        ><a href="https://www.uistore.design/items/open-fashion-free-ecommerce-ui-kit/">
                                <img
                                    src={post.image}
                                    alt={`${post.username} Instagram post`}
                                    className="h-full w-full object-cover"
                                />

                                {/* Dark gradient */}
                                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-linear-to-t from-black/60 to-transparent" />

                                {/* Username */}

                                <p className="absolute bottom-2 left-2 font-tenor-sans text-xs text-white sm:bottom-3 sm:left-3 sm:text-sm">
                                    {post.username}
                                </p></a>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}