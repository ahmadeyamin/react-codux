import styles from './project-section.module.scss';

export interface ProjectSectionProps {
    className?: string;
}

export const ProjectSection = ({ className }: ProjectSectionProps) => {
    return (
        <div className={`${styles.root} ${className}`}>
            <div className={`${styles.projectWrapper} container`}>
                <div className={styles.ProjectHeader}>
                    <div>
                        <div>
                            <h3 className={`${styles.CatTitleText} text-white`}>
                                Look at My
                                <span className={styles.CatTextStyle}>
                                    <span className={styles.emptyLine}></span>
                                    Awesome
                                </span>
                                <span className={styles.colorText}>Projects</span>
                            </h3>
                        </div>
                    </div>
                    <div className={styles.CatLinks}>
                        <p className="text-white">This is a paragraph.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};
