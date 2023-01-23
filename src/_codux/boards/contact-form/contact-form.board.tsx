import { createBoard } from '@wixc3/react-board';
import { ContactForm } from '../../../components/contact/contact-form';

export default createBoard({
    name: 'ContactForm',
    Board: () => <ContactForm />
});
