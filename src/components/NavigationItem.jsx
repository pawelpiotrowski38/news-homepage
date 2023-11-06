import '../styles/navigationItem.css';

export default function NavigationItem({ children }) {
    return (
        <li className="navigation-item">
            <button className="navigation-item__link">
                {children}
            </button>
        </li>
    )
}