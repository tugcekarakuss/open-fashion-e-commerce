import Footer from "../components/Footer";
import Navbar from "../components/header/Navbar";
import Divider from "../components/common/Divider";
export default function ContactUs() {
    const handleChat = () => {
        alert("Chat support is currently unavailable.");
    };

    const handleText = () => {
        alert("Text support is currently unavailable.");
    };
    return (
        <>
            <Navbar />
            <section className="bg-white px-3 pb-16 pt-32 lg:px-8 lg:pb-24 lg:pt-40">
                <div className="mx-auto max-w-7xl">
                    {/* Page Title */}
                    <div className="mb-12 text-center lg:mb-20">
                        <div className="flex items-center justify-center gap-3">

                            <h1 className="font-tenor-sans text-[17px] uppercase tracking-[0.28em] text-[#222] lg:text-2xl">
                                Contact Us
                            </h1>
                        </div>
                        <Divider />
                    </div>

                    {/* Contact Options */}
                    <div className="grid grid-cols-1 gap-16 lg:grid-cols-3 lg:gap-10 xl:gap-20">
                        {/* Chat */}
                        <div className="flex flex-col items-center">
                            <div className="mb-6 text-[#ef845f]">
                                <svg
                                    width="52"
                                    height="52"
                                    viewBox="0 0 64 64"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M19 42.5C13.8 39.6 11 35.2 11 29.8C11 20.8 19.2 14 29.5 14C39.8 14 48 20.8 48 29.8C48 38.8 39.8 45.6 29.5 45.6C27.4 45.6 25.4 45.3 23.6 44.8L17 49V42.5H19Z"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                    />

                                    <path
                                        d="M20 27H38M20 32H33"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                    />
                                </svg>
                            </div>

                            <p className="max-w-77.5 text-left font-tenor-sans text-[14px] leading-[1.55] text-[#4b4b4b] lg:max-w-87.5 lg:text-center lg:text-[15px] lg:leading-[1.7]">
                                Need an ASAP answer? Contact us via chat, 24/7! For existing
                                furniture orders, please call us.
                            </p>

                            <button
                                onClick={handleChat}
                                type="button"
                                className="mt-5 min-w-32.5 bg-black px-7 py-3 font-tenor-sans text-[12px] tracking-wide text-white transition-opacity hover:opacity-80 lg:mt-7"
                            >
                                CHAT WITH US
                            </button>
                        </div>

                        {/* Text */}
                        <div className="flex flex-col items-center">
                            <div className="mb-6 text-[#ef845f]">
                                <svg
                                    width="52"
                                    height="52"
                                    viewBox="0 0 64 64"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M11 21.5L32 37L53 21.5"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                    />

                                    <rect
                                        x="11"
                                        y="16"
                                        width="42"
                                        height="32"
                                        rx="2"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                    />

                                    <circle
                                        cx="44"
                                        cy="17"
                                        r="8"
                                        fill="white"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                    />

                                    <path
                                        d="M44 13V21M40 17H48"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                    />
                                </svg>
                            </div>

                            <p className="max-w-77.5 text-left font-tenor-sans text-[14px] leading-[1.55] text-[#4b4b4b] lg:max-w-87.5 lg:text-center lg:text-[15px] lg:leading-[1.7]">
                                You can text us at <strong>800-309-2622</strong> — or click on
                                the “text us” link below on your mobile device. Please allow
                                the system to acknowledge a simple greeting (even “Hi” will
                                do!) before providing your question/order details. Consent is
                                not required for any purchase. Message and data rates may
                                apply. Text messaging may not be available via all carriers.
                            </p>

                            <button
                                onClick={handleText}
                                type="button"
                                className="mt-5 min-w-32.5 bg-black px-7 py-3 font-tenor-sans text-[12px] tracking-wide text-white transition-opacity hover:opacity-80 lg:mt-7"
                            >
                                TEXT US
                            </button>
                        </div>

                        {/* Social */}
                        <div className="flex flex-col items-center">
                            <div className="mb-6 text-[#ef845f]">
                                <svg
                                    width="52"
                                    height="52"
                                    viewBox="0 0 64 64"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M49 19.5C47.4 20.2 45.7 20.7 44 20.9C45.8 19.8 47.1 18.1 47.7 16C46 17 44.1 17.7 42.1 18.1C40.4 16.3 38 15.2 35.4 15.2C30.3 15.2 26.4 19.4 26.4 24.5C26.4 25.2 26.5 25.9 26.6 26.5C19.4 26.1 13 22.7 8.8 17.5C8 18.8 7.5 20.3 7.5 22C7.5 25.2 9.1 28 11.5 29.6C10.1 29.6 8.8 29.2 7.6 28.6V28.7C7.6 33.1 10.8 36.8 15 37.7C14.3 37.9 13.6 38 12.8 38C12.3 38 11.7 37.9 11.2 37.8C12.4 41.5 15.8 44.2 19.8 44.3C16.7 46.8 12.8 48.3 8.5 48.3C7.7 48.3 6.9 48.2 6.2 48.1C10.2 50.7 15 52.2 20.1 52.2C35.4 52.2 43.8 39.2 43.8 27.9C43.8 27.5 43.8 27.1 43.8 26.7C45.4 25.5 46.9 24 48 22.4C46.5 23.1 45 23.5 43.4 23.7C45 22.7 46.3 21.2 47 19.5H49Z"
                                        stroke="currentColor"
                                        strokeWidth="1.5"
                                    />
                                </svg>
                            </div>

                            <p className="max-w-77.5 text-left font-tenor-sans text-[14px] leading-[1.55] text-[#4b4b4b] lg:max-w-87.5 lg:text-center lg:text-[15px] lg:leading-[1.7]">
                                To send us a private or direct message, like Open Fashion on{" "}
                                <a
                                    href="https://www.facebook.com/"
                                    target="blank"
                                    className="underline transition-opacity hover:opacity-60"
                                >
                                    Facebook
                                </a>{" "}
                                or follow us on{" "}
                                <a
                                    href="https://x.com/"
                                    target="blank"
                                    className="underline transition-opacity hover:opacity-60"
                                >
                                    Twitter
                                </a>
                                . We’ll get back to you ASAP. Please include your name, order
                                number, and email address for a faster response!
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
}