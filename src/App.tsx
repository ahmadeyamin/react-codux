
import styles from './App.module.scss';
import { Navigation } from './components/navigation/navigation';
import { HeroSection } from './components/home/hero-section/hero-section';

function App() {
    return (
        <div className={`${styles.App} app`}>
            <Navigation />
            <HeroSection />
        </div>
    );
}

export default App;
