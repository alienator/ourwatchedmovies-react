import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';

import Finder from './Finder';

describe('Finder', () => {
    it('should render finer', () => {
        render(<Finder />);

        const find = screen.getByLabelText(/find/i);
        expect(find).toBeVisible();
    });
});
