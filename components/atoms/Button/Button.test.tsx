import { Button } from './Button';
// import { render } from "@testing-library/react";

describe('Button', () => {
    test('renders Buton component', () => {
        render(<Button label="ボタン"/>);

        screen.debug();
    });
});