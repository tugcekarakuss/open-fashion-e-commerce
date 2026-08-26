import MobileNavbar from "../header/MobileNavbar"
import DesktopNavbar from "../header/DesktopNavbar"
export default function Navbar() {
    return (
        <nav className="fixed top-0 px-3 py-5 lg:p-0 right-0 left-0 z-30 font-tenor-sans bg-menu shadow-2xs">
            <MobileNavbar/>
            <DesktopNavbar/>
        </nav>
    )
}