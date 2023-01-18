
import styles from './App.module.scss';
import { Navigation } from './components/navigation/navigation';
import { HeroSection } from './components/home/hero-section/hero-section';
import { CategorySection } from './components/home/category-section/category-section';

function App() {
    return (
        <div className={`${styles.App} app`}>
            <Navigation />
            <HeroSection></HeroSection>
            <CategorySection />
        </div>
    );
}

export default App;
