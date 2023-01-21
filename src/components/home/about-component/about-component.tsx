import styles from './about-component.module.scss';

export interface AboutComponentProps {
    className?: string;
}

export const AboutComponent = ({ className }: AboutComponentProps) => {
    return (
        <div className={`${styles.root} ${className}`}>
            <div className={`container ${styles.AboutContainer}`}>
                <div className={styles.AboutHeader}>
                    <div className={styles.AboutHeaderLeft}>
                        <div>
                            <h3 className={`${styles.AboutTitleText} text-white`}>
                                Ahmad <br /> Eyamin
                            </h3>
                        </div>
                    </div>
                    <div className={styles.AboutHeaderRight}>
                        <div className={styles.AboutBio}>
                            <div className={styles.AboutBioLeft}>
                                <p className="text-white">
                                    21 years old freelance software developer. Experience in
                                    Laravel, React Native, Webflow.
                                </p>
                            </div>
                            <div className={styles.AboutBioRight}>
                                <p className="text-white">
                                    I am a professional, very much self-directed, and motivated web
                                    developer. Since 2017, I have been a full-time Web developer
                                    &amp; developed a wide range of static &amp; dynamic websites
                                    for startup companies and big businesses using HTML, CSS, PHP,
                                    Laravel, Wobflow, Vue, and React Native.
                                </p>
                            </div>
                        </div>
                        <div className={styles.AboutCountWarpper}>
                            <div className={`${styles.AboutCountItem} text-white`}>
                                <h2 className={styles.AboutCountNumber}>150+</h2>
                                <p>Project done</p>
                            </div>
                            <div className={`${styles.AboutCountItem} text-white`}>
                                <h2 className={styles.AboutCountNumber}>05+</h2>
                                <p>Years of experience</p>
                            </div>
                            <div className={`${styles.AboutCountItem} text-white`}>
                                <h2 className={styles.AboutCountNumber}>100%</h2>
                                <p>Client satisfaction</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
