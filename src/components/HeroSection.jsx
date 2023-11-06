import '../styles/heroSection.css';

export default function HeroSection() {
    return (
        <section className="hero-section">
            <div className="hero-section__image-container">
                <picture>
                    <source srcSet="./images/image-web-3-desktop.jpg" media="(min-width: 42.875em)" />
                    <img className="hero-section__image" src="./images/image-web-3-mobile.jpg"  alt="colorful shapes" />
                </picture>
            </div>
            <div className="hero-section__text-container">
                <h1 className="hero-section__title">
                    The Bright Future of Web 3.0?
                </h1>
                <div className="hero-section__description-container">
                    <p className="hero-section__description">
                        We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. But is it really fulfilling its promise?
                    </p>
                    <button className="hero-section__read-more-button">
                        READ MORE
                    </button>
                </div>
            </div>
        </section>
    )
}