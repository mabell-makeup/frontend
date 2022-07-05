import React from 'react';
import { TextButton } from './TextButton';
import { render, screen } from '@testing-library/react';

describe('Button', () => {
    test('ラベルが表示されている', () => {
        render(<TextButton label="ボタン"/>);

        const linkElement = screen.getByText("ボタン");
        expect(linkElement).toBeInTheDocument();
    });
});