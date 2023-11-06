import NavigationItem from "./NavigationItem";
import '../styles/navigation.css';
import { useEffect, useRef } from "react";

export default function Navigation({ isNavigationOpen, onSetIsNavigationOpen }) {
    const navRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (navRef && navRef.current && !navRef.current.contains(event.target)) {
                onSetIsNavigationOpen(false);
            }
        };
    
        document.addEventListener("mousedown", handleClickOutside);
    
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [onSetIsNavigationOpen]);

    return (
        <nav ref={navRef} className={`navigation ${isNavigationOpen ? 'navigation--visible' : ''}`}>
            <div className="navigation__close-button-container">
                <button
                    className="navigation__close-button"
                    onClick={() => onSetIsNavigationOpen(false)}
                >
                    <img className="navigation__close-button-image" src="./images/icon-menu-close.svg" alt="X" />
                </button>
            </div>
            <ul className="navigation__list">
                <NavigationItem>
                    Home
                </NavigationItem>
                <NavigationItem>
                    New
                </NavigationItem>
                <NavigationItem>
                    Popular
                </NavigationItem>
                <NavigationItem>
                    Trending
                </NavigationItem>
                <NavigationItem>
                    Categories
                </NavigationItem>
            </ul>
        </nav>
    )
}