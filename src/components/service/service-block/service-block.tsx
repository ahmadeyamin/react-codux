import styles from './service-block.module.scss';

export interface ServiceBlockProps {
    className?: string;
}

export const ServiceBlock = ({ className }: ServiceBlockProps) => {
    return (
        <div className={`${styles.root} ${className}`}>
            <div className="container">
                <div className={styles.ServiceHeader}>
                    <h2 className={`text-white ${styles.HeaderTitle}`}>
                        Our <span className={styles.HeaderBGColor}>Services</span>
                    </h2>
                </div>
                <div className={styles.ServiceBody}>
                    <div className={styles.ServiceBodyItem}>
                        <div className={styles.ServiceBodyItemContent}>
                            <h2 className={`${styles.ServiceBodyItemTitle} text-white`}>Webflow</h2>
                            <p className="text-white">
                                Sed quibusdam recusandae alias error harum maxime adipisci amet
                                laborum. Perspiciatis minima nesciunt dolorem! Officiis iure rerum
                                voluptates a cumque velit{' '}
                            </p>
                            <a href="/" className="btn bg-color">
                                {'Hire me'}
                            </a>
                        </div>
                        <div className={styles.ServiceBodyItemImg}>
                            <img
                                src="https://bubble.io/blog/content/images/size/w2000/2020/05/webflow-bubble-review.png"
                                className={`img ${styles.ServiceImg}`}
                            />
                        </div>
                    </div>
                    <div className={styles.ServiceBodyItem}>
                        <div className={styles.ServiceBodyItemImg}>
                            <img
                                src="https://blog-frontend.envato.com/cdn-cgi/image/width=820,quality=75,format=auto/uploads/2020/04/SOC091_FreeTutsCourses_WebDesign@2x.png"
                                className={`img ${styles.ServiceImg}`}
                            />
                        </div>
                        <div className={styles.ServiceBodyItemContent}>
                            <h2 className={`${styles.ServiceBodyItemTitle} text-white`}>
                                Web Design
                            </h2>
                            <p className="text-white">
                                Sed quibusdam recusandae alias error harum maxime adipisci amet
                                laborum. Perspiciatis minima nesciunt dolorem! Officiis iure rerum
                                voluptates a cumque velit{' '}
                            </p>
                            <a href="/" className="btn bg-color">
                                {'Hire me'}
                            </a>
                        </div>
                    </div>
                    <div className={styles.ServiceBodyItem}>
                        <div className={styles.ServiceBodyItemContent}>
                            <h2 className={`${styles.ServiceBodyItemTitle} text-white`}>
                                Web Development
                            </h2>
                            <p className="text-white">
                                Sed quibusdam recusandae alias error harum maxime adipisci amet
                                laborum. Perspiciatis minima nesciunt dolorem! Officiis iure rerum
                                voluptates a cumque velit{' '}
                            </p>
                            <a href="/" className="btn bg-color">
                                {'Hire me'}
                            </a>
                        </div>
                        <div className={styles.ServiceBodyItemImg}>
                            <img
                                src="https://img.freepik.com/free-vector/web-development-programmer-engineering-coding-website-augmented-reality-interface-screens-developer-project-engineer-programming-software-application-design-cartoon-illustration_107791-3863.jpg"
                                className="img"
                            />
                        </div>
                    </div>
                    <div className={styles.ServiceBodyItem}>
                        <div className={styles.ServiceBodyItemImg}>
                            <img
                                src="https://img.freepik.com/free-vector/app-development-illustration_52683-47931.jpg"
                                className={`img ${styles.ServiceImg}`}
                            />
                        </div>
                        <div className={styles.ServiceBodyItemContent}>
                            <h2 className={`${styles.ServiceBodyItemTitle} text-white`}>
                                App Development
                            </h2>
                            <p className="text-white">
                                Sed quibusdam recusandae alias error harum maxime adipisci amet
                                laborum. Perspiciatis minima nesciunt dolorem! Officiis iure rerum
                                voluptates a cumque velit{' '}
                            </p>
                            <a href="/" className="btn bg-color">
                                {'Hire me'}
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
