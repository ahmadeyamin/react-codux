import { createBoard } from '@wixc3/react-board';
import Contact from '../../../Contact';

export default createBoard({
    name: 'Contact',
    Board: () => <Contact />
});
