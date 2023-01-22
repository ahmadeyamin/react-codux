import styles from './contact-section.module.scss';

export interface ContactSectionProps {
    className?: string;
}

export const ContactSection = ({ className }: ContactSectionProps) => {
    return (
        <div className={`${styles.root} ${className}`}>
            <div className={`container ${styles.ContactWrapper}`}>
                <div className={styles.ContactBox}>
                    <h2 className={`text-white ${styles.ContactTitle}`}>
                        Interssted in <br /> working with me?
                    </h2>
                    <a href="/" className="btn">
                        Get{'Get in touch'}
                    </a>
                </div>
            </div>
        </div>
    );
};
