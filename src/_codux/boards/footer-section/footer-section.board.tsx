import { createBoard } from '@wixc3/react-board';
import { FooterSection } from '../../../components/footer-section/footer-section';

export default createBoard({
    name: 'FooterSection',
    Board: () => <FooterSection />
});
