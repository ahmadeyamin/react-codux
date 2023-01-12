import styles from './hero-section.module.scss';

export interface HeroSectionProps {
    className?: string;
}

export const HeroSection = ({ className }: HeroSectionProps) => {
    return <div className={`${styles.root} ${className}`}>
        <div className={styles.HeroWrapper}>
            <div className={styles.DevAvatar}>
                <img src="https://xsgames.co/randomusers/assets/avatars/male/74.jpg" className="img" />
            </div>
            <div className={styles.HeroIntro}>
                <h2 className={styles.HeroIntroText}>
                    <span className={styles.HeroIntroName}>Hello, I&apos;m Eyamin, </span>Creative designer based in Bangladesh
                </h2>
            </div>
        </div>
    </div>;
};
