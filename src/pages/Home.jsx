import Header from "../components/header/Header";

import NewArrival from "../components/home/NewArrival";
import Brands from "../components/home/Brands";
import Collection from "../components/home/Collection";
import JustForYou from "../components/home/JustForYou";
import Trending from "../components/home/Trending";
import AboutUs from "../components/home/AboutUs";
import FollowUs from "../components/home/FollowUs";
import Footer from "../components/Footer";

export default function Home() {
    return (
        <>
            <Header />
            <main>
                <div className="max-w-6xl mx-auto">
                    <NewArrival />
                    <Brands />
                    <Collection />
                    <JustForYou />
                </div>
                <Trending />
                <AboutUs />
                <FollowUs />
            </main>
            <Footer />
        </>
    );
}