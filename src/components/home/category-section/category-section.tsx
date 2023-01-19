import { useEffect, useState } from 'react';
import styles from './category-section.module.scss';

export interface CategorySectionProps {
    className?: string;
}

export const CategorySection = ({ className }: CategorySectionProps) => {
    const [imgX, setImgX] = useState(0);
    const [imgY, setImgY] = useState(0);

    useEffect(() => {}, []);

    function mouseOverAnimation(e: any) {
        // e.target.style.background = 'red';
        console.log(e);
        // imgX.
        setImgX(e.clientX / 3);
        // setImgY(e.screenY)
        // setState
        // console.log(e.children.);
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
                                src="https://placekitten.com/640/360"
                                className={styles.CatImg}
                                style={{
                                    transform: `translateX(${imgX}px) translateY(${imgY}px)`,
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
                                src="https://loremflickr.com/640/360"
                                className={styles.CatImg}
                                style={{
                                    transform: `translateX(${imgX}px) translateY(${imgY}px)`,
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
                                src="https://picsum.photos/200/300"
                                className={styles.CatImg}
                                style={{
                                    transform: `translateX(${imgX}px) translateY(${imgY}px)`,
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
                                src="https://baconmockup.com/640/360"
                                className={styles.CatImg}
                                style={{
                                    transform: `translateX(${imgX}px) translateY(${imgY}px)`,
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
