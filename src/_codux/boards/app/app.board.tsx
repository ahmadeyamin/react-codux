import { createBoard } from '@wixc3/react-board';
import App from '../../../App';

export default createBoard({
    name: 'App',
    Board: () => <App />,
    environmentProps: {
        windowBackgroundColor: '#161513',
        windowHeight: 1024,
        windowWidth: 1452,
        canvasWidth: 864
    }
});
