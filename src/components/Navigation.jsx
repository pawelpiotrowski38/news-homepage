import NavigationItem from "./NavigationItem";
import '../styles/navigation.css';

export default function Navigation() {
    return (
        <nav className="navigation">
            <div className="navigation__close-button-container">
                <button className="navigation__close-button">
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