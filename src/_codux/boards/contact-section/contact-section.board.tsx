import { createBoard } from '@wixc3/react-board';
import { ContactSection } from '../../../components/home/contact-section/contact-section';

export default createBoard({
    name: 'ContactSection',
    Board: () => <ContactSection />
});
