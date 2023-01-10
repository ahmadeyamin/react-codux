import styles from './navigation.module.scss';

export interface NavigationProps {
    className?: string;
}

export const Navigation = ({ className }: NavigationProps) => {
    return <div className={`${styles.root} ${className}`}>
        <div className={styles.navWrapper}>
            <div className={styles.logoWrapper}>
                <img src="https://itechut.com/images/logo256x.png" className={styles.logoSrc} />
            </div>
            <div className={styles.navLinkWrapper} /></div>
    </div>;
};
