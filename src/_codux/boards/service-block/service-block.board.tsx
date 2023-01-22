import { createBoard } from '@wixc3/react-board';
import { ServiceBlock } from '../../../components/service/service-block/service-block';

export default createBoard({
    name: 'ServiceBlock',
    Board: () => <ServiceBlock />
});
