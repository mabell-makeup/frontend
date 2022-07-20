import React from 'react';
import { TextButton } from './TextButton';
import { render, screen } from '@testing-library/react';

describe('Button', () => {
    test('ラベルが表示されている', () => {
        render(<TextButton>ボタン</TextButton>);

        const linkElement = screen.getByText("ボタン");
        expect(linkElement).toBeInTheDocument();
    });
});