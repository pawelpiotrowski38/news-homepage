import NavigationItem from "./NavigationItem";
import '../styles/navigation.css';

export default function Navigation({ isNavigationOpen, onSetIsNavigationOpen }) {
    return (
        <nav className={`navigation ${isNavigationOpen ? 'navigation--visible' : ''}`}>
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