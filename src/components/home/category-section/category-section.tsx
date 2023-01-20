import { useEffect, useState } from 'react';
import styles from './category-section.module.scss';

export interface CategorySectionProps {
    className?: string;
}

export const CategorySection = ({ className }: CategorySectionProps) => {
    const [imgX, setImgX] = useState(0);

    useEffect(() => {}, []);

    function mouseOverAnimation(e: any) {
        setImgX(e.clientX / 4);
    }

    return (
        <div className={`${styles.root} ${className}`}>
            <div className={`${styles.CatWrapper} container`}>
                <div className={styles.CatHeader}>
                    <div className={styles.CatTitle}>
                        <div>
                            <h3 className={`${styles.CatTitleText} text-white`}>
                                Projects that solve
                                <span className={styles.CatTextStyle}>
                                    <span className={styles.emptyLine}></span>
                                    problems, one
                                </span>
                                <span className={styles.colorText}>thing at a time</span>
                            </h3>
                        </div>
                    </div>
                    <div className={styles.CatLinks}>
                        <a href="/" className="btn bg-color">
                            Get in touch
                        </a>
                        <a href="/" className="btn outline">
                            View all works
                        </a>
                    </div>
                </div>
                <div className={styles.CatBody}>
                    <div className={styles.CatBodyList}>
                        <div
                            className={`${styles.CatItem} text-white`}
                            onMouseMove={mouseOverAnimation}
                        >
                            <h3 className={styles.CatItemTitle}>Webflow</h3>
                            <img
                                src="https://assets-global.website-files.com/583347ca8f6c7ee058111b3b/5952995a3d8aa14fb62fe053_og%20image.png"
                                className={styles.CatImg}
                                style={{
                                    transform: `translateX(${imgX}px)`,
                                }}
                            />
                            <a href="/" className="text-white">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke-width="1.5"
                                    stroke="currentColor"
                                    className={styles.catBodyItemIcon}
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                                    />
                                </svg>
                            </a>
                        </div>
                        <div
                            className={`${styles.CatItem} text-white`}
                            onMouseMove={mouseOverAnimation}
                        >
                            <h3 className={styles.CatItemTitle}>Web Design</h3>
                            <img
                                src="https://img.freepik.com/premium-vector/xtreme-colorful-illustration-man-gamer-manager-distant-remote-work-internet-marketer-designer-freelancer-sits-computer-cyber-power-fluid-telework-web-design-business_191130-20.jpg?w=2000"
                                className={styles.CatImg}
                                style={{
                                    transform: `translateX(${imgX}px)`,
                                }}
                            />
                            <a href="/" className="text-white">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke-width="1.5"
                                    stroke="currentColor"
                                    className={styles.catBodyItemIcon}
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                                    />
                                </svg>
                            </a>
                        </div>
                        <div
                            className={`${styles.CatItem} text-white`}
                            onMouseMove={mouseOverAnimation}
                        >
                            <h3 className={styles.CatItemTitle}>Web Development</h3>
                            <img
                                src="https://cdni.iconscout.com/illustration/premium/thumb/web-development-1793920-1519784.png"
                                className={styles.CatImg}
                                style={{
                                    transform: `translateX(${imgX}px)`,
                                }}
                            />
                            <a href="/" className="text-white">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke-width="1.5"
                                    stroke="currentColor"
                                    className={styles.catBodyItemIcon}
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                                    />
                                </svg>
                            </a>
                        </div>
                        <div
                            className={`${styles.CatItem} text-white`}
                            onMouseMove={mouseOverAnimation}
                        >
                            <h3 className={styles.CatItemTitle}>Android App</h3>
                            <img
                                src="https://applover.com/wp-content/uploads/2020/09/Featured-image-%E2%80%93-920x415_-Whats-the-cost-to-develop-an-Android-mobile-app.svg"
                                className={styles.CatImg}
                                style={{
                                    transform: `translateX(${imgX}px)`,
                                }}
                            />
                            <a href="/" className="text-white">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke-width="1.5"
                                    stroke="currentColor"
                                    className={styles.catBodyItemIcon}
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                                    />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
