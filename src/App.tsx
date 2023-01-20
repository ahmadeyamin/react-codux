import styles from './App.module.scss';
import { Navigation } from './components/navigation/navigation';
import { HeroSection } from './components/home/hero-section/hero-section';
import { CategorySection } from './components/home/category-section/category-section';
import { ProjectSection } from './components/home/project-section/project-section';

function App() {
    return (
        <div className={`${styles.App} app`}>
            <Navigation />
            <HeroSection></HeroSection>
            <CategorySection />
            <ProjectSection />
        </div>
    );
}

export default App;
