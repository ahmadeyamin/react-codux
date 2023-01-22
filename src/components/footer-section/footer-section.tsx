import styles from './footer-section.module.scss';

export interface FooterSectionProps {
    className?: string;
}

export const FooterSection = ({ className }: FooterSectionProps) => {
    return (
        <div className={`${styles.root} ${className}`}>
            <div className={`${styles.FooterWrapper} container`}>
                <div className={styles.FooterHead}>
                    <div className={styles.FooterBrand}>
                        <h2 className={`text-white ${styles.FooterBrandName}`}>Eymain.</h2>
                    </div>
                    <div className={styles.FooterLinks}>
                        <ul className={styles.FooterLinkList}>
                            <li className={styles.FooterLinkListItem}>
                                <a href="/" className="text-white">
                                    Home
                                </a>
                            </li>
                            <li className={styles.FooterLinkListItem}>
                                <a href="/" className="text-white">
                                    About us
                                </a>
                            </li>
                            <li className={styles.FooterLinkListItem}>
                                <a href="/" className="text-white">
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className={styles.FooterBottom}>
                    <div className={styles.FooterCredit}>
                        <p className="text-white">&copy; Designed by Ahmad Eyamin.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};
