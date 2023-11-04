import Logo from "./Logo";
import MenuButton from "./MenuButton";
import '../styles/header.css';

export default function Header() {
    return (
        <header className="header">
            <Logo />
            <MenuButton />
        </header>
    )
}