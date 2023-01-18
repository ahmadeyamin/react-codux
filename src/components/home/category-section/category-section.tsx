import styles from './category-section.module.scss';

export interface CategorySectionProps {
    className?: string;
}

export const CategorySection = ({ className }: CategorySectionProps) => {
    return <div className={`${styles.root} ${className}`}>
        <div className={`${styles.CatWrapper} container`}>
            <div className={styles.CatHeader}>
                <div className={styles.CatTitle}>
                    <div>
                        <h3 className={`${styles.CatTitleText} text-white`}>Projects that solve
                            <span className={styles.CatTextStyle}>
                                <span className={styles.emptyLine}></span>
                                problems, one
                            </span>
                            <span className={styles.colorText}>thing at a time</span>
                        </h3>
                    </div>
                </div>
                <div className={styles.CatLinks}>
                    <a href="/" className="btn bg-color">Get in touch</a>
                    <a href="/" className="btn outline">View all works</a>
                </div>
            </div></div>
    </div>;
};
