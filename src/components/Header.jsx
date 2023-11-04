import { useState } from "react";
import Logo from "./Logo";
import Navigation from "./Navigation";
import MenuButton from "./MenuButton";
import Mask from "./Mask";
import '../styles/header.css';

export default function Header() {
    const [isNavigationOpen, setIsNavigationOpen] = useState(false);

    const handleToggleNavigation = function() {
        setIsNavigationOpen((open) => !open);
    }

    return (
        <header className="header">
            <Logo />
            <Navigation 
                isNavigationOpen={isNavigationOpen}
                onSetIsNavigationOpen={setIsNavigationOpen}
            />
            <MenuButton 
                onToggleNavigation={handleToggleNavigation}
            />
            <Mask
                isState={isNavigationOpen}
            />
        </header>
    )
}