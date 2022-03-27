import React from 'react';
import { Button } from './Button';
import { render, screen } from '@testing-library/react';

describe('Button', () => {
    test('ラベルが表示されている', () => {
        render(<Button label="ボタン"/>);

        const linkElement = screen.getByText("ボタン");
        expect(linkElement).toBeInTheDocument();
    });
});