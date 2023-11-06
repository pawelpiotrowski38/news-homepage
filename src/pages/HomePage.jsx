import HeroSection from '../components/HeroSection';
import NewArticlesSection from '../components/NewArticlesSection';
import PopularArticlesSection from '../components/PopularArticlesSection';
import '../styles/homePage.css';

const newArticles = [
    {
        id: 23523,
        title: 'Hydrogen VS Electric Cars',
        desc: 'Will hydrogen-fueled cars ever catch up to EVs?',
    },
    {
        id: 76457,
        title: 'The Downsides of AI Artistry',
        desc: 'What are the possible adverse effects of on-demand AI image generation?',
    },
    {
        id: 33421,
        title: 'Is VC Funding Drying Up?',
        desc: 'Private funding by VC firms is down 50% YOY. We take a look at what that means.',
    },
]

const popularArticles = [
    {
        id: 11231,
        title: 'Reviving Retro PCs',
        desc: 'What happens when old PCs are given modern upgrades?',
        imgPath: './images/image-retro-pcs.jpg',
        imgAlt: 'Bunch of retro PCs',
    },
    {
        id: 23423,
        title: 'Top 10 Laptops of 2022',
        desc: 'Our best picks for various needs and budgets.',
        imgPath: './images/image-top-laptops.jpg',
        imgAlt: 'Close look of keyboard',
    },
    {
        id: 34511,
        title: 'The Growth of Gaming',
        desc: 'How the pandemic has sparked fresh opportunities.',
        imgPath: './images/image-gaming-growth.jpg',
        imgAlt: 'Hand tossing a gamepad',
    },
]

export default function HomePage() {
    return (
        <main className='home-page'>
            <div className='home-page__main'>
                <HeroSection />
                <NewArticlesSection
                    articles={newArticles}
                />
            </div>
            <PopularArticlesSection
                articles={popularArticles}
            />
        </main>
    )
}