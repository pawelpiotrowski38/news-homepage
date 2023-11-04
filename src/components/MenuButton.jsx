import '../styles/menuButton.css';

export default function MenuButton({ onToggleNavigation }) {
    return (
        <button className="menu-button" onClick={onToggleNavigation}>
            <img className="menu-button__image" src="./images/icon-menu.svg" alt="W." />
        </button>
    )
}