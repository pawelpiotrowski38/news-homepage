import '../styles/popularArticlesSection.css';

export default function PopularArticlesSection({ articles }) {
    return (
        <section className="popular-articles-section">
            <ul className="popular-articles-section__list">
                {articles.map((article, index) => (
                    <li key={article.id} className="popular-articles-section__list-item">
                        <div className='popular-articles-section__image-container'>
                            <img className='popular-articles-section__image' src={article.imgPath} alt={article.imgAlt} />
                        </div>
                        <div className='popular-articles-section__text-container'>
                            <h2 className="popular-articles-section__list-item-number">
                                {`0${index + 1}`}
                            </h2>
                            <h3 className="popular-articles-section__list-item-title">
                                {article.title}
                            </h3>
                            <p className="popular-articles-section__list-item-desc">
                                {article.desc}
                            </p>
                        </div>
                    </li>
                ))}
            </ul>
        </section>
    )
}