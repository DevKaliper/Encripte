import { Outlet } from "react-router-dom";
import ToggleMode from "../components/ToggleMode";
import Header from "../components/Header";
import Footer from "../components/Footer";

const UsageLayout = () => {
    return (
        <div className="h-screen w-screen relative overflow-hidden">
            <nav><Header/></nav>
            <Outlet />
            <ToggleMode />
            <Footer />
        </div>
    );
};
export default UsageLayout;