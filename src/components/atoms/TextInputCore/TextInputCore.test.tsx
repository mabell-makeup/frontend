import { fireEvent, render, screen } from "@testing-library/react"
import { TextInputCore } from "./TextInputCore"

describe("Button", () => {
    test("プレースホルダが表示されている", () => {
        const testText = "プレースホルダ"
        render(<TextInputCore placeholder={testText} />)

        const input = screen.getByRole("textbox")
        expect(input).toHaveAttribute("placeholder", testText)
    })

    test("onChangeで入力情報を取得できる", () => {
        const testText = "入力内容"
        const onChange = jest.fn()
        render(<TextInputCore onChange={onChange} />)
        const input = screen.getByRole("textbox")
        fireEvent.change(input, {target: {value: testText}})
        expect(onChange.mock.calls[0][0].target.value).toBe(testText)
    })
})