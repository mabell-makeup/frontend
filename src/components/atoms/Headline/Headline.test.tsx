import { render, screen } from "@testing-library/react"
import { Headline } from "./Headline"

describe("Headline", () => {
    test("ラベルが表示されている", () => {
        render(<Headline>見出し</Headline>)

        const linkElement = screen.getByText("見出し")
        expect(linkElement).toBeInTheDocument()
    })
})