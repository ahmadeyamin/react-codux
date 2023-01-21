import { createBoard } from '@wixc3/react-board';
import { ProjectSection } from '../../../components/home/project-section/project-section';

export default createBoard({
    name: 'ProjectSection',
    Board: () => <ProjectSection />,
    environmentProps: {
        windowWidth: 1100,
    },
});
