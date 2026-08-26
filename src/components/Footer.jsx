import Twitter from "../assets/icons/Twitter.svg"
import Instagram from "../assets/icons/Instagram.svg"
import Youtube from "../assets/icons/Youtube.svg"
import Divider from "./common/Divider";


export default function Footer() {
    return (
        <footer className="text-text-body bg-white/20 font-tenor-sans ">
            <div className="mx-auto max-w-7xl px-6 py-8 md:px-10 lg:px-12 lg:py-14">

                <div className="flex flex-col items-center lg:grid lg:grid-cols-3 lg:items-center">

                    {/* Social Media */}
                    <div className="flex items-center justify-center gap-9 lg:justify-start">
            
                        <a
                            href="#"
                            aria-label="Twitter"
                            className="text-[15px] transition-opacity hover:opacity-60"
                        >
                            <img src={Twitter} alt="twitter icon" />
                        </a>

                        <a
                            href="#"
                            aria-label="Instagram"
                            className="text-[15px] transition-opacity hover:opacity-60"
                        >
                            <img src={Instagram} alt="instagram icon" />

                        </a>

                        <a
                            href="#"
                            aria-label="Youtube"
                            className="text-[15px] transition-opacity hover:opacity-60"
                        >
                            <img src={Youtube} alt="youtube icon" />

                        </a>
                    </div>


                    {/* Contact */}
                    <div className=" mt-8 text-center lg:mt-0">
                        <Divider />

                        <div className="space-y-2 text-sm my-5 leading-relaxed">
                            <p>support@openui.design</p>
                            <p>+60 825 876</p>
                            <p>08:00 - 22:00 - Everyday</p>
                        </div>

                        <Divider />
                    </div>


                    {/* Navigation */}
                    <nav className=" mt-8 flex items-center gap-10 lg:mt-0 lg:justify-end">
           
                        <a
                            href="#about"
                            className="text-sm transition-opacity hover:opacity-60"
                        >
                            About
                        </a>

                        <a
                            href="#contact"
                            className="text-sm transition-opacity hover:opacity-60"
                        >
                            Contact
                        </a>

                        <a
                            href="#blog"
                            className="text-sm transition-opacity hover:opacity-60"
                        >
                            Blog
                        </a>
                    </nav>

                </div>

            </div>


            {/* Copyright */}
            <div className=" border-t border-gray-100 bg-menu px-6 py-3.5 text-center">
                <p className="text-[11px] tracking-wide text-gray-500">
                    Copyright© OpenUI All Rights Reserved.
                </p>
            </div>
        </footer>
    );
}