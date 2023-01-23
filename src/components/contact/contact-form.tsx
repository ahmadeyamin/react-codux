import styles from './contact-form.module.scss';

export interface ContactFormProps {
    className?: string;
}

export const ContactForm = ({ className }: ContactFormProps) => {
    return (
        <div className={`${styles.root} ${className}`}>
            <div className={`container ${styles.ContactFormWrapper}`}>
                <div className={styles.ContactForm}>
                    <div />
                    <div />
                </div>
            </div>
        </div>
    );
};
