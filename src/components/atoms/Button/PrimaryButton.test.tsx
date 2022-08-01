import { render, screen } from "@testing-library/react"
import { PrimaryButton } from "./PrimaryButton"

describe("Button", () => {
    test("ラベルが表示されている", () => {
        render(<PrimaryButton>ボタン</PrimaryButton>)

        const linkElement = screen.getByText("ボタン")
        expect(linkElement).toBeInTheDocument()
    })
})
