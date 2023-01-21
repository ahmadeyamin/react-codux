import { createBoard } from '@wixc3/react-board';
import { AboutComponent } from '../../../components/home/about-component/about-component';

export default createBoard({
    name: 'AboutComponent',
    Board: () => <AboutComponent />
});
