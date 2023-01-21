import styles from './project-section.module.scss';

export interface ProjectSectionProps {
    className?: string;
}

export const ProjectSection = ({ className }: ProjectSectionProps) => {
    return (
        <div className={`${styles.root} ${className}`}>
            <div className={`${styles.projectWrapper} container`}>
                <div className={styles.ProjectHeader}>
                    <div className={styles.projectHeadLeft}>
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
                    <div className={`${styles.CatLinks} ${styles.projectHeadRight}`}>
                        <p className="text-white lato">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
                            mollitia, molestiae quas vel sint commodi repudiandae consequuntur
                            voluptatum laborum numquam blanditiis harum quisquam eius sed odit
                            fugiat iusto fuga praesentium optio, eaque rerum! Provident similique
                            accusantium nemo autem.
                        </p>
                    </div>
                </div>
                <div className={styles.ProjectList}>
                    <a href="" className={styles.ProjectItem}>
                        <div className="text-white">
                            <img
                                src="https://cdn.dribbble.com/users/2556800/screenshots/18376643/media/fff1264c097e21ce2a385c76d9bbf0af.png"
                                className={styles.ProjectItemImg}
                            />
                            <div className={styles.ProjectItemText}>
                                <h2>Heading 2</h2>
                                <p>This is a paragraph.</p>
                            </div>
                        </div>
                    </a>
                    <a href="" className={styles.ProjectItem}>
                        <div className="text-white">
                            <img
                                src="https://cdn.dribbble.com/userupload/4058286/file/original-a0bb6c3570ee0587fda14df0f46bf1d7.png"
                                className={styles.ProjectItemImg}
                            />
                            <div className={styles.ProjectItemText}>
                                <h2>Heading 2</h2>
                                <p>This is a paragraph.</p>
                            </div>
                        </div>
                    </a>
                    <a href="" className={styles.ProjectItem}>
                        <div className="text-white">
                            <img
                                src="https://cdn.dribbble.com/userupload/4360370/file/original-154494d1adad32c872a1c23c87cad9e4.png"
                                className={styles.ProjectItemImg}
                            />
                            <div className={styles.ProjectItemText}>
                                <h2>Heading 2</h2>
                                <p>This is a paragraph.</p>
                            </div>
                        </div>
                    </a>
                    <a href="" className={styles.ProjectItem}>
                        <div className="text-white">
                            <img
                                src="https://cdn.dribbble.com/userupload/4357182/file/original-c6481fe8acb72872d6e4841228c651dd.png"
                                className={styles.ProjectItemImg}
                            />
                            <div className={styles.ProjectItemText}>
                                <h2>Heading 2</h2>
                                <p>This is a paragraph.</p>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    );
};
