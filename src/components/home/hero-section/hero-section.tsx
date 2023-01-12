import styles from './hero-section.module.scss';

export interface HeroSectionProps {
    className?: string;
}

export const HeroSection = ({ className }: HeroSectionProps) => {
    return <div className={`${styles.root} ${className}`}>
        <div className={styles.HeroWrapper}>
            <div className={styles.DevAvatar}>
                <img src="https://xsgames.co/randomusers/assets/avatars/male/74.jpg" className="img" />
            </div></div>
    </div>;
};
