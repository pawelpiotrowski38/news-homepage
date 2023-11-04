import Logo from "./Logo";
import Navigation from "./Navigation";
import MenuButton from "./MenuButton";
import '../styles/header.css';

export default function Header() {
    return (
        <header className="header">
            <Logo />
            <Navigation />
            <MenuButton />
        </header>
    )
}