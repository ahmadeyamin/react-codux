import styles from './hero-section.module.scss';

export interface HeroSectionProps {
    className?: string;
}

export const HeroSection = ({ className }: HeroSectionProps) => {
    return <div className={`${styles.root} ${className}`}>
        <div className={styles.HeroWrapper}>
            <div className={styles.DevAvatar}>
                <img src="https://www.upwork.com/profile-portraits/c1LCszibyBDMuLzQ4LQtMTdd6lp6O24_5jVC7TVAASp_Mn_LkcgiZAO4owJ9QysI3S" className="img" />
            </div>
            <div className={styles.HeroIntro}>
                <h2 className={styles.HeroIntroText}>
                    <span className={styles.HeroIntroName}>Hello, I&apos;m Eyamin, </span>Creative designer based in Bangladesh
                </h2>
                <p className={`text-white ${styles.IntroBio}`}>A web designer and developer in Bangladesh. I specialized in Responsive Web Design and Backend technology </p>
            </div>
            <div className={styles.HeroCTAWrapper}>
                <a href="/" className="btn">Get In Touch</a>
                <a href="/" className="btn outline">View All Works</a>
            </div>
            <div className={styles.HeroRipple}>
                <div className={styles.heroRippleBG} />
                <div className={styles.rippleOverflow}>
                    <div className={styles.heroRippleText}>
                        <ul className={styles.HeroRippleTexts}>
                            <li className={styles.HeroRippleItem}>Webflow</li>
                            <li className={styles.HeroRippleItem}>Tailwind CSS</li>
                            <li className={styles.HeroRippleItem}>JavaScript</li>
                            <li className={styles.HeroRippleItem}>React JS</li>
                            <li className={styles.HeroRippleItem}>Design</li>
                            <li className={styles.HeroRippleItem}>Develop</li>
                            <li className={styles.HeroRippleItem}>Discover</li>
                        </ul>
                    </div>
                </div></div></div>
    </div>;
};
