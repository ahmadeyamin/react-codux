import { createBoard } from '@wixc3/react-board';
import Service from '../../../Service';

export default createBoard({
    name: 'Service',
    Board: () => <Service />
});
