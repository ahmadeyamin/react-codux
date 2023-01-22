import styles from './Service.module.scss';
import { Navigation } from './components/navigation/navigation';
import { FooterSection } from './components/footer-section/footer-section';
import { ServiceBlock } from './components/service/service-block/service-block';

function Service() {
    return (
        <div className={`${styles.App} app`}>
            <Navigation />
            <ServiceBlock />
            <FooterSection />
        </div>
    );
}

export default Service;
