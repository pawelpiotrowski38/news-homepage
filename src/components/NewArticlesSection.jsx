import '../styles/newArticlesSection.css';

export default function NewArticlesSection({ articles }) {
    return (
        <section className="new-articles-section">
            <h2 className="new-articles-section__title">
                New
            </h2>
            <ul className="new-articles-section__list">
                {articles.map((article, index) => (
                    <li key={article.id} className="new-articles-section__list-item">
                        <h3 className="new-articles-section__list-item-title">
                            {article.title}
                        </h3>
                        <p className="new-articles-section__list-item-desc">
                            {article.desc}
                        </p>
                        {articles.length - 1 !== index && (
                            <span className='new-articles-section__list-item-line'></span>
                        )}
                    </li>
                ))}
            </ul>
        </section>
    )
}