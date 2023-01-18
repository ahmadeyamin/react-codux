import { createBoard } from '@wixc3/react-board';
import { CategorySection } from '../../../../components/home/category-section/category-section';

export default createBoard({
    name: 'CategorySection',
    Board: () => <CategorySection />
});
