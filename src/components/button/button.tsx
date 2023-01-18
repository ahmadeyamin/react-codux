import styles from './button.module.scss';

export interface ButtonProps {
    className?: string;
}

export const Button = ({ className }: ButtonProps) => {
    return <div className={`${styles.root} ${className}`}>
        <a href="/" className="btn">Link</a>
    </div>;
};
