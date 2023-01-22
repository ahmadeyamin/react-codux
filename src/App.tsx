import styles from './App.module.scss';
import { Navigation } from './components/navigation/navigation';
import { HeroSection } from './components/home/hero-section/hero-section';
import { CategorySection } from './components/home/category-section/category-section';
import { ProjectSection } from './components/home/project-section/project-section';
import { AboutComponent } from './components/home/about-component/about-component';
import { ContactSection } from './components/home/contact-section/contact-section';
import { FooterSection } from './components/footer-section/footer-section';

function App() {
    return (
        <div className={`${styles.App} app`}>
            <Navigation />
            <HeroSection />
            <CategorySection />
            <ProjectSection />
            <AboutComponent />
            <ContactSection />
            <FooterSection />
        </div>
    );
}

export default App;
