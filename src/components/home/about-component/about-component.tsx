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
                <div className={styles.AboutFeatured}>
                    <div className={styles.AboutFeaturedBox1}>
                        <img
                            src="https://cdn.dribbble.com/userupload/4361536/file/original-ec02c91de4d997bdac711ce9973b33e7.jpg"
                            className={styles.AboutFeaturedImg}
                        />
                    </div>
                    <div className={styles.AboutFeaturedBox2}>
                        <img
                            src="https://cdn.dribbble.com/users/10317475/screenshots/20441640/media/686cefea1668c6df8655e09212dd7340.jpg"
                            className={styles.AboutFeaturedImg}
                        />
                    </div>
                    <div className={styles.AboutFeaturedBoxSub}>
                        <div className={styles.AboutFeaturedImgSmallBox}>
                            <img
                                src="https://cdn.dribbble.com/userupload/4361467/file/original-cf4d39170bc4117af440765fd8a6be27.webp"
                                className={styles.AboutFeaturedImgSmall}
                            />
                        </div>
                        <div className={styles.AboutFeaturedImgSmallBox}>
                            <img
                                src="https://cdn.dribbble.com/userupload/4358949/file/original-4f2e87852deeaf2bea732c0212796dca.jpg"
                                className={`${styles.AboutFeaturedImgSmall} ${styles.AboutFeaturedImgSmall}`}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
