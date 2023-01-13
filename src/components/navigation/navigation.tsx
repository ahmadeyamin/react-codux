import styles from './navigation.module.scss';

export interface NavigationProps {
    className?: string;
}

export const Navigation = ({ className }: NavigationProps) => {
    return (
    <div className={`${styles.root} ${className} container`}>
        <div className={styles.navWrapper}>
            <div className={styles.logoWrapper}>
                <h3 className={styles.NavLogoText}>Eyamin</h3>
            </div>
            <div className={`${styles.navLinkWrapper} ${styles.navLinks}`}>
                <div className={styles.navLinkItems}>
                    <a href="/" className={styles.navLinkItem}>Home</a>
                    <a href="/" className={styles.navLinkItem}>Services</a>
                    <a href="/" className={styles.navLinkItem}>Projects</a>
                    <a href="/" className={styles.navLinkItem}>About</a>
                    <a href="/" className={styles.navLinkItem}>Blog</a>
                </div>
                <div className={styles.navCTA}>
                    <a href="/" className={styles.navCTAButton}>Lets's Talk</a>
                </div>
            </div>
        </div>
    </div>
    );
};
