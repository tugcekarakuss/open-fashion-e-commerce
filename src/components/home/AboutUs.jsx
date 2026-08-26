import Divider from "../common/Divider";

import Logo from "../../assets/icons/Logo.svg";

import Shapes from "../../assets/icons/MiroodlesSticker.svg";
import Plant from "../../assets/icons/MiroodlesSticker-2.svg";
import Material from "../../assets/icons/MiroodlesSticker-3.svg";
import Heart from "../../assets/icons/MiroodlesSticker-4.svg";
import LineIcon from "../../assets/icons/divider-icon.svg"
const features = [
  {
    id:1,
    icon: Shapes,
    alt: "shipping icon",
    text: "Fast shipping. Free on orders over $25.",
  },
  {
    id:2,
    icon: Plant,
    alt: "sustainable process icon",
    text: "Sustainable process from start to finish.",
  },
  {id:3,
    icon: Material,
    alt: "unique design icon",
    text: "Unique designs and high-quality materials.",
  },
  {
    id:4,
    icon: Heart,
    alt: "customer service icon",
    text: "Fast shipping. Free on orders over $25.",
  },
];

export default function AboutUs() {
  return (
    <section className="px-6 bg-white/10 py-12 sm:px-10 lg:px-16 lg:py-20">
      <div className="mx-auto max-w-7xl">
        {/* Intro */}
        <div className="mx-auto flex max-w-2xl flex-col items-center text-center">
          <img
            src={Logo}
            alt="Open Fashion logo"
            className="w-32 sm:w-36 lg:w-40"
          />

          <p className="mt-5 max-w-md font-tenor-sans text-sm leading-6 tracking-wide text-gray-600 sm:text-base lg:max-w-lg lg:leading-7">
            Making a luxurious lifestyle accessible for a generous group of
            women is our daily drive.
          </p>

          <div className="mt-5">
            <Divider />
          </div>
        </div>

        {/* Features */}
        <div className="mt-10 grid grid-cols-2 gap-x-6 gap-y-10 sm:gap-x-10 lg:mt-14 lg:grid-cols-4 lg:gap-x-12">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="flex flex-col items-center text-center"
            >
              <img
                src={feature.icon}
                alt={feature.alt}
                className="h-12 w-12 object-contain sm:h-14 sm:w-14"
              />

              <p className="mt-4 max-w-48 font-tenor-sans text-xs leading-5 text-gray-600 sm:text-sm sm:leading-6">
                {feature.text}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom decoration */}
        <div className="mt-12 flex justify-center lg:mt-16">
          <img
            src={LineIcon}
            alt=""
            className="w-16 opacity-50"
          />
        </div>
      </div>
    </section>
  );
}