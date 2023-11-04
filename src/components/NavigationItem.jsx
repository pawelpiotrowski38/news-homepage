import '../styles/navigationItem.css';

export default function NavigationItem({ children }) {
    return (
        <li className="navigation-item">
            {children}
        </li>
    )
}