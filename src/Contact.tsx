import styles from './Service.module.scss';
import { Navigation } from './components/navigation/navigation';
import { FooterSection } from './components/footer-section/footer-section';

function Contact() {
    return (
        <div className={`${styles.App} app`}>
            <Navigation />
            
            <FooterSection />
        </div>
    );
}

export default Contact;
