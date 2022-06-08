import { render, screen } from '@testing-library/react';
import { Headline } from './Headline';

describe('Headline', () => {
    test('ラベルが表示されている', () => {
        render(<Headline headlineText="見出し"/>);

        const linkElement = screen.getByText("見出し");
        expect(linkElement).toBeInTheDocument();
    });
});