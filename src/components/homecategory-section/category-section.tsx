import styles from './category-section.module.scss';

export interface CategorySectionProps {
    className?: string;
}

export const CategorySection = ({ className }: CategorySectionProps) => {
    return <div className={`${styles.root} ${className}`}>CategorySection</div>;
};
