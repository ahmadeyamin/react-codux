import { createBoard } from '@wixc3/react-board';
import { HeroSection } from '../../../../components/home/hero-section/hero-section';

export default createBoard({
    name: 'HeroSection',
    Board: () => <HeroSection />,
    environmentProps: {
        windowBackgroundColor: '#161513',
        windowWidth: 1920,
        windowHeight: 1080
    }
});
